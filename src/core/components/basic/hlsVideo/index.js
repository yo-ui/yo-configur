import bmCommon from "@/common/common";
import Component from "@/core/Component";
import EZUIKit from "@/common/lib/ezuikit";
// import HLS from "hls.js";
import CanvasEvent from "../../../CanvasEvent";
import "../../../../assets/less/components/component/basic/hls.video.less";

class Text extends Component {
  condition = {
    lineType: 2
  };
  constructor(props) {
    super(props);
  }
  init() {
    let { info = {} } = this;
    let { autoplay = false } = info || {};
    if (autoplay) {
      this.ezuikitVideo();
    }
  }
  // hlsVideo() {
  //   let video = this.$refs.bmVideo;
  //   let { info = {} } = this;
  //   if (HLS.isSupported()) {
  //     var hls = new HLS();
  //     let { src = "" } = info || {};
  //     hls.loadSource(src);
  //     hls.attachMedia(video);
  //     hls.on(HLS.Events.MANIFEST_PARSED, () => {
  //       video.play();
  //     });
  //   }
  // }

  // 初始化播放器
  ezuikitVideo() {
    let { info = {}, condition } = this;
    let { bindData = {} } = info || {};
    let { deviceId = "" } = bindData || {};
    if (deviceId) {
      condition.deviceId = deviceId;
      CanvasEvent.canvasTokenFunc({ deviceId }, ({ accessToken, serial }) => {
        // this.$nextTick(() => {
        condition.accessToken = accessToken;
        condition.serial = serial;
        this.initPlayer();
      });
      // });
    }
  }
  cancelEvent() {
    this.destroy();
  }
  // 切换线路
  switchLineEvent() {}
  //播放暂停操作
  operateEvent() {
    // let { playStatus = true, cameraPlayer = null } = this;
    // if (playStatus) {
    //   cameraPlayer && cameraPlayer.stop();
    // } else {
    //   this.initPlayer();
    // }
    this.ezuikitVideo();
    // this.playStatus = true;
    // this.played = true;
  }
  // playEvent() {
  //   let { played, cameraPlayer } = this;
  //   if (played) {
  //     cameraPlayer?.pause();
  //   } else {
  //     cameraPlayer?.play();
  //   }
  //   this.played = !played;
  // },
  mutedEvent() {
    let { info = {} } = this;
    let { muted = "" } = info || {};
    this.mutedPlay(muted);
    info.muted = !muted;
  }
  mutedPlay(muted) {
    let { cameraPlayer } = this;
    if (muted === true) {
      cameraPlayer?.openSound();
    } else {
      cameraPlayer?.closeSound();
    }
  }
  fullScreenEvent() {
    let { cameraPlayer } = this;
    cameraPlayer?.fullScreen();
  }
  // 移动摄像头
  moveCameraEvent(direction) {
    let { info = {} } = this;
    let { bindData = {} } = info || {};
    let { deviceId = "" } = bindData || {};
    CanvasEvent.canvasStartFunc({ direction, deviceId });
  }
  // 停止移动摄像头
  stopMoveCameraEvent(direction) {
    // let { logList = [] } = this;
    // let log = {
    //   time: this.$moment().format("YYYY-MM-DD HH:mm:ss.S"),
    //   msg:
    //     "停止向" + { 0: "上", 1: "下", 2: "左", 3: "右" }[direction] + "移动"
    // };
    // logList.splice(0, 0, log);
    let { info = {} } = this;
    let { bindData = {} } = info || {};
    let { deviceId = "" } = bindData || {};
    CanvasEvent.canvasStopFunc({ direction, deviceId });
  }
  initPlayer() {
    let { condition, cameraPlayer = null, info = {} } = this;
    let { accessToken = "", serial = "", lineType = 2 } = condition;
    let line = lineType == 2 ? "" : ".hd";
    let { width = "", height = "", muted = false, id = "" } = info || {};
    let autoplay = true;
    var url = `ezopen://open.ys7.com/${serial}/1${line}.live`;
    this.playStatus = true;
    // this.played = true;
    cameraPlayer?.stop();
    let params = {
      id: `cameraPlayer_${id}`,
      autoplay,
      url,
      accessToken,
      decoderPath: "/static/js/lib/ezuikit",
      width,
      height,
      handleError: () => {},
      handleSuccess: () => {}
    };
    // bmCommon.log("播放器参数为", params);
    cameraPlayer = new EZUIKit.EZUIPlayer(params);
    // cameraPlayer = new EZUIKit.EZUIPlayer('cameraPlayer');
    // 这里是打印日志，本例抛出到播放页面
    cameraPlayer.on("log", (str, className) => {
      // let { logList = [] } = this;
      // let log = {
      //   time: this.$moment().format("YYYY-MM-DD HH:mm:ss.S"),
      //   msg: str
      // };
      // logList.splice(0, 0, log);
      bmCommon.log("log", str, className);
    });
    this.cameraPlayer = cameraPlayer;
    if (muted) {
      try {
        cameraPlayer?.closeSound();
      } catch (err) {
        bmCommon.error(err);
      }
    }
  }
  destroy() {
    this.playStatus = false;
    let { cameraPlayer } = this;
    // let { width = "", height = "" } = info || {};
    // cameraPlayer?.reSize(width, height);
    cameraPlayer?.stop();
    cameraPlayer?.destroy();
  }

  //组件样式

  template() {
    let { info = {}, playStatus = false } = this;
    let { id = "", muted = false } = info || {};
    let toolbar = playStatus
      ? `<div class="toolbar">
    <div class="left">
      <i
        class="bomi ${muted ? "bomi-volume-d" : "bomi-volume"}"
      ></i>
    </div>
    <div class="right">
      <i class="el-icon-full-screen"></i>
    </div>
  </div>
    `
      : "";
    return super.wrap(
      { info },
      `
    <div class="bm-basic-hls-video-com component"
    style="${this.composeStyles(this.comStyle())}">
    <div id="cameraPlayer_${id}"></div>
    ${toolbar}
  </div>
    `
    );
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    // let { id = "", content = "" } = info || {};
    // let $container = $(`#${id}>.component`);
    // $container.html(content);
    let {
      // id = "",
      autoplay = false,
      bindData = {},
      width = 0,
      height = 0,
      muted = false
    } = info || {};
    let { deviceId = "" } = bindData || {};
    // let $container = $(`#${id}>.component`);
    let oldParams = {
      autoplay,
      width,
      height,
      muted,
      deviceId
    };
    for (let i in oldParams) {
      let oldVal = this.params[i];
      let val = info[i];
      if (oldVal != val) {
        if (i === "autoplay") {
          if (val) {
            this.ezuikitVideo();
          } else {
            this.destroy();
          }
        }
        if (i === "width" || i === "height") {
          this.destroy();
        }
        if (i === "muted") {
          this.mutedPlay(val);
        }
        if (i === "deviceId") {
          val = bindData[i];
          this.init();
        }
        this.params[i] = val;
      }
    }
  }

  event() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.on("click", ".bomi-volume-d,.bomi-volume", function(e) {
      this.fullScreenEvent();
    });
    $container.on("click", ".el-icon-full-screen", function(e) {
      this.mutedEvent();
    });
  }
}

export default Text;
