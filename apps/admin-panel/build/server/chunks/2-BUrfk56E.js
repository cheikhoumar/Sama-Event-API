import { c as configExports, u as userImageUrl } from './config-CY2m_ASs.js';
import 'dotenv';
import 'path';

const load = async ({ url, locals }) => {
  return {
    links: { openApi: `${configExports.config.server.baseUrl}api/docs` },
    activeUrl: url.pathname,
    my: {
      ...locals.user,
      image: locals.user.image ? userImageUrl(locals.user.image) : void 0
    }
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-Be16DZjx.js')).default;
const server_id = "src/routes/admin/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.BtQnNNo-.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/DarkMode.KMH2Rykq.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/Avatar.BErVGyWZ.js","_app/immutable/chunks/Badge.XnCSpYGq.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/Popper.DqrEMegU.js","_app/immutable/chunks/A.DUGD9iSR.js","_app/immutable/chunks/CalendarMonthSolid.7F4bqAa3.js","_app/immutable/chunks/CheckSolid.BTWMbPVw.js","_app/immutable/chunks/CloseSolid.Dk3EYOZw.js","_app/immutable/chunks/DollarSolid.CZo0Nw2R.js","_app/immutable/chunks/GearSolid.CUVhuRwp.js","_app/immutable/chunks/UserSolid.BRLQT1-W.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-BUrfk56E.js.map
