import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { f as fail } from './index-Ddp2AB5f.js';
import { u as userImageUrl } from './config-CY2m_ASs.js';
import 'dotenv';
import 'path';

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C-I3Zf6R.js')).default;
const server_id = "src/routes/admin/user/+page.server.ts";
const imports = ["_app/immutable/nodes/12.DMZdFkrn.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.w9gK3Rx0.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.BD_FEE17.js","_app/immutable/chunks/date-time.formatter.MppD4vc1.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Avatar.BErVGyWZ.js","_app/immutable/chunks/Badge.XnCSpYGq.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/InputAddon.CyuPLKwj.js","_app/immutable/chunks/Input.DjV6Ntai.js","_app/immutable/chunks/Wrapper.Dkm7VoO3.js","_app/immutable/chunks/Checkbox.8zBQxmcH.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/ExclamationCircleOutline.C-zkacHp.js","_app/immutable/chunks/Pagination.BqOkK-u1.js","_app/immutable/chunks/Toast.CwzxZqjj.js","_app/immutable/chunks/A.DUGD9iSR.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/P.CQZbmQ1E.js","_app/immutable/chunks/CheckSolid.BTWMbPVw.js","_app/immutable/chunks/CloseSolid.Dk3EYOZw.js","_app/immutable/chunks/UserSolid.BRLQT1-W.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=12-ItWFJse4.js.map
