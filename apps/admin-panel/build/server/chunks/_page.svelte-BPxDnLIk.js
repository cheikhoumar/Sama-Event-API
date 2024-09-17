import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape } from './ssr-CwhHQPJV.js';
import { D as DarkMode, s as site } from './DarkMode-C65swhF4.js';
import { B as Button } from './Button-CjJFDh1v.js';
import './bundle-mjs-CQoFqR0w.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mainClass = "bg-gray-50 dark:bg-gray-900" } = $$props;
  let { mainDivClass = "flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900" } = $$props;
  let { siteLinkClass = "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white" } = $$props;
  let { siteImgClass = "mr-4 h-11" } = $$props;
  if ($$props.mainClass === void 0 && $$bindings.mainClass && mainClass !== void 0) $$bindings.mainClass(mainClass);
  if ($$props.mainDivClass === void 0 && $$bindings.mainDivClass && mainDivClass !== void 0) $$bindings.mainDivClass(mainDivClass);
  if ($$props.siteLinkClass === void 0 && $$bindings.siteLinkClass && siteLinkClass !== void 0) $$bindings.siteLinkClass(siteLinkClass);
  if ($$props.siteImgClass === void 0 && $$bindings.siteImgClass && siteImgClass !== void 0) $$bindings.siteImgClass(siteImgClass);
  return `<main${add_attribute("class", mainClass, 0)}><div class="absolute p-4">${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})}</div> <div${add_attribute("class", mainDivClass, 0)}> <a${add_attribute("href", site.href, 0)}${add_attribute("class", siteLinkClass, 0)}><img${add_attribute("src", site.img, 0)}${add_attribute("class", siteImgClass, 0)}${add_attribute("alt", site.imgAlt, 0)}> <span>${escape(site.name)}</span></a> <div class="flex">${validate_component(Button, "Button").$$render($$result, { href: "/admin", size: "lg", pill: true }, {}, {
    default: () => {
      return `Entrer dans le dashboard`;
    }
  })}</div></div></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BPxDnLIk.js.map
