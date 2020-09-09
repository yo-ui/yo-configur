<template>
  <div>
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
      ><el-input
        clearable
        v-model.number="info.height"
        :placeholder="$lang('请输入页面高度')"
      ></el-input>
    </p>
    <p>
      <span class="label"> {{ $lang("页面宽度") }}:</span
      ><el-input
        v-model.number="info.width"
        clearable
        :placeholder="$lang('请输入页面宽度')"
      ></el-input>
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
          ><el-input
            v-model.number="info.gridStyle.width"
            clearable
            :placeholder="$lang('请输入网格宽')"
          ></el-input
          >px
        </span>
        <span class="col">
          <span class="label">{{ $lang("网格高") }}: </span
          ><el-input
            v-model.number="info.gridStyle.height"
            clearable
            :placeholder="$lang('请输入网格高')"
          ></el-input
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
      canvas: "canvas/getCanvas" //放大缩小
    }),
    comStyle() {
      let { info = {} } = this;
      let { width = "", height = "", backgroundColor = "", color = "" } =
        info || {};
      return {
        width: width + "px",
        height: height + "px",
        backgroundColor: backgroundColor,
        color: color
        // backgroundImage: 'url(' + val.backPic + ')',
        // color: val.color
      };
    }
  },
  mounted(){
    this.$nextTick(()=>{
      let $canvasBox=$('.canvas-box')
      let {info={}}=this
      let width=$canvasBox.width()
      let height=$canvasBox.height()
      info.width=width
      info.height=height
    })
  },
  methods: {
    ...mapMutations({
      setZoom: "canvas/setZoom",
      stopMove: "canvas/stopMove",
      canvasMoving: "canvas/canvasMoving",
      initMove: "canvas/initMove"
    }),
    actionEvent(item) {
      let { canvas = {} } = this;
      canvas.action = item;
      if (item == "move") {
        this.canvasMoveEvent();
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
    canvasMoveEvent() {
      $(document).on("mousedown", this.mousedownEvent);
    },
    mousedownEvent(e, type) {
      e.stopPropagation();
      e.preventDefault();
      let { canvas = {} } = this;
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      let { left, top } = canvas || {};
      this.type = type;
      this.initMove({
        startX: x,
        startY: y,
        originX: left,
        originY: top
      });
      // bmCommon.log(info, x, y, type);

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
    }
  }
};
</script>

<style></style>
