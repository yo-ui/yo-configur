<template>
  <div class="bm-nav-com">
    <div class="nav-box">
      <div class="left">
        <el-button
          @click="cancelEvent"
          :disabled="historyIndex > historyList.length - 2"
        >
          <i class="el-icon-refresh-left" :title="$lang('撤销')"></i>
          {{ $lang("撤销") }}
        </el-button>
        <el-button @click="resumeEvent" :disabled="historyIndex < 1">
          <i class="el-icon-refresh-right" :title="$lang('恢复')"></i>
          {{ $lang("恢复") }}
        </el-button>
        <el-button @click="recordEvent">
          <i class="el-icon-upload" :title="$lang('记录点')"></i>
          {{ $lang("记录点") }}
        </el-button>
        <el-button @click="fallbackEvent">
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
          <el-popover
            popper-class="popover-list"
            placement="bottom"
            width="auto"
            trigger="click"
            v-model="showGroupPopoverStatus"
            :disabled="!(activeComs.length > 1 || activeCom.type == 'panel')"
          >
            <el-button
              slot="reference"
              class="dropdown"
              :disabled="!(activeComs.length > 1 || activeCom.type == 'panel')"
            >
              <span class="txt">
                <i :class="`bomi bomi-group`"></i>
                {{ $lang("组合") }} </span
              ><i class="el-icon-caret-bottom"></i
            ></el-button>
            <ul class="dropdown-list">
              <li
                @click="groupCommandEvent('group')"
                :class="{
                  disabled: activeComs.length < 2
                }"
              >
                <i class="bomi bomi-group"></i>{{ $lang("组合") }}
              </li>
              <li
                @click="groupCommandEvent('ungroup')"
                :class="{
                  disabled: activeCom.type != 'panel'
                }"
              >
                <i class="bomi bomi-ungroup"></i>{{ $lang("打散") }}
              </li>
            </ul>
          </el-popover>
        </el-button-group>
        <el-button-group>
          <el-popover
            popper-class="popover-list"
            placement="bottom"
            width="auto"
            trigger="click"
            v-model="showSpreadPopoverStatus"
            :disabled="activeComs.length < 3"
          >
            <el-button
              slot="reference"
              class="dropdown"
              :disabled="activeComs.length < 3"
            >
              <span class="txt">
                <i :class="`bomi bomi-${condition.spreadType}`"></i>
                {{ $lang("分布") }} </span
              ><i class="el-icon-caret-bottom"></i
            ></el-button>
            <ul class="dropdown-list">
              <li @click="spreadCommandEvent('h-center')">
                <i class="bomi bomi-h-center"></i>水平分布
              </li>
              <li @click="spreadCommandEvent('v-center')">
                <i class="bomi bomi-v-center"></i>垂直分布
              </li>
            </ul>
          </el-popover>
          <el-popover
            popper-class="popover-list"
            placement="bottom"
            width="auto"
            trigger="click"
            v-model="showAlignPopoverStatus"
            :disabled="activeComs.length < 2"
          >
            <el-button
              slot="reference"
              class="dropdown"
              :disabled="activeComs.length < 2"
            >
              <span class="txt">
                <i :class="`bomi bomi-align-${condition.alignType}`"></i>
                {{ $lang("对齐") }}
              </span>
              <i class="el-icon-caret-bottom"></i>
            </el-button>
            <ul class="dropdown-list">
              <li @click="alignCommandEvent('left')">
                <i class="bomi bomi-align-left"></i>左对齐
              </li>
              <li @click="alignCommandEvent('h-center')">
                <i class="bomi bomi-align-h-center"></i>水平居中
              </li>
              <li @click="alignCommandEvent('right')">
                <i class="bomi bomi-align-right"></i>右对齐
              </li>
              <li @click="alignCommandEvent('left-right')">
                <i class="bomi bomi-align-left-right"></i>左右对齐
              </li>
              <li @click="alignCommandEvent('top')">
                <i class="bomi bomi-align-top"></i>上对齐
              </li>
              <li @click="alignCommandEvent('v-center')">
                <i class="bomi bomi-align-v-center"></i>垂直居中
              </li>
              <li @click="alignCommandEvent('bottom')">
                <i class="bomi bomi-align-bottom"></i>下对齐
              </li>
              <li @click="alignCommandEvent('top-bottom')">
                <i class="bomi bomi-align-top-bottom"></i>上下对齐
              </li>
            </ul>
          </el-popover>
          <el-popover
            popper-class="popover-list"
            placement="bottom"
            width="auto"
            v-model="showArrangePopoverStatus"
            trigger="click"
          >
            <el-button
              slot="reference"
              class="dropdown"
              :disabled="!(activeComs.length > 0 || activeCom.type != 'canvas')"
              ><span class="txt">
                <i class="bomi bomi-arrange"></i>
                {{ $lang("排列") }}
              </span>
              <i class="el-icon-caret-bottom"></i>
            </el-button>
            <ul class="dropdown-list">
              <li
                @click="orderCommandEvent('top')"
                :class="{ disabled: topOrder == activeCom.order }"
              >
                <i class="bomi bomi-move-top"></i>置顶
              </li>
              <li
                @click="orderCommandEvent('bottom')"
                :class="{ disabled: bottomOrder == activeCom.order }"
              >
                <i class="bomi bomi-move-bottom"></i>置底
              </li>
              <li
                @click="orderCommandEvent('up')"
                :class="{ disabled: topOrder == activeCom.order }"
              >
                <i class="bomi bomi-move-up"></i>前移
              </li>
              <li
                @click="orderCommandEvent('down')"
                :class="{ disabled: bottomOrder == activeCom.order }"
              >
                <i class="bomi bomi-move-down"></i>后移
              </li>
            </ul>
          </el-popover>
        </el-button-group>
        <el-button-group>
          <el-popover
            popper-class="popover-list"
            placement="bottom"
            width="auto"
            v-model="showThemesPopoverStatus"
            trigger="click"
          >
            <el-button class="dropdown" slot="reference">
              <span class="txt">
                <i class="el-icon-s-grid"></i>
                {{ $lang("皮肤") }}
              </span>
              <i class="el-icon-caret-bottom"></i
            ></el-button>
            <ul class="dropdown-list">
              <li @click="setThemesEvent('white')">
                <i class="skin skin-white"></i>简洁白
              </li>
              <li @click="setThemesEvent('black')">
                <i class="skin skin-black"></i>酷炫黑
              </li>
              <li @click="setThemesEvent('blue')">
                <i class="skin skin-blue"></i>荧光蓝
              </li>
            </ul>
          </el-popover>
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
      <div class="right">
        <!-- <el-button @click="dataEvent">
          <i class="el-icon-data-analysis"></i>
          数据表
        </el-button> -->
        <el-button @click="clearEvent">
          <i class="el-icon-toilet-paper"></i>
          清缓存
        </el-button>
        <el-button @click="saveEvent">
          <i class="bomi bomi-save"></i>
          保存
        </el-button>
        <el-button @click="copyEvent">
          <i class="el-icon-copy-document"></i>
          复制
        </el-button>
        <el-button @click="deleteEvent">
          <i class="el-icon-delete"></i>
          删除
        </el-button>
        <el-button @click="fullScreenEvent">
          <i class="el-icon-full-screen"></i>
          全屏
        </el-button>
        <el-button @click="runEvent">
          <i class="bomi bomi-run"></i>
          运行
        </el-button>
      </div>
    </div>
    <bm-record ref="bmRecord"></bm-record>
    <bm-fallback ref="bmFallback"></bm-fallback>
    <bm-preview ref="bmPreview"></bm-preview>
    <bm-data-table ref="bmDataTable"></bm-data-table>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import html2canvas from "html2canvas";
