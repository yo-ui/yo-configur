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
      <span class="label"> {{ $lang("宽度") }}:</span>{{ info.width }} px
      <el-slider
        v-model="info.width"
        :max="1980"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("高度") }}:</span>{{ info.height }} px
      <el-slider
        v-model="info.height"
        :max="1080"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("横坐标") }}:</span>{{ info.left }} px
      <el-slider
        v-model="info.left"
        :max="1980"
        :format-tooltip="val => val"
      ></el-slider>
    </p>
    <p>
      <span class="label"> {{ $lang("纵坐标") }}:</span>{{ info.top }} px
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
            v-for="item in displayFormList"
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
    <p>
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
      <span class="label">{{ $lang("字体样式") }}:</span>
      <el-select
        v-model="info.fontFamily"
        :placeholder="$lang('请选择边框样式')"
      >
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
      <span class="label">{{ $lang("边框颜色") }}:</span>
      <el-color-picker v-model="info.borderColor" show-alpha></el-color-picker>
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
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "buttonStyleCom",
  data() {
    return {
      borderStyleList: Object.freeze(Constants.BORDERSTYLELIST),
      flipModeList: Object.freeze(Constants.FLIPMODELIST),
      displayFormList: Object.freeze(Constants.DISPLAYFORMLIST),
      fontFamilyList: Object.freeze(Constants.FONTFAMILYLIST),
      tileModeList: Object.freeze(Constants.TILEMODELIST)
    };
  },
  components: {
    bmUpload: () =>
      import(
        /* webpackChunkName: "bm-component-upload" */ "@/components/common/upload.vue"
      )
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
    ...mapGetters()
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    successCallback(url) {
      let { info = {} } = this;
      info.backgroundImage = url;
    }
  }
};
</script>

<style></style>
