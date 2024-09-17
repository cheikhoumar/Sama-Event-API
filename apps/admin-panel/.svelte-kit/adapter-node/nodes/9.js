import * as server from '../entries/pages/admin/event/_id_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/event/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/event/[id]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.DdKJ54Q7.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/currency.formatter.BzrfWP4a.js","_app/immutable/chunks/date-time.formatter.MppD4vc1.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Avatar.BErVGyWZ.js","_app/immutable/chunks/Badge.XnCSpYGq.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/Card.C2ctiAsH.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/ExclamationCircleOutline.C-zkacHp.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/P.CQZbmQ1E.js","_app/immutable/chunks/CalendarMonthSolid.7F4bqAa3.js"];
export const stylesheets = [];
export const fonts = [];
