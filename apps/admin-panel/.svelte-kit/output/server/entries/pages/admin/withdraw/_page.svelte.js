import { c as create_ssr_component, v as validate_component, e as escape, k as each, d as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { d as defaultCurrencyFormatter } from "../../../../chunks/currency.formatter.js";
import { a as defaultDateTimeFormatter } from "../../../../chunks/date-time.formatter.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../chunks/Button.js";
import { E as ExclamationCircleOutline, M as Modal } from "../../../../chunks/ExclamationCircleOutline.js";
import { P as Pagination } from "../../../../chunks/Pagination.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
import { T as Toast } from "../../../../chunks/Toast.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { P } from "../../../../chunks/P.js";
import { C as CheckSolid } from "../../../../chunks/CheckSolid.js";
import { C as CloseSolid } from "../../../../chunks/CloseSolid.js";
import { D as DollarSolid } from "../../../../chunks/DollarSolid.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  let actionModal = false;
  let actionWithdrawId;
  let actionCtx;
  let actionMsg;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="fixed bottom-0 right-0 z-10 w-screen">${form?.success ? `${validate_component(Toast, "Toast").$$render($$result, { color: "green", position: "bottom-right" }, {}, {
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
              return `${validate_component(DollarSolid, "DollarSolid").$$render($$result, { class: "me-2 h-4 w-4" }, {}, {})} `;
            },
            default: () => {
              return `Retrait`;
            }
          })}`;
        }
      }
    )} ${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-3" }, {}, {
      default: () => {
        return `Demande de retrait`;
      }
    })} <div class="mb-3 flex items-center gap-2 text-orange-400 dark:text-orange-300">${validate_component(ExclamationCircleOutline, "ExclamationCircleOutline").$$render($$result, { class: "inline" }, {}, {})} <div><span data-svelte-h="svelte-4hczj">Le montant a été déduit des frais.</span> <br> <span>Frais: <strong>${escape(defaultCurrencyFormatter.format(data.withdrawalFee))}</strong></span></div></div> <div class="flex gap-2">${validate_component(P, "P").$$render($$result, {}, {}, {
      default: () => {
        return `Filter:`;
      }
    })} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/withdraw",
        rounded: true,
        border: true,
        color: "purple",
        large: true
      },
      {},
      {
        default: () => {
          return `${!data.status ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
			TOUT`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/withdraw?status=PENDING",
        rounded: true,
        border: true,
        color: "yellow",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.status === "PENDING" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
			EN ATTENTE`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/withdraw?status=COMPLETED",
        rounded: true,
        border: true,
        color: "green",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.status === "COMPLETED" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
			VALIDÉ`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/withdraw?status=REJECTED",
        rounded: true,
        border: true,
        color: "red",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.status === "REJECTED" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
			REJETÉ`;
        }
      }
    )}</div></div> ${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Date de soumission`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Demandeur`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Statut`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Mode de paiement`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Montant`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Frais`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Détails`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Action`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${data.withdraws.length ? `${each(data.withdraws, (withdraw) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(defaultDateTimeFormatter.format(withdraw.createdAt))}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<strong>${escape(withdraw.user.fullname)}</strong><br>${escape(withdraw.user.email)} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${withdraw.status === "COMPLETED" ? `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          rounded: true,
                          border: true,
                          color: "green"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(withdraw.status)}`;
                          }
                        }
                      )}` : `${withdraw.status === "PENDING" ? `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          rounded: true,
                          border: true,
                          color: "yellow"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(withdraw.status)}`;
                          }
                        }
                      )}` : `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          rounded: true,
                          border: true,
                          color: "red"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(withdraw.status)}`;
                          }
                        }
                      )}`}`} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(withdraw.method)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(defaultCurrencyFormatter.format(withdraw.amount))} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(defaultCurrencyFormatter.format(withdraw.fee))} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(withdraw.details)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${withdraw.status === "PENDING" ? `<div class="flex items-center gap-2">${validate_component(Button, "Button").$$render($$result, { pill: true, size: "sm", color: "green" }, {}, {
                        default: () => {
                          return `Confirmer`;
                        }
                      })} ${validate_component(Button, "Button").$$render(
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
                            return `Rejeter`;
                          }
                        }
                      )} </div>` : `${validate_component(Button, "Button").$$render(
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
                            return `Annuler
							`;
                          }
                        }
                      )}`} `;
                    }
                  })} `;
                }
              })}`;
            })}` : `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `<td colspan="7" data-svelte-h="svelte-dq3xo6"><div class="flex h-64"><span class="m-auto text-center text-xl font-bold">Pas trouvé</span></div></td>`;
              }
            })}`}`;
          }
        })}`;
      }
    })} ${data.page > 0 || data.withdraws.length ? `<div class="m-4">${validate_component(Pagination, "Pagination").$$render($$result, { large: true }, {}, {})}</div>` : ``} ${validate_component(Modal, "Modal").$$render(
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
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">${escape(actionMsg)}</h3> <div class="flex justify-center gap-2"><form action="${"?/" + escape(actionCtx, true)}" method="post" class="inline"><input type="hidden" name="id"${add_attribute("value", actionWithdrawId, 0)}> ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "red" }, {}, {
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
    )}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
