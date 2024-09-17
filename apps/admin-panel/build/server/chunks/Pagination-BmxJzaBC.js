import { c as create_ssr_component, l as createEventDispatcher, s as setContext, b as add_attribute, v as validate_component, d as each, e as escape, j as getContext } from './ssr-CwhHQPJV.js';
import { t as twMerge } from './bundle-mjs-CQoFqR0w.js';
import { i as is_void } from './Button-CjJFDh1v.js';

const PaginationItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = void 0 } = $$props;
  let { active = false } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { large = false } = $$props;
  const group = getContext("group");
  const table = getContext("table");
  let defaultClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0) $$bindings.normalClass(normalClass);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0) $$bindings.large(large);
  defaultClass = twMerge(
    "flex items-center font-medium",
    large ? "h-10 px-4 text-base" : "h-8 px-3 text-sm",
    group ? "" : table ? "rounded" : "rounded-lg",
    // table || 'border border-gray-300 dark:border-gray-700 dark:bg-gray-800',
    table ? "" : "border",
    active ? activeClass : normalClass,
    $$props.class
  );
  return ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${add_attribute("href", href, 0)}${add_attribute("class", defaultClass, 0)}${add_attribute("role", href ? "button" : void 0, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")} `;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages = [] } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { ulClass = "inline-flex -space-x-px rtl:space-x-reverse items-center" } = $$props;
  let { table = false } = $$props;
  let { large = false } = $$props;
  let { ariaLabel = "Page navigation" } = $$props;
  createEventDispatcher();
  setContext("group", true);
  setContext("table", table);
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0) $$bindings.pages(pages);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0) $$bindings.normalClass(normalClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0) $$bindings.ulClass(ulClass);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0) $$bindings.table(table);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0) $$bindings.large(large);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  return `<nav${add_attribute("aria-label", ariaLabel, 0)}><ul${add_attribute("class", twMerge(ulClass, table && "divide-x rtl:divide-x-reverse dark divide-gray-700 dark:divide-gray-700", $$props.class), 0)}><li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      large,
      normalClass,
      class: table ? "rounded-l" : "rounded-s-lg"
    },
    {},
    {
      default: () => {
        return `${slots.prev ? slots.prev({}) : `Previous`}`;
      }
    }
  )}</li> ${each(pages, ({ name, href, active }) => {
    return `<li>${validate_component(PaginationItem, "PaginationItem").$$render(
      $$result,
      {
        large,
        active,
        activeClass,
        normalClass,
        href
      },
      {},
      {
        default: () => {
          return `${escape(name)} `;
        }
      }
    )} </li>`;
  })} <li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      large,
      normalClass,
      class: table ? "rounded-r" : "rounded-e-lg"
    },
    {},
    {
      default: () => {
        return `${slots.next ? slots.next({}) : `Next`}`;
      }
    }
  )}</li></ul></nav> `;
});

export { Pagination as P };
//# sourceMappingURL=Pagination-BmxJzaBC.js.map
