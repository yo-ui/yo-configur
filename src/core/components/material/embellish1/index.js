import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/display.less";
// 装饰1
const points = [
  [505.2, 57.4],
  [203.9, 57.4],
  [199.7, 54],
  [181.3, 54],
  [174.3, 47],
  [168, 47],
  [128, 7],
  [75.1, 7],
  [72.5, 1.4],
  [46.1, 1.4],
  [40.5, 7],
  [1, 7],
  [1, 10],
  [116, 10],
  [141.3, 33.7],
  [150.5, 33.7],
  [177.2, 60.4],
  [358, 60.4],
  [360.9, 63.3],
  [407.6, 63.3],
  [409.9, 60.4],
  [505.2, 60.4]
];
class Display extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    info.points = new SVG.PointArray(points);
    gradientStyle.gradientId = bmCommon.uuid();
  }

  //组件样式

  svgStyle() {
    let { info = {} } = this;
    let {
      width = "",
      height = "",
      // color = "",
      borderColor = "",
      gradientStyle = {},
      borderStyle = "",
      borderWidth = "",
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
    info.points = new SVG.PointArray(points).size(
      width - borderWidth * 2,
      height - borderWidth * 2
    );
    if (backgroundType == "purity") {
      //纯色
      styles["fill"] = backgroundColor;
      // if (backgroundImage) {
      //   styles["background-image"] = `url(${this.$loadImgUrl(
      //     backgroundImage
      //   )})`;
      // }
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
    let { width = "", height = "" } = info || {};
    let styles = {};
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-material-embellish-1-com component"
    style="${this.composeStyles(this.comStyle())}">
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
    let { points = [] } = info || {};
    let text = `<polygon points="${points}"
    style="${this.composeStyles(this.svgStyle())}"/>`;
    return text;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", width = 0, height = 0, points = [] } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find(`svg`);
    let $polygon = $svg.find(`polygon`);
    let $defs = $svg.find("defs");
    $defs.html(this.renderDefs());
    $svg.attr({ width, height, viewBox: `0 0 ${width} ${height}` });
    $polygon.attr({ points }).css(this.svgStyle());
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

  event() {}
}

export default Display;
