import bmCommon from "@/common/common";
import Component from "@/core/Component";
import Canvas from "../../../Canvas";
import CanvasEvent from "../../../CanvasEvent";
import "../../../../assets/less/components/component/material/line.less";
// 直线
class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    let { info = {} } = this;
    let { x1 = 0, y1 = 0, height = 0, width = 0, gradientStyle = {} } =
      info || {};
    info.lineLong = width;
    info.boxX = x1;
    info.boxY = y1;
    info.boxW = width > 20 ? width : 20;
    info.boxH = height > 20 ? height : 20;
    gradientStyle.gradientId = bmCommon.uuid();
    this.refresh();
  }

  //组件样式
  svgStyle() {
    let { info = {} } = this;
    let {
      gradientStyle = {},
      borderStyle = "",
      lineWidth = "",
      backgroundType = "",
      backgroundColor = ""
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
    } else if (backgroundType == "gradient") {
      //渐变
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
    <div class="bm-material-line-com">

    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { boxH = 0, boxW = 0 } = info || {};
    return ` <svg
    version="1.1"
    viewBox="0 0 ${boxW} ${boxH}"
  width="${boxW}"
  height="${boxH}"
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
      boxW = 0,
      boxH = 0,
      boxX = 0,
      id = "",
      boxY = 0
    } = info || {};
    return `<line
    class="line"
    x1="${x1}"
    y1="${y1}"
    x2="${x2}"
    y2="${y2}"
    style="${this.composeStyles(this.svgStyle())}"
  />
  <rect
    class="rect-box"
    width="${boxW}"
    height="${boxH}"
    x="${boxX}"
    y="${boxY}"
    stroke="#0075e7"
    fill="transparent"
    stroke-width="1"
  ></rect>
  <rect
    class="rect rect1"
    data-id="${id}"
    width="14"
    height="14"
    x="${x1 - 7}"
    y="${y1 - 7}"
    stroke="#0075e7"
    fill="#fff"
    stroke-width="1"
  ></rect>
  <rect
    class="rect rect2"
    data-id="${id}"
    width="14"
    height="14"
    x="${x2 - 7}"
    fill="#fff"
    y="${y2 - 7}"
    stroke="#0075e7"
    stroke-width="1"
  ></rect>`;
  }

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  // //刷新内容
  // refreshContent(data) {
  //   let { info = {} } = this;
  //   let { point } = data || {};
  //   if (point) {
  //     let { value = "" } = point || {};
  //     info.content = value;
  //     this.refresh();
  //   }
  // }

  refresh() {
    super.refresh();
    this.reloadSize();
    let { info = {} } = this;
    let {
      id = "",
      boxH: height = 0,
      boxW: width = 0,
      x1 = 0,
      x2 = 0,
      y1 = 0,
      y2 = 0,
      boxX: x = 0,
      boxY: y = 0
    } = info || {};
    let $container = $(`#${id}>.bm-material-line-com`);
    let $svg = $container.find("svg");
    let $defs = $svg.find("defs");
    let $line = $svg.find(".line");
    let $rect_box = $svg.find(".rect-box");
    let $rect1 = $svg.find(".rect1");
    let $rect2 = $svg.find(".rect2");
    $rect1.attr({ x: x1 - 7, y: y1 - 7 });
    $rect2.attr({ x: x2 - 7, y: y2 - 7 });
    $line.attr({ x1, y1, x2, y2 }).css(this.svgStyle());
    $rect_box.attr({ width, height, x, y });
    $defs.html(this.renderDefs());
    $svg.attr({ width, height, viewBox: `0 0 ${width} ${height}` });
    // $container.html(this.renderSvg());
  }

  reloadSize() {
    let { info = {} } = this;
    let { x1 = 0, y1 = 0, x2 = 0, y2 = 0, id = "" } = info || {};
    let $container = $(`#${id}>.bm-material-line-com`);
    let lineLong = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
    let line = SVG($container.find(".line")[0]);
    let bbox = line.bbox();
    // let bbox = line.bbox();
    let { w = 0, h = 0, x = 0, y = 0 } = bbox || {};
    info.boxX = x;
    info.boxY = y;
    info.lineLong = lineLong;
    // bmCommon.warn("rbox=", info.vboxX,info.vboxY);
    info.boxW = w > 20 ? w : 20;
    info.width = 0;
    info.boxH = h > 20 ? h : 20;
    info.height = 0;
  }
  // lineLongEvent() {
  //   let { info = {} } = this;
  //   let { x1 = 0, y1 = 0, x2 = 0, y2 = 0, lineLong = 0 } = info || {};
  //   //先求当前的弧度
  //   let rad = Math.round(Math.atan2(y2 - y1, x2 - x1) / 45) * 45;
  //   // let long = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
  //   let y = lineLong * Math.sin(rad) - y1; //对边长
  //   let x = lineLong * Math.cos(rad) - x1; //余边长
  //   info.x2 = x;
  //   info.y2 = y;
  // }
  static leftClickEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    Text.mousedownEvent(e, "left");
  }
  static rightClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    // let { info = {} } = this;
    // let { id = "" } = info || {};
    // CanvasEvent.selectComAction(id); //选中组件
    Text.mousedownEvent(e, "right");
  }
  static mousedownEvent(e, direction) {
    // let { showType = "" } = this;
    e.stopPropagation();
    e.preventDefault();
    // let { info = {} } = this;
    bmCommon.error("line mousedownEvent", e);
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
    let { x, y, direction = "", e } = item || {};
    let { startX, startY, id = "" } = Text;
    let { shiftKey = false } = e;
    let zoom = Canvas.getZoom();
    let obj = window.bm_widgetMap[id];
    let { info = {} } = obj || {};
    let dx = x - startX;
    let dy = y - startY;
    let { x1 = 0, x2 = 0, y1 = 0, y2 = 0 } = info || {};
    dx = Math.floor(dx / zoom);
    dy = Math.floor(dy / zoom);
    if (direction === "right") {
      let __x2 = x2 + dx;
      let __y2 = y2 + dy;
      if (shiftKey) {
        let xya = bmCommon.snapToAngle(x1, y1, __x2, __y2);
        __x2 = xya.x;
        __y2 = xya.y;
      }
      info.x2 = __x2;
      info.y2 = __y2;
      obj.refresh();
    } else if (direction === "left") {
      let __x1 = x1 + dx;
      let __y1 = y1 + dy;
      if (shiftKey) {
        let xya = bmCommon.snapToAngle(x2, y2, __x1, __y1);
        __x1 = xya.x;
        __y1 = xya.y;
      }
      info.x1 = __x1;
      info.y1 = __y1;
      obj.refresh();
    }
    Text.startX = x;
    Text.startY = y;
  }

  destroy() {}

  event() {
    let showType = window.bm_show_type;
    if (showType != "edit") {
      return;
    }
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.bm-material-line-com`);
    // let that = this;
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
