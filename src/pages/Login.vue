<template>
  <div class="bm-login-page">
    <div class="content-box">
      <h1 class="title" v-text="$lang('能源物联网运维平台')"></h1>

      <div class="form-box">
        <el-form
          :model="condition"
          :rules="rules"
          ref="ruleForm"
          @submit.native.prevent
          @keyup.native.enter="submitFormEvent()"
        >
          <h2 class="form-title" v-text="$lang('用户登录')"></h2>
          <el-form-item prop="userName">
            <el-input
              v-model="condition.userName"
              maxlength="11"
              prefix-icon="icon icon-user"
              clearable
              :placeholder="$lang('请输入手机号码')"
            >
              <template slot="prefix"> </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="icon icon-password"
              clearable
              show-password
              v-model="condition.password"
              :placeholder="$lang('请输入登录密码')"
            ></el-input>
          </el-form-item>
          <div class="err-msg" v-text="errorMsg"></div>
          <div class="btn-box">
            <el-button
              native-type="button"
              type="primary"
              :disabled="loginAuthentStatus"
              @click="submitFormEvent"
            >
              <i class="el-icon-loading" v-if="loginAuthentStatus"></i>
              {{ $lang("登录") }}</el-button
            >
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import RouterURL from "@/router/routers.conf";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapMutations, mapGetters, mapActions } = Vuex;
export default {
  data() {
    return {
      loginAuthentStatus: false,
      condition: {
        userName: "",
        password: ""
      },
      errorMsg: "",
      rules: {
        userName: [
          {
            required: true,
            message: this.$lang("请输入手机号码"),
            trigger: "change"
          },
          {
            min: 11,
            max: 11,
            message: this.$lang("请输入正确的手机号码"),
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: this.$lang("请输入登录密码"),
            trigger: "change"
          },
          {
            min: 6,
            max: 30,
            message: this.$lang("密码为6-30个字符！"),
            trigger: "change"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters()
  },
  methods: {
    ...mapMutations({
      setUserInfo: "setUserInfo"
    }),
    ...mapActions({
      navigationFindAccountNavsAction: "navigationFindAccountNavs",
      loginAuthentAction: "loginAuthent"
    }),
    submitFormEvent() {
      this.$refs.ruleForm?.validate(valid => {
        if (valid) {
          this.loginAuthentFunc();
        } else {
          return false;
        }
      });
    },
    // 用户登录
    loginAuthentFunc() {
      let that = this;
      let { condition, $route } = that;
      if (that.loginAuthentStatus) {
        return;
      }
      that.loginAuthentStatus = true;
      that
        .loginAuthentAction({
          loginName: condition.userName,
          pwd: condition.password
        })
        .then(({ data }) => {
          let { code = "", result, message = "" } = data || {};
          that.loginAuthentStatus = false;
          let { user = {} } = result || {};
          if (code == Constants.CODES.SUCCESS) {
            that.setUserInfo(user);
            this.navigationFindAccountNavsAction().then(() => {
              let { query } = $route;
              let redirecturl = query.redirecturl;
              if (redirecturl) {
                that.$router.push(decodeURIComponent(redirecturl));
              } else {
                let routeName = RouterURL.provider.name;
                let menuList = this.$store.getters.getAccountMenuList || [];
                let menu =
                  menuList &&
                  menuList.find(item => {
                    return item.active;
                  });
                if (menu) {
                  routeName = menu.url;
                }
                that.$jumpPage(routeName);
              }
            });
          } else {
            that.errorMsg = message;
          }
        })
        .catch(err => {
          that.loginAuthentStatus = false;
          that.errorMsg = that.$lang("用户登录失败！");
          bmCommon.error("用户登录失败", err);
        });
    }
  },
  mounted() {}
};
</script>

<style lang="less">
@import (less) "../assets/less/pages/login.less";
</style>
