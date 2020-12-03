<template>
  <!-- <div class="bm-data-com">
    <el-collapse v-model="activeNames"> -->
  <el-collapse-item :title="$lang('通用绑定')" name="name" disabled>
    <p>
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
    </p>
    <p v-if="info.dataType == 'device'">
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
    <p v-if="info.dataType == 'point'">
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
    <!-- <p>
      <span class="label"> {{ $lang("绑定组件") }}: </span>
      <el-select v-model="info.bindData.comId">
        <el-option
          :key="item.id"
          v-for="item in widgetList"
          :label="`${item.comName}(${item.id})`"
          :value="item.id"
        ></el-option>
      </el-select>
    </p>
    <p v-if="info.bindData.comId !== ''">
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
import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "commonDataCom",
  data() {
    return {
      // activeNames: ["name"]
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
  components: {},
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList"
    })
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    addEvent(item = {}) {
      // eslint-disable-next-line no-undef
      bmCommon.log(item);
      $vm.$emit("bind-device", item);
    }
  }
};
</script>

<style lang="less">
// @import (reference) "./../../../../assets/less/common.less";
// .bm-image-style-com {
// }
</style>
