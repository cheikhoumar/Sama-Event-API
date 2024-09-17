import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-CwhHQPJV.js';
import { B as Breadcrumb, a as BreadcrumbItem } from './BreadcrumbItem-C0Nsfyu1.js';
import { B as Button } from './Button-CjJFDh1v.js';
import { B as ButtonGroup, I as InputAddon } from './InputAddon-BD8bkjDY.js';
import { L as Label } from './Label-DAhzPllM.js';
import { I as Input } from './Input-DnmfLeDc.js';
import { T as Toast } from './Toast-DrDU_JTv.js';
import { H as Heading } from './Heading-BzVJoxXD.js';
import { C as CheckSolid } from './CheckSolid-CCrRdjvL.js';
import { C as CloseSolid } from './CloseSolid-C1fONeGa.js';
import { G as GearSolid } from './GearSolid-DPrW-lNv.js';
import './bundle-mjs-CQoFqR0w.js';
import './Wrapper-Y4aakP84.js';
import './CloseButton-D876vcrf.js';
import './Frame-Dp7Rzroq.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  const myUser = data.myUser;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `<div class="fixed bottom-0 right-0 z-10 w-screen">${form?.success ? `${validate_component(Toast, "Toast").$$render($$result, { color: "green", position: "bottom-right" }, {}, {
    icon: () => {
      return `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { slot: "icon", class: "h-5 w-5" }, {}, {})}`;
    },
    default: () => {
      return `${escape(form?.message)}`;
    }
  })}` : `${form && !form?.success ? `${validate_component(Toast, "Toast").$$render($$result, { color: "red", position: "bottom-right" }, {}, {
    icon: () => {
      return `${validate_component(CloseSolid, "CloseSolid").$$render($$result, { slot: "icon", class: "h-5 w-5" }, {}, {})}`;
    },
    default: () => {
      return `${escape(form?.message)}`;
    }
  })}` : ``}`}</div> <div class="p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      "aria-label": "breadcrumb",
      navClass: "mb-5"
    },
    {},
    {
      default: () => {
        return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { home: true }, {}, {
          icon: () => {
            return `${validate_component(GearSolid, "GearSolid").$$render($$result, { class: "me-2 h-4 w-4" }, {}, {})} `;
          },
          default: () => {
            return `Paramètres`;
          }
        })}`;
      }
    }
  )} ${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-3" }, {}, {
    default: () => {
      return `Paramètres`;
    }
  })}</div> <form action="?/updateFee" method="post" class="m-4">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      id: "withdrawalFee",
      class: "mb-3"
    },
    {},
    {
      default: () => {
        return `Frais de retrait`;
      }
    }
  )} <div class="mb-4 grid gap-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "fee", class: "mb-2" }, {}, {
    default: () => {
      return `Mise à jour des frais de retrait`;
    }
  })} ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "w-full" }, {}, {
    default: () => {
      return `${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
        default: () => {
          return `${escape(data.currencyPrefix)}`;
        }
      })} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "number",
          id: "fee",
          name: "fee",
          placeholder: "2500",
          value: data.withdrawFee?.amount,
          required: true
        },
        {},
        {}
      )}`;
    }
  })}</div></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Mise à jour`;
    }
  })}</form> <div class="my-8" data-svelte-h="svelte-55624n"><hr></div> <form class="m-4" method="post" action="?/updateMyProfile">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      id: "updateMyProfile",
      class: "mb-3"
    },
    {},
    {
      default: () => {
        return `Mise à jour de mon Profile`;
      }
    }
  )} <div class="mb-4 grid gap-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "fullname", class: "mb-2" }, {}, {
    default: () => {
      return `Nom complet`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "fullname",
      name: "fullname",
      placeholder: "John",
      value: form?.fullname ?? myUser.fullname,
      required: true
    },
    {},
    {}
  )}</div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
    default: () => {
      return `Adresse email`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "john.doe@company.com",
      value: form?.email ?? myUser.email,
      required: true
    },
    {},
    {}
  )}</div></div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "username", class: "mb-2" }, {}, {
    default: () => {
      return `Nom d&#39;utilisateur`;
    }
  })} ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "w-full" }, {}, {
    default: () => {
      return `${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
        default: () => {
          return `@`;
        }
      })} ${validate_component(Input, "Input").$$render(
        $$result,
        {
          type: "text",
          id: "username",
          name: "username",
          placeholder: "johndoe123",
          value: form?.username ?? myUser.username,
          required: true
        },
        {},
        {}
      )}`;
    }
  })}</div></div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "location", class: "mb-2" }, {}, {
    default: () => {
      return `Emplacement`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "text",
      id: "location",
      name: "location",
      placeholder: "Bandung",
      value: form?.location ?? myUser.location,
      required: true
    },
    {},
    {}
  )}</div></div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "password", class: "mb-2" }, {}, {
    default: () => {
      return `Nouveau mot de passe`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "password",
      name: "password"
    },
    {},
    {}
  )}</div></div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "confirm_password", class: "mb-2" }, {}, {
    default: () => {
      return `Confirmer mot de passe`;
    }
  })} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      id: "confirm_password",
      name: "confirm_password"
    },
    {},
    {}
  )}</div></div></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Soumettre`;
    }
  })}</form>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Ba6SfQWA.js.map
