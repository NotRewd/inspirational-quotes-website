import { c as create_ssr_component } from "../../chunks/ssr.js";
import "../../chunks/ErrorState.svelte_svelte_type_style_lang.js";
const css = {
  code: ".state.svelte-rcudr1{font-size:large;margin:0px 20px 50px 20px}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import LoadingState from \\"$lib/components/LoadingState.svelte\\";\\n  import ErrorState from \\"$lib/components/ErrorState.svelte\\";\\n\\n  let quote;\\n\\n  const generateQuote = async () => {\\n    const res = await fetch(\\"https://api.quotable.io/random\\");\\n    return await res.json();\\n  };\\n\\n  const onGetQuoteClicked = () => (quote = generateQuote());\\n<\/script>\\n\\n<h1>Inspirational Quotes</h1>\\n<p class=\\"heading-description\\">\\n  An inspirational quote for you to make your day better.\\n</p>\\n\\n{#if quote}\\n  {#await quote}\\n    <div class=\\"state\\">\\n      <LoadingState>Loading...</LoadingState>\\n    </div>\\n  {:then quote}\\n    <p class=\\"quote\\">\\n      {quote.content} -\\n      <a class=\\"hyperlink\\" href={\\"/author/\\" + quote.authorSlug}\\n        >{quote.author}</a\\n      >\\n    </p>\\n  {:catch error}\\n    <div class=\\"state\\">\\n      <ErrorState>API is unavailable at the moment</ErrorState>\\n    </div>\\n  {/await}\\n{/if}\\n\\n<button class=\\"button\\" on:click={onGetQuoteClicked}>Get Quote</button>\\n\\n<style>\\n  .state {\\n    font-size: large;\\n    margin: 0px 20px 50px 20px;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAyCE,oBAAO,CACL,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,IACxB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 data-svelte-h="svelte-1205h3i">Inspirational Quotes</h1> <p class="heading-description" data-svelte-h="svelte-c7q6va">An inspirational quote for you to make your day better.</p> ${``} <button class="button" data-svelte-h="svelte-1be1uv7">Get Quote</button>`;
});
export {
  Page as default
};
