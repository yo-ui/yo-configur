<template>
  <div class="bm-canvas-style-com">
    <el-collapse v-model="activeNames">
      <el-collapse-item :title="$lang('功能选择')" name="function">
        <p>
          <el-tooltip
            :content="$lang('选择组件')"
            placement="top"
            effect="dark"
          >
            <i
              class="el-icon-rank"
              :class="{ active: info.action == 'select' }"
              @click="actionEvent('select')"
              :title="$lang('选择组件')"
            ></i>
          </el-tooltip>
          <el-tooltip
            :content="$lang('移动画布')"
            placement="top"
            effect="dark"
          >
            <i
              class="el-icon-thumb"
              :class="{ active: info.action == 'move' }"
              @click="actionEvent('move')"
              :title="$lang('移动画布')"
            ></i>
          </el-tooltip>
          <!-- <el-tooltip
            :content="$lang('拼装水管')"
            placement="top"
            effect="dark"
          >
            <i
              class="bm-icon icon-paint"
              :class="{ active: info.action == 'paint' }"
              @click="actionEvent('paint')"
              :title="$lang('拼装水管')"
            ></i>
          </el-tooltip> -->
          <el-tooltip :content="$lang('放大')" placement="top" effect="dark">
            <i
              class="el-icon-zoom-in"
              @click="zoomEvent(20)"
              :title="$lang('放大')"
            ></i>
          </el-tooltip>
          <el-tooltip :content="$lang('缩小')" placement="top" effect="dark">
            <i
              class="el-icon-zoom-out"
              @click="zoomEvent(-20)"
              :title="$lang('缩小')"
            ></i>
          </el-tooltip>
          <el-tooltip :content="$lang('重置')" placement="top" effect="dark">
            <i
              class="el-icon-refresh-left"
              @click="zoomEvent()"
              :title="$lang('重置')"
            ></i>
          </el-tooltip>
        </p>
      </el-collapse-item>
      <el-collapse-item :title="$lang('画布')" name="name">
        <p>
          <span class="label"> {{ $lang("画布封面") }}: </span>
          <bm-upload ref="bmUpload" @success="successPosterCallback">
            <el-button type="primary">
              {{
                $lang(
                  info.uploadPoster || info.poster ? "替换图片" : "选择图片"
                )
              }}</el-button
            >
          </bm-upload>
          <el-button v-if="info.uploadPoster" @click="info.uploadPoster = ''">{{
            $lang("重置")
          }}</el-button>
        </p>
        <p>
          <span class="label"></span>
          <span
            class="img-box"
            :style="
              info.uploadPoster || info.poster
                ? `background-image:url(${$loadImgUrl(
                    info.uploadPoster || info.poster
                  )})`
                : ''
            "
          >
          </span>
        </p>
        <p>
          <span class="label"> {{ $lang("组态标题") }}: </span>
          <el-input
            v-model="info.name"
            clearable
            :placeholder="$lang('请输入组态标题')"
          ></el-input>
        </p>
        <p>
          <span class="label"> {{ $lang("画布宽度") }}:</span>
          <el-tooltip
            :content="$lang('请输入画布宽度')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              v-model.number="info.width"
              clearable
              :max="4000"
              :placeholder="$lang('请输入画布宽度')"
            ></el-input-number>
          </el-tooltip>
          <el-slider
            v-model="info.width"
            :max="4000"
            :format-tooltip="val => val"
          ></el-slider>
        </p>
        <p>
          <span class="label"> {{ $lang("画布高度") }}:</span>

          <el-tooltip
            :content="$lang('请输入画布高度')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              clearable
              :max="4000"
              v-model.number="info.height"
              :placeholder="$lang('请输入画布高度')"
            ></el-input-number
          ></el-tooltip>
          <el-slider
            v-model="info.height"
            :max="4000"
            :format-tooltip="val => val"
          ></el-slider>
        </p>
        <!-- <p>
          <span class="label">{{ $lang("页面背景") }}:</span>
          <el-color-picker
            v-model="info.pageColor"
            show-alpha
          ></el-color-picker>
        </p> -->
        <p>
          <span class="label">{{ $lang("填充颜色") }}:</span>
          <el-select
            v-model="info.backgroundType"
            :placeholder="$lang('请选择填充颜色')"
          >
            <el-option
              v-for="item in backgroundTypeList"
              :key="item.code"
              :label="$lang(item.name)"
              :value="item.code"
            >
            </el-option>
          </el-select>
        </p>
        <p v-if="info.backgroundType == 'purity'">
          <span class="label">{{ $lang("纯色") }}:</span>
          <el-color-picker
            v-model="info.backgroundColor"
            show-alpha
          ></el-color-picker>
        </p>
        <template v-if="info.backgroundType == 'gradient'">
          <p>
            <span class="label">{{ $lang("渐变颜色") }}:</span>
            <span class="gradient" :style="gradientStyle(info)"></span>
            <!-- {{ gradientStyle }} -->
          </p>
          <p>
            <span class="label">{{ $lang("渐变类型") }}:</span>
            <el-radio-group
              class="gradient-type-group"
              v-model="info.gradientStyle.type"
            >
              <el-radio-button
                :style="`background-image:${gradientStyleMap(info)[item.code]}`"
                :title="item.name"
                v-for="item in gradientTypeList"
                :key="item.code"
                :label="item.code"
              >
                {{ item.name }}
              </el-radio-button>
            </el-radio-group>
          </p>
          <template v-if="info.gradientStyle.type == 'radial'">
            <p>
              <span class="label">{{ $lang("中心") }}:</span>
              <el-select
                v-model="info.gradientStyle.center"
                :placeholder="$lang('请选择中心位置')"
              >
                <el-option
                  v-for="item in centerList"
                  :key="item.code"
                  :label="$lang(item.name)"
                  :value="item.code"
                >
                </el-option>
              </el-select>
            </p>
            <p>
              <span class="label">{{ $lang("径向图形") }}:</span>
              <el-select
                v-model="info.gradientStyle.radialShape"
                :placeholder="$lang('请选择径向图形')"
              >
                <el-option
                  v-for="item in radialShapeList"
                  :key="item.code"
                  :label="$lang(item.name)"
                  :value="item.code"
                >
                </el-option>
              </el-select>
            </p>
          </template>
          <template v-if="info.gradientStyle.type == 'linear'">
            <p>
              <span class="label">{{ $lang("角度") }}:</span>
              <el-select
                v-model="info.gradientStyle.angle"
                :placeholder="$lang('请选择线性角度')"
              >
                <el-option
                  v-for="item in angelList"
                  :key="item.code"
                  :label="$lang(item.code)"
                  :value="item.code"
                >
                </el-option>
              </el-select>
            </p>
          </template>
          <!-- {{ info.gradientStyle }} -->
          <!-- {{ info.gradientStyle.valueList }} -->
          <p class="gradient-aperture">
            <span class="label">{{ $lang("渐变光圈") }}:</span>
            <el-button-group>
              <el-button
                plain
                :disabled="info.gradientStyle.valueList.length > 5"
                @click="addApertureEvent"
                ><i class="el-icon-plus"></i
              ></el-button>
              <el-button
                plain
                :disabled="info.gradientStyle.valueList.length < 3"
                @click="removeApertureEvent"
                ><i class="el-icon-minus"></i
              ></el-button>
            </el-button-group>
            <!-- {{ info.gradientStyle.valueList[info.gradientStyle.valueIndex].value }}
        {{ info.gradientStyle.valueIndex }} -->
            <el-input
              :value="
                info.gradientStyle.valueList[info.gradientStyle.valueIndex]
                  .value + ' %'
              "
              readonly
            ></el-input>
          </p>
          <p>
            <span class="label">{{ $lang("渐变节点颜色") }}</span>
            <el-color-picker
              color-format="hex"
              v-model="
                info.gradientStyle.valueList[info.gradientStyle.valueIndex].code
              "
              show-alpha
            ></el-color-picker>
            <el-input
              :value="
                info.gradientStyle.valueList[info.gradientStyle.valueIndex].code
              "
              readonly
            ></el-input>
          </p>
          <p>
            <vue-slider
              :height="25"
              ref="slider"
              :marks="false"
              :hide-label="true"
              :enable-cross="false"
              v-model="info.gradientStyle.values"
              :interval="1"
              @change="sliderChangeEvent"
              @drag-start="sliderDragStartEvent"
              :data-value="'value'"
            >
              <template #tooltip>
                <span></span>
              </template>
              <template #process>
                <div
                  class="vue-slider-process"
                  :style="gradientLinearStyle(info)"
                ></div>
              </template>
              <template #dot="{index}">
                <div class="dot-box">
                  <div
                    class="dot"
                    :style="
                      `background-color:${info.gradientStyle.valueList[index].code}`
                    "
                  ></div>
                </div>
              </template>
            </vue-slider>
          </p>
        </template>
        <p>
          <span class="label"> {{ $lang("背景图片") }}:</span>
          <bm-upload ref="bmUpload" @success="successCallback">
            <el-button type="primary">
              {{
                $lang(info.backgroundImage ? "替换图片" : "选择图片")
              }}</el-button
            >
          </bm-upload>
          <el-button
            v-if="info.backgroundImage"
            @click="info.backgroundImage = ''"
            >{{ $lang("重置") }}</el-button
          >
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
            <span class="label"> {{ $lang("填充模式") }}:</span>
            <el-select
              v-model="info.backgroundSize"
              :placeholder="$lang('请选择填充模式')"
            >
              <el-option
                v-for="item in backgroundSizeList"
                :key="item.code"
                :label="$lang(item.name)"
                :value="item.code"
              >
              </el-option>
            </el-select>
          </p>
        </template>
        <p>
          <span class="label"> {{ $lang("显示网格") }}:</span
          ><el-checkbox v-model="info.isGrid"></el-checkbox>
        </p>
        <p>
          <span class="label"> {{ $lang("显示缩放") }}:</span
          ><el-checkbox v-model="info.scaleable"></el-checkbox>
        </p>
        <p>
          <span class="label"> {{ $lang("是否锁定") }}:</span
          ><el-checkbox v-model="info.locked"></el-checkbox>
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
                controls-position="right"
                v-model.number="info.gridStyle.width"
                clearable
                :placeholder="$lang('请输入网格宽')"
              ></el-input-number
              >px
            </span>
            <span class="col">
              <span class="label">{{ $lang("网格高") }}: </span
              ><el-input-number
                controls-position="right"
                v-model.number="info.gridStyle.height"
                clearable
                :placeholder="$lang('请输入网格高')"
              ></el-input-number
              >px
            </span>
          </p>
        </template>
        <!-- <p>
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
      </el-collapse-item>
      <el-collapse-item :title="$lang('页面')" name="page">
        <p>
          <span class="label">{{ $lang("填充颜色") }}:</span>
          <el-select
            v-model="info.page.backgroundType"
            :placeholder="$lang('请选择填充颜色')"
          >
            <el-option
              v-for="item in backgroundTypeList"
              :key="item.code"
              :label="$lang(item.name)"
              :value="item.code"
            >
            </el-option>
          </el-select>
        </p>
        <template v-if="info.page.backgroundType == 'purity'">
          <p>
            <span class="label">{{ $lang("纯色") }}:</span>
            <el-color-picker
              v-model="info.pageColor"
              show-alpha
            ></el-color-picker>
          </p>

          <p>
            <span class="label"> {{ $lang("背景图片") }}:</span>
            <bm-upload ref="bmUpload" @success="successPageCallback">
              <el-button type="primary">
                {{
                  $lang(info.page.backgroundImage ? "替换图片" : "选择图片")
                }}</el-button
              >
            </bm-upload>
            <el-button
              v-if="info.page.backgroundImage"
              @click="info.page.backgroundImage = ''"
              >{{ $lang("重置") }}</el-button
            >
          </p>
          <template v-if="info.page.backgroundImage">
            <p>
              <span class="label"> {{ $lang("平铺方式") }}:</span>
              <el-select
                v-model="info.page.backgroundRepeat"
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
                v-model="info.page.backgroundSize"
                :placeholder="$lang('请选择填充模式')"
              >
                <el-option
                  v-for="item in backgroundSizeList"
                  :key="item.code"
                  :label="$lang(item.name)"
                  :value="item.code"
                >
                </el-option>
              </el-select>
            </p>
          </template>
        </template>
        <template v-if="info.page.backgroundType == 'gradient'">
          <p>
            <span class="label">{{ $lang("渐变颜色") }}:</span>
            <span class="gradient" :style="gradientStyle(info.page)"></span>
          </p>
          <p>
            <span class="label">{{ $lang("渐变类型") }}:</span>
            <el-radio-group
              class="gradient-type-group"
              v-model="info.page.gradientStyle.type"
            >
              <el-radio-button
                :style="
                  `background-image:${gradientStyleMap(info.page)[item.code]}`
                "
                :title="item.name"
                v-for="item in gradientTypeList"
                :key="item.code"
                :label="item.code"
              >
                {{ item.name }}
              </el-radio-button>
            </el-radio-group>
          </p>
          <template v-if="info.page.gradientStyle.type == 'radial'">
            <p>
              <span class="label">{{ $lang("中心") }}:</span>
              <el-select
                v-model="info.gradientStyle.center"
                :placeholder="$lang('请选择中心位置')"
              >
                <el-option
                  v-for="item in centerList"
                  :key="item.code"
                  :label="$lang(item.name)"
                  :value="item.code"
                >
                </el-option>
              </el-select>
            </p>
            <p>
              <span class="label">{{ $lang("径向图形") }}:</span>
              <el-select
                v-model="info.page.gradientStyle.radialShape"
                :placeholder="$lang('请选择径向图形')"
              >
                <el-option
                  v-for="item in radialShapeList"
                  :key="item.code"
                  :label="$lang(item.name)"
                  :value="item.code"
                >
                </el-option>
              </el-select>
            </p>
          </template>
          <template v-if="info.page.gradientStyle.type == 'linear'">
            <p>
              <span class="label">{{ $lang("角度") }}:</span>
              <el-select
                v-model="info.page.gradientStyle.angle"
                :placeholder="$lang('请选择线性角度')"
              >
                <el-option
                  v-for="item in angelList"
                  :key="item.code"
                  :label="$lang(item.code)"
                  :value="item.code"
                >
                </el-option>
              </el-select>
            </p>
          </template>
          <p class="gradient-aperture">
            <span class="label">{{ $lang("渐变光圈") }}:</span>
            <el-button-group>
              <el-button
                plain
                :disabled="info.page.gradientStyle.valueList.length > 5"
                @click="addApertureEvent(info.page, 'pageSlider')"
                ><i class="el-icon-plus"></i
              ></el-button>
              <el-button
                plain
                :disabled="info.page.gradientStyle.valueList.length < 3"
                @click="removeApertureEvent(info.page, 'pageSlider')"
                ><i class="el-icon-minus"></i
              ></el-button>
            </el-button-group>
            <el-input
              :value="
                info.page.gradientStyle.valueList[
                  info.page.gradientStyle.valueIndex
                ].value + ' %'
              "
              readonly
            ></el-input>
          </p>
          <p>
            <span class="label">{{ $lang("渐变节点颜色") }}</span>
            <el-color-picker
              color-format="hex"
              v-model="
                info.page.gradientStyle.valueList[
                  info.page.gradientStyle.valueIndex
                ].code
              "
              show-alpha
            ></el-color-picker>
            <el-input
              :value="
                info.page.gradientStyle.valueList[
                  info.page.gradientStyle.valueIndex
                ].code
              "
              readonly
            ></el-input>
          </p>
          <p>
            <vue-slider
              :height="25"
              ref="pageSlider"
              :marks="false"
              :hide-label="true"
              :enable-cross="false"
              v-model="info.page.gradientStyle.values"
              :interval="1"
              @change="pageSliderChangeEvent"
              @drag-start="pageSliderDragStartEvent"
              :data-value="'value'"
            >
              <template #tooltip>
                <span></span>
              </template>
              <template #process>
                <div
                  class="vue-slider-process"
                  :style="gradientLinearStyle(info.page)"
                ></div>
              </template>
              <template #dot="{index}">
                <div class="dot-box">
                  <div
                    class="dot"
                    :style="
                      `background-color:${info.page.gradientStyle.valueList[index].code}`
                    "
                  ></div>
                </div>
              </template>
            </vue-slider>
          </p>
        </template>
      </el-collapse-item>
      <!-- <el-collapse-item title="交互" name="3"> </el-collapse-item>
      <el-collapse-item :title="$lang('动画')" name="4">
        <el-select v-model="info.animate" placeholder="请选择动画类型">
          <el-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-collapse-item> -->
    </el-collapse>
    <!-- <h2>{{ $lang("功能选择") }}</h2> -->

    <!-- <h2>{{ $lang("交互") }}</h2>
    <h2>{{ $lang("动画") }}</h2> -->
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// import {componentLibrary} from "@/common/conf/library";
import { Constants } from "@/common/env";
const ASSISTMAP = Constants.COMPONENTLIBRARYMAP;
// Constants.COMPONENTLIBRARY.forEach(item => {
//   let { code = "", comList = [] } = item || {};
//   if (code == "assist") {
//     comList.forEach(_item => {
//       let { alias = "" } = _item || {};
//       ASSISTMAP[alias] = _item;
//     });
//   }
// });
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
      activeNames: ["function", "page", "name"],
      gridStyleList,
      flipModeList: Object.freeze(Constants.FLIPMODELIST),
      backgroundSizeList: Object.freeze(Constants.BACKGROUNDSIZELIST),
      // fontFamilyList: Object.freeze(Constants.FONTFAMILYLIST),
      tileModeList: Object.freeze(Constants.TILEMODELIST),
      gridStyleMap,
      backgroundTypeList: Object.freeze(Constants.BACKGROUNDTYPELIST),
      centerList: Object.freeze(Constants.CENTERLIST),
      radialShapeList: Object.freeze(Constants.RADIALSHAPELIST),
      angelList: Object.freeze(Constants.ANGELLIST),
      gradientTypeList: Object.freeze(Constants.GRADIENTTYPELIST),
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
    gradientStyle() {
      return info => {
        let { gradientStyleMap } = this;
        let { gradientStyle = {} } = info || {};
        let { type = "" } = gradientStyle || {};
        let styles = {
          backgroundImage: gradientStyleMap(info)[type]
        };
        return styles;
      };
    },
    gradientStyleMap() {
      return info => {
        // let { info = {} } = this;
        let { gradientStyle = {} } = info || {};
        let { angle = "", center = "", radialShape = "", valueList = [] } =
          gradientStyle || {};
        let colors = valueList.map(item => `${item.code} ${item.value}%`);
        return {
          linear: `linear-gradient(${angle}deg, ${colors.join()})`,
          radial: `radial-gradient(${radialShape} at ${center}, ${colors.join()})`
        };
      };
    },
    gradientLinearStyle() {
      return info => {
        // let { info = {} } = this;
        let { gradientStyle = {} } = info || {};
        let { valueList = [] } = gradientStyle || {};
        let colors = valueList.map(item => `${item.code} ${item.value}%`);
        return `background-image:linear-gradient(90deg, ${colors.join()})`;
      };
    }
  },
  mounted() {
    let { canvas = {} } = this;
    this.$nextTick(() => {
      let $canvas_box = $(".canvas-box");
      let width = $canvas_box.width();
      let height = $canvas_box.height();
      if (!canvas.width && !canvas.height) {
        canvas.width = Number(width);
        canvas.height = Number(height);
      }
    });
    //监控画布操作
    $vm.$on("canvas-action", item => {
      this.actionEvent(item);
    });
  },
  components: {
    bmUpload: () =>
      import(
        /* webpackChunkName: "bm-component-upload" */ "@/components/common/upload.vue"
      )
  },
  beforeDestroy() {
    $(document).off("mousedown", this.mousedownEvent);
    $(document).off("mousedown", this.mousedownCanvasPaintEvent);
  },
  methods: {
    ...mapMutations({
      setZoom: "canvas/setZoom",
      setLinkPoint: "canvas/setLinkPoint", //设置连接点信息
      stopMove: "canvas/stopMove",
      canvasMoving: "canvas/canvasMoving",
      initMove: "canvas/initMove"
    }),
    ...mapActions(),
    successCallback(url) {
      let { info = {} } = this;
      info.backgroundImage = url;
    },
    successPageCallback(url) {
      let { info = {} } = this;
      let { page = {} } = info || {};
      page.backgroundImage = url;
    },
    successPosterCallback(url) {
      let { info = {} } = this;
      info.uploadPoster = url;
    },
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
    pageSliderChangeEvent(values, index) {
      let { info = {} } = this;
      let { page = {} } = info || {};
      let { gradientStyle = {} } = page || {};
      let { valueList = [] } = gradientStyle || {};
      let { length = 0 } = valueList || [];
      if (index == 0) {
        values[0] = 0;
        this.$refs.pageSlider?.setValue(values);
      } else if (index == length - 1) {
        values[length - 1] = 100;
        this.$refs.pageSlider?.setValue(values);
      }
      gradientStyle.valueIndex = index;
      valueList[index].value = values[index];
    },
    sliderDragStartEvent(index) {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      gradientStyle.valueIndex = index;
    },
    pageSliderDragStartEvent(index) {
      let { info = {} } = this;
      let { page = {} } = info || {};
      let { gradientStyle = {} } = page || {};
      gradientStyle.valueIndex = index;
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

    //添加渐变光圈
    addApertureEvent(info, sliderKey) {
      // let { info = {} } = this;
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
      // this.$refs.slider?.focus(index + 1);
      this.$refs[sliderKey]?.focus(index + 1);
    },
    removeApertureEvent(info, sliderKey) {
      // let { info = {} } = this;
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
        // this.$refs.slider?.focus(index + 1);
        this.$refs[sliderKey]?.focus(index + 1);
      }
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
      bmCommon.log("canvas-style=>mousedownEvent");
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
      bmCommon.log("canvas-style=>mousedownCanvasPaintEvent");
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

<style lang="less">
@import (reference) "./../../assets/less/common.less";
.bm-canvas-style-com {
  p {
    .icon-paint {
      .bi("/static/img/configur/water.png");
      .p(18px) !important;
      .ml(8);
      .bz(80%);
    }
    .img-box {
      .h(120);
      .db;
      .bg-img;
      .bor(1px dashed @grayE);
      // .w(100%);
      .flex(1);
    }
    // &.gradient-aperture {
    //   .el-button {
    //     .p(10px);
    //   }
    //   .el-input {
    //     .ml(10);
    //   }
    // }
    // .gradient {
    //   .dib;
    //   .h(30);
    //   .w(100);
    // }
    // .upload-box {
    //   .flex(none) !important;
    //   .mr(15);
    //   .df;
    // }
    // .gradient-type-group {
    //   flex-direction: row !important;
    //   .el-radio-button {
    //     .br(0 4px 4px 0);
    //     &:first-child {
    //       .br(4px 0 0 4px);
    //     }
    //     &.is-active {
    //       .el-radio-button__inner {
    //         .bc(transparent);
    //       }
    //     }
    //   }
    // }
  }
}
</style>
