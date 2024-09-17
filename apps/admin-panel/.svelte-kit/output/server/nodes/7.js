import * as server from '../entries/pages/admin/dashboard/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.BrjflVoA.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/stores.BD_FEE17.js","_app/immutable/chunks/entry.w9gK3Rx0.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/currency.formatter.BzrfWP4a.js","_app/immutable/chunks/date-time.formatter.MppD4vc1.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/Card.C2ctiAsH.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/10.DHKuf58j.js","_app/immutable/chunks/Popper.DqrEMegU.js","_app/immutable/chunks/Wrapper.Dkm7VoO3.js","_app/immutable/chunks/Heading.BXZJ_QtE.js"];
export const stylesheets = [];
export const fonts = [];
