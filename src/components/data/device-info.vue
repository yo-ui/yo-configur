//设备信息
<template>
  <el-dialog
    class="bm-device-info-com"
    v-dialogDrag="true"
    :show-close="false"
    :visible.sync="showDialogStatus"
    width="50vw"
  >
    <i class="el-icon-close" @click.stop="closeEvent"></i>
    <el-radio-group
      v-model="condition.type"
      size="medium"
      @change="typeChangeEvent"
    >
      <el-radio-button
        v-for="item in typeList"
        :key="item.code"
        :label="item.code"
      >
        {{ $lang(item.name) }}
      </el-radio-button>
    </el-radio-group>

    <el-form ref="form" @mousewheel.native.stop v-loading="dataLoadingStatus">
      <template v-if="condition.type == 'runStatus'">
        <template v-if="pointList && pointList.length > 0">
          <el-form-item v-for="(item, index) in pointList" :key="index">
            <img class="img" src="/static/img/point/point-defult.png" />
            <div class="txt-box">
              <h2>{{ $lang(item.name) }}</h2>
              <p>&nbsp;</p>
            </div>
            <div class="value">
              {{
                item.status && item.status.length > 0
                  ? (item.status.find(_item => item.value == _item.value) || {})
                      .name
                  : item.value || "--"
              }}
              <!-- <template v-if="!(item.status && item.status.length > 0)"> -->
              <small>{{ item.unit || "" }}</small>
              <!-- </template> -->
            </div>
          </el-form-item>
        </template>
        <template v-else>
          <div v-if="!dataLoadingStatus" class="empty"></div>
        </template>
      </template>
      <template v-else>
        <template v-if="controlPointList && controlPointList.length > 0">
          <el-form-item v-for="(item, index) in controlPointList" :key="index">
            <img class="img" src="/static/img/point/point-defult.png" />
            <div class="txt-box">
              <h2>{{ $lang(item.name) }}</h2>
              <p>&nbsp;</p>
            </div>
            <div class="box">
              <template v-if="item.type == 2">
                <div
                  class="switch"
                  :class="{ on: item.value == 1 }"
                  @click="controlEvent(item)"
                >
                  <span>{{ $lang("打开") }}</span>
                  <span>{{ $lang("关闭") }}</span>
                </div>
              </template>
              <template v-else-if="item.type == 1">
                <el-slider
                  v-if="item.showSliderStatus"
                  v-model="item.slider.value"
                  :min="item.slider.min"
                  :max="item.slider.max"
                  :step="item.slider.step"
                >
                </el-slider>
                <el-select
                  value-key="value"
                  @change="selectChangeEvent(item)"
                  filterable
                  allow-create
                  @blur="selectBlurEvent($event, item)"
                  v-model="item.value"
                  :placeholder="$lang('请选择')"
                >
                  <el-option
                    v-for="(_item, _index) in item.optionalValList || []"
                    :key="_index"
                    :label="_item.descr"
                    :value="_item.value"
                  >
                  </el-option>
                </el-select>
                <el-button type="primary" @click="controlEvent(item)">
                  {{ $lang("确定") }}
                </el-button>
              </template>
              <template v-else>
                <el-button-group>
                  <el-button
                    @click.native="controlEvent(item, _item)"
                    :type="item.value == _item.value ? 'primary' : ''"
                    v-for="(_item, _index) in item.optionalValList || []"
                    :key="_index"
                    :label="_item.value"
                  >
                    {{ _item.descr }}
                  </el-button>
                </el-button-group>
              </template>
            </div>
          </el-form-item>
        </template>
        <template v-else>
          <div v-if="!dataLoadingStatus" class="empty"></div>
        </template>
      </template>
    </el-form>
  </el-dialog>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "deviceInfoCom",
  // props: ["info"],
  data() {
    const typeList = Object.freeze([
      { name: "运行状态", code: "runStatus" },
      { name: "实时控制", code: "control" }
    ]);
    return {
      dataLoadingStatus: true,
      showDialogStatus: false,
      deviceInfo: {},
      typeList,
      pointIds: [],
      points: [], //控制点位
      devicePoint: "",
      condition: {
        type: typeList[0].code
      }
    };
  },
  computed: {
    ...mapGetters(),
    pointList() {
      let { deviceInfo = {}, pointIds = [] } = this;
      let { points = [] } = deviceInfo || {};
      let { length = 0 } = pointIds || [];
      if (length < 1) {
        return points || [];
      }
      return (points || []).filter(item => {
        return pointIds.indexOf(item.id) > -1;
      });
    },
    controlPointList() {
      let { points = [], pointIds = [] } = this;
      let { length = 0 } = pointIds || [];
      if (length < 1) {
        return points || [];
      }
      return (points || []).filter(item => {
        return pointIds.indexOf(item.point) > -1;
      });
    }
  },
  methods: {
    ...mapMutations(),
    ...mapActions({
      deviceControlledPointsAction: "deviceControlledPoints"
    }),
    typeChangeEvent() {
      let { condition } = this;
      let { type = "", deviceId = "" } = condition;
      this.dataLoadingStatus = true;
      if (type == "control") {
        this.deviceControlledPointsFunc((list = []) => {
          this.points = list || [];
          this.dataLoadingStatus = false;
        });
      } else {
        $vm.$emit("device", {
          deviceId,
          callback: (device = {}) => {
            this.deviceInfo = device || {};
            this.dataLoadingStatus = false;
            // this.$emit("load", info);
          }
        });
      }
    },
    show(item = {}) {
      let { deviceId = "", pointIds = [] } = item || {};
      let { condition } = this;
      condition.deviceId = deviceId;
      this.showDialogStatus = true;
      this.pointIds = pointIds || [];
      this.typeChangeEvent();
    },
    //select失去焦点事件
    selectBlurEvent(e, item = {}) {
      item.value = e.target.value || "";
    },
    selectChangeEvent(item = {}) {
      this.$nextTick(() => {
        let { value = "" } = item || {};
        if ((value || "").indexOf("~") > -1) {
          let list = value.split("~");
          let [min = 0, max = 0] = list || [];
          item.slider = {
            min: Number(min),
            max: Number(max),
            step: 1,
            value: 0
          };
          item.showSliderStatus = true;
        } else {
          item.showSliderStatus = false;
        }
      });
    },

    controlEvent(item, _item) {
      let { condition } = this;
      let { deviceId = "" } = condition;
      if (_item) {
        let { value = 0 } = _item || {};
        item.value = value;
      }
      let {
        point = "",
        value = "",
        oldValue = "",
        type = "",
        slider = {},
        showSliderStatus = false
      } = item;
      if (showSliderStatus) {
        let { value: _value = "" } = slider || {};
        value = _value;
      }
      if (type == 2) {
        value = value == 1 ? "0" : "1";
      }
      this.currentItem = item;
      $vm.$emit("control", {
        deviceId,
        point,
        value,
        callback: flag => {
          if (!flag) {
            item.value = oldValue;
          } else {
            if (_item) {
              this.typeChangeEvent();
            } else {
              item.value = value;
            }
          }
        }
      });
    },
    closeEvent() {
      this.showDialogStatus = false;
    },
    // 获取设备点位列表
    deviceControlledPointsFunc(callback) {
      let value = [];
      let { condition } = this;
      let { deviceId = "" } = condition;
      if (!deviceId) {
        callback && callback(value || []);
        return;
      }
      this.deviceControlledPointsAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result = {} } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let { pointList = [] } = result || {};
            value = pointList || [];
            value.forEach(item => {
              let {
                point = "",
                type = "",
                slider = {},
                value: _value = "",
                optionalValList = []
              } = item || {};
              item.oldValue = _value;
              if (type == 1) {
                let marks = {};
                let min = 0,
                  __value = 0,
                  max = 100,
                  step = 1;
                _value = Number(_value);
                item.showSliderStatus = false;
                let flag = false;
                optionalValList.forEach(__item => {
                  let { value: ___value, step: ___step } = __item || {};
                  if (___value.indexOf("~") > -1) {
                    let values = ___value.split("~");
                    let [___min = 0, ___max = 100] = values || [];
                    if (_value >= ___min && _value < ___max) {
                      max = Number(___max);
                      min = Number(___min);
                      __value = _value;
                      step = ___step;
                    }
                    item.showSliderStatus = true;
                  } else {
                    if (Number(_value) == Number(___value)) {
                      flag = true;
                      item.value = ___value;
                    }
                  }
                });
                if (!flag) {
                  let [__item = {}] = optionalValList || [];
                  let { value: ___value = "", descr: ___descr = "" } =
                    __item || {};
                  //如果值不存在则加入列表  原需求默认显示第一个
                  let _unit = ___descr.replace(___value, "");
                  optionalValList.push({ value, descr: _value + _unit });
                }
                let center = (max - min) / step + min;
                marks[min] = min;
                marks[max] = max;
                marks[center] = center;
                slider = {
                  min,
                  value: __value,
                  max,
                  step,
                  marks
                };
                item.slider = slider || {};
              }
              if (point == "PM2_5") {
                item.point = "PM2.5";
              }
            });
          }
          callback && callback(value || []);
        })
        .catch(err => {
          callback && callback(value || []);
          bmCommon.error("获取设备点位列表失败！", err);
        });
    }
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/data/device.info.less";
</style>
