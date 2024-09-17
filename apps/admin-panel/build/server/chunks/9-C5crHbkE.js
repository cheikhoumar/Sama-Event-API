import { e as eventImageUrl, t as ticketImageUrl, u as userImageUrl } from './config-CY2m_ASs.js';
import { s as sendEventStatusNotification } from './notification-sender-CnDBypD_.js';
import { r as redirect } from './index-Ddp2AB5f.js';
import 'dotenv';
import 'path';
import './currency.formatter-Bv784HBn.js';

const load = async ({ params }) => {
  const event = await prisma.event.findUnique({
    where: { id: params.id },
    include: {
      images: true,
      user: true,
      tickets: {
        include: {
          _count: {
            select: {
              purchases: { where: { status: "COMPLETED" } }
            }
          }
        }
      }
    }
  });
  const images = event?.images.map((e) => ({
    alt: e.description,
    src: eventImageUrl.concat(e.image),
    title: e.image
  }));
  const tickets = event?.tickets.map((e) => ({
    ...e,
    src: ticketImageUrl.concat(e.image)
  }));
  const ticketPurchases = await prisma.purchase.findMany({
    where: { ticket: { eventId: params.id } },
    include: {
      user: { select: { username: true } },
      ticket: { select: { name: true } }
    }
  });
  const userImage = event?.user.image ? userImageUrl(event?.user.image) : void 0;
  return { event, images, tickets, userImage, ticketPurchases };
};
const actions = {
  approve: async ({ request }) => {
    const { id } = Object.fromEntries(await request.formData());
    const {
      id: eventId,
      name,
      userId
    } = await prisma.event.update({
      where: { id },
      data: { status: "PUBLISHED" },
      select: { id: true, name: true, userId: true }
    });
    sendEventStatusNotification({
      eventId,
      userId,
      eventName: name,
      status: "PUBLISHED"
    });
    redirect(303, "/admin/event?status=PUBLISHED");
  },
  reject: async ({ request }) => {
    const { id } = Object.fromEntries(await request.formData());
    const {
      id: eventId,
      name,
      userId
    } = await prisma.event.update({
      where: { id },
      data: { status: "REJECTED" }
    });
    sendEventStatusNotification({
      eventId,
      userId,
      eventName: name,
      status: "REJECTED"
    });
    redirect(303, "/admin/event?status=REJECTED");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Duhg4iVi.js')).default;
const server_id = "src/routes/admin/event/[id]/+page.server.ts";
const imports = ["_app/immutable/nodes/9.DdKJ54Q7.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/currency.formatter.BzrfWP4a.js","_app/immutable/chunks/date-time.formatter.MppD4vc1.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Avatar.BErVGyWZ.js","_app/immutable/chunks/Badge.XnCSpYGq.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/Card.C2ctiAsH.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/ExclamationCircleOutline.C-zkacHp.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/P.CQZbmQ1E.js","_app/immutable/chunks/CalendarMonthSolid.7F4bqAa3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-C5crHbkE.js.map
