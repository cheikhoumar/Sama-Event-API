import { c as create_ssr_component, f as compute_rest_props, s as setContext, g as spread, i as escape_object, h as escape_attribute_value, j as getContext } from './ssr-CwhHQPJV.js';
import { t as twMerge } from './bundle-mjs-CQoFqR0w.js';
import { c as clampSize } from './Input-DnmfLeDc.js';

const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "divClass"]);
  let { size = "md" } = $$props;
  let { divClass = "inline-flex rounded-lg shadow-sm" } = $$props;
  setContext("group", { size });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0) $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      },
      { role: "group" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
const InputAddon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let divClass;
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = void 0 } = $$props;
  let background = getContext("background");
  let group = getContext("group");
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500"
  };
  const darkBgClasses = {
    base: "dark:bg-gray-600 dark:text-gray-400",
    tinted: "dark:bg-gray-500 dark:text-gray-300"
  };
  const divider = {
    base: "dark:border-e-gray-700 dark:last:border-e-gray-600",
    tinted: "dark:border-e-gray-600 dark:last:border-e-gray-500"
  };
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const prefixPadding = { sm: "px-2", md: "px-3", lg: "px-4" };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  _size = size || clampSize(group?.size) || "md";
  divClass = twMerge(
    textSizes[_size],
    prefixPadding[_size],
    background ? borderClasses["tinted"] : borderClasses["base"],
    "text-gray-500 bg-gray-200",
    background ? darkBgClasses.tinted : darkBgClasses.base,
    background ? divider.tinted : divider.base,
    "inline-flex items-center border-t border-b first:border-s border-e",
    "first:rounded-s-lg last:rounded-e-lg",
    $$props.class
  );
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}>${slots.default ? slots.default({}) : ``}</div> `;
});

export { ButtonGroup as B, InputAddon as I };
//# sourceMappingURL=InputAddon-BD8bkjDY.js.map
