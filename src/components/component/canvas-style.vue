<template>
  <div class="bm-canvas-style-com">
    <h2>{{ $lang("功能选择") }}</h2>
    <p>
      <i
        class="el-icon-rank"
        :class="{ active: info.action == 'select' }"
        @click="actionEvent('select')"
        :title="$lang('选择组件')"
      ></i>
      <i
        class="el-icon-thumb"
        :class="{ active: info.action == 'move' }"
        @click="actionEvent('move')"
        :title="$lang('移动画布')"
      ></i>
      <i
        class="bm-icon icon-paint"
        :class="{ active: info.action == 'paint' }"
        @click="actionEvent('paint')"
        :title="$lang('拼装水管')"
      ></i>
    </p>
    <h2>{{ $lang("参数") }}</h2>
    <p>
      <span class="label"> {{ $lang("组态标题") }}: </span>
      <el-input
        v-model="info.name"
        clearable
        :placeholder="$lang('请输入组态标题')"
      ></el-input>
    </p>
    <p>
      <span class="label"> {{ $lang("页面高度") }}:</span
      ><el-input-number
        clearable
        v-model.number="info.height"
        :placeholder="$lang('请输入页面高度')"
      ></el-input-number
      >px
    </p>
    <p>
      <span class="label"> {{ $lang("页面宽度") }}:</span
      ><el-input-number
        v-model.number="info.width"
        clearable
        :placeholder="$lang('请输入页面宽度')"
      ></el-input-number
      >px
    </p>
    <p>
      <span class="label">{{ $lang("页面背景色") }}:</span>
      <el-color-picker
        v-model="info.backgroundColor"
        show-alpha
      ></el-color-picker>
    </p>
    <!-- <p>
      <span class="label"> {{ $lang("页面背景图") }}:</span
      ><el-input
        v-model="info.name"
        :placeholder="$lang('请输入组态标题')"
      ></el-input>
    </p> -->
    <p>
      <span class="label"> {{ $lang("是否显示网格") }}:</span
      ><el-checkbox v-model="info.isGrid"></el-checkbox>
    </p>
    <template v-if="info.isGrid">
      <p>
        <span class="label"> {{ $lang("网格样式") }}:</span
        ><el-select
          v-model="info.gridStyle.type"
          @change="gridStyleChangeEvent"
          :placeholder="$lang('请选择网格样式')"
        >
          <el-option
            v-for="item in gridStyleList"
            :key="item.code"
            :label="$lang(item.name)"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </p>
      <p v-if="info.gridStyle.type == 6">
        <span class="col">
          <span class="label"> {{ $lang("网格宽") }}:</span
          ><el-input-number
            v-model.number="info.gridStyle.width"
            clearable
            :placeholder="$lang('请输入网格宽')"
          ></el-input-number
          >px
        </span>
        <span class="col">
          <span class="label">{{ $lang("网格高") }}: </span
          ><el-input-number
            v-model.number="info.gridStyle.height"
            clearable
            :placeholder="$lang('请输入网格高')"
          ></el-input-number
          >px
        </span>
      </p>
    </template>
    <p>
      <span class="label"> {{ $lang("缩放") }}:</span>
      <i
        class="el-icon-zoom-in"
        @click="zoomEvent(20)"
        :title="$lang('放大')"
      ></i>
      <i
        class="el-icon-zoom-out"
        @click="zoomEvent(-20)"
        :title="$lang('缩小')"
      ></i>
      <i
        class="el-icon-refresh-left"
        @click="zoomEvent()"
        :title="$lang('重置')"
      ></i>
    </p>

    <h2>{{ $lang("交互") }}</h2>
    <h2>{{ $lang("动画") }}</h2>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import COMPONENTLIBRARY from "@/common/conf/library";
