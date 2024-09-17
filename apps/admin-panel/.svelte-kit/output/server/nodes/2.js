import * as server from '../entries/pages/admin/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.BtQnNNo-.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/DarkMode.KMH2Rykq.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/Avatar.BErVGyWZ.js","_app/immutable/chunks/Badge.XnCSpYGq.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/Popper.DqrEMegU.js","_app/immutable/chunks/A.DUGD9iSR.js","_app/immutable/chunks/CalendarMonthSolid.7F4bqAa3.js","_app/immutable/chunks/CheckSolid.BTWMbPVw.js","_app/immutable/chunks/CloseSolid.Dk3EYOZw.js","_app/immutable/chunks/DollarSolid.CZo0Nw2R.js","_app/immutable/chunks/GearSolid.CUVhuRwp.js","_app/immutable/chunks/UserSolid.BRLQT1-W.js"];
export const stylesheets = [];
export const fonts = [];
