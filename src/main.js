/* eslint-disable no-undef */
import App from "./App";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import bmCommon from "@/common/common";
import Plugins from "@/vue/plugins";
import Filters from "@/vue/filters";
import Directives from "@/vue/directives";
import RouterURL from "@/router/routers.conf";
import "jquery";
import { Constants } from "@/common/env";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Plugins);
Vue.use(Filters);
Vue.use(Directives);

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 100, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
});

Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

router.beforeEach((to, from, next) => {
  let $vm = window.$vm;
  NProgress.start();
  bmCommon.log("判断路由切换检测是否强行中断，");
  //路由切换检测是否强行中断，
  $vm &&
    $vm.$httpRequestList &&
    $vm.$httpRequestList.forEach(cancel => {
      cancel(Constants.INTERRUPT); //给个标志，中断请求
    });

  let $store = router.app.$store || store;
  let langObj = $store ? $store.getters.getLangObj : null;
  let accountMenuMap = $store.getters.getAccountMenuMap || {};
  let { name = "", meta = {}, fullPath = "" } = to || {};
  let { requireAuth = "" } = meta || {};
  let { name: fromName = "" } = from || {};
  // bmCommon.log("可访问的路由地址",accountMenuMap,to);
  let docTitle = meta.title;
  if (docTitle) {
    document.title = bmCommon.langKey(langObj, "能源云 | 组态平台"); //+langKey(langObj,docTitle)
  }
  bmCommon.log("beforeEach,当前路由to=", to, ",from:", from);
  if (!RouterURL[name]) {
    //如果路由配置不存在则跳到404页
    next({
      name: RouterURL.not.name
    });
    return;
  }
  let userInfo = $store.getters.getUserInfo;
  if (requireAuth) {
    // 判断该路由是否需要登录权限
    if (userInfo && userInfo.entId) {
      // 通过vuex state获取当前的token是否存在
      if (!accountMenuMap[name] && name != RouterURL.not.name) {
        //如果为真说明当前路由可以被访问
        next({
          name: RouterURL.not.name
        });
      } else {
        next();
      }
    } else {
      if (fromName == RouterURL.login.name) {
        next();
      } else {
        next({
          name: RouterURL.login.name,
          query: { redirecturl: encodeURIComponent(fullPath) } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
      }
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  let loading = document.getElementById("bm-loading");
  loading && (loading.style.display = "none");
  NProgress.done();
});

Vue.prototype.$NProgress = NProgress;

window.$vm = new Vue({
  router,
  store,
  render: h => h(App)
});
window.$vm.$httpRequestList = [];
window.$vm.$mount("#app");
