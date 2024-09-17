import * as server from '../entries/pages/admin/setting/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/setting/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/setting/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.CTr_wiph.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/InputAddon.CyuPLKwj.js","_app/immutable/chunks/Input.DjV6Ntai.js","_app/immutable/chunks/Wrapper.Dkm7VoO3.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/Toast.CwzxZqjj.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/CheckSolid.BTWMbPVw.js","_app/immutable/chunks/CloseSolid.Dk3EYOZw.js","_app/immutable/chunks/GearSolid.CUVhuRwp.js"];
export const stylesheets = [];
export const fonts = [];
