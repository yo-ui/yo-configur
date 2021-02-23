import bmCommon from "@/common/common"; // 静态文本
import "../assets/less/components/component.less";

// const Library = {
//   textCom
// };
class Component {
  info;
  constructor(props) {
    this.info = props;
  }

  setInfo(info) {
    this.info = { ...info };
  }

  boxStyle() {
    let { info = {} } = this;
    let {
      left = "",
      top = "",
      animation = {},
      order: zIndex = "",
      rotate = "",
      transformOrigin = "",
      type = "",
      children = []
    } = info || {};
    let { direction = "", duration = "", iterationCount = 1 } = animation || {};
    if (type == "panel") {
      let group1 = bmCommon.clone(children || []);
      let group2 = bmCommon.clone(children || []);
      group1.sort((a, b) => a.left - b.left);
      group2.sort((a, b) => a.top - b.top);
      let { left: minLeft = 0 } = group1[0] || {};
      let { top: minTop = 0 } = group2[0] || {};
      left += minLeft;
      top += minTop;
      info.left = left;
      info.top = top;
      children.forEach(item => {
        item.left -= minLeft;
        item.top -= minTop;
      });
    }
    let transform = `rotate(${rotate}deg)`;
    let styles = {
      left: left + "px",
      top: top + "px",
      "z-Index": zIndex,
      transform: `${transform}`,
      "transform-Origin": transformOrigin
    };
    if (!iterationCount) {
      iterationCount = "infinite";
    }
    // styles["pointer-events"] = !draging ? "auto" : "none";
    styles["animation-iteration-count"] = iterationCount;
    styles["animation-duration"] = duration;
    styles["animation-direction"] = direction;
    return styles;
  }

  boxClasses() {
    let {
      info = {},
      animate = "",
      locked = false,
      activeComIds = "",
      showType = "edit"
    } = this;
    let { type = "" } = info || {};
    let classes = [];
    if (animate) {
      classes.push("animated");
      classes.push(`${animate}`);
    }
    if (type) {
      classes.push(`${type}`);
    }
    if (showType == "edit") {
      if (activeComIds.indexOf(info.id) > -1) {
        classes.push("active");
      }
      if (
        activeComIds &&
        activeComIds.length > 0 &&
        !(activeComIds.indexOf(info.id) > -1) &&
        // activeCom.type != 'canvas'&&
        type != "panel"
      ) {
        classes.push("opacity");
      }
      if (locked) {
        classes.push("lock");
      }
    }
    return classes.join(" ");
  }

  //组合style
  composeStyles(styles) {
    let styleArr = [];
    for (let i in styles) {
      styleArr.push(`${i}:${styles[i]}`);
    }
    return styleArr.join(";");
  }

  gradientStyle() {
    return info => {
      let { gradientStyleMap } = this;
      let { gradientStyle = {} } = info || {};
      let { type = "" } = gradientStyle || {};
      let styles = {
        backgroundImage: gradientStyleMap(info)[type]
      };
      return styles;
    };
  }
  gradientStyleMap() {
    return info => {
      // let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      let { angle = "", center = "", radialShape = "", valueList = [] } =
        gradientStyle || {};
      let colors = valueList.map(item => `${item.code} ${item.value}%`);
      return {
        linear: `linear-gradient(${angle}deg, ${colors.join()})`,
        radial: `radial-gradient(${radialShape} at ${center}, ${colors.join()})`
      };
    };
  }
  gradientLinearStyle() {
    return info => {
      // let { info = {} } = this;
      let { gradientStyle = {} } = info || {};
      let { valueList = [] } = gradientStyle || {};
      let colors = valueList.map(item => `${item.code} ${item.value}%`);
      return `background-image:linear-gradient(90deg, ${colors.join()})`;
    };
  }

  //组件样式  继承用组件样式
  comStyle() {
    let { info = {} } = this;
    let { opacity = "", visible = true, flipV = false, flipH = false } =
      info || {};
    let styles = {};
    styles["opacity"] = opacity / 100;
    styles["visibility"] = `${visible ? "visible" : "hidden"}`;
    let scale = `scale(${flipH ? -1 : 1},${flipV ? -1 : 1})`;
    (styles["transform"] = `${scale}`),
      (styles["-webkit-transform"] = `${scale}`),
      (styles["-ms-transform"] = `${scale}`),
      (styles["-o-transform"] = `${scale}`),
      (styles["-moz-transform"] = `${scale}`);
    return styles;
  }

  //组件包裹
  wrap({ info, showType }, content = "") {
    let { type = "", id = "", locked = false } = info || {};
    showType = window.bm_show_type;
    let operate = locked
      ? ""
      : `
    <i title="旋转" class="operate-btn el-icon-refresh-right"></i>
      <i title="旋转轴" class="operate-btn el-icon-axis"></i>
      <i title="左上角" class="operate-btn el-icon-top-left"></i>
      <i title="上" class="operate-btn el-icon-top"></i>
      <i title="右上角" class="operate-btn el-icon-top-right"></i>
      <i title="左" class="operate-btn el-icon-back"></i>
      <i title="右" class="operate-btn el-icon-right"></i>
      <i title="左下角" class="operate-btn el-icon-bottom-left"></i>
      <i title="下" class="operate-btn el-icon-bottom"></i>
      <i title="右下角" class="operate-btn el-icon-bottom-right"></i>`;

    return `
    <div id="${id}" type="${type}" class="bm-component-com ${showType} ${this.boxClasses()}" style="${this.composeStyles(
      this.boxStyle()
    )}">
      ${
        showType == "edit"
          ? `<div class="cover"></div>${operate}
      `
          : ""
      }
      ${content}
      </div>
    `;
  }
  // 刷新数据
  refresh() {
    let { info = {} } = this;
    let { id = "", locked = false } = info || {};
    $(`#${id}>.component`).css(this.comStyle());
    $(`#${id}`).css(this.boxStyle());
    if (locked) {
      $(`#${id}>.operate-btn`).hide();
    } else {
      $(`#${id}>.operate-btn`).show();
    }
  }
  // // 刷新数据
  // resize(options) {
  //   let { info = {} } = this;
  //   let { id = "" } = info || {};
  //   $(`#${id}>.component`).css(options);
  // }
  // 移除组件
  remove() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    delete window.bm_widgetMap[id];
    $(`#${id}`).remove();
  }

  initEvent() {
    let { info = {} } = this;
    let showType = window.bm_show_type;
    if (showType != "edit") {
      let { id = "", bindData = {} } = info || {};
      let { devicePoint = "" } = bindData || {};
      if (!devicePoint) {
        return;
      }
      $vm.$on(`devicePointEvent_${id}`, ({ point = {} }) => {
        bmCommon.log("dynamicTextCom", point);
        // this.point = point || {};
        this.refreshContent(point);
        // let { value = "", unit = "" } = point || {};
        // info.content = value;
        // info.unit = unit;
      });
    }
    this.loadDeviceInfo();
  }

  loadDeviceInfo() {
    let { info = {} } = this;
    let { bindData = {} } = info || {};
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
        // this.point = point || {};
        this.refreshContent(point);
        // if (point) {
        //   let { value = "", unit = "" } = point || {};
        //   info.content = value;
        //   info.unit = unit;
        // }
      }
    });
  }
}

export default Component;
