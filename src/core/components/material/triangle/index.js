import bmCommon from "@/common/common";
import Component from "@/core/Component";
import Canvas from "../../../Canvas";
import CanvasEvent from "../../../CanvasEvent";
import "../../../../assets/less/components/component/material/triangle.less";
const points = [
  ["M", 50.5, 9.3],
  ["L", 94.2, 41.1],
  ["L", 77.5, 92.5],
  ["H", 23.5],
  ["L", 6.8, 41.1],
  ["L", 50.5, 9.3],
  ["Z"]
];
// 三角形
class Display extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    info.point = new SVG.PathArray(points);
    gradientStyle.gradientId = bmCommon.uuid();
    this.refresh();
  }

  //组件样式
  svgStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      borderColor = "",
      gradientStyle = {},
      borderStyle = "",
      changeable = false,
      qx = 0,
      qy = 0,
      cornerCount = 3, //角数
      // outerRadius = 50, //外切圆半径
      borderWidth = "",
      backgroundType = "",
      backgroundColor = ""
    } = info || {};
    let styles = {};
    styles["stroke"] = borderColor;
    if (borderStyle) {
      switch (borderStyle) {
        case "none":
          borderWidth = 0;
          borderStyle = "";
          break;
        case "solid":
          borderStyle = "";
          break;
        case "dotted":
          // styles["stroke-linecap"] = "round";
          borderStyle = `${borderWidth},${borderWidth}`;
          break;
        case "dashed":
          borderStyle = `${borderWidth * 2},${borderWidth}`;
          break;
        // case "space-dashed":
        //   borderStyle = `${borderWidth * 2},${borderWidth},${borderWidth /
        //     2} ,${borderWidth / 2},${borderWidth}`;
        //   break;

        default:
          break;
      }
      if (borderStyle) {
        styles["stroke-dasharray"] = borderStyle;
      }
    }
    styles["stroke-width"] = borderWidth;
    let point = [width / 2, 0]; //第一个点
    // let innerPoint = new SVG.Point([
    //   width / 2,
    //   height / 2
    // ]).transform({
    //   rotate: 360 / (cornerCount * 2),
    //   origin: {
    //     x: width / 2,
    //     y: height / 2
    //   }
    // }); //内切圆初始点
    if (!changeable) {
      [qx, qy] = point || [];
    }
    let points = [];
    // points.push([qx, qy]);
    for (let i = 0; i < cornerCount; i++) {
      let _point = new SVG.Point(point).transform({
        rotate: (360 / cornerCount) * i,
        origin: { x: width / 2, y: height / 2 }
      });
      // if (i > 0) {
      points.push(_point.toArray());
      // }
      // points2.push(_point.toArray());

      // _point = new SVG.Point(innerPoint).transform({
      //   rotate: (360 / cornerCount) * i,
      //   origin: { x: width / 2, y: height / 2 }
      // });
      // points.push(_point.toArray());
    }
    let __points = new SVG.PointArray(points)
      .size(width - borderWidth * 2, height - borderWidth * 2)
      .move(0, 0);

    info.points = [[qx, qy], ...__points.slice(1)];
    // bmCommon.log(info.points);
    if (backgroundType == "purity") {
      //纯色
      styles["fill"] = backgroundColor || "transparent";
    } else if (backgroundType == "gradient") {
      //渐变
      // styles = { ...styles, ...gradientStyle };
      let { gradientId = "" } = gradientStyle || {};
      styles["fill"] = `url(#${gradientId})`;
    }
    return styles;
  }
  comStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      flipH = false,
      flipV = false,
      opacity = "",
      visible = true
    } = info || {};
    let styles = {};
    styles["opacity"] = opacity / 100;
    styles["visibility"] = `${visible ? "visible" : "hidden"}`;
    let scale = `scale(${flipH ? -1 : 1},${flipV ? -1 : 1})`;
    (styles["transform"] = `${scale}`),
      (styles["-webkit-transform"] = `${scale}`),
      (styles["-ms-transform"] = `${scale}`),
      (styles["-o-transform"] = `${scale}`),
      (styles["-moz-transform"] = `${scale}`);
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-material-triangle-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
    </div>
      `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { height = 0, width = 0, borderWidth = 0 } = info || {};
    return ` <svg
      version="1.1"
      viewBox="-${borderWidth} -${borderWidth} ${width} ${height}"
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
    let { qy = 0, qx = 0, points = [], id = "" } = info || {};
    let text = `<polygon points="${points}"
      style="${this.composeStyles(this.svgStyle())}"/><circle
        class="circle"
        data-id="${id}"
        cx="${qx}"
        cy="${qy}"
        r="5"
        stroke="#0075e7"
        fill="#ffa500"
        stroke-width="1"
      />`;
    return text;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let {
      id = "",
      width = 0,
      height = 0,
      borderWidth = 0,
      qx = 0,
      changeable = false
    } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find(`svg`);
    let $polygon = $svg.find(`polygon`);
    let $circle = $svg.find(`.circle`);
    let $defs = $svg.find("defs");
    $defs.html(this.renderDefs());
    $svg.attr({
      width,
      height,
      viewBox: `-${borderWidth} -${borderWidth} ${width} ${height}`
    });
    $circle.attr({ cx: qx });
    if (changeable) {
      $circle.show();
    } else {
      $circle.hide();
    }
    $polygon.css(this.svgStyle());
    let { points = [] } = info || {};
    $polygon.attr({ points });
  }

  static centerClickEvent(e) {
    e.preventDefault();
    e.stopPropagation();
    Display.mousedownEvent(e, "center");
  }
  static mousedownEvent(e, direction) {
    // let { info = {} } = this;
    // let {
    //   width: originWidth = "",
    //   height: originHeight = "",
    //   left,
    //   top,
    //   rotate: originRotate = ""
    // } = info || {};

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
    Display.direction = direction;
    Display.startX = x;
    Display.startY = y;
    // this.initMove({
    //   startX: x,
    //   startY: y,
    //   originX: left,
    //   originY: top,
    //   originRotate,
    //   originWidth,
    //   originHeight
    // });
    $(document).on("mousemove", Display.mousemoveEvent);
    $(document).on("mouseup", Display.mouseupEvent);
  }
  static mousemoveEvent(e) {
    e.stopPropagation();
    e.preventDefault();
    let pos = bmCommon.getMousePosition(e);
    let { x = "", y = "" } = pos || {};
    let { direction = "" } = Display;
    Display.resize({
      x,
      y,
      e,
      direction
    });
  }
  static mouseupEvent(e) {
    $(document).off("mousemove", Display.mousemoveEvent);
    $(document).off("mouseup", Display.mouseupEvent);
    // Display.stopMove();
    Display.rotating = false;
    let { id = "" } = Display;
    Canvas.setActiveCom(id);
    CanvasEvent.createHistoryAction();
  }

  // 调整元件尺寸
  static resize(item) {
    let { x, direction = "" } = item || {};
    let { startX, id = "" } = Display;
    let zoom = Canvas.getZoom();
    let obj = window.bm_widgetMap[id];
    let { info = {} } = obj || {};
    let { width = 0, qx = 0 } = info || {};
    var dx = x - startX;
    // var dy = y - startY;
    // Display.startY = y;
    if (direction === "center") {
      dx = Math.floor(dx / zoom);
      // dy = Math.floor((dy * 1) / zoom);
      qx += dx;
      if (qx > width) {
        qx = width;
      } else if (qx < 0) {
        qx = 0;
      }
      info.qx = qx;
      // info.qy += dy;
      bmCommon.log("info.qx=", info.qx);
      obj?.refresh();
    }

    Display.startX = x;
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
  //     let { value = "", unit = "" } = point || {};
  //     info.content = value;
  //     info.unit = unit;
  //     this.refresh();
  //   }
  // }

  event() {
    let showType = window.bm_show_type;
    if (showType != "edit") {
      return;
    }
    let { info = {} } = this;
    let { id = "" } = info || {};
    let $container = $(`#${id}>.bm-material-triangle-com`);
    // let that = this;
    $container.on("mousedown", ".circle", function(e) {
      let $this = $(this);
      let id = $this.data("id");
      Display.id = id;
      Display.centerClickEvent(e);
    });
    // $container.on("mousedown", ".rect1", function(e) {
    //   let $this = $(this);
    //   let id = $this.data("id");
    //   Text.id = id;
    //   Text.leftClickEvent(e);
    // });
    // $container.on("mousedown", ".rect2", function(e) {
    //   let $this = $(this);
    //   let id = $this.data("id");
    //   Text.id = id;
    //   Text.rightClickEvent(e);
    // });
  }
}

export default Display;
