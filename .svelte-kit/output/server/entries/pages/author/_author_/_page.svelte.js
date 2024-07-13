import { c as create_ssr_component, o as onDestroy, f as spread, h as escape_object, i as createEventDispatcher, v as validate_component, j as is_promise, n as noop, e as escape } from "../../../../chunks/ssr.js";
import { c as checkIconState, g as generateIcon } from "../../../../chunks/ErrorState.svelte_svelte_type_style_lang.js";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const css$1 = {
  code: ".loading.svelte-10rd12x{display:flex;justify-content:center;align-items:center;gap:10px;color:lightcoral;font-weight:bold}.loading-icon.svelte-10rd12x{margin-top:4px}",
  map: '{"version":3,"file":"LoadingState.svelte","sources":["LoadingState.svelte"],"sourcesContent":["<script>\\n  import Icon from \\"@iconify/svelte\\";\\n<\/script>\\n\\n<div class=\\"loading\\">\\n  <div class=\\"loading-icon\\">\\n    <Icon icon=\\"line-md:loading-loop\\" />\\n  </div>\\n  <slot />\\n</div>\\n\\n<style>\\n  .loading {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 10px;\\n    color: lightcoral;\\n    font-weight: bold;\\n  }\\n\\n  .loading-icon {\\n    margin-top: 4px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAYE,uBAAS,CACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,UAAU,CACjB,WAAW,CAAE,IACf,CAEA,4BAAc,CACZ,UAAU,CAAE,GACd"}'
};
const LoadingState = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="loading svelte-10rd12x"><div class="loading-icon svelte-10rd12x">${validate_component(Icon, "Icon").$$render($$result, { icon: "line-md:loading-loop" }, {}, {})}</div> ${slots.default ? slots.default({}) : ``} </div>`;
});
const css = {
  code: ".bio.svelte-1go7p8l{margin:10px 25px 25px 25px}.state.svelte-1go7p8l{margin-bottom:50px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import LoadingState from \\"$lib/components/LoadingState.svelte\\";\\n  import ErrorState from \\"$lib/components/ErrorState.svelte\\";\\n\\n  export let data;\\n\\n  const getData = async () => {\\n    const res = await fetch(\\n      `https://api.quotable.io/authors/slug/${data.author}`\\n    );\\n    return await res.json();\\n  };\\n<\/script>\\n\\n{#await getData()}\\n  <div class=\\"state\\">\\n    <LoadingState>Loading author...</LoadingState>\\n  </div>\\n{:then data}\\n  <h1>{data.name}</h1>\\n  <h2>{data.description}</h2>\\n  <p class=\\"bio\\">{data.bio}</p>\\n{:catch error}\\n  <div class=\\"state\\">\\n    <ErrorState>API is unavailable at the moment</ErrorState>\\n  </div>\\n{/await}\\n<a href=\\"/\\" class=\\"button\\">Back</a>\\n\\n<style>\\n  .bio {\\n    margin: 10px 25px 25px 25px;\\n  }\\n\\n  .state {\\n    margin-bottom: 50px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA8BE,mBAAK,CACH,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IACzB,CAEA,qBAAO,CACL,aAAa,CAAE,IACjB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const getData = async () => {
    const res = await fetch(`https://api.quotable.io/authors/slug/${data.author}`);
    return await res.json();
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <div class="state svelte-1go7p8l">${validate_component(LoadingState, "LoadingState").$$render($$result, {}, {}, {
        default: () => {
          return `Loading author...`;
        }
      })}</div> `;
    }
    return function(data2) {
      return ` <h1>${escape(data2.name)}</h1> <h2>${escape(data2.description)}</h2> <p class="bio svelte-1go7p8l">${escape(data2.bio)}</p> `;
    }(__value);
  }(getData())} <a href="/" class="button" data-svelte-h="svelte-1f8sscf">Back</a>`;
});
export {
  Page as default
};
