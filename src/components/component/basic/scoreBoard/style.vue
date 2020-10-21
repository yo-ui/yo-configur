<template>
  <div class="bm-score-board-style-com">
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
    <h2>{{ info.name }}</h2>
    <!-- <p>
      <span class="label"> {{ $lang("图片名称") }}: </span>
      <el-input
        v-model="info.content"
        clearable
        :placeholder="$lang('请输入图片名称')"
      ></el-input>
    </p> -->
    <p>
      <span class="label"> {{ $lang("层级") }}: </span>
      <el-input-number
        controls-position="right"
        clearable
        v-model.number="info.order"
        :placeholder="$lang('请输入层级')"
      ></el-input-number>
      <el-slider
        v-model="info.order"
        :max="200"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("宽度") }}:</span>
      <template v-if="info.scaleable">
        <el-input-number
          controls-position="right"
          clearable
          v-model.number="info.width"
          :placeholder="$lang('请输入宽度')"
        ></el-input-number>
        px
      </template>
      <template v-else>
        {{ $toBig(info.width || info.originWidth, 0) }} px
      </template>
      <el-slider
        v-if="info.scaleable"
        v-model="info.width"
        :max="1980"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("高度") }}:</span
      ><template v-if="info.scaleable">
        <el-input-number
          controls-position="right"
          clearable
          v-model.number="info.height"
          :placeholder="$lang('请输入高度')"
        ></el-input-number>
        px
      </template>
      <template v-else>
        {{ $toBig(info.height || info.originHeight, 0) }} px
      </template>
      <el-slider
        v-if="info.scaleable"
        v-model="info.height"
        :max="1080"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("横坐标") }}:</span>{{ info.left }}
      <el-slider
        v-model="info.left"
        :max="3500"
        :min="-3500"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("纵坐标") }}:</span>{{ info.top }}
      <el-slider
        v-model="info.top"
        :max="3500"
        :min="-3500"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("旋转角度") }}:</span>
      <el-input-number
        controls-position="right"
        clearable
        :min="-360"
        :max="360"
        v-model.number="info.rotate"
        :placeholder="$lang('请输入旋转角度')"
      ></el-input-number>
      deg
      <el-slider
        v-model="info.rotate"
        :min="-360"
        :max="360"
        :format-tooltip="val => val + ' deg'"
      ></el-slider>
    </p>
    <p class="btn-box">
      <el-tooltip content="隐藏" placement="top" effect="dark">
        <i
          class="el-icon-view"
          :class="{ active: !info.visible }"
          @click="info.visible = !info.visible"
        ></i>
      </el-tooltip>
      <el-tooltip content="锁定" placement="top" effect="dark">
        <i
          class="el-icon-lock"
          :class="{ active: info.locked }"
          @click="info.locked = !info.locked"
        ></i>
      </el-tooltip>
      <el-tooltip content="垂直翻转" placement="top" effect="dark">
        <i
          class="bomi bomi-flip-v"
          :class="{ active: info.flipV }"
          @click="info.flipV = !info.flipV"
        ></i>
      </el-tooltip>
      <el-tooltip content="水平翻转" placement="top" effect="dark">
        <i
          class="bomi bomi-flip-h"
          :class="{ active: info.flipH }"
          @click="info.flipH = !info.flipH"
        ></i>
      </el-tooltip>
    </p>
    <p>
      <span class="label">{{ $lang("图片背景色") }}:</span>
      <el-color-picker
        v-model="info.backgroundColor"
        show-alpha
      ></el-color-picker>
    </p>
    <p>
      <span class="label"> {{ $lang("图片") }}:</span>
      <bm-upload ref="bmUpload" @success="successCallback">
        <el-button type="primary">
          {{ $lang(info.backgroundImage ? "替换图片" : "选择图片") }}</el-button
        >
      </bm-upload>
    </p>
    <template v-if="info.backgroundImage"
      ><p>
        <span class="label"> {{ $lang("平铺方式") }}:</span>
        <el-select
          v-model="info.backgroundRepeat"
          :placeholder="$lang('请选择平铺方式')"
        >
          <el-option
            v-for="item in tileModeList"
            :key="item.code"
            :label="$lang(item.name)"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </p>
      <p>
        <span class="label"> {{ $lang("填充模式") }}:</span>
        <el-select
          v-model="info.backgroundSize"
          :placeholder="$lang('请选择填充模式')"
        >
          <el-option
            v-for="item in BACKGROUNDSIZELIST"
            :key="item.code"
            :label="$lang(item.name)"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </p>
      <p>
        <span class="label"> {{ $lang("翻转方式") }}:</span>
        <el-select v-model="info.scale" :placeholder="$lang('请选择翻转方式')">
          <el-option
            v-for="item in flipModeList"
            :key="item.code"
            :label="$lang(item.name)"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </p>
    </template>

    <p class="margin-box">
      <span class="label">{{ $lang("外边距") }}:</span>
      <span class="c-box">
        <span>
          上<el-input-number
            controls-position="right"
            clearable
            v-model.number="info.marginTop"
            :placeholder="$lang('上外边距')"
          ></el-input-number>
        </span>
        <span>
          下<el-input-number
            controls-position="right"
            clearable
            v-model.number="info.marginBottom"
            :placeholder="$lang('下外边距')"
          ></el-input-number>
        </span>
        <span>
          左<el-input-number
            controls-position="right"
            clearable
            v-model.number="info.marginLeft"
            :placeholder="$lang('左外边距')"
          ></el-input-number>
        </span>
        <span>
          右<el-input-number
            controls-position="right"
            clearable
            v-model.number="info.marginRight"
            :placeholder="$lang('右外边距')"
          ></el-input-number>
        </span>
      </span>
    </p>
    <p class="padding-box">
      <span class="label">{{ $lang("内边距") }}:</span>
      <span class="c-box">
        <span>
          上<el-input-number
            controls-position="right"
            clearable
            v-model.number="info.paddingTop"
            :placeholder="$lang('上内边距')"
          ></el-input-number>
        </span>
        <span>
          下<el-input-number
            controls-position="right"
            clearable
            v-model.number="info.paddingBottom"
            :placeholder="$lang('下内边距')"
          ></el-input-number>
        </span>
        <span>
          左<el-input-number
            controls-position="right"
            clearable
            v-model.number="info.paddingLeft"
            :placeholder="$lang('左内边距')"
          ></el-input-number>
        </span>
        <span>
          右<el-input-number
            controls-position="right"
            clearable
            v-model.number="info.paddingRight"
            :placeholder="$lang('右内边距')"
          ></el-input-number>
        </span>
      </span>
    </p>
    <p>
      <span class="label">{{ $lang("字体颜色") }}:</span>
      <el-color-picker v-model="info.color" show-alpha></el-color-picker>
    </p>
    <p>
      <span class="label">{{ $lang("字体阴影") }}:</span>
      <el-switch
        v-model="info.textShadowable"
        active-color="#4195ea"
        inactive-color="#ccc"
      ></el-switch>
    </p>
    <template v-if="info.textShadowable">
      <p class="shadow-box">
        <span class="c-box">
          <span>
            <el-tooltip
              :content="$lang('X-X轴位移')"
              placement="top"
              effect="dark"
            >
              <span>X</span>
            </el-tooltip>
            <el-input-number
              controls-position="right"
              clearable
              v-model.number="info.shadow.x"
              :placeholder="$lang('X轴位移')"
            ></el-input-number>
          </span>
          <span>
            <el-tooltip
              :content="$lang('Y-Y轴位移')"
              placement="top"
              effect="dark"
            >
              <span>Y</span> </el-tooltip
            ><el-input-number
              controls-position="right"
              clearable
              v-model.number="info.shadow.y"
              :placeholder="$lang('Y轴位移')"
            ></el-input-number>
          </span>
        </span>
      </p>
      <p>
        <span class="label">{{ $lang("模糊半径") }}:</span>
        <el-input-number
          controls-position="right"
          clearable
          v-model.number="info.textShadow.blur"
          :placeholder="$lang('模糊半径')"
        ></el-input-number>
        px
        <el-slider
          v-model="info.textShadow.blur"
          :min="0"
          :max="50"
          :format-tooltip="val => val + ' px'"
        ></el-slider>
      </p>
      <p>
        <span class="label">{{ $lang("阴影颜色") }}:</span>
        <el-color-picker
          v-model="info.textShadow.color"
          show-alpha
        ></el-color-picker>
      </p>
    </template>
    <p class="align">
      <span class="label">{{ $lang("对齐") }}:</span>
      <i
        class="bomi bomi-text-left"
        @click="textAlignEvent('left')"
        :class="{ active: info.textAlign == 'left' }"
      ></i>
      <i
        class="bomi bomi-text-center"
        @click="textAlignEvent('center')"
        :class="{ active: info.textAlign == 'center' }"
      ></i>
      <i
        class="bomi bomi-text-right"
        @click="textAlignEvent('right')"
        :class="{ active: info.textAlign == 'right' }"
      ></i>
      <i
        class="bomi bomi-text-justify"
        @click="textAlignEvent('justify')"
        :class="{ active: info.textAlign == 'justify' }"
      ></i>
    </p>
    <p>
      <span class="label">{{ $lang("字体大小") }}:</span>
      {{ info.fontSize }} px
      <el-slider
        v-model="info.fontSize"
        :min="10"
        :max="100"
        :format-tooltip="val => val + ' px'"
      ></el-slider>
    </p>
    <p>
      <span class="label">{{ $lang("字体") }}:</span>
      <el-select v-model="info.fontFamily" :placeholder="$lang('请选择字体')">
        <el-option
          v-for="item in fontFamilyList"
          :key="item.code"
          :label="$lang(item.name)"
          :value="item.code"
        >
        </el-option>
      </el-select>
    </p>
    <p>
      <span class="label">{{ $lang("字体样式") }}:</span>
      <span class="font-style">
        <span
          class="bold"
          @click="setFontWeight"
          :title="$lang('粗体')"
          :class="{ active: info.fontWeight == 'bold' }"
          >B</span
        >
        <span
          class="italic"
          @click="setFontStyle"
          :title="$lang('斜体')"
          :class="{ active: info.fontStyle == 'italic' }"
          >I</span
        >
        <span
          class="underline"
          @click="setTextDecoration"
          :title="$lang('下划线')"
          :class="{ active: info.textDecoration == 'underline' }"
          >U</span
        >
      </span>
    </p>
    <p>
      <span class="label"> {{ $lang("边框样式") }}:</span
      ><el-select
        v-model="info.borderStyle"
        :placeholder="$lang('请选择边框样式')"
      >
        <el-option
          v-for="item in borderStyleList"
          :key="item.code"
          :label="$lang(item.name)"
          :value="item.code"
        >
        </el-option>
      </el-select>
    </p>
    <p>
      <span class="label"> {{ $lang("边框大小") }}:</span>
      <el-input-number
        controls-position="right"
        clearable
        :min="0"
        :max="20"
        v-model.number="info.borderWidth"
        :placeholder="$lang('请输入边框大小')"
      ></el-input-number>
      px
      <el-slider
        v-model="info.borderWidth"
        :min="0"
        :max="20"
        :format-tooltip="val => val + ' px'"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("边框圆角") }}:</span>
      <el-input-number
        controls-position="right"
        clearable
        :min="0"
        :max="50"
        v-model.number="info.borderRadius"
        :placeholder="$lang('请输入边框圆角')"
      ></el-input-number>
      px
      <el-slider
        v-model="info.borderRadius"
        :min="0"
        :max="50"
        :format-tooltip="val => val + ' px'"
      ></el-slider>
    </p>
    <p>
      <span class="label">{{ $lang("边框颜色") }}:</span>
      <el-color-picker v-model="info.borderColor" show-alpha></el-color-picker>
    </p>
    <p>
      <span class="label">{{ $lang("盒子阴影") }}:</span>
      <el-switch
        v-model="info.shadowable"
        active-color="#4195ea"
        inactive-color="#ccc"
      ></el-switch>
    </p>
    <template v-if="info.shadowable">
      <p class="shadow-box">
        <span class="c-box">
          <span>
            <el-tooltip
              :content="$lang('X-X轴位移')"
              placement="top"
              effect="dark"
            >
              <span>X</span>
            </el-tooltip>
            <el-input-number
              controls-position="right"
              clearable
              v-model.number="info.shadow.x"
              :placeholder="$lang('X轴位移')"
            ></el-input-number>
          </span>
          <span>
            <el-tooltip
              :content="$lang('Y-Y轴位移')"
              placement="top"
              effect="dark"
            >
              <span>Y</span> </el-tooltip
            ><el-input-number
              controls-position="right"
              clearable
              v-model.number="info.shadow.y"
              :placeholder="$lang('Y轴位移')"
            ></el-input-number>
          </span>
          <span>
            <el-tooltip
              :content="$lang('R-模糊半径')"
              placement="top"
              effect="dark"
            >
              <span>R</span> </el-tooltip
            ><el-input-number
              controls-position="right"
              clearable
              v-model.number="info.shadow.blur"
              :placeholder="$lang('模糊半径')"
            ></el-input-number>
          </span>
        </span>
      </p>
      <p>
        <span class="label">{{ $lang("阴影大小") }}:</span>
        <el-input-number
          controls-position="right"
          clearable
          v-model.number="info.shadow.spread"
          :placeholder="$lang('阴影大小')"
        ></el-input-number>
        px
        <el-slider
          v-model="info.shadow.spread"
          :min="0"
          :max="50"
          :format-tooltip="val => val + ' px'"
        ></el-slider>
      </p>
      <p>
        <span class="label">{{ $lang("阴影类型") }}:</span>
        <el-select
          v-model="info.shadow.type"
          :placeholder="$lang('请选择阴影类型')"
        >
          <el-option
            v-for="item in shadowTypeList"
            :key="item.code"
            :label="$lang(item.name)"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </p>
      <p>
        <span class="label">{{ $lang("阴影颜色") }}:</span>
        <el-color-picker
          v-model="info.shadow.color"
          show-alpha
        ></el-color-picker>
      </p>
    </template>

    <h2>{{ $lang("交互") }}</h2>
    <h2>{{ $lang("动画") }}</h2>
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "scoreBoardStyleCom",
  data() {
    return {
      borderStyleList: Object.freeze(Constants.BORDERSTYLELIST),
      backgroundTypeList: Object.freeze(Constants.BACKGROUNDTYPELIST),
      centerList: Object.freeze(Constants.CENTERLIST),
      radialShapeList: Object.freeze(Constants.RADIALSHAPELIST),
      shadowTypeList: Object.freeze(Constants.SHADOWTYPELIST),
      angelList: Object.freeze(Constants.ANGELLIST),
      gradientTypeList: Object.freeze(Constants.GRADIENTTYPELIST),
      flipModeList: Object.freeze(Constants.FLIPMODELIST),
      BACKGROUNDSIZELIST: Object.freeze(Constants.BACKGROUNDSIZELIST),
      fontFamilyList: Object.freeze(Constants.FONTFAMILYLIST),
      tileModeList: Object.freeze(Constants.TILEMODELIST)
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
  components: {
    bmUpload: () =>
      import(
        /* webpackChunkName: "bm-component-upload" */ "@/components/common/upload.vue"
      )
  },
  computed: {
    ...mapGetters(),
    gradientStyle() {
      let { info = {}, gradientStyleMap = [] } = this;
      let { gradientStyle = {} } = info || {};
      let {
        type = ""
        // angle = "",
        // center = "",
        // radialShape = "",
        // valueList = []
      } = gradientStyle || {};
      let styles = {
        backgroundImage: gradientStyleMap[type]
      };
      // let colors = valueList.map(item => `${item.code} ${item.value}%`);
      // styles.backgroundImage = gradientStyleMap[type]
      // if (type == "linear") {
      //   styles.backgroundImage = gradientStyleMap[type] `linear-gradient(${angle}deg, ${colors.join()})`;
      // } else if (type == "radial") {
      //   styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
      // }
      return styles;
    },
    gradientStyleMap() {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      let { angle = "", center = "", radialShape = "", valueList = [] } =
        gradientStyle || {};
      let colors = valueList.map(item => `${item.code} ${item.value}%`);
      return {
        linear: `linear-gradient(${angle}deg, ${colors.join()})`,
        radial: `radial-gradient(${radialShape} at ${center}, ${colors.join()})`
      };
    },
    gradientLinearStyle() {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      let { valueList = [] } = gradientStyle || {};
      let colors = valueList.map(item => `${item.code} ${item.value}%`);
      return `background-image:linear-gradient(90deg, ${colors.join()})`;
    }
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),

    successCallback(url) {
      let { info = {} } = this;
      info.backgroundImage = url;
    },
    sliderChangeEvent(values, index) {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      let { valueList = [] } = gradientStyle || {};
      let { length = 0 } = valueList || [];
      if (index == 0) {
        values[0] = 0;
        this.$refs.slider?.setValue(values);
      } else if (index == length - 1) {
        values[length - 1] = 100;
        this.$refs.slider?.setValue(values);
      }
      gradientStyle.valueIndex = index;
      valueList[index].value = values[index];
    },
    sliderDragStartEvent(index) {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      gradientStyle.valueIndex = index;
    },
    // sliderDraggingEvent(value, index) {
    //   this.sliderDragStartEvent(index);
    // },
    // sliderDragEndEvent(index) {
    //   this.sliderDragStartEvent(index);
    // },
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
    //添加渐变光圈
    addApertureEvent() {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      let { valueList = [], values = [] } = gradientStyle || {};
      let { length = 0 } = valueList || [];
      let item = (valueList || [])[length - 1];
      let { code = "", value = 0 } = item || {};
      value = parseInt(value / Math.pow(2, length - 1));
      let index = 1;
      valueList.splice(index, 0, { code, value });
      values.splice(index, 0, value);
      gradientStyle.valueIndex = index;
      this.$refs.slider?.focus(index + 1);
    },
    removeApertureEvent() {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      let { valueList = [], values = [], valueIndex = 0 } = gradientStyle || {};
      let { length = 0 } = valueList || [];
      // let item = (valueList || [])[length - 1];
      // let { code = "", value = 0 } = item || {};
      // value = parseInt(value / length);
      if (length > 2 && valueIndex > 0 && valueIndex < length - 1) {
        valueList.splice(valueIndex, 1);
        values.splice(valueIndex, 1);
        let index = 1;
        gradientStyle.valueIndex = index;
        this.$refs.slider?.focus(index + 1);
      }
    },
    setFontWeight() {
      let { info = {} } = this;
      let { fontWeight = "" } = info || {};
      if (fontWeight == "bold") {
        fontWeight = "";
      } else {
        fontWeight = "bold";
      }
      info.fontWeight = fontWeight;
    },
    setTextDecoration() {
      let { info = {} } = this;
      let { textDecoration = "" } = info || {};
      if (textDecoration == "underline") {
        textDecoration = "";
      } else {
        textDecoration = "underline";
      }
      info.textDecoration = textDecoration;
    },
    setFontStyle() {
      let { info = {} } = this;
      let { fontStyle = "" } = info || {};
      if (fontStyle == "italic") {
        fontStyle = "";
      } else {
        fontStyle = "italic";
      }
      info.fontStyle = fontStyle;
    },
    textAlignEvent(item) {
      let { info = {} } = this;
      info.textAlign = item;
    }
  }
};
</script>

<style lang="less">
// @import (reference) "./../../../../assets/less/common.less";
// .bm-image-style-com {
//   .upload-box {
//     .flex(1);
//   }
//   .el-upload-dragger {
//     .bor(none);
//     width: auto;
//     height: auto;
//   }
// }
</style>
