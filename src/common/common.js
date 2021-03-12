/* eslint-disable no-undef */
// import { Constants } from "@/common/env";
// import Big from "big.js";
// import md5 from "@/assets/js/MD5";
// import CryptoJS from "crypto-js";
//设置处理不做 四舍五入
// Big.RM = 0;
//变量池
let variablePool = {
  language: (function() {
    var lang = (navigator.language || "").toLowerCase();
    var language = lang.indexOf("zh") > -1 ? "ZH" : "EN";
    return language.toUpperCase();
  })(),
  // isPC: (function() {
  //   let userAgentInfo = (navigator.userAgent || "").toLowerCase();
  //   let Agents = [
  //     "Android",
  //     "iPhone",
  //     "SymbianOS",
  //     "Windows Phone",
  //     "iPad",
  //     "iPod"
  //   ];
  //   let flag = true;
  //   for (let i = 0; i < Agents.length; i++) {
  //     let agent = Agents[i].toLowerCase();
  //     if (userAgentInfo.indexOf(agent) > -1) {
  //       flag = false;
  //       break;
  //     }
  //   }
  //   return flag;
  // })(),
  // countdownTimeIds: {
  //   //存储倒计时定时器id
  // },
  regs: {
    email: /^[A-Za-zd0-9]+([-_.][A-Za-zd0-9]+)*@([A-Za-zd0-9]+[-.])+[A-Za-zd]{2,5}$/, //电子邮件
    pass: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!`@#$%^&*()_+|[\]\-={};':"<>?,./]+$)^[0-9A-Za-z~!`@#$%^&*()_+|[\]\-={};':"<>?,./]{8,32}$/, //密码
    mobile: /^1\d{10}$/, //手机号
    number: /^[0-9]+$/, //数字
    paramCode: /^[0-9A-Za-z]+$/, //只支持大小写字母和数字
    typeCode: /^[A-Z]+[0-9A-Za-z_]*[0-9A-Za-z]+$/, //类型名称（必填）：1~32个字符类型编码（必填）：1~32个字符（只能大写字母开头，允许包含数字、大小写字母、  下划线，不能以下划线结尾）

    // eslint-disable-next-line no-control-regex
    noChinese: /[^\x00-\xff]/gi
  }
};

