<template>
  <div class="bm-pay-password-com" @click="$refs.input.focus()">
    <div
      class="password-item"
      :class="{ active: currentIndex == index }"
      v-for="(item, index) in maxlength"
      :key="index"
    >
      <i class="dot" v-if="value[index]">●</i>
      <i class="line" v-else></i>
    </div>
    <!-- v-model="value" -->
    <input
      ref="input"
      @blur="onBlurEvent"
      @focus="onFocusEvent"
      @keyup="keyupEvent($event)"
      @keydown="keydownEvent($event)"
      class="password-input"
      type="tel"
      autofocus
      v-bind="$attrs"
      v-bind:value="value"
      @input="onInputEvent"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
const Props = {
  // 数字 ，数字+字母，字母
  type: ["Number", "String", "Letter"]
};
export default {
  data() {
    return {
      currentIndex: -1
      // value: ""
    };
  },
  components: {},
  computed: {},
  props: {
    //最大长度
    maxlength: {
      type: [Number, String],
      default: 6
    },
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      validator(value) {
        return Props.type.indexOf(value) != -1;
      }
    }
  },
  methods: {
    show() {
      this.$refs.input?.focus();
    },
    onBlurEvent() {
      this.currentIndex = -1;
    },
    onFocusEvent() {
      let { value, maxlength } = this;
      this.currentIndex = value
        ? value.length >= maxlength
          ? value.length - 1
          : value.length
        : 0;
    },
    keydownEvent(event) {
      // bmCommon.log("keydownEvent",event.keyCode, event);
      let { type } = this;
      let { keyCode } = event;
      //数字+小数字键盘
      let isNumber =
        (keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105);
      //  Backspace, del, 左右方向键
      let isEnableKey =
        keyCode == 8 || keyCode == 46 || keyCode == 37 || keyCode == 39;
      //字母
      let isLetter = keyCode >= 58 && keyCode <= 91;
      if (isEnableKey) {
        return true;
      }
      if (type == "Number") {
        //数字+小数字键盘
        event.returnValue = isNumber;
        return isNumber;
      } else if (type == "Letter") {
        //字母
        event.returnValue = isLetter;
        return isLetter;
      } else {
        event.returnValue = isNumber || isLetter;
        return isNumber || isLetter;
      }
    },
    keyupEvent(event) {
      // bmCommon.log('keyupEvent',event.keyCode, event);
      let { value } = this;
      this.currentIndex = value.length > 5 ? value.length - 1 : value.length;
    },
    onInputEvent(event) {
      this.$emit("input", event.target.value);
    },
    clear() {},
    init() {}
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/common/pay.password.less";
</style>
