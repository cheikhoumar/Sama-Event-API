import { c as create_ssr_component, v as validate_component, e as escape, d as add_attribute, k as each } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { d as dateTimeFormatterWithoutSeconds } from "../../../../chunks/date-time.formatter.js";
import { B as Badge } from "../../../../chunks/Badge.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../chunks/Button.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { M as Modal, E as ExclamationCircleOutline } from "../../../../chunks/ExclamationCircleOutline.js";
import { P as Pagination } from "../../../../chunks/Pagination.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHeadCell.js";
import { A } from "../../../../chunks/A.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { P } from "../../../../chunks/P.js";
import { C as CalendarMonthSolid } from "../../../../chunks/CalendarMonthSolid.js";
import { C as CheckSolid } from "../../../../chunks/CheckSolid.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let canUpdateMany;
  let selectedAll;
  let { data } = $$props;
  let selected = [];
  let selectAll = [];
  let previousSelectedAll = false;
  let actionModal = false;
  let actionCtx;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    selectedAll = selectAll.length === 1;
    {
      if (!previousSelectedAll && selectedAll) {
        selected = data.events.map((e) => e.id);
        previousSelectedAll = true;
      } else if (previousSelectedAll && !selectedAll) {
        selected = [];
        previousSelectedAll = false;
      }
    }
    canUpdateMany = selected.length > 0;
    $$rendered = `<div class="p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render(
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
              return `${validate_component(CalendarMonthSolid, "CalendarMonthSolid").$$render($$result, { class: "me-2 h-4 w-4" }, {}, {})} `;
            },
            default: () => {
              return `Evénement`;
            }
          })}`;
        }
      }
    )} <div class="max-w-screen-xl items-center justify-between lg:flex"><div class="mb-3 lg:mb-0">${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-3" }, {}, {
      default: () => {
        return `Gestion des événements`;
      }
    })} <div class="flex gap-2">${validate_component(P, "P").$$render($$result, {}, {}, {
      default: () => {
        return `Filter:`;
      }
    })} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/event",
        rounded: true,
        border: true,
        color: "purple",
        large: true
      },
      {},
      {
        default: () => {
          return `${!data.status && !data.deleted ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					TOUT`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/event?status=DRAFT&deleted=false",
        rounded: true,
        border: true,
        color: "yellow",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.status === "DRAFT" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					EN ATTENTE`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/event?status=PUBLISHED&deleted=false",
        rounded: true,
        border: true,
        color: "green",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.status === "PUBLISHED" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					PUBLIÉ`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/event?status=CANCELLED&deleted=false",
        rounded: true,
        border: true,
        color: "primary",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.status === "CANCELLED" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					ANNULER`;
        }
      }
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/event?status=REJECTED&deleted=false",
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
    )} ${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        href: "/admin/event?deleted=true",
        rounded: true,
        border: true,
        color: "dark",
        large: true
      },
      {},
      {
        default: () => {
          return `${data.deleted === "true" ? `${validate_component(CheckSolid, "CheckSolid").$$render($$result, { class: "me-1.5 h-2.5 w-2.5" }, {}, {})}` : ``}
					SUPPRIMÉ`;
        }
      }
    )}</div></div> <div class="mr-2 flex gap-2">${validate_component(Button, "Button").$$render(
      $$result,
      {
        pill: true,
        color: canUpdateMany ? "green" : "alternative",
        disabled: !canUpdateMany || data.status === "PUBLISHED"
      },
      {},
      {
        default: () => {
          return `Approuver`;
        }
      }
    )} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        pill: true,
        color: canUpdateMany ? "red" : "alternative",
        outline: canUpdateMany,
        disabled: !canUpdateMany || data.status === "REJECTED"
      },
      {},
      {
        default: () => {
          return `Rejeter`;
        }
      }
    )}</div></div> ${validate_component(Modal, "Modal").$$render(
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
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-p25pfs">Êtes-vous sûr ?</h3> <div class="flex justify-center gap-2"><form action="${"?/" + escape(actionCtx, true)}" method="post" class="inline"><input type="hidden" name="selectedIds"${add_attribute("value", selected, 0)}> ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "red" }, {}, {
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
    )}</div> ${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "pr-2 pl-4" }, {}, {
              default: () => {
                return `${validate_component(Checkbox, "Checkbox").$$render(
                  $$result,
                  { group: selectAll },
                  {
                    group: ($$value) => {
                      selectAll = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "pl-0" }, {}, {
              default: () => {
                return `Nom de l&#39;événement`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-2" }, {}, {
              default: () => {
                return `Emplacement`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Propriétaire`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Date de l&#39;événement`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Date de création`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Statut`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Action`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${data.events.length ? `${each(data.events, (event) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "pr-2 pl-4" }, {}, {
                    default: () => {
                      return `${validate_component(Checkbox, "Checkbox").$$render(
                        $$result,
                        { value: event.id, group: selected },
                        {
                          group: ($$value) => {
                            selected = $$value;
                            $$settled = false;
                          }
                        },
                        {}
                      )} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "pl-0" }, {}, {
                    default: () => {
                      return `${escape(event.name)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-2 max-w-64" }, {}, {
                    default: () => {
                      return `${event.location ? `${validate_component(A, "A").$$render(
                        $$result,
                        {
                          href: `https://www.google.com/maps/search/?api=1&query=${event.latitude},${event.longitude}`,
                          aClass: "underline line-clamp-3",
                          color: "blue"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(event.location)} `;
                          }
                        }
                      )}` : `${escape("unset")}`} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `<strong>${escape(event.user.username)}</strong><br>${escape(event.user.email)} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(dateTimeFormatterWithoutSeconds.format(event.date))} -
						${escape(dateTimeFormatterWithoutSeconds.format(event.endDate ?? event.date))} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(dateTimeFormatterWithoutSeconds.format(event.createdAt))} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${event.status === "PUBLISHED" ? `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          rounded: true,
                          border: true,
                          color: "green"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(event.status)}`;
                          }
                        }
                      )}` : `${event.status === "DRAFT" ? `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          rounded: true,
                          border: true,
                          color: "yellow"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(event.status)}`;
                          }
                        }
                      )}` : `${event.status === "REJECTED" ? `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          rounded: true,
                          border: true,
                          color: "red"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(event.status)}`;
                          }
                        }
                      )}` : `${event.deletedAt ? `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          rounded: true,
                          border: true,
                          color: "primary"
                        },
                        {},
                        {
                          default: () => {
                            return `SUPPRIMÉ`;
                          }
                        }
                      )}` : `${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          rounded: true,
                          border: true,
                          color: "none"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(event.status)}`;
                          }
                        }
                      )}`}`}`}`} `;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          href: "/admin/event/" + event.id,
                          pill: true,
                          size: "sm"
                        },
                        {},
                        {
                          default: () => {
                            return `Détails`;
                          }
                        }
                      )} `;
                    }
                  })} `;
                }
              })}`;
            })}` : `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `<td colspan="7" data-svelte-h="svelte-ljlmvl"><div class="flex h-64"><span class="m-auto text-center text-xl font-bold">Non trouvé</span></div></td>`;
              }
            })}`}`;
          }
        })}`;
      }
    })} ${data.page > 0 || data.events.length ? `<div class="m-4">${validate_component(Pagination, "Pagination").$$render($$result, { large: true }, {}, {})}</div>` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
