import * as universal from '../entries/pages/author/_author_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/author/_author_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/author/[author]/+page.js";
export const imports = ["_app/immutable/nodes/3.-jVDlPYQ.js","_app/immutable/chunks/scheduler.Bl2Mesxh.js","_app/immutable/chunks/ErrorState.DNoRu6VD.js","_app/immutable/chunks/index.CgbdOEvE.js"];
export const stylesheets = ["_app/immutable/assets/3.KOeAvMfH.css","_app/immutable/assets/ErrorState.kSkvTHDO.css"];
export const fonts = [];
