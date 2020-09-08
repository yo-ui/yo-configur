<template>
  <div>
    <!-- <h2>{{ $lang("功能选择") }}</h2>
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
    </p> -->
    <h2>{{ $lang("参数") }}</h2>
    <p>
      <span class="label"> {{ $lang("按钮名称") }}: </span>
      <el-input
        v-model="info.name"
        clearable
        :placeholder="$lang('请输入按钮名称')"
      ></el-input>
    </p>
    <p>
      <span class="label"> {{ $lang("层级") }}: </span>
      {{ info.order }}
      <el-slider
        v-model="info.order"
        :max="200"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("宽度") }}:</span>{{ info.width }}
      <el-slider
        v-model="info.width"
        :max="1980"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("高度") }}:</span>{{ info.height }}
      <el-slider
        v-model="info.height"
        :max="1080"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("横坐标") }}:</span>{{ info.left }}
      <el-slider
        v-model="info.left"
        :max="1980"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("纵坐标") }}:</span>{{ info.top }}
      <el-slider
        v-model="info.top"
        :max="1080"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("旋转角度") }}:</span>{{ info.rotate }} deg
      <el-slider
        v-model="info.rotate"
        :min="-360"
        :max="360"
        :format-tooltip="val => val + ' deg'"
      ></el-slider>
    </p>
    <p>
      <span class="label">{{ $lang("按钮背景色") }}:</span>
      <!-- {{info.backgroundColor}} -->
      <el-color-picker
        v-model="info.backgroundColor"
        show-alpha
      ></el-color-picker>
    </p>
    <p>
      <span class="label">{{ $lang("按钮前景色") }}:</span>
      <!-- {{info.color}} -->
      <el-color-picker
        v-model="info.color"
        show-alpha
      ></el-color-picker>
    <p>
      <span class="label">{{ $lang("按钮边框颜色") }}:</span>
      <!-- {{info.borderColor}} -->
      <el-color-picker
        v-model="info.borderColor"
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
    <!-- <p>
      <span class="label"> {{ $lang("是否显示网格") }}:</span
      ><el-checkbox v-model="info.isGrid"></el-checkbox>
    </p>
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
    </p> -->

    <h2>{{ $lang("交互") }}</h2>
    <h2>{{ $lang("动画") }}</h2>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "buttonStyleCom",
  data() {
    return {};
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
    ...mapGetters(),
  },
  methods: {
    ...mapMutations({}),
  }
};
</script>

<style></style>
