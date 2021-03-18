// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/display.less";
// 新风控制器
class Display extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    super.initEvent();

    let { info = {} } = this;
    // bmCommon.log("kg mounted=", content);
    let { content = "" } = info || {};
    if (content === "") {
      content = false;
    }
    this.refresh();
  }

  //组件样式
  descrStyle() {
    let { info = {} } = this;
    let { descrStyle = {} } = info || {};
    let { color = "", left = "", top = "", fontSize = "", fontFamily = "" } =
      descrStyle || {};
    let styles = {
      transform: `matrix(1, 0, 0 ,1 ,${left},${top})`
    };
    if (color) {
      styles["fill"] = color;
    }
    if (fontSize) {
      styles["font-size"] = `${fontSize}px`;
    }
    if (fontFamily) {
      styles["font-family"] = fontFamily;
    }
    return styles || {};
  }
  valueStyle() {
    let { info = {} } = this;
    let { valueStyle = {} } = info || {};
    let { color = "", left = "", top = "", fontSize = "", fontFamily = "" } =
      valueStyle || {};
    let styles = { transform: `matrix(1, 0, 0 ,1 ,${left},${top})` };
    if (color) {
      styles["fill"] = color;
    }
    if (fontSize) {
      styles["font-size"] = `${fontSize}px`;
    }
    if (fontFamily) {
      styles["font-family"] = fontFamily;
    }
    return styles || {};
  }
  unitStyle() {
    let { info = {} } = this;
    let { unitStyle = {} } = info || {};
    let { color = "", left = "", top = "", fontSize = "", fontFamily = "" } =
      unitStyle || {};
    let styles = { transform: `matrix(1, 0, 0 ,1 ,${left},${top})` };
    if (color) {
      styles["fill"] = color;
    }
    if (fontSize) {
      styles["font-size"] = `${fontSize}px`;
    }
    if (fontFamily) {
      styles["font-family"] = fontFamily;
    }
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-xfkzq-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
  </div>
    `
    );
  }
  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 85 58"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .xfkzq-${id}-st0{fill:#D8D9D9;}
    .xfkzq-${id}-st1{fill:url(#xfkzq_${id}_SVGID_1_);}
    .xfkzq-${id}-st2{fill:#FFFFFF;}
    .xfkzq-${id}-st3{fill:url(#xfkzq_${id}_SVGID_2_);}
    .xfkzq-${id}-st4{opacity:0.3;}
    .xfkzq-${id}-st5{fill:#E8E8E8;}
    .xfkzq-${id}-st6{fill:url(#xfkzq_${id}_SVGID_3_);}
    .xfkzq-${id}-st7{fill:url(#xfkzq_${id}_SVGID_4_);}
    .xfkzq-${id}-st8{font-family:'OPPOSans-M';}
    .xfkzq-${id}-st9{font-size:10px;}
    .xfkzq-${id}-st10{font-family:'OPPOSans-H';}
    .xfkzq-${id}-st11{font-size:19px;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <g class="SVG_ani" ><path
    class="xfkzq-${id}-st0"
    d="M85,53H0V3c0-1.7,1.3-3,3-3h79c1.7,0,3,1.3,3,3V53z"
  />
  <linearGradient
    id="xfkzq_${id}_SVGID_3_"
    gradientUnits="userSpaceOnUse"
    x1="42.5"
    y1="58"
    x2="42.5"
    y2="5"
  >
    <stop offset="0" style="stop-color:#D8D9D9" />
    <stop offset="1" style="stop-color:#B1B1B2" />
  </linearGradient>
  <path
    class="xfkzq-${id}-st6"
    d="M82,58H3c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3h79c1.7,0,3,1.3,3,3v47C85,56.7,83.7,58,82,58z"
  />
  <path
    class="xfkzq-${id}-st2"
    d="M60,54H7c-1.7,0-3-1.3-3-3V12c0-0.6,0.4-1,1-1h55c1.7,0,3,1.3,3,3v37C63,52.7,61.7,54,60,54z"
  />
  <linearGradient
    id="xfkzq_${id}_SVGID_4_"
    gradientUnits="userSpaceOnUse"
    x1="33.5"
    y1="52"
    x2="33.5"
    y2="9"
  >
    <stop offset="0" style="stop-color:#00BF81" />
    <stop offset="1" style="stop-color:#007A7F" />
  </linearGradient>
  <path
    class="xfkzq-${id}-st7"
    d="M60,52H7c-1.7,0-3-1.3-3-3V10c0-0.6,0.4-1,1-1h55c1.7,0,3,1.3,3,3v37C63,50.7,61.7,52,60,52z"
  />
  <rect
    x="68"
    y="10"
    class="xfkzq-${id}-st4"
    width="17"
    height="43"
  />
  <rect
    x="69"
    y="11"
    class="xfkzq-${id}-st2"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="12"
    class="xfkzq-${id}-st5"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="18"
    class="xfkzq-${id}-st2"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="19"
    class="xfkzq-${id}-st5"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="25"
    class="xfkzq-${id}-st2"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="26"
    class="xfkzq-${id}-st5"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="32"
    class="xfkzq-${id}-st2"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="33"
    class="xfkzq-${id}-st5"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="39"
    class="xfkzq-${id}-st2"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="40"
    class="xfkzq-${id}-st5"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="46"
    class="xfkzq-${id}-st2"
    width="15"
    height="5"
  />
  <rect
    x="69"
    y="47"
    class="xfkzq-${id}-st5"
    width="15"
    height="5"
  />
  </g>
  <g class="SVG_sta"><path
  class="xfkzq-${id}-st0"
  d="M85,53H0V3c0-1.7,1.3-3,3-3h79c1.7,0,3,1.3,3,3V53z"
/>
<linearGradient
  id="xfkzq_${id}_SVGID_1_"
  gradientUnits="userSpaceOnUse"
  x1="42.5"
  y1="58"
  x2="42.5"
  y2="5"
>
  <stop offset="0" style="stop-color:#D8D9D9" />
  <stop offset="1" style="stop-color:#B1B1B2" />
</linearGradient>
<path
  class="xfkzq-${id}-st1"
  d="M82,58H3c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3h79c1.7,0,3,1.3,3,3v47C85,56.7,83.7,58,82,58z"
/>
<path
  class="xfkzq-${id}-st2"
  d="M60,54H7c-1.7,0-3-1.3-3-3V12c0-0.6,0.4-1,1-1h55c1.7,0,3,1.3,3,3v37C63,52.7,61.7,54,60,54z"
/>
<linearGradient
  id="xfkzq_${id}_SVGID_2_"
  gradientUnits="userSpaceOnUse"
  x1="33.5"
  y1="52"
  x2="33.5"
  y2="9"
>
  <stop offset="0" style="stop-color:#929CAD" />
  <stop offset="1" style="stop-color:#697284" />
</linearGradient>
<path
  class="xfkzq-${id}-st3"
  d="M60,52H7c-1.7,0-3-1.3-3-3V10c0-0.6,0.4-1,1-1h55c1.7,0,3,1.3,3,3v37C63,50.7,61.7,52,60,52z"
/>
<rect
  x="68"
  y="10"
  class="xfkzq-${id}-st4"
  width="17"
  height="43"
/>
<rect
  x="69"
  y="11"
  class="xfkzq-${id}-st2"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="12"
  class="xfkzq-${id}-st5"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="18"
  class="xfkzq-${id}-st2"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="19"
  class="xfkzq-${id}-st5"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="25"
  class="xfkzq-${id}-st2"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="26"
  class="xfkzq-${id}-st5"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="32"
  class="xfkzq-${id}-st2"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="33"
  class="xfkzq-${id}-st5"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="39"
  class="xfkzq-${id}-st2"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="40"
  class="xfkzq-${id}-st5"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="46"
  class="xfkzq-${id}-st2"
  width="15"
  height="5"
/>
<rect
  x="69"
  y="47"
  class="xfkzq-${id}-st5"
  width="15"
  height="5"
/>
  </g>
  <g id="textContent">
    ${this.renderTextContent()}
  </g>`;
    return text;
  }

  renderTextContent() {
    let { info = {}, point = {} } = this;
    let { id = "", bindData = {}, descrStyle = {}, valueStyle = {} } =
      info || {};
    let { devicePoint = "" } = bindData || {};
    let { showCode = "", formatNum = "" } = descrStyle || {};
    let { decimal = "" } = valueStyle || {};
    return `<text
    transform="matrix(1 0 0 1 8 22)"
    class="
      xfkzq-${id}-st2 xfkzq-${id}-st8 xfkzq-${id}-st9
    "
    style="${this.composeStyles(this.descrStyle())}"
  >
    ${
      showCode
        ? devicePoint
          ? point.id || point.point || ""
          : "WS"
        : $vm.$ellipsis(
            devicePoint ? point.name || point.descr || "" : "风速",
            formatNum,
            0,
            "..."
          )
    }
  </text>
  <text
    transform="matrix(1 0 0 1 27 44)"
    class="xfkzq-${id}-st2 xfkzq-${id}-st10 xfkzq-${id}-st11
    "
    style="${this.composeStyles(this.valueStyle())}"
  >
    ${
      info.content
        ? $vm.$format(devicePoint ? point.value || "0" : 3, decimal)
        : "--"
    }
  </text>
  <text
    transform="matrix(1 0 0 1 49 22)"
    class="
      xfkzq-${id}-st2 xfkzq-${id}-st8 xfkzq-${id}-st9
    "
    style="${this.composeStyles(this.unitStyle())}"
  >
    ${devicePoint ? point.unit || "" : "档"}
  </text>`;
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { info = {}, pointCode = "" } = this;
    let { bindData = {} } = info || {};
    let { devicePoint = "" } = bindData || {};
    let { device } = data || {};
    let { points: pointList = [] } = device || {};
    pointList.forEach(item => {
      let { point = "", value = "" } = item || {};
      if (devicePoint == point) {
        this.point = item || {};
      } else if (point == pointCode) {
        info.content = value == 1 ? true : false;
      }
    });
    this.refresh();
    // if (point) {
    //   let { value = "" } = point || {};
    //   this.pointValue = value;
    //   this.refresh();
    // }
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", height = 0, width = 0, content = false } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    let $text = $container.find("#textContent");
    $svg.attr({ width, height });
    $text.html(this.renderTextContent());
    if (content) {
      $svg.find(".SVG_ani").show();
      $svg.find(".SVG_sta").hide();
      // $svg.find(".SVG_alert").hide();
    } else {
      $svg.find(".SVG_ani").hide();
      $svg.find(".SVG_sta").show();
      // $svg.find(".SVG_alert").hide();
    }
  }

  event() {}
}

export default Display;
