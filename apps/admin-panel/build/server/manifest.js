const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.0TUd1JAC.js","app":"_app/immutable/entry/app.CDxeqKTw.js","imports":["_app/immutable/entry/start.0TUd1JAC.js","_app/immutable/chunks/entry.w9gK3Rx0.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.D8ci2SO2.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.CDxeqKTw.js","_app/immutable/chunks/10.DHKuf58j.js","_app/immutable/chunks/scheduler.DFZBBKhI.js","_app/immutable/chunks/index.LUCKkj9k.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-D9qODvJ2.js')),
			__memo(() => import('./chunks/1-yKvIh0n4.js')),
			__memo(() => import('./chunks/2-BUrfk56E.js')),
			__memo(() => import('./chunks/3-C0A7WitD.js')),
			__memo(() => import('./chunks/4-CHflmhsT.js')),
			__memo(() => import('./chunks/5-DgHuCWDQ.js')),
			__memo(() => import('./chunks/6-_SDflnz9.js')),
			__memo(() => import('./chunks/7-h1Mk1v_z.js')),
			__memo(() => import('./chunks/8-Dq7o1Vah.js')),
			__memo(() => import('./chunks/9-C5crHbkE.js')),
			__memo(() => import('./chunks/10-D4bq_bky.js')),
			__memo(() => import('./chunks/11-CltsBKDW.js')),
			__memo(() => import('./chunks/12-ItWFJse4.js')),
			__memo(() => import('./chunks/13-iLakT0_7.js')),
			__memo(() => import('./chunks/14-Bhck_OCq.js')),
			__memo(() => import('./chunks/16-IofM-AN9.js')),
			__memo(() => import('./chunks/17-CZ1ixf1T.js')),
			__memo(() => import('./chunks/18-ClIvaUVV.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/dashboard",
				pattern: /^\/admin\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/event",
				pattern: /^\/admin\/event\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/admin/event/[id]",
				pattern: /^\/admin\/event\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin/logout",
				pattern: /^\/admin\/logout\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admin/setting",
				pattern: /^\/admin\/setting\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/admin/user",
				pattern: /^\/admin\/user\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin/user/new",
				pattern: /^\/admin\/user\/new\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/admin/withdraw",
				pattern: /^\/admin\/withdraw\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,3,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/auth/email",
				pattern: /^\/auth\/email\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/auth/email/otp",
				pattern: /^\/auth\/email\/otp\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 17 },
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

const prerendered = new Set(["/auth"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
