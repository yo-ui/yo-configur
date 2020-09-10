<template>
  <div class="bm-line-style-com">
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
    <!-- <p>
      <span class="label"> {{ $lang("文本名称") }}: </span>
      <el-input
        v-model="info.name"
        clearable
        :placeholder="$lang('请输入文本名称')"
      ></el-input>
    </p> -->
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
      <span class="label"> {{ $lang("宽度") }}:</span
      >{{ $toBig(info.width || info.originWidth, 0) }} px
      <el-slider
        v-if="info.scaleable"
        v-model="info.width"
        :max="1980"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("高度") }}:</span
      >{{ $toBig(info.height || info.originHeight, 0) }} px
      <el-slider
        v-if="info.scaleable"
        v-model="info.height"
        :max="1080"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("横坐标") }}:</span>{{ $toBig(info.left,0) }} px
      <el-slider
        v-model="info.left"
        :max="1980"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("纵坐标") }}:</span>{{ $toBig(info.top,0) }} px
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
      <span class="label"> {{ $lang("透明度") }}:</span>{{ info.opacity }}
      <el-slider
        v-model="info.opacity"
        :min="0"
        :max="100"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("是否可移动") }}:</span
      ><el-checkbox v-model="info.dragable"></el-checkbox>
    </p>
    <p>
      <span class="label"> {{ $lang("背景图片") }}:</span>
      <bm-upload ref="bmUpload" @success="successCallback">
        <el-button type="primary">
          {{ $lang(info.backgroundImage ? "替换图片" : "选择图片") }}</el-button
        >
      </bm-upload>
    </p>
    <template v-if="info.backgroundImage">
      <p>
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
        <span class="label"> {{ $lang("展示方式") }}:</span>
        <el-select
          v-model="info.backgroundSize"
          :placeholder="$lang('请选择展示方式')"
        >
          <el-option
            v-for="item in lineFormList"
            :key="item.code"
            :label="$lang(item.name)"
            :value="item.code"
          >
          </el-option>
        </el-select>
      </p>
    </template>
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
    <p>
      <span class="label">{{ $lang("背景色") }}:</span>
      <el-color-picker
        v-model="info.backgroundColor"
        show-alpha
      ></el-color-picker>
    </p>
    <!-- <p>
      <span class="label">{{ $lang("字体颜色") }}:</span>
      <el-color-picker v-model="info.color" show-alpha></el-color-picker>
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
    </p> -->
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
      <span class="label"> {{ $lang("边框大小") }}:</span
      >{{ info.borderWidth }} px
      <el-slider
        v-model="info.borderWidth"
        :min="0"
        :max="20"
        :format-tooltip="val => val + ' px'"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("边框圆角") }}:</span
      >{{ info.borderRadius }} px
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

    <h2>{{ $lang("交互") }}</h2>
    <h2>{{ $lang("动画") }}</h2>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "lineStyleCom",
  data() {
    return {
      borderStyleList: Object.freeze(Constants.BORDERSTYLELIST),
      flipModeList: Object.freeze(Constants.FLIPMODELIST),
      lineFormList: Object.freeze(Constants.DISPLAYFORMLIST),
      // fontFamilyList: Object.freeze(Constants.FONTFAMILYLIST),
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
    ...mapGetters()
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    successCallback(url) {
      let { info = {} } = this;
      info.backgroundImage = url;
    },
    // setFontWeight() {
    //   let { info = {} } = this;
    //   let { fontWeight = "" } = info || {};
    //   if (fontWeight == "bold") {
    //     fontWeight = "";
    //   } else {
    //     fontWeight = "bold";
    //   }
    //   info.fontWeight = fontWeight;
    // },
    // setTextDecoration() {
    //   let { info = {} } = this;
    //   let { textDecoration = "" } = info || {};
    //   if (textDecoration == "underline") {
    //     textDecoration = "";
    //   } else {
    //     textDecoration = "underline";
    //   }
    //   info.textDecoration = textDecoration;
    // },
    // setFontStyle() {
    //   let { info = {} } = this;
    //   let { fontStyle = "" } = info || {};
    //   if (fontStyle == "italic") {
    //     fontStyle = "";
    //   } else {
    //     fontStyle = "italic";
    //   }
    //   info.fontStyle = fontStyle;
    // }
  }
};
</script>

<style lang="less">
// @import (reference) "./../../../../assets/less/common.less";
// .bm-image-style-com {
// }
</style>
