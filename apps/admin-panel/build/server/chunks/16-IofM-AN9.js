import { c as configExports } from './config-CY2m_ASs.js';
import { f as fail, r as redirect } from './index-Ddp2AB5f.js';
import 'dotenv';
import 'path';

const load = async () => {
  return {};
};
const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const email = data.get("email");
    if (!email || email.length < 5) {
      return fail(400, { message: "Invalid email" });
    }
    try {
      const response = await event.fetch(`${configExports.config.server.baseUrl}api/auth/admin/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "user-agent": "Admin-Panel"
        },
        body: JSON.stringify({ email })
      });
      const json = await response.json();
      console.log(json);
      if (response.status > 299) return fail(json.statusCode, { message: json.message });
    } catch (e) {
      console.error(e);
      return fail(500, { message: "Error" });
    }
    redirect(303, `/auth/email/otp?email=${email}`);
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 16;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BAqraiUs.js')).default;
const server_id = "src/routes/auth/email/+page.server.ts";
const imports = ["_app/immutable/nodes/16.Gev6XzPS.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/Alert.BGCmzfzt.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/Input.DjV6Ntai.js","_app/immutable/chunks/Wrapper.Dkm7VoO3.js","_app/immutable/chunks/ArrowLeftSolid.DiL8lSSI.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=16-IofM-AN9.js.map
