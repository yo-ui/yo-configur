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
    <h2>{{info.name}}</h2>
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
const ASSISTMAP = {};
COMPONENTLIBRARY.forEach(item => {
  let { code = "", comList = [] } = item || {};
  if (code == "assist") {
    comList.forEach(_item => {
      let { alias = "" } = _item || {};
      ASSISTMAP[alias] = _item;
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
      gridStyleMap,
      condition: {}
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
      widgetList: "canvas/getWidgetList", //组件列表
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
      setLinkPoint: "canvas/setLinkPoint", //设置连接点信息
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
        this.unCanvasPaintEvent();
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
      let { widgetList = [], linkPoint, condition } = this;
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      if (!linkPoint) {
        this.$$msgError("请先创建连接点");
        return;
      }
      let _offset = $(".view-box").offset();
      let offset = $(".content-box").offset();
      let { left: __left = 0, top: __top = 0 } = _offset || {};
      let { left: _left = 0, top: _top = 0 } = offset || {};
      let { left = 0, top = 0, width = 0, height = 0, alias = "" } =
        linkPoint || {};
      // let { left=0, top=0 } = canvas || {};
      // this.initMove({
      //   startX: x,
      //   startY: y
      //   // originX: left,
      //   // originY: top
      // });
      // let angle = bmCommon.getAngles({
      //   point1: { x: left, y: top },
      //   point2: { x, y }
      // });
      condition.startX = x;
      condition.startY = y;
      // let dis = {
      x = x - (left + _left + __left);
      y = y - (top + _top + __top);
      // };
      // let x = changeX - startX;
      // let y = changeY - startY;
      let item = {};
      let assist = "water_vertical"; //垂直
      //   assist = "water_horizontal"; //水平
      if (
        (x > 0 && y < 0 && x > Math.abs(y)) ||
        (x > 0 && y > 0 && x > y) ||
        (x > 0 && y == 0)
      ) {
        //右移动
        bmCommon.group("右移动");
        // left = left + width;
        // if (alias != "water_horizontal") {
        assist = "water_horizontal";
        // }
        let obj = ASSISTMAP[assist];
        let { data = {}, alias: _alias = "", name = "", code: type = "" } =
          obj || {};
        left = left + width;
        if (alias != "linkPoint" && alias != "water_horizontal") {
          top = top + height;
        }
        let id = bmCommon.uuid();
        let orders = widgetList.map(item => item.order);
        let order = Math.max(...orders);
        order += 1;
        item = {
          ...data,
          order,
          type,
          name,
          alias: _alias,
          id,
          left,
          top
        };
      } else if (
        (y > 0 && x < 0 && y > Math.abs(x)) ||
        (y > 0 && x > 0 && y > x) ||
        (y > 0 && x == 0)
      ) {
        //下移动
        bmCommon.group("下移动");
        // if (alias != "water_vertical") {
        assist = "water_vertical";
        // }
        let obj = ASSISTMAP[assist];
        let { data = {}, alias: _alias = "", name = "", code: type = "" } =
          obj || {};
        top = top + height;
        if (alias != "linkPoint" && alias != "water_vertical") {
          left = left + width;
        }
        let id = bmCommon.uuid();
        let orders = widgetList.map(item => item.order);
        let order = Math.max(...orders);
        order += 1;
        item = {
          ...data,
          order,
          type,
          name,
          alias: _alias,
          id,
          left,
          top
        };
      } else if (
        (x < 0 && y > 0 && Math.abs(x) > y) ||
        (x < 0 && y < 0 && Math.abs(x) > Math.abs(y)) ||
        (x < 0 && y == 0)
      ) {
        //左移动
        bmCommon.group("左移动");
        // if (alias != "water_horizontal") {
        assist = "water_horizontal";
        // }
        let obj = ASSISTMAP[assist];
        let {
          data = {},
          alias: _alias = "",
          name = "",
          code: type = "",
          width: _width = ""
        } = obj || {};
        left = left - width - _width;
        if (alias != "linkPoint" && alias != "water_horizontal") {
          top = top + height;
        }
        let id = bmCommon.uuid();
        let orders = widgetList.map(item => item.order);
        let order = Math.max(...orders);
        order += 1;
        item = {
          ...data,
          order,
          type,
          name,
          alias: _alias,
          id,
          left,
          top
        };
      } else if (
        (y < 0 && x < 0 && Math.abs(y) > Math.abs(x)) ||
        (y < 0 && x > 0 && Math.abs(y) > x) ||
        (y < 0 && x == 0)
      ) {
        //上移动
        bmCommon.group("上移动");
        // if (alias != "water_vertical") {
        assist = "water_vertical";
        // }
        let obj = ASSISTMAP[assist];
        let {
          data = {},
          alias: _alias = "",
          name = "",
          code: type = "",
          height: _height = ""
        } = obj || {};
        top = top - height - _height;
        if (alias != "linkPoint" && alias != "water_vertical") {
          left = left + width;
        }
        let id = bmCommon.uuid();
        let orders = widgetList.map(item => item.order);
        let order = Math.max(...orders);
        order += 1;
        item = {
          ...data,
          order,
          type,
          name,
          alias: _alias,
          id,
          left,
          top
        };
      } else if (x == 0 && y == 0) {
        bmCommon.group("位置没变");
        return;
      }
      // let obj = ASSISTMAP[assist];
      // let { data = {}, alias: _alias = "", name = "", code: type = "" } =
      //   obj || {};
      // let id = bmCommon.uuid();
      // let orders = widgetList.map(item => item.order);
      // let order = Math.max(...orders);
      // order += 1;
      // let item = {
      //   ...data,
      //   order,
      //   type,
      //   name,
      //   alias: _alias,
      //   id,
      //   left,
      //   top
      // };
      widgetList.push(item);
      this.setLinkPoint(item);
      // bmCommon.log(dis, "paint");
      // let assist = "water_vertical"; //垂直
      // if (dis.x > dis.y) {
      //   assist = "water_horizontal"; //水平
      //   left = left + width;
      // } else {
      //   top = top + height;
      // }
      // let obj = ASSISTMAP[assist];
      // let { data = {}, alias = "", name = "", code: type = "" } = obj || {};
      // let id = bmCommon.uuid();
      // let orders = widgetList.map(item => item.order);
      // let order = Math.max(...orders);
      // order += 1;
      // let item = {
      //   ...data,
      //   order,
      //   type,
      //   name,
      //   alias,
      //   id,
      //   left,
      //   top
      // };
      // widgetList.push(item);
      // this.setLinkPoint(item);
      $(document).on("mousemove", this.mousemoveCanvasPaintEvent);
      $(document).on("mouseup", this.mouseupCanvasPaintEvent);
    },
    mousemoveCanvasPaintEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      // let { widgetList = [], linkPoint, condition } = this;
      // let pos = bmCommon.getMousePosition(e);
      // let { x: changeX = "", y: changeY = "" } = pos || {};
      // let { startX = "", startY = "" } = condition;
      // let x = changeX - startX;
      // let y = changeY - startY;
      // if (
      //   (x > 0 && y < 0 && x > Math.abs(y)) ||
      //   (x > 0 && y > 0 && x > y) ||
      //   (x > 0 && y == 0)
      // ) {
      //   //右移动
      //   bmCommon.group("右移动");
      // } else if (
      //   (y > 0 && x < 0 && y > Math.abs(x)) ||
      //   (y > 0 && x > 0 && y > x) ||
      //   (y > 0 && x == 0)
      // ) {
      //   //下移动
      //   bmCommon.group("下移动");
      // } else if (
      //   (x < 0 && y > 0 && Math.abs(x) > y) ||
      //   (x < 0 && y < 0 && Math.abs(x) > Math.abs(y)) ||
      //   (x < 0 && y == 0)
      // ) {
      //   //左移动
      //   bmCommon.group("左移动");
      // } else if (
      //   (y < 0 && x < 0 && Math.abs(y) > Math.abs(x)) ||
      //   (y < 0 && x > 0 && Math.abs(y) > x) ||
      //   (y < 0 && x == 0)
      // ) {
      //   //上移动
      //   bmCommon.group("上移动");
      // } else if (x == 0 && y == 0) {
      //   bmCommon.group("位置没变");
      // }
      // this.canvasMoving({ x, y });
      // condition.startX = changeX;
      // condition.startY = changeY;
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
