import bmCommon from "@/common/common"; // 静态文本
import Canvas from "./Canvas";
import "../assets/less/components/component.less";

class Component {
  info;
  pointCode = "SwSts";

  params = {};
  constructor(props) {
    this.info = props;
  }

  setInfo(info) {
    this.info = { ...bmCommon.clone(info) };
  }

  getUserInfo() {
    return Canvas.getUserInfo();
  }

  loadBBox() {
    let { info = {} } = this;
    let { id = "", type = "" } = info || {};
    let bbox = {};
    // let pbox = {};
    // if (parentId) {
    //   let com = document.getElementById(parentId);
    //   pbox = com?.getBoundingClientRect() || {};
    // }
    if (type === "panel") {
      return;
    }
    if (type === "materialLine" || type === "materialCurveLine") {
      //如果为直线则特殊处理
      let $container = $(`#${id}`);
      let $line = $container.find(".line");
      let com = $line[0];
      bbox = com?.getBoundingClientRect() || {};
    } else {
      let com = document.getElementById(id);
      bbox = com?.getBoundingClientRect() || {};
    }
    let canvas_content = document.getElementById("canvas_content");
    let box = canvas_content?.getBoundingClientRect() || {};
    let { x = 0, y = 0 } = box || {};
    // let { x: pX = 0, y: pY = 0 } = pbox || {};
    let zoom = Canvas.getZoom();
    let { width = 0, height = 0, left = 0, top = 0 } = bbox || {};
    //如果有父级则应减去父级的x y
    // info._left = (left - x) / zoom;
    // info._top = (top - y) / zoom;
    // info._width = width / zoom;
    // info._height = height / zoom;
    // info._right = (left - x + width) / zoom;
    // info._bottom = (top - y + height) / zoom;

    info._left = (left - x) / zoom;
    info._top = (top - y) / zoom;
    info._width = width / zoom;
    info._height = height / zoom;
    info._right = (left - x + width) / zoom;
    info._bottom = (top - y + height) / zoom;
    // bmCommon.error("loadBBox=>", id, type, bbox);
    return bbox;
  }

  boxStyle() {
    let { info = {} } = this;
    let {
      left = "",
      top = "",
      id = "",
      animation = {},
      order: zIndex = "",
      rotate = "",
      transformOrigin = ""
      // type = "",
      // children = []
    } = info || {};
    let { direction = "", duration = "", iterationCount = 1 } = animation || {};
    // if (type == "panel") {
    //   let minLeft = 0,
    //     minTop = 0;
    //   // let zoom = Canvas.getZoom();
    //   children.forEach((item, index) => {
    //     let { id = "" } = item || {};
    //     let obj = window.bm_widgetMap[id];
    //     if (obj) {
    //       let { info = {} } = obj || {};
    //       let {
    //         _left: left = 0,
    //         _top: top = 0,
    //         _width: width = 0,
    //         _height: height = 0
    //       } = info || {};
    //       item._left = left;
    //       item._top = top;
    //       item._width = width;
    //       item._height = height;
    //       if (index === 0) {
    //         minLeft = left;
    //         minTop = top;
    //       }
    //       if (minLeft > left) {
    //         minLeft = left;
    //         // minLeftId = id;
    //       }
    //       if (minTop > top) {
    //         minTop = top;
    //         // minTopId = id;
    //       }
    //     }
    //     // childrenMap[id] = item;
    //   });
    //   info.left = minLeft;
    //   info.top = minTop;
    // }
    let bm_active_com_id = window.bm_active_com_id;
    let bm_active_com_ids = window.bm_active_com_ids;
    let { length = 0 } = bm_active_com_ids || [];
    let transform = `rotate(${rotate}deg)`;
    let styles = {
      left: left + "px",
      top: top + "px",
      "z-index": length < 2 && bm_active_com_id == id ? 999999 : zIndex,
      transform: `${transform}`,
      "transform-origin": transformOrigin
    };
    if (!iterationCount) {
      iterationCount = "infinite";
    }
    // styles["pointer-events"] = !draging ? "auto" : "none";
    styles["animation-iteration-count"] = iterationCount;
    styles["animation-duration"] = `${duration}s`;
    styles["animation-direction"] = direction;
    return styles;
  }

