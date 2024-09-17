import { c as create_ssr_component, b as compute_rest_props, f as spread, g as escape_attribute_value, h as escape_object, d as add_attribute } from "./ssr.js";
import { twMerge } from "tailwind-merge";
const logo = "data:image/svg+xml,%3csvg%20id='Layer_1'%20data-name='Layer%201'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3ctitle%3elogo%3c/title%3e%3cpath%20d='M351.257,87.073,160.143,220.893A10.551,10.551,0,0,1,142.857,233L64.681,287.736a32.566,32.566,0,0,1-8,45.355l58.705,83.839a32.565,32.565,0,0,1,45.355,8l78.176-54.739a10.551,10.551,0,0,1,17.286-12.1l191.114-133.82a32.566,32.566,0,0,1,8-45.355l-58.7-83.839A32.565,32.565,0,0,1,351.257,87.073ZM184.906,343.661q-2.214,7.958-11.662,14.572l-29.42,20.6L102.208,319.4l28.5-19.954q9.1-6.372,17.124-5.959t13.151,7.75a16.17,16.17,0,0,1-.592,20.519,17.072,17.072,0,0,1,11.937-.635,17.875,17.875,0,0,1,9.483,6.99Q187.125,335.7,184.906,343.661Zm56.348,7.411-3.811,2.668-5.337-7.622,3.811-2.668ZM230.58,335.828l-3.811,2.669-5.336-7.622,3.81-2.668Zm-10.673-15.243-3.811,2.668-5.337-7.621,3.811-2.669Zm-10.674-15.244-3.811,2.669-5.337-7.622,3.811-2.668ZM198.56,290.1l-3.811,2.668-5.337-7.621,3.811-2.669Zm-10.674-15.243-3.811,2.668-5.337-7.622,3.811-2.668Zm-10.674-15.244-3.81,2.668-5.337-7.621,3.811-2.669Zm-10.673-15.243-3.811,2.668-5.337-7.622,3.811-2.668Zm-7.861,90.273A8.4,8.4,0,0,0,153,336.485l-9.527,6.671,7.557,10.792,9.611-6.73q6.231-4.362,2.573-9.594A6.344,6.344,0,0,0,158.678,334.641Zm-12.44-18.561q-3.714-5.305-9.954-.947l-8.346,5.843,7.322,10.457,8.346-5.843Q149.848,321.219,146.238,316.08Z'%20fill='%2300bcd4'/%3e%3c/svg%3e";
const site = {
  shortName: "Sama Event",
  name: "Sama Event Dashboard",
  href: "#",
  //href: 'https://github.com/ikhsan3adi/backtix',
  imgAlt: "Logo",
  img: logo
  // img: 'https://raw.githubusercontent.com/ikhsan3adi/backtix/main/assets/logo.svg'
};
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size", "ariaLabel"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  let { ariaLabel = "Dark mode" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0) $$bindings.btnClass(btnClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  return `${$$result.head += `<!-- HEAD_svelte-1pa505f_START --><script data-svelte-h="svelte-mp99qu">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-1pa505f_END -->`, ""} <button${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
export {
  DarkMode as D,
  site as s
};
