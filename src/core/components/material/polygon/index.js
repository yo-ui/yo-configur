import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 多边形
class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    let points = [
      ["M", 50.5, 9.3],
      ["L", 94.2, 41.1],
      ["L", 77.5, 92.5],
      ["H", 23.5],
      ["L", 6.8, 41.1],
      ["L", 50.5, 9.3],
      ["Z"]
    ];
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    info.point = new SVG.PathArray(points);
    gradientStyle.gradientId = bmCommon.uuid();
  }

  //组件样式
  comStyle() {
    let { info = {} } = this;
    let { width = "", height = "" } = info || {};
    let styles = {};

    // if (width) {
    styles["width"] = `${width}px`;

    // }
    // if (height) {
    styles["height"] = `${height}px`;

    return styles || {};
  }
  svgStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      borderColor = "",
      gradientStyle = {},
      borderStyle = "",
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
    let points = [];
    for (let i = 0; i < cornerCount; i++) {
      let _point = new SVG.Point(point).transform({
        rotate: (360 / cornerCount) * i,
        origin: { x: width / 2, y: height / 2 }
      });
      points.push(_point.toArray());
      // points2.push(_point.toArray());

      // _point = new SVG.Point(innerPoint).transform({
      //   rotate: (360 / cornerCount) * i,
      //   origin: { x: width / 2, y: height / 2 }
      // });
      // points.push(_point.toArray());
    }
    info.points = new SVG.PointArray(points)
      .size(width - borderWidth * 2, height - borderWidth * 2)
      .move(0, 0);
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

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-material-polygon-com component"
    style="${this.composeStyles(this.comStyle())}">
   ${this.renderSvg()}

  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { width = 0, height = 0, borderWidth = 0 } = info || {};
    return ` <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="
      ${0 - borderWidth} ${0 - borderWidth} ${width} ${height}
    "
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs>
    ${this.renderDefs()}
  </defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { points = [] } = info || {};
    return `

  <polygon points="${points}"
  style="${this.composeStyles(this.svgStyle())}"/>`;
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

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", width = 0, height = 0, borderWidth = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find(`svg`);
    let $defs = $svg.find("defs");
    let $polygon = $svg.find("polygon");
    $defs.html(this.renderDefs());
    $svg.attr({
      width,
      height,
      viewBox: `${0 - borderWidth} ${0 - borderWidth} ${width} ${height}`
    });
    $polygon.css(this.svgStyle());
    let { points = [] } = info || {};
    $polygon.attr({ points });
  }

  event() {}
}

export default Text;
