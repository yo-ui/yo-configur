<!--这里是头部组件-->
<template>
  <div class="bm-countdown-com" v-html="template">
    <!-- 有效期剩余2天23小时43分钟 -->
  </div>
</template>

<script>
// import bmCommon from "@/common/common";
export default {
  name: "bm-countdown-com",
  data() {
    return {
      template: ""
      // _countdownTimeId: Date.now() //存储倒计时定时器id
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
  }, //time 倒计时时间 单位为秒   format format="{dd}天{hh}小时{mm}分钟"
  mounted() {
    let { time = 100 } = this;
    this.countdownTime(time, this.intervalCallback, this.callback);
  },
  destroyed() {
    clearTimeout(this._countdownTimeId);
  },
  methods: {
    /**
     * id 倒计时场景id
     * time 倒计时时间
     * intervalCallback  每次时间递减执行需要执行的函数
     * callback  倒计时完成需要执行的函数
     */
    countdownTime(time, intervalCallback, callback) {
      if (time < 0) {
        clearTimeout(this._countdownTimeId);
        if (callback) {
          callback();
        }
        return;
      }
      let template = this.formatTime(time);
      if (this.replaceCall) {
        template = this.replaceCall(template);
      }
      this.template = template;
      this._countdownTimeId = setTimeout(() => {
        time--;
        if (intervalCallback) {
          intervalCallback(time);
        }
        this.countdownTime(time, intervalCallback, callback);
      }, 1000);
    },
    formatTime(time) {
      let { format = "", showDay = true, double = true } = this;
      if (format) {
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
        if (!showDay) {
          hour = day * 24 + hour;
          day = 0;
        }
        if (double) {
          day = day < 10 ? "0" + day : day;
          hour = hour < 10 ? "0" + hour : hour;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
        }
        return this.$lang(format, {
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

<!-- Add "scoped" attribute to limit CSS to this com only -->
//
<style lang="less" scoped>
// // @import "../assets/less/coms/footer.less";
//
</style>
