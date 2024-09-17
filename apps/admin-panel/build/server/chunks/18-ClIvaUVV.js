import { c as configExports } from './config-CY2m_ASs.js';
import { r as redisClient } from './redis-C557Awmd.js';
import { G as Group } from './group.enum-DA3qqxUE.js';
import { f as fail, r as redirect } from './index-Ddp2AB5f.js';
import { b as bcryptExports } from './bcrypt-CseKjho2.js';
import { j as jwt } from './index-DwlnlXm1.js';
import 'dotenv';
import 'path';
import 'redis';
import 'url';
import 'fs';
import 'mock-aws-s3';
import 'os';
import 'aws-sdk';
import 'nock';
import 'stream';
import 'util';
import 'events';
import './index-C3W_Ok8n.js';
import 'buffer';
import 'assert';
import 'child_process';
import 'crypto';

const load = async () => {
  return {};
};
const actions = {
  default: async (event) => {
    const { username, password } = Object.fromEntries(await event.request.formData());
    const user = await prisma.user.findUnique({
      where: {
        username,
        groups: { hasSome: [Group.ADMIN, Group.SUPERADMIN] }
      }
    });
    if (!user) return fail(404, { message: "User not found", username });
    const passwordValid = await validatePassword(password, user.password);
    if (!passwordValid) return fail(401, { message: "Wrong password", username });
    const refreshToken = jwt.sign(
      { sub: user.id, username: user.username, email: user.email },
      configExports.config.security.refreshTokenKey,
      { expiresIn: configExports.config.security.refreshTokenExpiration }
    );
    const accessToken = jwt.sign(
      { sub: user.id, username: user.username, email: user.email },
      configExports.config.security.accessTokenKey,
      { expiresIn: configExports.config.security.accessTokenExpiration }
    );
    event.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      sameSite: "strict",
      path: "/"
    });
    event.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "strict",
      path: "/"
    });
    await redisClient.set(refreshToken, JSON.stringify({ id: user.id }), {
      EX: configExports.config.security.refreshTokenTTL
    });
    return redirect(303, "/admin");
  }
};
function validatePassword(password, hashedPassword) {
  return bcryptExports.compare(password, hashedPassword);
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 18;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BczP8y5E.js')).default;
const server_id = "src/routes/auth/login/+page.server.ts";
const imports = ["_app/immutable/nodes/18.BdfUjH85.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/Alert.BGCmzfzt.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/Input.DjV6Ntai.js","_app/immutable/chunks/Wrapper.Dkm7VoO3.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=18-ClIvaUVV.js.map
