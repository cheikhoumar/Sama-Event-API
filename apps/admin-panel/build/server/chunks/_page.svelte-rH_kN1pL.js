import { c as create_ssr_component, a as subscribe, v as validate_component, e as escape, d as each, b as add_attribute, f as compute_rest_props, s as setContext, j as getContext, g as spread, h as escape_attribute_value, i as escape_object, k as compute_slots } from './ssr-CwhHQPJV.js';
import { p as page } from './stores-7u5OHupE.js';
import { d as defaultCurrencyFormatter } from './currency.formatter-Bv784HBn.js';
import { d as dateTimeFormatterWithoutSeconds } from './date-time.formatter-qAmddmYC.js';
import { B as Button, i as is_void } from './Button-CjJFDh1v.js';
import { C as Card } from './Card-CeYBGjbv.js';
import { t as twMerge } from './bundle-mjs-CQoFqR0w.js';
import { P as Popper } from './Popper-N_CjcaR0.js';
import { w as writable } from './index2-lfYVrsfV.js';
import { W as Wrapper } from './Wrapper-Y4aakP84.js';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from './TableHeadCell-4LqWHwYC.js';
import { H as Heading } from './Heading-BzVJoxXD.js';
import './client-BUusD8wq.js';
import './exports-BGi7-Rnc.js';
import './Frame-Dp7Rzroq.js';

