import { c as configExports } from './config-CY2m_ASs.js';
import { r as redisClient } from './redis-C557Awmd.js';
import { f as fail, r as redirect } from './index-Ddp2AB5f.js';
import { j as jwt } from './index-DwlnlXm1.js';
import 'dotenv';
import 'path';
import 'redis';
import './index-C3W_Ok8n.js';
import 'buffer';
import 'stream';
import 'util';
import 'crypto';

const load$1 = async (event) => {
  return { email: event.url.searchParams.get("email") };
};

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load$1
});

const load = async () => {
  return {};
};
const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const otp = data.get("otp");
    if (!otp || otp.length < 6) {
      return fail(400, { message: "OTP length must be 6 character" });
    }
    try {
      const response = await event.fetch(`${configExports.config.server.baseUrl}api/auth/admin/login`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "user-agent": "Admin-Panel"
        },
        body: JSON.stringify({ otp })
      });
      const json = await response.json();
      if (response.status > 299) return fail(json.statusCode, { message: json.message });
      const { sub } = jwt.verify(json.refreshToken, configExports.config.security.refreshTokenKey);
      await redisClient.set(json.refreshToken, JSON.stringify({ id: sub }), {
        EX: configExports.config.security.refreshTokenTTL
      });
      event.cookies.set("refreshToken", json.refreshToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "strict",
        path: "/"
      });
      event.cookies.set("accessToken", json.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "strict",
        path: "/"
      });
    } catch (e) {
      console.error(e);
      return fail(500, { message: "Unknown Error" });
    }
    return redirect(303, "/admin");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 17;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-wPUEMzqk.js')).default;
const universal_id = "src/routes/auth/email/otp/+page.ts";
const server_id = "src/routes/auth/email/otp/+page.server.ts";
const imports = ["_app/immutable/nodes/17.C_wnH3fR.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/Alert.BGCmzfzt.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/Input.DjV6Ntai.js","_app/immutable/chunks/Wrapper.Dkm7VoO3.js","_app/immutable/chunks/A.DUGD9iSR.js","_app/immutable/chunks/ArrowLeftSolid.DiL8lSSI.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets, _page_ts as universal, universal_id };
//# sourceMappingURL=17-CZ1ixf1T.js.map
