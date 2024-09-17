import { a as sendWithdrawRequestNotification } from './notification-sender-CnDBypD_.js';
import { f as fail } from './index-Ddp2AB5f.js';
import './currency.formatter-Bv784HBn.js';

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C7o-uPvi.js')).default;
const server_id = "src/routes/admin/withdraw/+page.server.ts";
const imports = ["_app/immutable/nodes/14.Bj3-Z2bc.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.w9gK3Rx0.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/currency.formatter.BzrfWP4a.js","_app/immutable/chunks/date-time.formatter.MppD4vc1.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Badge.XnCSpYGq.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/ExclamationCircleOutline.C-zkacHp.js","_app/immutable/chunks/Pagination.BqOkK-u1.js","_app/immutable/chunks/Toast.CwzxZqjj.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/P.CQZbmQ1E.js","_app/immutable/chunks/CheckSolid.BTWMbPVw.js","_app/immutable/chunks/CloseSolid.Dk3EYOZw.js","_app/immutable/chunks/DollarSolid.CZo0Nw2R.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-Bhck_OCq.js.map
