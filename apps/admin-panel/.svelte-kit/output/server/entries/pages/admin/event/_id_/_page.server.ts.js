import { e as eventImageUrl, t as ticketImageUrl, u as userImageUrl } from "../../../../../chunks/config.js";
import { s as sendEventStatusNotification } from "../../../../../chunks/notification-sender.js";
import { r as redirect } from "../../../../../chunks/index.js";
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
export {
  actions,
  load
};
