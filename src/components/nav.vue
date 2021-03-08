<template>
  <div class="bm-nav-com" @mousedown.stop @keydown.stop>
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
                <i class="bomi bomi-h-center"></i>{{ $lang("水平分布") }}
              </li>
              <li @click="spreadCommandEvent('v-center')">
                <i class="bomi bomi-v-center"></i>{{ $lang("垂直分布") }}
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
                <i class="bomi bomi-align-left"></i>{{ $lang("左对齐") }}
              </li>
              <li @click="alignCommandEvent('h-center')">
                <i class="bomi bomi-align-h-center"></i>{{ $lang("水平居中") }}
              </li>
              <li @click="alignCommandEvent('right')">
                <i class="bomi bomi-align-right"></i>{{ $lang("右对齐") }}
              </li>
              <li @click="alignCommandEvent('left-right')">
                <i class="bomi bomi-align-left-right"></i
                >{{ $lang("左右对齐") }}
              </li>
              <li @click="alignCommandEvent('top')">
                <i class="bomi bomi-align-top"></i>{{ $lang("上对齐") }}
              </li>
              <li @click="alignCommandEvent('v-center')">
                <i class="bomi bomi-align-v-center"></i>{{ $lang("垂直居中") }}
              </li>
              <li @click="alignCommandEvent('bottom')">
                <i class="bomi bomi-align-bottom"></i>{{ $lang("下对齐") }}
              </li>
              <li @click="alignCommandEvent('top-bottom')">
                <i class="bomi bomi-align-top-bottom"></i
                >{{ $lang("上下对齐") }}
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
                <i class="bomi bomi-move-top"></i>{{ $lang("置顶") }}
              </li>
              <li
                @click="orderCommandEvent('bottom')"
                :class="{ disabled: bottomOrder == activeCom.order }"
              >
                <i class="bomi bomi-move-bottom"></i>{{ $lang("置底") }}
              </li>
              <li
                @click="orderCommandEvent('up')"
                :class="{ disabled: topOrder == activeCom.order }"
              >
                <i class="bomi bomi-move-up"></i>{{ $lang("前移") }}
              </li>
              <li
                @click="orderCommandEvent('down')"
                :class="{ disabled: bottomOrder == activeCom.order }"
              >
                <i class="bomi bomi-move-down"></i>{{ $lang("后移") }}
              </li>
            </ul>
          </el-popover>
        </el-button-group>
        <el-button
          @click="diyCommandEvent"
          :disabled="!(activeComs.length > 0 || activeCom.type != 'canvas')"
        >
          <i class="el-icon-fork-spoon" :title="$lang('添加到自定义')"></i>
          {{ $lang("添加到自定义") }}
        </el-button>
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
                <i class="skin skin-white"></i>{{ $lang("简洁白") }}
              </li>
              <li @click="setThemesEvent('black')">
                <i class="skin skin-black"></i>{{ $lang("酷炫黑") }}
              </li>
              <li @click="setThemesEvent('blue')">
                <i class="skin skin-blue"></i>{{ $lang("荧光蓝") }}
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
        <el-button @click="loadJsonEvent">
          <i class="el-icon-document"></i>
          {{ $lang("加载外部JSON") }}
        </el-button>
      </div>
      <div class="right">
        <!-- <el-button @click="dataEvent">
          <i class="el-icon-data-analysis"></i>
          数据表
        </el-button> -->
        <el-button @click="clearEvent">
          <i class="el-icon-toilet-paper"></i>
          {{ $lang("清缓存") }}
        </el-button>
        <el-button @click="saveEvent">
          <i class="bomi bomi-save"></i>
          {{ $lang("保存") }}
        </el-button>
        <el-button @click="copyEvent">
          <i class="el-icon-copy-document"></i>
          {{ $lang("复制") }}
        </el-button>
        <el-button @click="deleteEvent">
          <i class="el-icon-delete"></i>
          {{ $lang("删除") }}
        </el-button>
        <el-button @click="fullScreenEvent">
          <i class="el-icon-full-screen"></i>
          {{ $lang("全屏") }}
        </el-button>
        <el-button @click="runEvent">
          <i class="bomi bomi-run"></i>
          {{ $lang("运行") }}
        </el-button>
      </div>
    </div>
    <bm-record ref="bmRecord"></bm-record>
    <bm-load ref="bmLoad"></bm-load>
    <bm-fallback ref="bmFallback"></bm-fallback>
    <bm-preview ref="bmPreview"></bm-preview>
    <bm-data-table ref="bmDataTable"></bm-data-table>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// import Core from "@/core/index";
