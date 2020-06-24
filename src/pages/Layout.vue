<template>
  <el-container class="bm-layout-page">
    <el-aside width="180">
      <img class="logo" src="@/assets/img/logo.png" />
      <img class="user-img" src="../assets/img/head.png" />
      <h2 class="user-name" v-text="$lang('管理员-运维')"></h2>
      <el-menu :default-active="menuActive" :collapse="menuCollapseStatus">
        <el-menu-item
          :index="item.url"
          v-for="(item, index) in menuList"
          :key="index"
        >
          <el-tooltip effect="dark" :content="item.name" placement="right">
            <router-link :to="{ name: item.url }">
              <i class="icon" :class="'icon-' + item.url"></i>
              {{ item.name }}
            </router-link>
          </el-tooltip>
        </el-menu-item>
      </el-menu>
      <el-button native-type="button" type="text" @click="logoutFunc()">
        <i class="icon icon-logout"></i>{{ $lang("退出登录") }}
      </el-button>
    </el-aside>
    <el-main>
      <keep-alive>
        <router-view
          class="child-view flex-content-box"
          v-if="$route.meta.cache"
        ></router-view>
      </keep-alive>
      <router-view
        class="child-view flex-content-box"
        v-if="!$route.meta.cache"
      ></router-view>
    </el-main>
  </el-container>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapMutations, mapGetters, mapActions } = Vuex;
export default {
  name: "bm-layout-com",
  data() {
    return {
      menuCollapseStatus: false,
      menuActive: ""
    };
  },
  computed: {
    ...mapGetters(),
    menuMap() {
      return this.$store.getters.getAccountMenuMap || {};
    },
    menuList() {
      return this.$store.getters.getAccountMenuList || [];
    }
  },
  methods: {
    ...mapMutations(["setUserInfo", "setAccountMenuList", "setAccountMenuMap"]),
    ...mapActions({
      logoutAction: "logout"
    }),
    //退出登录
    logoutFunc() {
      let that = this;
      if (that.logoutStatus) {
        return;
      }
      that.logoutStatus = true;
      that
        .logoutAction()
        .then(({ data }) => {
          that.logoutStatus = false;
          let { code = "", message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            that.setUserInfo(null);
            that.setAccountMenuList(null);
            that.setAccountMenuMap(null);
            that.$jumpLogin();
          } else {
            this.$message({
          showClose: this.$store.state.messageShowClose,
          type:"error",
          message: that.$lang(message || "退出登录失败")
        });
          }
        })
        .catch(err => {
          that.logoutStatus = false;
          this.$message({
          showClose: this.$store.state.messageShowClose,
          type:"error",
          message: that.$lang("退出登录失败")
        });
          bmCommon.error("退出登录失败", err);
        });
    }
  },
  mounted: function() {
    this.menuActive = this.$route.name;
  },
  watch: {
    $route(to) {
      this.menuActive = to.name;
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/pages/layout.less";
</style>
