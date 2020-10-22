<template>
  <el-dialog
    :title="$lang('摄像头')"
    v-dialogDrag="true"
    class="bm-camera-previewer-com"
    :visible.sync="showDialogStatus"
    width="800px"
  >
    <div class="camera-previewer-box">
      <div id="previewerPlayer"></div>
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
          <i
            @click="playEvent"
            class="btn el-icon-video-play"
            :class="played ? 'el-icon-video-pause' : 'el-icon-video-play'"
          ></i>
          <i
            @click="mutedEvent"
            class="bomi"
            :class="{ true: 'bomi-volume-d', false: 'bomi-volume' }[!!muted]"
          ></i>
        </div>
        <div class="right">
          <i @click="fullScreenEvent" class="el-icon-full-screen"></i>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script>
// import HLS from "hls.js";
import EZUIKit from "@/common/lib/ezuikit";
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      showDialogStatus: false,
      playStatus: false,
      played: false,
      muted: false,
      dataLoadingStatus: true,
      condition: {}
    };
  },
  computed: {
    ...mapGetters()
  },
  components: {},
  methods: {
    ...mapMutations({}),
    ...mapActions({
      canvasStopAction: "canvasStop",
      canvasStartAction: "canvasStart",
      canvasTokenAction: "canvasToken"
    }),
    init() {
      this.$nextTick(() => {
        this.ezuikitVideo();
      });
    },
    show({ deviceId = "" }) {
      let { condition } = this;
      condition.deviceId = deviceId;
      this.showDialogStatus = true;
      this.init();
    },
    // 初始化播放器
    ezuikitVideo() {
      let { condition } = this;
      let { deviceId = "" } = condition || {};
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
      let { previewerPlayer = null } = this;
      previewerPlayer && previewerPlayer.stop();
      this.previewerPlayer = null;
    },
    // 切换线路
    switchLineEvent() {},
    //播放暂停操作
    operateEvent() {
      this.ezuikitVideo();
      // this.playStatus = true;
      // this.played = true;
    },
    playEvent() {
      let { played, previewerPlayer } = this;
      if (played) {
        // previewerPlayer?.pause();
        previewerPlayer?.stop();
      } else {
        this.initPlayer()
      }
      this.played = !played;
    },
    mutedEvent() {
      let { muted = "" } = this;
      this.mutedPlay(muted);
      this.muted = !muted;
    },
    mutedPlay(muted) {
      let { previewerPlayer } = this;
      if (muted === true) {
        previewerPlayer?.openSound();
      } else {
        previewerPlayer?.closeSound();
      }
    },
    fullScreenEvent() {
      let { previewerPlayer } = this;
      previewerPlayer?.fullScreen();
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
      let { condition, previewerPlayer = null, muted = false } = this;
      let { accessToken = "", serial = "", lineType = 2 } = condition;
      let line = lineType == 2 ? "" : ".hd";
      let width = 780,
        height = 400;
      let autoplay = true;
      var url = `ezopen://open.ys7.com/${serial}/1${line}.live`;
      this.playStatus = true;
      this.played = true;
      previewerPlayer?.stop();
      let params = {
        id: "previewerPlayer",
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
      previewerPlayer = new EZUIKit.EZUIPlayer(params);
      // previewerPlayer = new EZUIKit.EZUIPlayer('previewerPlayer');
      // 这里是打印日志，本例抛出到播放页面
      previewerPlayer.on("log", (str, className) => {
        // let { logList = [] } = this;
        // let log = {
        //   time: this.$moment().format("YYYY-MM-DD HH:mm:ss.S"),
        //   msg: str
        // };
        // logList.splice(0, 0, log);
        bmCommon.log("log", str, className);
      });
      this.previewerPlayer = previewerPlayer;
      if (muted) {
        try {
          previewerPlayer?.closeSound();
        } catch (err) {
          bmCommon.error(err);
        }
      }
    },
    destroy() {
      this.playStatus = false;
      let { previewerPlayer } = this;
      previewerPlayer?.stop();
      previewerPlayer?.destroy();
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
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/camera.previewer.less";
</style>
