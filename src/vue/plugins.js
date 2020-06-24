/* eslint-disable no-undef */
import bmCommon from "@/common/common";
import { imageServer } from "@/common/env";
// import accounting from "accounting";
// import Big from "big.js";
// import moment from "moment";
Big.RM = 0;

export default {
  install(Vue) {
    //时间格式化
    Vue.prototype.$moment = moment;
    //是否开启路由动画
    Vue.prototype.$isTransition = true;

    //全局方法 获取语言
    Vue.prototype.$lang = function(key, options) {
      let langObj = this.$store.getters.getLangObj;
      return bmCommon.langKey(langObj, key, options);
    };
    //全局方法 转化大数据展示  num 值  fixed 代表要保留多少位小数  format 是否需要格式化 type 1为正常模式 2 为 如果传入小数位为4位  保留的是2位，则保留两位，如果小数位小于保留的小数位则直接展示
    Vue.prototype.$format = function(num, fixed) {
      return this.$toBig(num, fixed, "", 2);
    };
    //全局方法 转化大数据展示  num 值  fixed 代表要保留多少位小数  format 是否需要格式化 type 1为正常模式 2 为 如果传入小数位为4位  保留的是2位，则保留两位，如果小数位小于保留的小数位则直接展示
    Vue.prototype.$toBig = function(
      num = "",
      fixed = false,
      format = false,
      type = "1"
    ) {
      if (!num) {
        num = 0;
      }
      let val = "";
      try {
        if (fixed) {
          if (type == 2) {
            num = num + "";
            let index = num.indexOf(".");
            if (index > -1) {
              //有小数位
              let point = num.substring(index + 1);
              let { length: _len = 0 } = point || "";
              if (_len < fixed) {
                val = Big(num).toFixed();
              } else {
                val = Big(num).toFixed(fixed);
              }
            } else {
              val = Big(num).toFixed();
            }
          } else {
            val = Big(num).toFixed(fixed);
          }
        } else {
          val = Big(num).toFixed();
        }
        if (format) {
          if (Big(val).gt(0.01)) {
            val = accounting.formatMoney(val, { format: "%v" });
          }
        }
      } catch (err) {
        bmCommon.error("[main.js][toBig]", num, fixed, format, err);
      }
      return val;
    };

    //全局路由跳转 query 方式
    Vue.prototype.$jumpLogin = function() {
      let redirecturl = encodeURIComponent(this.$route.fullPath);
      if (this.$route.name == "login") {
        return;
      }
      this.$jumpPage("login", { redirecturl: redirecturl });
    };

    //全局跳转
    Vue.prototype.$jumpPage = function(url, params, query, redirect) {
      window.clickHistoryBackStatus = false;
      // this.$store.commit("setTransitionName", "turn-on");
      if (!params) {
        params = {};
      }
      if (!query) {
        query = {};
      }
      if (url === "login" && !redirect) {
        //如果是登录路由则自动加上 ,{redirecturl:encodeURIComponent(window.location.href)}
        // let redirecturl=encodeURIComponent(window.location.href)
        let redirecturl = encodeURIComponent(this.$route.fullPath);
        query.redirecturl = redirecturl;
      }
      this.$router.push({
        name: url,
        params: params || {},
        query: query || {}
      });
    };
    //全局跳转
    Vue.prototype.$backJumpPage = function(url, params, query) {
      // this.$store.commit("setTransitionName", "turn-off");
      if (!params) {
        params = {};
      }
      this.$router.push({
        name: url,
        params: params || {},
        query: query || {}
      });
    };
    //全局跳转
    Vue.prototype.$replacePage = function(url, params, query, type) {
      // if (type == "on") {
      //   this.$store.commit("setTransitionName", "turn-on");
      // } else if (type == "off") {
      //   this.$store.commit("setTransitionName", "turn-off");
      // } else {
      //   this.$store.commit("setTransitionName", "");
      // }
      if (!params) {
        params = {};
      }
      if (url.indexOf("/") > -1) {
        this.$router.replace(url);
        this.$loadingShow();
      } else {
        this.$router.replace({
          name: url,
          params: params || {},
          query: query || {}
        });
        this.$loadingShow();
      }
    };

    //全局返回
    Vue.prototype.$historyBack = function(back) {
      let that = this;
      // that.$store.commit("setTransitionName", "turn-off");
      window.clickHistoryBackStatus = true;
      if (!back) {
        back = -1;
      }
      if (window.jumpFromLogin) {
        back = -2;
        window.jumpFromLogin = false;
      }
      that.$router.go(back);
    };

    //全局window.location跳转
    Vue.prototype.$openPage = function(url, flag, options = {}) {
      if (!url) {
        return;
      }
      if (flag) {
        window.open(
          url,
          options.name || "_blank",
          options.specs || "",
          options.replace || false
        );
      } else {
        window.location.href = url;
      }
    };
    // 加载事件
    Vue.prototype.$loadingShow = function(type) {
      if (typeof type === "boolean") {
        if (type) {
          type = "block";
        } else {
          type = "none";
        }
      }
      if (!type) {
        type = "none";
      }
      let loading = document.getElementById("bm-loading");
      if (loading) {
        loading.style.display = type;
        // document.body.removeChild(loading)
      }
    };
    // 失去焦点事件
    Vue.prototype.$blurEvent = function(e) {
      e.stopPropagation();
      let _$vm = window.$vm;
      _$vm.timeoutId = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 200);
    };
    // 获取焦点事件
    Vue.prototype.$focusEvent = function(e) {
      e.stopPropagation();
      let _$vm = window.$vm;
      clearTimeout(_$vm.timeoutId);
    };
    //加载图片
    Vue.prototype.$loadImgUrl = function(url) {
      if (!url) {
        return "";
      }
      if (url.indexOf("http://") > -1 || url.indexOf("https://") > -1) {
        return url;
      }
      return imageServer + url;
    };

    //截取字符串   str 输入源   start 从头保留几个字符   end 结尾保留几个字符   symbol 中需要替换成的字符
    Vue.prototype.$ellipsis = function(str, start, end, symbol) {
      return (
        str.substr(0, start) +
        (str.length > start ? symbol || "******" : "") +
        str.substr(str.length - end)
      );
    };
  }
};
