import { c as create_ssr_component, a as subscribe, e as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="flex h-96 items-center justify-center"><h1 class="text-5xl text-gray-500 dark:text-gray-400">${escape($page.status)}: ${escape($page.error?.message)}</h1></div>`;
});
export {
  Error as default
};
