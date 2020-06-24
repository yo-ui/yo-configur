/* eslint-disable no-undef */
// import Vue from "vue";
// import Router from "vue-router";
import Routers from "@/router/routers.js";
import { routerMode } from "@/common/env";


export default new VueRouter({
  mode: routerMode,
  // base: "oper",
  routes: [...Routers]
});
