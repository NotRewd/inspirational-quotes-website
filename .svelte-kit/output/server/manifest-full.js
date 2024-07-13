export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.aRXLN2s1.js","app":"_app/immutable/entry/app.COOMo83Y.js","imports":["_app/immutable/entry/start.aRXLN2s1.js","_app/immutable/chunks/entry.C18n4Kp2.js","_app/immutable/chunks/scheduler.Bl2Mesxh.js","_app/immutable/entry/app.COOMo83Y.js","_app/immutable/chunks/scheduler.Bl2Mesxh.js","_app/immutable/chunks/index.CgbdOEvE.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/author/[author]",
				pattern: /^\/author\/([^/]+?)\/?$/,
				params: [{"name":"author","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
