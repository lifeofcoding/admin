/* For lazy loading / Code Split */
import Loadable from 'react-loadable';
/* Loading template */
import Loading from './script-loader';

const routes = {
	notLogged: [
		{
			path: "/login",
			component: Loadable({
				loader: () => import("./containers/login"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/lock-screen",
			component: Loadable({
				loader: () => import("./containers/lock-screen"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/page404",
			component: Loadable({
				loader: () => import("./containers/page404"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/loginSecond",
			component: Loadable({
				loader: () => import("./containers/loginSecond"),
				loading: Loading
			}),
			exact: true
		}
	],
	logged: [
		{
			path: "/",
			component: Loadable({
				loader: () => import("./containers/layout/home/home"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/tables/table",
			component: Loadable({
				loader: () => import("./containers/layout/tables/table"),
				loading: Loading
			}),
			exact: true
		}, {
			path: "/proxies",
			component: Loadable({
				loader: () => import("./containers/layout/pages/proxies"),
				loading: Loading
			}),
			exact: true
		}
	]
}

module.exports.routes = routes