<template>
  <div class="bm-header-com">
    <div class="left">
      <el-button>
        <i class="el-icon-refresh-left" :title="$lang('撤销')"></i>
        {{ $lang("撤销") }}
      </el-button>
      <el-button>
        <i class="el-icon-refresh-right" :title="$lang('恢复')"></i>
        {{ $lang("恢复") }}
      </el-button>
      <el-button>
        <i class="el-icon-upload" :title="$lang('记录点')"></i>
        {{ $lang("记录点") }}
      </el-button>
      <el-button>
        <i class="el-icon-download" :title="$lang('回退')"></i>
        {{ $lang("回退") }}
      </el-button>
      <el-button-group>
        <el-button @click="zoomEvent(-20)">
          <i class="el-icon-minus"></i>
        </el-button>
        <el-button @click="zoomEvent(0)">
          <i class="el-icon-search"></i>
          {{ parseInt(zoom * 100) }}%
        </el-button>
        <el-button @click="zoomEvent(20)">
          <i class="el-icon-plus"></i> </el-button
      ></el-button-group>
      <el-button-group>
        <el-dropdown trigger="click">
          <span>
            <el-button
              ><i class="el-icon-files"></i> {{ $lang("组合") }}</el-button
            ><i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><i class="el-icon-files"></i>组合</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>打散</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>

      <el-button-group>
        <el-dropdown trigger="click">
          <span>
            <el-button>
              <i class="el-icon-files"></i>
              {{ $lang("分布") }} </el-button
            ><i class="el-icon-caret-bottom"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><i class="el-icon-files"></i>水平分布</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>垂直分布</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click">
          <span>
            <el-button>
              <i class="el-icon-files"></i>
              {{ $lang("对齐") }} </el-button
            ><i class="el-icon-caret-bottom"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><i class="el-icon-files"></i>左对齐</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>水平居中</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>右对齐</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>左右对齐</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>上对齐</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>垂直居中</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>下对齐</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>上下对齐</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click">
          <span>
            <el-button>
              <i class="el-icon-files"></i>
              {{ $lang("排列") }} </el-button
            ><i class="el-icon-caret-bottom"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><i class="el-icon-files"></i>置顶</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>置底</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>前移</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>后移</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>

      <el-button-group>
        <el-button>
          <i class="el-icon-circle-plus-outline"></i>
          {{ $lang("添加到自定义") }}
        </el-button>
      </el-button-group>

      <el-button-group>
        <el-dropdown trigger="click">
          <span>
            <el-button>
              <i class="el-icon-s-grid"></i>
              {{ $lang("皮肤") }} </el-button
            ><i class="el-icon-caret-bottom"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><i class="el-icon-files"></i>简洁白</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>酷炫黑</el-dropdown-item
            >
            <el-dropdown-item
              ><i class="el-icon-files"></i>荧光蓝</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>
      <el-button @click="leftMenuEvent">
        <i class="el-icon-s-fold"></i>
        {{ $lang(leftMenuStatus ? "收起左侧" : "展开左侧") }}
      </el-button>
      <el-button @click="rightMenuEvent">
        <i class="el-icon-s-unfold"></i>
        {{ $lang(rightMenuStatus ? "收起右侧" : "展开右侧") }}
      </el-button>
    </div>
    <div class="title">
      {{ canvas.name }}
    </div>
    <div class="right">
      <el-button>
        <i class="el-icon-copy-document" @click="copyEvent"></i>
        复制
      </el-button>
      <el-button>
        <i class="el-icon-delete" @click="deleteEvent"></i>
        删除
      </el-button>
      <el-button>
        <i class="el-icon-full-screen" @click="fullScreenEvent"></i>
        全屏
      </el-button>
      <el-button>
        <i class="el-icon-camera" @click="runEvent"></i>
        运行
      </el-button>
    </div>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters({
      canvas: "canvas/getCanvas",
      zoom: "canvas/getZoom", //放大缩小
      leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      activeCom: "canvas/getActiveCom",
      widgetList: "canvas/getWidgetList"
    })
  },
  methods: {
    ...mapMutations({
      setActiveCom: "canvas/setActiveCom",
      setZoom: "canvas/setZoom",
      setLeftMenuStatus: "canvas/setLeftMenuStatus",
      setRightMenuStatus: "canvas/setRightMenuStatus"
    }),
    ...mapActions({ selectComAction: "canvas/selectCom" }),
    // 初始化
    init() {
      // this.storeProductFunc();
    },
    copyEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let id = bmCommon.uuid();
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      order += 1;
      let item = { ...activeCom, id, order };
      widgetList.push(item);
      this.setActiveCom(item);
    },
    deleteEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let { id = "" } = activeCom;
      let index = widgetList.findIndex(item => id == item.id);
      widgetList.splice(index, 1);
      this.selectComAction();
    },
    leftMenuEvent() {
      let { leftMenuStatus = false } = this;
      this.setLeftMenuStatus(!leftMenuStatus);
    },
    rightMenuEvent() {
      let { rightMenuStatus = false } = this;
      this.setRightMenuStatus(!rightMenuStatus);
    },
    zoomEvent(val = 0) {
      let { zoom = 0, canvas = {} } = this;
      if (val) {
        zoom = zoom * 100 + val;
        if (zoom > 10 && zoom < 200) {
          this.setZoom(zoom / 100);
        }
      } else {
        this.setZoom(1);
        canvas.left = 0;
        canvas.top = 0;
      }
    },
    //运行
    runEvent() {},
    // 全屏事件
    fullScreenEvent() {
      let { fullScreenStatus } = this;
      if (fullScreenStatus) {
        this.exitFullscreen();
      } else {
        this.showFullScreen();
      }
      this.fullScreenStatus = !fullScreenStatus;
    },
    showFullScreen() {
      var element = document.documentElement;
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      }
    },
    // 退出全屏
    exitFullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/header.less";
</style>
