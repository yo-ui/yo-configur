<template>
  <div class="b-login-page">
    <div class="logo" ref="logo">
      <img
        ref="logoImg"
        :style="logoStyle"
        :src="$loadImgUrl(logoSrc || 'upload/logo.png')"
        v-if="logoSrc"
      />
    </div>
    <div class="flex-content">
      <div class="bg-line"></div>
      <div class="form-box">
        <el-form
          :model="condition"
          :show-message="$store.state.showMessage"
          :rules="rules"
          :status-icon="false"
          ref="ruleForm"
          @keyup.enter.native="submitEvent"
        >
          <h1 class="title">{{ $lang("用户登录") }}</h1>
          <el-form-item prop="userName">
            <el-input
              prefix-icon="el-icon-user"
              :placeholder="$lang('请输入手机号/邮箱/用户名')"
              v-model="condition.userName"
              clearable
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              maxlength="30"
              type="password"
              :placeholder="$lang('请输入登录密码')"
              show-password
              v-model="condition.password"
              clearable
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-button
            class="btn-login"
            :disabled="loginAuthentStatus"
            type="primary"
            @click="submitEvent()"
          >
            <i class="el-icon-loading" v-if="loginAuthentStatus"></i>
            {{ $lang("登录") }}</el-button
          >
          <!-- <router-link
            class="btn-find"
            :to="{ name: $RouterURL.pwdFind.name }"
            >{{ $lang("忘记密码?") }}</router-link
          > -->
        </el-form>
      </div>
    </div>
    <!-- <div class="browser">
      <span>{{ $lang("推荐使用浏览器") }}</span>
      <a
        href="http://www.baidu.com/link?url=wIu5WeueGkMfLBmV7BPpgxShOXIPof1sB4Vi8kMav7aT-t3W5R_STWD_8Ax5tbQU6z_79e498qxEY96juRkQoEaUJaPpNG8cVAUylsaJMpe"
      >
        <img
          src="./../assets/image/login/explorer-chorme.png"
          :title="$lang('谷歌浏览器')"
        />
      </a>
      <a href="http://j.br.baidu.com/v1/t/full/p/browser/tn/11000002/ch_dl_url">
        <img
          src="./../assets/image/login/explorer-baidu.png"
          title="$lang('百度浏览器')"
        />
      </a>
      <a href="http://mk.maxthon.cn/mx5/5gn03/mx_5gn03.exe">
        <img
          src="./../assets/image/login/explorer-aoyou.png"
          title="$lang('遨游浏览器')"
        />
      </a>
    </div> -->
    <!-- <div class="reg-box">
      <router-link class="btn-reg" :to="{ name: $RouterURL.regist.name }">
        <p class="txt">{{ $lang("还没有账户? 立即注册") }}</p>
      </router-link>
    </div> -->
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations } = Vuex;
export default {
  data() {
    let validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号/邮箱/用户名"));
      } else {
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入登录密码"));
      } else if (value.length < 6 || value.length > 30) {
        callback(new Error("账户或者密码错误！"));
      } else {
        callback();
      }
    };
    return {
      logoSrc: "",
      logoStyle: {},
      loginAuthentStatus: false,
      condition: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [{ validator: validateUserName, trigger: "change" }],
        password: [{ validator: validatePass, trigger: "change" }]
      }
    };
  },
  mounted() {
    // let { condition } = this;
    // // let registerUserInfo = this.$store.getters.getRegisterUserInfo;
    // let { mobile = "", pwd = "" } = registerUserInfo || {};
    // if (mobile) {
    //   condition.userName = mobile;
    //   condition.password = pwd;
    // }
    // this.commonLoginInfo();
  },
  methods: {
    ...mapActions({
      // accountMenuHandlerAction: "accountMenuHandler",
      // commonLoginInfoAction: "commonLoginInfo",
      loginAuthentAction: "loginAuthent"
    }),
    ...mapMutations({
      // setRegisterUserInfo: "setRegisterUserInfo",
      setUserInfo: "setUserInfo"
    }),

    // getLogoSize: function(width, height) {
    //   // let wlogo = $('#logowarp');
    //   // let ilogo = $('#logoImg');
    //   let wlogo = this.$refs.logo;
    //   let ww = wlogo.offsetWidth * 0.75; //因为有个半透明的白条，不能盖再上面，只能盖再纯白的上面
    //   let wh = wlogo.offsetHeight * 0.75;

    //   let iw = width;
    //   let ih = height;
    //   let c = wh / ww;

    //   let k0 = wh / -ww;
    //   let e = wh;
    //   let k1 = ih / iw;
    //   let e1 = ih - k1 * iw;

    //   let dw = (e1 - e) / (k0 - k1);
    //   let px = ww * 0.04; //2%的左边距
    //   let pw = parseInt(dw - px) + 10;
    //   let dh = k0 * pw + e;
    //   let py = px * c + 5;
    //   let ph = parseInt(dh - py) + 10;
    //   this.logoStyle = {
    //     left: px + "px",
    //     top: py + "px",
    //     width: pw + "px",
    //     height: ph + "px"
    //   };
    // },
    // commonLoginInfo() {
    //   this.commonLoginInfoAction().then(({ data }) => {
    //     let { code = "", result } = data;
    //     if (code == Constants.CODES.SUCCESS) {
    //       let { logo } = result || {};
    //       this.logoSrc = logo;
    //       let image = new Image();
    //       let that = this;
    //       image.onload = function() {
    //         this.getLogoSize(that.width, that.height);
    //       };
    //       image.onerror = function() {
    //         bmCommon.error("图片加载失败");
    //       };
    //       image.src = this.$loadImgUrl(logo);
    //     }
    //   });
    // },
    submitEvent() {
      this.$refs.ruleForm.validate((valid, msg) => {
        if (valid) {
          // this.loginAuthentFunc();
          this.$jumpPage(this.$RouterURL.index.name);
        } else {
          if (msg) {
            for (let key in msg) {
              let item = msg[key];
              let message = item[0].message;
              message && this.$$msgError(message);
              return false;
            }
          }
          return false;
        }
      });
    }
    // loginAuthentFunc() {
    //   let { condition } = this;
    //   if (this.loginAuthentStatus) {
    //     return;
    //   }
    //   this.loginAuthentStatus = true;
    //   this.loginAuthentAction({
    //     loginName: condition.userName,
    //     pwd: condition.password
    //   })
    //     .then(({ data }) => {
    //       let { code = "", result = {}, message = "" } = data;
    //       if (code == Constants.CODES.SUCCESS) {
    //         let { user = {}, token = "" } = result || {};
    //         // this.setRegisterUserInfo();
    //         this.setUserInfo({ ...user, token });
    //         let { $route = {} } = this;
    //         // let { accountId = "" } = user || {};
    //         let { query } = $route;
    //         let { redirecturl = "" } = query;
    //         redirecturl = decodeURIComponent(redirecturl);
    //         if (redirecturl && redirecturl.indexOf("/login") != 0) {
    //           this.$router.push(redirecturl);
    //         } else {
    //           //   if (subMenuList && subMenuList.length > 0) {
    //           //     let item = subMenuList[0];
    //           //     this.$jumpPage(item.url);
    //           //   } else {
    //           this.$jumpPage(this.$RouterURL.index.name);
    //         }
    //         // }
    //       } else {
    //         this.$$msgError(message || "登录失败");
    //       }
    //       this.loginAuthentStatus = false;
    //     })
    //     .catch(err => {
    //       this.loginAuthentStatus = false;
    //       bmCommon.error("登录失败！", err);
    //     });
    // }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/pages/login.less";
</style>
