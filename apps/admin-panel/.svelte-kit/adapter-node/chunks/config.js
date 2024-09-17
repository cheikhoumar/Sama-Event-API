import { config } from "@backtix-service/config";
const eventImageUrl = `${config.fileStream.baseUrl}${config.fileStream.eventImageUrlPath}/`;
const ticketImageUrl = `${config.fileStream.baseUrl}${config.fileStream.ticketImageUrlPath}/`;
const userImageUrl = (path) => {
  if (path.includes("https://")) return path;
  return `${config.fileStream.baseUrl}${config.fileStream.userImageUrlPath}/${path}`;
};
export {
  eventImageUrl as e,
  ticketImageUrl as t,
  userImageUrl as u
};
