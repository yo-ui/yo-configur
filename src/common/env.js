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
import lib from "./conf/library";
const {
  componentLibrary: COMPONENTLIBRARY,
  baseData: BASEDATA,
  componentLibraryMap: COMPONENTLIBRARYMAP,
  componentPanel: COMPONENTPANEL
} = lib || {};
// console.log(lib);
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
  AUTHORIZATION: "x-access-token", //平台授权标识
  REQUEST_TIMEOUT: 15 * 1000, //超时时间设置为15秒
  SHOWTYPEMAP: {
    EDIT: "edit",
    PREVIEW: "preview",
    VIEW: "view"
  },
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
  // IMG: {
  // DEVICE_CATEGORY: "upload/type.png",
  // DEVICE_CATEGORY_PARAM: "upload/type.png"
  // },
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
    PLATFORM: PLATFORM + "_PLATFORM", //平台标识存储
    IMAGELIST: PLATFORM + "_IMAGELIST", //上传图片列表
    // ACCOUNTMENULIST: PLATFORM + "_ACCOUNTMENULIST", //账户菜单列表
    // ACCOUNTMENUMAP: PLATFORM + "_ACCOUNTMENUMAP", //账户菜单权限
    USERKEY: {
      USERINFO: PLATFORM + "_USER_INFO", //用户信息key
      PREVIEWDATA: PLATFORM + "_PREVIEW_DATA", //用户操作组件列表
      RECORDLIST: PLATFORM + "_RECORD_LIST" //用户记录
    }
  },
  // 组件map
  COMPONENTLIBRARY,
  COMPONENTLIBRARYMAP,
  COMPONENTPANEL,
  BASEDATA,
  BACKGROUNDSIZELIST: [
    { code: "", name: "默认" },
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
  SVGBORDERSTYLELIST: [
    { code: "none", name: "无边框" },
    { code: "solid", name: "实线" },
    { code: "dashed", name: "虚线" },
    // { code: "space-dashed", name: "间隔虚线" },
    { code: "dotted", name: "点状边框" }
    // { code: "double", name: "双线" },
    // { code: "groove", name: "3D 凹槽边框" },
    // { code: "ridge", name: "3D 垄状边框" },
    // { code: "inset", name: "3D inset 边框" },
    // { code: "outset", name: "3D outset 边框" }
  ],
  BACKGROUNDTYPELIST: [
    //填充颜色类型
    { code: "purity", name: "纯色" },
    { code: "gradient", name: "渐变色" }
  ],
  STATUSLIST: [
    //设备状态
    { code: 0, name: "关闭" },
    { code: 1, name: "启动" },
    { code: 2, name: "报警" }
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
  SHADOWTYPELIST: [
    //阴影类型
    { code: "inset", name: "内阴影" },
    { code: "", name: "外阴影" }
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
  //动画播放方式
  ANIMATIONDIRECTIONLIST: [
    { code: "normal", name: "正常" },
    { code: "alternate", name: "反向" }
  ],
  //动画库
  ANIMATEGROUPLIST: [
    {
      code: "Attention Seekers",
      list: [
        { code: "bounce" },
        { code: "flash" },
        { code: "pulse" },
        { code: "rubberBand" },
        { code: "shake" },
        { code: "swing" },
        { code: "tada" },
        { code: "wobble" }
      ]
    },
    {
      code: "Bouncing Entrances",
      list: [
        { code: "bounceIn" },
        { code: "bounceInDown" },
        { code: "bounceInLeft" },
        { code: "bounceInRight" },
        { code: "bounceInUp" }
      ]
    },
    {
      code: "Bouncing Exits",
      list: [
        { code: "bounceOut" },
        { code: "bounceOutDown" },
        { code: "bounceOutLeft" },
        { code: "bounceOutRight" },
        { code: "bounceOutUp" }
      ]
    },
    {
      code: "Fading Entrances",
      list: [
        { code: "fadeIn" },
        { code: "fadeInDown" },
        { code: "fadeInDownBig" },
        { code: "fadeInLeft" },
        { code: "fadeInLeftBig" },
        { code: "fadeInRight" },
        { code: "fadeInRightBig" },
        { code: "fadeInUp" },
        { code: "fadeInUpBig" }
      ]
    },
    {
      code: "Fading Exits",
      list: [
        { code: "fadeOut" },
        { code: "fadeOutDown" },
        { code: "fadeOutDownBig" },
        { code: "fadeOutLeft" },
        { code: "fadeOutLeftBig" },
        { code: "fadeOutRight" },
        { code: "fadeOutRightBig" },
        { code: "fadeOutUp" },
        { code: "fadeOutUpBig" }
      ]
    },
    {
      code: "Flippers",
      list: [
        { code: "flip" },
        { code: "flipInX" },
        { code: "flipInY" },
        { code: "flipOutX" },
        { code: "flipOutY" }
      ]
    },
    {
      code: "Lightspeed",
      list: [{ code: "lightSpeedIn" }, { code: "lightSpeedOut" }]
    },
    {
      code: "Rotating Entrances",
      list: [
        { code: "rotateIn" },
        { code: "rotateInDownLeft" },
        { code: "rotateInDownRight" },
        { code: "rotateInUpLeft" },
        { code: "rotateInUpRight" }
      ]
    },
    {
      code: "Rotating Exits",
      list: [
        { code: "rotateOut" },
        { code: "rotateOutDownLeft" },
        { code: "rotateOutDownRight" },
        { code: "rotateOutUpLeft" },
        { code: "rotateOutUpRight" }
      ]
    },
    {
      code: "Sliders",
      list: [
        { code: "slideInDown" },
        { code: "slideInLeft" },
        { code: "slideInRight" },
        { code: "slideOutLeft" },
        { code: "slideOutRight" },
        { code: "slideOutUp" }
      ]
    },
    {
      code: "Specials",
      list: [{ code: "hinge" }, { code: "rollIn" }, { code: "rollOut" }]
    }
  ],
  CENTERLIST: [
    //中心类型
    { code: "50% 50%", name: "居中" },
    { code: "0% 0%", name: "左上角" },
    { code: "100% 0%", name: "右上角" },
    { code: "0% 100%", name: "左下角" },
    { code: "100% 100%", name: "右下角" }
  ],
  TRANSFORMORIGINLIST: [
    //旋转轴类型
    { code: "left top", name: "左上" }, //0% 0%
    { code: "top", name: "上中" }, //50% 0%
    { code: "right top", name: "右上" }, //100% 0%
    { code: "center", name: "正中" }, //50% 50%
    { code: "right", name: "右中" }, //100% 50%
    { code: "right bottom", name: "右下" }, //100% 100%
    { code: "bottom", name: "下中" }, //50% 100%
    { code: "left bottom", name: "左下" }, //0% 100%
    { code: "left", name: "左中" } //0% 50%
  ],
  FONTFAMILYLIST: [
    { code: "", name: "默认" },
    { code: "黑体", name: "黑体" },
    { code: "宋体", name: "宋体" },
    { code: "新宋体", name: "新宋体" },
    { code: "lcdD", name: "LCD屏字体" },
    { code: "Acens", name: "Acens" },
    { code: "Arial", name: "Arial" },
    { code: "Arial Black", name: "Arial Black" },
    { code: "Bookman", name: "Bookman" },
    { code: "Comic Sans MSComic Sans MS", name: "Comic Sans MSComic Sans MS" },
    { code: "Courier", name: "Courier" },
    { code: "Courier New", name: "Courier New" },
    { code: "Digital-7Mono", name: "Digital-7Mono" },
    { code: "Garamond", name: "Garamond" },
    { code: "Georgia", name: "Georgia" },
    { code: "Helvetica", name: "Helvetica" },
    { code: "Impact", name: "Impact" },
    { code: "Palatino", name: "Palatino" },
    { code: "PingFangSC-Regular", name: "PingFangSC-Regular" },
    { code: "serif", name: "serif" },
    { code: "sans-serif", name: "sans-serif" },
    { code: "Times", name: "Times" },
    { code: "Times New Roman", name: "Times New Roman" },
    { code: "Trebuchet MS", name: "Trebuchet MS" },
    { code: "Verdana", name: "Verdana" },
    { code: "微软雅黑", name: "微软雅黑" }
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
