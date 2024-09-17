import { u as userImageUrl } from "../../../chunks/config.js";
import { config } from "@backtix-service/config";
const load = async ({ url, locals }) => {
  return {
    links: { openApi: `${config.server.baseUrl}api/docs` },
    activeUrl: url.pathname,
    my: {
      ...locals.user,
      image: locals.user.image ? userImageUrl(locals.user.image) : void 0
    }
  };
};
export {
  load
};
