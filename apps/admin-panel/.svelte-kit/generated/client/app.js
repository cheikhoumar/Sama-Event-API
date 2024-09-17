export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18')
];

export const server_loads = [2];

export const dictionary = {
		"/": [5],
		"/admin": [6,[2],[3]],
		"/admin/dashboard": [~7,[2],[3]],
		"/admin/event": [~8,[2],[3]],
		"/admin/event/[id]": [~9,[2],[3]],
		"/admin/logout": [~10,[2],[3]],
		"/admin/setting": [~11,[2],[3]],
		"/admin/user": [~12,[2],[3]],
		"/admin/user/new": [~13,[2],[3]],
		"/admin/withdraw": [~14,[2],[3]],
		"/auth": [15,[4]],
		"/auth/email": [~16,[4]],
		"/auth/email/otp": [~17,[4]],
		"/auth/login": [~18,[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';