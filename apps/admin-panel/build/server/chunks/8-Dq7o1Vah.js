import { s as sendEventStatusNotification } from './notification-sender-CnDBypD_.js';
import { r as redirect } from './index-Ddp2AB5f.js';
import './currency.formatter-Bv784HBn.js';

const perPage = 20;
const load = async ({ url }) => {
  const status = url.searchParams.get("status");
  const deleted = url.searchParams.get("deleted");
  const page = Number(url.searchParams.get("page"));
  const events = await prisma.event.findMany({
    where: {
      status: status ? status : void 0,
      deletedAt: deleted === "true" ? { not: null } : null
    },
    include: { user: true },
    skip: page * perPage,
    take: perPage,
    orderBy: { updatedAt: "desc" }
  });
  return { events, status, deleted, page };
};
const actions = {
  approve: async ({ request }) => {
    const { selectedIds } = Object.fromEntries(await request.formData());
    const eventIds = selectedIds ? selectedIds.split(",") : [];
    await prisma.event.updateMany({
      where: { id: { in: eventIds } },
      data: { status: "PUBLISHED" }
    });
    sendNotifications(eventIds, "PUBLISHED");
    redirect(303, "/admin/event?status=PUBLISHED");
  },
  reject: async ({ request }) => {
    const { selectedIds } = Object.fromEntries(await request.formData());
    const eventIds = selectedIds ? selectedIds.split(",") : [];
    await prisma.event.updateMany({
      where: { id: { in: eventIds } },
      data: { status: "REJECTED" }
    });
    sendNotifications(eventIds, "REJECTED");
    redirect(303, "/admin/event?status=REJECTED");
  }
};
async function sendNotifications(eventIds, status) {
  const events = await prisma.event.findMany({
    where: {
      id: { in: eventIds },
      status
    },
    select: { id: true, name: true, userId: true }
  });
  Promise.all(
    events.map(
      ({ id, name, userId }) => sendEventStatusNotification({
        eventId: id,
        userId,
        eventName: name,
        status
      })
    )
  );
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DKDKEXZ-.js')).default;
const server_id = "src/routes/admin/event/+page.server.ts";
const imports = ["_app/immutable/nodes/8.CVl2Y4Gb.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.w9gK3Rx0.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/date-time.formatter.MppD4vc1.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Badge.XnCSpYGq.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/Checkbox.8zBQxmcH.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/ExclamationCircleOutline.C-zkacHp.js","_app/immutable/chunks/Pagination.BqOkK-u1.js","_app/immutable/chunks/A.DUGD9iSR.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/P.CQZbmQ1E.js","_app/immutable/chunks/CalendarMonthSolid.7F4bqAa3.js","_app/immutable/chunks/CheckSolid.BTWMbPVw.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-Dq7o1Vah.js.map
