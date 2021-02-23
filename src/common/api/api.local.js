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
  axioTimeout: 1000 * 60, // 超时时间为15s
  imageServer: "//pic.energyiot.cn/",
  // wsServiceHost: "https://test-eiot.energyiot.cn/service", // 后端websocket接口地址
  // wsManageHost: "https://test-m.energyiot.cn/manage", // 后端websocket接口地址
  wsServiceHost: "https://eiot.energyiot.cn/service", //后端websocket接口地址
  wsManageHost: "https://m.energyiot.cn/manage", //后端websocket接口地址
  serviceHost: "/service", // 后端接口地址
  manageHost: "/manage", // 后端接口地址
  serviceLogin: "http://localhost:8086/login",
  manageLogin: "http://localhost:8084/login",
  manageConfigur: "http://localhost:8084/nav/configur",
  debug: false
};
