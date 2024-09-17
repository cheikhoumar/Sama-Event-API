import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-CwhHQPJV.js';
import { A as Alert } from './Alert-CsAqimZG.js';
import { B as Button } from './Button-CjJFDh1v.js';
import { L as Label } from './Label-DAhzPllM.js';
import { I as Input } from './Input-DnmfLeDc.js';
import './CloseButton-D876vcrf.js';
import './Frame-Dp7Rzroq.js';
import './bundle-mjs-CQoFqR0w.js';
import './Wrapper-Y4aakP84.js';

let title = "Se connecter au dahsboard";
const emailLoginLink = "/auth/email";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return ` <h1 class="text-2xl font-bold text-gray-900 dark:text-white">${escape(title)}</h1> <form class="mt-8 space-y-6" method="post">${form?.message ? `${validate_component(Alert, "Alert").$$render($$result, { color: "red" }, {}, {
    default: () => {
      return `${escape(form?.message)}`;
    }
  })}` : ``} <div>${validate_component(Label, "Label").$$render($$result, { for: "username", class: "mb-2" }, {}, {
    default: () => {
      return `Votre nom d&#39;utilisateur`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      name: "username",
      id: "username",
      placeholder: "username123",
      value: form?.username,
      required: true
    },
    {},
    {}
  )}</div> <div>${validate_component(Label, "Label").$$render($$result, { for: "password", class: "mb-2" }, {}, {
    default: () => {
      return `Votre mot de passe`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      name: "password",
      id: "password",
      placeholder: "••••••••",
      required: true
    },
    {},
    {}
  )}</div> <div class="flex gap-4">${validate_component(Button, "Button").$$render(
    $$result,
    {
      type: "submit",
      color: "primary",
      pill: true
    },
    {},
    {
      default: () => {
        return `Se connecter`;
      }
    }
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: emailLoginLink,
      color: "alternative",
      pill: true
    },
    {},
    {
      default: () => {
        return `Se connecter par email`;
      }
    }
  )}</div></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BczP8y5E.js.map
