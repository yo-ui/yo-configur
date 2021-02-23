<template>
  <!-- <video
    ref="bmVideo"
    class="bm-basic-hls-video-com"
    :controls="info.controls"
    :autoplay="info.autoplay"
    :loop="info.loop"
    :muted="info.muted"
    :preload="info.preload"
    :poster="info.poster"
    :style="comStyle"
  >
    <source :src="info.src" />
  </video> -->
  <div class="bm-basic-hls-video-com" :style="comStyle">
    <div :id="`cameraPlayer_${info.id}`"></div>
    <!-- <video id="cameraPlayer"
    ref="bmVideo"
    :controls="info.controls"
    :autoplay="info.autoplay"
    :loop="info.loop"
    :muted="info.muted"
    :preload="info.preload"
    :poster="info.poster"
    :style="comStyle"
  >
    <source :src="info.src" />
  </video> -->
    <!-- :class="playStatus ? 'el-icon-video-pause' : 'el-icon-video-play'" -->
    <!-- <i
      @click="operateEvent"
      v-if="!playStatus"
      class="play-btn el-icon-video-play"
    ></i>
    <div class="operate-box">
      <i
        class="el-icon-arrow-left"
        @mousedown="moveCameraEvent(2)"
        @mouseup="stopMoveCameraEvent(2)"
      ></i>
      <i
        class="el-icon-arrow-right"
        @mousedown="moveCameraEvent(3)"
        @mouseup="stopMoveCameraEvent(3)"
      ></i>
      <i
        class="el-icon-arrow-down"
        @mousedown="moveCameraEvent(1)"
        @mouseup="stopMoveCameraEvent(1)"
      ></i>
      <i
        class="el-icon-arrow-up"
        @mousedown="moveCameraEvent(0)"
        @mouseup="stopMoveCameraEvent(0)"
      ></i>
    </div> -->
    <div class="toolbar" v-if="playStatus">
      <div class="left">
        <!-- <i
          @click="playEvent"
          class="btn el-icon-video-play"
          :class="played ? 'el-icon-video-pause' : 'el-icon-video-play'"
        ></i> -->
        <i
          @click="mutedEvent"
          class="bomi"
          :class="{ true: 'bomi-volume-d', false: 'bomi-volume' }[!!info.muted]"
        ></i>
      </div>
      <div class="right">
        <i @click="fullScreenEvent" class="el-icon-full-screen"></i>
      </div>
    </div>
  </div>
</template>

