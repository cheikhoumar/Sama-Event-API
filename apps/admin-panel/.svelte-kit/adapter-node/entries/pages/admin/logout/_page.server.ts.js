import { r as redirect } from "../../../../chunks/index.js";
const load = async ({ cookies }) => {
  cookies.delete("accessToken", { path: "/", httpOnly: true, sameSite: "strict" });
  cookies.delete("refreshToken", { path: "/", httpOnly: true, sameSite: "strict" });
  redirect(303, "/");
};
export {
  load
};
