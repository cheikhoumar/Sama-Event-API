import { c as configExports } from './config-CY2m_ASs.js';
import { c as currencyPrefix } from './currency.formatter-Bv784HBn.js';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { f as fail } from './index-Ddp2AB5f.js';
import { b as bcryptExports } from './bcrypt-CseKjho2.js';
import { r as redisClient } from './redis-C557Awmd.js';
import 'dotenv';
import 'path';
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
import 'redis';

const load = async ({ locals }) => {
  const withdrawFee = {
    id: 0,
    amount: Number(
      await redisClient.get(configExports.config.withdraw.feeKey) ?? (await prisma.withdrawFee.findFirst({ where: { id: 0 } })).amount
    )
  };
  return { myUser: locals.user, withdrawFee, currencyPrefix };
};
const actions = {
  updateFee: async ({ request }) => {
    const { fee } = Object.fromEntries(await request.formData());
    try {
      const adminFee = await prisma.withdrawFee.upsert({
        create: { amount: Number(fee) },
        update: { amount: { set: Number(fee) } },
        where: { id: 0 }
      });
      await redisClient.set(configExports.config.withdraw.feeKey, adminFee.amount);
      return { success: true, message: "Update fee successful" };
    } catch (e) {
      console.error(e);
      return fail(500, { success: false, message: "Unknown error" });
    }
  },
  updateMyProfile: async ({ request, locals }) => {
    const form = Object.fromEntries(await request.formData());
    const { confirm_password, password, ...data } = form;
    try {
      if (confirm_password !== password) {
        return fail(400, {
          success: false,
          message: "Password confirmation doesn't match",
          ...form
        });
      }
      locals.user = await prisma.user.update({
        where: { id: locals.user.id },
        data: {
          ...data,
          password: password ? await bcryptExports.hash(password, configExports.config.security.bcryptSaltOrRound) : void 0
        }
      });
      return { success: true, message: "Profile edit success." };
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError && e.code === "P2002") {
        return fail(409, { success: false, message: "Username/Email has been registered", ...form });
      }
      console.error(e);
      return fail(500, { success: false, message: "Unknown error", ...form });
    }
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Ba6SfQWA.js')).default;
const server_id = "src/routes/admin/setting/+page.server.ts";
const imports = ["_app/immutable/nodes/11.CTr_wiph.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js","_app/immutable/chunks/BreadcrumbItem.ByMeSVu4.js","_app/immutable/chunks/bundle-mjs.CuhWIVwh.js","_app/immutable/chunks/Button.CrNIN95s.js","_app/immutable/chunks/InputAddon.CyuPLKwj.js","_app/immutable/chunks/Input.DjV6Ntai.js","_app/immutable/chunks/Wrapper.Dkm7VoO3.js","_app/immutable/chunks/Label.CF2lxgNY.js","_app/immutable/chunks/Toast.CwzxZqjj.js","_app/immutable/chunks/CloseButton.vrK9mPVw.js","_app/immutable/chunks/Frame.DNz3Vx4g.js","_app/immutable/chunks/Heading.BXZJ_QtE.js","_app/immutable/chunks/CheckSolid.BTWMbPVw.js","_app/immutable/chunks/CloseSolid.Dk3EYOZw.js","_app/immutable/chunks/GearSolid.CUVhuRwp.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=11-CltsBKDW.js.map
