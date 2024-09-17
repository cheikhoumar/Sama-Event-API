import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each, f as compute_rest_props, l as createEventDispatcher, s as setContext, g as spread, i as escape_object, h as escape_attribute_value, j as getContext, a as subscribe } from './ssr-CwhHQPJV.js';
import { d as defaultCurrencyFormatter } from './currency.formatter-Bv784HBn.js';
import { d as dateTimeFormatterWithoutSeconds, a as defaultDateTimeFormatter } from './date-time.formatter-qAmddmYC.js';
import { A as Avatar, I as Indicator } from './Avatar-NXDzR0cU.js';
import { B as Badge } from './Badge-BJyk0Dmk.js';
import { B as Breadcrumb, a as BreadcrumbItem } from './BreadcrumbItem-C0Nsfyu1.js';
import { B as Button } from './Button-CjJFDh1v.js';
import { C as Card } from './Card-CeYBGjbv.js';
import { w as writable } from './index2-lfYVrsfV.js';
import { t as twMerge } from './bundle-mjs-CQoFqR0w.js';
import { M as Modal, E as ExclamationCircleOutline } from './ExclamationCircleOutline-B3jA9YgF.js';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from './TableHeadCell-4LqWHwYC.js';
import { H as Heading } from './Heading-BzVJoxXD.js';
import { P } from './P-HZqtzR9B.js';
import { C as CalendarMonthSolid } from './CalendarMonthSolid-CnGPfwjd.js';
import './CloseButton-D876vcrf.js';
import './Frame-Dp7Rzroq.js';

const ControlButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { forward: forward2 } = $$props;
  let { name } = $$props;
  let buttonCls;
  if ($$props.forward === void 0 && $$bindings.forward && forward2 !== void 0) $$bindings.forward(forward2);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  buttonCls = twMerge("flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-none text-white dark:text-gray-300", forward2 ? "end-0" : "start-0", $$props.class);
  return `<button type="button"${add_attribute("class", buttonCls, 0)}>${slots.default ? slots.default({}) : ` <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${forward2 ? `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>` : `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="sr-only">${escape(name)}</span></span> `}</button> `;
});
const canChangeSlide = ({ lastSlideChange, slideDuration, slideDurationRatio = 1 }) => {
  if (lastSlideChange && (/* @__PURE__ */ new Date()).getTime() - lastSlideChange.getTime() < slideDuration * slideDurationRatio) {
    console.warn("Can't change slide yet, too soon");
    return false;
  }
  return true;
};
const Controls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const { update } = state;
  function changeSlide(forward2) {
    if (!canChangeSlide({
      lastSlideChange: $state.lastSlideChange,
      slideDuration: $state.slideDuration,
      slideDurationRatio: 0.75
    })) {
      return;
    }
    if (forward2) {
      update((_state) => {
        _state.forward = true;
        _state.index = _state.index >= _state.images.length - 1 ? 0 : _state.index + 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    } else {
      update((_state) => {
        _state.forward = false;
        _state.index = _state.index <= 0 ? _state.images.length - 1 : _state.index - 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    }
  }
  $$unsubscribe_state();
  return ` ${slots.default ? slots.default({ ControlButton, changeSlide }) : ` ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Previous",
      forward: false,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Next",
      forward: true,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} `}`;
});
const Indicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  $$unsubscribe_state();
  return `<div${add_attribute("class", twMerge("flex absolute bottom-5 start-1/2 z-30 space-x-3 rtl:space-x-reverse -translate-x-1/2 rtl:translate-x-1/2", $$props.class), 0)}>${each($state.images, (_, idx) => {
    let selected = $state.index === idx;
    return ` <button>${slots.default ? slots.default({ Indicator, selected, index: idx }) : ` ${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        class: twMerge("bg-gray-100 hover:bg-gray-300", selected ? activeClass : inactiveClass)
      },
      {},
      {}
    )} `} </button>`;
  })}</div> `;
});
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgClass;
  let $$restProps = compute_rest_props($$props, ["image", "transition"]);
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { image } = $$props;
  let { transition = null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  ({
    x: $state.forward ? "100%" : "-100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  ({
    x: $state.forward ? "-100%" : "100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  imgClass = twMerge("absolute block !w-full h-full object-cover", $$props.class);
  $$unsubscribe_state();
  return `${transition ? `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>` : `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>`} `;
});
let divClass = "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "imgClass"
  ]);
  let { images } = $$props;
  let { index = 0 } = $$props;
  let { slideDuration = 1e3 } = $$props;
  let { transition = null } = $$props;
  let { duration = 0 } = $$props;
  let { ariaLabel = "Draggable Carousel" } = $$props;
  let { imgClass = "" } = $$props;
  const dispatch = createEventDispatcher();
  const { set, subscribe: subscribe2, update } = writable({
    images,
    index,
    forward: true,
    slideDuration,
    lastSlideChange: /* @__PURE__ */ new Date()
  });
  const state = {
    set: (_state) => set({
      index: _state.index,
      images: _state.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration,
      forward: forward2
    }),
    subscribe: subscribe2,
    update
  };
  let forward2 = true;
  setContext("state", state);
  subscribe2((_state) => {
    index = _state.index;
    forward2 = _state.forward;
    dispatch("change", images[index]);
  });
  let carouselDiv;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.slideDuration === void 0 && $$bindings.slideDuration && slideDuration !== void 0) $$bindings.slideDuration(slideDuration);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  return ` ${$$result.head += `<!-- HEAD_svelte-h5oyes_START -->${images.length > 0 ? `${each(images, (image) => {
    return `<link rel="preload"${add_attribute("href", image.src, 0)} as="image">`;
  })}` : ``}<!-- HEAD_svelte-h5oyes_END -->`, ""}   <div class="relative" role="button"${add_attribute("aria-label", ariaLabel, 0)} tabindex="0"${add_attribute("this", carouselDiv, 0)}><div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(
          divClass,
          "transition-transform",
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.slide ? slots.slide({ Slide, index }) : ` ${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: images[index],
      class: imgClass,
      transition
    },
    {},
    {}
  )} `}</div> ${slots.default ? slots.default({ index, Controls, Indicators }) : ``}</div> `;
});
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["selected", "activeClass", "inactiveClass"]);
  let { selected = false } = $$props;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  return `<img${spread(
    [
      { alt: "..." },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(selected ? activeClass : inactiveClass, $$props.class))
      }
    ],
    {}
  )}> `;
});
const Thumbnails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let { index = 0 } = $$props;
  let { ariaLabel = "Click to view image" } = $$props;
  let { imgClass = "" } = $$props;
  let { throttleDelay = 650 } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  if ($$props.throttleDelay === void 0 && $$bindings.throttleDelay && throttleDelay !== void 0) $$bindings.throttleDelay(throttleDelay);
  index = (index + images.length) % images.length;
  return `<div${add_attribute("class", twMerge("flex flex-row justify-center bg-gray-100 w-full", $$props.class), 0)}>${each(images, (image, idx) => {
    let selected = index === idx;
    return `  <button${add_attribute("aria-label", ariaLabel, 0)}>${slots.default ? slots.default({ Thumbnail, image, selected, imgClass }) : ` ${validate_component(Thumbnail, "Thumbnail").$$render($$result, Object.assign({}, image, { selected }, { class: imgClass }), {}, {})} `} </button>`;
  })}</div> `;
});
const ImageSolid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  let { ariaLabel = "image solid" } = $$props;
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
      { viewBox: "0 0 20 18" }
    ],
    {}
  )}><path fill="currentColor" d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"></path></svg> `;
});
let forward = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { event, images, tickets, userImage } = data;
  let index = 0;
  let selectedImage;
  let actionModal = false;
  let actionCtx;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="p-4">${validate_component(Breadcrumb, "Breadcrumb").$$render(
      $$result,
      {
        "aria-label": "breadcrumb",
        navClass: "mb-5"
      },
      {},
      {
        default: () => {
          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
            $$result,
            {
              href: "/admin/event?status=" + event.status,
              home: true
            },
            {},
            {
              icon: () => {
                return `${validate_component(CalendarMonthSolid, "CalendarMonthSolid").$$render($$result, { class: "me-2 h-4 w-4" }, {}, {})} `;
              },
              default: () => {
                return `Événement`;
              }
            }
          )} ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
            default: () => {
              return `Détail de l&#39;événement`;
            }
          })}`;
        }
      }
    )} <div class="flex items-center justify-between"><div>${validate_component(Heading, "Heading").$$render($$result, { tag: "h2", class: "mb-3" }, {}, {
      default: () => {
        return `${escape(event?.name)}`;
      }
    })}</div> ${event.status === "DRAFT" ? `<div class="flex gap-4">${validate_component(Button, "Button").$$render($$result, { pill: true, color: "green", href: "" }, {}, {
      default: () => {
        return `<span class="mx-4" data-svelte-h="svelte-174izfx">Approuver</span>`;
      }
    })} ${validate_component(Button, "Button").$$render(
      $$result,
      {
        pill: true,
        outline: true,
        color: "red",
        href: ""
      },
      {},
      {
        default: () => {
          return `<span class="mx-4" data-svelte-h="svelte-84x5l2">Rejeter</span>`;
        }
      }
    )}</div>` : `${event.status === "PUBLISHED" ? `${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        rounded: true,
        border: true,
        color: "green",
        large: true,
        class: "mr-4"
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
        color: "red",
        large: true,
        class: "mr-4"
      },
      {},
      {
        default: () => {
          return `${escape(event.status)}`;
        }
      }
    )}` : `${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        rounded: true,
        border: true,
        color: "primary",
        large: true,
        class: "mr-4"
      },
      {},
      {
        default: () => {
          return `${escape(event.status)}`;
        }
      }
    )}`}`}`}</div> ${validate_component(Modal, "Modal").$$render(
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
          )} <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" data-svelte-h="svelte-p25pfs">Êtes-vous sûr ?</h3> <div class="flex justify-center gap-2"><form action="${"?/" + escape(actionCtx, true)}" method="post" class="inline"><input type="hidden" name="id"${add_attribute("value", event.id, 0)}> ${validate_component(Button, "Button").$$render($$result, { type: "submit", color: "red" }, {}, {
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
    )}</div> <div class="mb-3 flex w-full flex-col gap-4 px-4 pb-4 md:flex-row"><div class="w-full md:w-2/3">${validate_component(Carousel, "Carousel").$$render(
      $$result,
      { images, forward, transition: null, index },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ Indicators: Indicators2, Controls: Controls2 }) => {
          return `${validate_component(Controls2, "Controls").$$render($$result, {}, {}, {})} ${validate_component(Indicators2, "Indicators").$$render($$result, {}, {}, {})}`;
        }
      }
    )} <div class="my-2 h-10 rounded bg-gray-300 p-2 dark:bg-gray-700 dark:text-white">${escape(selectedImage?.alt)}</div> ${validate_component(Thumbnails, "Thumbnails").$$render(
      $$result,
      { images, forward, imgClass: "h-16", index },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="w-full md:w-1/3"><div class="mb-4 flex items-center gap-4">${userImage ? `${validate_component(Avatar, "Avatar").$$render($$result, { src: userImage, alt: event.user.username }, {}, {})}` : `${validate_component(Avatar, "Avatar").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(event?.user.fullname[0])}`;
      }
    })}`} <div class="flex flex-col">${validate_component(Heading, "Heading").$$render($$result, { tag: "h6" }, {}, {
      default: () => {
        return `${escape(event.user.fullname)}`;
      }
    })} <span class="text-gray-700 dark:text-gray-400">${escape(event.user.username)}</span></div></div> <ul class="text-gray-700 dark:text-gray-400"><li>Créé à: ${escape(dateTimeFormatterWithoutSeconds.format(event.createdAt))}</li> <li>Date de début: ${escape(dateTimeFormatterWithoutSeconds.format(event.date))}</li> <li>Date de fin: ${escape(dateTimeFormatterWithoutSeconds.format(event.endDate ?? event.date))}</li> <li>Total du stock initial de tickets: ${escape(event.tickets.map((e) => e.stock).reduce((p, c) => p + c))}</li> <li>Total des tickets vendus: ${escape(event.tickets.map((e) => e._count.purchases).reduce((p, c) => p + c))}</li> <li>Total du stock actuel de tickets: ${escape(event.tickets.map((e) => e.currentStock).reduce((p, c) => p + c))}</li></ul> ${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "my-2" }, {}, {
      default: () => {
        return `Catégories`;
      }
    })} <div class="mb-4 mt-2 flex gap-2">${event.categories.length ? `${each(event.categories, (c) => {
      return `${validate_component(Badge, "Badge").$$render(
        $$result,
        {
          border: true,
          rounded: true,
          color: "primary"
        },
        {},
        {
          default: () => {
            return `${escape(c)}`;
          }
        }
      )}`;
    })}` : `${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        border: true,
        rounded: true,
        color: "primary"
      },
      {},
      {
        default: () => {
          return `Pas de catégories`;
        }
      }
    )}`}</div> ${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", class: "my-2" }, {}, {
      default: () => {
        return `Déscription`;
      }
    })} ${validate_component(P, "P").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(event.description)}`;
      }
    })}</div></div> ${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "mb-4 px-4" }, {}, {
      default: () => {
        return `Tickets`;
      }
    })} <div class="flex flex-wrap gap-4 px-4">${each(tickets, (ticket) => {
      return `${validate_component(Card, "Card").$$render(
        $$result,
        {
          horizontal: true,
          class: "mb-4",
          padding: "none"
        },
        {},
        {
          default: () => {
            return `<div>${ticket.image ? `<img class="h-full w-full rounded-lg object-cover md:min-w-44 md:max-w-48"${add_attribute("src", ticket.src, 0)}${add_attribute("alt", ticket.name, 0)}>` : `<div class="flex h-full w-full items-center rounded-lg bg-primary-300 md:w-48 dark:bg-primary-700"><span class="m-auto text-primary-400 dark:text-primary-600">${validate_component(ImageSolid, "ImageSolid").$$render($$result, { size: "lg" }, {}, {})}</span> </div>`}</div> <div class="min-w-72 p-4"><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape(ticket.name)}</h5> <p class="mb-3 text-xl font-bold leading-tight text-primary-700 dark:text-primary-100">${escape(defaultCurrencyFormatter.format(ticket.price))}</p> <ul class="text-sm text-gray-700 dark:text-gray-400"><li>Date d&#39;ouverture des ventes: ${escape(defaultDateTimeFormatter.format(ticket.salesOpenDate))}</li> <li>Date limite des ventes: ${escape(defaultDateTimeFormatter.format(ticket.purchaseDeadline))}</li> <li>Stock initial: ${escape(ticket.stock)}</li> <li>Stock actuel: ${escape(ticket.currentStock)}</li> <li>Vendu: ${escape(ticket._count.purchases)}</li> </ul></div> `;
          }
        }
      )}`;
    })}</div> ${validate_component(Heading, "Heading").$$render($$result, { tag: "h3", class: "my-4 px-4" }, {}, {
      default: () => {
        return `Achats de tickets`;
      }
    })} <div class="px-4">${validate_component(Table, "Table").$$render($$result, { striped: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Utilisateur`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Ticket`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Prix`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Date`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Statut`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, {}, {}, {
          default: () => {
            return `${data.ticketPurchases.length ? `${each(data.ticketPurchases, (purchase) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render(
                $$result,
                {
                  color: purchase.status === "CANCELLED" || purchase.refundStatus === "REFUNDED" ? "custom" : "default",
                  class: "bg-red-200 dark:bg-rose-800"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(purchase.user.username)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(purchase.ticket.name)}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(defaultCurrencyFormatter.format(purchase.price))}`;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(dateTimeFormatterWithoutSeconds.format(purchase.createdAt))} `;
                      }
                    })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                      default: () => {
                        return `<div class="flex gap-1">${purchase.status === "COMPLETED" ? `${validate_component(Badge, "Badge").$$render(
                          $$result,
                          {
                            rounded: true,
                            border: true,
                            color: "green"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(purchase.status)}`;
                            }
                          }
                        )}` : `${purchase.status === "PENDING" ? `${validate_component(Badge, "Badge").$$render(
                          $$result,
                          {
                            rounded: true,
                            border: true,
                            color: "yellow"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(purchase.status)}`;
                            }
                          }
                        )}` : `${purchase.status === "CANCELLED" ? `${validate_component(Badge, "Badge").$$render(
                          $$result,
                          {
                            rounded: true,
                            border: true,
                            color: "red"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(purchase.status)}`;
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
                              return `${escape(purchase.status)}`;
                            }
                          }
                        )}`}`}`} ${purchase.refundStatus === "REFUNDED" ? `${validate_component(Badge, "Badge").$$render(
                          $$result,
                          {
                            rounded: true,
                            border: true,
                            color: "blue"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(purchase.refundStatus)}`;
                            }
                          }
                        )}` : `${purchase.refundStatus === "REFUNDING" ? `${validate_component(Badge, "Badge").$$render(
                          $$result,
                          {
                            rounded: true,
                            border: true,
                            color: "yellow"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(purchase.refundStatus)}`;
                            }
                          }
                        )}` : `${purchase.refundStatus === "DENIED" ? `${validate_component(Badge, "Badge").$$render(
                          $$result,
                          {
                            rounded: true,
                            border: true,
                            color: "purple"
                          },
                          {},
                          {
                            default: () => {
                              return `${escape(purchase.refundStatus)}`;
                            }
                          }
                        )}` : ``}`}`}</div> `;
                      }
                    })} `;
                  }
                }
              )}`;
            })}` : `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
              default: () => {
                return `<td colspan="7" data-svelte-h="svelte-3jgzzh"><div class="flex h-64"><span class="m-auto text-center text-xl font-bold">Non disponible</span></div></td>`;
              }
            })}`}`;
          }
        })}`;
      }
    })}</div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Duhg4iVi.js.map
