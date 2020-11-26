<template>
  <div class="bm-group-style-com">
    <el-collapse v-model="activeNames">
      <!-- <el-collapse-item :title="$lang('组合')" name="group">
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
          <el-tooltip
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
          </el-tooltip>
        </p>
      </el-collapse-item> -->
      <el-collapse-item :title="$lang('组合')" name="group">
        <p v-if="isSameGroup">
          <span class="label"> {{ $lang("名称") }}: </span>
          <el-input
            v-model="info.name"
            clearable
            :placeholder="$lang('请输入组合名称')"
          ></el-input>
        </p>
        <!-- <p>
          <span class="label"> {{ $lang("画布封面") }}: </span>
          <bm-upload ref="bmUpload" @success="successCallback(info, 'poster')">
            <el-button type="primary">
              {{ $lang(info.poster ? "替换图片" : "选择图片") }}</el-button
            >
          </bm-upload>
          <el-button v-if="info.poster" @click="info.poster = ''">{{
            $lang("重置")
          }}</el-button>
        </p>
        <p>
          <span class="label"></span>
          <span
            class="img-box"
            :style="
              info.poster
                ? `background-image:url(${$loadImgUrl(info.poster)})`
                : ''
            "
          >
          </span>
        </p>
        <p>
          <span class="label"> {{ $lang("组态标题") }}: </span>
          <el-input
            v-model="info.content"
            clearable
            :placeholder="$lang('请输入组态标题')"
          ></el-input>
        </p> -->
        <!-- <p>
          <span class="label"> {{ $lang("页面宽度") }}:</span>
          <el-tooltip
            :content="$lang('请输入页面宽度')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              v-model.number="info.width"
              clearable
              :placeholder="$lang('请输入页面宽度')"
            ></el-input-number>
          </el-tooltip>
          <el-slider
            v-model="info.width"
            :max="3000"
            :format-tooltip="val => val"
          ></el-slider>
        </p>
        <p>
          <span class="label"> {{ $lang("页面高度") }}:</span>

          <el-tooltip
            :content="$lang('请输入页面高度')"
            placement="top"
            effect="dark"
          >
            <el-input-number
              controls-position="right"
              clearable
              v-model.number="info.height"
              :placeholder="$lang('请输入页面高度')"
            ></el-input-number
          ></el-tooltip>
          <el-slider
            v-model="info.height"
            :max="3000"
            :format-tooltip="val => val"
          ></el-slider>
        </p> -->
        <p>
          <span class="label">{{ $lang("填充颜色") }}:</span>
          <el-select
            v-model="info.backgroundType"
            @change="changeStatusEvent('backgroundType')"
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
            @change="changeStatusEvent('backgroundColor')"
          ></el-color-picker>
        </p>
        <template v-if="info.backgroundType == 'gradient'">
          <p>
            <span class="label">{{ $lang("渐变颜色") }}:</span>
            <span class="gradient" :style="gradientStyle"></span>
            <!-- {{ gradientStyle }} -->
          </p>
          <p>
            <span class="label">{{ $lang("渐变类型") }}:</span>
            <el-radio-group
              class="gradient-type-group"
              v-model="info.gradientStyle.type"
              @change="gradientStyleChangeEvent('type')"
            >
              <el-radio-button
                :style="`background-image:${gradientStyleMap[item.code]}`"
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
                @change="gradientStyleChangeEvent('center')"
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
                @change="gradientStyleChangeEvent('radialShape')"
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
                @change="gradientStyleChangeEvent('angle')"
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
            <!-- {{gradientStyleMap}} -->
            <!-- :data="info.gradientStyle.valueList"
          :dot-options="info.gradientStyle.valueOptions" -->
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
              <!-- @drag-start="sliderDragStartEvent"
          @dragging="sliderDraggingEvent"
          @drag-end="sliderDragEndEvent" -->
              <template #tooltip>
                <!-- {{info.gradientStyle.valueList[index].code}} -->
                <span></span>
              </template>
              <template #process>
                <div
                  class="vue-slider-process"
                  :style="gradientLinearStyle"
                ></div>
              </template>
              <template #dot="{index}">
                <!-- <img src="../../assets/img/dot.png" class="custom-dot"/> -->
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
              @change="changeStatusEvent('backgroundRepeat')"
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
              @change="changeStatusEvent('backgroundSize')"
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
        </template>
        <!-- <p>
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
    </p> -->
        <!-- <p>
          <span class="label"> {{ $lang("是否显示网格") }}:</span
          ><el-checkbox v-model="info.isGrid"></el-checkbox>
        </p>
        <template v-if="info.isGrid">
          <p>
            <span class="label"> {{ $lang("网格样式") }}:</span
            ><el-select
              v-model="info.gridStyle.type"
              @change="gradientStyleChangeEvent"
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
        </template> -->
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

        <p class="btn-box">
          <el-tooltip content="隐藏" placement="top" effect="dark">
            <i
              class="el-icon-view"
              :class="{ active: !info.visible }"
              @click="clickStatusEvent('visible', !info.visible)"
            ></i>
          </el-tooltip>
          <el-tooltip content="锁定" placement="top" effect="dark">
            <i
              class="el-icon-lock"
              :class="{ active: info.locked }"
              @click="clickStatusEvent('locked', !info.locked)"
            ></i>
          </el-tooltip>
          <el-tooltip content="垂直翻转" placement="top" effect="dark">
            <i
              class="bomi bomi-flip-v"
              :class="{ active: info.flipV }"
              @click="clickStatusEvent('flipV', !info.flipV)"
            ></i>
          </el-tooltip>
          <el-tooltip content="水平翻转" placement="top" effect="dark">
            <i
              class="bomi bomi-flip-h"
              :class="{ active: info.flipH }"
              @click="clickStatusEvent('flipH', !info.flipH)"
            ></i>
          </el-tooltip>
        </p>
      </el-collapse-item>
      <el-collapse-item :title="$lang('字体设置')" name="font">
        <p>
          <span class="label">{{ $lang("字体颜色") }}:</span>
          <el-color-picker
            v-model="info.color"
            show-alpha
            @change="changeStatusEvent('color')"
          ></el-color-picker>
        </p>
        <p>
          <span class="label">{{ $lang("字体阴影") }}:</span>
          <el-switch
            v-model="info.textShadowable"
            @change="changeStatusEvent('textShadowable')"
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
                  @change="textShadowChangeEvent('x')"
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
                  @change="textShadowChangeEvent('y')"
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
              @change="textShadowChangeEvent('blur')"
              :placeholder="$lang('模糊半径')"
            ></el-input-number>
            px
            <el-slider
              v-model="info.textShadow.blur"
              @change="textShadowChangeEvent('blur')"
              :min="0"
              :max="50"
              :format-tooltip="val => val + ' px'"
            ></el-slider>
          </p>
          <p>
            <span class="label">{{ $lang("阴影颜色") }}:</span>
            <el-color-picker
              v-model="info.textShadow.color"
              @change="textShadowChangeEvent('color')"
              show-alpha
            ></el-color-picker>
          </p>
        </template>
        <p>
          <span class="label">{{ $lang("字体大小") }}:</span>
          {{ info.fontSize }} px
          <el-slider
            v-model="info.fontSize"
            @change="changeStatusEvent('fontSize')"
            :min="10"
            :max="100"
            :format-tooltip="val => val + ' px'"
          ></el-slider>
        </p>
        <p>
          <span class="label">{{ $lang("字体") }}:</span>
          <el-select
            v-model="info.fontFamily"
            @change="changeStatusEvent('fontFamily')"
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
          <span class="label">{{ $lang("字体样式") }}:</span>
          <span class="font-style">
            <el-tooltip :content="$lang('加粗')" placement="top" effect="dark">
              <span
                class="bold"
                @click="setFontWeight"
                :title="$lang('粗体')"
                :class="{ active: info.fontWeight == 'bold' }"
                >B</span
              >
            </el-tooltip>
            <el-tooltip :content="$lang('倾斜')" placement="top" effect="dark">
              <span
                class="italic"
                @click="setFontStyle"
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
                @click="setTextDecoration"
                :title="$lang('下划线')"
                :class="{ active: info.textDecoration == 'underline' }"
                >U</span
              >
            </el-tooltip>
          </span>
        </p>

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
        <p class="margin-box">
          <span class="label">{{ $lang("外边距") }}:</span>
          <span class="c-box">
            <span>
              上<el-input-number
                controls-position="right"
                clearable
                v-model.number="info.marginTop"
                @change="changeStatusEvent('marginTop')"
                :placeholder="$lang('上外边距')"
              ></el-input-number>
            </span>
            <span>
              下<el-input-number
                controls-position="right"
                clearable
                v-model.number="info.marginBottom"
                @change="changeStatusEvent('marginBottom')"
                :placeholder="$lang('下外边距')"
              ></el-input-number>
            </span>
            <span>
              左<el-input-number
                controls-position="right"
                clearable
                v-model.number="info.marginLeft"
                @change="changeStatusEvent('marginLeft')"
                :placeholder="$lang('左外边距')"
              ></el-input-number>
            </span>
            <span>
              右<el-input-number
                controls-position="right"
                clearable
                v-model.number="info.marginRight"
                @change="changeStatusEvent('marginRight')"
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
                @change="changeStatusEvent('paddingTop')"
                :placeholder="$lang('上内边距')"
              ></el-input-number>
            </span>
            <span>
              下<el-input-number
                controls-position="right"
                clearable
                v-model.number="info.paddingBottom"
                @change="changeStatusEvent('paddingBottom')"
                :placeholder="$lang('下内边距')"
              ></el-input-number>
            </span>
            <span>
              左<el-input-number
                controls-position="right"
                clearable
                v-model.number="info.paddingLeft"
                @change="changeStatusEvent('paddingLeft')"
                :placeholder="$lang('左内边距')"
              ></el-input-number>
            </span>
            <span>
              右<el-input-number
                controls-position="right"
                clearable
                v-model.number="info.paddingRight"
                @change="changeStatusEvent('paddingRight')"
                :placeholder="$lang('右内边距')"
              ></el-input-number>
            </span>
          </span>
        </p>
      </el-collapse-item>
      <el-collapse-item title="边框设置" name="border">
        <p>
          <span class="label"> {{ $lang("边框样式") }}:</span
          ><el-select
            v-model="info.borderStyle"
            @change="changeStatusEvent('borderStyle')"
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
            <el-color-picker
              v-model="info.borderColor"
              show-alpha
            ></el-color-picker>
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
        </template>
      </el-collapse-item>
      <el-collapse-item title="动画" name="animation">
        <p>
          <span class="label">{{ $lang("动画类型") }}:</span>
          <el-select
            v-model="info.animation.name"
            @change="animationChangeEvent('name')"
            placeholder="请选择动画类型"
          >
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
        <p>
          <span class="label">{{ $lang("动画速度") }}:</span>
          <el-input-number
            controls-position="right"
            clearable
            :step="0.1"
            :max="2"
            v-model.number="info.animation.duration"
            @change="animationChangeEvent('duration')"
            :placeholder="$lang('动画速度')"
          ></el-input-number>
          px
          <el-slider
            v-model="info.animation.duration"
            @change="animationChangeEvent('duration')"
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
            @change="animationChangeEvent('iterationCount')"
            :placeholder="$lang('播放次数')"
          ></el-input-number>
          px
          <el-slider
            v-model="info.animation.iterationCount"
            @change="animationChangeEvent('iterationCount')"
            :format-tooltip="val => val"
          ></el-slider>
        </p>
        <p>
          <span class="label">{{ $lang("播放方式") }}:</span>
          <el-radio-group
            v-model="info.animation.direction"
            @change="animationChangeEvent('direction')"
          >
            <el-radio
              v-for="item in animationDirectionList"
              :key="item.code"
              :label="item.code"
            >
              {{ item.name }}
            </el-radio>
          </el-radio-group>
        </p>
      </el-collapse-item>
      <!-- <el-collapse-item title="交互" name="3"> </el-collapse-item>
      <el-collapse-item title="动画" name="4">
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
// import bmCommon from "@/common/common";
// import {componentLibrary} from "@/common/conf/library";
import { Constants } from "@/common/env";
// const ASSISTMAP = Constants.COMPONENTLIBRARYMAP;
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
  name: "groupStyleCom",
  data() {
    // let gridStyleList = Object.freeze([
    //   { code: "1", name: "默认20*20", value: { width: 20, height: 20 } },
    //   { code: "2", name: "默认40*20", value: { width: 40, height: 20 } },
    //   { code: "3", name: "默认20*40", value: { width: 20, height: 40 } },
    //   { code: "4", name: "默认40*40", value: { width: 40, height: 40 } },
    //   { code: "5", name: "默认80*80", value: { width: 80, height: 80 } },
    //   { code: "6", name: "自定义网格", value: { width: 80, height: 80 } }
    // ]);
    // let gridStyleMap = {};
    // gridStyleList.forEach(item => {
    //   gridStyleMap[item.code] = item || {};
    // });
    return {
      activeNames: ["group", "font"],
      // gridStyleList,
      info: {
        flipV: false,
        flipH: false,
        visible: true,
        locked: false,
        backgroundImage: "",
        backgroundSize: "100% 100%",
        backgroundColor: "",
        backgroundRepeat: "repeat",
        borderWidth: 0,
        borderStyle: "none",
        borderColor: "",
        showCoverStatus: true,
        borderRadius: 0,
        animation: {
          name: "",
          direction: "normal",
          duration: 0.8,
          iterationCount: 1
        },
        fontWeight: "",
        textDecoration: "",
        fontStyle: "",
        fontSize: 14,
        opacity: 100,
        fontFamily: "",
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: "left",
        shadowable: false,
        shadow: {
          color: "#eee",
          x: 0, //X偏移量
          y: 0, //Y偏移量
          blur: 0, //模糊半径
          spread: 0, //阴影大小
          type: "" //阴影类型 //空为外阴影  inset 为内阴影
        },
        textShadowable: false,
        textShadow: {
          color: "#eee",
          x: 0, //X偏移量
          y: 0, //Y偏移量
          blur: 0 //模糊半径
        },
        // backgroundColor: "",
        backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
        gradientStyle: {
          type: "linear", //渐变类型  linear 线性  radial 径向
          angle: 0,
          center: "50% 50%",
          values: [0, 100],
          radialShape: "circle",
          valueIndex: 0,
          gradientId: "",
          valueOptions: [
            //   {
            //   // disabled: true
            // }, {
            //   // disabled: true
            // }
          ],
          valueList: [
            { code: "#108cee", value: 0 },
            { code: "#545fc8", value: 100 }
          ]
        }
      },
      animationDirectionList: Object.freeze(Constants.ANIMATIONDIRECTIONLIST),
      animateGroupList: Object.freeze(Constants.ANIMATEGROUPLIST),
      borderStyleList: Object.freeze(Constants.BORDERSTYLELIST),
      flipModeList: Object.freeze(Constants.FLIPMODELIST),
      BACKGROUNDSIZELIST: Object.freeze(Constants.BACKGROUNDSIZELIST),
      fontFamilyList: Object.freeze(Constants.FONTFAMILYLIST),
      tileModeList: Object.freeze(Constants.TILEMODELIST),
      // gridStyleMap,
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
  // props: {
  //   info: {
  //     type: Object,
  //     default: () => {
  //       return {};
  //     }
  //   }
  // },
  computed: {
    ...mapGetters({
      zoom: "canvas/getZoom", //放大缩小
      widgetList: "canvas/getWidgetList", //组件列表
      canvas: "canvas/getCanvas", //画布
      activeComs: "canvas/getActiveComs", //选中组件
      linkPoint: "canvas/getLinkPoint" //画布
    }),
    isSameGroup() {
      let { activeComs = [] } = this;
      let set = new Set();
      activeComs.forEach(item => {
        let { groupList = [] } = item || {};
        let [group = ""] = groupList || [];
        if (group) {
          set.add(group);
        }
      });
      return set.size == 1;
    },
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
  },
  components: {
    bmUpload: () =>
      import(
        /* webpackChunkName: "bm-component-upload" */ "@/components/common/upload.vue"
      )
  },
  beforeDestroy() {
    // $(document).off("mousedown", this.mousedownEvent);
    // $(document).off("mousedown", this.mousedownCanvasPaintEvent);
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
      this.changeStatusEvent("backgroundImage");
    },
    // actionEvent(item) {
    //   let { canvas = {} } = this;
    //   let { action = "" } = canvas || {};
    //   if (action == item) {
    //     return;
    //   }
    //   canvas.action = item;
    //   if (item == "move") {
    //     this.unCanvasPaintEvent();
    //     this.canvasMoveEvent();
    //   } else if (item == "paint") {
    //     this.unCanvasMoveEvent();
    //     this.canvasPaintEvent();
    //   } else {
    //     this.unCanvasMoveEvent();
    //     this.unCanvasPaintEvent();
    //   }
    // },
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
      this.gradientStyleChangeEvent("valueIndex");
      this.gradientStyleChangeEvent("valueList");
    },
    sliderDragStartEvent(index) {
      let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      gradientStyle.valueIndex = index;
      this.gradientStyleChangeEvent("valueIndex");
    },
    // sliderDraggingEvent(value, index) {
    //   this.sliderDragStartEvent(index);
    // },
    // sliderDragEndEvent(index) {
    //   this.sliderDragStartEvent(index);
    // },
    // gradientStyleChangeEvent() {
    //   let { info = {}, gridStyleMap = {} } = this;
    //   let { gridStyle = {} } = info || {};
    //   let { type = "" } = gridStyle || {};
    //   let obj = gridStyleMap[type] || {};
    //   let { value: _gridStyle = {} } = obj || {};
    //   let { width, height } = _gridStyle || {};
    //   gridStyle.width = width;
    //   gridStyle.height = height;
    // },
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
      this.gradientStyleChangeEvent("valueIndex");
      this.gradientStyleChangeEvent("valueList");
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
        this.gradientStyleChangeEvent("valueIndex");
        this.gradientStyleChangeEvent("valueList");
      }
    },
    // zoomEvent(val = 0) {
    //   let { zoom = 0, canvas = {} } = this;
    //   if (val) {
    //     zoom = zoom * 100 + val;
    //     if (zoom > 10 && zoom < 200) {
    //       this.setZoom(zoom / 100);
    //     }
    //   } else {
    //     this.setZoom(1);
    //     canvas.left = 0;
    //     canvas.top = 0;
    //   }
    // },
    animationChangeEvent(key) {
      let { info = {}, activeComs = [] } = this;
      let { animation = {} } = info || {};
      activeComs.forEach(item => {
        item.animation[key] = animation[key];
      });
    },
    shadowChangeEvent(key) {
      let { info = {}, activeComs = [] } = this;
      let { shadow = {} } = info || {};
      activeComs.forEach(item => {
        item.shadow[key] = shadow[key];
      });
    },
    textShadowChangeEvent(key) {
      let { info = {}, activeComs = [] } = this;
      let { textShadow = {} } = info || {};
      activeComs.forEach(item => {
        item.textShadow[key] = textShadow[key];
      });
    },
    gradientStyleChangeEvent(key) {
      let { info = {}, activeComs = [] } = this;
      let { gradientStyle = {} } = info || {};
      activeComs.forEach(item => {
        item.gradientStyle[key] = gradientStyle[key];
      });
    },
    // unCanvasMoveEvent() {
    //   $(document).off("mousedown", this.mousedownEvent);
    // },
    // unCanvasPaintEvent() {
    //   $(document).off("mousedown", this.mousedownCanvasPaintEvent);
    // },
    // canvasMoveEvent() {
    //   $(document).on("mousedown", this.mousedownEvent);
    // },
    // canvasPaintEvent() {
    //   $(document).on("mousedown", this.mousedownCanvasPaintEvent);
    // },
    clickStatusEvent(key, value) {
      let { info = {}, activeComs = [] } = this;
      info[key] = value;
      activeComs.forEach(item => {
        item[key] = value;
      });
    },
    changeStatusEvent(key) {
      let { info = {}, activeComs = [] } = this;
      activeComs.forEach(item => {
        item[key] = info[key];
      });
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
      this.changeStatusEvent("fontWeight");
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
      this.changeStatusEvent("textDecoration");
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
      this.changeStatusEvent("fontStyle");
    },
    textAlignEvent(item) {
      let { info = {} } = this;
      info.textAlign = item;
      this.changeStatusEvent("textAlign");
    }
    // mousedownEvent(e) {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   let { canvas = {} } = this;
    //   let pos = bmCommon.getMousePosition(e);
    //   let { x = "", y = "" } = pos || {};
    //   let { left, top } = canvas || {};
    //   this.initMove({
    //     startX: x,
    //     startY: y,
    //     originX: left,
    //     originY: top
    //   });

    //   $(document).on("mousemove", this.mousemoveEvent);
    //   $(document).on("mouseup", this.mouseupEvent);
    // },
    // mousemoveEvent(e) {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   let pos = bmCommon.getMousePosition(e);
    //   let { x = "", y = "" } = pos || {};
    //   this.canvasMoving({ x, y });
    // },
    // mouseupEvent(e) {
    //   $(document).off("mousemove", this.mousemoveEvent);
    //   $(document).off("mouseup", this.mouseupEvent);
    //   this.stopMove();
    // },

    // mousedownCanvasPaintEvent(e) {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   let { widgetList = [], linkPoint, condition } = this;
    //   let pos = bmCommon.getMousePosition(e);
    //   let { x = "", y = "" } = pos || {};
    //   if (!linkPoint) {
    //     this.$$msgError("请先创建连接点");
    //     return;
    //   }
    //   let _offset = $(".view-box").offset();
    //   let offset = $(".content-box").offset();
    //   let { left: __left = 0, top: __top = 0 } = _offset || {};
    //   let { left: _left = 0, top: _top = 0 } = offset || {};
    //   let { left = 0, top = 0, width = 0, height = 0, alias = "" } =
    //     linkPoint || {};
    //   // let { left=0, top=0 } = canvas || {};
    //   // this.initMove({
    //   //   startX: x,
    //   //   startY: y
    //   //   // originX: left,
    //   //   // originY: top
    //   // });
    //   // let angle = bmCommon.getAngles({
    //   //   point1: { x: left, y: top },
    //   //   point2: { x, y }
    //   // });
    //   condition.startX = x;
    //   condition.startY = y;
    //   // let dis = {
    //   x = x - (left + _left + __left);
    //   y = y - (top + _top + __top);
    //   // };
    //   // let x = changeX - startX;
    //   // let y = changeY - startY;
    //   let item = {};
    //   let assist = "water_vertical"; //垂直
    //   //   assist = "water_horizontal"; //水平
    //   if (
    //     (x > 0 && y < 0 && x > Math.abs(y)) ||
    //     (x > 0 && y > 0 && x > y) ||
    //     (x > 0 && y == 0)
    //   ) {
    //     //右移动
    //     bmCommon.group("右移动");
    //     // left = left + width;
    //     // if (alias != "water_horizontal") {
    //     assist = "water_horizontal";
    //     // }
    //     let obj = ASSISTMAP[assist];
    //     let { data = {}, alias: _alias = "", name = "", code: type = "" } =
    //       obj || {};
    //     left = left + width;
    //     if (alias != "linkPoint" && alias != "water_horizontal") {
    //       top = top + height;
    //     }
    //     let id = bmCommon.uuid();
    //     let orders = widgetList.map(item => item.order);
    //     let order = Math.max(...orders);
    //     order += 1;
    //     item = {
    //       ...data,
    //       order,
    //       type,
    //       name,
    //       alias: _alias,
    //       id,
    //       left,
    //       top
    //     };
    //   } else if (
    //     (y > 0 && x < 0 && y > Math.abs(x)) ||
    //     (y > 0 && x > 0 && y > x) ||
    //     (y > 0 && x == 0)
    //   ) {
    //     //下移动
    //     bmCommon.group("下移动");
    //     // if (alias != "water_vertical") {
    //     assist = "water_vertical";
    //     // }
    //     let obj = ASSISTMAP[assist];
    //     let { data = {}, alias: _alias = "", name = "", code: type = "" } =
    //       obj || {};
    //     top = top + height;
    //     if (alias != "linkPoint" && alias != "water_vertical") {
    //       left = left + width;
    //     }
    //     let id = bmCommon.uuid();
    //     let orders = widgetList.map(item => item.order);
    //     let order = Math.max(...orders);
    //     order += 1;
    //     item = {
    //       ...data,
    //       order,
    //       type,
    //       name,
    //       alias: _alias,
    //       id,
    //       left,
    //       top
    //     };
    //   } else if (
    //     (x < 0 && y > 0 && Math.abs(x) > y) ||
    //     (x < 0 && y < 0 && Math.abs(x) > Math.abs(y)) ||
    //     (x < 0 && y == 0)
    //   ) {
    //     //左移动
    //     bmCommon.group("左移动");
    //     // if (alias != "water_horizontal") {
    //     assist = "water_horizontal";
    //     // }
    //     let obj = ASSISTMAP[assist];
    //     let {
    //       data = {},
    //       alias: _alias = "",
    //       name = "",
    //       code: type = "",
    //       width: _width = ""
    //     } = obj || {};
    //     left = left - width - _width;
    //     if (alias != "linkPoint" && alias != "water_horizontal") {
    //       top = top + height;
    //     }
    //     let id = bmCommon.uuid();
    //     let orders = widgetList.map(item => item.order);
    //     let order = Math.max(...orders);
    //     order += 1;
    //     item = {
    //       ...data,
    //       order,
    //       type,
    //       name,
    //       alias: _alias,
    //       id,
    //       left,
    //       top
    //     };
    //   } else if (
    //     (y < 0 && x < 0 && Math.abs(y) > Math.abs(x)) ||
    //     (y < 0 && x > 0 && Math.abs(y) > x) ||
    //     (y < 0 && x == 0)
    //   ) {
    //     //上移动
    //     bmCommon.group("上移动");
    //     // if (alias != "water_vertical") {
    //     assist = "water_vertical";
    //     // }
    //     let obj = ASSISTMAP[assist];
    //     let {
    //       data = {},
    //       alias: _alias = "",
    //       name = "",
    //       code: type = "",
    //       height: _height = ""
    //     } = obj || {};
    //     top = top - height - _height;
    //     if (alias != "linkPoint" && alias != "water_vertical") {
    //       left = left + width;
    //     }
    //     let id = bmCommon.uuid();
    //     let orders = widgetList.map(item => item.order);
    //     let order = Math.max(...orders);
    //     order += 1;
    //     item = {
    //       ...data,
    //       order,
    //       type,
    //       name,
    //       alias: _alias,
    //       id,
    //       left,
    //       top
    //     };
    //   } else if (x == 0 && y == 0) {
    //     bmCommon.group("位置没变");
    //     return;
    //   }
    //   // let obj = ASSISTMAP[assist];
    //   // let { data = {}, alias: _alias = "", name = "", code: type = "" } =
    //   //   obj || {};
    //   // let id = bmCommon.uuid();
    //   // let orders = widgetList.map(item => item.order);
    //   // let order = Math.max(...orders);
    //   // order += 1;
    //   // let item = {
    //   //   ...data,
    //   //   order,
    //   //   type,
    //   //   name,
    //   //   alias: _alias,
    //   //   id,
    //   //   left,
    //   //   top
    //   // };
    //   widgetList.push(item);
    //   this.setLinkPoint(item);
    //   // bmCommon.log(dis, "paint");
    //   // let assist = "water_vertical"; //垂直
    //   // if (dis.x > dis.y) {
    //   //   assist = "water_horizontal"; //水平
    //   //   left = left + width;
    //   // } else {
    //   //   top = top + height;
    //   // }
    //   // let obj = ASSISTMAP[assist];
    //   // let { data = {}, alias = "", name = "", code: type = "" } = obj || {};
    //   // let id = bmCommon.uuid();
    //   // let orders = widgetList.map(item => item.order);
    //   // let order = Math.max(...orders);
    //   // order += 1;
    //   // let item = {
    //   //   ...data,
    //   //   order,
    //   //   type,
    //   //   name,
    //   //   alias,
    //   //   id,
    //   //   left,
    //   //   top
    //   // };
    //   // widgetList.push(item);
    //   // this.setLinkPoint(item);
    //   $(document).on("mousemove", this.mousemoveCanvasPaintEvent);
    //   $(document).on("mouseup", this.mouseupCanvasPaintEvent);
    // },
    // mousemoveCanvasPaintEvent(e) {
    //   e.stopPropagation();
    //   e.preventDefault();
    //   // let { widgetList = [], linkPoint, condition } = this;
    //   // let pos = bmCommon.getMousePosition(e);
    //   // let { x: changeX = "", y: changeY = "" } = pos || {};
    //   // let { startX = "", startY = "" } = condition;
    //   // let x = changeX - startX;
    //   // let y = changeY - startY;
    //   // if (
    //   //   (x > 0 && y < 0 && x > Math.abs(y)) ||
    //   //   (x > 0 && y > 0 && x > y) ||
    //   //   (x > 0 && y == 0)
    //   // ) {
    //   //   //右移动
    //   //   bmCommon.group("右移动");
    //   // } else if (
    //   //   (y > 0 && x < 0 && y > Math.abs(x)) ||
    //   //   (y > 0 && x > 0 && y > x) ||
    //   //   (y > 0 && x == 0)
    //   // ) {
    //   //   //下移动
    //   //   bmCommon.group("下移动");
    //   // } else if (
    //   //   (x < 0 && y > 0 && Math.abs(x) > y) ||
    //   //   (x < 0 && y < 0 && Math.abs(x) > Math.abs(y)) ||
    //   //   (x < 0 && y == 0)
    //   // ) {
    //   //   //左移动
    //   //   bmCommon.group("左移动");
    //   // } else if (
    //   //   (y < 0 && x < 0 && Math.abs(y) > Math.abs(x)) ||
    //   //   (y < 0 && x > 0 && Math.abs(y) > x) ||
    //   //   (y < 0 && x == 0)
    //   // ) {
    //   //   //上移动
    //   //   bmCommon.group("上移动");
    //   // } else if (x == 0 && y == 0) {
    //   //   bmCommon.group("位置没变");
    //   // }
    //   // this.canvasMoving({ x, y });
    //   // condition.startX = changeX;
    //   // condition.startY = changeY;
    // },
    // mouseupCanvasPaintEvent(e) {
    //   $(document).off("mousemove", this.mousemoveCanvasPaintEvent);
    //   $(document).off("mouseup", this.mouseupCanvasPaintEvent);
    //   this.stopMove();
    // }
  }
};
</script>

<style lang="less">
@import (reference) "./../../assets/less/common.less";
.bm-group-style-com {
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
