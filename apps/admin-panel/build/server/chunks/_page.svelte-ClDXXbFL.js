import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, f as compute_rest_props, j as getContext } from './ssr-CwhHQPJV.js';
import { A as Alert } from './Alert-CsAqimZG.js';
import { B as Breadcrumb, a as BreadcrumbItem } from './BreadcrumbItem-C0Nsfyu1.js';
import { B as Button } from './Button-CjJFDh1v.js';
import { B as ButtonGroup, I as InputAddon } from './InputAddon-BD8bkjDY.js';
import { C as Checkbox } from './Checkbox-DaBqjhJp.js';
import { I as Input } from './Input-DnmfLeDc.js';
import { L as Label } from './Label-DAhzPllM.js';
import { t as twMerge } from './bundle-mjs-CQoFqR0w.js';
import { H as Heading } from './Heading-BzVJoxXD.js';
import { P } from './P-HZqtzR9B.js';
import { U as UserSolid } from './UserSolid-DZ2dclwL.js';
import './CloseButton-D876vcrf.js';
import './Frame-Dp7Rzroq.js';
import './Wrapper-Y4aakP84.js';

const common = "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "group", "value", "checked", "customSize"]);
  let { size = "default" } = $$props;
  let { group = [] } = $$props;
  let { value = "" } = $$props;
  let { checked = void 0 } = $$props;
  let { customSize = "" } = $$props;
  let background = getContext("background");
  const colors = {
    primary: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",
    secondary: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6",
    custom: customSize
  };
  let divClass;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0) $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0) $$bindings.checked(checked);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0) $$bindings.customSize(customSize);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    divClass = twMerge(
      common,
      background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
      colors[$$restProps.color ?? "primary"],
      sizes[size],
      "relative",
      $$props.classDiv
    );
    $$rendered = `${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      Object.assign({}, { custom: true }, $$restProps, { class: $$props.class }, { value }, { checked }, { group }),
      {
        checked: ($$value) => {
          checked = $$value;
          $$settled = false;
        },
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<span${add_attribute("class", divClass, 0)}></span> ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activate;
  let { data } = $$props;
  let { form } = $$props;
  let group = [];
  let a = [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    activate = a.length ? true : false;
    $$rendered = `<div class="p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render(
      $$result,
      {
        "aria-label": "breadcrumb",
        navClass: "mb-5"
      },
      {},
      {
        default: () => {
          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/admin/user", home: true }, {}, {
            icon: () => {
              return `${validate_component(UserSolid, "UserSolid").$$render($$result, { class: "me-2 h-4 w-4" }, {}, {})} `;
            },
            default: () => {
              return `User`;
            }
          })} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
            default: () => {
              return `Add new user`;
            }
          })}`;
        }
      }
    )} ${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-3" }, {}, {
      default: () => {
        return `Add New User`;
      }
    })}</div> ${form?.message ? `${validate_component(Alert, "Alert").$$render(
      $$result,
      {
        color: form?.success ? "green" : "red",
        class: "mx-4 mb-2"
      },
      {},
      {
        default: () => {
          return `${escape(form?.message)}`;
        }
      }
    )}` : ``} <form class="m-4" method="post"><div class="mb-4 grid gap-4 sm:grid-cols-2"><div>${validate_component(Label, "Label").$$render($$result, { for: "fullname", class: "mb-2" }, {}, {
      default: () => {
        return `Full name`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "fullname",
        name: "fullname",
        placeholder: "John",
        value: form?.fullname,
        required: true
      },
      {},
      {}
    )}</div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "mb-2" }, {}, {
      default: () => {
        return `Email address`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "john.doe@company.com",
        value: form?.email,
        required: true
      },
      {},
      {}
    )}</div></div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "username", class: "mb-2" }, {}, {
      default: () => {
        return `Username`;
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
            value: form?.username,
            required: true
          },
          {},
          {}
        )}`;
      }
    })}</div></div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "location", class: "mb-2" }, {}, {
      default: () => {
        return `Location`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "text",
        id: "location",
        name: "location",
        placeholder: "Bandung",
        value: form?.location,
        required: true
      },
      {},
      {}
    )}</div></div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "password", class: "mb-2" }, {}, {
      default: () => {
        return `Password`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        id: "password",
        name: "password",
        placeholder: "•••••••••",
        required: true
      },
      {},
      {}
    )}</div></div> <div><div class="mb-4">${validate_component(Label, "Label").$$render($$result, { for: "confirm_password", class: "mb-2" }, {}, {
      default: () => {
        return `Confirm password`;
      }
    })} ${validate_component(Input, "Input").$$render(
      $$result,
      {
        type: "password",
        id: "confirm_password",
        name: "confirm_password",
        placeholder: "•••••••••",
        required: true
      },
      {},
      {}
    )}</div></div></div> <div class="mb-4">${validate_component(Label, "Label").$$render($$result, { class: "mb-4" }, {}, {
      default: () => {
        return `Assign groups`;
      }
    })} ${data.my?.groups.includes("SUPERADMIN") ? `<div class="flex gap-4">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-4 space-x-1 rtl:space-x-reverse",
        value: "ADMIN",
        group
      },
      {
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `ADMIN`;
        }
      }
    )} ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-4 space-x-1 rtl:space-x-reverse",
        color: "red",
        value: "SUPERADMIN",
        group
      },
      {
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `SUPERADMIN`;
        }
      }
    )} ${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-4 space-x-1 rtl:space-x-reverse",
        value: "USER",
        group
      },
      {
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `USER`;
        }
      }
    )} <input type="hidden" name="group"${add_attribute("value", group, 0)}></div>` : `<div class="flex justify-between gap-4">${validate_component(Checkbox, "Checkbox").$$render(
      $$result,
      {
        class: "mb-4 space-x-1 rtl:space-x-reverse",
        value: "USER",
        disabled: true,
        checked: true,
        group
      },
      {
        group: ($$value) => {
          group = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `USER`;
        }
      }
    )} ${validate_component(P, "P").$$render($$result, { size: "sm" }, {}, {
      default: () => {
        return `*Only superadmin can assign <code data-svelte-h="svelte-ik7s6n">admin</code> &amp; <code data-svelte-h="svelte-1ft6yby">superadmin</code> group`;
      }
    })} <input type="hidden" name="group"${add_attribute("value", group, 0)}></div>`}</div> ${validate_component(Toggle, "Toggle").$$render(
      $$result,
      {
        class: "mb-6 mr-3 rtl:space-x-reverse",
        group: a
      },
      {
        group: ($$value) => {
          a = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `ACTIVATE`;
        }
      }
    )} <input type="hidden" name="activate"${add_attribute("value", activate, 0)}> ${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
      default: () => {
        return `Submit`;
      }
    })}</form>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ClDXXbFL.js.map
