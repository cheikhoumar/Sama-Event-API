import "../../../../../chunks/config.js";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { e as error, f as fail, r as redirect } from "../../../../../chunks/index.js";
import { hash } from "bcrypt";
import { config } from "@backtix-service/config";
const load = async ({ locals }) => {
  if (!locals.user.groups.some((v) => v === "SUPERADMIN" || v === "ADMIN")) {
    throw error(403, "Forbidden");
  }
  return { my: locals.user };
};
const actions = {
  default: async ({ request }) => {
    const { password, confirm_password, ...form } = Object.fromEntries(
      await request.formData()
    );
    const { group, activate, ...data } = form;
    try {
      if (confirm_password !== password) {
        return fail(400, {
          success: false,
          message: "Password confirmation doesn't match",
          ...form
        });
      }
      const groups = group ? group.split(",") : void 0;
      await prisma.user.create({
        data: {
          ...data,
          groups,
          activated: activate === "true",
          password: await hash(password, config.security.bcryptSaltOrRound)
        }
      });
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code === "P2002") {
        return fail(409, { success: false, message: "Username/Email has been registered", ...form });
      }
      console.error(e);
      return fail(500, { success: false, message: "Unknown error", ...form });
    }
    return redirect(303, encodeURI("/admin/user?success=true&message=New User Added Succesfully"));
  }
};
export {
  actions,
  load
};
