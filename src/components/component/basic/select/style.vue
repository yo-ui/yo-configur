<template>
  <div class="bm-basic-select-style-com">
    <el-collapse v-model="activeNames">
      <el-collapse-item name="name" disabled>
        <template slot="title">
          {{ info.name }}
          <div class="right">
            <el-tooltip
              :content="$lang('全部折叠')"
              placement="top"
              effect="dark"
            >
              <i class="el-icon-folder-remove" @click="closeAll"></i>
            </el-tooltip>
            <el-tooltip
              :content="$lang('全部展开')"
              placement="top"
              effect="dark"
            >
              <i class="el-icon-folder-opened" @click="openAll"></i>
            </el-tooltip>
          </div>
        </template>
        <p>
          <span class="label"> {{ $lang("按钮名称") }}: </span>
          <el-input
            v-model="info.comName"
            clearable
            :placeholder="$lang('请输入按钮名称')"
          ></el-input>
        </p>
        <p>
          <span class="label">{{ $lang("组件名称") }}:</span>
          <el-input
            v-model="info.comName"
            clearable
            :placeholder="$lang('请输入组件名称')"
          ></el-input>
        </p>
        <p>
          <span class="label"> {{ $lang("层级") }}: </span>
          <el-tooltip
            :content="$lang('请输入层级')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              clearable
              :min="0"
              :max="9999"
              v-model.number="info.order"
              :placeholder="$lang('请输入层级')"
            ></el-input-number>
          </el-tooltip>
          <el-slider
            v-model="info.order"
            :max="200"
            :format-tooltip="val => val"
          ></el-slider>
        </p>
        <p>
          <span class="label"> {{ $lang("宽度") }}:</span
          ><template v-if="info.scaleable">
            <el-tooltip
              :content="$lang('请输入宽度')"
              placement="top"
              effect="dark"
            >
              <el-input-number
                controls-position="right"
                clearable
                :min="0"
                :max="9999"
                v-model.number="info.width"
                :placeholder="$lang('请输入宽度')"
              ></el-input-number>
            </el-tooltip>
            <!-- px -->
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
          <span class="label"> {{ $lang("高度") }}:</span>
          <el-tooltip
            :content="$lang('请输入高度')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              clearable
              :min="0"
              :max="9999"
              v-model.number="info.height"
              :placeholder="$lang('请输入高度')"
            ></el-input-number>
          </el-tooltip>
          <el-slider
            v-if="info.scaleable"
            v-model="info.height"
            :max="1080"
            :format-tooltip="val => val"
          ></el-slider>
        </p>
        <p>
          <span class="label"> {{ $lang("横坐标") }}:</span>
          <el-tooltip
            :content="$lang('请输入横坐标')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              clearable
              :min="-3500"
              :max="3500"
              v-model.number="info.left"
              :placeholder="$lang('请输入横坐标')"
            ></el-input-number>
          </el-tooltip>
          <el-slider
            v-model="info.left"
            :max="3500"
            :min="-3500"
            :format-tooltip="val => val"
          ></el-slider>
        </p>
        <p>
          <span class="label"> {{ $lang("纵坐标") }}:</span>
          <el-tooltip
            :content="$lang('请输入纵坐标')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              clearable
              :min="-3500"
              :max="3500"
              v-model.number="info.top"
              :placeholder="$lang('请输入纵坐标')"
            ></el-input-number>
          </el-tooltip>

          <el-slider
            v-model="info.top"
            :max="3500"
            :min="-3500"
            :format-tooltip="val => val"
          ></el-slider>
        </p>
        <p>
          <span class="label"> {{ $lang("旋转角度") }}:</span>
          <el-tooltip
            :content="$lang('请输入旋转角度')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              clearable
              :min="-360"
              :max="360"
              v-model.number="info.rotate"
              :placeholder="$lang('请输入旋转角度')"
            ></el-input-number>
          </el-tooltip>
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
      </el-collapse-item>
      <el-collapse-item
        :title="$lang('输入框')"
        name="select"
        class="no-right no-border"
      >
        <!-- @tab-click="tabClickEvent" -->
        <el-collapse class="tab-collapse" v-model="tabActiveNames">
          <el-collapse-item title="" name="empty" disabled class="unfold">
          </el-collapse-item>
          <el-collapse-item
            class="tab-collapse-item"
            :title="$lang('文字')"
            name="font"
          >
            <p>
              <span class="label"> {{ $lang("当前值") }}: </span>
              <el-input
                v-model="info.content"
                clearable
                :placeholder="$lang('请输入当前值')"
              ></el-input>
            </p>
            <p>
              <span class="label">{{ $lang("字体大小") }}:</span>
              <el-tooltip
                :content="$lang('请输入字体大小')"
                placement="top"
                effect="dark"
              >
                <el-input-number
                  controls-position="right"
                  clearable
                  :min="10"
                  :max="200"
                  v-model.number="info.fontSize"
                  :placeholder="$lang('请输入字体大小')"
                ></el-input-number>
              </el-tooltip>
              <el-slider
                v-model="info.fontSize"
                :min="10"
                :max="200"
                :format-tooltip="val => val"
              ></el-slider>
            </p>
            <p>
              <span class="label">{{ $lang("字体") }}:</span>
              <el-select
                v-model="info.fontFamily"
                :placeholder="$lang('请选择字体')"
              >
                <el-option
                  v-for="item in fontFamilyList"
                  :key="item.code"
                  :label="$lang(item.name)"
                  :value="item.code"
                >
                  <span :style="`font-family:${item.code}`">{{
                    $lang(item.name)
                  }}</span>
                </el-option>
              </el-select>
            </p>
            <p>
              <span class="label">{{ $lang("字体颜色") }}:</span>
              <el-color-picker
                v-model="info.color"
                show-alpha
              ></el-color-picker>
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
                      v-model.number="info.textShadow.x"
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
                      v-model.number="info.textShadow.y"
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
            <p>
              <span class="label">{{ $lang("字体样式") }}:</span>
              <span class="font-style">
                <el-tooltip
                  :content="$lang('加粗')"
                  placement="top"
                  effect="dark"
                >
                  <span
                    class="bold"
                    @click="setFontWeight(info)"
                    :title="$lang('粗体')"
                    :class="{ active: info.fontWeight == 'bold' }"
                    >B</span
                  >
                </el-tooltip>
                <el-tooltip
                  :content="$lang('倾斜')"
                  placement="top"
                  effect="dark"
                >
                  <span
                    class="italic"
                    @click="setFontStyle(info)"
                    :title="$lang('斜体')"
                    :class="{ active: info.fontStyle == 'italic' }"
                    >I</span
                  >
                </el-tooltip>
                <el-tooltip
                  :content="$lang('下划线')"
                  placement="top"
                  effect="dark"
                >
                  <span
                    class="underline"
                    @click="setTextDecoration(info)"
                    :title="$lang('下划线')"
                    :class="{
                      active: info.textDecoration == 'underline'
                    }"
                    >U</span
                  >
                </el-tooltip>
              </span>
            </p>
            <p>
              <span class="label">{{ $lang("缩进") }}:</span>
              <el-input-number
                controls-position="right"
                clearable
                v-model.number="info.textIndent"
                :placeholder="$lang('模糊半径')"
              ></el-input-number>
              px
              <el-slider
                v-model="info.textIndent"
                :min="0"
                :max="50"
                :format-tooltip="val => val + ' px'"
              ></el-slider>
            </p>
          </el-collapse-item>

          <el-collapse-item
            class="tab-collapse-item"
            :title="$lang('背景框')"
            name="background"
          >
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
              </p>
              <p>
                <span class="label">{{ $lang("渐变类型") }}:</span>
                <el-radio-group
                  class="gradient-type-group"
                  v-model="info.gradientStyle.type"
                >
                  <el-radio-button
                    :style="
                      `background-image:${gradientStyleMap(info)[item.code]}`
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
              <p class="gradient-aperture">
                <span class="label">{{ $lang("渐变光圈") }}:</span>
                <el-button-group>
                  <el-button
                    plain
                    :disabled="info.gradientStyle.valueList.length > 5"
                    @click="addApertureEvent(info, 'slider')"
                    ><i class="el-icon-plus"></i
                  ></el-button>
                  <el-button
                    plain
                    :disabled="info.gradientStyle.valueList.length < 3"
                    @click="removeApertureEvent(info, 'slider')"
                    ><i class="el-icon-minus"></i
                  ></el-button>
                </el-button-group>
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
                    info.gradientStyle.valueList[info.gradientStyle.valueIndex]
                      .code
                  "
                  show-alpha
                ></el-color-picker>
                <el-input
                  :value="
                    info.gradientStyle.valueList[info.gradientStyle.valueIndex]
                      .code
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

            <template v-if="info.borderStyle != 'none'">
              <p>
                <span class="label"> {{ $lang("边框大小") }}:</span>
                <el-input-number
                  controls-position="right"
                  clearable
                  :min="0"
                  :max="200"
                  v-model.number="info.borderWidth"
                  :placeholder="$lang('请输入边框大小')"
                ></el-input-number>
                px
                <el-slider
                  v-model="info.borderWidth"
                  :min="0"
                  :max="200"
                  :format-tooltip="val => val + ' px'"
                ></el-slider>
              </p>
              <p>
                <span class="label">{{ $lang("边框颜色") }}:</span>
                <el-color-picker
                  v-model="info.borderColor"
                  show-alpha
                ></el-color-picker>
              </p>
              <p>
                <el-tooltip :content="$lang('悬浮边框颜色')" placement="top" effect="dark">
                  <span class="label">{{ $lang("悬浮边框颜色") }}:</span>
                </el-tooltip>
                <el-color-picker
                  v-model="info.borderHoverColor"
                  show-alpha
                ></el-color-picker>
              </p>
            </template>

            <!-- <p class="padding-box">
              <span class="label">{{ $lang("边框圆角") }}:</span>
              <span class="c-box">
                <span>
                  左上<el-input-number
                    controls-position="right"
                    clearable
                    v-model.number="info.borderRadiusTopLeft"
                    :placeholder="$lang('左上角')"
                  ></el-input-number>
                </span>
                <span>
                  右上<el-input-number
                    controls-position="right"
                    clearable
                    v-model.number="info.borderRadiusTopRight"
                    :placeholder="$lang('右上角')"
                  ></el-input-number>
                </span>
                <span>
                  右下<el-input-number
                    controls-position="right"
                    clearable
                    v-model.number="info.borderRadiusBottomRight"
                    :placeholder="$lang('右下角')"
                  ></el-input-number>
                </span>
                <span>
                  左下<el-input-number
                    controls-position="right"
                    clearable
                    v-model.number="info.borderRadiusBottomLeft"
                    :placeholder="$lang('左下角')"
                  ></el-input-number>
                </span>
              </span>
            </p> -->
            <!-- <p class="margin-box">
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
            </p> -->
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
          </el-collapse-item>
          <el-collapse-item
            class="tab-collapse-item"
            :title="$lang('箭头样式')"
            name="arrowStyle"
          >
            <p>
              <span class="label">{{ $lang("显示箭头") }}:</span>
              <el-switch
                v-model="info.arrow.status"
                active-color="#4195ea"
                inactive-color="#ccc"
              ></el-switch>
            </p>
            <template v-if="info.arrow.status">
              <p>
                <span class="label">{{ $lang("箭头颜色") }}:</span>
                <el-color-picker
                  v-model="info.arrow.color"
                  show-alpha
                ></el-color-picker>
              </p>
              <p>
                <span class="label">{{ $lang("箭头大小") }}:</span>
                <el-input-number
                  controls-position="right"
                  clearable
                  v-model.number="info.arrow.fontSize"
                  :placeholder="$lang('箭头大小')"
                ></el-input-number>
                <el-slider
                  v-model="info.arrow.fontSize"
                  :format-tooltip="val => val"
                ></el-slider>
              </p>
              <p>
                <span class="label">{{ $lang("箭头加粗") }}:</span>
                <span class="font-style">
                  <el-tooltip
                    :content="$lang('加粗')"
                    placement="top"
                    effect="dark"
                  >
                    <span
                      class="bold"
                      @click="setFontWeight(info.arrow)"
                      :title="$lang('粗体')"
                      :class="{ active: info.arrow.fontWeight == 'bold' }"
                      >B</span
                    >
                  </el-tooltip>
                </span>
              </p>
              <p>
                <span class="label">{{ $lang("右边距") }}:</span>
                <el-input-number
                  controls-position="right"
                  clearable
                  v-model.number="info.arrow.marginRight"
                  :placeholder="$lang('箭头大小')"
                ></el-input-number>
                <el-slider
                  v-model="info.arrow.marginRight"
                  :format-tooltip="val => val"
                ></el-slider>
              </p>
            </template>
          </el-collapse-item>
        </el-collapse>
      </el-collapse-item>
      <el-collapse-item :title="$lang('外观')" name="outward">
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
            <span class="gradient" :style="gradientStyle"></span>
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
          <p class="gradient-aperture">
            <span class="label">{{ $lang("渐变光圈") }}:</span>
            <el-button-group>
              <el-button
                plain
                :disabled="info.gradientStyle.valueList.length > 5"
                @click="addApertureEvent(info, 'slider')"
                ><i class="el-icon-plus"></i
              ></el-button>
              <el-button
                plain
                :disabled="info.gradientStyle.valueList.length < 3"
                @click="removeApertureEvent(info, 'slider')"
                ><i class="el-icon-minus"></i
              ></el-button>
            </el-button-group>
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
        <template v-if="info.backgroundType == 'purity'">
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
              v1-if="info.backgroundImage"
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
        </template>
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

        <template v-if="info.borderStyle != 'none'">
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
            <span class="label">{{ $lang("边框颜色") }}:</span>
            <el-color-picker
              v-model="info.borderColor"
              show-alpha
            ></el-color-picker>
          </p>
        </template>

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
      </el-collapse-item>
      <el-collapse-item :title="$lang('边距')" name="margin">
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
      </el-collapse-item>
      <el-collapse-item title="动画" name="animation">
        <p>
          <span class="label">{{ $lang("动画类型") }}:</span>
          <el-select v-model="info.animation.name" placeholder="请选择动画类型">
            <el-option :label="$lang('无')" value=""></el-option>
            <el-option-group
              v-for="group in animateGroupList"
              :key="group.code"
              :label="group.code"
            >
              <el-option
                v-for="item in group.list"
                :key="item.code"
                :label="item.code"
                :value="item.code"
              >
              </el-option>
            </el-option-group>
          </el-select>
        </p>

        <template v-if="info.animation.name">
          <p>
            <span class="label">{{ $lang("动画速度") }}:</span>
            <el-input-number
              controls-position="right"
              clearable
              :step="0.1"
              :max="2"
              v-model.number="info.animation.duration"
              :placeholder="$lang('动画速度')"
            ></el-input-number>
            px
            <el-slider
              v-model="info.animation.duration"
              :step="0.1"
              :max="2"
              :format-tooltip="val => val"
            ></el-slider>
          </p>
          <p>
            <span class="label">{{ $lang("播放次数") }}:</span>
            <el-input-number
              controls-position="right"
              clearable
              v-model.number="info.animation.iterationCount"
              :placeholder="$lang('播放次数')"
            ></el-input-number>
            <el-slider
              v-model="info.animation.iterationCount"
              :format-tooltip="val => val"
            ></el-slider>
          </p>
          <p>
            <span class="label">{{ $lang("播放方式") }}:</span>
            <el-radio-group v-model="info.animation.direction">
              <el-radio
                v-for="item in animationDirectionList"
                :key="item.code"
                :label="item.code"
              >
                {{ item.name }}
              </el-radio>
            </el-radio-group>
          </p>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "bmSelectStyleCom",
  data() {
    return {
      tabActive: "0",
      activeNames: ["name", "style"],
      tabActiveNames: ["empty", "font"],
      animationDirectionList: Object.freeze(Constants.ANIMATIONDIRECTIONLIST),
      animateGroupList: Object.freeze(Constants.ANIMATEGROUPLIST),
      borderStyleList: Object.freeze(Constants.BORDERSTYLELIST),
      backgroundTypeList: Object.freeze(Constants.BACKGROUNDTYPELIST),
      centerList: Object.freeze(Constants.CENTERLIST),
      radialShapeList: Object.freeze(Constants.RADIALSHAPELIST),
      angelList: Object.freeze(Constants.ANGELLIST),
      gradientTypeList: Object.freeze(Constants.GRADIENTTYPELIST),
      flipModeList: Object.freeze(Constants.FLIPMODELIST),
      backgroundSizeList: Object.freeze(Constants.BACKGROUNDSIZELIST),
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
    ...mapGetters({
      activeComs: "canvas/getActiveComs" //选中组件
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
  created() {
    let { info = {} } = this;
    this.oldInfo = bmCommon.clone(info || {});
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
    sliderChangeEvent(values, index) {
      let { info = {} } = this;
      let { button = {} } = info || {};
      let { gradientStyle = {} } = button || {};
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
      let { button = {} } = info || {};
      let { gradientStyle = {} } = button || {};
      gradientStyle.valueIndex = index;
    },
    selectSliderChangeEvent(values, index) {
      let { info = {} } = this;
      let { select = {} } = info || {};
      let { gradientStyle = {} } = select || {};
      let { valueList = [] } = gradientStyle || {};
      let { length = 0 } = valueList || [];
      if (index == 0) {
        values[0] = 0;
        this.$refs.slider?.setValue(values);
      } else if (index == length - 1) {
        values[length - 1] = 100;
        this.$refs.selectSlider?.setValue(values);
      }
      gradientStyle.valueIndex = index;
      valueList[index].value = values[index];
    },
    selectSliderDragStartEvent(index) {
      let { info = {} } = this;
      let { select = {} } = info || {};
      let { gradientStyle = {} } = select || {};
      gradientStyle.valueIndex = index;
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
    setFontWeight(info) {
      // let { info = {} } = this;
      let { fontWeight = "" } = info || {};
      if (fontWeight == "bold") {
        fontWeight = "";
      } else {
        fontWeight = "bold";
      }
      info.fontWeight = fontWeight;
    },
    setTextDecoration(info) {
      // let { info = {} } = this;
      let { textDecoration = "" } = info || {};
      if (textDecoration == "underline") {
        textDecoration = "";
      } else {
        textDecoration = "underline";
      }
      info.textDecoration = textDecoration;
    },
    setFontStyle(info) {
      // let { info = {} } = this;
      let { fontStyle = "" } = info || {};
      if (fontStyle == "italic") {
        fontStyle = "";
      } else {
        fontStyle = "italic";
      }
      info.fontStyle = fontStyle;
    },
    textAlignEvent(info, item) {
      // let { info = {} } = this;
      info.textAlign = item;
    },
    openAll() {
      this.activeNames = [
        "name",
        "style",
        "outward",
        "margin",
        "fontSet",
        "animation"
      ];
    },
    closeAll() {
      this.activeNames = ["name"];
    },
    removeContentEvent() {
      let { info = {}, tabActive = 0 } = this;
      let { contentList = [] } = info || {};
      contentList.splice(tabActive, 1);
    },
    addContentEvent() {
      let { info = {} } = this;
      let { contentList = [] } = info || {};
      contentList.push({
        text: "",
        code: "",
        value: ""
      });
    }
  }
};
</script>

<style lang="less">
@import (reference) "./../../../../assets/less/common.less";
.bm-button-tab-style-com {
  .el-collapse {
    .el-collapse-item {
      .el-collapse-item__content {
        .tab-collapse {
          .el-collapse-item__header {
            .lh(35);
            .h(35);
            .fz(12);
            .right {
              i {
                .fz(13);
              }
            }
          }
          .tab-collapse-item {
            .el-collapse-item__wrap {
              // .pt(0);
              .el-collapse-item__content {
                p {
                  .ml(10);
                }
              }
            }
          }
          .el-collapse-item__wrap {
            .pt(0);
          }
        }
        // .el-tabs {
        //   .mt(10);
        // }
      }
    }
  }
}
</style>
