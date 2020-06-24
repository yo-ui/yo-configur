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
    console.log("current env is ", flag);
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
    } catch (oException) {
      if (oException.name == "QuotaExceededError") {
        common.log("超出本地存储限额！");
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