import html2canvas from "html2canvas";
import Canvg from "canvg";
import CanvasEvent from "@/core/CanvasEvent";
import Canvas from "@/core/Canvas";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showGroupPopoverStatus: false,
      showArrangePopoverStatus: false,
      showSpreadPopoverStatus: false,
      showThemesPopoverStatus: false,
      showAlignPopoverStatus: false,
      // activeComs: [],
      widgetList: [],
      // historyList: [],
      // historyIndex: 0,
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
    bmLoad: () =>
      import(
        /* webpackChunkName: "bm-component-data-load-com" */ "@/components/data/load"
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
      // selectBox: "canvas/getSelectBox", //选取框
      canvas: "canvas/getCanvas",
      zoom: "canvas/getZoom", //放大缩小
      leftMenuStatus: "canvas/getLeftMenuStatus", //获取左侧菜单栏状态
      rightMenuStatus: "canvas/getRightMenuStatus", //获取右侧菜单栏状态
      activeCom: "canvas/getActiveCom",
      activeComs: "canvas/getActiveComs"
      // widgetList: "canvas/getWidgetList"
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
      setZoom: "canvas/setZoom"
    }),
    ...mapActions({
      canvasSaveAction: "canvasSave",
      widgetCustomAddAction: "widgetCustomAdd",
      upload2OssAction: "upload2Oss"
    }),
    // 初始化
    init() {
      // this.storeProductFunc();
      //保存
      $vm.$on("save", () => {
        this.saveEvent();
      });
      //保存
      $vm.$on("widgets-actives", () => {
        this.widgetsActiveComsEvent();
      });
      //组合
      $vm.$on("group-command", cmd => {
        this.groupCommandEvent(cmd);
      });
      //添加到自定义
      $vm.$on("diy-command", () => {
        this._navTimeoutId = setTimeout(() => {
          clearTimeout(this._navTimeoutId);
          this.diyCommandEvent();
        }, 0);
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
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
        let { userInfo = {} } = this;
        localStorage.clear();
        sessionStorage.clear();
        this.setUserInfo(userInfo);
        this.$$msgSuccess("缓存清除成功");
      }, 0);
    },
    saveEvent() {
      this._saveTimeoutId = setTimeout(() => {
        clearTimeout(this._saveTimeoutId);
        let { canvas = {} } = this;
        // let bm_widgetMap = window.bm_widgetMap;
        let { width = "", height = "", canvasId: id = "", name = "" } =
          canvas || {};
        // this.setCanvasData(data);
        if (!id) {
          this.$$msgError("未找到画布信息");
          return;
        }
        let data = {};
        let widgetList = Canvas.getWidgetList();
        data.canvasData = {
          widgetList,
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
      }, 0);
    },
    copyEvent() {
      clearTimeout(this._setCopyPasteTimeoutId);
      this._copyTimeoutId = setTimeout(() => {
        clearTimeout(this._copyTimeoutId);
        let bm_active_com_ids = window.bm_active_com_ids;
        let bm_active_com_id = window.bm_active_com_id;
        let bm_widgetMap = window.bm_widgetMap;
        let { length = 0 } = bm_active_com_ids || [];
        if (length < 2) {
          if (!bm_active_com_id) {
            this.$$msgError(this.$lang("请选择要复制的组件"));
            return;
          }
        }
        let orders = Canvas.getOrders();
        let callback = item => {
          let id = bmCommon.uuid();
          let order = Math.max(...orders);
          order += 1;
          let _item = { ...item, id, order };
          let { children = [] } = _item || {};
          children &&
            children.forEach(item => {
              item.id = id + bmCommon.uuid();
              item.parentId = id;
            });
          Canvas.append(item);
        };
        if (length > 1) {
          bm_active_com_ids.forEach(id => {
            let obj = bm_widgetMap[id];
            let { info = {} } = obj || {};
            callback(info);
          });
          this._setCopyPasteTimeoutId = setTimeout(() => {
            clearTimeout(this._setCopyPasteTimeoutId);
            let [id = ""] = bm_active_com_ids || [];
            CanvasEvent.selectComAction(id);
          }, 100);
        } else {
          let obj = bm_widgetMap[bm_active_com_id];
          let { info = {} } = obj || {};
          callback(info || {});
          // window.bm_active_com_id = bm_active_com_id;

          this._setCopyPasteTimeoutId = setTimeout(() => {
            clearTimeout(this._setCopyPasteTimeoutId);
            let { id = "" } = info || {};
            CanvasEvent.selectComAction(id);
          }, 100);
        }
      }, 0);
    },
    deleteEvent() {
      this._deleteTimeoutId = setTimeout(() => {
        clearTimeout(this._deleteTimeoutId);
        let bm_active_com_ids = window.bm_active_com_ids;
        let bm_active_com_id = window.bm_active_com_id;
        // let { activeCom = {}, activeComs = [] } = this;
        // let { id = "" } = activeCom;
        let { length = 0 } = bm_active_com_ids || [];
        let callback = () => {
          CanvasEvent.selectComAction();
          // this.showContextMenuStatus = false;
          CanvasEvent.createHistoryAction();
        };
        if (length > 1) {
          bm_active_com_ids.forEach(id => {
            this.deleteItem(id, callback);
          });
        } else {
          if (!bm_active_com_id) {
            this.$$msgError(this.$lang("请选择要删除的组件"));
            return;
          }
          this.deleteItem(bm_active_com_id, callback);
        }
      }, 0);
    },
    deleteItem(id, callback) {
      // let { widgetList = [] } = this;
      Canvas.remove(id);
      // if (parentId) {
      //   let widget = widgetList.find(_item => parentId == _item.id);
      //   let { children = [] } = widget || {};
      //   let index = children.findIndex(_item => id == _item.id);
      //   if (index < 0) {
      //     this.$$msgError(this.$lang("请选择要删除的组件"));
      //     return;
      //   }
      //   children.splice(index, 1);
      // } else {
      //   let index = widgetList.findIndex(_item => id == _item.id);
      //   if (index < 0) {
      //     this.$$msgError(this.$lang("请选择要删除的组件"));
      //     return;
      //   }
      //   widgetList.splice(index, 1);
      // }
      callback && callback();
    },
    //恢复
    resumeEvent() {
      let { historyIndex = 0 } = this;
      let historyList = Canvas.getHistoryList();
      if (historyIndex < 1) {
        return;
      }
      // let { historyIndex = 0 } = condition;
      // let { length = 0 } = historyList || [];
      if (historyIndex < 0) {
        // condition.historyIndex = 0;
        Canvas.setHistoryIndex(0);
        return;
      }
      let historyData = historyList[--historyIndex];
      // this.setWidgetList(widgetList || []);
      // Core.init(widgetList);
      Canvas.historyCompareOperate(historyData);
      Canvas.setHistoryIndex(historyIndex);
    },
    // 撤销
    cancelEvent() {
      this._cancelTimeoutId = setTimeout(() => {
        clearTimeout(this._cancelTimeoutId);
        let { historyIndex = 0 } = this;
        let historyList = Canvas.getHistoryList();
        let { length = 0 } = historyList || [];
        bmCommon.error("1", length, historyIndex);
        if (historyIndex > length - 2) {
          return;
        }
        // let {  } = condition;
        bmCommon.error("2", length, historyIndex);
        if (historyIndex > length - 1) {
          // condition.historyIndex = length - 1;
          Canvas.setHistoryIndex(length - 1);
          return;
        }
        bmCommon.error("3", length, historyIndex);
        let historyData = historyList[++historyIndex];
        // Core.init(widgetList);
        Canvas.historyCompareOperate(historyData);
        Canvas.setHistoryIndex(historyIndex);
      }, 0);
    },
    fallbackEvent() {
      this.$refs.bmFallback?.show();
    },
    widgetsActiveComsEvent() {
      let bm_active_com_ids = window.bm_active_com_ids;
      // let bm_widgetMap = window.bm_widgetMap;
      let widgetList = Canvas.getWidgetIndexList();
      this.widgetList = widgetList;
      this.activeComs = bm_active_com_ids;
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
    loadJsonEvent() {
      // let { rightMenuStatus = false } = this;
      // this.setRightMenuStatus(!rightMenuStatus);
      this.$refs.bmLoad?.show();
    },
    zoomEvent(val = 0) {
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
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
      }, 0);
    },
    //运行
    runEvent() {
      this._runTimeoutId = setTimeout(() => {
        clearTimeout(this._runTimeoutId);
        // this.$jumpPage(this.$RouterURL.preview.name);
        let { canvas = {} } = this;
        // let bm_widgetMap = window.bm_widgetMap;
        let widgetList = Canvas.getWidgetList();
        Canvas.setPreviewData({
          widgetList: Object.freeze([...widgetList]),
          canvas: Object.freeze({ ...canvas })
        });
        this.$refs.bmPreview?.show();
        // CanvasEvent.selectComAction(); //选中组件
        this.timeoutId = setTimeout(() => {
          clearTimeout(this.timeoutId);
          this.uploadImg((img = "") => {
            canvas.poster = img;
            CanvasEvent.createRecordAction({ img });
          });
        });
      }, 0);
    },
    uploadImg(callback, item) {
      // let { canvas = {} } = this;
      let $copyDom = "";
      if (item) {
        $copyDom = item;
      } else {
        // 转化成canvas
        let targetDom = $(".canvas-box");
        // 将当前页面DOM克隆
        $copyDom = targetDom.clone();
        $copyDom.find("svg").each(function(index, node) {
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
        $copyDom.css({ position: "fixed", left: 0, top: 0, zIndex: -1 });
        $(".view-box").prepend($copyDom);
        // targetDom.hide();
      }
      html2canvas($copyDom[0], {
        useCORS: true,
        allowTaint: true,
        // taintTest: false,
        logging: true
      }).then(_canvas => {
        // html2canvas($(".canvas-box")[0], {}).then(_canvas => {
        // 将clone页面删除
        $copyDom.remove();
        // targetDom.show();
        let blob = bmCommon.convertBase64ToBlob(_canvas.toDataURL());
        let formData = new FormData();
        formData.append("files", blob, `${Date.now()}.png`);
        formData.append("subDir", Constants.UPLOADDIR.FILE);
        this.upload2OssFunc(
          {
            formData
          },
          img => {
            callback && callback(img);
          }
        );
      });
    },
    // 全屏事件
    fullScreenEvent() {
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
        let { fullScreenStatus } = this;
        if (fullScreenStatus) {
          this.exitFullscreen();
        } else {
          this.showFullScreen();
        }
        this.fullScreenStatus = !fullScreenStatus;
      }, 0);
    },
    showFullScreen() {
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
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
      }, 0);
    },
    // 退出全屏
    exitFullscreen() {
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }, 0);
    },
    setThemesEvent(cmd) {
      this._setThemesTimeoutId = setTimeout(() => {
        clearTimeout(this._setThemesTimeoutId);
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
      }, 0);
    },
    //添加到自定义
    diyCommandEvent() {
      // let { activeComs = [] } = this;
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let {
        data = {},
        name = "",
        code: type = "",
        left = 0,
        top = 0,
        comDisabled = false,
        alias = ""
      } = { ...(Constants.COMPONENTPANEL || {}) };
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 1) {
        return;
      }
      let children = [];
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        children.push(info);
        // let index = widgetList.findIndex(_item => item.id == _item.id);
        // while (index > -1) {
        //   widgetList.splice(index, 1);
        //   index = widgetList.findIndex(_item => item.id == _item.id);
        // }
      });
      // let orders = widgetList.map(item => item.order);
      // let order = 1;
      // if (orders && orders.length > 0) {
      //   order = Math.max(...orders);
      //   order += 1;
      // }
      let [item = {}] = children || [];
      bmCommon.log("diyCommandEvent");
      let maxHeight = item.height;
      let maxWidth = item.width;
      if (length > 1) {
        // let id = bmCommon.uuid();
        let group1 = bmCommon.clone(children || []);
        let group2 = bmCommon.clone(children || []);
        group1.sort((a, b) => a.left - b.left);
        group2.sort((a, b) => a.top - b.top);
        let { left: minLeft = 0 } = group1[0] || {};
        let { top: minTop = 0 } = group2[0] || {};
        left = minLeft;
        top = minTop;
        group1.sort((a, b) => b.left + b.width - (a.left + a.width));
        group2.sort((a, b) => b.top + b.height - (a.top + a.height));
        let { top: maxTop = 0, height: _maxHeight = 0 } = group2[0] || {};
        let { left: maxLeft = 0, width: _maxWidth = 0 } = group1[0] || {};
        maxHeight = maxTop + _maxHeight - minTop;
        maxWidth = maxLeft + _maxWidth - minLeft;
        children.forEach((item, index) => {
          item.left -= left;
          // item.parentId = id;
          //需要重新指定parentId
          item.top -= top;
          item.order = index;
        });
        item = {
          ...data,
          type,
          name,
          // order,
          comDisabled,
          // id,
          width: maxWidth,
          height: maxHeight,
          alias,
          left,
          top,
          children
        };
      }
      // 转化成canvas
      let targetDom = $(".canvas-box");
      // 将当前页面DOM克隆
      let $copyDom = targetDom.clone();
      $copyDom.find("svg").each(function(index, node) {
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
      // let ids = children.map(item => `${item.id}`);
      $copyDom.children().each((index, node) => {
        let $item = $(node);
        let id = $item.attr("id");
        if (bm_active_com_ids.indexOf(id) > -1) {
          $item.removeClass("active");
          let left = $item.css("left");
          let top = $item.css("top");
          $item
            .css({
              left: parseFloat(left) - parseFloat(item.left),
              top: parseFloat(top) - parseFloat(item.top)
            })
            .show();
          bmCommon.log(
            "----显示left=",
            parseFloat(left),
            item.left,
            parseFloat(left) - parseFloat(item.left),
            "top=",
            parseFloat(top),
            item.top,
            parseFloat(top) - parseFloat(item.top)
          );
        } else {
          $item.hide();
        }
      });

      $copyDom.css({
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: -1,
        width: maxWidth,
        height: maxHeight
      });
      $(".view-box").prepend($copyDom);
      this.uploadImg((img = "") => {
        // window.open(this.$loadImgUrl(img));
        this.widgetCustomAddFunc(
          { content: JSON.stringify(item), name: "自定义", picUrl: img },
          () => {
            //刷新自定义组件列表
            $vm.$emit("widget-list-diy");
          }
        );
      }, $copyDom);
    },
    //组合  打散操作
    groupCommandEvent(cmd) {
      this._groupCommandTimeoutId = setTimeout(() => {
        clearTimeout(this._groupCommandTimeoutId);
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
      }, 1);
      this.showGroupPopoverStatus = false;
    },
    // 组合
    composeEvent() {
      // let { widgetList = [], activeComs = [] } = this;
      // let widgetList = [];
      let {
        data = {},
        name = "",
        code: type = "",
        left = 0,
        top = 0,
        comDisabled = false,
        alias = ""
      } = { ...(Constants.COMPONENTPANEL || {}) };
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let children = [];
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let orders = [];
      for (let i in bm_widgetMap) {
        let obj = bm_widgetMap[i];
        let { info = {} } = obj || {};
        let {
          order = 1,
          type = "",
          parentId = "",
          children: _children = [],
          left = 0,
          top = 0
        } = info || {};
        if (!parentId) {
          orders.push(order);
          if (bm_active_com_ids.indexOf(i) > -1) {
            //若已经是组合则先打散
            if (type === "panel") {
              _children.forEach(_item => {
                let obj = bmCommon.clone(_item);
                obj.id = bmCommon.uuid();
                obj.left += left;
                obj.top += top;
                delete obj.parentId;
                children.push(obj);
              });
            } else {
              children.push(bmCommon.clone(info));
            }

            bmCommon.error("count=", info, children, JSON.stringify(info));
            // if (index > -1) {
            //   widgetList.splice(index, 1);
            //   // count++;
            // }
          }
        }
      }

      // bmCommon.error("count=", count);
      // let orders = widgetList.map(item => item.order);
      let order = 1;
      if (orders && orders.length > 0) {
        order = Math.max(...orders);
        order += 1;
      }
      let id = bmCommon.uuid();
      // let group1 = bmCommon.clone(children || []);
      // let group2 = bmCommon.clone(children || []);
      // group1.sort((a, b) => a.left - b.left);
      // // let max_left = Math.max(...group1.map(item => item.left + item.width));
      // group2.sort((a, b) => a.top - b.top);
      //left 最大值 4
      let minLeft = Math.min(
        ...children.map(item => {
          return item.left;
        })
      );
      // top 最小值 1
      let minTop = Math.min(
        ...children.map(item => {
          return item.top;
        })
      );
      // let { left: minLeft = 0 } = group1[0] || {};
      bmCommon.log("composeEvent=", children, minLeft, minTop);
      // let { top: minTop = 0 } = group2[0] || {};
      left = minLeft;
      top = minTop;
      children.forEach((item, index) => {
        item.id = id + bmCommon.uuid();
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

      bmCommon.error("composeEvent=", JSON.stringify(item));
      Canvas.append(item);

      bm_active_com_ids.forEach(id => {
        Canvas.remove(id);
      });
      Canvas.setActiveComs([]);
      CanvasEvent.createHistoryAction();
      CanvasEvent.selectComAction(id);
    },
    // 打散
    unComposeEvent() {
      let bm_active_com_id = window.bm_active_com_id;
      let bm_widgetMap = window.bm_widgetMap;
      let orders = Canvas.getOrders();
      let obj = bm_widgetMap[bm_active_com_id];
      let { info: activeCom = {} } = obj || {};
      let { children = [], left = 0, top = 0, id = "" } = activeCom || {};
      let order = 1;
      if (orders && orders.length > 0) {
        order = Math.max(...orders);
        order += 1;
      }
      let { length = 0 } = children || [];
      if (length < 1) {
        return;
      }
      Canvas.remove(id);
      children.forEach((item, index) => {
        item.id = bmCommon.uuid();
        item.left += left;
        item.top += top;
        item.order = index + order;
        delete item.parentId;
        Canvas.append(item, false);
      });
    },
    // 分布操作
    spreadCommandEvent(cmd) {
      this._spreadCommandTimeoutId = setTimeout(() => {
        clearTimeout(this._spreadCommandTimeoutId);
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
      }, 1);
      this.showSpreadPopoverStatus = false;
    },
    // 垂直分布
    spreadVCenterEvent() {
      // let { activeComs = [] } = this;
      // let { length = 0 } = activeComs || [];
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 3) {
        return;
      }
      let tops = [];
      let activeComs = [];
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { top = 0 } = info || {};
        tops.push(Number(top));
        activeComs.push(info);
      });
      let min = Math.min(...tops);
      let max = Math.max(...tops);
      let range = (max - min) / (length - 1);
      let index = 1;
      activeComs.sort((a, b) => a.top - b.top);
      activeComs.forEach(item => {
        let { height = "", top = "", originHeight = "", id = "" } = item || {};
        let _max = (Number(height) || Number(originHeight)) + Number(top);
        let _min = Number(top);
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        if (min != _min && _max != max) {
          info.top = min + range * index;
          obj?.refresh({
            top: info.top
          });
          index++;
        }
      });
      CanvasEvent.createHistoryAction();
    },
    //水平分布
    spreadHCenterEvent() {
      // let { activeComs = [] } = this;
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 3) {
        return;
      }
      let lefts = [];
      let activeComs = [];
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { left = 0 } = info || {};
        lefts.push(Number(left));
        activeComs.push(info);
      });
      let min = Math.min(...lefts);
      let max = Math.max(...lefts);
      let range = (max - min) / (length - 1);
      let index = 1;
      activeComs.sort((a, b) => a.left - b.left);
      activeComs.forEach(item => {
        let { width = "", left = "", originWidth = "", id = "" } = item || {};
        let _max = (Number(width) || Number(originWidth)) + Number(left);
        let _min = Number(left);
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        // let _obj = activeComs.find(_item => _item.id == id);
        if (min != _min && _max != max) {
          info.left = min + range * index;
          obj?.refresh({
            left: info.left
          });
          index++;
        }
      });
      CanvasEvent.createHistoryAction();
    },
    alignCommandEvent(cmd) {
      this._navTimeoutId = setTimeout(() => {
        clearTimeout(this._navTimeoutId);
        if (!cmd) {
          return;
        }
        let { condition } = this;
        condition.alignType = cmd;
        switch (cmd) {
          case "top":
            this.alignTopEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "bottom":
            this.alignBottomEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "left":
            this.alignLeftEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "right":
            this.alignRightEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "left-right":
            this.alignLeftRightEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "top-bottom":
            this.alignTopBottomEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "v-center":
            this.alignVCenterEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "h-center":
            this.alignHCenterEvent();
            CanvasEvent.createHistoryAction();
            break;
          default:
            break;
        }
        this.showAlignPopoverStatus = false;
      }, 0);
    },
    // 左右对齐
    alignLeftRightEvent() {
      // let { activeComs = [] } = this;
      // let { length = 0 } = activeComs || [];
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let [id = ""] = bm_active_com_ids || [];
      let obj = bm_widgetMap[id];
      let { info = {} } = obj || {};
      let left =
        info.left + (Number(info.width) || Number(info.originWidth)) / 2;
      let width = Number(info.width) || Number(info.originWidth);
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        if (info.scaleable) {
          //若组件本身不可变，则不做拉伸处理
          info.width = width;
        }
        info.left = left - (Number(info.width) || Number(info.originWidth)) / 2;
        obj.refresh({ left: info.left, width: info.width });
      });
    },
    //上下对齐
    alignTopBottomEvent() {
      // let { activeComs = [] } = this;
      // let { length = 0 } = activeComs || [];
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let [id = ""] = bm_active_com_ids || [];
      let obj = bm_widgetMap[id];
      let { info = {} } = obj || {};
      let top =
        info.top + (Number(info.height) || Number(info.originHeight)) / 2;
      let height = Number(info.height) || Number(info.originHeight);
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        if (info.scaleable) {
          info.height = height;
        }
        info.top = top - (Number(info.height) || Number(info.originHeight)) / 2;
        obj.refresh({ top: info.top, height: info.height });
      });
    },
    // 垂直居中
    alignVCenterEvent() {
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let [id = ""] = bm_active_com_ids || [];
      let obj = bm_widgetMap[id];
      let { info = {} } = obj || {};
      let top =
        info.top + (Number(info.height) || Number(info.originHeight)) / 2;
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { type = "", height = 0, originHeight = 0 } = info || {};
        if (type == "panel") {
          let _obj = document.getElementById(id);
          let { height: _height = 0 } = _obj.getBoundingClientRect() || {};
          height = _height;
          info.height = height;
        }
        info.top = top - (Number(height) || Number(originHeight)) / 2;
        obj.refresh({ top: info.top });
      });
    },
    // 水平居中
    alignHCenterEvent() {
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let [id = ""] = bm_active_com_ids || [];
      let obj = bm_widgetMap[id];
      let { info = {} } = obj || {};
      let left =
        info.left + (Number(info.width) || Number(info.originWidth)) / 2;
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { type = "", width = 0, originWidth = 0 } = info || {};
        if (type == "panel") {
          let _obj = document.getElementById(id);
          let { width: _width = 0 } = _obj.getBoundingClientRect() || {};
          width = _width;
          info.width = width;
        }
        info.left = left - (Number(width) || Number(originWidth)) / 2;
        obj.refresh({ left: info.left });
      });
    },
    // 左对齐
    alignLeftEvent() {
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let lefts = [];
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { left = 0 } = info || {};
        lefts.push(Number(left));
      });
      let min = Math.min(...lefts);
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        info.left = min;
        obj.refresh({ left: info.left });
      });
    },
    // 右对齐
    alignRightEvent() {
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let lefts = [];
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { left = 0, type = "", width = 0, originWidth = 0 } = info || {};
        if (type == "panel") {
          let _obj = document.getElementById(id);
          let { width: _width = 0 } = _obj.getBoundingClientRect() || {};
          width = _width;
          info.width = width;
        }
        lefts.push(Number(left) + (Number(width) || Number(originWidth)));
      });
      let max = Math.max(...lefts);
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        info.left = max - (Number(info.width) || Number(info.originWidth));
        obj.refresh({ left: info.left });
      });
    },
    // 上对齐
    alignTopEvent() {
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let tops = [];
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { top = 0 } = info || {};
        tops.push(Number(top));
      });
      let min = Math.min(...tops);
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        info.top = min;
        obj.refresh({ top: info.top });
      });
    },
    // 下对齐
    alignBottomEvent() {
      let bm_active_com_ids = window.bm_active_com_ids;
      let bm_widgetMap = window.bm_widgetMap;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        return;
      }
      let tops = [];
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { top = 0, height = 0, originHeight = 0, type = "" } = info || {};
        if (type == "panel") {
          let _obj = document.getElementById(id);
          let { height: _height = 0 } = _obj.getBoundingClientRect() || {};
          height = _height;
          info.height = height;
        }
        tops.push(Number(top) + (Number(height) || Number(originHeight)));
      });
      let max = Math.max(...tops);
      bm_active_com_ids.forEach(id => {
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        let { height = 0, originHeight = 0 } = info || {};
        info.top = max - (Number(height) || Number(originHeight));
        bmCommon.log("alignBottomEvent=", info.id, max, info.top, info.height);
        obj.refresh({ top: info.top });
      });
    },
    orderCommandEvent(cmd) {
      this._orderCommandTimeoutId = setTimeout(() => {
        clearTimeout(this._orderCommandTimeoutId);
        if (!cmd) {
          return;
        }
        switch (cmd) {
          case "up":
            this.moveUpEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "down":
            this.moveDownEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "top":
            this.moveTopEvent();
            CanvasEvent.createHistoryAction();
            break;
          case "bottom":
            this.moveBottomEvent();
            CanvasEvent.createHistoryAction();
            break;
          default:
            break;
        }
        this.showArrangePopoverStatus = false;
      }, 0);
    },
    // 上移一层
    moveUpEvent() {
      // this.showContextMenuStatus = false;
      let widgetList = [];
      let { activeCom = {} } = this;
      let bm_widgetMap = window.bm_widgetMap;
      let { order = "", parentId = "" } = activeCom || {};
      // let widgetList = _widgetList || [];
      let bm_active_com_ids = window.bm_active_com_ids;
      let { length = 0 } = bm_active_com_ids || [];
      if (length < 2) {
        if (parentId) {
          let parent = bm_widgetMap[parentId];
          let { children = [] } = parent || {};
          widgetList = children || [];
        } else {
          // for (
          widgetList = Canvas.getWidgetList();
        }
        let orders = widgetList.map(item => item.order).sort((a, b) => a - b);
        let _order = orders.find(item => item > order);
        let item = widgetList.find(item => _order == item.order);
        let { id = "" } = item;
        activeCom.order = _order;
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        info.order = order;
        obj?.refresh();
      } else {
        widgetList = Canvas.getWidgetList();
        // order = Math.min(...activeComs.map(item => item.order));
        let orders = widgetList.map(item => item.order).sort((a, b) => a - b);
        let _order = orders.find(item => item > order);
        activeCom.order = _order;
        bm_active_com_ids.forEach(id => {
          let obj = bm_widgetMap[id];
          let { info = {} } = obj || {};
          info.order = order;
          obj?.refresh();
        });
      }
    },
    // 下移一层
    moveDownEvent() {
      // this.showContextMenuStatus = false;
      let widgetList = [];
      let { activeCom = {} } = this;
      let bm_widgetMap = window.bm_widgetMap;
      let { order = "", parentId = "" } = activeCom || {};
      let bm_active_com_ids = window.bm_active_com_ids;
      let { length = 0 } = bm_active_com_ids || [];
      // let widgetList = _widgetList || [];
      if (length < 2) {
        if (parentId) {
          let parent = bm_widgetMap[parentId];
          let { children = [] } = parent || {};
          widgetList = children || [];
        } else {
          // for (

          widgetList = Canvas.getWidgetList();
        }
        // let obj = widgetList.find(item => order > item.order);
        // let { order: _order = "" } = obj || {};
        let orders = widgetList.map(item => item.order).sort((a, b) => b - a);
        // bmCommon.log("orders=>", orders, order);
        let _order = orders.find(item => item < order);
        let item = widgetList.find(item => _order == item.order);
        let { id = "" } = item;
        activeCom.order = _order;
        let obj = bm_widgetMap[id];
        let { info = {} } = obj || {};
        info.order = order;
        obj?.refresh();
      } else {
        widgetList = Canvas.getWidgetList();
        // order = Math.max(...activeComs.map(item => item.order));
        let orders = widgetList.map(item => item.order).sort((a, b) => b - a);
        let _order = orders.find(item => item < order);
        activeCom.order = _order;
        bm_active_com_ids.forEach(id => {
          let obj = bm_widgetMap[id];
          let { info = {} } = obj || {};
          info.order = order;
          obj?.refresh();
        });
      }
    },
    // 置底
    moveBottomEvent() {
      // this.showContextMenuStatus = false;
      let widgetList = [];
      let { activeCom = {} } = this;
      let bm_widgetMap = window.bm_widgetMap;
      let { parentId = "" } = activeCom || {};
      // let widgetList = _widgetList || [];
      if (parentId) {
        let parent = bm_widgetMap[parentId];
        let { children = [] } = parent || {};
        widgetList = children || [];
      } else {
        widgetList = Canvas.getWidgetList();
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
      let widgetList = [];
      let { activeCom = {} } = this;
      let bm_widgetMap = window.bm_widgetMap;
      let { parentId = "" } = activeCom || {};
      // let widgetList = _widgetList || [];
      if (parentId) {
        let parent = bm_widgetMap[parentId];
        let { children = [] } = parent || {};
        widgetList = children || [];
      } else {
        widgetList = Canvas.getWidgetList();
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
    //添加自定义组件
    widgetCustomAddFunc(options, callback) {
      let value = {};
      if (this._widgetCustomAddStatus) {
        return;
      }
      this._widgetCustomAddStatus = true;
      this.widgetCustomAddAction(options)
        .then(({ data }) => {
          let { code = "", result = {}, message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
            this.$$msgSuccess("添加自定义组件成功");
            callback && callback(value);
          } else {
            this.$$msgError(message || "添加自定义组件失败");
            // bmCommon.error(message || "添加自定义组件失败");
          }
          this._widgetCustomAddStatus = false;
        })
        .catch(err => {
          this._widgetCustomAddStatus = false;
          this.$$msgError("添加自定义组件失败");
          bmCommon.error("添加自定义组件失败", err);
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
