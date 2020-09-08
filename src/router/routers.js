import { routerAuth } from "@/common/env";
import RouterURL from "@/router/routers.conf";

// const Login = resolve => require(["@/pages/Login"], resolve);
// const Layout = resolve => require(["@/pages/Layout"], resolve);
// const Index = resolve => require(["@/pages/Index"], resolve);
// const Archives = resolve => require(["@/pages/archives/Archives"], resolve);
// const Provider = resolve => require(["@/pages/provider/Provider"], resolve);
// const Withdraw = resolve => require(["@/pages/withdraw/Withdraw"], resolve);
const Routers = [
  {
    path: RouterURL.home.path,
    name: RouterURL.home.name,
    redirect: RouterURL.index.path
  },
  {
    path: RouterURL.not.path,
    name: RouterURL.not.name,
    meta: {
      title: RouterURL.not.title
    },
    component: () =>
      import(/* webpackChunkName: "not" */ "@/pages/common/NotFound")
  },
  {
    path: RouterURL.index.path,
    name: RouterURL.index.name,
    meta: {
      title: RouterURL.index.title
      // requireAuth: routerAuth //是否需要登录
    },
    component: () => import(/* webpackChunkName: "bm-index" */ "@/pages/Index")
  },
  {
    path: RouterURL.login.path,
    name: RouterURL.login.name,
    meta: {
      title: RouterURL.login.title
      // requireAuth: routerAuth //是否需要登录
    },
    component: () => import(/* webpackChunkName: "bm-login" */ "@/pages/Login")
  },
  {
    path: "*",
    // component: NotFound
    redirect: RouterURL.not.path
  }
];

export default Routers;
