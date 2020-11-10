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
        <div class="view-box" ref="viewBox" :style="viewBoxStyle">
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
                <!-- {{ copyCom }} -->
              </div>
            </div>
            <bm-com
              class="edit"
              :class="{
                active: activeComIds.indexOf(item.id) > -1,
                locked: item.locked,
                opacity:
                  activeComIds &&
                  activeComIds.length > 0 &&
                  !(activeComIds.indexOf(item.id) > -1) &&
                  activeCom.type != 'canvas'
              }"
              v-for="(item, index) in widgetList"
              :data-type="item.type"
              :data-id="item.id"
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
    <!-- showContextMenuStatus&&(activeCom.type != 'canvas' || activeComs.length > 1) -->
    <ul
      class="context-menu"
      ref="contextMenuBox"
      v-show="showContextMenuStatus"
      @mouseenter="showContenxtMenuEvent"
      @mouseleave="hideContextMenuEvent"
      :style="contextMenuStyle"
    >
      <!-- <li
        @click="cutEvent"
        v-if="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("添加到自定义") }} <small>Ctrl+X</small>
      </li> -->
      <li
        @click="cutEvent"
        v-if="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("剪切") }} <small>Ctrl+X</small>
      </li>
      <li
        @click="copyEvent"
        v-if="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("复制") }}<small>Ctrl+C</small>
      </li>
      <li @click="pasteEvent" v-if="showContextMenuType == 2 && !!copyCom">
        {{ $lang("粘贴") }}<small>Ctrl+V</small>
      </li>
      <li
        @click="moveUpEvent"
        v-if="showContextMenuType == 1 && !activeCom.locked"
        class="line"
        :class="{ disabled: topOrder == activeCom.order }"
      >
        {{ $lang("上移一层") }}<small>Ctrl+[</small>
      </li>
      <li
        @click="moveDownEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("下移一层") }}<small>Ctrl+]</small>
      </li>
      <li
        @click="moveTopEvent"
        :class="{ disabled: topOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("置于顶层") }}<small>Ctrl+Shift+[</small>
      </li>
      <li
        @click="moveBottomEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-if="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("置于底层") }}<small>Ctrl+Shift+]</small>
      </li>
      <li
        class="line"
        @click="lockEvent(true)"
        v-if="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("锁定") }}<small>Ctrl+Shift+L</small>
      </li>
      <li
        @click="lockEvent(false)"
        v-if="showContextMenuType == 1 && activeCom.locked"
      >
        {{ $lang("解锁") }}<small>Ctrl+Shift+L</small>
      </li>
      <li @click="deleteEvent" v-if="showContextMenuType == 1">
        {{ $lang("删除") }}<small>Delete</small>
      </li>
    </ul>
    <bm-footer ref="bmFooter"></bm-footer>
    <bm-select ref="bmSelect"></bm-select>
    <bm-control ref="bmControl"></bm-control>
    <bm-device ref="bmDevice"></bm-device>
    <bm-point ref="bmPoint"></bm-point>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import bmCom from "@/components/component";