let common = {
  //是否为debug模式
  debugMode: (function() {
    var flag = true;
    if (process.env.NODE_ENV == "production") {
      flag = false;
    }
    console.log(`current env is ${process.env.NODE_ENV}`, flag);
    return flag;
  })(),
  //变量池
  variablePool: variablePool,
  log() {
    let that = this;
    if (console) {
      that.debugMode && console.log.apply(console, arguments);
    }
  },
  error() {
    if (console) {
      console.error.apply(console, arguments);
    }
  },
  warn() {
    let that = this;
    if (console) {
      that.debugMode && console.warn.apply(console, arguments);
    }
  },
  info() {
    let that = this;
    if (console) {
      that.debugMode && console.info.apply(console, arguments);
    }
  },
  debug() {
    let that = this;
    if (console) {
      that.debugMode && console.debug.apply(console, arguments);
    }
  },
  group() {
    let that = this;
    if (console) {
      that.debugMode && console.group.apply(console, arguments);
    }
  },
  substitute(str, data) {
    if (data && typeof data == "object") {
      return str.replace(/\{([^{}]+)\}/g, function(match, key) {
        var value = data[key];
        return value !== undefined ? "" + value : "";
      });
    } else {
      return str.toString();
    }
  },
  convertBase64ToBlob(base64) {
    //去掉url的头，并转换为byte
    var bytes = window.atob(base64.split(",")[1]);
    //处理异常,将ascii码小于0的转换为大于0
    var ab = new ArrayBuffer(bytes.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/png" });
  },
  createCanvas: function() {
    var canvas = document.createElement("canvas");
    if (!window.devicePixelRatio) window.devicePixelRatio = 1;
    canvas.width =
      (document.documentElement.clientWidth || canvas.width) *
      window.devicePixelRatio;
    canvas.height =
      (document.documentElement.clientHeight || canvas.height) *
      window.devicePixelRatio;
    return canvas;
  },
  transformPoint: function(x, y, m) {
    return { x: m.a * x + m.c * y + m.e, y: m.b * x + m.d * y + m.f };
  },
  //更新matrix
  changeMatrix: function(matrix) {
    return matrix.replace(/\s/g, ",");
  },
  //还原matrix
  revertMatrix: function(matrix) {
    return matrix.replace(/,/g, " ");
  } /**
  // Function: utils.transformBox
  // Transforms a rectangle based on the given matrix
  //
  // Parameters:
  // l - Float with the box's left coordinate
  // t - Float with the box's top coordinate
  // w - Float with the box width
  // h - Float with the box height
  // m - Matrix object to transform the box by
  //
  // Returns:
  // An object with the following values:
  // * tl - The top left coordinate (x,y object)
  // * tr - The top right coordinate (x,y object)
  // * bl - The bottom left coordinate (x,y object)
  // * br - The bottom right coordinate (x,y object)
  // * aabox - Object with the following values:
  // * Float with the axis-aligned x coordinate
  // * Float with the axis-aligned y coordinate
  // * Float with the axis-aligned width coordinate
  // * Float with the axis-aligned height coordinate
  **/,
  transformBox: function(l, t, w, h, m) {
    var topleft = { x: l, y: t },
      topright = { x: l + w, y: t },
      botright = { x: l + w, y: t + h },
      botleft = { x: l, y: t + h };
    var transformPoint = common.transformPoint;
    topleft = transformPoint(topleft.x, topleft.y, m);
    var minx = topleft.x,
      maxx = topleft.x,
      miny = topleft.y,
      maxy = topleft.y;
    topright = transformPoint(topright.x, topright.y, m);
    minx = Math.min(minx, topright.x);
    maxx = Math.max(maxx, topright.x);
    miny = Math.min(miny, topright.y);
    maxy = Math.max(maxy, topright.y);
    botleft = transformPoint(botleft.x, botleft.y, m);
    minx = Math.min(minx, botleft.x);
    maxx = Math.max(maxx, botleft.x);
    miny = Math.min(miny, botleft.y);
    maxy = Math.max(maxy, botleft.y);
    botright = transformPoint(botright.x, botright.y, m);
    minx = Math.min(minx, botright.x);
    maxx = Math.max(maxx, botright.x);
    miny = Math.min(miny, botright.y);
    maxy = Math.max(maxy, botright.y);
    var center = {
        x: (topleft.x + botright.x) / 2,
        y: (topleft.y + botright.y) / 2
      },
      r =
        Math.sqrt(
          Math.pow(topleft.x - botright.x, 2) +
            Math.pow(topleft.y - botright.y, 2)
        ) / 2;
    return {
      tl: topleft,
      tr: topright,
      bl: botleft,
      br: botright,
      r: r,
      center: center,
      aabox: { x: minx, y: miny, width: maxx - minx, height: maxy - miny }
    };
  },
  //获取鼠标坐标
  getMousePosition: function(e, offset = { x: 0, y: 0, ratio: 1 }) {
    if (!offset.ratio) {
      offset.ratio = 1;
    }
    var x = e.clientX || e.pageX;
    var y = e.clientY || e.pageY;
    common.log("getMousePosition=", e.clientX, e.pageX, e.clientY, e.pageY);
    return {
      x: (x - offset.x) / offset.ratio,
      y: (y - offset.y) / offset.ratio
    };
  },
  //获取锁定角度的点  默认45度
  snapToAngle(x1, y1, x2, y2) {
    const snap = Math.PI / 4; // 45 degrees
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
    const dist = Math.sqrt(dx * dx + dy * dy);
    const snapangle = Math.round(angle / snap) * snap;

    return {
      x: x1 + dist * Math.cos(snapangle),
      y: y1 + dist * Math.sin(snapangle),
      a: snapangle
    };
  },
  /**
   * Round value to for snapping.
   * @function module:utilities.snapToGrid
   * @param {Float} value
   * @returns {Integer}
   */
  snapToGrid(value, { stepSize = 10 }) {
    // const unit = editorContext_.getBaseUnit();
    // let stepSize = 10;
    // if (unit !== "px") {
    //   stepSize *= 1;
    // }
    value = Math.round(value / stepSize) * stepSize;
    return value;
  },
  isDragging: function(e) {
    var changed = e.changedTouches.length,
      touching = e.touches.length;
    return changed === 1 && touching === 1;
  },
  isPinching: function(e) {
    var changed = e.changedTouches.length,
      touching = e.touches.length;
    return (changed === 1 || changed === 2) && touching === 2;
  },
  getTouchedPosition: function(e, offset) {
    if (!offset) {
      offset = { x: 0, y: 0, ratio: 1 };
    }
    if (!offset.ratio) {
      offset.ratio = 1;
    }
    var length = e.touches.length;
    switch (length) {
      case 1:
        return {
          point1: {
            x: (e.touches[0].pageX - offset.x) / offset.ratio,
            y: (e.touches[0].pageY - offset.y) / offset.ratio
          },
          length: length
        };
      case 2:
        // m[0].set(e.touches[0].pageX, e.touches[0].pageY, 0);
        // m[1].set(e.touches[1].pageX, e.touches[1].pageY, 0);
        return {
          point1: {
            x: (e.touches[0].pageX - offset.x) / offset.ratio,
            y: (e.touches[0].pageY - offset.y) / offset.ratio
          },
          point2: {
            x: (e.touches[1].pageX - offset.x) / offset.ratio,
            y: (e.touches[1].pageY - offset.y) / offset.ratio
          },
          length: length
        };
      default:
        return {
          point1: {
            x: (e.changedTouches[0].pageX - offset.x) / offset.ratio,
            y: (e.changedTouches[0].pageY - offset.y) / offset.ratio
          },
          length: length
        };
    }
  },
  getAngles: function(pos) {
    var touch1 = pos.point1,
      touch2 = pos.point2;
    var angle = 0;
    if (touch2) {
      var x = touch1.x - (touch2 ? touch2.x : 0),
        y = touch1.y - (touch2 ? touch2.y : 0);
      angle = (Math.atan2(y, x) * 180) / Math.PI;
    }
    return angle;
  },
  /**
   * 判断点在多边形内
   * param checkPoint被测点，polygonPoints范围点   点排布 左上 右上 左下 右下
   */ isInPolygon(checkPoint, polygonPoints) {
    // bmCommon.log(checkPoint, polygonPoints);
    if (
      polygonPoints[0][0] < checkPoint[0] &&
      polygonPoints[0][1] < checkPoint[1] &&
      polygonPoints[1][0] > checkPoint[0] &&
      polygonPoints[1][1] < checkPoint[1] &&
      polygonPoints[2][0] < checkPoint[0] &&
      polygonPoints[2][1] > checkPoint[1] &&
      polygonPoints[3][0] > checkPoint[0] &&
      polygonPoints[3][1] > checkPoint[1]
    ) {
      return true;
    } else {
      return false;
    }
    // var counter = 0;
    // var i;
    // var xinters;
    // var p1, p2;
    // var pointCount = polygonPoints.length;
    // p1 = polygonPoints[0];
    // for (i = 1; i <= pointCount; i++) {
    //   p2 = polygonPoints[i % pointCount];
    //   if (
    //     checkPoint[0] > Math.min(p1[0], p2[0]) &&
    //     checkPoint[0] <= Math.max(p1[0], p2[0])
    //   ) {
    //     if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
    //       if (p1[0] != p2[0]) {
    //         xinters =
    //           ((checkPoint[0] - p1[0]) * (p2[1] - p1[1])) / (p2[0] - p1[0]) +
    //           p1[1];
    //         if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
    //           counter++;
    //         }
    //       }
    //     }
    //   }
    //   p1 = p2;
    // }
    // if (counter % 2 == 0) {
    //   return false;
    // } else {
    //   return true;
    // }
  },
  getZooms: function(touch) {
    var touch1 = touch.point1,
      touch2 = touch.point2;

    var x = touch1.x - (touch2 ? touch2.x : 0),
      y = touch1.y - (touch2 ? touch2.y : 0);
    return Math.sqrt(x * x + y * y);
  },
  //递归处理树结构
  recursiveTree(
    list = [],
    pIdKey = "pId",
    idKey = "id",
    childrenKey = "children"
  ) {
    let data = JSON.parse(JSON.stringify(list)); // 浅拷贝不改变源数据
    let result = [];
    if (!Array.isArray(data)) {
      return result;
    }
    data.forEach(item => {
      delete item[childrenKey];
    });
    let map = {};
    data.forEach(item => {
      map[item[idKey]] = item;
    });
    data.forEach(item => {
      let parent = map[item[pIdKey]];
      if (parent) {
        (parent[childrenKey] || (parent[childrenKey] = [])).push(item);
      } else {
        result.push(item);
      }
    });
    return result;
  },
  clone(item) {
    return item && typeof item == "object"
      ? JSON.parse(JSON.stringify(item))
      : item;
  },
  removeItem(key, type) {
    if (type == 1) {
      sessionStorage.removeItem(key);
    } else if (type == 2) {
      localStorage.removeItem(key);
    } else {
      localStorage.removeItem(key);
    }
  },
  //设置本地存储数据
  setItem(key, value, type) {
    if (!value) {
      value = null;
    }
    try {
      if (type == 1) {
        sessionStorage.setItem(key, value);
        if (!value) {
          sessionStorage.removeItem(key);
        }
      } else if (type == 2) {
        localStorage.setItem(key, value);
        if (!value) {
          localStorage.removeItem(key);
        }
      } else {
        localStorage.setItem(key, value);
        if (!value) {
          localStorage.removeItem(key);
        }
      }
    } catch (err) {
      if (err.name == "QuotaExceededError") {
        common.log("超出本地存储限额！", err);
        //如果历史信息不重要了，可清空后再设置
        let userInfo = $vm.$store.getters.getUserInfo;
        localStorage.clear();
        $vm.$store.commit("setUserInfo", userInfo);
        if (type == 1) {
          sessionStorage.setItem(key, value);
          if (!value) {
            sessionStorage.removeItem(key);
          }
        } else if (type == 2) {
          localStorage.setItem(key, value);
          if (!value) {
            localStorage.removeItem(key);
          }
        } else {
          localStorage.setItem(key, value);
          if (!value) {
            localStorage.removeItem(key);
          }
        }
      }
    }
  },
  //获取本地存储数据
  getItem(key, type) {
    let item = null;
    if (type == 1) {
      item = sessionStorage.getItem(key);
    } else if (type == 2) {
      item = localStorage.getItem(key);
    } else {
      item = localStorage.getItem(key);
    }
    if (item == "undefined") {
      item = null;
    }
    return item;
  },
  /**
   * id 倒计时场景id
   * time 倒计时时间
   * intervalCallback  每次时间递减执行需要执行的函数
   * callback  倒计时完成需要执行的函数
   */
  // countdownTime(id, time, intervalCallback, callback) {
  //   let that = this;
  //   // if(!id){
  //   //     that.error("The function countdownTime params id is no found!")
  //   //     return;
  //   // }
  //   if (time < 1) {
  //     clearTimeout(variablePool.countdownTimeIds[id]);
  //     if (callback) {
  //       callback();
  //     }
  //     return;
  //   }
  //   variablePool.countdownTimeIds[id] = setTimeout(() => {
  //     time--;
  //     if (intervalCallback) {
  //       intervalCallback(time);
  //     }
  //     that.countdownTime(id, time, intervalCallback, callback);
  //   }, 1000);
  // },

  /**
   * @returns {string}
   */
  uuid() {
    const timestamp = +new Date() + "";
    const randomNum = parseInt((1 + Math.random()) * 65536) + "";
    return (
      (+(randomNum + timestamp)).toString(32) +
      parseInt(Math.random() * 10000000).toString(32)
    );
  },
  //获取语言
  langKey(langObj, key, options) {
    let str = key;
    if (langObj && langObj[key]) {
      str = langObj[key];
    }
    if (options) {
      str = common.substitute(str, options);
    }
    return str;
  }
  // //md5加密
  // commonMd5(str) {
  //   return md5(str);
  // }
  //   aesEncrypt(word) {
  //     let key = CryptoJS.enc.Utf8.parse(Constants.SECRETKEY); // 加密秘钥 16位
  //     let iv = CryptoJS.enc.Utf8.parse(Constants.SECRETIV); // 加密矢量
  //     let srcs = CryptoJS.enc.Utf8.parse(word);
  //     let encrypted = CryptoJS.AES.encrypt(srcs, key, {
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //     });
  //     return encrypted.toString();
  //   },
  //   //解密
  //   aesDecrypt(word) {
  //     let key = CryptoJS.enc.Utf8.parse(Constants.SECRETKEY); // 加密秘钥 16位
  //     let iv = CryptoJS.enc.Utf8.parse(Constants.SECRETIV); // 加密矢量
  //     let decrypt = CryptoJS.AES.decrypt(word, key, {
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //     });
  //     return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  //   },
  // deferLoad (component, time = 0) {
  //     return (resolve) => {
  //         window.setTimeout(() => resolve(component), time)
  //     };
  // },
  //   aesEncrypt(word) {
  //     let key = CryptoJS.enc.Utf8.parse(Constants.SECRETKEY); // 加密秘钥 16位
  //     let iv = CryptoJS.enc.Utf8.parse(Constants.SECRETIV); // 加密矢量
  //     let srcs = CryptoJS.enc.Utf8.parse(word);
  //     let encrypted = CryptoJS.AES.encrypt(srcs, key, {
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //     });
  //     return encrypted.toString();
  //   },
  //   //解密
  //   aesDecrypt(word) {
  //     let key = CryptoJS.enc.Utf8.parse(Constants.SECRETKEY); // 加密秘钥 16位
  //     let iv = CryptoJS.enc.Utf8.parse(Constants.SECRETIV); // 加密矢量
  //     let decrypt = CryptoJS.AES.decrypt(word, key, {
  //       iv: iv,
  //       mode: CryptoJS.mode.CBC,
  //       padding: CryptoJS.pad.Pkcs7
  //     });
  //     return CryptoJS.enc.Utf8.stringify(decrypt).toString();
  //   },
};
// window.bmCommon=common
export default common;
