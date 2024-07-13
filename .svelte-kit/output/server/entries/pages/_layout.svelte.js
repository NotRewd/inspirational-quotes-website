import { c as create_ssr_component, b as add_attribute } from "../../chunks/ssr.js";
const backgroundImage = "/_app/immutable/assets/background-image.5uIrLdPu.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<img${add_attribute("src", backgroundImage)} id="background-image" alt="background"> <div class="main">${slots.default ? slots.default({}) : ``}</div> <div class="footer" data-svelte-h="svelte-aperbv"><p>API provided by the <a href="https://api.quotable.io/">Quotable API</a></p> <p>Source code of this website is available on <a href="https://github.com/NotRewd/inspirational-quotes-website">GitHub</a></p></div>`;
});
export {
  Layout as default
};
