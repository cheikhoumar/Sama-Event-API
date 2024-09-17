import * as server from '../entries/pages/admin/event/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/event/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/event/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.CVl2Y4Gb.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.w9gK3Rx0.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/date-time.formatter.MppD4vc1.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Badge.XnCSpYGq.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/Checkbox.8zBQxmcH.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/ExclamationCircleOutline.C-zkacHp.js","_app/immutable/chunks/Pagination.BqOkK-u1.js","_app/immutable/chunks/A.DUGD9iSR.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/P.CQZbmQ1E.js","_app/immutable/chunks/CalendarMonthSolid.7F4bqAa3.js","_app/immutable/chunks/CheckSolid.BTWMbPVw.js"];
export const stylesheets = [];
export const fonts = [];
