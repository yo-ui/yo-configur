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
  axioTimeout: 1000 * 60, //超时时间为15s
  imageServer: "//test-pic.energyiot.cn/",
  // wsServiceHost: "https://test-eiot.energyiot.cn", //后端websocket接口地址
  // wsManageHost: "https://test-api-manage.energyiot.cn", //后端websocket接口地址
  serviceHost: "/service", //后端接口地址
  manageHost: "/manage", //后端接口地址
  debug: false
};
