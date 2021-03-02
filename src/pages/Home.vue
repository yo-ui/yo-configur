<template>
  <div class="bm-home-page" :class="canvas.themes" :style="pageStyle">
    <bm-header ref="bmHeader"></bm-header>
    <bm-nav ref="bmNav"></bm-nav>
    <div class="flex-content">
      <bm-widget-list
        ref="bmWidgetList"
        v-show="leftMenuStatus"
      ></bm-widget-list>
      <!-- <div v-else></div> -->
      <el-alert
        :title="
          $lang(
            '本文件的图形数量已足够绘制一艘航空母舰，为了好的作图体验，建议您不要制作过大过多的文件哦'
          )
        "
        type="warning"
        effect="light"
        show-icon
        v-if="widgetList.length > 200"
      ></el-alert>
      <div class="content-box">
        <div class="zoom-box">
          <el-button-group v-if="canvas.scaleable">
            <el-button @click="zoomEvent(-20)">
              <i class="el-icon-zoom-out"></i>
            </el-button>
            <el-button @click="zoomEvent(0)">
              <i class="el-icon-search"></i>
              {{ parseInt(getZoom * 100) }}%
            </el-button>
            <el-button @click="zoomEvent(20)">
              <i class="el-icon-zoom-in"></i> </el-button
          ></el-button-group>
        </div>

        <div
          class="left-top-rule"
          :style="{
            left: `${!leftMenuStatus ? '0' : ''}`
          }"
          v-show="canvas.left == 0"
        ></div>
        <div
          class="left-rule"
          v-show="canvas.left == 0"
          :style="{
            // transform: `scaleY(${getZoom})`,
            //height: `${canvas.height}px`,
            backgroundSize: `30px ${100 * getZoom}px`,
            left: `${!leftMenuStatus ? '0' : ''}`
          }"
        >
          <template
            v-for="(item, index) in parseInt(
              windowInnerHeight / getZoom / 100
            ) + 1"
          >
            <i
              :key="item"
              v-show="
                (1 / getZoom > 1 && index % parseInt(1 / getZoom) == 0) ||
                  1 / getZoom <= 1
              "
              :style="{ top: `${(item - 1) * 100 * getZoom + 10}px` }"
              >{{ (item - 1) * 100 }}</i
            >
          </template>
        </div>
        <div
          class="top-rule"
          v-show="canvas.left == 0"
          :style="{
            //transform: `scaleX(${getZoom})`,
            //width: `${canvas.width}px`,
            backgroundSize: `${100 * getZoom}px 30px`,
            left: `${!leftMenuStatus ? '30px' : ''}`
          }"
        >
          <template
            v-for="(item, index) in parseInt(windowInnerWidth / getZoom / 100) +
              1"
          >
            <i
              :key="item"
              :style="{ left: `${(item - 1) * 100 * getZoom + 10}px` }"
              v-show="
                (1 / getZoom > 1 && index % parseInt(1 / getZoom) == 0) ||
                  1 / getZoom <= 1
              "
              >{{ (item - 1) * 100 }}</i
            >
          </template>
        </div>
        <div
          class="view-box"
          ref="viewBox"
          :style="viewBoxStyle"
          v-loading="dataLoadingStatus"
        >
          <!-- <bm-preview-nav ref="bmPreviewNav" /> -->
          <div
            class="canvas-box"
            ref="canvasBox"
            :style="canvasStyle"
            :class="canvas.action"
          >
            <div class="bg" :style="bgStyle">
              <div class="grid" :style="gridStyle"></div>
            </div>
            <!-- <bm-com
              class="edit"
              v-for="(item, index) in widgetList"
              :data-type="item.type"
              :data-id="item.id"
              :info="item"
              :key="item.id + index"
            >
              <template v-if="item.children && item.children.length > 0">
                <bm-com
                  class="edit"
                  v-for="(_item, _index) in item.children"
                  :data-type="_item.type"
                  :data-id="_item.id"
                  :info="_item"
                  :key="_item.id + _index"
                >
                </bm-com>
              </template>
            </bm-com> -->
            <div id="canvas_content" class="canvas-content"></div>
            <!-- <div id="control_box" class="control-box"></div> -->

            <!-- <bm-lines ref="bmLines" v-if="canvas.alignLineable"></bm-lines>
            <bm-rule-lines ref="bmRuleLines"></bm-rule-lines> -->
          </div>
          <div class="slider-box" @mousedown.stop>
            {{ $toBig(zoom, 0) + "%" }}
            <!-- @input="changeZoomEvent" -->
            <el-slider
              v-model="zoom"
              :max="1000"
              :min="1"
              @mousedown.stop
              :format-tooltip="val => val + '%'"
            ></el-slider>
          </div>
        </div>
      </div>
      <bm-info ref="bmInfo" v-show="rightMenuStatus"></bm-info>
    </div>
    <!-- showContextMenuStatus&&(activeCom.type != 'canvas' || activeComs.length > 1) -->
    <ul id="context_menu" class="context-menu"></ul>
    <!-- <ul
      class="context-menu"
      ref="contextMenuBox"
      v-show="showContextMenuStatus"
      @mouseenter="showContenxtMenuEvent"
      @mouseleave="hideContextMenuEvent"
      :style="contextMenuStyle"
    >
      <li
        @click="addDiyEvent"
        v-show="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("添加到自定义") }}
      </li>
      <li
        @click="composeEvent"
        v-show="showContextMenuType == 1 && activeComs && activeComs.length > 1"
      >
        {{ $lang("组合") }} <small>Ctrl+G</small>
      </li>
      <li
        @click="unComposeEvent"
        v-show="showContextMenuType == 1 && activeCom.type == 'panel'"
      >
        {{ $lang("打散") }} <small>Ctrl+Shift+G</small>
      </li>
      <li
        @click="cutEvent"
        v-show="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("剪切") }} <small>Ctrl+X</small>
      </li>
      <li
        @click="copyEvent"
        v-show="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("复制") }}<small>Ctrl+C</small>
      </li>
      <li @click="pasteEvent" v-show="!!copyCom">
        {{ $lang("粘贴") }}<small>Ctrl+V</small>
      </li>
      <li
        @click="moveUpEvent"
        v-show="showContextMenuType == 1 && !activeCom.locked"
        class="line"
        :class="{ disabled: topOrder == activeCom.order }"
      >
        {{ $lang("上移一层") }}<small>Ctrl+[</small>
      </li>
      <li
        @click="moveDownEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-show="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("下移一层") }}<small>Ctrl+]</small>
      </li>
      <li
        @click="moveTopEvent"
        :class="{ disabled: topOrder == activeCom.order }"
        v-show="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("置于顶层") }}<small>Ctrl+Shift+[</small>
      </li>
      <li
        @click="moveBottomEvent"
        :class="{ disabled: bottomOrder == activeCom.order }"
        v-show="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("置于底层") }}<small>Ctrl+Shift+]</small>
      </li>
      <li
        class="line"
        @click="lockEvent(true)"
        v-show="showContextMenuType == 1 && !activeCom.locked"
      >
        {{ $lang("锁定") }}<small>Ctrl+Shift+L</small>
      </li>
      <li
        @click="lockEvent(false)"
        v-show="showContextMenuType == 1 && activeCom.locked"
      >
        {{ $lang("解锁") }}<small>Ctrl+Shift+L</small>
      </li>
      <li @click="deleteEvent" v-show="showContextMenuType == 1">
        {{ $lang("删除") }}<small>Delete</small>
      </li>
    </ul> -->
    <bm-footer ref="bmFooter"></bm-footer>
    <bm-select ref="bmSelect"></bm-select>
    <bm-control ref="bmControl"></bm-control>
    <bm-device ref="bmDevice"></bm-device>
    <bm-point ref="bmPoint"></bm-point>
    <bm-upload-box ref="bmUploadBox"></bm-upload-box>
  </div>
