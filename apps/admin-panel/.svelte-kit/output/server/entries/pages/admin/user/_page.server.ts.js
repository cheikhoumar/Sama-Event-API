import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { f as fail } from "../../../../chunks/index.js";
import { u as userImageUrl } from "../../../../chunks/config.js";
const perPage = 20;
const load = async ({ url, locals }) => {
  const group = url.searchParams.get("group");
  const deleted = url.searchParams.get("deleted");
  const page = Number(url.searchParams.get("page"));
  const users = (await prisma.user.findMany({
    where: {
      groups: group ? { has: group } : void 0,
      deletedAt: deleted ? deleted === "true" ? { not: null } : null : void 0
    },
    skip: page * perPage,
    take: perPage
  })).map((e) => ({ ...e, image: e.image ? userImageUrl(e.image) : void 0 }));
  return { users, group, deleted, page, my: locals.user };
};
const actions = {
  edit: async ({ request }) => {
    try {
      const { id, group, activated, ...data } = Object.fromEntries(await request.formData());
      const groups = group.split(",");
      await prisma.user.update({
        where: { id },
        data: { ...data, groups, activated: activated === "true" }
      });
      return { success: true, message: "User edit success." };
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code === "P2002") {
        return fail(409, { success: false, message: "Username/Email has been registered" });
      }
      console.error(e);
      return fail(500, { success: false, message: "Unknown error" });
    }
  },
  delete: async ({ request }) => {
    try {
      const { id } = Object.fromEntries(await request.formData());
      await prisma.user.update({
        where: { id },
        data: {
          id: `${id}_|_DELETED`,
          deletedAt: { set: (/* @__PURE__ */ new Date()).toISOString() }
        }
      });
      return { success: true, message: "User delete success." };
    } catch (e) {
      console.error(e);
      return fail(500, { success: false, message: "Unknown error" });
    }
  },
  restore: async ({ request }) => {
    try {
      const { id } = Object.fromEntries(await request.formData());
      await prisma.user.update({
        where: { id },
        data: {
          id: id.split("_|_")[0],
          deletedAt: null
        }
      });
      return { success: true, message: "User restore success." };
    } catch (e) {
      console.error(e);
      return fail(500, { success: false, message: "Unknown error" });
    }
  }
  // deletePermanent: async ({ request }) => {
  // 	try {
  // 		const { id } = Object.fromEntries(await request.formData()) as {
  // 			id: string
  // 		}
  // 		await prisma.$transaction([
  // 			prisma.userBalance.delete({ where: { userId: id } }),
  // 			prisma.user.delete({ where: { id } })
  // 		])
  // 		return { success: true, message: 'Successfully delete user permanently.' }
  // 	} catch (e) {
  // 		console.error(e)
  // 		return fail(500, { success: false, message: 'Unknown error' })
  // 	}
  // }
};
export {
  actions,
  load
};
