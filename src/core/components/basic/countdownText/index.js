import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    let { info = {} } = this;
    let { content = 100 } = info || {};
    this.countdownTime(content, this.intervalCallback, this.callback);
  }

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
    // this.template = template;
    this.renderTemplateText(template);

    this._countdownTimeId = setTimeout(() => {
      time--;
      if (intervalCallback) {
        intervalCallback(time);
      }
      this.countdownTime(time, intervalCallback, callback);
    }, 1000);
  }
  formatTime(time) {
    // format = "{hh}:{mm}:{ss}"
    let { showDay = true, double = true } = this;
    let { info = {} } = this;
    let { format = "" } = info || {};
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
      return $vm.$lang(format, {
        dd: day,
        hh: hour,
        mm: minutes,
        ss: seconds
      });
    } else {
      return time + "s";
    }
  }
  intervalCallback(time) {
    // this.$emit("intervalCallback", time);
  }
  callback(time) {
    // this.$emit("callback", time);
  }

  //组件样式

  template() {
    let { info = {} } = this;
    let { content = 100 } = info || {};
    let template = this.formatTime(content);
    return super.wrap(
      { info },
      `
      <div
      class="bm-basic-countdown-text-com component"
      style="${this.composeStyles(this.comStyle())}"
    >
    <div class="bm-countdown-com">
    ${template}
  </div>
    </div>
    `
    );
  }
  destroy() {
    clearTimeout(this._countdownTimeId);
  }

  renderTemplateText(template) {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.find(".bm-countdown-com").html(template);
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    // let { id = "" } = info || {};
    // let $container = $(`#${id}>.component`);
    // $container.find(".bm-countdown-com").html(this.getTemplateText());
  }

  event() {}
}

export default Text;
