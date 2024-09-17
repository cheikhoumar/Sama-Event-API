import { c as configExports } from './config-CY2m_ASs.js';
import { PrismaClient } from '@prisma/client';
import { r as redisClient } from './redis-C557Awmd.js';
import { G as Group } from './group.enum-DA3qqxUE.js';
import { r as redirect } from './index-Ddp2AB5f.js';
import { j as jwt } from './index-DwlnlXm1.js';
import 'dotenv';
import 'path';
import 'redis';
import './index-C3W_Ok8n.js';
import 'buffer';
import 'stream';
import 'util';
import 'crypto';

const prisma = global.prisma || new PrismaClient();
global.prisma = prisma;
function sequence(...handlers) {
  const length = handlers.length;
  if (!length) return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
async function checkAccessToken({
  event,
  resolve
}) {
  try {
    const accessToken = event.cookies.get("accessToken");
    const claims = accessToken ? jwt.verify(accessToken, configExports.config.security.accessTokenKey, { ignoreExpiration: false }) : void 0;
    if (accessToken && claims) {
      const cachedUser = await redisClient.get(claims["sub"]);
      const user = cachedUser ? JSON.parse(cachedUser) : await prisma.user.findUnique({
        where: {
          id: claims["sub"],
          groups: { hasSome: [Group.ADMIN, Group.SUPERADMIN] }
        }
      });
      if (!cachedUser) await redisClient.set(user.id, JSON.stringify(user), { EX: 60 });
      if (!user || !user.groups.some((v) => v.includes(Group.ADMIN))) {
        return await resolve(event);
      }
      const { password, ...userWithoutPassword } = user;
      event.locals.user = userWithoutPassword;
    } else {
      event.locals.user = void 0;
    }
    return await resolve(event);
  } catch {
    return await resolve(event);
  }
}
async function checkRefreshToken({
  event,
  resolve
}) {
  try {
    if (!event.locals.user) {
      const refreshToken = event.cookies.get("refreshToken");
      const claims = refreshToken ? jwt.verify(refreshToken, configExports.config.security.refreshTokenKey) : void 0;
      const savedAuth = await redisClient.get(refreshToken ?? "");
      if (refreshToken && claims && savedAuth) {
        const { id } = JSON.parse(savedAuth);
        const user = await prisma.user.findUnique({
          where: { id }
        });
        if (!user) return await resolve(event);
        const { password, ...userWithoutPassword } = user;
        event.locals.user = userWithoutPassword;
        const accessToken = jwt.sign(
          { sub: user.id, username: user.username, email: user.email },
          configExports.config.security.accessTokenKey,
          { expiresIn: "15s" }
        );
        event.cookies.set("accessToken", accessToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 24,
          sameSite: "strict",
          path: "/"
        });
      }
    }
    return await resolve(event);
  } catch (e) {
    console.error(e);
    return await resolve(event);
  }
}
async function protectRoutes({
  event,
  resolve
}) {
  if (event.url.pathname.startsWith("/admin")) {
    if (!event.locals.user) {
      return redirect(303, "/auth");
    }
  }
  return await resolve(event);
}
const handle = sequence(checkAccessToken, checkRefreshToken, protectRoutes);

export { handle };
//# sourceMappingURL=hooks.server-Cu2IfNH8.js.map
