import { a as sendWithdrawRequestNotification } from "../../../../chunks/notification-sender.js";
import { f as fail } from "../../../../chunks/index.js";
const perPage = 20;
const load = async ({ url }) => {
  const status = url.searchParams.get("status");
  const page = Number(url.searchParams.get("page"));
  const withdraws = await prisma.withdrawRequest.findMany({
    where: { status: status ?? void 0 },
    include: { user: true },
    skip: page * perPage,
    take: perPage,
    orderBy: { updatedAt: "desc" }
  });
  const withdrawalFee = (await prisma.withdrawFee.findFirst({ where: { id: 0 } })).amount ?? 0;
  return { withdraws, status, page, withdrawalFee };
};
const actions = {
  confirm: async ({ request }) => {
    try {
      const { id } = Object.fromEntries(await request.formData());
      const withdrawRequest = await prisma.withdrawRequest.update({
        where: { id },
        data: { status: "COMPLETED" }
      });
      await sendWithdrawRequestNotification(withdrawRequest);
      return { success: true, message: "Successful confirmation" };
    } catch (e) {
      console.error(e);
      return fail(500, { success: false, message: "Unknown error" });
    }
  },
  reject: async ({ request }) => {
    try {
      const { id } = Object.fromEntries(await request.formData());
      const withdrawRequest = await prisma.$transaction(async (tx) => {
        const [{ amount: withdrawalFee }, wd] = await Promise.all([
          tx.withdrawFee.findFirst({ where: { id: 0 } }),
          tx.withdrawRequest.update({
            where: { id },
            data: { status: "REJECTED" }
          })
        ]);
        await tx.userBalance.update({
          where: { userId: wd.userId },
          data: wd.from === "BALANCE" ? { balance: { increment: wd.amount + withdrawalFee } } : { revenue: { increment: wd.amount + withdrawalFee } }
        });
        return wd;
      });
      await sendWithdrawRequestNotification(withdrawRequest);
      return { success: true, message: "Successfully resisted withdrawal" };
    } catch (e) {
      console.error(e);
      return fail(500, { success: false, message: "Unknown error" });
    }
  },
  cancel: async ({ request }) => {
    try {
      const { id } = Object.fromEntries(await request.formData());
      const withdrawRequest = await prisma.$transaction(async (tx) => {
        const withdrawalFee = (await prisma.withdrawFee.findFirst({ where: { id: 0 } })).amount ?? 0;
        const { status } = await tx.withdrawRequest.findUniqueOrThrow({
          where: { id },
          select: { status: true }
        });
        const wd = await tx.withdrawRequest.update({
          where: { id },
          data: { status: "PENDING" }
        });
        const { userId, from, amount } = wd;
        if (status === "REJECTED") {
          const { balance, revenue } = await tx.userBalance.findUniqueOrThrow({
            where: { userId },
            select: { balance: true, revenue: true }
          });
          const totalAmount = amount + withdrawalFee;
          if (from === "BALANCE") {
            await tx.userBalance.update({
              where: { userId },
              data: { balance: totalAmount <= balance ? { decrement: totalAmount } : { set: 0 } }
            });
          } else {
            await tx.userBalance.update({
              where: { userId },
              data: { revenue: totalAmount <= revenue ? { decrement: totalAmount } : { set: 0 } }
            });
          }
        }
        return wd;
      });
      await sendWithdrawRequestNotification(withdrawRequest);
      return { success: true, message: "Successfully undo withdrawal status" };
    } catch (e) {
      console.error(e);
      return fail(500, { success: false, message: "Unknown error" });
    }
  }
};
export {
  actions,
  load
};