const ASSIST = {};
COMPONENTLIBRARY.forEach(item => {
  let { code = "", comList = [] } = item || {};
  if (code == "assist") {
    comList.forEach(_item => {
      let { id = "" } = _item || {};
      ASSIST[id] = _item;
    });
  }
});
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "canvasStyleCom",
  data() {
    let gridStyleList = Object.freeze([
      { code: "1", name: "默认20*20", value: { width: 20, height: 20 } },
      { code: "2", name: "默认40*20", value: { width: 40, height: 20 } },
      { code: "3", name: "默认20*40", value: { width: 20, height: 40 } },
      { code: "4", name: "默认40*40", value: { width: 40, height: 40 } },
      { code: "5", name: "默认80*80", value: { width: 80, height: 80 } },
      { code: "6", name: "自定义网格", value: { width: 80, height: 80 } }
    ]);
    let gridStyleMap = {};
    gridStyleList.forEach(item => {
      gridStyleMap[item.code] = item || {};
    });
    return {
      gridStyleList,
      gridStyleMap
      // info: {
      //   action: "select" //move select
      // }
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters({
      zoom: "canvas/getZoom", //放大缩小
      wigetList: "canvas/getWigetList", //组件列表
      canvas: "canvas/getCanvas", //画布
      linkPoint: "canvas/getLinkPoint" //画布
    }),
    comStyle() {
      let { info = {} } = this;
      let { width = "", height = "", backgroundColor = "", color = "" } =
        info || {};
      return {
        width: width + "px",
        height: height + "px",
        backgroundColor,
        color
        // backgroundImage: 'url(' + val.backPic + ')',
        // color: val.color
      };
    }
  },
  mounted() {},
  methods: {
    ...mapMutations({
      setZoom: "canvas/setZoom",
      stopMove: "canvas/stopMove",
      canvasMoving: "canvas/canvasMoving",
      initMove: "canvas/initMove"
    }),
    ...mapActions(),
    actionEvent(item) {
      let { canvas = {} } = this;
      let { action = "" } = canvas || {};
      if (action == item) {
        return;
      }
      canvas.action = item;
      if (item == "move") {
        this.unCanvasPaintEvent();
        this.canvasMoveEvent();
      } else if (item == "paint") {
        this.unCanvasMoveEvent();
        this.canvasPaintEvent();
      } else {
        this.unCanvasMoveEvent();
      }
    },
    gridStyleChangeEvent() {
      let { info = {}, gridStyleMap = {} } = this;
      let { gridStyle = {} } = info || {};
      let { type = "" } = gridStyle || {};
      let obj = gridStyleMap[type] || {};
      let { value: _gridStyle = {} } = obj || {};
      let { width, height } = _gridStyle || {};
      gridStyle.width = width;
      gridStyle.height = height;
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
    unCanvasMoveEvent() {
      $(document).off("mousedown", this.mousedownEvent);
    },
    unCanvasPaintEvent() {
      $(document).off("mousedown", this.mousedownCanvasPaintEvent);
    },
    canvasMoveEvent() {
      $(document).on("mousedown", this.mousedownEvent);
    },
    canvasPaintEvent() {
      $(document).on("mousedown", this.mousedownCanvasPaintEvent);
    },
    mousedownEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let { canvas = {} } = this;
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let { left, top } = canvas || {};
      this.initMove({
        startX: x,
        startY: y,
        originX: left,
        originY: top
      });

      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);
    },
    mousemoveEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      this.canvasMoving({ x, y });
    },
    mouseupEvent(e) {
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      this.stopMove();
    },

    mousedownCanvasPaintEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let { wigetList = [], linkPoint = {} } = this;
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let { left = 0, top = 0 } = linkPoint || {};
      // let { left=0, top=0 } = canvas || {};
      this.initMove({
        startX: x,
        startY: y
        // originX: left,
        // originY: top
      });
      let angle = bmCommon.getAngles({
        point1: { x: left, y: top },
        point2: { x, y }
      });
      bmCommon.log("angle=", angle);
      wigetList.push(ASSIST);
      $(document).on("mousemove", this.mousemoveCanvasPaintEvent);
      $(document).on("mouseup", this.mouseupCanvasPaintEvent);
    },
    mousemoveCanvasPaintEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      this.canvasMoving({ x, y });
    },
    mouseupCanvasPaintEvent(e) {
      $(document).off("mousemove", this.mousemoveCanvasPaintEvent);
      $(document).off("mouseup", this.mouseupCanvasPaintEvent);
      this.stopMove();
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../assets/less/common.less";
.bm-canvas-style-com {
  // .bm-icon{

  // }
  p {
    .icon-paint {
      .bi("/static/img/configur/water.png");
      .p(18px);
      .ml(8);
      .bz(80%);
    }
  }
}
</style>
