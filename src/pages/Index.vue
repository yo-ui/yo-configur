<template>
  <div class="bm-index-page">
    <bm-header ref="bmHeader"></bm-header>
    <bm-nav ref="bmNav"></bm-nav>
    <div class="flex-content">
      <bm-widget-list
        ref="bmWidgetList"
        v-show="leftMenuStatus"
      ></bm-widget-list>
      <!-- <div v-else></div> -->
      <div class="content-box">
        <div class="view-box" ref="viewBox">
          <!-- {{activeComIds}} -->
          <!-- :active="activeComIds == item.id" -->
          <!-- @drop="dropEvent" -->
          <div
            class="canvas-box"
            ref="canvasBox"
            :style="canvasStyle"
            :class="canvas.action"
          >
            <!-- @mousedown.native.stop.prevent="mousedownEvent(item)" -->
            <div class="bg" :style="bgStyle">
              <div class="grid" :style="gridStyle">
                <!-- {{gradientStyle}}
                {{canvasStyle}} -->
                <!-- {{bgStyle}} -->
                <!-- {{canvas}} -->
                <!-- {{ activeCom }} -->
              </div>
            </div>
            <bm-com
              class="edit"
              :class="{
                active: activeComIds.indexOf(item.id) > -1,
                locked: !item.dragable
              }"
              v-for="(item, index) in widgetList"
              :data-type="item.type"
              :data-id="item.id"
              type="edit"
              :info="item"
              :key="index"
            ></bm-com>
            <bm-lines ref="bmLines"></bm-lines>
          </div>
          <div class="slider-box" @mousedown.stop>
            {{ $toBig(zoom, 0) + "%" }}
            <!-- @input="changeZoomEvent" -->
            <el-slider
              v-model="zoom"
              :max="200"
              @mousedown.stop
              :format-tooltip="val => val + '%'"
            ></el-slider>
          </div>
        </div>
      </div>
      <bm-info ref="bmInfo" v-show="rightMenuStatus"></bm-info>
    </div>
    <ul
      class="context-menu"
      ref="contextMenuBox"
      v-show="showContextMenuStatus"
      :style="contextMenuStyle"
    >
      <li
        @click="cutEvent"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        剪切 <small>Ctrl+X</small>
      </li>
      <li
        @click="copyEvent"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        复制<small>Ctrl+C</small>
      </li>
      <li @click="pasteEvent" v-if="showContextMenuType == 2 && !!copyCom">
        粘贴<small>Ctrl+V</small>
      </li>
      <li
        @click="moveUpEvent"
        v-if="showContextMenuType == 1 && activeCom.dragable"
        class="line"
        :class="{ disabled: topOrder == activeCom.order }"
      >
        上移一层<small>Ctrl+[</small>
      </li>
      <li
        @click="moveDownEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        下移一层<small>Ctrl+]</small>
      </li>
      <li
        @click="moveTopEvent"
        :class="{ disabled: topOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        置于顶层<small>Ctrl+Shift+[</small>
      </li>
      <li
        @click="moveBottomEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        置于底层<small>Ctrl+Shift+]</small>
      </li>
      <li
        class="line"
        @click="lockEvent(false)"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        锁定<small>Ctrl+Shift+L</small>
      </li>
      <li
        @click="lockEvent(true)"
        v-if="showContextMenuType == 1 && !activeCom.dragable"
      >
        解锁<small>Ctrl+Shift+L</small>
      </li>
      <li
        @click="deleteEvent"
        v-if="showContextMenuType == 1 && activeCom.dragable"
      >
        删除<small>Delete</small>
      </li>
    </ul>
    <bm-footer ref="bmFooter"></bm-footer>
    <bm-select ref="bmSelect"></bm-select>

    <bm-device ref="bmDevice"></bm-device>
    <bm-point ref="bmPoint"></bm-point>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
import bmCom from "@/components/component";
import bmHeader from "@/components/header";
import bmNav from "@/components/nav";
import bmFooter from "@/components/footer";
import mixins from "@/mixins";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-index-page",
  data() {
    return {
      // comList: [],
      // activeComIds: "",
      // condition: {
      //   zoom: 100
      // }
      showContextMenuStatus: false,
      showContextMenuType: 1, //1 组件右键菜单   2是画布右键菜单
      copyCom: "",
      // shiftCtrlKeyDownStatus: false, //shit ctrl键被按下
      contextMenuStyle: {}
    };
  },
  mixins: [mixins],
  components: {
    bmHeader,
    bmNav,
    // : () =>
    //   import(/* webpackChunkName: "iot-header-com" */ "@/components/header"),
    bmLines: () =>
      import(/* webpackChunkName: "iot-lines-com" */ "@/components/lines"),
    bmSelect: () =>
      import(/* webpackChunkName: "iot-select-com" */ "@/components/select"),
    bmFooter,
    // : () =>
    //   import(/* webpackChunkName: "iot-footer-com" */ "@/components/footer"),
    bmInfo: () =>
      import(/* webpackChunkName: "iot-info-com" */ "@/components/info"),
    bmCom,
    // : () =>
    //   import(
    //     /* webpackChunkName: "iot-component-com" */ "@/components/component"
    //   ),
    bmWidgetList: () =>
      import(
        /* webpackChunkName: "iot-widget-list-com" */ "@/components/widget-list"
      ),
    bmDevice: () =>
      import(
        /* webpackChunkName: "iot-device-com" */ "@/components/data/device"
      ),
    bmPoint: () =>
      import(/* webpackChunkName: "iot-point-com" */ "@/components/data/point")
  },
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList", //组件列表
      getZoom: "canvas/getZoom", //放大缩小
      leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      canvas: "canvas/getCanvas", //画布属性
      selectBox: "canvas/getSelectBox", //选取框
      activeComs: "canvas/getActiveComs", //选中对象
      activeCom: "canvas/getActiveCom" //选中对象
    }),
    bottomOrder() {
      let { widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.min(...orders);
      return order;
    },
    topOrder() {
      let { widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      return order;
    },
    zoom: {
      get() {
        return parseInt(this.getZoom * 100);
      },
      set(val) {
        this.setZoom(val / 100);
      }
    },
    activeComIds() {
      // let { activeCom = {} } = this;
      // let { id = "" } = activeCom || {};
      // return id || "";
      let {
        // widgetList = [],
        // selectBox = {},
        activeComs = [],
        activeCom = {}
      } = this;
      let ids = [];
      let { length = 0 } = activeComs || [];
      if (length > 1) {
        ids = activeComs.map(item => item.id);
      } else {
        let { id = "" } = activeCom || {};
        ids.push(id);
      }
      return ids || [];
    },
    gridStyle() {
      let { canvas = {} } = this;
      let { isGrid = false, gridStyle = {} } = canvas || {};
      let styles = {};
      if (isGrid) {
        let { width, height } = gridStyle || {};
        styles[
          "background"
        ] = `linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / ${width}px ${height}px, linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / ${width}px ${height}px`;
      }
      return styles || {};
    },
    bgStyle() {
      let { canvas = {} } = this;
      let { backgroundSize = "", backgroundImage = "" } = canvas || {};
      let styles = {};
      if (backgroundImage) {
        styles["backgroundImage"] = `url(${backgroundImage})`;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      return styles || {};
    },
    //渐变颜色样式
    gradientStyle() {
      let { canvas = {} } = this;
      let { gradientStyle = {} } = canvas || {};
      let {
        type = "",
        angle = "",
        center = "",
        radialShape = "",
        valueList = []
      } = gradientStyle || {};
      let styles = {};
      let colors = valueList.map(item => `${item.code} ${item.value}%`);
      if (type == "linear") {
        styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
      } else if (type == "radial") {
        styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
      }
      return styles;
    },
    canvasStyle() {
      let { zoom = 0, canvas = {}, gradientStyle = {} } = this;
      let {
        left = 0,
        top = 0,
        height = "",
        width = "",
        backgroundType = "",
        backgroundColor = "#fff"
        // backgroundImage = ""
      } = canvas;
      zoom = zoom / 100;
      let styles = {
        left: `${left}px`,
        top: `${top}px`,
        // backgroundColor: `${backgroundColor}`,
        transform: `scale(${zoom})`,
        webkitTransform: `scale(${zoom})`
      };
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (backgroundType == "purity") {
        //纯色
        styles["backgroundColor"] = backgroundColor;
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle };
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${backgroundImage})`;
      // }
      return styles || {};
    }
  },
  methods: {
    ...mapMutations({
      setZoom: "canvas/setZoom",
      setWidgetList: "canvas/setWidgetList", //设置组件列表
      setActiveCom: "canvas/setActiveCom",
      setActiveComs: "canvas/setActiveComs",
      initMove: "canvas/initMove",
      setLinkPoint: "canvas/setLinkPoint", //设置连接点信息
      moving: "canvas/moving",
      stopMove: "canvas/stopMove"
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      selectComsAction: "canvas/selectComs"
    }),
    init() {
      this.initEvent();
      this.$nextTick(() => {
        let $canvasBox = $(this.$refs.canvasBox);
        let { canvas = {} } = this;
        let width = $canvasBox.innerWidth();
        let height = $canvasBox.innerHeight();
        canvas.width = width;
        canvas.height = height;
      });
    },
    initEvent() {
      let viewBox = this.$refs.viewBox;
      // 注册鼠标事件
      $(viewBox).on("mousedown", this.viewBoxMousedownEvent);
      // 注册右键菜单事件
      $(viewBox).on("contextmenu", this.viewBoxContextmenuEvent);
      //注册按键键盘事件
      $(document).on("keydown", this.keydownEvent);
      //注册绑定设备事件
      // eslint-disable-next-line no-undef
      $vm.$on("bindDevice", item => {
        this.addDataEvent(item);
      });
      // //注册窗口变换事件
      // $(window).on("resize", this.resizeEvent);
      // $(document).on("keyup", this.keyupEvent);
      // $(document).on("mousedown", this.keydownEvent);
      // 默认选择画布
      this.selectComAction();
    },
    //添加数据事件
    addDataEvent(item = {}) {
      let { dataType = "" } = item || {};
      switch (dataType) {
        case "point":
          this.$refs.bmPoint?.show(item);
          break;
        case "device":
          this.$refs.bmDevice?.show(item);
          break;

        default:
          break;
      }
    },
    // resizeEvent(){
    //   let {canvas={}}=this
    //   let $window=$(window)
    //   let height=$window.height()
    //   let width=$window.width()
    // },
    viewBoxContextmenuEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let { target, ctrlKey = false } = e;
      if (ctrlKey) {
        return;
      }
      this.showContextMenuStatus = true;
      let $parent = $(target).parents(".bm-component-com");
      let type = $(target).attr("data-type");
      let id = $(target).attr("data-id");
      if (!type) {
        type = $parent.attr("data-type");
        id = $parent.attr("data-id");
      }
      if (type) {
        this.showContextMenuType = 1;
        this.selectComAction(id); //选中组件
      } else {
        this.showContextMenuType = 2;
        // 取消选中组件
        this.selectComAction(id);
      }
      this.$nextTick(() => {
        let pos = bmCommon.getMousePosition(e);
        let { x = "", y = "" } = pos || {};
        let contextMenuBox = this.$refs.contextMenuBox;
        let { offsetHeight = 0 } = contextMenuBox || {};
        let { innerHeight = 0 } = window;
        y = y > innerHeight - offsetHeight ? innerHeight - offsetHeight : y;
        this.contextMenuStyle = {
          left: x + "px",
          top: y + "px"
        };
      });
    },
    viewBoxMousedownEvent(e) {
      // e.stopPropagation();
      // e.preventDefault();
      let { target, shiftKey = false, ctrlKey = false } = e;
      let $parent = $(target).parents(".bm-component-com");
      let type = $(target).attr("data-type");
      let id = $(target).attr("data-id");
      let width = $(target).outerWidth();
      let height = $(target).outerHeight();
      if (!type) {
        type = $parent.attr("data-type");
        id = $parent.attr("data-id");
        width = $parent.outerWidth();
        height = $parent.outerHeight();
      }
      if (type) {
        this.showContextMenuType = 1;
        // 绑定移动事件：只有从属于 page 的，除背景图以外的元件才能移动
        // let [item = {}] = activeComs || [];
        //如果 shift ctrl 被按住则进行 多选和取消选择
        if (shiftKey || ctrlKey) {
          // let { dragable = false } = activeCom || {};
          this.selectComsAction(id); //选中组件
        } else {
          this.selectComAction(id); //选中组件
        }
        let {
          activeComs = [],
          // shiftCtrlKeyDownStatus = false,
          activeCom = {}
        } = this;
        let { length = 0 } = activeComs || [];
        let { dragable = false, rotateable = false } = activeCom || {};
        if (!rotateable) {
          let padding = 0;
          activeCom.originWidth = width - padding; //减去 padding
          activeCom.originHeight = height - padding; //减去 padding
        }
        //选择多个则必定可以移动
        if (length > 1) {
          dragable = true;
        }
        if (dragable) {
          this.initMoveEvent(e); // 参见 mixins
        }
      } else {
        this.showContextMenuType = 2;
        // 取消选中组件
        this.selectComAction(id);
        this.selectComsAction(id);
        // this.initMoveEvent(e); // 参见 mixins
      }
      this.showContextMenuStatus = false;
    },
    // keyupEvent(e) {
    //   this.shiftCtrlKeyDownStatus = false;
    // },
    keydownEvent(e) {
      let {
        keyCode = "",
        shiftKey = false,
        ctrlKey = false
        // altKey = false
      } = e;
      e.stopPropagation();
      // e.preventDefault();
      // bmCommon.log("index keydow", e);
      let { activeCom } = this;
      let { type = "", id = "", dragable = false } = activeCom || {};
      if (type == "canvas" || !id) {
        //如果选中的是画布或未选中组件则直接返回
        return;
      }
      //默认移动距离
      let dis = 1;
      //按住Shift键移动距离
      let shiftDis = 10;
      // if (shiftKey || ctrlKey) {
      //   this.shiftCtrlKeyDownStatus = true;
      //   e.preventDefault();
      // }
      if (keyCode === 37) {
        // 左
        // dis = 1;
        if (shiftKey) {
          dis = shiftDis;
        }
        activeCom.left -= dis;
        // bmCommon.log("左", activeCom);
      } else if (keyCode === 38) {
        // 上
        // let dis = 1;
        if (shiftKey) {
          dis = shiftDis;
        }
        activeCom.top -= dis;
        // bmCommon.log("上", activeCom);
      } else if (keyCode === 39) {
        // 右
        // let dis = 1;
        if (shiftKey) {
          dis = shiftDis;
        }
        activeCom.left += dis;
        // bmCommon.log("右", activeCom);
      } else if (keyCode === 40) {
        // 下
        // let dis = 1;
        if (shiftKey) {
          dis = shiftDis;
        }
        activeCom.top += dis;
        // bmCommon.log("下", activeCom);
      } else if (keyCode == 67) {
        // C
        if (ctrlKey) {
          this.copyEvent();
        }
      } else if (keyCode == 86) {
        // V
        if (ctrlKey) {
          this.pasteEvent();
        }
      } else if (keyCode == 88) {
        // X
        if (ctrlKey) {
          this.cutEvent();
        }
      } else if (keyCode == 219) {
        // ctrl+[
        // ctrl+shift+[
        if (ctrlKey && shiftKey) {
          this.moveTopEvent();
        } else {
          if (ctrlKey) {
            this.moveUpEvent();
          }
        }
      } else if (keyCode == 221) {
        // ctrl+]
        // ctrl+shift+]
        if (ctrlKey && shiftKey) {
          this.moveBottomEvent();
        } else {
          if (ctrlKey) {
            this.moveDownEvent();
          }
        }
      } else if (keyCode == 76) {
        // ctrl+shift+L
        if (ctrlKey && shiftKey) {
          this.lockEvent(!dragable);
        }
      } else if (keyCode == 46) {
        // Delete
        this.deleteEvent();
      }
    },
    //剪切
    cutEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let { id = "" } = activeCom;
      this.copyCom = bmCommon.clone(activeCom || {});
      let index = widgetList.findIndex(item => id == item.id);
      widgetList.splice(index, 1);
      this.selectComAction();
      this.showContextMenuStatus = false;
    },
    // 复制
    copyEvent() {
      let { activeCom = {} } = this;
      this.copyCom = bmCommon.clone(activeCom || {});
      this.showContextMenuStatus = false;
    },
    // 粘贴
    pasteEvent(e) {
      let { copyCom = {}, widgetList = [] } = this;
      let id = bmCommon.uuid();
      // let obj = widgetList[widgetList.length - 1] || {};
      let { width = 0, height = 0, left = 0, top = 0 } = copyCom || {};
      if (e) {
        let pos = bmCommon.getMousePosition(e, { x: 310, y: 90 });
        let { x = "", y = "" } = pos || {};
        left = x - width / 2;
        top = y - height / 2;
      }
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      order += 1;
      let item = {
        ...copyCom,
        id,
        order,
        left: left,
        top: top
      };
      widgetList.push(item);
      this.setActiveCom(item);
      this.showContextMenuStatus = false;
    },
    // 删除
    deleteEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let { id = "" } = activeCom;
      let index = widgetList.findIndex(item => id == item.id);
      widgetList.splice(index, 1);
      this.selectComAction();
      this.showContextMenuStatus = false;
    },
    // 锁定/解锁
    lockEvent(dragable) {
      let { activeCom = {} } = this;
      activeCom.dragable = dragable;
      this.showContextMenuStatus = false;
    },
    // 上移一层
    moveUpEvent() {
      this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList = [] } = this;
      let { order = "" } = activeCom;
      let orders = widgetList.map(item => item.order).sort((a, b) => a - b);
      let _order = orders.find(item => item > order);
      let obj = widgetList.find(item => _order == item.order);
      // let obj = widgetList.find(item => order < item.order);
      // let { order: _order = "" } = obj || {};
      activeCom.order = _order;
      obj.order = order;
    },
    // 下移一层
    moveDownEvent() {
      this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList = [] } = this;
      let { order = "" } = activeCom;
      let orders = widgetList.map(item => item.order).sort((a, b) => b - a);
      // bmCommon.log("orders=>", orders, order);
      let _order = orders.find(item => item < order);
      let obj = widgetList.find(item => _order == item.order);
      // bmCommon.log("obj=>", _order, obj.order);
      // let { order: _order = "" } = obj || {};
      activeCom.order = _order;
      obj.order = order;
    },
    // 置底
    moveBottomEvent() {
      this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.min(...orders);
      let { order: _order = 1 } = activeCom || {};
      if (order == _order) {
        return;
      }
      widgetList.forEach(item => {
        item.order++;
      });
      activeCom.order = 0;
    },
    // 置顶
    moveTopEvent() {
      this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      let { order: _order = 1 } = activeCom || {};
      if (order == _order) {
        return;
      }
      activeCom.order = order + 1;
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    let canvas = this.$refs.canvas;
    $(canvas).off("mousedown");
    $(document).off("keydown");
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/index.less";
</style>
