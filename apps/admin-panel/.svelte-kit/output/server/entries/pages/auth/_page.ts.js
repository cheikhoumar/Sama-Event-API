import { r as redirect } from "../../../chunks/index.js";
const prerender = true;
const load = async () => {
  throw redirect(303, "/auth/login");
};
export {
  load,
  prerender
};
