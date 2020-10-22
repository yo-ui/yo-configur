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
    <i
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
    </div>
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
    // //渐变颜色样式
    // gradientStyle() {
    //   let { info = {} } = this;
    //   let { gradientStyle = {} } = info || {};
    //   let {
    //     type = "",
    //     angle = "",
    //     center = "",
    //     radialShape = "",
    //     valueList = []
    //   } = gradientStyle || {};
    //   let styles = {};
    //   let colors = valueList.map(item => `${item.code} ${item.value}%`);
    //   if (type == "linear") {
    //     styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
    //   } else if (type == "radial") {
    //     styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
    //   }
    //   return styles;
    // },
    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        opacity = "",
        borderWidth = "",
        borderRadius = ""
        // scale = "",
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
        // backgroundColor = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};

      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      // if (backgroundRepeat) {
      //   styles["backgroundRepeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["backgroundSize"] = backgroundSize;
      // }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles["opacity"] = opacity / 100;
      styles["borderRadius"] = `${borderRadius}px`;
      // if (scale) {
      //   (styles["transform"] = `${scale}`),
      //     (styles["-webkit-transform"] = `${scale}`),
      //     (styles["-ms-transform"] = `${scale}`),
      //     (styles["-o-transform"] = `${scale}`),
      //     (styles["-moz-transform"] = `${scale}`);
      // }
      // if (color) {
      //   styles["color"] = color;
      // }
      // if (fontSize) {
      //   styles["fontSize"] = `${fontSize}px`;
      // }
      // if (fontFamily) {
      //   styles["fontFamily"] = `${fontFamily}`;
      // }
      // if (fontWeight) {
      //   styles["fontWeight"] = fontWeight;
      // }
      // if (fontStyle) {
      //   styles["fontStyle"] = fontStyle;
      // }
      // if (backgroundColor) {
      //   styles["backgroundColor"] = backgroundColor;
      // }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      // }
      return styles || {};
    }
  },
  mounted() {
    this.init();
    // this.$emit("success"); //组件加载完成回调
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
      let { cameraPlayer = null } = this;
      cameraPlayer && cameraPlayer.stop();
      this.cameraPlayer = null;
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
      let { cameraPlayer, info = {} } = this;
      let { width = "", height = "" } = info || {};
      cameraPlayer?.reSize(width, height);
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
