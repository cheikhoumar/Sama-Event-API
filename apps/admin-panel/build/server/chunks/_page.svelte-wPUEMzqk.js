import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-CwhHQPJV.js';
import { A as Alert } from './Alert-CsAqimZG.js';
import { B as Button } from './Button-CjJFDh1v.js';
import { L as Label } from './Label-DAhzPllM.js';
import { I as Input } from './Input-DnmfLeDc.js';
import { A } from './A-D_ll1gnv.js';
import { A as ArrowLeftSolid } from './ArrowLeftSolid-CLqtEgz4.js';
import './CloseButton-D876vcrf.js';
import './Frame-Dp7Rzroq.js';
import './bundle-mjs-CQoFqR0w.js';
import './Wrapper-Y4aakP84.js';

let title = "Email confirmation";
const loginLink = "/auth/login";
const resendLink = "/auth/email/?";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return ` <h1 class="text-2xl font-bold text-gray-900 dark:text-white">${escape(title)}</h1> <span class="text-sm">OTP has been sent to ${escape(data.email)}</span> <form class="mt-8 space-y-6" method="post">${form?.message ? `${validate_component(Alert, "Alert").$$render($$result, { color: "red" }, {}, {
    default: () => {
      return `${escape(form?.message)}`;
    }
  })}` : ``} <div>${validate_component(Label, "Label").$$render($$result, { for: "otp", class: "mb-2" }, {}, {
    default: () => {
      return `Enter your 6-digit otp code`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      name: "otp",
      id: "otp",
      placeholder: "123456",
      required: true
    },
    {},
    {}
  )}</div> <div class="flex justify-between"><div class="flex gap-4">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: loginLink,
      color: "alternative",
      pill: true
    },
    {},
    {
      default: () => {
        return `<div class="mr-2">${validate_component(ArrowLeftSolid, "ArrowLeftSolid").$$render($$result, { size: "xs" }, {}, {})}</div>
				Back`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      color: "primary",
      pill: true
    },
    {},
    {
      default: () => {
        return `Confirm`;
      }
    }
  )}</div> ${validate_component(A, "A").$$render($$result, { href: resendLink }, {}, {
    default: () => {
      return `Resend OTP`;
    }
  })}</div></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-wPUEMzqk.js.map
