<template>
  <div class="bm-nav-com">
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
      <!-- <el-button-group>
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
      </el-button-group> -->
      <el-button-group>
        <el-dropdown
          trigger="click"
          @command="spreadCommandEvent"
          placement="bottom-start"
        >
          <!-- :disabled="activeComs.length < 3" -->
          <el-button class="dropdown">
            <span class="txt">
              <i :class="`bomi bomi-${condition.spreadType}`"></i>
              {{ $lang("分布") }} </span
            ><i class="el-icon-caret-bottom"></i
          ></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="h-center"
              ><i class="bomi bomi-h-center"></i>水平分布</el-dropdown-item
            >
            <el-dropdown-item command="v-center"
              ><i class="bomi bomi-v-center"></i>垂直分布</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown
          trigger="click"
          @command="alignCommandEvent"
          placement="bottom-start"
        >
          <!-- :disabled="activeComs.length < 1" -->
          <el-button class="dropdown">
            <span class="txt">
              <i :class="`bomi bomi-align-${condition.alignType}`"></i>
              {{ $lang("对齐") }}
            </span>
            <i class="el-icon-caret-bottom"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="left"
              ><i class="bomi bomi-align-left"></i>左对齐</el-dropdown-item
            >
            <el-dropdown-item command="h-center"
              ><i class="bomi bomi-align-h-center"></i
              >水平居中</el-dropdown-item
            >
            <el-dropdown-item command="right"
              ><i class="bomi bomi-align-right"></i>右对齐</el-dropdown-item
            >
            <el-dropdown-item command="left-right"
              ><i class="bomi bomi-align-left-right"></i
              >左右对齐</el-dropdown-item
            >
            <el-dropdown-item command="top"
              ><i class="bomi bomi-align-top"></i>上对齐</el-dropdown-item
            >
            <el-dropdown-item command="v-center"
              ><i class="bomi bomi-align-v-center"></i
              >垂直居中</el-dropdown-item
            >
            <el-dropdown-item command="bottom"
              ><i class="bomi bomi-align-bottom"></i>下对齐</el-dropdown-item
            >
            <el-dropdown-item command="top-bottom"
              ><i class="bomi bomi-align-top-bottom"></i
              >上下对齐</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
        <!-- :disabled="
              !(
                activeComs.length > 0 ||
                (activeCom.type && activeCom.type != 'canvas')
              ) ||
                (topOrder == activeCom.order && bottomOrder == activeCom.order)
            " -->
        <el-dropdown
          trigger="click"
          @command="orderCommandEvent"
          placement="bottom-start"
        >
          <el-button class="dropdown">
            <span class="txt">
              <i class="bomi bomi-arrange"></i>
              {{ $lang("排列") }}
            </span>
            <i class="el-icon-caret-bottom"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              command="top"
              :disabled="topOrder == activeCom.order"
              ><i class="bomi bomi-move-top"></i>置顶</el-dropdown-item
            >
            <el-dropdown-item
              command="bottom"
              :disabled="bottomOrder == activeCom.order"
              ><i class="bomi bomi-move-bottom"></i>置底</el-dropdown-item
            >
            <el-dropdown-item
              command="up"
              :disabled="topOrder == activeCom.order"
              ><i class="bomi bomi-move-up"></i>前移</el-dropdown-item
            >
            <el-dropdown-item
              command="down"
              :disabled="bottomOrder == activeCom.order"
              ><i class="bomi bomi-move-down"></i>后移</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>

      <!-- <el-button-group>
        <el-button>
          <i class="el-icon-circle-plus-outline"></i>
          {{ $lang("添加到自定义") }}
        </el-button>
      </el-button-group> -->

      <el-button-group>
        <el-dropdown
          trigger="click"
          @command="setThemesEvent"
          placement="bottom-start"
        >
          <span>
            <el-button>
              <i class="el-icon-s-grid"></i>
              {{ $lang("皮肤") }} </el-button
            ><i class="el-icon-caret-bottom"></i
          ></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="white"
              ><i class="skin skin-white"></i>简洁白</el-dropdown-item
            >
            <el-dropdown-item command="black"
              ><i class="skin skin-black"></i>酷炫黑</el-dropdown-item
            >
            <el-dropdown-item command="blue"
              ><i class="skin skin-blue"></i>荧光蓝</el-dropdown-item
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
    <!-- <div class="title">
      {{ canvas.name }}
    </div> -->
    <div class="right">
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
    <bm-record ref="bmRecord"></bm-record>
    <bm-fallback ref="bmFallback"></bm-fallback>
    <bm-preview ref="bmPreview"></bm-preview>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
