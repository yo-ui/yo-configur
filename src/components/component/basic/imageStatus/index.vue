// 图片状态组件
<template>
  <div class="bm-basic-image-status-com" :style="comStyle">
    <div class="image" :style="imageStyle"></div>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "imageStatusCom",
  data() {
    return {};
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    // bmUpload: () =>
    //   import(
    //     /* webpackChunkName: "bm-component-upload" */ "@/components/common/upload.vue"
    //   )
  },
  computed: {
    ...mapGetters(),

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
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderTop = 0,
        borderBottom = 0,
        borderLeft = 0,
        borderRight = 0,
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        // scale = "",
        // backgroundColor = "",
        // backgroundType = "",
        content = ""
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};
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
      if (content) {
        styles["background-color"] = "transparent";
        styles["background-image"] = "none";
      }
      return styles || {};
    },
    imageStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        contentList = [],
        // background = "",
        // borderStyle = "",
        // borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        // scale = "",
        content = "",
        contentRepeat = "",
        // backgroundType = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        contentSize = ""
      } = info || {};
      let styles = {};
      let obj = contentList.find(item => item.value == content);
      if (obj) {
        let { url = "", color = "" } = obj || {};
        //   -webkit-mask-image: url(/static/img/common/riLine-logout-box-line.svg);
        // mask-image: url(/static/img/common/riLine-logout-box-line.svg);
        // styles["-webkit-mask-image"] = `url(${this.$loadImgUrl(url)})`;
        styles["background-image"] = `url(${this.$loadImgUrl(url)})`;
        styles["background-color"] = color;
        if (contentRepeat) {
          styles["background-repeat"] = contentRepeat;
        }
        if (contentSize) {
          styles["background-size"] = contentSize;
        }
      }
      styles["width"] = `${width}px`;
      styles["height"] = `${height}px`;
      styles[
        "border-radius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
      return styles || {};
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations(),
    ...mapActions(),

    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {}, contentList = [] } = info || {};
        let { devicePoint = "" } = bindData || {};
        if (!devicePoint) {
          return;
        }
        $vm.$on(`devicePointEvent_${id}`, ({ point }) => {
          bmCommon.log("deviceImageStatusCom", point);
          if (point) {
            let { value = "" } = point || {};
            let item = contentList.find(item => item.value == value);
            if (item) {
              info.content = item.value;
            }
          }
        });
      }
      this.loadDeviceInfo();
    },
    loadDeviceInfo() {
      let { info = {} } = this;
      let { bindData = {}, contentList = [] } = info || {};
      let { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          let { points: pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { id = "" } = item || {};
            return id == devicePoint; //
          });
          if (point) {
            let { value = "" } = point || {};
            let item = contentList.find(item => item.value == value);
            if (item) {
              info.content = item.value;
            }
          }
        }
      });
    }
  },
  watch: {
    "info.bindData.devicePoint": {
      handler(newVal, oldVal) {
        this.loadDeviceInfo();
      },
      deep: true
    }
  }
};
</script>
<style lang="less">
@import (reference) "./../../../../assets/less/common.less";
.bm-basic-image-status-com {
}
</style>
