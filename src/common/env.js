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
            left: 0,
            width: 300,
            height: 60,
            rotate: 0,
            top: 0,
            editable: false
          }
        },
        {
          name: "动态文本",
          code: "dynamicText",
          icon: "/static/img/configur/text.png",
          data: {
            dragable: true,
            left: 800,
            width: 300,
            height: 60,
            rotate: 0,
            top: 0,
            editable: true
          }
        },
        {
          code: "image",
          name: "图片",
          icon: "/static/img/configur/img.png",
          data: {
            dragable: true,
            backgroundSize: "100% 100%",
            backgroundRepeat: "repeat",
            rotate: 0,
            scale: "scale(1,1)",
            width: 360,
            height: 220,
            left: 0,
            top: 0,
            backgroundImage: ""
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
            backgroundImage: "",
            left: 500,
            width: 200,
            height: 60,
            rotate: 0,
            top: 0,
            editable: true
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
            editable: false,
            content: "显示屏"
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
            editable: false,
            content: "块状"
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
  // // 设备分类
  // DEVICECATEGORYMAP: {
  //   1: "三相电表",
  //   2: "单相电表",
  //   3: "水表",
  //   4: "环境监测",
  //   5: "热量表",
  //   6: "多路照明控制器 拷贝",
  //   7: "远程开关量I/O模块",
  //   8: "流量计",
  //   9: "报警传感器",
  //   10: "温控器",
  //   11: "断路器",
  //   12: "蒸汽流量计",
  //   13: "逆变器"
  // },
  // // 设备安装方式
  // DEVICEINSTALLATIONWAYMAP: {
  //   1: "导轨式",
  //   2: "嵌入式",
  //   3: "直装式",
  //   4: "卡扣式",
  //   5: "直插式",
  //   6: "外夹式",
  //   7: "壁挂式",
  //   8: "卧式",
  //   9: "立式",
  //   10: "其他"
  // },
  // // 设备通讯协议
  // DEVICECOMMUNICATIONMAP: {
  //   1: "RS485",
  //   2: "M-Bus",
  //   3: "Wi-Fi",
  //   4: "GPRS",
  //   5: "Zigbee",
  //   6: "LoRa",
  //   7: "RF",
  //   8: "NB-IoT",
  //   9: "其他"
  // },
  // // 设备计量原理
  // DEVICEMETERINGPRINCIPLEMAP: {
  //   1: "直读式",
  //   2: "互感接入式",
  //   3: "电磁式",
  //   4: "超声波式",
  //   5: "传感式",
  //   6: "其他"
  // },
  // // 设备供电方式
  // DEVICEPOWERSUPLYWAYMAP: {
  //   1: "电池供电",
  //   2: "AC220V",
  //   3: "DC12V",
  //   4: "DC24V",
  //   5: "AC380V",
  //   6: "其他"
  // },
  // // 设备协议
  // DEVICEPROTOCOLMAP: {
  //   1: "modbus-RTU",
  //   2: "modbus-TCP",
  //   3: "DL/T 645-2007",
  //   4: "DL/T 645-1997",
  //   5: "CJ/T 188-2004",
  //   6: "EN13757",
  //   7: "其他"
  // },
  WITHDRAWTYPEMAP: {
    0: "待打款",
    1: "已打款",
    2: "失败",
    3: "成功"
  }
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
