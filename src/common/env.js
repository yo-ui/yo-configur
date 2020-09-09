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
  COMPONENTLIBRARY: [
    {
      name: "基本",
      code: "basic",
      icon: "el-icon-s-grid",
      comList: [
        {
          name: "静态文本",
          code: "text",
          icon: "/static/img/configur/dataing.png",
          data: {
            // id: 2,
            dragable: true,
            backgroundImage: "",
            backgroundSize: "100% 100%",
            backgroundRepeat: "repeat",
            borderWidth: 0,
            borderStyle: "none",
            borderColor: "",
            left: 0,
            fontSize: 14,
            width: 300,
            height: 60,
            rotate: 0,
            scale: "scale(1,1)",
            top: 0,
            scaleable: true, //是否可缩放操作
            rotateable: true, //是否可旋转操作
            editable: true //内容是否可编辑
          }
        },
        {
          name: "动态数据",
          code: "dynamicText",
          icon: "/static/img/configur/text.png",
          data: {
            dragable: true,
            backgroundImage: "",
            backgroundSize: "100% 100%",
            backgroundRepeat: "repeat",
            left: 800,
            width: 300,
            fontWeight: "",
            fontStyle: "",
            fontSize: 14,
            height: 60,
            rotate: 0,
            scale: "scale(1,1)",
            borderWidth: 0,
            borderStyle: "none",
            borderColor: "",
            top: 0,
            scaleable: false, //是否可缩放操作
            rotateable: true, //是否可旋转操作
            editable: false //内容是否可编辑
          }
        },
        {
          code: "image",
          name: "图片",
          icon: "/static/img/configur/img.png",
          data: {
            dragable: true,
            backgroundImage: "",
            backgroundSize: "100% 100%",
            backgroundRepeat: "repeat",
            borderWidth: 0,
            borderStyle: "none",
            borderColor: "",
            rotate: 0,
            scale: "scale(1,1)",
            width: 360,
            height: 220,
            left: 0,
            top: 0,
            scaleable: true, //是否可缩放操作
            rotateable: true, //是否可旋转操作
            editable: false //内容是否可编辑
          }
        },
        {
          name: "按钮",
          code: "button",
          icon: "/static/img/configur/button.png",
          data: {
            dragable: true,
            borderColor: "#eee",
            backgroundColor: "#fff",
            color: "#000",
            borderWidth: 1,
            fontSize: 14,
            borderStyle: "solid",
            backgroundImage: "",
            left: 500,
            width: 200,
            height: 60,
            rotate: 0,
            top: 0,
            scaleable: true, //是否可缩放操作
            rotateable: true, //是否可旋转操作
            editable: true //内容是否可编辑
          }
        },
        {
          name: "显示屏",
          code: "display",
          icon: "/static/img/configur/display.png",
          data: {
            // type: "button",
            // id: 1,
            dragable: true,
            left: 500,
            width: 200,
            height: 60,
            rotate: 0,
            top: 0,
            scaleable: false, //是否可缩放操作
            rotateable: false, //是否可旋转操作
            editable: false //内容是否可编辑
          }
        },
        {
          name: "块状",
          code: "block",
          icon: "/static/img/configur/text.png",
          data: {
            // type: "button",
            // id: 1,
            dragable: true,
            left: 500,
            width: 200,
            height: 60,
            rotate: 0,
            top: 0,
            scaleable: false, //是否可缩放操作
            rotateable: false, //是否可旋转操作
            editable: false //内容是否可编辑
          }
        }
      ]
    },
    {
      code: "component",
      icon: "el-icon-s-ticket",
      name: "组件"
    },
    {
      code: "device",
      icon: "el-icon-setting",
      name: "设备"
    },
    {
      code: "additional",
      icon: "el-icon-files",
      name: "附加"
    }
  ],
  DISPLAYFORMLIST: [
    { code: "100% 100%", name: "默认" },
    { code: "cover", name: "覆盖" },
    { code: "contain", name: "包含" }
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
  FONTFAMILYLIST: [
    { code: "Light", name: "阿里巴巴-普惠体-Light" },
    { code: "Heavy", name: "阿里巴巴-普惠体-Heavy" },
    { code: "Medium", name: "阿里巴巴-普惠体-Medium" },
    { code: "Bold", name: "阿里巴巴-普惠体-Bold" },
    { code: "Regular", name: "阿里巴巴-普惠体-Regular" }
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
