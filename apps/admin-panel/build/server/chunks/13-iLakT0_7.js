import { c as configExports } from './config-CY2m_ASs.js';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { e as error, f as fail, r as redirect } from './index-Ddp2AB5f.js';
import { b as bcryptExports } from './bcrypt-CseKjho2.js';
import 'dotenv';
import 'path';
import 'url';
import 'fs';
import 'mock-aws-s3';
import 'os';
import 'aws-sdk';
import 'nock';
import 'stream';
import 'util';
import 'events';
import './index-C3W_Ok8n.js';
import 'buffer';
import 'assert';
import 'child_process';
import 'crypto';

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
          password: await bcryptExports.hash(password, configExports.config.security.bcryptSaltOrRound)
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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ClDXXbFL.js')).default;
const server_id = "src/routes/admin/user/new/+page.server.ts";
const imports = ["_app/immutable/nodes/13.CoI5pXVu.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/Alert.BGCmzfzt.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/InputAddon.CyuPLKwj.js","_app/immutable/chunks/Input.DjV6Ntai.js","_app/immutable/chunks/Wrapper.Dkm7VoO3.js","_app/immutable/chunks/Checkbox.8zBQxmcH.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/P.CQZbmQ1E.js","_app/immutable/chunks/UserSolid.BRLQT1-W.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=13-iLakT0_7.js.map
