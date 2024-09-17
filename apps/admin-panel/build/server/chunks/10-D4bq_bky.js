import { r as redirect } from './index-Ddp2AB5f.js';

const load = async ({ cookies }) => {
  cookies.delete("accessToken", { path: "/", httpOnly: true, sameSite: "strict" });
  cookies.delete("refreshToken", { path: "/", httpOnly: true, sameSite: "strict" });
  redirect(303, "/");
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
const server_id = "src/routes/admin/logout/+page.server.ts";
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-D4bq_bky.js.map