import Canvg from "canvg";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showGroupPopoverStatus: false,
      showArrangePopoverStatus: false,
      showSpreadPopoverStatus: false,
      showThemesPopoverStatus: false,
      showAlignPopoverStatus: false,
      condition: {
        // historyIndex: 0,
        alignType: "left",
        spreadType: "h-center"
      }
    };
  },
  components: {
    bmRecord: () =>
      import(/* webpackChunkName: "bm-com-record-com" */ "@/components/record"),
    bmPreview: () =>
      import(
        /* webpackChunkName: "bm-com-preview-com" */ "@/components/preview"
      ),
    bmDataTable: () =>
      import(
        /* webpackChunkName: "bm-component-data-table-com" */ "@/components/data/data-table"
      ),
    bmFallback: () =>
      import(
        /* webpackChunkName: "bm-com-fallback-com" */ "@/components/fallback"
      )
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo",
      historyList: "canvas/getHistoryList",
      historyIndex: "canvas/getHistoryIndex",
      canvas: "canvas/getCanvas",
      zoom: "canvas/getZoom", //放大缩小
      leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      activeCom: "canvas/getActiveCom",
      activeComs: "canvas/getActiveComs",
      widgetList: "canvas/getWidgetList"
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
    }
  },
  methods: {
    ...mapMutations({
      setUserInfo: "setUserInfo",
      setActiveCom: "canvas/setActiveCom",
      setActiveComs: "canvas/setActiveComs",
      setCanvasData: "canvas/setCanvasData",
      setZoom: "canvas/setZoom",
      setHistoryIndex: "canvas/setHistoryIndex",
      setWidgetList: "canvas/setWidgetList",
      setLeftMenuStatus: "canvas/setLeftMenuStatus",
      setPreviewData: "canvas/setPreviewData",
      setRightMenuStatus: "canvas/setRightMenuStatus"
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      createRecordAction: "canvas/createRecord",
      createHistoryAction: "canvas/createHistory",
      canvasSaveAction: "canvasSave",
      upload2OssAction: "upload2Oss"
    }),
    // 初始化
    init() {
      // this.storeProductFunc();
      //保存
      $vm.$on("save", () => {
        this.saveEvent();
      });
      //组合
      $vm.$on("group-command", cmd => {
        this.groupCommandEvent(cmd);
      });
      // //打散
      // $vm.$on("un-compose", () => {
      //   this.unComposeEvent();
      // });
      //撤销
      $vm.$on("cancel", () => {
        this.cancelEvent();
      });
      //删除
      $vm.$on("delete-command", () => {
        this.deleteEvent();
      });
      //还原
      $vm.$on("resume", () => {
        this.resumeEvent();
      });
      //排序
      $vm.$on("order-command", cmd => {
        this.orderCommandEvent(cmd);
      });
    },
    //数据表入口
    dataEvent() {
      this.$refs.bmDataTable?.show();
    },
    //清空缓存
    clearEvent() {
      let { userInfo = {} } = this;
      localStorage.clear();
      sessionStorage.clear();
      this.setUserInfo(userInfo);
      this.$$msgSuccess("缓存清除成功");
    },
    saveEvent() {
      let { canvas = {}, canvasData: data = {}, widgetList = [] } = this;
      let { width = "", height = "", canvasId: id = "", name = "" } =
        canvas || {};
      this.setCanvasData(data);
      if (!id) {
        return;
      }
      data.canvasData = {
        widgetList: widgetList.filter(item => item.type != "canvas"),
        canvas
      };
      if (!data.background) {
        data.background = { url: "", color: "#fff" };
        data.capacity = [];
      }
      this.canvasSaveFunc(
        {
          data: JSON.stringify(data),
          width,
          height,
          name,
          id
        },
        () => {
          this.$$msgSuccess("保存成功");
        }
      );
    },
    copyEvent() {
      let { activeCom = {}, widgetList = [], activeComs = [] } = this;
      let { type = "" } = activeCom || {};
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        if (!type || type == "canvas") {
          this.$$msgError(this.$lang("请选择要复制的组件"));
          return;
        }
      }
      let _activeComs = [];
      let callback = item => {
        let id = bmCommon.uuid();
        let orders = widgetList.map(item => item.order);
        let order = Math.max(...orders);
        order += 1;
        let _item = { ...item, id, order };
        widgetList.push(_item);
        if (length > 1) {
          _activeComs.push(_item);
        }
      };
      if (length > 1) {
        activeComs.forEach(item => {
          callback(item);
        });
        this.setActiveComs(_activeComs);
      } else {
        callback(activeCom || {});
        this.setActiveCom(activeCom);
      }
    },
    deleteEvent() {
      let { activeCom = {}, activeComs = [] } = this;
      let { type = "" } = activeCom;
      let { length = 0 } = activeComs || [];
      if (length > 1) {
        activeComs.forEach(item => {
          this.deleteItem(item);
        });
      } else {
        if (!type || type == "canvas") {
          this.$$msgError(this.$lang("请选择要删除的组件"));
          return;
        }
        this.deleteItem(activeCom);
      }
      this.selectComAction();
      // this.showContextMenuStatus = false;
      this.createHistoryAction();
    },
    deleteItem(item = {}) {
      let { widgetList = [] } = this;
      let { id = "" } = item || {};
      let index = widgetList.findIndex(_item => id == _item.id);
      // bmCommon.log(
      //   "widgetList=",
      //   widgetList.length,
      //   index,
      //   id,
      //   widgetList.map(item => item.id),
      //   index < 0
      // );
      if (index < 0) {
        this.$$msgError(this.$lang("请选择要删除的组件"));
        return;
      }
      widgetList.splice(index, 1);
      // this.selectComAction();
      // this.showContextMenuStatus = false;
    },
    resumeEvent() {
      let { historyList = [], historyIndex = 0 } = this;
      // let { historyIndex = 0 } = condition;
      // let { length = 0 } = historyList || [];
      if (historyIndex < 0) {
        // condition.historyIndex = 0;
        this.setHistoryIndex(0);
        return;
      }
      let widgetList = historyList[--historyIndex];
      this.setWidgetList(widgetList || []);
      this.selectComAction();
      this.setHistoryIndex(historyIndex);
    },
    cancelEvent() {
      let { historyList = [], historyIndex = 0 } = this;
      // let {  } = condition;
      let { length = 0 } = historyList || [];
      if (historyIndex > length - 1) {
        // condition.historyIndex = length - 1;
        this.setHistoryIndex(length - 1);
        return;
      }
      let widgetList = historyList[++historyIndex];
      this.setWidgetList(widgetList || []);
      this.selectComAction();
      // condition.historyIndex = ++historyIndex;
      this.setHistoryIndex(historyIndex);
    },
    fallbackEvent() {
      this.$refs.bmFallback?.show();
    },
    recordEvent() {
      this.$refs.bmRecord?.show();
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
        // if (zoom > 10 && zoom <= 1000) {
        //   this.setZoom(zoom / 100);
        // }
        if (zoom < 10) {
          zoom = 10;
        } else if (zoom > 1000) {
          zoom = 1000;
        }
        this.setZoom(zoom / 100);
      } else {
        this.setZoom(1);
        canvas.left = 0;
        canvas.top = 0;
      }
    },
    //运行
    runEvent() {
      // this.$jumpPage(this.$RouterURL.preview.name);
      let { widgetList = [], canvas = {} } = this;
      this.setPreviewData({
        widgetList,
        canvas
      });
      this.$refs.bmPreview?.show();
      this.selectComAction(); //选中组件
      this.timeoutId = setTimeout(() => {
        clearTimeout(this.timeoutId);
        this.uploadImg();
      });
    },
    uploadImg() {
      let { canvas = {} } = this;
      // 转化成canvas
      let targetDom = $(".canvas-box");
      // 将当前页面DOM克隆
      let copyDom = targetDom.clone();
      copyDom.find("svg").each(function(index, node) {
        let parentNode = node.parentNode;
        let svg = node.outerHTML.trim();
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let v = Canvg.fromString(ctx, svg, {
          ignoreAnimation: false,
          log: true
        });
        v.start();
        // if (node.style.position) {
        //   canvas.style.position += node.style.position;
        //   canvas.style.left += node.style.left;
        //   canvas.style.top += node.style.top;
        // }
        parentNode.removeChild(node);
        $(parentNode).prepend($(canvas));
      });
      $(".view-box").prepend(copyDom);
      targetDom.hide();
      html2canvas(copyDom[0], {
        useCORS: true,
        allowTaint: true,
        // taintTest: false,
        logging: true
      }).then(_canvas => {
        // html2canvas($(".canvas-box")[0], {}).then(_canvas => {
        // 将clone页面删除
        copyDom.remove();
        targetDom.show();
        let blob = bmCommon.convertBase64ToBlob(_canvas.toDataURL());
        let formData = new FormData();
        formData.append("files", blob, `${Date.now()}.png`);
        formData.append("subDir", Constants.UPLOADDIR.FILE);
        this.upload2OssFunc(
          {
            formData
          },
          img => {
            // let { poster = "" } = canvas || {};
            // if (!poster) {
            canvas.poster = img;
            // }
            this.createRecordAction({ img });
          }
        );
      });
    },
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
    },
    setThemesEvent(cmd) {
      let { canvas = {}, widgetList = [] } = this;
      canvas.themes = cmd;
      switch (cmd) {
        case "white":
          canvas.backgroundColor = "#fff";
          break;
        case "black":
          canvas.backgroundColor = "#1f2b48";
          break;
        case "blue":
          canvas.backgroundColor = "#121b43";
          break;
        default:
          break;
      }
      widgetList.forEach(item => {
        item.themes = cmd;
        switch (cmd) {
          case "white":
            break;
          case "black":
            break;
          case "blue":
            break;
          default:
            break;
        }
      });
      this.showThemesPopoverStatus = false;
    },
    //组合  打散操作
    groupCommandEvent(cmd) {
      // let { condition } = this;
      // condition.groupType = cmd;
      if (!cmd) {
        return;
      }
      switch (cmd) {
        case "group":
          this.composeEvent();
          break;
        case "ungroup":
          this.unComposeEvent();
          break;
      }
      this.showGroupPopoverStatus = false;
      this.createHistoryAction();
    },
    // 组合
    composeEvent() {
      let { widgetList = [], activeComs = [] } = this;
      let {
        data = {},
        name = "",
        code: type = "",
        left = 0,
        top = 0,
        comDisabled = false,
        alias = ""
      } = Constants.COMPONENTPANEL || {};
      let children = [];
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      activeComs.forEach(item => {
        children.push(item);
        let index = widgetList.findIndex(_item => item.id == _item.id);
        while (index > -1) {
          widgetList.splice(index, 1);
          index = widgetList.findIndex(_item => item.id == _item.id);
        }
      });
      let orders = widgetList.map(item => item.order);
      let order = 1;
      if (orders && orders.length > 0) {
        order = Math.max(...orders);
        order += 1;
      }
      let id = bmCommon.uuid();
      let group1 = bmCommon.clone(children || []);
      let group2 = bmCommon.clone(children || []);
      group1.sort((a, b) => a.left - b.left);
      // let max_left = Math.max(...group1.map(item => item.left + item.width));
      group2.sort((a, b) => a.top - b.top);
      // let max_top = Math.max(...group2.map(item => item.top + item.height));
      let { left: minLeft = 0 } = group1[0] || {};
      // let { width: maxWidth = 0, left: maxLeft = 0 } = group1[length - 1] || {};
      // let minLeft = minLeft;
      // maxLeft = maxLeft + maxWidth - minLeft;
      // max_left = max_left - minLeft;
      // if (maxLeft < max_left) {
      //   maxLeft = max_left;
      // }
      let { top: minTop = 0 } = group2[0] || {};
      // let { height: maxHeight = 0, top: maxTop = 0 } = group2[length - 1] || {};
      // let minTop = minTop;
      // maxTop = maxTop + maxHeight - minTop;
      // max_top = max_top - minTop;
      // if (maxTop < max_top) {
      //   maxTop = max_top;
      // }
      // width = maxLeft;
      // height = maxTop;
      left = minLeft;
      top = minTop;
      children.forEach((item, index) => {
        item.left -= left;
        item.parentId = id;
        item.top -= top;
        item.order = index;
      });
      let item = {
        ...data,
        type,
        name,
        order,
        comDisabled,
        id,
        alias,
        left,
        top,
        children
      };
      widgetList.push(item);
      // canvas.action = "select";
      this.createHistoryAction();
      this.$nextTick(() => {
        this.selectComAction(id);
      });
      // this.showContextMenuStatus = false;
    },
    // 打散
    unComposeEvent() {
      let { activeCom = {}, widgetList = [] } = this;
      let widgets = [];
      let { children = [], left = 0, top = 0, id = "" } = activeCom || {};
      let orders = widgetList.map(item => item.order);
      let order = 1;
      if (orders && orders.length > 0) {
        order = Math.max(...orders);
        order += 1;
      }
      let { length = 0 } = children || [];
      if (length < 1) {
        return;
      }
      children.forEach((item, index) => {
        item.left += left;
        item.top += top;
        // item.rotate -= rotate;
        item.order = index + order;
        delete item.parentId;
        widgets.push(item);
      });
      let index = widgetList.findIndex(item => id == item.id);
      widgetList.splice(index, 1, ...widgets);
    },
    // 分布操作
    spreadCommandEvent(cmd) {
      if (!cmd) {
        return;
      }
      let { condition } = this;
      condition.spreadType = cmd;
      switch (cmd) {
        case "v-center":
          this.spreadVCenterEvent();
          break;
        case "h-center":
          this.spreadHCenterEvent();
          break;
      }
      this.showSpreadPopoverStatus = false;
      this.createHistoryAction();
    },
    // 垂直分布
    spreadVCenterEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 3) {
        return;
      }
      let min = Math.min(...activeComs.map(item => Number(item.top)));
      let max = Math.max(...activeComs.map(item => Number(item.top)));
      let range = (max - min) / (length - 1);
      let index = 1;
      let _activeComs = (bmCommon.clone(activeComs) || []).sort(
        (a, b) => a.top - b.top
      );
      _activeComs.forEach(item => {
        let { height = "", top = "", originHeight = "", id = "" } = item || {};
        let _max = (Number(height) || Number(originHeight)) + Number(top);
        let _min = Number(top);
        let _obj = activeComs.find(_item => _item.id == id);
        if (min != _min && _max != max) {
          _obj.top = min + range * index;
          index++;
        }
      });
    },
    //水平分布
    spreadHCenterEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 3) {
        return;
      }
      let min = Math.min(...activeComs.map(item => Number(item.left)));
      let max = Math.max(...activeComs.map(item => Number(item.left)));
      let range = (max - min) / (length - 1);
      let index = 1;
      let _activeComs = (bmCommon.clone(activeComs) || []).sort(
        (a, b) => a.left - b.left
      );
      _activeComs.forEach(item => {
        let { width = "", left = "", originWidth = "", id = "" } = item || {};
        let _max = (Number(width) || Number(originWidth)) + Number(left);
        let _min = Number(left);
        let _obj = activeComs.find(_item => _item.id == id);
        if (min != _min && _max != max) {
          _obj.left = min + range * index;
          index++;
        }
      });
    },
    alignCommandEvent(cmd) {
      if (!cmd) {
        return;
      }
      let { condition } = this;
      condition.alignType = cmd;
      switch (cmd) {
        case "top":
          this.alignTopEvent();
          break;
        case "bottom":
          this.alignBottomEvent();
          break;
        case "left":
          this.alignLeftEvent();
          break;
        case "right":
          this.alignRightEvent();
          break;
        case "left-right":
          this.alignLeftRightEvent();
          break;
        case "top-bottom":
          this.alignTopBottomEvent();
          break;
        case "v-center":
          this.alignVCenterEvent();
          break;
        case "h-center":
          this.alignHCenterEvent();
          break;
        default:
          break;
      }
      this.showAlignPopoverStatus = false;
      this.createHistoryAction();
    },
    // 左右对齐
    alignLeftRightEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      let [item = {}] = activeComs || [];
      let left =
        item.left + (Number(item.width) || Number(item.originWidth)) / 2;
      let width = Number(item.width) || Number(item.originWidth);
      activeComs.forEach(item => {
        if (item.scaleable) {
          //若组件本身不可变，则不做拉伸处理
          item.width = width;
        }
        item.left = left - (Number(item.width) || Number(item.originWidth)) / 2;
      });
    },
    //上下对齐
    alignTopBottomEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      let [item = {}] = activeComs || [];
      let top =
        item.top + (Number(item.height) || Number(item.originHeight)) / 2;
      let height = Number(item.height) || Number(item.originHeight);
      activeComs.forEach(item => {
        if (item.scaleable) {
          item.height = height;
        }
        item.top = top - (Number(item.height) || Number(item.originHeight)) / 2;
      });
    },
    // 垂直居中
    alignVCenterEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      let [item = {}] = activeComs || [];
      let top =
        item.top + (Number(item.height) || Number(item.originHeight)) / 2;
      activeComs.forEach(item => {
        item.top = top - (Number(item.height) || Number(item.originHeight)) / 2;
      });
    },
    // 水平居中
    alignHCenterEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      let [item = {}] = activeComs || [];
      let left =
        item.left + (Number(item.width) || Number(item.originWidth)) / 2;
      activeComs.forEach(item => {
        item.left = left - (Number(item.width) || Number(item.originWidth)) / 2;
      });
    },
    // 左对齐
    alignLeftEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      let min = Math.min(...activeComs.map(item => item.left));
      activeComs.forEach(item => {
        item.left = min;
      });
    },
    // 右对齐
    alignRightEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      let max = Math.max(
        ...activeComs.map(
          item => item.left + (Number(item.width) || Number(item.originWidth))
        )
      );
      activeComs.forEach(item => {
        item.left = max - (Number(item.width) || Number(item.originWidth));
      });
    },
    // 上对齐
    alignTopEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      let min = Math.min(...activeComs.map(item => item.top));
      activeComs.forEach(item => {
        item.top = min;
      });
    },
    // 下对齐
    alignBottomEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 2) {
        return;
      }
      let max = Math.max(
        ...activeComs.map(
          item => item.top + (Number(item.height) || Number(item.originHeight))
        )
      );
      activeComs.forEach(item => {
        item.top = max - (Number(item.height) || Number(item.originHeight));
      });
    },
    orderCommandEvent(cmd) {
      if (!cmd) {
        return;
      }
      switch (cmd) {
        case "up":
          this.moveUpEvent();
          break;
        case "down":
          this.moveDownEvent();
          break;
        case "top":
          this.moveTopEvent();
          break;
        case "bottom":
          this.moveBottomEvent();
          break;
        default:
          break;
      }
      this.showArrangePopoverStatus = false;
      this.createHistoryAction();
    },
    // 上移一层
    moveUpEvent() {
      // this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList: _widgetList = [] } = this;
      let { order = "", parentId = "" } = activeCom || {};
      let widgetList = _widgetList || [];
      if (parentId) {
        let parent = _widgetList.find(item => item.id == parentId);
        let { children = [] } = parent || {};
        widgetList = children || [];
      }
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
      // this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList: _widgetList = [] } = this;
      let { order = "", parentId = "" } = activeCom || {};
      let widgetList = _widgetList || [];
      if (parentId) {
        let parent = _widgetList.find(item => item.id == parentId);
        let { children = [] } = parent || {};
        widgetList = children || [];
      }
      // let obj = widgetList.find(item => order > item.order);
      // let { order: _order = "" } = obj || {};
      let orders = widgetList.map(item => item.order).sort((a, b) => b - a);
      // bmCommon.log("orders=>", orders, order);
      let _order = orders.find(item => item < order);
      let obj = widgetList.find(item => _order == item.order);
      activeCom.order = _order;
      obj.order = order;
    },
    // 置底
    moveBottomEvent() {
      // this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList: _widgetList = [] } = this;
      let { parentId = "" } = activeCom || {};
      let widgetList = _widgetList || [];
      if (parentId) {
        let parent = _widgetList.find(item => item.id == parentId);
        let { children = [] } = parent || {};
        widgetList = children || [];
      }
      let orders = widgetList.map(item => item.order);
      let order = Math.min(...orders);
      let { order: _order = 1 } = activeCom || {};
      if (order == _order) {
        return;
      }
      widgetList.forEach(item => {
        item.order++;
      });
      activeCom.order = 1;
    },
    // 置顶
    moveTopEvent() {
      // this.showContextMenuStatus = false;
      let { activeCom = {}, widgetList: _widgetList = [] } = this;
      let { parentId = "" } = activeCom || {};
      let widgetList = _widgetList || [];
      if (parentId) {
        let parent = _widgetList.find(item => item.id == parentId);
        let { children = [] } = parent || {};
        widgetList = children || [];
      }
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      let { order: _order = 1 } = activeCom || {};
      if (order == _order) {
        return;
      }
      activeCom.order = order + 1;
    },
    //保存画布
    canvasSaveFunc(options, callback) {
      let value = {};
      if (this._canvasSaveStatus) {
        return;
      }
      this._canvasSaveStatus = true;
      this.canvasSaveAction(options)
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
            (callback && callback(value)) || {};
          } else {
            this.$$msgError(message || "保存失败");
            // bmCommon.error(message || "保存失败");
          }
          this._canvasSaveStatus = false;
        })
        .catch(err => {
          this._canvasSaveStatus = false;
          this.$$msgError("保存失败");
          bmCommon.error("保存失败", err);
        });
    },
    //上传图片
    upload2OssFunc(options, callback) {
      let value = "";
      if (this._upload2OssStatus) {
        return;
      }
      this._upload2OssStatus = true;
      this.upload2OssAction(options)
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let [fileName = ""] = result || [];
            // this.$$msgSuccess("添附件成功");
            value = fileName;
          } else {
            // this.$$msgError(message || "添附件失败");
            bmCommon.error(message || "图片上传失败");
          }
          callback && callback(value);
          this._upload2OssStatus = false;
        })
        .catch(err => {
          callback && callback(value);
          // this.$$msgError("添附件失败");
          this._upload2OssStatus = false;
          bmCommon.error("图片上传失败", err);
        });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/nav.less";
</style>
