import { r as redirect } from "../../../chunks/index.js";
const load = async () => {
  return redirect(303, "/admin/dashboard");
};
export {
  load
};
