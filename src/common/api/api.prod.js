module.exports = {
  // aliyun: {
  //   nocaptcha: {
  //     // ali-yun captcha appkey
  //     // 500,000 times per year
  //     appkey: "",
  //     h5appkey: ""
  //   }
  // },
  // google: {
  //   ga: [""],
  //   geo: ""
  // },
  routerMode: "history",
  axioTimeout: 1000 * 15, //超时时间为15s
  imageServer: "//pic.energyiot.cn/",
  // wsServiceHost: "https://eiot.energyiot.cn/service", //后端websocket接口地址
  // wsManageHost: "https://m.energyiot.cn/manage", //后端websocket接口地址
  serviceHost: "/service", //后端接口地址
  manageHost: "/manage", //后端接口地址
  serviceLogin: "https://eiot.energyiot.cn/login",
  manageLogin: "https://m.energyiot.cn/login",
  debug: false
};
