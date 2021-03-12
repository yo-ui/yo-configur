import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/material/star.less";
let points = [];
// 星形
class Display extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    let { info = {} } = this;
    let { gradientStyle = {} } = info || {};
    info.points = new SVG.PointArray(points);
    // info.points1 = [];
    // info.points2 = [];
    // info.vBoxx = 0;
    // info.vBoxy = 0;
    gradientStyle.gradientId = bmCommon.uuid();
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
      borderWidth = "",
      cornerCount = 3, //角数
      innerRadius = 50, //内切圆半径
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
    let point = [width / 2, 0];
    let innerPoint = new SVG.Point([
      width / 2,
      height / 2 - innerRadius
    ]).transform(
      {
        rotate: 360 / (cornerCount * 2),
        origin: {
          x: width / 2,
          y: height / 2
        }
      }
      // new SVG.Matrix().rotate(360 / (cornerCount * 2)),
      // width / 2,
      // height / 2
    ); //内切圆初始点
    // bmCommon.log(width / 2, height / 2 - innerRadius, innerPoint);
    let points = [];
    // let points1 = [];
    // let points2 = [];
    // let xs = [],
    //   ys = [];
    for (let i = 0; i < cornerCount; i++) {
      let _point = new SVG.Point(point).transform(
        {
          rotate: (360 / cornerCount) * i,
          origin: { x: width / 2, y: height / 2 }
        }
        // new SVG.Matrix().rotate(
        //   (360 / cornerCount) * i,
        //   width / 2,
        //   height / 2
        // )
      );
      // bmCommon.log(points.toString());
      // let { x: _x = 0, y: _y = 0 } = _point;
      // xs.push(_x);
      // ys.push(_y);
      points.push(_point.toArray());
      // points2.push(_point.toArray());

      _point = new SVG.Point(innerPoint).transform(
        {
          rotate: (360 / cornerCount) * i,
          origin: { x: width / 2, y: height / 2 }
        }
        // new SVG.Matrix().rotate(
        //   (360 / cornerCount) * i,
        //   width / 2,
        //   height / 2
        // )
      );
      // points1.push(_point.toArray());
      // let { x = 0, y = 0 } = _point;
      // xs.push(x);
      // ys.push(y);
      points.push(_point.toArray());
    }
    // bmCommon.log("内切 points", xs ,ys);
    // info.vBoxx = Math.min.apply(null, xs);
    // info.vBoxy = Math.min.apply(null, ys);
    info.points = new SVG.PointArray(points)
      .size(width - borderWidth * 2, height - borderWidth * 2)
      .move(0, 0);
    // info.points1 = new SVG.PointArray(points1);
    // info.points2 = new SVG.PointArray(points2);
    // info.points = points;
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
    <div class="bm-material-star-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
    </div>
      `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { borderWidth = 0, height = 0, width = 0 } = info || {};
    return ` <svg
      version="1.1"
      viewBox="-${borderWidth} ${borderWidth} ${width} ${height}"
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
    return `<polygon points="${points}"
      style="${this.composeStyles(this.svgStyle())}"
    />`;
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
      viewBox: `-${borderWidth} -${borderWidth} ${width} ${height}`
    });
    $polygon.css(this.svgStyle());
    let { points = [] } = info || {};
    $polygon.attr({ points });
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
