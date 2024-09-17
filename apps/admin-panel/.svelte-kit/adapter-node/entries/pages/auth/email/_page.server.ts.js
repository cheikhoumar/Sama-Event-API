import "../../../../chunks/config.js";
import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { config } from "@backtix-service/config";
const load = async () => {
  return {};
};
const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    const email = data.get("email");
    if (!email || email.length < 5) {
      return fail(400, { message: "Invalid email" });
    }
    try {
      const response = await event.fetch(`${config.server.baseUrl}api/auth/admin/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "user-agent": "Admin-Panel"
        },
        body: JSON.stringify({ email })
      });
      const json = await response.json();
      console.log(json);
      if (response.status > 299) return fail(json.statusCode, { message: json.message });
    } catch (e) {
      console.error(e);
      return fail(500, { message: "Error" });
    }
    redirect(303, `/auth/email/otp?email=${email}`);
  }
};
export {
  actions,
  load
};
