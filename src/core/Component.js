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

  boxStyle() {
    let { info = {}, draging = false } = this;
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
    return this.composeStyles(styles);
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
    if (flipV || flipH) {
      let scale = `scale(${flipH ? -1 : 1},${flipV ? -1 : 1})`;
      (styles["transform"] = `${scale}`),
        (styles["-webkit-transform"] = `${scale}`),
        (styles["-ms-transform"] = `${scale}`),
        (styles["-o-transform"] = `${scale}`),
        (styles["-moz-transform"] = `${scale}`);
    }
    return styles;
  }

  //组件包裹
  wrap({ info, showType }, content = "") {
    let { type = "" } = info || {};

    return `
    <div id="${info.id}" type="${
      info.type
    }" class="bm-component-com ${showType} ${this.boxClasses()}" style="${this.boxStyle()}">
      ${
        showType == "edit"
          ? `
      <div class="cover"></div><i title="旋转" class="operate-btn el-icon-refresh-right"></i>
        <i title="旋转轴" class="operate-btn el-icon-axis"></i>
        <i title="左上角" class="operate-btn el-icon-top-left"></i>
        <i title="上" class="operate-btn el-icon-top"></i>
        <i title="右上角" class="operate-btn el-icon-top-right"></i>
        <i title="左" class="operate-btn el-icon-back"></i>
        <i title="右" class="operate-btn el-icon-right"></i>
        <i title="左下角" class="operate-btn el-icon-bottom-left"></i>
        <i title="下" class="operate-btn el-icon-bottom"></i>
        <i title="右下角" class="operate-btn el-icon-bottom-right"></i>
      `
          : `
      `
      }
      ${content}
      </div>
    `;
  }
}

export default Component;
