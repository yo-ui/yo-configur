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
  imageServer: "//test-pic.energyiot.cn/",
  // wsServiceHost: "http://test-api-eiot.energyiot.cn", //后端websocket接口地址
  // wsManageHost: "http://test-api-manage.energyiot.cn", //后端websocket接口地址
  serviceHost: "/service", //后端接口地址
  manageHost: "/manage", //后端接口地址
  serviceLogin: "https://test-eiot.energyiot.cn/login",
  manageLogin: "https://test-m.energyiot.cn/login",
  debug: false
};
