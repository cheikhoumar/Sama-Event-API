import "../../../../../chunks/config.js";
import { r as redisClient } from "../../../../../chunks/redis.js";
import { f as fail, r as redirect } from "../../../../../chunks/index.js";
import jwt from "jsonwebtoken";
import { config } from "@backtix-service/config";
const load = async () => {
  return {};
};
const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const otp = data.get("otp");
    if (!otp || otp.length < 6) {
      return fail(400, { message: "OTP length must be 6 character" });
    }
    try {
      const response = await event.fetch(`${config.server.baseUrl}api/auth/admin/login`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "user-agent": "Admin-Panel"
        },
        body: JSON.stringify({ otp })
      });
      const json = await response.json();
      if (response.status > 299) return fail(json.statusCode, { message: json.message });
      const { sub } = jwt.verify(json.refreshToken, config.security.refreshTokenKey);
      await redisClient.set(json.refreshToken, JSON.stringify({ id: sub }), {
        EX: config.security.refreshTokenTTL
      });
      event.cookies.set("refreshToken", json.refreshToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "strict",
        path: "/"
      });
      event.cookies.set("accessToken", json.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "strict",
        path: "/"
      });
    } catch (e) {
      console.error(e);
      return fail(500, { message: "Unknown Error" });
    }
    return redirect(303, "/admin");
  }
};
export {
  actions,
  load
};