const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  return `<div${add_attribute("class", $$props.class, 0)}></div> `;
});
const Dropdown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let containerCls;
  let headerCls;
  let ulCls;
  let footerCls;
  let $$restProps = compute_rest_props($$props, [
    "activeUrl",
    "open",
    "containerClass",
    "classContainer",
    "headerClass",
    "classHeader",
    "footerClass",
    "classFooter",
    "activeClass",
    "classActive"
  ]);
  let $$slots = compute_slots(slots);
  const activeUrlStore = writable("");
  let { activeUrl = "" } = $$props;
  let { open = false } = $$props;
  let { containerClass = "divide-y z-50" } = $$props;
  let { classContainer = void 0 } = $$props;
  let { headerClass = "py-1 overflow-hidden rounded-t-lg" } = $$props;
  let { classHeader = void 0 } = $$props;
  let { footerClass = "py-1 overflow-hidden rounded-b-lg" } = $$props;
  let { classFooter = void 0 } = $$props;
  let { activeClass = "text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900" } = $$props;
  let { classActive = void 0 } = $$props;
  let activeCls = twMerge(activeClass, classActive);
  setContext("DropdownType", { activeClass: activeCls });
  setContext("activeUrl", activeUrlStore);
  if ($$props.activeUrl === void 0 && $$bindings.activeUrl && activeUrl !== void 0) $$bindings.activeUrl(activeUrl);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.containerClass === void 0 && $$bindings.containerClass && containerClass !== void 0) $$bindings.containerClass(containerClass);
  if ($$props.classContainer === void 0 && $$bindings.classContainer && classContainer !== void 0) $$bindings.classContainer(classContainer);
  if ($$props.headerClass === void 0 && $$bindings.headerClass && headerClass !== void 0) $$bindings.headerClass(headerClass);
  if ($$props.classHeader === void 0 && $$bindings.classHeader && classHeader !== void 0) $$bindings.classHeader(classHeader);
  if ($$props.footerClass === void 0 && $$bindings.footerClass && footerClass !== void 0) $$bindings.footerClass(footerClass);
  if ($$props.classFooter === void 0 && $$bindings.classFooter && classFooter !== void 0) $$bindings.classFooter(classFooter);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.classActive === void 0 && $$bindings.classActive && classActive !== void 0) $$bindings.classActive(classActive);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      activeUrlStore.set(activeUrl);
    }
    containerCls = twMerge(containerClass, classContainer);
    headerCls = twMerge(headerClass, classHeader);
    ulCls = twMerge("py-1", $$props.class);
    footerCls = twMerge(footerClass, classFooter);
    {
      {
        $$restProps.arrow = $$restProps.arrow ?? false;
        $$restProps.trigger = $$restProps.trigger ?? "click";
        $$restProps.placement = $$restProps.placement ?? "bottom";
        $$restProps.color = $$restProps.color ?? "dropdown";
        $$restProps.shadow = $$restProps.shadow ?? true;
        $$restProps.rounded = $$restProps.rounded ?? true;
      }
    }
    $$rendered = `${validate_component(Popper, "Popper").$$render(
      $$result,
      Object.assign({}, { activeContent: true }, $$restProps, { class: containerCls }, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${$$slots.header ? `<div${add_attribute("class", headerCls, 0)}>${slots.header ? slots.header({}) : ``}</div>` : ``} <ul${add_attribute("class", ulCls, 0)}>${slots.default ? slots.default({}) : ``}</ul> ${$$slots.footer ? `<div${add_attribute("class", footerCls, 0)}>${slots.footer ? slots.footer({}) : ``}</div>` : ``}`;
        }
      }
    )} `;
  } while (!$$settled);
  return $$rendered;
});
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let liClass;
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href", "activeClass"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let { activeClass = void 0 } = $$props;
  const context = getContext("DropdownType") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0) $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  active = sidebarUrl ? href === sidebarUrl : false;
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", active && (activeClass ?? context.activeClass), $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            {
              role: escape_attribute_value(href ? "link" : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })} `;
});
const ChevronDownSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "chevron down solid" } = $$props;
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
      { viewBox: "0 0 10 6" }
    ],
    {}
  )}><path fill="currentColor" d="M5.012 6a1 1 0 0 1-.707-.292l-4-3.992A.998.998 0 0 1 1.395.08a1 1 0 0 1 .324.224L5.012 3.59 8.305.305A1.001 1.001 0 0 1 10 1.014a.997.997 0 0 1-.28.702l-4 3.992A1.001 1.001 0 0 1 5.011 6Z"></path></svg> `;
});
const ChevronRightSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "chevron right solid" } = $$props;
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
      { viewBox: "0 0 6 10" }
    ],
    {}
  )}><path fill="currentColor" d="M1.01 10a.997.997 0 0 1-.705-1.705L3.59 5.006.305 1.717A.999.999 0 1 1 1.715.305L5.709 4.3a1 1 0 0 1 0 1.412L1.716 9.707A.998.998 0 0 1 1.01 10Z"></path></svg> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const isNominal = $page.url.searchParams.get("chartData") === "value";
  const sum = (p, c) => p + c;
  const profit = defaultCurrencyFormatter.format(data.successfulWithdraw.map((e) => e.fee).reduce(sum, 0));
  const totalWithdrawn = defaultCurrencyFormatter.format(data.successfulWithdraw.map((e) => e.amount).reduce(sum, 0));
  const totalPurchasesOccured = defaultCurrencyFormatter.format(data.purchases.map((e) => e.price).reduce(sum, 0));
  const totalPurchasesRefunded = defaultCurrencyFormatter.format(data.refundedPurchases.map((e) => e.price).reduce(sum, 0));
  let chartOptions = {
    chart: {
      height: "335px",
      width: "100%",
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: { enabled: false },
      toolbar: { show: true }
    },
    tooltip: { enabled: true, x: { show: true } },
    dataLabels: { enabled: true },
    stroke: { width: 4, curve: "monotoneCubic" },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: -26 }
    },
    series: [
      {
        name: "Purchases",
        data: data.chartData.map((e) => Math.trunc(e.purchases)),
        color: "#3CBA5D"
      },
      {
        name: "Withdraw requests",
        data: data.chartData.map((e) => Math.trunc(e.withdraws)),
        color: "#4A90E0"
      }
    ].concat(isNominal ? {
      name: "Profit",
      data: data.chartData.map((e) => Math.trunc(e.profits)),
      color: "#BD4AE0"
    } : []),
    legend: { show: true },
    xaxis: {
      categories: data.chartData.map((e) => e.date),
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
        }
      },
      axisBorder: { show: true },
      axisTicks: { show: true }
    },
    yaxis: { show: true }
  };
  const selectedDateRange = $page.url.searchParams.get("chartRange") ?? "7";
  const selecteDataType = $page.url.searchParams.get("chartData") ?? "count";
  const dateRanges = { 7: "Last week", 30: "Last 30 days" };
  const dataType = { count: "Count", value: "Nominal" };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$unsubscribe_page();
  return `<div class="px-4 pt-6"><div class="grid grid-cols-1 gap-4 2xl:grid-cols-3"><div class="w-full 2xl:col-span-2">${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `<div class="mb-5 flex justify-between"><div class="flex gap-8"><div>${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h6",
          color: "text-gray-500 dark:text-gray-400",
          customSize: "font-normal"
        },
        {},
        {
          default: () => {
            return `Achats`;
          }
        }
      )} <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white">${escape(isNominal ? defaultCurrencyFormatter.format(data.chartData.map((e) => e.purchases).reduce(sum, 0)) : data.chartData.map((e) => e.purchases).reduce(sum, 0))}</p></div> <div>${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h6",
          color: "text-gray-500 dark:text-gray-400",
          customSize: "font-normal"
        },
        {},
        {
          default: () => {
            return `Demande de retrait`;
          }
        }
      )} <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white">${escape(isNominal ? defaultCurrencyFormatter.format(data.chartData.map((e) => e.withdraws).reduce(sum, 0)) : data.chartData.map((e) => e.withdraws).reduce(sum, 0))}</p></div> ${isNominal ? `<div>${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h6",
          color: "text-gray-500 dark:text-gray-400",
          customSize: "font-normal"
        },
        {},
        {
          default: () => {
            return `Profit`;
          }
        }
      )} <p class="text-2xl font-bold leading-none text-gray-900 dark:text-white">${escape(defaultCurrencyFormatter.format(data.chartData.map((e) => e.profits).reduce(sum, 0)))}</p></div>` : ``}</div> <div class="flex gap-2"><div>${validate_component(Button, "Button").$$render($$result, { color: "light", class: "px-3 py-2" }, {}, {
        default: () => {
          return `${escape(dataType[selecteDataType])} ${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render($$result, { class: "ms-1.5 h-2.5 w-2.5" }, {}, {})}`;
        }
      })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-40" }, {}, {
        default: () => {
          return `${each(Object.keys(dataType), (prop) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render(
              $$result,
              {
                href: "?chartData=" + prop + "&chartRange=" + selectedDateRange,
                active: $page.url.searchParams.get("chartData") === prop,
                "data-sveltekit-reload": true
              },
              {},
              {
                default: () => {
                  return `${escape(dataType[prop])} `;
                }
              }
            )}`;
          })}`;
        }
      })}</div> <div>${validate_component(Button, "Button").$$render($$result, { color: "light", class: "px-3 py-2" }, {}, {
        default: () => {
          return `${escape(dateRanges[selectedDateRange])} ${validate_component(ChevronDownSolid, "ChevronDownSolid").$$render($$result, { class: "ms-1.5 h-2.5 w-2.5" }, {}, {})}`;
        }
      })} ${validate_component(Dropdown, "Dropdown").$$render($$result, { class: "w-40" }, {}, {
        default: () => {
          return `${each(Object.keys(dateRanges), (prop) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render(
              $$result,
              {
                href: "?chartData=" + selecteDataType + "&chartRange=" + prop,
                active: $page.url.searchParams.get("chartRange") === prop,
                "data-sveltekit-reload": true
              },
              {},
              {
                default: () => {
                  return `${escape(dateRanges[prop])} `;
                }
              }
            )}`;
          })}`;
        }
      })}</div></div></div> ${validate_component(Chart, "Chart").$$render($$result, { options: chartOptions }, {}, {})}`;
    }
  })}</div> <div class="flex w-full flex-col gap-4">${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return `<div class="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700"><dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-gjyezc">Profit</dt><dd class="text-3xl font-bold leading-none text-green-500 dark:text-green-400">${escape(profit)}</dd></dl> <div><span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">Frais de retrait: ${escape(defaultCurrencyFormatter.format(data.withdrawFee.amount))}</span></div></div> <div class="grid grid-cols-2 py-3"><dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-x55ra3">Demande de retrait
						</dt><dd class="text-primary-900 text-xl font-bold leading-none dark:text-white">${escape(data.successfulWithdraw.length)}</dd></dl> <dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1p0gifb">Total des retraits
						</dt><dd class="text-xl font-bold leading-none text-green-500 dark:text-green-400">${escape(totalWithdrawn)}</dd></dl></div>`;
    }
  })} <div class="grid grid-cols-2 gap-4 2xl:grid-cols-1">${validate_component(Card, "Card").$$render($$result, { horizontal: true }, {}, {
    default: () => {
      return `<div class="w-full"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Total des achats effectués: ${escape(`${data.purchasesCount ?? 0}`)}</h3> <span class="text-2xl font-bold leading-none text-yellow-500 sm:text-3xl dark:text-yellow-400">${escape(totalPurchasesOccured)}</span> <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1chbm28">Achats réussis</p></div>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { horizontal: true }, {}, {
    default: () => {
      return `<div class="w-full"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400">Total des achats remboursés: ${escape(`${data.refundedPurchasesCount ?? 0}`)}</h3> <span class="text-2xl font-bold leading-none text-red-500 sm:text-3xl dark:text-red-400">${escape(totalPurchasesRefunded)}</span></div>`;
    }
  })}</div></div></div> <div class="mt-4 grid w-full grid-cols-2 gap-4 xl:grid-cols-4">${validate_component(Card, "Card").$$render($$result, { horizontal: true }, {}, {
    default: () => {
      return `<div class="w-full"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-10yst6a">Événement publié</h3> <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">${escape(data.eventsCount)}</span> <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-vg16uv">Publié</p></div>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { horizontal: true }, {}, {
    default: () => {
      return `<div class="w-full"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-4zmssq">Projet d&#39;événement</h3> <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">${escape(data.draftEventsCount)}</span> <p class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-1hl4z57">Nécessite l&#39;approbation</p></div>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { horizontal: true }, {}, {
    default: () => {
      return `<div class="w-full"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-o1s5sq">Événement rejeté</h3> <span class="text-2xl font-bold leading-none text-red-500 sm:text-3xl dark:text-red-400">${escape(data.rejectedEventsCount)}</span></div>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { horizontal: true }, {}, {
    default: () => {
      return `<div class="w-full"><h3 class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-hw80av">Nombre d&#39;utilisateurs activés</h3> <span class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">${escape(data.userCount)}</span></div>`;
    }
  })}</div> <div class="mt-4 w-full">${validate_component(Card, "Card").$$render($$result, { size: "xl" }, {}, {
    default: () => {
      return ` <div class="items-center justify-between lg:flex"><div class="mb-4 lg:mb-0">${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-2" }, {}, {
        default: () => {
          return `Dernier événement créé`;
        }
      })} <span class="text-base font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-gqbhq8">Voici une liste des derniers événements</span></div></div>  <div class="mt-6 flex flex-col"><div class="overflow-x-auto rounded-lg"><div class="inline-block min-w-full align-middle"><div class="overflow-hidden shadow sm:rounded-lg">${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
        default: () => {
          return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `Nom de l&#39;événement`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
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
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-0" }, {}, {
                default: () => {
                  return `Tickets vendus`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-1" }, {}, {
                default: () => {
                  return `Revenu`;
                }
              })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, { padding: "px-0" }, {}, {})}`;
            }
          })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
            default: () => {
              return `${data.recentEvents.length ? `${each(data.recentEvents, (event) => {
                return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(event.name)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(event.location)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<strong>${escape(event.user.username)}</strong><br>${escape(event.user.email)} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(dateTimeFormatterWithoutSeconds.format(new Date(event.date)))} -
													${escape(dateTimeFormatterWithoutSeconds.format(event.endDate ? new Date(/* @__PURE__ */ new Date()) : new Date(event.date)))} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-0" }, {}, {
                      default: () => {
                        return `${escape(event.tickets.map((e) => e._count.purchases).reduce((p, c) => p + c))} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-1" }, {}, {
                      default: () => {
                        return `${escape(defaultCurrencyFormatter.format(event.tickets.map((e) => {
                          return e.purchases.map((e2) => e2.price).reduce((p, c) => p + c, 0);
                        }).reduce((p, c) => p + c)))} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { tdClass: "px-1" }, {}, {
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
                  return `<td colspan="7" data-svelte-h="svelte-okwq0y"><div class="flex h-64"><span class="m-auto text-center text-xl font-bold">Pas disponible</span></div></td>`;
                }
              })}`}`;
            }
          })}`;
        }
      })}</div></div></div></div>  <div class="flex items-center justify-end pt-3 sm:pt-6"><div class="flex-shrink-0"><a href="/admin/event?status=PUBLISHED" class="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase hover:bg-gray-100 sm:text-sm dark:hover:bg-gray-700">Evénements
						${validate_component(ChevronRightSolid, "ChevronRightSolid").$$render($$result, { class: "ms-1.5 h-2.5 w-2.5" }, {}, {})}</a></div></div>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-rH_kN1pL.js.map