<script>
import HLS from "hls.js";
import EZUIKit from "@/common/lib/ezuikit";
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "hlsVideoCom",
  data() {
    return {
      playStatus: false,
      played: false,
      dataLoadingStatus: true,
      condition: {}
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
  computed: {
    ...mapGetters(),
    deviceId() {
      let { info = {} } = this;
      let { deviceId = "" } = info || {};
      return deviceId;
    },
    width() {
      let { info = {} } = this;
      let { width = "" } = info || {};
      return width;
    },
    autoplay() {
      let { info = {} } = this;
      let { autoplay = "" } = info || {};
      return autoplay;
    },
    muted() {
      let { info = {} } = this;
      let { muted = "" } = info || {};
      return muted;
    },
    height() {
      let { info = {} } = this;
      let { height = "" } = info || {};
      return height;
    },

    //渐变颜色样式
    gradientStyle() {
      return (info = {}) => {
        // let { info = {} } = this;
        let { gradientStyle = {} } = info || {};
        let {
          type = "",
          angle = "",
          center = "",
          radialShape = "",
          valueList = []
        } = gradientStyle || {};
        let styles = {};
        let colors = valueList.map(item => `${item.code} ${item.value}%`);
        if (type == "linear") {
          styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
        } else if (type == "radial") {
          styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
        }
        return styles;
      };
    },
    comStyle() {
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",

        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        backgroundType = "",
        backgroundColor = "",
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        borderTop = 0,
        borderBottom = 0,
        borderLeft = 0,
        borderRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        shadow = {},
        shadowable = false,
        backgroundImage = "",
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      // if (backgroundRepeat) {
      //   styles["background-repeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["background-size"] = backgroundSize;
      // }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "box-shadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;

      if (borderTop) {
        if (borderStyle) {
          styles["border-top-style"] = borderStyle;
        }
        styles["border-top-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-top-color"] = borderColor;
        }
      } else {
        styles["border-top"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["border-bottom-style"] = borderStyle;
        }
        styles["border-bottom-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-bottom-color"] = borderColor;
        }
      } else {
        styles["border-bottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["border-left-style"] = borderStyle;
        }
        styles["border-left-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-left-color"] = borderColor;
        }
      } else {
        styles["border-left"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["border-right-style"] = borderStyle;
        }
        styles["border-right-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-right-color"] = borderColor;
        }
      } else {
        styles["border-right"] = "none";
      }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      if (backgroundRepeat) {
        styles["background-repeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["background-size"] = backgroundSize;
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      if (borderTop) {
        if (borderStyle) {
          styles["border-top-style"] = borderStyle;
        }
        styles["border-top-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-top-color"] = borderColor;
        }
      } else {
        styles["border-top"] = "none";
      }
      if (borderBottom) {
        if (borderStyle) {
          styles["border-bottom-style"] = borderStyle;
        }
        styles["border-bottom-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-bottom-color"] = borderColor;
        }
      } else {
        styles["border-bottom"] = "none";
      }
      if (borderLeft) {
        if (borderStyle) {
          styles["border-left-style"] = borderStyle;
        }
        styles["border-left-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-left-color"] = borderColor;
        }
      } else {
        styles["border-left"] = "none";
      }
      if (borderRight) {
        if (borderStyle) {
          styles["border-right-style"] = borderStyle;
        }
        styles["border-right-width"] = `${borderWidth}px`;
        if (borderColor) {
          styles["border-right-color"] = borderColor;
        }
      } else {
        styles["border-right"] = "none";
      }
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;

      // if (color) {
      //   styles["color"] = color;
      // }
      // if (fontSize) {
      //   styles["font-size"] = `${fontSize}px`;
      // }
      // if (fontFamily) {
      //   styles["font-family"] = `${fontFamily}`;
      // }
      // if (fontWeight) {
      //   styles["font-weight"] = fontWeight;
      // }
      // if (fontStyle) {
      //   styles["font-style"] = fontStyle;
      // }
      // if (textDecoration) {
      //   styles["text-decoration"] = textDecoration;
      // }

      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["background-image"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
      return styles || {};
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      canvasStopAction: "canvasStop",
      canvasStartAction: "canvasStart",
      canvasTokenAction: "canvasToken"
    }),
    init() {
      this.$nextTick(() => {
        // this.hlsVideo()
        let { info = {} } = this;
        let { autoplay = false } = info || {};
        if (autoplay) {
          this.ezuikitVideo();
        }
      });
    },
    hlsVideo() {
      let video = this.$refs.bmVideo;
      let { info = {} } = this;
      if (HLS.isSupported()) {
        var hls = new HLS();
        let { src = "" } = info || {};
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(HLS.Events.MANIFEST_PARSED, () => {
          video.play();
        });
      }
    },
    // 初始化播放器
    ezuikitVideo() {
      let { info = {}, condition } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "" } = bindData || {};
      if (deviceId) {
        condition.deviceId = deviceId;
        this.canvasTokenFunc(() => {
          this.dataLoadingStatus = false;
          this.$nextTick(() => {
            this.initPlayer();
          });
        });
      } else {
        this.dataLoadingStatus = false;
      }
    },
    cancelEvent() {
      this.destroy();
    },
    // 切换线路
    switchLineEvent() {},
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
    },
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
    },
    mutedPlay(muted) {
      let { cameraPlayer } = this;
      if (muted === true) {
        cameraPlayer?.openSound();
      } else {
        cameraPlayer?.closeSound();
      }
    },
    fullScreenEvent() {
      let { cameraPlayer } = this;
      cameraPlayer?.fullScreen();
    },
    // 移动摄像头
    moveCameraEvent(direction) {
      this.canvasStartFunc(direction);
    },
    // 停止移动摄像头
    stopMoveCameraEvent(direction) {
      // let { logList = [] } = this;
      // let log = {
      //   time: this.$moment().format("YYYY-MM-DD HH:mm:ss.S"),
      //   msg:
      //     "停止向" + { 0: "上", 1: "下", 2: "左", 3: "右" }[direction] + "移动"
      // };
      // logList.splice(0, 0, log);
      this.canvasStopFunc(direction);
    },
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
    },
    destroy() {
      this.playStatus = false;
      let { cameraPlayer } = this;
      // let { width = "", height = "" } = info || {};
      // cameraPlayer?.reSize(width, height);
      cameraPlayer?.stop();
      cameraPlayer?.destroy();
    },

    // 获取视频token
    canvasTokenFunc(callback) {
      let { condition } = this;
      this.dataLoadingStatus = true;
      let { deviceId = "" } = condition;
      this.canvasTokenAction({ deviceId })
        .then(({ data }) => {
          let { code = "", result } = data;
          if (code == Constants.CODES.SUCCESS) {
            let { accessToken = "", serial = "" } = result || {};
            condition.accessToken = accessToken;
            condition.serial = serial;
          }
          this.dataLoadingStatus = false;
          callback && callback();
        })
        .catch(err => {
          this.dataLoadingStatus = false;
          callback && callback();
          bmCommon.error("获取视频token失败=>canvasToken", err);
        });
    },
    // 开始摄像头移动
    canvasStartFunc(direction, callback) {
      let { condition } = this;
      let { deviceId = "" } = condition;
      if (this._canvasStartStatus) {
        return;
      }
      this._canvasStartStatus = true;
      this.canvasStartAction({ direction, deviceId })
        .then(({ data }) => {
          this._canvasStartStatus = false;
          callback && callback();
        })
        .catch(err => {
          this._canvasStartStatus = false;
          callback && callback();
          bmCommon.error("开始摄像头移动失败=>canvasStart", err);
        });
    },
    // 停止摄像头移动
    canvasStopFunc(direction, callback) {
      let { condition } = this;
      let { deviceId = "" } = condition;
      if (this._canvasStopStatus) {
        return;
      }
      this._canvasStopStatus = true;
      this.canvasStopAction({ direction, deviceId })
        .then(({ data }) => {
          this._canvasStopStatus = false;
          callback && callback();
        })
        .catch(err => {
          this._canvasStopStatus = false;
          callback && callback();
          bmCommon.error("停止摄像头移动失败=>canvasStop", err);
        });
    }
    // blurEvent(e) {
    //   let { target } = e;
    //   let { info = {} } = this;
    //   let name = $(target)
    //     .text()
    //     .trim();
    //   info.name = name;
    // }
  },
  beforeDestroy() {
    this.cancelEvent();
  },
  watch: {
    deviceId(newVal, oldVal) {
      if (newVal != oldVal) {
        this.init();
      }
    },
    width(newVal, oldVal) {
      if (newVal != oldVal) {
        // let { cameraPlayer, info = {} } = this;
        // let { width = "", height = "" } = info || {};
        // cameraPlayer?.reSize(width, height);
        this.destroy();
      }
    },
    height(newVal, oldVal) {
      if (newVal != oldVal) {
        // let { cameraPlayer, info = {} } = this;
        // let { width = "", height = "" } = info || {};
        // cameraPlayer?.reSize(width, height);
        this.destroy();
      }
    },
    autoplay(newVal, oldVal) {
      if (newVal != oldVal) {
        if (newVal) {
          this.ezuikitVideo();
        } else {
          this.destroy();
        }
      }
    },
    muted(newVal, oldVal) {
      if (newVal != oldVal) {
        this.mutedPlay(newVal);
      }
    }
  }
};
</script>

<style lang="less">
@import (less)
  "../../../../assets/less/components/component/basic/hls.video.less";
</style>