import bmHeader from "@/components/header";
import bmNav from "@/components/nav";
import bmWidgetList from "@/components/widget-list";
import bmInfo from "@/components/info";
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
      condition: {
        canvasId: ""
      },
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
    bmControl: () =>
      import(/* webpackChunkName: "iot-control-com" */ "@/components/control"),
    bmFooter,
    // : () =>
    //   import(/* webpackChunkName: "iot-footer-com" */ "@/components/footer"),
    // bmInfo: () =>
    //   import(/* webpackChunkName: "iot-info-com" */ "@/components/info"),
    bmCom,
    bmInfo,
    bmWidgetList,
    // : () =>
    //   import(
    //     /* webpackChunkName: "iot-component-com" */ "@/components/component"
    //   ),
    // bmWidgetList: () =>
    //   import(
    //     /* webpackChunkName: "iot-widget-list-com" */ "@/components/widget-list"
    //   ),
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
    viewBoxStyle() {
      let { leftMenuStatus = false, rightMenuStatus = false } = this;
      let styles = {};
      if (!leftMenuStatus) {
        styles["left"] = 0;
      }
      if (!rightMenuStatus) {
        styles["right"] = 0;
      }
      return styles;
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
      setOrganizeList: "common/setOrganizeList",
      setZoom: "canvas/setZoom",
      setWidgetList: "canvas/setWidgetList", //设置组件列表
      setActiveCom: "canvas/setActiveCom", //设置当前选中组件
      setCanvas: "canvas/setCanvas",
      setCanvasData: "canvas/setCanvasData",
      setActiveComs: "canvas/setActiveComs",
      initMove: "canvas/initMove",
      setShowType: "canvas/setShowType",
      setLinkPoint: "canvas/setLinkPoint", //设置连接点信息
      moving: "canvas/moving",
      stopMove: "canvas/stopMove"
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      selectComsAction: "canvas/selectComs",
      orgStrucListByLevelAction: "orgStrucListByLevel",
      canvasGetAction: "canvasGet",
      createHistoryAction: "canvas/createHistory",
      commonGetDeviceAction: "commonGetDevice",
      commonDevicePointHstDataAction: "commonDevicePointHstData"
    }),
    init() {
      this.initEvent();
      let { condition, canvas = {}, $route } = this;
      let { query = {} } = $route;
      // this.commonVerifyInfoFunc((info = {}) => {
      // 166
      let { canvasId = "", type = 1 } = query || {};
      condition.canvasId = canvasId;
      this.setShowType(Constants.SHOWTYPEMAP.EDIT);
      this.canvasGetFunc((detail = {}) => {
        let {
          name = "",
          width = "",
          height = "",
          id: canvasId = "",
          data = {}
        } = detail || {};
        if (canvasId) {
          data = typeof data === "string" ? JSON.parse(data) : data;
          let { canvasData = {} } = data || {};
          let { widgetList = [], canvas: _canvas } = canvasData || {};
          if (_canvas) {
            canvas = { ...canvas, ...(_canvas || {}) };
          }
          canvas.name = name;
          canvas.width = width;
          canvas.height = height;
          canvas.canvasId = canvasId;
          canvas.canvasType = type; //1为编辑   2为预览
          canvas.left = 0;
          canvas.top = 0;
          this.setCanvas(canvas);
          widgetList.forEach(item => {
            let { alias = "", type = "" } = item || {};
            if (!alias) {
              alias = type;
            }
            let _item = Constants.COMPONENTLIBRARYMAP[alias] || {};
            let { data = {} } = _item || {};
            let { infoType = "", dataType = "" } = data || {};
            // item.showCoverStatus = true;
            item.infoType = infoType;
            item.dataType = dataType;
            item.alias = alias;
          });
          this.setWidgetList(widgetList);
          this.setCanvasData(data);
          this.resetCanvasSize();
          this.selectComAction();
        } else {
          this.$nextTick(() => {
            let $canvasBox = $(this.$refs.canvasBox);
            let { canvas = {} } = this;
            let width = $canvasBox.innerWidth();
            let height = $canvasBox.innerHeight();
            canvas.width = width;
            canvas.height = height;
            this.resetCanvasSize();
            this.selectComAction();
          });
        }
        this.createHistoryAction();
      });
      // });
      this.orgStrucListByLevelFunc((list = []) => {
        // let [org = {}] = list || [];
        // let { id = "" } = org || {};
        // // condition.orgId = id;
        // // condition.orgName = name;
        // this.defaultExpandedKeys = [id];
        // // this.$nextTick(() => {
        // //   this.$refs.tree?.setCurrentKey(id);
        // // });
        // // this.loadReportDeviceList();
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
      $(window).on("resize", this.resetCanvasSize);
      //注册绑定设备事件
      $vm.$on("bindDevice", item => {
        this.addDataEvent(item);
      });
      //注册显示控制处理事件
      $vm.$on("control", item => {
        this.$refs.bmControl.show(item);
      });
      //注册获取设备信息事件
      $vm.$on("device", item => {
        let { deviceId = "", callback = () => {} } = item || {};
        this.commonGetDeviceFunc(deviceId, callback);
      });
      //注册获取设备点位历史数据事件
      $vm.$on("device-point-hst-data", item => {
        let {
          deviceId = "",
          point = "",
          startTime = "",
          endTime = "",
          callback = () => {}
        } = item || {};
        this.commonDevicePointHstDataFunc(
          { deviceId, point, startTime, endTime },
          callback
        );
      });
      // //注册窗口变换事件
      // $(window).on("resize", this.resizeEvent);
      // $(document).on("keyup", this.keyupEvent);
      // $(document).on("mousedown", this.keydownEvent);
      // 默认选择画布
      this.selectComAction();
    },

    resetCanvasSize() {
      this.$nextTick(() => {
        let $window = $(window);
        let { leftMenuStatus = false, rightMenuStatus = false } = this;
        let $leftBox = $(".bm-widget-list-com");
        let $rightBox = $(".bm-info-com");
        let leftWidth = $leftBox.width();
        if (!leftMenuStatus) {
          leftWidth = 0;
        } else {
          leftWidth += 30;
        }
        let rightWidth = $rightBox.width();
        if (!rightMenuStatus) {
          rightWidth = 0;
        } else {
          rightWidth += 30;
        }
        // let w_height = $window.height();
        let w_width = $window.width();
        if (w_width < 1280) {
          w_width = 1280;
        }
        w_width = w_width - rightWidth - leftWidth;
        let { canvas = {} } = this;
        let { width = 0 } = canvas || {};
        // let h_ratio = w_height / height;
        let w_ratio = w_width / width;
        let scale = w_ratio;
        // let left = (w_width - width) / 2;
        // let top = ((w_height - height) * scale) / 2;
        // if (h_ratio > w_ratio) {
        //   scale = h_ratio;
        //   // left = ((w_width - width) * scale) / 2;
        //   // top = (w_height - height) / 2;
        // }
        // canvas.left = left;
        // canvas.top = top;
        this.setZoom(scale);
      });
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
    zoomEvent(val = 0) {
      let { getZoom: zoom = 0, canvas = {} } = this;
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
    // resizeEvent(){
    //   let {canvas={}}=this
    //   let $window=$(window)
    //   let height=$window.height()
    //   let width=$window.width()
    // },
    closeContenxtMenuEvent() {
      // bmCommon.log("closeContenxtMenuEvent");
      this.showContextMenuStatus = true;
      this._showContextMenuTimeoutId = setTimeout(() => {
        clearTimeout(this._showContextMenuTimeoutId);
        this.showContextMenuStatus = false;
      }, 1000);
    },
    showContenxtMenuEvent() {
      // bmCommon.log("showContenxtMenuEvent");
      clearTimeout(this._showContextMenuTimeoutId);
    },
    hideContextMenuEvent() {
      clearTimeout(this._showContextMenuTimeoutId);
      // bmCommon.log("hideContextMenuEvent");
      this.showContextMenuStatus = false;
    },
    viewBoxContextmenuEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let { target, ctrlKey = false } = e;
      if (ctrlKey) {
        return;
      }
      this.closeContenxtMenuEvent();
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
        let { offsetHeight = 0, offsetWidth = 0 } = contextMenuBox || {};
        let { innerHeight = 0 } = window;
        y = y > innerHeight - offsetHeight + 5 ? innerHeight - offsetHeight : y;
        x = x > innerWidth - offsetWidth + 5 ? innerWidth - offsetWidth : x;
        this.contextMenuStyle = {
          left: x - 5 + "px",
          top: y - 5 + "px"
        };
      });
    },
    viewBoxMousedownEvent(e) {
      // e.stopPropagation();
      // e.preventDefault();
      let { target, shiftKey = false, ctrlKey = false, metaKey = false } = e;
      ctrlKey = ctrlKey || metaKey; //(ctrl(cmd))
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
        let { activeCom: _activeCom = {} } = this;
        let { id: _id = "" } = _activeCom || {};
        //如果 shift ctrl 被按住则进行 多选和取消选择
        if (shiftKey || ctrlKey) {
          // let { locked = false } = activeCom || {};
          this.selectComsAction(id); //选中组件
        } else {
          if (id != _id) {
            // 如果是已经选中了则不做处理
            this.selectComAction(id); //选中组件
          }
        }
        let {
          activeComs = [],
          // shiftCtrlKeyDownStatus = false,
          activeCom = {}
        } = this;
        let { length = 0 } = activeComs || [];
        let { locked = false, rotateable = false } = activeCom || {};
        if (!rotateable) {
          let padding = 0;
          activeCom.originWidth = width - padding; //减去 padding
          activeCom.originHeight = height - padding; //减去 padding
        }
        //选择多个则必定可以移动
        if (length > 1) {
          locked = false;
        }
        if (!locked) {
          this.initMoveEvent(e); // 参见 mixins
        }
      } else {
        this.showContextMenuType = 2;
        let { activeCom = {} } = this;
        activeCom.showCoverStatus = true;
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
        ctrlKey = false,
        metaKey = false
        // altKey = false
      } = e;
      ctrlKey = ctrlKey || metaKey; //(ctrl(cmd))
      // e.stopPropagation();
      bmCommon.log("index keydow", e);
      let { activeCom = {}, activeComs = [], widgetList = [] } = this;
      let { length = 0 } = activeComs || [];
      let { type = "", id = "", locked = false } = activeCom || {};
      if (keyCode == 83) {
        // ctrl+S  保存
        if (ctrlKey) {
          e.preventDefault();
          $vm.$emit("save");
        }
        return;
      } else if (keyCode == 65) {
        // ctrl+a 全选
        if (ctrlKey) {
          e.preventDefault();
          this.setActiveComs(bmCommon.clone(widgetList));
        }
        return;
      } else if (keyCode == 189) {
        // ctrl+- 缩小
        if (ctrlKey) {
          e.preventDefault();
          this.zoomEvent(-10);
        }
        return;
      } else if (keyCode == 187) {
        // ctrl++放大
        if (ctrlKey) {
          e.preventDefault();
          this.zoomEvent(10);
        }
        return;
      }
      if (length < 2) {
        if (type == "canvas" || !id) {
          //如果选中的是画布或未选中组件则直接返回
          return;
        }
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
        e.preventDefault();
        if (shiftKey) {
          dis = shiftDis;
        }
        if (length > 1) {
          activeComs.forEach(item => {
            item.left -= dis;
          });
        } else {
          activeCom.left -= dis;
        }
        // bmCommon.log("左", activeCom);
      } else if (keyCode === 38) {
        // 上
        // let dis = 1;
        e.preventDefault();
        if (shiftKey) {
          dis = shiftDis;
        }
        if (length > 1) {
          activeComs.forEach(item => {
            item.top -= dis;
          });
        } else {
          activeCom.top -= dis;
        }
        // bmCommon.log("上", activeCom);
      } else if (keyCode === 39) {
        // 右
        // let dis = 1;
        e.preventDefault();
        if (shiftKey) {
          dis = shiftDis;
        }

        if (length > 1) {
          activeComs.forEach(item => {
            item.left += dis;
          });
        } else {
          activeCom.left += dis;
        }
        // bmCommon.log("右", activeCom);
      } else if (keyCode === 40) {
        // 下
        // let dis = 1;
        e.preventDefault();
        if (shiftKey) {
          dis = shiftDis;
        }
        if (length > 1) {
          activeComs.forEach(item => {
            item.top += dis;
          });
        } else {
          activeCom.top += dis;
        }
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
          this.lockEvent(!locked);
        }
      } else if (keyCode == 46) {
        // Delete
        this.deleteEvent();
      }
      this.createHistoryAction();
    },
    //剪切
    cutEvent() {
      let { activeCom = {}, widgetList = [], activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      let copyCom = null;
      if (length > 1) {
        copyCom = bmCommon.clone(activeComs || []);
        activeComs.forEach(item => {
          let { id = "" } = item || {};
          let index = widgetList.findIndex(_item => id == _item.id);
          widgetList.splice(index, 1);
        });
      } else {
        let { id = "" } = activeCom;
        copyCom = bmCommon.clone(activeCom || {});
        let index = widgetList.findIndex(item => id == item.id);
        widgetList.splice(index, 1);
      }
      this.copyCom = copyCom;
      this.selectComAction();
      this.showContextMenuStatus = false;
    },
    // 复制
    copyEvent() {
      let { activeCom = {}, activeComs = [] } = this;
      // this.copyCom = bmCommon.clone(activeCom || {});
      let { length = 0 } = activeComs || [];
      let copyCom = null;
      if (length > 1) {
        copyCom = bmCommon.clone(activeComs || []);
        copyCom.forEach(item => {
          item.left = item.left + 10;
          item.top = item.top + 10;
        });
      } else {
        copyCom = bmCommon.clone(activeCom || {});
        copyCom.left = copyCom.left + 10;
        copyCom.top = copyCom.top + 10;
      }
      this.copyCom = copyCom;
      this.showContextMenuStatus = false;
    },
    // 粘贴
    pasteEvent(e) {
      let { copyCom = {}, widgetList = [] } = this;
      let { length = 0 } = copyCom || {};
      let _activeComs = [];
      // let obj = widgetList[widgetList.length - 1] || {};
      let pos = {};
      if (e) {
        pos = bmCommon.getMousePosition(e, { x: 310, y: 90 });
      }
      let callback = item => {
        let orders = widgetList.map(item => item.order);
        let order = Math.max(...orders);
        let { width = 0, height = 0, left = 0, top = 0 } = item || {};
        if (e) {
          let { x = "", y = "" } = pos || {};
          left = x - width / 2;
          top = y - height / 2;
        }
        order += 1;
        let id = bmCommon.uuid();
        let _item = {
          ...item,
          id,
          order,
          left,
          top
        };
        widgetList.push(_item);
        if (length > 1) {
          _activeComs.push(_item);
        }
      };
      if (length > 1) {
        copyCom.forEach(item => {
          callback(item);
        });
        this.setActiveComs(_activeComs);
      } else {
        callback(copyCom || {});
        this.setActiveCom(copyCom);
      }
      this.showContextMenuStatus = false;
    },
    deleteItem(item = {}) {
      let { widgetList = [] } = this;
      let { id = "" } = item || {};
      let index = widgetList.findIndex(item => id == item.id);
      widgetList.splice(index, 1);
      this.selectComAction();
      // this.showContextMenuStatus = false;
    },
    // 删除
    deleteEvent() {
      let { activeCom = {}, activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length > 1) {
        activeComs.forEach(item => {
          this.deleteItem(item);
        });
      } else {
        this.deleteItem(activeCom);
        // let { id = "" } = activeCom;
        // let index = widgetList.findIndex(item => id == item.id);
        // widgetList.splice(index, 1);
        // this.selectComAction();
        // this.showContextMenuStatus = false;
      }
      this.selectComAction();
      this.showContextMenuStatus = false;
    },
    // 锁定/解锁
    lockEvent(locked) {
      let { activeCom = {} } = this;
      activeCom.locked = locked;
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
    },
    // // 获取登录信息
    // commonVerifyInfoFunc(callback) {
    //   let value = {};
    //   this.commonVerifyInfoAction()
    //     .then(({ data }) => {
    //       let { code = "", result = {}, message = "" } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         value = result || {};
    //       } else {
    //         bmCommon.error(message);
    //       }
    //       callback && callback(value || {});
    //     })
    //     .catch(err => {
    //       callback && callback(value || {});
    //       bmCommon.error("获取数据失败=>commonVerifyInfo", err);
    //     });
    // },
    // 获取画布信息
    canvasGetFunc(callback) {
      let value = {};
      let { condition } = this;
      let { canvasId: id = "" } = condition;
      this.canvasGetAction({ id })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || {});
        })
        .catch(err => {
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>canvasGet", err);
        });
    },
    // 获取组织列表
    orgStrucListByLevelFunc(callback) {
      let value = [];
      this.orgStrucListByLevelAction()
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = bmCommon.recursiveTree(result || [], "pid");
          } else {
            bmCommon.error(message);
          }
          this.setOrganizeList(value || []);
          callback && callback(value || []);
        })
        .catch(err => {
          this.setOrganizeList(value || []);
          callback && callback(value || []);
          bmCommon.error("获取数据失败=>orgStrucListByLevel", err);
        });
    },
    // 获取设备信息
    commonGetDeviceFunc(deviceId, callback) {
      let value = {};
      if (!deviceId) {
        callback && callback(value || {});
        return;
      }
      this.commonGetDeviceAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || {});
        })
        .catch(err => {
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>commonGetDevice", err);
        });
    },
    // 获取设备点位信息
    commonDevicePointHstDataFunc(params, callback) {
      let value = {};
      // let { condition, deviceInfo = {} } = this;
      let { deviceId = "", point = "" } = params || {};
      if (!deviceId) {
        callback && callback(value || {});
        return;
      }
      if (!point) {
        callback && callback(value || {});
        return;
      }
      // let { point = "" } = condition;
      // let startTime = this.$moment().format("YYYY-MM-DD 00:00:00");
      // let endTime = this.$moment().format("YYYY-MM-DD HH:mm:ss");
      // this.dataLoadingStatus = true;
      this.commonDevicePointHstDataAction(
        params
        // deviceId,
        // point,
        // startTime,
        // endTime
      )
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          // this.dataLoadingStatus = false;
          callback && callback(value || {});
        })
        .catch(err => {
          // this.dataLoadingStatus = false;
          callback && callback(value || {});
          bmCommon.error("获取数据失败=>commonDevicePointHstData", err);
        });
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    let viewBox = this.$refs.viewBox;
    // 注册鼠标事件
    $(viewBox).off("mousedown", this.viewBoxMousedownEvent);
    // 注册右键菜单事件
    $(viewBox).off("contextmenu", this.viewBoxContextmenuEvent);
    //注册按键键盘事件
    $(document).off("keydown", this.keydownEvent);

    $(window).off("resize", this.resetCanvasSize);
  },
  watch: {
    rightMenuStatus(newVal, oldVal) {
      if (newVal != oldVal) {
        this.resetCanvasSize();
      }
    },
    leftMenuStatus(newVal, oldVal) {
      if (newVal != oldVal) {
        this.resetCanvasSize();
      }
    }
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/index.less";
</style>