</template>
<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// import bmCom from "@/components/component";
import Core from "@/core/index";
import CanvasEvent from "@/core/CanvasEvent";
// import ComponentLibrary from "@/core/ComponentLibrary.js";
// import Event from "@/core/Event.js";
import bmHeader from "@/components/header";
import bmNav from "@/components/nav";
import bmWidgetList from "@/components/home/widget-list";
import bmInfo from "@/components/home/info";
import bmFooter from "@/components/footer";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bm-index-page",
  data() {
    return {
      // comList: [],
      // activeComIds: "",
      dataLoadingStatus: true,
      condition: {
        canvasId: ""
      },
      // zoom: 100,
      widgetList: [], //组件列表
      windowInnerWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight,
      showContextMenuStatus: false,
      showContextMenuType: 1, //1 组件右键菜单   2是画布右键菜单
      copyCom: "",
      // shiftCtrlKeyDownStatus: false, //shit ctrl键被按下
      contextMenuStyle: {}
    };
  },
  // mixins: [mixins],
  components: {
    bmHeader,
    bmNav,
    // : () =>
    //   import(/* webpackChunkName: "iot-header-com" */ "@/components/header"),
    // bmPreviewNav: () =>
    //   import(
    //     /* webpackChunkName: "iot-preview-nav-com" */ "@/components/preview-nav"
    //   ),
    // bmLines: () =>
    //   import(/* webpackChunkName: "iot-lines-com" */ "@/components/lines"),
    // bmRuleLines: () =>
    //   import(
    //     /* webpackChunkName: "iot-rule-lines-com" */ "@/components/rule-lines"
    //   ),
    // bmGroup: () =>
    //   import(/* webpackChunkName: "iot-group-com" */ "@/components/group"),
    bmSelect: () =>
      import(/* webpackChunkName: "iot-select-com" */ "@/components/select"),
    bmControl: () =>
      import(/* webpackChunkName: "iot-control-com" */ "@/components/control"),
    bmFooter,
    // : () =>
    //   import(/* webpackChunkName: "iot-footer-com" */ "@/components/footer"),
    // bmInfo: () =>
    //   import(/* webpackChunkName: "iot-info-com" */ "@/components/info"),
    bmInfo,
    bmWidgetList,
    // bmCom: () =>
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
      import(/* webpackChunkName: "iot-point-com" */ "@/components/data/point"),
    bmUploadBox: () =>
      import(
        /* webpackChunkName: "iot-upload-com" */ "@/components/common/upload-box"
      )
  },
  computed: {
    ...mapGetters({
      //widgetList: "canvas/getWidgetList"
      getZoom: "canvas/getZoom", //放大缩小
      leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      canvas: "canvas/getCanvas", //画布属性
      deviceCacheMap: "device/getDeviceCacheMap", //设备缓存
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
    // isSameGroup() {
    //   let { activeComs = [], widgetList = [], activeCom = {} } = this;
    //   let set = new Set();
    //   let { length = 0 } = activeComs || [];
    //   if (length > 0) {
    //     activeComs.forEach(item => {
    //       let { groupList = [] } = item || {};
    //       let [group = ""] = groupList || [];
    //       // if (group) {
    //       set.add(group);
    //       // }
    //     });
    //     return set.size == 1 && !set.has("");
    //   } else {
    //     let { groupList = [], type = "" } = activeCom || {};
    //     let [group = ""] = groupList || [];
    //     let widgets = [];
    //     if (group && type != "canvas") {
    //       widgets = widgetList.filter(item => {
    //         let { groupList = [] } = item || {};
    //         let [_group = ""] = groupList || [];
    //         return _group == group;
    //       });
    //     }
    //     return widgets.length > 1;
    //   }
    // },
    topOrder() {
      let { widgetList = [] } = this;
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      return order;
    },
    pageStyle() {
      let { canvas = {}, gradientStyle } = this;
      let { pageColor = "", page = {} } = canvas || {};
      let {
        backgroundSize = "",
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundType = ""
      } = page || {};
      let styles = {};
      if (pageColor) {
        styles["background-image"] = "none";
        styles["background-color"] = pageColor;
      }
      if (backgroundType == "purity") {
        //纯色
        if (pageColor) {
          styles["background-color"] = pageColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
          styles["background-size"] = "auto";
          styles["background-position"] = "inherit";

          if (backgroundRepeat) {
            styles["background-repeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["background-size"] = backgroundSize;
          }
        }
      } else if (backgroundType == "gradient") {
        styles["background-size"] = "auto";
        styles["background-position"] = "inherit";
        //渐变
        styles = { ...styles, ...gradientStyle(page) };
      }
      return styles;
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
        return this.getZoom * 100;
      },
      set(val) {
        this.setZoom(val / 100);
      }
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
      let { backgroundSize = "", backgroundImage = "", backgroundRepeat = "" } =
        canvas || {};
      let styles = {};
      if (backgroundImage) {
        styles["background-image"] = `url(${this.$loadImgUrl(
          backgroundImage
        )})`;
        styles["background-position"] = "0 0";
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      return styles || {};
    },
    //渐变颜色样式
    gradientStyle() {
      return (info = {}) => {
        // let { info = {} } = this;
        let { gradientStyle = {} } = info || {};
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
      };
    },
    canvasStyle() {
      let {
        zoom = 0,
        canvas = {},
        gradientStyle,
        leftMenuStatus = true
      } = this;
      let {
        left = 0,
        top = 0,
        height = "",
        width = "",
        // action = "",
        backgroundType = "",
        backgroundColor = "#fff"
        // backgroundImage = ""
      } = canvas;
      zoom = zoom / 100;
      let styles = {
        left: `${left + (leftMenuStatus ? 0 : 30)}px`,
        top: `${top}px`,
        // backgroundColor: `${backgroundColor}`,
        transform: `scale(${zoom})`,
        webkitTransform: `scale(${zoom})`
      };
      // if (action == "move") {
      //   styles["transform-origin"] = `center`;
      // }
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (backgroundType == "purity") {
        //纯色
        styles["background-color"] = backgroundColor;
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(canvas) };
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      // if (backgroundImage) {
      //   styles["background-image"] = `url(${backgroundImage})`;
      // }
      return styles || {};
    }
  },
  methods: {
    ...mapMutations({
      setOrganizeList: "common/setOrganizeList",
      setZoom: "canvas/setZoom",
      // // setWidgetList: "canvas/setWidgetList", //设置组件列表
      // setActiveCom: "canvas/setActiveCom", //设置当前选中组件
      setCanvas: "canvas/setCanvas",
      // setCanvasData: "canvas/setCanvasData",
      // setActiveComs: "canvas/setActiveComs",
      // initMove: "canvas/initMove",
      // setPlatform: "setPlatform",
      // setShowType: "canvas/setShowType",
      // setLinkPoint: "canvas/setLinkPoint", //设置连接点信息
      // // moving: "canvas/moving",
      setDeviceCacheMap: "device/setDeviceCacheMap", //设备缓存
      setAllDeviceCacheMap: "device/setAllDeviceCacheMap" //设备缓存
      // stopMove: "canvas/stopMove"
    }),
    ...mapActions({
      // selectComAction: "canvas/selectCom",
      // selectComsAction: "canvas/selectComs",
      orgStrucListByLevelAction: "orgStrucListByLevel",
      canvasGetAction: "canvasGet",
      createHistoryAction: "canvas/createHistory",
      commonGetDeviceAction: "commonGetDevice",
      canvasSelectAction: "canvasSelect",
      commonDeviceListAction: "commonDeviceList",
      commonDevicePointHstDataAction: "commonDevicePointHstData"
    }),
    zoomEvent(val) {
      let { getZoom: zoom = 0, canvas = {} } = this;
      if (val) {
        bmCommon.log("当前放大before", zoom, val);
        zoom = zoom * 100 + val;
        bmCommon.log("当前放大", zoom, zoom / 100);
        if (zoom > 10 && zoom < 1000) {
          bmCommon.log("当前放大设置");
          this.setZoom(zoom / 100);
        }
      } else {
        this.setZoom(1);
        canvas.left = 0;
        canvas.top = 0;
      }
    },
    init() {
      this.initEvent();
      let { condition, canvas = {}, $route } = this;
      let { query = {} } = $route;
      // this.commonVerifyInfoFunc((info = {}) => {
      // 166
      let { canvasId = "", type = "" } = query || {};
      condition.canvasId = canvasId;
      let platform = type == 2 ? "service" : "manage";
      // this.setPlatform(platform); //type： 2 为应用平台过来  1为管理平台过来
      window.bm_platform = platform;
      window.bm_show_type = Constants.SHOWTYPEMAP.EDIT;
      // this.setShowType(Constants.SHOWTYPEMAP.EDIT);
      this.canvasGetFunc((detail = {}) => {
        let {
          name = "",
          width = "",
          height = "",
          id: canvasId = "",
          folderId = "",
          data = {}
        } = detail || {};
        this.canvasSelectFunc(folderId, (canvasList = []) => {
          //头部监听画布列表
          $vm.$emit("canvas-list", { canvasList });
        });
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
          // this.setWidgetList(widgets || []);

          //创建组件列表
          Core.init(widgetList, widgets => {
            // $vm.$emit("info-data-init", {
            //   count: widgets.length,
            //   widgets
            // });
            CanvasEvent.resizeCanvasSize();
            this.loadWebsocketData(widgets);
          });
          // //加载 info 数据初始化
          // $vm.$emit("info-data-init", {
          //   count: widgets.length,
          //   widgets: infoWidgets
          //   // widgets.map(item => {
          //   //   let {
          //   //     children = [],
          //   //     id = "",
          //   //     comName = "",
          //   //     type = "",
          //   //     name = "",
          //   //     dataType = "",
          //   //     bindData = {}
          //   //   } = item || {};
          //   //   children = children.map(_item => {
          //   //     return {
          //   //       id: _item.id,
          //   //       name: _item.name,
          //   //       comName: _item.comName,
          //   //       type: _item.type,
          //   //       bindData: _item.bindData,
          //   //       dataType: _item.dataType
          //   //     };
          //   //   });
          //   //   return { id, comName, type, children, name, dataType, bindData };
          //   // })
          // });
          // this.setCanvasData(data);
          // CanvasEvent.resizeCanvasSize();
          // // this.selectComAction();
          // this.loadWebsocketData(widgetList);
        } else {
          //创建组件列表
          Core.init([], () => {
            this.$nextTick(() => {
              let $canvasBox = $(this.$refs.canvasBox);
              let { canvas = {} } = this;
              let width = $canvasBox.innerWidth();
              let height = $canvasBox.innerHeight();
              canvas.width = width;
              canvas.height = height;
              CanvasEvent.resizeCanvasSize();
              // this.selectComAction();
              this.dataLoadingStatus = false;
            });
          });
        }
        this.createHistoryAction();
        // });
      });
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
    // setZoom(zoom) {
    //   this.zoom = zoom;
    // },
    initEvent() {
      // let viewBox = this.$refs.viewBox;
      // // 注册鼠标事件
      // $(viewBox).on(
      //   "mousedown",
      //   ".bm-component-com",
      //   this.viewBoxMousedownEvent
      // );
      // // 注册颜色框事件
      // $(document).on("mousedown", ".el-color-picker__panel", e => {
      //   e.stopPropagation();
      // });
      // //滚动事件
      // $(viewBox).on("mousewheel DOMMouseScroll", this.mouseScrollEvent);
      // // 注册右键菜单事件
      // $(viewBox).on("contextmenu", this.viewBoxContextmenuEvent);
      // //注册按键键盘事件
      // $(document).on("keydown", this.keydownEvent);
      // $(document).on("keyup", this.keyupEvent);
      // $(window).on("resize", this.resizeCanvasSize);
      // if (process.env.NODE_ENV === "production") {
      //   $(window).on("contextmenu", e => {
      //     e.preventDefault();
      //   });
      // }
      // CanvasEvent.init();
      //注册绑定设备事件
      $vm.$on("bind-device", item => {
        this.addDataEvent(item);
      });
      //注册上传事件
      $vm.$on("upload-show", item => {
        this.$refs.bmUploadBox.show(item);
      });
      //注册显示控制处理事件
      $vm.$on("zoom", item => {
        this.zoomEvent(item);
      });
      //注册缩放处理事件
      $vm.$on("control", item => {
        this.$refs.bmControl.show(item);
      });
      //注册获取设备信息事件
      $vm.$on("device", item => {
        //flag 走不走缓存
        let { deviceId = "", flag = true, callback = () => {} } = item || {};
        this.commonGetDeviceFunc({ deviceId, flag }, callback);
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
      // 默认选择画布
      // this.selectComAction();
    },

    loadWebsocketData(widgetList = []) {
      let set = new Set();
      let deviceIdList = [];
      widgetList.forEach(item => {
        let { bindData = {}, children = [], type = "" } = item || {};
        let { deviceId = "" } = bindData || {};
        if (type === "panel") {
          children.forEach(_item => {
            let { bindData = {} } = _item || {};
            let { deviceId = "" } = bindData || {};
            if (deviceId) {
              set.add(deviceId);
            }
          });
        } else {
          if (deviceId) {
            set.add(deviceId);
          }
        }
      });
      deviceIdList = Array.from(set);
      this.commonDeviceListFunc(deviceIdList, (list = []) => {
        // let map = {};
        // list.forEach(item => {
        //   let { id = "" } = item || {};
        //   map[id] = item || {};
        // });
        // this.setAllDeviceCacheMap(map);
        bmCommon.log("设备列表加载完成");
        // widgetList.forEach(item => {
        //   item.showStatus = true;
        // });
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
    //创建组件
    // createComponents(widgets) {
    //   Core.init(widgets);
    //   // let canvas_content = document.getElementById("canvas_content");
    //   // let fregment = document.createDocumentFragment("div");

    //   // for (let i = 0, len = widgets.length; i < len; i++) {
    //   //   let item = widgets[i];
    //   //   let _div = $(ComponentLibrary.getInstance(item).template());
    //   //   fregment.appendChild(_div[0]);
    //   // }
    //   // canvas_content.appendChild(fregment);
    //   // //初始化事件
    //   // Event.init();
    // },
    // 获取画布信息
    canvasGetFunc(callback) {
      let value = {};
      let { condition } = this;
      let { canvasId: id = "" } = condition;
      if (!id) {
        bmCommon.warn("请输入画布id");
        callback && callback(value || {});
        return;
      }
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
            result = result.map(item => {
              let { name = "", id = "", pid = "", type = "" } = item || {};
              return { name, id, pid, type };
            });
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
    commonGetDeviceFunc({ deviceId = "", flag = true }, callback) {
      let value = {};
      if (!deviceId) {
        callback && callback(value || {});
        return;
      }
      if (flag) {
        let { deviceCacheMap = {} } = this;
        let { id = "" } = deviceCacheMap(deviceId) || {};
        if (id) {
          callback(deviceCacheMap(deviceId));
          return;
        }
      }
      this.commonGetDeviceAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          } else {
            bmCommon.error(message);
          }
          this.setDeviceCacheMap({ key: deviceId, value });
          callback && callback(value || {});
        })
        .catch(err => {
          this.setDeviceCacheMap({ key: deviceId, value });
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
    },
    // 设备点位参数
    commonDeviceListFunc(ids = [], callback) {
      let value = [];
      if (!(ids.length > 0)) {
        callback();
        this.dataLoadingStatus = false;
        return;
      }
      // this.commonDeviceListAction({ ids: JSON.stringify(ids) })
      this.dataLoadingStatus = true;
      this.commonDeviceListAction({ ids: ids.join() })
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || [];
            let map = {};
            value.forEach(item => {
              let { deviceId: id = "", configurDevicePointVoList = [] } =
                item || {};
              let points = [];
              configurDevicePointVoList.forEach(_item => {
                let {
                  point: id = "",
                  acqTime: time = "",
                  descr: name = "",
                  name: deviceName = "",
                  unit = "",
                  value = ""
                } = _item || {};
                points.push({ name, time, deviceName, id, unit, value });
              });
              delete item.configurDevicePointVoList;
              item.points = points || [];
              map[id] = item || {};
            });
            this.setAllDeviceCacheMap(map);
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || []);
          this.dataLoadingStatus = false;
        })
        .catch(err => {
          callback && callback(value || []);
          this.setAllDeviceCacheMap({});
          this.dataLoadingStatus = false;
          bmCommon.error("获取数据失败=>commonDeviceList", err);
        });
    },
    //获取画布
    canvasSelectFunc(folderId = "", callback) {
      let value = [];
      if (!folderId) {
        callback();
        return;
      }
      this.canvasSelectAction({ folderId })
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || [];
          } else {
            bmCommon.error(message);
          }
          callback && callback(value || []);
        })
        .catch(err => {
          callback && callback(value || []);
          bmCommon.error("获取数据失败=>canvasSelect", err);
        });
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    // let viewBox = this.$refs.viewBox;
    // // 注册鼠标事件
    // $(viewBox).off("mousedown", this.viewBoxMousedownEvent);
    // // 注册右键菜单事件
    // $(viewBox).off("contextmenu", this.viewBoxContextmenuEvent);
    // //注册按键键盘事件
    // $(document).off("keydown", this.keydownEvent);
    // $(document).off("keyup", this.keyupEvent);
    // $(window).off("resize", CanvasEvent.resizeCanvasSize);
  },
  watch: {
    rightMenuStatus(newVal, oldVal) {
      if (newVal != oldVal) {
        CanvasEvent.resizeCanvasSize();
      }
    },
    leftMenuStatus(newVal, oldVal) {
      if (newVal != oldVal) {
        CanvasEvent.resizeCanvasSize();
      }
    },
    "$route.query.canvasId"(newVal, oldVal) {
      if (newVal != oldVal) {
        CanvasEvent.init();
      }
    }
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/home.less";
</style>
