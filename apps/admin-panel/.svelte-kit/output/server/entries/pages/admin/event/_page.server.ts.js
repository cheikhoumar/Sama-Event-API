import { s as sendEventStatusNotification } from "../../../../chunks/notification-sender.js";
import { r as redirect } from "../../../../chunks/index.js";
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
export {
  actions,
  load
};
