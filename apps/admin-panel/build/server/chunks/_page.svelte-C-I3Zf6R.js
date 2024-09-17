import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as each, b as add_attribute, f as compute_rest_props, j as getContext, g as spread, i as escape_object, h as escape_attribute_value } from './ssr-CwhHQPJV.js';
import './client-BUusD8wq.js';
import { p as page } from './stores-7u5OHupE.js';
import { d as dateTimeFormatterWithoutSeconds } from './date-time.formatter-qAmddmYC.js';
import { A as Avatar } from './Avatar-NXDzR0cU.js';
import { B as Badge } from './Badge-BJyk0Dmk.js';
import { B as Breadcrumb, a as BreadcrumbItem } from './BreadcrumbItem-C0Nsfyu1.js';
import { B as Button } from './Button-CjJFDh1v.js';
import { B as ButtonGroup, I as InputAddon } from './InputAddon-BD8bkjDY.js';
import { C as Checkbox } from './Checkbox-DaBqjhJp.js';
import { I as Input } from './Input-DnmfLeDc.js';
import { L as Label } from './Label-DAhzPllM.js';
import { M as Modal, E as ExclamationCircleOutline } from './ExclamationCircleOutline-B3jA9YgF.js';
import { P as Pagination } from './Pagination-BmxJzaBC.js';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from './TableHeadCell-4LqWHwYC.js';
import { T as Toast } from './Toast-DrDU_JTv.js';
import { A } from './A-D_ll1gnv.js';
import { H as Heading } from './Heading-BzVJoxXD.js';
import { P } from './P-HZqtzR9B.js';
import { C as CheckSolid } from './CheckSolid-CCrRdjvL.js';
import { C as CloseSolid } from './CloseSolid-C1fONeGa.js';
import { t as twMerge } from './bundle-mjs-CQoFqR0w.js';
import { U as UserSolid } from './UserSolid-DZ2dclwL.js';
import './exports-BGi7-Rnc.js';
import './CloseButton-D876vcrf.js';
import './Frame-Dp7Rzroq.js';
import './Wrapper-Y4aakP84.js';

const PlusSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "role", "ariaLabel"]);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let { size = ctx.size || "md" } = $$props;
  let { role = ctx.role || "img" } = $$props;
  let { ariaLabel = "plus solid" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0) $$bindings.role(role);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { fill: "currentColor" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("shrink-0", sizes[size], $$props.class))
      },
      { role: escape_attribute_value(role) },
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { viewBox: "0 0 18 18" }
    ],
    {}
  )}><path fill="currentColor" d="M17 8h-7V1a1 1 0 0 0-2 0v7H1a1 1 0 0 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2Z"></path></svg> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activated;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { form } = $$props;
  let { data } = $$props;
  let actionModal = false;
  let actionUserId;
  let actionCtx;
  let actionMsg;
  let formModal = false;
  let formUser;
  let group = [];
  let a = [];
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    activated = a.length ? true : false;
    $$rendered = `<div class="fixed bottom-0 right-0 z-10 w-screen">${form?.success || $page.url.searchParams.get("success") ? `${validate_component(Toast, "Toast").$$render($$result, { color: "green", position: "bottom-right" }, {}, {
      icon: () => {
        return `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { slot: "icon", class: "h-5 w-5" }, {}, {})}`;
      },
      default: () => {
        return `${escape(form?.message ?? $page.url.searchParams.get("message"))}`;
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
              return `${validate_component(UserSolid, "UserSolid").$$render($$result, { class: "me-2 h-4 w-4" }, {}, {})} `;
            },
            default: () => {
              return `Utilisateur`;
            }
          })}`;
        }
      }
    )} <div class="items-center justify-between lg:flex"><div class="mb-3 lg:mb-0">${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-3" }, {}, {
      default: () => {
        return `Gestion des utilisateurs`;
      }
    })} <div class="flex gap-2">${validate_component(P, "P").$$render($$result, {}, {}, {
      default: () => {
        return `Filtrer:`;
      }
    })} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/user?group=SUPERADMIN&deleted=false",
        rounded: true,
        border: true,
        color: "purple",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.group === "SUPERADMIN" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					SUPER ADMIN`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/user?group=ADMIN&deleted=false",
        rounded: true,
        border: true,
        color: "green",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.group === "ADMIN" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					ADMIN`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/user?group=USER&deleted=false",
        rounded: true,
        border: true,
        color: "blue",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.group === "USER" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					UTILISATEUR`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/user?deleted=true",
        rounded: true,
        border: true,
        color: "red",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.deleted === "true" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					SUPPRIMÉ`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/user",
        rounded: true,
        border: true,
        color: "purple",
        large: true
      },
      {},
      {
        default: () => {
          return `${!data.group && !data.deleted ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					TOUT`;
        }
      }
    )}</div></div> ${validate_component(Button, "Button").$$render(
      $$result,
      {
        href: "/admin/user/new",
        pill: true,
        color: "blue"
      },
      {},
      {
        default: () => {
          return `${validate_component(PlusSolid, "PlusSolid").$$render($$result, { class: "me-2 h-3.5 w-3.5" }, {}, {})}
			Ajouter`;
        }
      }
    )}</div></div> ${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-4" }, {}, {})} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-2" }, {}, {
              default: () => {
                return `Nom d&#39;utilisateur`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Nom complet`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Email`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-0" }, {}, {
              default: () => {
                return `Activé?`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Groupes`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-2" }, {}, {
              default: () => {
                return `Emplacement`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Date de création`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Actions`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${data.users.length ? `${each(data.users, (user) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render(
                $$result,
                {
                  color: user.username === data.my.username ? "custom" : "default",
                  class: "bg-sky-300 dark:bg-blue-900"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-4" }, {}, {
                      default: () => {
                        return `${validate_component(Avatar, "Avatar").$$render(
                          $$result,
                          {
                            size: "sm",
                            alt: user.username,
                            src: user.image
                          },
                          {},
                          {}
                        )} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-2" }, {}, {
                      default: () => {
                        return `${escape(user.username)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(user.fullname)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(A, "A").$$render(
                          $$result,
                          {
                            href: "mailto:" + user.email,
                            aClass: "underline",
                            color: "blue"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(user.email)} `;
                            }
                          }
                        )} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-0" }, {}, {
                      default: () => {
                        return `${escape(user.activated ? "Yes" : "No")}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex flex-col gap-1">${each(user.groups, (group2) => {
                          return `${validate_component(Badge, "Badge").$$render(
                            $$result,
                            {
                              rounded: true,
                              border: true,
                              color: "primary"
                            },
                            {},
                            {
                              default: () => {
                                return `${escape(group2)}`;
                              }
                            }
                          )}`;
                        })}</div> `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-2 max-w-64" }, {}, {
                      default: () => {
                        return `${user.location ? `${validate_component(A, "A").$$render(
                          $$result,
                          {
                            href: `https://www.google.com/maps/search/?api=1&query=${user.latitude},${user.longitude}`,
                            aClass: "underline line-clamp-3",
                            color: "blue"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(user.location)} `;
                            }
                          }
                        )}` : `${escape("unset")}`} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(dateTimeFormatterWithoutSeconds.format(user.createdAt))}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex gap-2">${data.my.groups.includes("SUPERADMIN") || !user.groups.some((v) => v === "ADMIN" || v === "SUPERADMIN") ? `${validate_component(Button, "Button").$$render($$result, { pill: true, size: "sm", color: "blue" }, {}, {
                          default: () => {
                            return `Modifier`;
                          }
                        })} ${user.deletedAt === null ? `${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            pill: true,
                            size: "sm",
                            color: "red",
                            outline: true
                          },
                          {},
                          {
                            default: () => {
                              return `Supprimer`;
                            }
                          }
                        )}` : ``}` : ``} ${user.deletedAt !== null ? `${validate_component(Button, "Button").$$render(
                          $$result,
                          {
                            pill: true,
                            size: "sm",
                            color: "yellow",
                            outline: true
                          },
                          {},
                          {
                            default: () => {
                              return `Restaurer`;
                            }
                          }
                        )} ` : ``}</div> `;
                      }
                    })} `;
                  }
                }
              )}`;
            })}` : `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `<td colspan="7" data-svelte-h="svelte-dq3xo6"><div class="flex h-64"><span class="m-auto text-center text-xl font-bold">Pas trouvé</span></div></td>`;
              }
            })}`}`;
          }
        })}`;
      }
    })} ${data.page > 0 || data.users.length ? `<div class="m-4">${validate_component(Pagination, "Pagination").$$render($$result, { large: true }, {}, {})}</div>` : ``} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Confirmation",
        size: "xs",
        outsideclose: true,
        open: actionModal
      },
      {
        open: ($$value) => {
          actionModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="text-center">${validate_component(ExclamationCircleOutline, "ExclamationCircleOutline").$$render(
            $$result,
            {
              class: "mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
            },
            {},
            {}
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">${escape(actionMsg)}</h3> <div class="flex justify-center gap-2"><form action="${"?/" + escape(actionCtx, true)}" method="post" class="inline"><input type="hidden" name="id"${add_attribute("value", actionUserId, 0)}> ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "red" }, {}, {
            default: () => {
              return `Confirmer`;
            }
          })}</form> ${validate_component(Button, "Button").$$render($$result, { color: "alternative" }, {}, {
            default: () => {
              return `Annuler`;
            }
          })}</div></div>`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "xs",
        autoclose: false,
        class: "w-full",
        open: formModal
      },
      {
        open: ($$value) => {
          formModal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<form class="flex flex-col space-y-6" action="?/edit" method="post"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1auqtis">Modifier les données de l&#39;utilisateur</h3> <input type="hidden" name="id"${add_attribute("value", formUser.id, 0)}> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-15s8vj4">Nom d&#39;utilisateur</span> ${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "w-full" }, {}, {
                default: () => {
                  return `${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
                    default: () => {
                      return `@`;
                    }
                  })} ${validate_component(Input, "Input").$$render(
                    $$result,
                    {
                      type: "text",
                      name: "username",
                      placeholder: "name123",
                      value: formUser.username,
                      required: true
                    },
                    {},
                    {}
                  )}`;
                }
              })}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "email",
                  name: "email",
                  placeholder: "name@company.com",
                  value: formUser.email,
                  required: true
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-jy96q8">Nom complet</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "fullname",
                  placeholder: "John Doe",
                  value: formUser.fullname,
                  required: true
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-1p82xsd">Emplacement</span> ${validate_component(Input, "Input").$$render(
                $$result,
                {
                  type: "text",
                  name: "location",
                  placeholder: "Bandung",
                  value: formUser.location
                },
                {},
                {}
              )}`;
            }
          })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
            default: () => {
              return `<span data-svelte-h="svelte-6d3mev">Groupes</span> <div class="flex items-start gap-4">${data.my?.groups.includes("SUPERADMIN") ? `${validate_component(Checkbox, "Checkbox").$$render(
                $$result,
                {
                  checked: formUser.groups.includes("USER"),
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
                    return `UTILISATEUR`;
                  }
                }
              )} ${validate_component(Checkbox, "Checkbox").$$render(
                $$result,
                {
                  checked: formUser.groups.includes("ADMIN"),
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
                  checked: formUser.groups.includes("SUPERADMIN"),
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
                    return `SUPER ADMIN`;
                  }
                }
              )}` : `${validate_component(Checkbox, "Checkbox").$$render(
                $$result,
                {
                  checked: formUser.groups.includes("USER"),
                  disabled: true,
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
                    return `UTILISATEUR`;
                  }
                }
              )}`} <input type="hidden" name="group"${add_attribute("value", group, 0)}></div>`;
            }
          })} <div class="flex items-start">${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            {
              checked: formUser.activated,
              value: "true",
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
                return `Activé`;
              }
            }
          )} <input type="hidden" name="activated"${add_attribute("value", activated, 0)}></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
            default: () => {
              return `Soumettre`;
            }
          })}</form>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C-I3Zf6R.js.map
