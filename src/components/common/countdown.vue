<!--这里是头部组件-->
<template>
  <div class="bm-countdown-component" v-html="template">
    <!-- 有效期剩余2天23小时43分钟 -->
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
export default {
  name: "fq-countdown-component",
  data() {
    return {
      template: "",
      countdownTimeId: Date.now() //存储倒计时定时器id
    };
  },
  props: {
    time: {
      type: Number
    },
    format: {
      type: String,
      default: "{hh}:{mm}:{ss}"
    },
    double: {
      type: Boolean,
      default: true
    },
    replaceCall: {
      type: Function
    },
    showDay: {
      type: Boolean,
      default: true
    }
  }, //time 倒计时时间 单位为秒   format format="dd天hh小时mm分钟"
  mounted() {
    let time = this.time;
    if (!time) {
      time = 100;
    }
    this.countdownTime(time, this.intervalCallback, this.callback);
  },
  destroyed() {
    clearTimeout(this.countdownTimeId);
  },
  methods: {
    /**
     * id 倒计时场景id
     * time 倒计时时间
     * intervalCallback  每次时间递减执行需要执行的函数
     * callback  倒计时完成需要执行的函数
     */
    countdownTime(time, intervalCallback, callback) {
      let that = this;
      if (time < 0) {
        clearTimeout(that.countdownTimeId);
        if (callback) {
          callback();
        }
        return;
      }
      let template = that.formatTime(time);
      if (that.replaceCall) {
        template = that.replaceCall(template);
      }
      that.template = template;
      that.countdownTimeId = setTimeout(() => {
        time--;
        if (intervalCallback) {
          intervalCallback(time);
        }
        that.countdownTime(time, intervalCallback, callback);
      }, 1000);
    },
    formatTime(time) {
      if (this.format) {
        time = time * 1000;
        let day = parseInt(time / (1000 * 60 * 60 * 24), 10);
        let hour = parseInt(
          (time - day * 1000 * 60 * 60 * 24) / (1000 * 60 * 60),
          10
        );
        let minutes = parseInt(
          (time - day * 1000 * 60 * 60 * 24 - hour * 1000 * 60 * 60) /
            (1000 * 60),
          10
        );
        let seconds = parseInt(
          (time -
            day * 1000 * 60 * 60 * 24 -
            hour * 1000 * 60 * 60 -
            minutes * 1000 * 60) /
            1000,
          10
        );
        if (!this.showDay) {
          hour = day * 24 + hour;
          day = 0;
        }
        if (this.double) {
          day = day < 10 ? "0" + day : day;
          hour = hour < 10 ? "0" + hour : hour;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
        }
        return this.langKey(this.format, {
          dd: day,
          hh: hour,
          mm: minutes,
          ss: seconds
        });
      } else {
        return time + "s";
      }
    },
    intervalCallback(time) {
      this.$emit("intervalCallback", time);
    },
    callback(time) {
      this.$emit("callback", time);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
//
<style lang="less" scoped>
// // @import "../assets/less/components/footer.less";
//
</style>