  boxClasses() {
    let { info = {}, animate = "", locked = false, activeComIds = "" } = this;

    let showType = window.bm_show_type;
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

  gradientStyle(info) {
    let { gradientStyleMap } = this;
    let { gradientStyle = {} } = info || {};
    let { type = "" } = gradientStyle || {};
    let styles = {
      "background-image": gradientStyleMap(info)[type]
    };
    return styles;
  }
  gradientStyleMap(info) {
    // let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    let { angle = "", center = "", radialShape = "", valueList = [] } =
      gradientStyle || {};
    let colors = valueList.map(item => `${item.code} ${item.value}%`);
    return {
      linear: `linear-gradient(${angle}deg, ${colors.join()})`,
      radial: `radial-gradient(${radialShape} at ${center}, ${colors.join()})`
    };
  }
  gradientLinearStyle(info) {
    // let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    let { valueList = [] } = gradientStyle || {};
    let colors = valueList.map(item => `${item.code} ${item.value}%`);
    return `background-image:linear-gradient(90deg, ${colors.join()})`;
  }

  //组件样式  继承用组件样式
  comStyle() {
    let { info = {} } = this;
    let {
      opacity = "",
      visible = true,
      flipV = false,
      flipH = false,

      width = "",
      height = "",
      color = "",
      borderColor = "",
      borderStyle = "",
      borderWidth = "",
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0,
      backgroundType = "",
      // scale = "",
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
      textShadow = {},
      textShadowable = false,
      textAlign = "",
      fontFamily = "",
      fontSize = "",
      fontWeight = "",
      fontStyle = "",
      textDecoration = "",
      backgroundColor = "",
      backgroundImage = "",
      backgroundRepeat = "",
      backgroundSize = ""
    } = info || {};
    let styles = {
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    styles["opacity"] = opacity / 100;
    styles["visibility"] = `${visible ? "visible" : "hidden"}`;
    let scale = `scale(${flipH ? -1 : 1},${flipV ? -1 : 1})`;
    (styles["transform"] = `${scale}`),
      (styles["-webkit-transform"] = `${scale}`),
      (styles["-ms-transform"] = `${scale}`),
      (styles["-o-transform"] = `${scale}`),
      (styles["-moz-transform"] = `${scale}`);

    if (textAlign) {
      styles["text-align"] = textAlign;
      if (textAlign == "justify") {
        styles["text-align-last"] = textAlign;
      }
    }
    if (shadowable) {
      let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
        shadow || {};
      styles[
        "box-shadow"
      ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
    }
    if (textShadowable) {
      let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      styles["text-shadow"] = `${x}px ${y}px ${blur}px ${color}`;
    }
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    if (backgroundRepeat) {
      styles["background-repeat"] = backgroundRepeat;
    }
    if (backgroundSize) {
      styles["background-size"] = backgroundSize;
    }
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
      styles["border-Left"] = "none";
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
    if (borderTop) {
      if (borderStyle) {
        styles["border-top-style"] = borderStyle;
      }
      styles["border-top-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-top-color"] = borderColor;
      }
    } else {
      styles["border-Top"] = "none";
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
    if (color) {
      styles["color"] = color;
    }
    if (fontSize) {
      styles["font-size"] = `${fontSize}px`;
    }
    styles["font-family"] = `${fontFamily}`;
    if (fontWeight) {
      styles["font-weight"] = fontWeight;
    }
    if (fontStyle) {
      styles["font-style"] = fontStyle;
    }
    if (textDecoration) {
      styles["text-decoration"] = textDecoration;
    }
    if (backgroundType == "purity") {
      //纯色
      if (backgroundColor) {
        styles["background-color"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["background-image"] = `url(${$vm.$loadImgUrl(backgroundImage)})`;
      }
    } else if (backgroundType == "gradient") {
      //渐变
      styles = { ...styles, ...this.gradientStyle(info) };
    }
    return styles;
  }

  //组件包裹
  wrap({ info }, content = "") {
    let {
      type = "",
      id = "",
      locked = false,
      order = 1,
      transformOrigin = ""
    } = info || {};
    let zoom = Canvas.getZoom();
    let showType = window.bm_show_type;
    let operate = locked
      ? ""
      : `
    <i title="旋转" class="operate-btn el-icon-refresh-right" style="transform: scale(${1 /
      zoom}) translate(-${zoom * 50}%, 0);
    top: ${-50 / zoom}px"></i>
      <i title="旋转轴" class="operate-btn el-icon-axis" style="${
        {
          "left top": "left: 0; top: 0; ",
          top: " left: 50%; top: 0 ",
          "right top": " left: 100%; top: 0 ",
          center: " left: 50%; top: 50%;",
          right: " left: 100%; top: 50% ",
          "right bottom": " left: 100%; top: 100% ",
          bottom: " left: 50%; top: 100% ",
          "left bottom": " left: 0; top: 100% ",
          left: " left: 0; top: 50%"
        }[transformOrigin]
      };transform: scale(${1 / zoom}) translate(-${zoom * 50}%, -${zoom *
          50}%)"></i>
      <i title="左上角" class="operate-btn el-icon-top-left" style="transform: scale(${1 /
        zoom})"></i>
      <i title="上" class="operate-btn el-icon-top" style="transform: scale(${1 /
        zoom}) translate(-${zoom * 50}%, 0)"></i>
      <i title="右上角" class="operate-btn el-icon-top-right" style="transform: scale(${1 /
        zoom})"></i>
      <i title="左" class="operate-btn el-icon-back" style=" transform: scale(${1 /
        zoom}) translate(0, -${zoom * 50}%)"></i>
      <i title="右" class="operate-btn el-icon-right" style="transform: scale(${1 /
        zoom}) translate(0, -${zoom * 50}%)"></i>
      <i title="左下角" class="operate-btn el-icon-bottom-left" style="transform: scale(${1 /
        zoom})"></i>
      <i title="下" class="operate-btn el-icon-bottom" style="transform: scale(${1 /
        zoom}) translate(-${zoom * 50}%, 0) "></i>
      <i title="右下角" class="operate-btn el-icon-bottom-right" style="transform: scale(${1 /
        zoom})"></i>`;

    if (type === "panel") {
      operate = locked
        ? ""
        : `
    <i title="旋转" class="operate-btn el-icon-refresh-right"  style="transform: scale(${1 /
      zoom}) translate(-${zoom * 50}%, 0);
    top: ${-50 / zoom}px"></i>
      <i title="旋转轴" class="operate-btn el-icon-axis" style="${
        {
          "left top": "left: 0; top: 0; ",
          top: " left: 50%; top: 0 ",
          "right top": " left: 100%; top: 0 ",
          center: " left: 50%; top: 50%;",
          right: " left: 100%; top: 50% ",
          "right bottom": " left: 100%; top: 100% ",
          bottom: " left: 50%; top: 100% ",
          "left bottom": " left: 0; top: 100% ",
          left: " left: 0; top: 50%"
        }[info.transformOrigin]
      };transform: scale(${1 / zoom}) translate(-${zoom * 50}%, -${zoom *
            50}%)"></i>`;
    } else if (
      type == "materialLine" ||
      type == "materialCurveLine" ||
      type === "panel"
    ) {
      operate = "";
    }

    return `
    <div id="${id}" type="${type}" data-order="${order}" class="bm-component-com ${showType} ${this.boxClasses()}" style="${this.composeStyles(
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

  lock(locked) {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}`);
    if (locked) {
      // $(`#${id}>.operate-btn`).hide();
      $container.addClass("locked");
    } else {
      // $(`#${id}>.operate-btn`).show();
      $container.removeClass("locked");
    }
  }
  // 刷新数据
  refresh(item) {
    let { info = {} } = this;
    let { id = "", locked = false, type = "", order = 1 } = info || {};
    let $container = $(`#${id}`);
    if (item) {
      $container.css(item).data({ order });
    } else {
      $container.css(this.boxStyle()).data({ order });
    }
    $(`#${id}>.component`).css(this.comStyle());
    if (locked) {
      // $(`#${id}>.operate-btn`).hide();
      $container.addClass("locked");
    } else {
      // $(`#${id}>.operate-btn`).show();
      $container.removeClass("locked");
    }
    bmCommon.log(`${type}刷新 `);

    this.loadBBox();
    // if (type === "panel") {
    //   $(`#${id}>.operate-btn:not(.el-icon-refresh-right,.el-icon-axis)`).hide();
    // }
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
      $vm.$on(`devicePointEvent_${id}`, ({ point = {}, device = {} }) => {
        bmCommon.log(
          `websock 接收设备信息devicePointEvent_${id}`,
          info.type,
          point
        );
        //{
        // 	"acqTime":"2021-03-18 12:39:02",
        // 	"descr":"风机模式",
        // 	"name":"综合楼K2F-6（空调温控器）",
        // 	"point":"FM",
        // 	"unit":"",
        // 	"value":"0"
        // }
        this.refreshContent({ point, device });
        // let { value = "", unit = "" } = point || {};
        // info.content = value;
        // info.unit = unit;
      });
    }
  }

  loadDeviceInfo() {
    let { info = {}, pointCode = "" } = this;
    let { bindData = {} } = info || {};
    let { deviceId = "", devicePoint = "" } = bindData || {};
    if (!deviceId) {
      return;
    }
    if (!devicePoint) {
      devicePoint = pointCode;
    }
    $vm.$emit("device", {
      deviceId,
      flag: true,
      callback: (device = {}) => {
        let { points: pointList = [] } = device || {};
        let point = null;
        if (devicePoint) {
          point = pointList.find(item => {
            let { id = "" } = item || {};
            return id == devicePoint; //
          });
        }
        // this.point = point || {};
        bmCommon.log("初始化获取设置信息", info.type);
        this.refreshContent({ point, device });
        // if (point) {
        //   let { value = "", unit = "" } = point || {};
        //   info.content = value;
        //   info.unit = unit;
        // }
      }
    });
  }

  controlEvent({ value, point } = {}, callback) {
    const { info = {}, pointValue } = this;
    const { bindData = {} } = info || {};
    const { deviceId = "", devicePoint = "" } = bindData || {};
    if (!deviceId) {
      return;
    }
    if (!point) {
      point = devicePoint;
    }
    if (!value) {
      value = pointValue;
    }
    $vm.$emit("control", {
      deviceId,
      point,
      value,
      callback: flag => {
        callback && callback(flag);
        // if (flag) {
        //   this.$$msgSuccess("指令发送成功");
        // } else {
        //   this.$$msgError("指令发送失败");
        // }
      }
    });
  }
}

export default Component;
