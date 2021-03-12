import bmCommon from "@/common/common";
import Component from "@/core/Component";
import Canvas from "../../../Canvas";
import CanvasEvent from "../../../CanvasEvent";
import "../../../../assets/less/components/component/material/curve.line.less";
// 曲线
class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    let { info = {} } = this;
    let { gradientStyle = {}, x1 = 0, y1 = 0, width = 0, height = 0 } =
      info || {};
    info.boxX = x1 - 5;
    info.boxY = y1 - 5;
    info.boxW = width + 10;
    info.boxH = height + 10;
    gradientStyle.gradientId = bmCommon.uuid();
    this.refresh();
  }

  // caculateBox() {
  //   let { info = {} } = this;
  //   let { id = "" } = info || {};
  //   let $container = $(`#${id}`);
  //   let $line = $container.find(".line");
  //   let com = $line[0];
  //   let zoom = Canvas.getZoom();
  //   let rect = com?.getBoundingClientRect() || {};
  //   let { width = 0, height = 0, left = 0, top = 0 } = rect || {};
  //   let canvas_content = document.getElementById("canvas_content");
  //   let box = canvas_content?.getBoundingClientRect() || {};
  //   let { x = 0, y = 0 } = box || {};
  //   info._left = (left - x) / zoom;
  //   info._top = (top - y) / zoom;
  //   info._width = width / zoom;
  //   info._height = height / zoom;
  //   // bmCommon.log("获取到materiaCurvelLine", rect);
  //   // window.bm_widgetMap[id] = this;
  // }

  //组件样式
  svgStyle() {
    let { info = {} } = this;
    let {
      // width = "",
      // height = "",
      // color = "",
      gradientStyle = {},
      borderStyle = "",
      lineWidth = "",
      // borderRadiusTopLeft = 0,
      // borderRadiusTopRight = 0,
      // borderRadiusBottomLeft = 0,
      // borderRadiusBottomRight = 0,
      backgroundType = "",
      //
      // scale = "",
      //
      //
      //
      backgroundColor = ""
      // backgroundImage = "",
      // backgroundRepeat = "",
      // backgroundSize = ""
    } = info || {};
    let styles = {};
    if (borderStyle) {
      switch (borderStyle) {
        case "none":
          lineWidth = 0;
          borderStyle = "";
          break;
        case "solid":
          borderStyle = "";
          break;
        case "dotted":
          // styles["stroke-linecap"] = "round";
          borderStyle = `${lineWidth},${lineWidth}`;
          break;
        case "dashed":
          borderStyle = `${lineWidth * 2},${lineWidth}`;
          break;
        // case "space-dashed":
        //   borderStyle = `${borderWidth * 2},${borderWidth},${borderWidth /
        //     2} ,${borderWidth / 2},${borderWidth}`;
        //   break;

        default:
          break;
      }
      styles["stroke-width"] = lineWidth;
      if (borderStyle) {
        styles["stroke-dasharray"] = borderStyle;
      }
    }
    if (backgroundType == "purity") {
      //纯色
      styles["stroke"] = backgroundColor;
      // if (backgroundImage) {
      //   styles["background-image"] = `url(${this.$loadImgUrl(
      //     backgroundImage
      //   )})`;
      // }
    } else if (backgroundType == "gradient") {
      //渐变
      // styles = { ...styles, ...gradientStyle };
      let { gradientId = "" } = gradientStyle || {};
      styles["stroke"] = `url(#${gradientId})`;
    }
    return styles;
  }

  comStyle() {
    let { info = {} } = this;
    let { flipH = false, flipV = false, opacity = "", visible = true } =
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
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-material-curve-line-com">
    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { height = 0, width = 0 } = info || {};
    return ` <svg
    version="1.1"
    viewBox="0 0 ${width} ${height}"
  width="${width}"
  height="${height}"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs>
      ${this.renderDefs()}
    </defs>
    ${this.renderSvgContent()}
  </svg>`;
  }

  renderDefs() {
    let { info = {} } = this;
    let { gradientStyle = {}, backgroundType = "" } = info || {};
    let {
      gradientId = "",
      angle = 0,
      type = "",
      valueList = [],
      center = "50% 50%"
    } = gradientStyle || {};

    let gradientText = "";
    if (backgroundType == "gradient") {
      if (type == "linear") {
        let stopTexts = [];
        let { length: len = 0 } = valueList || [];
        let i = 0;
        for (; i < len; i++) {
          let item = valueList[i];
          stopTexts.push(`
        <stop
          offset="${item.value}%"
          style="stop-color:${item.code};stop-opacity:1"
        />`);
        }
        gradientText = ` <linearGradient
        gradientUnits="userSpaceOnUse"
        id="${gradientId}"
        x1="
          ${
            {
              0: "0%",
              45: "0%",
              90: "0%",
              135: "0%",
              180: "100%",
              225: "100%",
              270: "100%",
              315: "100%"
            }[angle]
          }
        "
        y1="
          ${
            {
              0: "100%",
              45: "100%",
              90: "100%",
              135: "0%",
              180: "0%",
              225: "0%",
              270: "100%",
              315: "100%"
            }[angle]
          }
        "
        x2="
          ${
            {
              0: "0%",
              45: "100%",
              90: "100%",
              135: "100%",
              180: "100%",
              225: "0%",
              270: "0%",
              315: "0%"
            }[angle]
          }
        "
        y2="
          ${
            {
              0: "0%",
              45: "0%",
              90: "100%",
              135: "100%",
              180: "100%",
              225: "100%",
              270: "100%",
              315: "0%"
            }[angle]
          }
        "
      >
      ${stopTexts.join("")}
      </linearGradient>`;
      } else if (type == "radial") {
        let stopTexts = [];
        let { length: len = 0 } = valueList || [];
        let i = 0;
        for (; i < len; i++) {
          let item = valueList[i];
          stopTexts.push(`
        <stop
          offset="${item.value}%"
          style="stop-color:${item.code};stop-opacity:1"
        />`);
        }
        gradientText = `<radialGradient
        gradientUnits="userSpaceOnUse"
        id="${gradientId}"
        cx="
          ${
            {
              "50% 50%": "50%",
              "0% 0%": "0%",
              "100% 0%": "100%",
              "0% 100%": "0%",
              "100% 100%": "100%"
            }[center]
          }
        "
        cy="
          ${
            {
              "50% 50%": "50%",
              "0% 0%": "0%",
              "100% 0%": "0%",
              "0% 100%": "100%",
              "100% 100%": "100%"
            }[center]
          }
        "
        r="
        ${
          {
            "50% 50%": "50%",
            "0% 0%": "160%",
            "100% 0%": "150%",
            "0% 100%": "150%",
            "100% 100%": "140%"
          }[center]
        }
        "
        fx="
        ${
          {
            "50% 50%": "50%",
            "0% 0%": "0%",
            "100% 0%": "100%",
            "0% 100%": "0%",
            "100% 100%": "100%"
          }[center]
        }
        "
        fy="
        ${
          {
            "50% 50%": "50%",
            "0% 0%": "0%",
            "100% 0%": "0%",
            "0% 100%": "100%",
            "100% 100%": "100%"
          }[center]
        }
        "
      >
       ${stopTexts.join("")}
      </radialGradient>`;
      }
    }
    return gradientText;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let {
      x1 = 0,
      x2 = 0,
      y1 = 0,
      y2 = 0,
      qx = 0,
      qy = 0,
      id = "",
      boxX = 0,
      boxY = 0,
      boxW: width = 0,
      boxH: height = 0
    } = info || {};
    return `<path
    class="line"
    d="
      M ${x1} ${y1} Q ${qx} ${qy},${x2} ${y2}
    "
    fill="transparent"
    style="${this.composeStyles(this.svgStyle())}"
  />
  <rect
    class="rect-box"
    width="${width}"
    height="${height}"
    x="${boxX}"
    y="${boxY}"
    fill="transparent"
    stroke-width="1"
  ></rect>
  <circle
    class="circle"
    data-id="${id}"
    cx="${qx}"
    cy="${qy}"
    r="5"
    stroke="#0075e7"
    fill="#ffa500"
    stroke-width="1"
  />
  <rect
    class="rect rect1"
    width="10"
    height="10"
    x="${x1 - 5}"
    y="${y1 - 5}"
    stroke="#0075e7"
    fill="#fff"
    data-id="${id}"
    stroke-width="1"
  ></rect>
  <rect
    class="rect rect2"
    width="10"
    height="10"
    x="${x2 - 5}"
    fill="#fff"
    data-id="${id}"
    y="${y2 - 5}"
    stroke="#0075e7"
    stroke-width="1"
  ></rect>`;
  }

  refresh() {
    super.refresh();
    this.reloadSize();
    // this.caculateBox();
    let { info = {} } = this;
    let {
      x1 = 0,
      x2 = 0,
      y1 = 0,
      y2 = 0,
      qx = 0,
      qy = 0,
      id = "",
      boxX = 0,
      boxY = 0,
      boxW: width = 0,
      boxH: height = 0
    } = info || {};
    let $container = $(`#${id}>.bm-material-curve-line-com`);
    let $svg = $container.find("svg");
    let $defs = $svg.find("defs");
    let $line = $svg.find(".line");
    let $rect_box = $svg.find(".rect-box");
    let $circle = $svg.find(".circle");
    let $rect1 = $svg.find(".rect1");
    let $rect2 = $svg.find(".rect2");
    $rect1.attr({ x: x1 - 5, y: y1 - 5 });
    $rect2.attr({ x: x2 - 5, y: y2 - 5 });
    let d = `M ${x1} ${y1} Q ${qx} ${qy},${x2} ${y2}`;
    $rect_box.attr({
      width: width,
      height: height,
      x: boxX,
      y: boxY
    });
    $line.attr({ d }).css(this.svgStyle());
    $circle.attr({ cx: qx, cy: qy });
    $defs.html(this.renderDefs());
    $svg.attr({ width, height, viewBox: `0 0 ${width} ${height}` });
    // $container.html(this.renderSvg());
  }

  reloadSize() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.bm-material-curve-line-com`);
    let line = SVG($container.find(".line")[0]);
    let bbox = line.bbox();
    let { w = 0, h = 0, x = 0, y = 0 } = bbox || {};
    info.boxX = x - 5;
    info.boxY = y - 5;
    info.boxW = w + 10;
    info.boxH = h + 10;
  }

  static leftClickEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    Text.mousedownEvent(e, "left");
  }
  static centerClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    Text.mousedownEvent(e, "center");
  }
  static rightClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    Text.mousedownEvent(e, "right");
  }
  static mousedownEvent(e, direction) {
    let canvas = Canvas.getCanvas();
    let { action = "" } = canvas || {};
    bmCommon.log("curveline move==", action);
    if (action != "select") {
      //画布移动不能操作线
      return;
    }
    let bm_active_com_id = window.bm_active_com_id;
    let { id = "" } = Text;
    if (bm_active_com_id != id) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    Text.direction = direction;
    Text.startX = x;
    Text.startY = y;
    $(document).on("mousemove", Text.mousemoveEvent);
    $(document).on("mouseup", Text.mouseupEvent);
  }
  static mousemoveEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    let { direction = "" } = Text;
    Text.resize({
      x,
      y,
      e,
      direction
    });
  }
  static mouseupEvent() {
    $(document).off("mousemove", Text.mousemoveEvent);
    $(document).off("mouseup", Text.mouseupEvent);
    Text.rotating = false;
    let { id = "" } = Text;
    Canvas.setActiveCom(id);
    CanvasEvent.createHistoryAction();
  }

  // 调整元件尺寸
  static resize(item) {
    let { x, y, direction = "" } = item || {};
    let { startX, startY, id = "" } = Text;
    let zoom = Canvas.getZoom();
    let obj = window.bm_widgetMap[id];
    let { info = {} } = obj || {};
    let dx = x - startX;
    let dy = y - startY;
    let { x1 = 0, x2 = 0, y1 = 0, y2 = 0 } = info || {};
    //为了灵活，放置在前
    Text.startX = x;
    Text.startY = y;
    dx = dx / zoom;
    dy = dy / zoom;
    // dx = Math.floor(dx / zoom);
    // dy = Math.floor(dy / zoom);
    if (direction === "right") {
      let __x2 = x2 + dx;
      let __y2 = y2 + dy;
      info.x2 = __x2;
      info.y2 = __y2;
      obj.refresh();
    } else if (direction === "left") {
      let __x1 = x1 + dx;
      let __y1 = y1 + dy;
      info.x1 = __x1;
      info.y1 = __y1;
      obj.refresh();
    } else if (direction === "center") {
      // dx = Math.floor((dx * 1) / zoom);
      // dy = Math.floor((dy * 1) / zoom);
      info.qx += dx;
      info.qy += dy;
      obj.refresh();
    }
    // Text.startX = x;
    // Text.startY = y;
  }

  destroy() {}

  event() {
    let showType = window.bm_show_type;
    if (showType != "edit") {
      return;
    }
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.bm-material-curve-line-com`);
    // let that = this;
    $container.on("mousedown", ".circle", function(e) {
      let $this = $(this);
      let id = $this.data("id");
      Text.id = id;
      Text.centerClickEvent(e);
    });
    $container.on("mousedown", ".rect1", function(e) {
      let $this = $(this);
      let id = $this.data("id");
      Text.id = id;
      Text.leftClickEvent(e);
    });
    $container.on("mousedown", ".rect2", function(e) {
      let $this = $(this);
      let id = $this.data("id");
      Text.id = id;
      Text.rightClickEvent(e);
    });
  }
}

export default Text;
