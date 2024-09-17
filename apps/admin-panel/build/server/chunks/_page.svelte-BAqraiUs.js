import { c as create_ssr_component, e as escape, v as validate_component } from './ssr-CwhHQPJV.js';
import { A as Alert } from './Alert-CsAqimZG.js';
import { B as Button } from './Button-CjJFDh1v.js';
import { L as Label } from './Label-DAhzPllM.js';
import { I as Input } from './Input-DnmfLeDc.js';
import { A as ArrowLeftSolid } from './ArrowLeftSolid-CLqtEgz4.js';
import './CloseButton-D876vcrf.js';
import './Frame-Dp7Rzroq.js';
import './bundle-mjs-CQoFqR0w.js';
import './Wrapper-Y4aakP84.js';

let title = "Se connecter par email";
const loginLink = "/auth/login";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return ` <h1 class="text-2xl font-bold text-gray-900 dark:text-white">${escape(title)}</h1> <form class="mt-8 space-y-6" method="post">${form?.message ? `${validate_component(Alert, "Alert").$$render($$result, { color: "red" }, {}, {
    default: () => {
      return `${escape(form?.message)}`;
    }
  })}` : ``} <div>${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
    default: () => {
      return `Votre adresse email`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "name@company.com",
      required: true
    },
    {},
    {}
  )}</div> <div class="flex gap-4">${validate_component(Button, "Button").$$render(
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
			Retour`;
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
        return `Soumettre`;
      }
    }
  )}</div></form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BAqraiUs.js.map
