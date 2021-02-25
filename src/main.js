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
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

Vue.component("VueSlider", VueSlider);

// // 引入vue-amap
import VueAMap from "vue-amap";
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: Constants.AMAP.key,
  // 插件集合
  plugin: [
    "AMap.Autocomplete",
    "AMap.Geolocation",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.Geocoder",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  // 高德 sdk 版本，默认为 1.4.4
  v: Constants.AMAP.version
});
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
  let { $store = store } = $vm || {};
  let { getters = {} } = $store || {};
  let { getLangObj: langObj = {}, getUserInfo: userInfo = {} } = getters || {};
  let { meta = {}, query = {} } = to || {};
  let { title: docTitle = "", requireAuth = false } = meta || {};
  let token = (query || {})[Constants.AUTHORIZATION];
  let { type = "" } = query || {};
  let { name = "" } = to || {};
  let { name: fromName = "" } = from || {};
  let { accountId = "" } = userInfo || {};
  let platform = type == 2 ? "service" : "manage";
  $store.commit("setPlatform", platform); //type： 2 为应用平台过来  1为管理平台过来
  window.bm_platform = platform;
  console.log("从平台", platform, type, "过来");
  if (token) {
    $store.commit("setUserInfo", { ...userInfo, token });
  }
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
  // let userInfo = $store.getters.getUserInfo;
  if (requireAuth) {
    // 判断该路由是否需要登录权限
    if (accountId) {
      next();
    } else {
      if (fromName == RouterURL.login.name) {
        next();
      } else {
        // next({
        //   name: RouterURL.login.name,
        //   query: { redirecturl: encodeURIComponent(fullPath) } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        // });
        next();
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
window.bm_widgetMap = {
  // canvas: Constants.COMPONENTCANVAS
};
