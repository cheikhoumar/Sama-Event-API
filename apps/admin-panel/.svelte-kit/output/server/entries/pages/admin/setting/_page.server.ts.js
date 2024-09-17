import "../../../../chunks/config.js";
import { c as currencyPrefix } from "../../../../chunks/currency.formatter.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { f as fail } from "../../../../chunks/index.js";
import { hash } from "bcrypt";
import { r as redisClient } from "../../../../chunks/redis.js";
import { config } from "@backtix-service/config";
const load = async ({ locals }) => {
  const withdrawFee = {
    id: 0,
    amount: Number(
      await redisClient.get(config.withdraw.feeKey) ?? (await prisma.withdrawFee.findFirst({ where: { id: 0 } })).amount
    )
  };
  return { myUser: locals.user, withdrawFee, currencyPrefix };
};
const actions = {
  updateFee: async ({ request }) => {
    const { fee } = Object.fromEntries(await request.formData());
    try {
      const adminFee = await prisma.withdrawFee.upsert({
        create: { amount: Number(fee) },
        update: { amount: { set: Number(fee) } },
        where: { id: 0 }
      });
      await redisClient.set(config.withdraw.feeKey, adminFee.amount);
      return { success: true, message: "Update fee successful" };
    } catch (e) {
      console.error(e);
      return fail(500, { success: false, message: "Unknown error" });
    }
  },
  updateMyProfile: async ({ request, locals }) => {
    const form = Object.fromEntries(await request.formData());
    const { confirm_password, password, ...data } = form;
    try {
      if (confirm_password !== password) {
        return fail(400, {
          success: false,
          message: "Password confirmation doesn't match",
          ...form
        });
      }
      locals.user = await prisma.user.update({
        where: { id: locals.user.id },
        data: {
          ...data,
          password: password ? await hash(password, config.security.bcryptSaltOrRound) : void 0
        }
      });
      return { success: true, message: "Profile edit success." };
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code === "P2002") {
        return fail(409, { success: false, message: "Username/Email has been registered", ...form });
      }
      console.error(e);
      return fail(500, { success: false, message: "Unknown error", ...form });
    }
  }
};
export {
  actions,
  load
};