const html2canvas = require("@/common/lib/html2canvas");
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      condition: {
        // historyIndex: 0,
        alignType: "left",
        spreadType: "h-center"
      }
    };
  },
  components: {
    bmRecord: () =>
      import(/* webpackChunkName: "iot-record-com" */ "@/components/record"),
    bmPreview: () =>
      import(/* webpackChunkName: "iot-preview-com" */ "@/components/preview"),
    bmFallback: () =>
      import(/* webpackChunkName: "iot-fallback-com" */ "@/components/fallback")
  },
  computed: {
    ...mapGetters({
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
      setActiveCom: "canvas/setActiveCom",
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
      canvasSaveAction: "canvasSave",
      upload2OssAction: "upload2Oss"
    }),
    // 初始化
    init() {
      // this.storeProductFunc();
    },
    saveEvent() {
      let { canvas = {}, canvasData: data = {}, widgetList = [] } = this;
      let { width = "", height = "", canvasId: id = "" } = canvas || {};
      this.setCanvasData(data);
      if (!id) {
        return;
      }
      data.canvasData = {
        widgetList,
        canvas
      };
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
      let { activeCom = {}, widgetList = [] } = this;
      let { type = "" } = activeCom || {};
      if (!type || type == "canvas") {
        this.$$msgError(this.$lang("请选择要复制的组件"));
        return;
      }
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
      let { id = "", type = "" } = activeCom;
      if (!type || type == "canvas") {
        this.$$msgError(this.$lang("请选择要删除的组件"));
        return;
      }
      let index = widgetList.findIndex(item => id == item.id);
      if (index < 0) {
        this.$$msgError(this.$lang("请选择要删除的组件"));
        return;
      }
      widgetList.splice(index, 1);
      this.selectComAction();
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
    runEvent() {
      // this.$jumpPage(this.$RouterURL.preview.name);
      let { widgetList = [], canvas = {} } = this;
      this.setPreviewData({
        widgetList,
        canvas
      });
      this.$refs.bmPreview?.show();
      this.selectComAction(); //选中组件
      this.uploadImg();
    },
    uploadImg() {
      let { canvas = {} } = this;
      html2canvas($(".canvas-box")[0], {}).then(_canvas => {
        let blob = bmCommon.convertBase64ToBlob(_canvas.toDataURL());
        let formData = new FormData();
        formData.append("files", blob, `${Date.now()}.png`);
        formData.append("subDir", Constants.UPLOADDIR.FILE);
        this.upload2OssFunc(
          {
            formData
          },
          img => {
            let { poster = "" } = canvas || {};
            if (!poster) {
              canvas.poster = img;
            }
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
    },
    spreadCommandEvent(cmd) {
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
    },
    // 垂直分布
    spreadVCenterEvent() {
      let { activeComs = [] } = this;
      let { length = 0 } = activeComs || [];
      if (length < 3) {
        return;
      }
      let min = Math.min(...activeComs.map(item => Number(item.top)));
      let max = Math.max(
        ...activeComs.map(
          item =>
            Number(item.top) +
            (Number(item.height) || Number(item.originHeight))
        )
      );
      let range = (max - min) / (length - 1);
      let index = 1;
      activeComs.forEach(item => {
        let { height = "", top = "", originHeight = "" } = item || {};
        let _max = (Number(height) || Number(originHeight)) + Number(top);
        let _min = Number(top);
        if (min != _min && _max != max) {
          item.top =
            min + range * index - (Number(height) || Number(originHeight)) / 2;
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
      let max = Math.max(
        ...activeComs.map(
          item =>
            Number(item.left) + (Number(item.width) || Number(item.originWidth))
        )
      );
      let range = (max - min) / (length - 1);
      let index = 1;
      activeComs.forEach(item => {
        let { width = "", left = "", originWidth = "" } = item || {};
        let _max = (Number(width) || Number(originWidth)) + Number(left);
        let _min = Number(left);
        if (min != _min && _max != max) {
          item.left =
            min + range * index - (Number(width) || Number(originWidth)) / 2;
          index++;
        }
      });
    },
    alignCommandEvent(cmd) {
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
      activeCom.order = 1;
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
