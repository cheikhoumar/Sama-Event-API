import "../../../../chunks/config.js";
import { r as redisClient } from "../../../../chunks/redis.js";
import { G as Group } from "../../../../chunks/group.enum.js";
import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "@backtix-service/config";
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
      config.security.refreshTokenKey,
      { expiresIn: config.security.refreshTokenExpiration }
    );
    const accessToken = jwt.sign(
      { sub: user.id, username: user.username, email: user.email },
      config.security.accessTokenKey,
      { expiresIn: config.security.accessTokenExpiration }
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
      EX: config.security.refreshTokenTTL
    });
    return redirect(303, "/admin");
  }
};
function validatePassword(password, hashedPassword) {
  return compare(password, hashedPassword);
}
export {
  actions,
  load
};
