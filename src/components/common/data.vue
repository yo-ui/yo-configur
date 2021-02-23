<template>
  <!-- <div class="bm-data-com">
    <el-collapse v-model="activeNames"> -->
  <el-collapse-item :title="$lang('通用绑定')" name="name" disabled>
    <!-- <p>
      <span class="label"> {{ $lang("X") }}: </span>
      <el-tooltip :content="$lang('添加绑定')" placement="top" effect="dark">
        <i
          class="el-icon-link"
          @click.stop="addEvent(info)"
          :class="{ active: info.bindData && info.bindData.x !== '' }"
        ></i>
      </el-tooltip>
    </p>
    <p>
      <span class="label"> {{ $lang("Y") }}: </span>
      <el-tooltip :content="$lang('添加绑定')" placement="top" effect="dark">
        <i
          class="el-icon-link"
          @click.stop="addEvent(info)"
          :class="{ active: info.bindData && info.bindData.y !== '' }"
        ></i>
      </el-tooltip>
    </p>
    <p>
      <span class="label"> {{ $lang("宽") }}: </span>
      <el-tooltip :content="$lang('添加绑定')" placement="top" effect="dark">
        <i
          class="el-icon-link"
          @click.stop="addEvent(info)"
          :class="{ active: info.bindData && info.bindData.width !== '' }"
        ></i>
      </el-tooltip>
    </p>
    <p>
      <span class="label"> {{ $lang("高") }}: </span>
      <el-tooltip :content="$lang('添加绑定')" placement="top" effect="dark">
        <i
          class="el-icon-link"
          @click.stop="addEvent(info)"
          :class="{ active: info.bindData && info.bindData.height !== '' }"
        ></i>
      </el-tooltip>
    </p>
    <p>
      <span class="label"> {{ $lang("旋转") }}: </span>
      <el-tooltip :content="$lang('添加绑定')" placement="top" effect="dark">
        <i
          class="el-icon-link"
          @click.stop="addEvent(info)"
          :class="{ active: info.bindData && info.bindData.rotate !== '' }"
        ></i>
      </el-tooltip>
    </p>
    <p>
      <span class="label"> {{ $lang("显隐") }}: </span>
      <el-tooltip :content="$lang('添加绑定')" placement="top" effect="dark">
        <i
          class="el-icon-link"
          @click.stop="addEvent(info)"
          :class="{ active: info.bindData && info.bindData.visible !== '' }"
        ></i>
      </el-tooltip>
    </p> -->

    <template v-if="info.dataType == 'device'">
      <p>
        <span class="label"> {{ $lang("绑定设备") }}: </span>
        <el-tooltip
          :content="$lang('添加设备绑定')"
          placement="top"
          effect="dark"
        >
          <i
            class="el-icon-link"
            @click.stop="addEvent(info)"
            :class="{
              active: info.bindData && info.bindData.deviceId !== ''
            }"
          ></i>
        </el-tooltip>
      </p>
      <template v-if="info.bindData && info.bindData.deviceId !== ''">
        <p>
          <span class="label"> {{ $lang("设备ID") }}: </span>
          {{ info.bindData.deviceId }}
        </p>
        <p>
          <span class="label"> {{ $lang("设备名称") }}: </span>
          {{ device.name }}
        </p>
        <!-- <p>
          <span class="label"> {{ $lang("监测位置") }}: </span>
          {{ info.bindData.deviceId }}
        </p> -->
        <p class="top-position" v-if="pointList && pointList.length > 0">
          <span class="label"> {{ $lang("点位列表") }}: </span>
          <ul>
            <li v-for="item in pointList" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </p>
      </template>
    </template>
    <template v-if="info.dataType == 'point'">
      <p>
        <span class="label"> {{ $lang("绑定点位") }}: </span>
        <el-tooltip
          :content="$lang('添加设备点位绑定')"
          placement="top"
          effect="dark"
        >
          <i
            class="el-icon-link"
            @click.stop="addEvent(info)"
            :class="{
              active: info.bindData && info.bindData.devicePoint !== ''
            }"
          ></i>
        </el-tooltip>
      </p>
      <template v-if="info.bindData && info.bindData.devicePoint !== ''">
        <p>
          <span class="label"> {{ $lang("设备ID") }}: </span>
          {{ info.bindData.deviceId }}
        </p>
        <p>
          <span class="label"> {{ $lang("设备名称") }}: </span>
          {{ device.name }}
        </p>
        <p>
          <span class="label"> {{ $lang("点位名称") }}: </span>
          {{ device.pointName }}
        </p>
      </template>
    </template>
    <p>
      <span class="label"> {{ $lang("绑定组件") }}: </span>
      <el-select
        v-model="info.bindData.comId"
        :placeholder="$lang('请选择需要绑定的组件')"
      >
        <el-option value="" :label="$lang('无')"></el-option>
        <template v-for="item in widgetList">
          <el-option
            :key="item.id"
            v-if="info.id != item.id"
            :label="`${item.comName}(${item.id})`"
            :value="item.id"
          ></el-option>
        </template>
      </el-select>
    </p>
    <!-- <p v-if="info.bindData.comId">
      <el-input
        v-model="info.bindData.content"
        :placeholder="$lang('请输入绑定的数据(地址|数字|字符串)')"
        size="normal"
        clearable
      ></el-input>
    </p> -->
  </el-collapse-item>
  <!-- </el-collapse> -->
  <!-- </div> -->
</template>

<script>
// import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "commonDataCom",
  data() {
    return {
      // activeNames: ["name"]
      device: {},
      pointList: []
    };
  },
  props: {
    // id: {
    //   type: String,
    //   default: ""
    // }
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {},
  computed: {
    ...mapGetters({
      //widgetList: "canvas/getWidgetList"
      widgetList: []
    })
  },
  created() {
    // let { id = "" } = this;
    // this.info = window.bm_widgetMap[id];
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
    }),
    addEvent(item = {}) {
      // eslint-disable-next-line no-undef
      // bmCommon.log(item);
      $vm.$emit("bind-device", item);
    },
    init() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { pointIds = [], deviceId="",devicePoint = "" } = bindData || {};
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          let { points = [] } = device || {};
        if (devicePoint) {
          let { name = "" } = points.find(item => item.id == devicePoint) || {};
          device.pointName = name;
        } else {
          this.pointList = points.filter(
            item => pointIds.indexOf(item.id) > -1
          );
        }
        this.device = device || {};
        }
      });
    },
  },
  watch: {
    "info.bindData.deviceId": {
      handler(newVal, oldVal) {
        if (newVal != oldVal) {
          this.init();
        }
      },
      deep: true
    }
  }
};
</script>

<style lang="less">
// @import (reference) "./../../../../assets/less/common.less";
// .bm-image-style-com {
// }
</style>
