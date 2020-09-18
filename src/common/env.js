/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */
import URL from "./conf/url.conf";
import apiConfig from "./conf";
import COMPONENTLIBRARY from "./conf/library";

//常量定义
const PLATFORM = "IOT_CONFIGUR_";
const DIR = "configur/";
const Constants = {
  PLATFORM: PLATFORM,
  UPLOADDIR: {
    //上传目录
    IMG: DIR + "img/",
    FILE: DIR + "file/"
  },
  AMAP: {
    version: "1.4.4",
    key: "69cde24b534b2228abd4fc6a03c9f045"
  },
  INTERRUPT: "interrupt", //判断是否阻断请求标志
  APICONFIG: apiConfig,
  VERSION: "1.0.0",
  WEBSOCKETRETRYCOUNT: 20, //websocket重试次数
  // WEBSOCKETRETRYCOUNT:Infinity,//websocket重试次数
  WEBSOCKETEVENT: {
    //websocket 响应事件
  },
  // AUTHORIZATION: "authorization-pie", //平台授权标识
  REQUEST_TIMEOUT: 15 * 1000, //超时时间设置为15秒
  LANGMAP: {
    // code代码   name 名称   icon 图标  help 帮助中心代码
    EN: {
      code: "en",
      name: "English"
    },
    ZH: {
      code: "zh",
      name: "简体中文"
    }
  },
  CODES: {
    LOGIN: "401", //未登录
    // 成功
    SUCCESS: "200",

    SYSTEM_ERROR: "500", //系统错误提示

    PARAM_ERROR: "400", //参数错误提示

    ERROR: "600" //业务错误提示
  },
  IMG: {
    DEVICE_CATEGORY: "upload/type.png",
    DEVICE_CATEGORY_PARAM: "upload/type.png"
  },
  AXIOTIMEOUT: apiConfig.axioTimeout, //请求超时时间

  COUNTDOWNTIME: {
    //倒计时时间  单位s
    LOGIN: 100, //登录验证码发送倒计时时间
    REG: 100 //注册验证码发送倒计时时间
  },
  PAGESIZE: 20, //分页默认每页20条
  LOCALSTORAGEKEY: {
    //存储key
    LANGUAGE: PLATFORM + "_LANGUAGE", //站点语言存储
    ACCOUNTMENULIST: PLATFORM + "_ACCOUNTMENULIST", //账户菜单列表
    ACCOUNTMENUMAP: PLATFORM + "_ACCOUNTMENUMAP", //账户菜单权限
    USERKEY: {
      USERINFO: PLATFORM + "_USER_INFO" //用户信息key
    }
  },
  // 组件map
  COMPONENTLIBRARY,
  BACKGROUNDSIZELIST: [
    { code: "100% 100%", name: "拉伸以充满画布" },
    { code: "cover", name: "充满画布" },
    { code: "contain", name: "适合于画布" }
  ],
  TILEMODELIST: [
    { code: "repeat", name: "默认" },
    { code: "repeat-x", name: "水平平铺" },
    { code: "repeat-y", name: "垂直平铺" },
    { code: "no-repeat", name: "不平铺" }
  ],
  FLIPMODELIST: [
    { code: "scale(1,1)", name: "默认" },
    { code: "scale(-1,1)", name: "水平翻转" },
    { code: "scale(1,-1)", name: "垂直翻转" }
  ],
  BORDERSTYLELIST: [
    { code: "none", name: "无边框" },
    { code: "solid", name: "实线" },
    { code: "dashed", name: "虚线" },
    { code: "dotted", name: "点状边框" },
    { code: "double", name: "双线" },
    { code: "groove", name: "3D 凹槽边框" },
    { code: "ridge", name: "3D 垄状边框" },
    { code: "inset", name: "3D inset 边框" },
    { code: "outset", name: "3D outset 边框" }
  ],
  BACKGROUNDTYPELIST: [
    //填充颜色类型
    { code: "purity", name: "纯色" },
    { code: "gradient", name: "渐变色" }
  ],
  GRADIENTTYPELIST: [
    //渐变类型
    { code: "linear", name: "线性" },
    { code: "radial", name: "径向" }
  ],
  RADIALSHAPELIST: [
    //径向形状
    { code: "circle", name: "圆形" },
    { code: "ellipse", name: "椭圆" }
  ],
  ANGELLIST: [
    //角度列表
    { code: "0" },
    { code: "45" },
    { code: "90" },
    { code: "135" },
    { code: "180" },
    { code: "225" },
    { code: "270" },
    { code: "315" }
  ],
  CENTERLIST: [
    //中心类型
    { code: "50% 50%", name: "居中" },
    { code: "0% 0%", name: "左上角" },
    { code: "100% 0%", name: "右上角" },
    { code: "0% 100%", name: "左下角" },
    { code: "100% 100%", name: "右下角" }
  ],
  FONTFAMILYLIST: [
    { code: "", name: "默认" },
    // { code: "宋体", name: "宋体" },
    // { code: "新宋体", name: "新宋体" },
    // { code: "黑体", name: "黑体" },
    // { code: "华文楷体", name: "华文楷体" },
    { code: "lcdD", name: "LCD屏字体" }
    // { code: "Light", name: "阿里巴巴-普惠体-Light" },
    // { code: "Heavy", name: "阿里巴巴-普惠体-Heavy" },
    // { code: "Medium", name: "阿里巴巴-普惠体-Medium" },
    // { code: "Bold", name: "阿里巴巴-普惠体-Bold" },
    // { code: "Regular", name: "阿里巴巴-普惠体-Regular" }
    // { code: "FangSong_GB2312", name: "仿宋_GB2312" },
    // { code: "KaiTi_GB2312", name: "楷体_GB2312" },
    // { code: "Microsoft YaHei", name: "微软雅黑体" },
    // { code: "LiSu", name: "隶书" },
    // { code: "YouYuan", name: "幼圆" },
    // { code: "STXihei", name: "华文细黑" },
    // { code: "STKaiti", name: "华文楷体" },
    // { code: "STSong", name: "华文宋体" },
    // { code: "STZhongsong", name: "华文中宋" },
    // { code: "S", name: "华文仿宋" },
  ]
};

const routerMode = apiConfig.routerMode;
const routerAuth = true;

const imageServer = apiConfig.imageServer;

export {
  routerMode, //路由模式定义
  Constants, //全局配置参数定义
  routerAuth,
  imageServer,
  URL // 请求地址定义
};
