<template>
  <div class="bm-index-page" :class="canvas.themes" :style="pageStyle">
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
            <bm-com
              class="edit"
              v-for="item in widgetList"
              :data-type="item.type"
              :data-id="item.id"
              :info="item"
              :key="item.id"
            >
              <template v-if="item.children && item.children.length > 0">
                <bm-com
                  class="edit"
                  v-for="_item in item.children"
                  :data-type="_item.type"
                  :data-id="_item.id"
                  :info="_item"
                  :key="_item.id"
                >
                </bm-com>
              </template>
            </bm-com>

            <bm-lines ref="bmLines" v-if="canvas.alignLineable"></bm-lines>
            <bm-rule-lines ref="bmRuleLines"></bm-rule-lines>
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
    <ul
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
    </ul>
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
      dataLoadingStatus: true,
      condition: {
        canvasId: ""
      },
      windowInnerWidth: window.innerWidth,
      windowInnerHeight: window.innerHeight,
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
    // bmPreviewNav: () =>
    //   import(
    //     /* webpackChunkName: "iot-preview-nav-com" */ "@/components/preview-nav"
    //   ),
    bmLines: () =>
      import(/* webpackChunkName: "iot-lines-com" */ "@/components/lines"),
    bmRuleLines: () =>
      import(
        /* webpackChunkName: "iot-rule-lines-com" */ "@/components/rule-lines"
      ),
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
    bmCom: () =>
      import(
        /* webpackChunkName: "iot-component-com" */ "@/components/component"
      ),
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
      widgetList: "canvas/getWidgetList", //组件列表
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
        styles["backgroundImage"] = "none";
        styles["backgroundColor"] = pageColor;
      }
      if (backgroundType == "purity") {
        //纯色
        if (pageColor) {
          styles["backgroundColor"] = pageColor;
        }
        if (backgroundImage) {
          styles["backgroundImage"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
          styles["backgroundSize"] = "auto";
          styles["backgroundPosition"] = "inherit";

          if (backgroundRepeat) {
            styles["backgroundRepeat"] = backgroundRepeat;
          }
          if (backgroundSize) {
            styles["backgroundSize"] = backgroundSize;
          }
        }
      } else if (backgroundType == "gradient") {
        styles["backgroundSize"] = "auto";
        styles["backgroundPosition"] = "inherit";
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
        styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
        styles["backgroundPosition"] = "0 0";
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
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
      //   styles["transformOrigin"] = `center`;
      // }
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (backgroundType == "purity") {
        //纯色
        styles["backgroundColor"] = backgroundColor;
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(canvas) };
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
      setPlatform: "setPlatform",
      setShowType: "canvas/setShowType",
      setLinkPoint: "canvas/setLinkPoint", //设置连接点信息
      moving: "canvas/moving",
      setDeviceCacheMap: "device/setDeviceCacheMap", //设备缓存
      setAllDeviceCacheMap: "device/setAllDeviceCacheMap", //设备缓存
      stopMove: "canvas/stopMove"
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      selectComsAction: "canvas/selectComs",
      orgStrucListByLevelAction: "orgStrucListByLevel",
      canvasGetAction: "canvasGet",
      createHistoryAction: "canvas/createHistory",
      commonGetDeviceAction: "commonGetDevice",
      canvasSelectAction: "canvasSelect",
      commonDeviceListAction: "commonDeviceList",
      commonDevicePointHstDataAction: "commonDevicePointHstData"
    }),
    init() {
      this.initEvent();
      let { condition, canvas = {}, $route } = this;
      let { query = {} } = $route;
      // this.commonVerifyInfoFunc((info = {}) => {
      // 166
      let { canvasId = "", type = "" } = query || {};
      condition.canvasId = canvasId;
      let platform = type == 2 ? "service" : "manage";
      this.setPlatform(platform); //type： 2 为应用平台过来  1为管理平台过来
      this.setShowType(Constants.SHOWTYPEMAP.EDIT);
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
          let widgets = [];
          widgetList.forEach(item => {
            let { alias = "", type = "", bindData = {} } = item || {};
            if (!alias) {
              alias = type;
            }
            let _item = Constants.COMPONENTLIBRARYMAP[alias] || {};
            let { data = {}, children = [] } = _item || {};
            let {
              infoType = "",
              dataType = "",
              bindData: _bindData = {},
              styleCode = "",
              dataCode = ""
            } = data || {};
            for (let i in data) {
              if (!item[i]) {
                item[i] = data[i];
              }
            }
            item.bindData = { ..._bindData, ...bindData };

            item.infoType = infoType;
            item.dataType = dataType;
            item.styleCode = styleCode;
            item.show = true;
            item.dataCode = dataCode;
            item.alias = alias;
            children &&
              children.forEach(item => {
                let { alias = "", type = "", bindData = {} } = item || {};
                if (!alias) {
                  alias = type;
                }
                item.bindData = { ..._bindData, ...bindData };
                item.infoType = infoType;
                item.dataType = dataType;
                item.styleCode = styleCode;
                item.show = true;
                item.dataCode = dataCode;
                item.alias = alias;
              });
            if (type && type != "canvas") {
              widgets.push(item);
            }
          });
          this.setWidgetList(widgets || []);
          this.setCanvasData(data);
          this.resizeCanvasSize();
          this.selectComAction();
          this.loadWebsocketData(widgetList);
        } else {
          this.$nextTick(() => {
            let $canvasBox = $(this.$refs.canvasBox);
            let { canvas = {} } = this;
            let width = $canvasBox.innerWidth();
            let height = $canvasBox.innerHeight();
            canvas.width = width;
            canvas.height = height;
            this.resizeCanvasSize();
            this.selectComAction();
            this.dataLoadingStatus = false;
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
      // 注册颜色框事件
      $(document).on("mousedown", ".el-color-picker__panel", e => {
        e.stopPropagation();
      });
      //滚动事件
      $(viewBox).on("mousewheel DOMMouseScroll", this.mouseScrollEvent);
      // 注册右键菜单事件
      $(viewBox).on("contextmenu", this.viewBoxContextmenuEvent);
      //注册按键键盘事件
      $(document).on("keydown", this.keydownEvent);
      $(document).on("keyup", this.keyupEvent);
      $(window).on("resize", this.resizeCanvasSize);
      if (process.env.NODE_ENV === "production") {
        $(window).on("contextmenu", e => {
          e.preventDefault();
        });
      }
      //注册绑定设备事件
      $vm.$on("bind-device", item => {
        this.addDataEvent(item);
      });
      //注册上传事件
      $vm.$on("upload-show", item => {
        this.$refs.bmUploadBox.show(item);
      });
      //注册显示控制处理事件
      $vm.$on("control", item => {
        this.$refs.bmControl.show(item);
      });
      //注册获取设备信息事件
      $vm.$on("device", item => {
        let { deviceId = "", callback = () => {} } = item || {};
        this.commonGetDeviceFunc({ deviceId }, callback);
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
      this.selectComAction();
    },
    mouseScrollEvent(e) {
      e.preventDefault();
      // e.stopPropagation();
      let wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
      let delta = Math.max(-1, Math.min(1, wheel));
      // let scrollTop=$(".content-box").scrollTop()
      // bmCommon.log();
      if (delta < 0) {
        //向下滚动
        bmCommon.log("向下滚动");
        this.zoomEvent(-2);
      } else {
        //向上滚动
        bmCommon.log("向上滚动");
        this.zoomEvent(2);
      }
      // return false;
    },
    loadWebsocketData(widgetList = []) {
      let set = new Set();
      let deviceIdList = [];
      widgetList.forEach(item => {
        let { bindData = {} } = item || {};
        let { deviceId = "" } = bindData || {};
        if (deviceId) {
          set.add(deviceId);
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
    resizeCanvasSize() {
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
        bmCommon.log("当前放大before", zoom);
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
      document.activeElement?.blur();
      target?.focus();
      $(this.$refs.viewBox).focus();
      // bmCommon.log(document.activeElement);
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
        // let { id: _id = "" } = _activeCom || {};
        _activeCom.showCoverStatus = true;
        //如果 shift ctrl 被按住则进行 多选和取消选择
        if (shiftKey || ctrlKey) {
          // let { locked = false } = activeCom || {};
          this.selectComsAction(id); //选中组件
        } else {
          // if (id != _id) {
          // 如果是已经选中了则不做处理
          this.selectComAction(id); //选中组件
          // }
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
        let { activeCom = {}, activeComs = [] } = this;
        activeCom.showCoverStatus = true;
        activeComs.forEach(item => {
          item.showCoverStatus = true;
        });
        // 取消选中组件
        this.selectComAction(id);
        this.selectComsAction(id);
        // this.initMoveEvent(e); // 参见 mixins
      }
      this.showContextMenuStatus = false;
    },
    keyupEvent(e) {
      let {
        keyCode = ""
        // shiftKey = false,
        // ctrlKey = false,
        // metaKey = false
        // altKey = false
      } = e;
      // ctrlKey = ctrlKey || metaKey; //(ctrl(cmd))
      if (keyCode == 32) {
        // 空格
        $vm.$emit("canvas-action", "select");
      }
    },
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
      let {
        activeCom = {},
        copyCom = null,
        activeComs = [],
        widgetList = []
      } = this;
      let { length = 0 } = activeComs || [];
      let { type = "", id = "", locked = false } = activeCom || {};
      if (keyCode == 83) {
        // ctrl+S  保存
        if (ctrlKey) {
          e.preventDefault();
          $vm.$emit("save");
        }
        return;
      } else if (keyCode == 90) {
        // 撤销 Ctrl+Z
        if (ctrlKey) {
          e.preventDefault();
          $vm.$emit("cancel");
        }
      } else if (keyCode == 89) {
        // 还原 Ctrl+Y
        if (ctrlKey) {
          e.preventDefault();
          $vm.$emit("resume");
        }
      } else if (keyCode == 65) {
        // ctrl+a 全选
        if (ctrlKey) {
          e.preventDefault();
          let [com = {}] = widgetList || [];
          let { length = 0 } = widgetList || [];
          if (length > 0) {
            this.setActiveCom(com);
            this.$nextTick(() => {
              this.setActiveComs(widgetList);
            });
          }
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
      if (length < 2 && copyCom == null) {
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
        if (type == "canvas" || !id) {
          e.preventDefault();
          //如果选中的是画布或未选中组件则直接返回
          return;
        }
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
        if (type == "canvas" || !id) {
          e.preventDefault();
          //如果选中的是画布或未选中组件则直接返回
          return;
        }
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
        if (type == "canvas" || !id) {
          e.preventDefault();
          //如果选中的是画布或未选中组件则直接返回
          return;
        }
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
        if (type == "canvas" || !id) {
          e.preventDefault();
          //如果选中的是画布或未选中组件则直接返回
          return;
        }
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
      } else if (keyCode == 71) {
        // G
        e.preventDefault();
        if (ctrlKey && shiftKey) {
          this.unComposeEvent();
        } else if (ctrlKey) {
          this.composeEvent();
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
      } else if (keyCode == 32) {
        // 空格 space
        e.preventDefault();
        $vm.$emit("canvas-action", "move");
      } else if (keyCode == 46) {
        // Delete
        this.deleteEvent();
      }
    },
    //打散事件
    unComposeEvent() {
      // $vm.$emit("un-compose");
      $vm.$emit("group-command", "ungroup");
      this.showContextMenuStatus = false;
    },
    //组合事件
    composeEvent() {
      $vm.$emit("group-command", "group");
      this.showContextMenuStatus = false;
    },
    addDiyEvent() {
      $vm.$emit("diy-command");
      this.showContextMenuStatus = false;
    },
    //剪切
    cutEvent() {
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
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
      }, 0);
    },
    // 复制
    copyEvent() {
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
        let { activeCom = {}, activeComs = [], selectBox = {} } = this;
        // this.copyCom = bmCommon.clone(activeCom || {});
        selectBox.moving = true;
        let { length = 0 } = activeComs || [];
        let copyCom = null;
        if (length > 1) {
          copyCom = bmCommon.clone(activeComs || []);
          copyCom.forEach(item => {
            item.left = item.left + 10;
            item.top = item.top + 10;
          });
        } else {
          let { type = "" } = activeCom || {};
          if (type == "canvas") {
            return;
          }
          copyCom = bmCommon.clone(activeCom || {});
          copyCom.left = copyCom.left + 10;
          copyCom.top = copyCom.top + 10;
        }
        this.copyCom = copyCom;
        this.showContextMenuStatus = false;
      }, 0);
    },
    // 粘贴
    pasteEvent(e) {
      this.selectComAction();
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
        let {
          copyCom,
          widgetList = [],
          getZoom: zoom = 1,
          canvas = {},
          selectBox = {}
        } = this;
        if (!copyCom) {
          return;
        }
        selectBox.moving = true;
        let { length = 0 } = copyCom || {};
        // let _activeComs = [];
        // let _activeCom = {};
        // let obj = widgetList[widgetList.length - 1] || {};
        let pos = {};
        if (e) {
          // pos = bmCommon.getMousePosition(e, { x: 310, y: 90 });
          pos = bmCommon.getMousePosition(e);
        }
        let { x = "", y = "" } = pos || {};
        let offset = $(".view-box").offset();
        let { left: _left = 0, top: _top = 0 } = canvas || {};
        let pasteLeft = 0,
          pasteTop = 0;
        let callback = (item, index) => {
          let orders = widgetList.map(item => item.order);
          let order = Math.max(...orders);
          let { width = 0, height = 0, left = 0, top = 0 } = item || {};
          if (e) {
            let { left: __left = 0, top: __top = 0 } = offset || {};
            let temp_left = x / zoom - width / 2 - _left / zoom - __left / zoom;
            let temp_top = y / zoom - height / 2 - _top / zoom - __top / zoom;
            if (index == 0) {
              pasteLeft = temp_left - left;
              pasteTop = temp_top - top;
              left = temp_left;
              top = temp_top;
            } else {
              left = left + pasteLeft;
              top = top + pasteTop;
            }
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
          let { children = [] } = _item || {};
          children &&
            children.forEach(item => {
              item.id = bmCommon.uuid();
              item.parentId = id;
            });
          widgetList.push(_item);
          if (length > 1) {
            // _activeComs.push(_item);
            this.selectComsAction(id);
          } else {
            // _activeCom = _item;
            this.selectComAction(id);
          }
        };
        if (length > 1) {
          copyCom.sort((a, b) => {
            return a.order - b.order;
          });
          // let minLeft = Math.min.call(
          //   Math,
          //   ...copyCom.map(item => item.left || 0)
          // );
          // let minTop = Math.min.call(
          //   Math,
          //   ...copyCom.map(item => item.left || 0)
          // );
          // let [first = {}] = copyCom || [];
          // let { left = 0, top = 0 } = first || {};
          copyCom.forEach((item, index) => {
            // //设置粘贴初始位置
            // item.pasteLeft = item.left - minLeft;
            // item.pasteTop = item.top - minTop;
            callback(item, index);
          });
          // this.setActiveComs(_activeComs);
          // this.$nextTick(() => {
          //   let [obj = {}] = _activeComs || [];
          //   this.selectComAction((obj || {}).id); //选中组件
          //   // this.setActiveCom(_activeCom);
          // });
        } else {
          let { type = "" } = copyCom || {};
          if (type == "canvas" || !type) {
            return;
          }
          callback(copyCom || {}, 0);
          // this.$nextTick(() => {
          //   // this.setActiveCom(_activeCom);
          //   this.selectComAction((_activeCom || {}).id); //选中组件
          // });
        }
        this.createHistoryAction();
        this.showContextMenuStatus = false;
      }, 0);
    },
    // 删除
    deleteEvent() {
      $vm.$emit("delete-command");
      this.showContextMenuStatus = false;
    },
    // 锁定/解锁
    lockEvent(locked) {
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
        let { activeCom = {} } = this;
        activeCom.locked = locked;
        this.showContextMenuStatus = false;
        this.createHistoryAction();
      }, 0);
    },
    // 上移一层
    moveUpEvent() {
      //排序
      $vm.$emit("order-command", "up");
      this.showContextMenuStatus = false;
    },
    // 下移一层
    moveDownEvent() {
      //排序
      $vm.$emit("order-command", "down");
      this.showContextMenuStatus = false;
    },
    // 置底
    moveBottomEvent() {
      //排序
      $vm.$emit("order-command", "bottom");
      this.showContextMenuStatus = false;
    },
    // 置顶
    moveTopEvent() {
      //排序
      $vm.$emit("order-command", "top");
      this.showContextMenuStatus = false;
    },
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
    commonGetDeviceFunc({ deviceId = "" }, callback) {
      let value = {};
      if (!deviceId) {
        callback && callback(value || {});
        return;
      }
      let { deviceCacheMap = {} } = this;
      let { deviceId: id = "" } = deviceCacheMap(deviceId) || {};
      if (id) {
        callback(deviceCacheMap(deviceId));
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
          this.setDeviceCacheMap({ key: deviceId, value });
          if (!id) {
            callback && callback(value || {});
          }
        })
        .catch(err => {
          this.setDeviceCacheMap({ key: deviceId, value });
          if (!id) {
            callback && callback(value || {});
          }
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
    let viewBox = this.$refs.viewBox;
    // 注册鼠标事件
    $(viewBox).off("mousedown", this.viewBoxMousedownEvent);
    // 注册右键菜单事件
    $(viewBox).off("contextmenu", this.viewBoxContextmenuEvent);
    //注册按键键盘事件
    $(document).off("keydown", this.keydownEvent);
    $(document).off("keyup", this.keyupEvent);

    $(window).off("resize", this.resizeCanvasSize);
  },
  watch: {
    rightMenuStatus(newVal, oldVal) {
      if (newVal != oldVal) {
        this.resizeCanvasSize();
      }
    },
    leftMenuStatus(newVal, oldVal) {
      if (newVal != oldVal) {
        this.resizeCanvasSize();
      }
    },
    "$route.query.canvasId"(newVal, oldVal) {
      if (newVal != oldVal) {
        this.init();
      }
    }
  }
};
</script>
<style lang="less">
@import (less) "../assets/less/pages/index.less";
</style>
