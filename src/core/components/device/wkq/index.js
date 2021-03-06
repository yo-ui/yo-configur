// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 温控器
class Text extends Component {
  point = {};
  constructor(props) {
    super(props);
  }
  init() {
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
    <div class="bm-device-wkq-com component"
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
    viewBox="0 0 73 65"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .wkq-${id}-st0{fill:#D8D9D9;}
    .wkq-${id}-st1{fill:url(#wkq_${id}_SVGID_1_);}
    .wkq-${id}-st2{fill:#FFFFFF;}
    .wkq-${id}-st3{fill:url(#wkq_${id}_SVGID_2_);}
    .wkq-${id}-st4{fill:#E8E8E8;}
    .wkq-${id}-st5{fill:url(#wkq_${id}_SVGID_3_);}
    .wkq-${id}-st6{fill:url(#wkq_${id}_SVGID_4_);}
    .wkq-${id}-st7{font-family:'OPPOSans-M';}
    .wkq-${id}-st8{font-size:10px;}
    .wkq-${id}-st9{font-family:'OPPOSans-H';}
    .wkq-${id}-st10{font-size:19px;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <g class="SVG_ani" >
    <path
      class="wkq-${id}-st0"
      d="M73,60H0V3c0-1.7,1.3-3,3-3h67c1.7,0,3,1.3,3,3V60z"
    />
    <linearGradient
      id="wkq_${id}_SVGID_3_"
      gradientUnits="userSpaceOnUse"
      x1="36.5"
      y1="65"
      x2="36.5"
      y2="5"
    >
      <stop offset="0" style="stop-color:#D8D9D9" />
      <stop offset="1" style="stop-color:#B1B1B2" />
    </linearGradient>
    <path
      class="wkq-${id}-st5"
      d="M70,65H3c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3h67c1.7,0,3,1.3,3,3v54C73,63.7,71.7,65,70,65z"
    />
    <path
      class="wkq-${id}-st2"
      d="M66,54H7c-1.7,0-3-1.3-3-3V12c0-0.6,0.4-1,1-1h61c1.7,0,3,1.3,3,3v37C69,52.7,67.7,54,66,54z"
    />
    <linearGradient
      id="wkq_${id}_SVGID_4_"
      gradientUnits="userSpaceOnUse"
      x1="36.5"
      y1="52"
      x2="36.5"
      y2="9"
    >
      <stop offset="0" style="stop-color:#0084E9" />
      <stop offset="1" style="stop-color:#0052AA" />
    </linearGradient>
    <path
      class="wkq-${id}-st6"
      d="M66,52H7c-1.7,0-3-1.3-3-3V10c0-0.6,0.4-1,1-1h61c1.7,0,3,1.3,3,3v37C69,50.7,67.7,52,66,52z"
    />
    <g>
      <rect
        x="8"
        y="57"
        class="wkq-${id}-st2"
        width="9"
        height="4"
      />
      <rect
        x="8"
        y="58"
        class="wkq-${id}-st4"
        width="9"
        height="4"
      />
    </g>
    <g>
      <rect
        x="24"
        y="57"
        class="wkq-${id}-st2"
        width="9"
        height="4"
      />
      <rect
        x="24"
        y="58"
        class="wkq-${id}-st4"
        width="9"
        height="4"
      />
    </g>
    <g>
      <rect
        x="40"
        y="57"
        class="wkq-${id}-st2"
        width="9"
        height="4"
      />
      <rect
        x="40"
        y="58"
        class="wkq-${id}-st4"
        width="9"
        height="4"
      />
    </g>
    <g>
      <rect
        x="56"
        y="57"
        class="wkq-${id}-st2"
        width="9"
        height="4"
      />
      <rect
        x="56"
        y="58"
        class="wkq-${id}-st4"
        width="9"
        height="4"
      />
    </g>
  </g>
  <g class="SVG_sta">
    <path
      class="wkq-${id}-st0"
      d="M73,60H0V3c0-1.7,1.3-3,3-3h67c1.7,0,3,1.3,3,3V60z"
    />
    <linearGradient
      id="wkq_${id}_SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1="36.5"
      y1="65"
      x2="36.5"
      y2="5"
    >
      <stop offset="0" style="stop-color:#D8D9D9" />
      <stop offset="1" style="stop-color:#B1B1B2" />
    </linearGradient>
    <path
      class="wkq-${id}-st1"
      d="M70,65H3c-1.7,0-3-1.3-3-3V8c0-1.7,1.3-3,3-3h67c1.7,0,3,1.3,3,3v54C73,63.7,71.7,65,70,65z"
    />
    <path
      class="wkq-${id}-st2"
      d="M66,54H7c-1.7,0-3-1.3-3-3V12c0-0.6,0.4-1,1-1h61c1.7,0,3,1.3,3,3v37C69,52.7,67.7,54,66,54z"
    />
    <linearGradient
      id="wkq_${id}_SVGID_2_"
      gradientUnits="userSpaceOnUse"
      x1="36.5"
      y1="52"
      x2="36.5"
      y2="9"
    >
      <stop offset="0" style="stop-color:#929CAD" />
      <stop offset="1" style="stop-color:#697284" />
    </linearGradient>
    <path
      class="wkq-${id}-st3"
      d="M66,52H7c-1.7,0-3-1.3-3-3V10c0-0.6,0.4-1,1-1h61c1.7,0,3,1.3,3,3v37C69,50.7,67.7,52,66,52z"
    />
    <g>
      <rect
        x="8"
        y="57"
        class="wkq-${id}-st2"
        width="9"
        height="4"
      />
      <rect
        x="8"
        y="58"
        class="wkq-${id}-st4"
        width="9"
        height="4"
      />
    </g>
    <g>
      <rect
        x="24"
        y="57"
        class="wkq-${id}-st2"
        width="9"
        height="4"
      />
      <rect
        x="24"
        y="58"
        class="wkq-${id}-st4"
        width="9"
        height="4"
      />
    </g>
    <g>
      <rect
        x="40"
        y="57"
        class="wkq-${id}-st2"
        width="9"
        height="4"
      />
      <rect
        x="40"
        y="58"
        class="wkq-${id}-st4"
        width="9"
        height="4"
      />
    </g>
    <g>
      <rect
        x="56"
        y="57"
        class="wkq-${id}-st2"
        width="9"
        height="4"
      />
      <rect
        x="56"
        y="58"
        class="wkq-${id}-st4"
        width="9"
        height="4"
      />
    </g>
  </g>
  <g id="textContent">
    ${this.renderTextContent()}
  </g>`;
    return text;
  }

  renderTextContent() {
    let { info = {}, point = {} } = this;
    let {
      id = "",
      content = false,
      bindData = {},
      descrStyle = {},
      valueStyle = {}
    } = info || {};
    let { devicePoint = "" } = bindData || {};
    let { showCode = "", formatNum = "" } = descrStyle || {};
    let { decimal = "" } = valueStyle || {};
    return `<text
    transform="matrix(1 0 0 1 10 22)"
    style="${this.composeStyles(this.descrStyle())}"
    class="wkq-${id}-st2 wkq-${id}-st7 wkq-${id}-st8"
  >
    ${
      showCode
        ? devicePoint
          ? point.id || point.point || ""
          : "Temp"
        : $vm.$ellipsis(
            devicePoint ? point.name || point.descr || "" : "温度",
            formatNum,
            0,
            "..."
          )
    }
  </text>
  <text
    transform="matrix(1 0 0 1 15 44)"
    class="wkq-${id}-st2 wkq-${id}-st9 wkq-${id}-st10"
    style="${this.composeStyles(this.valueStyle())}"
  >
    ${
      content
        ? $vm.$format(devicePoint ? point.value || "0" : 26.5, decimal)
        : "--"
    }
  </text>
  <text
    transform="matrix(1 0 0 1 54 22)"
    style="${this.composeStyles(this.unitStyle())}"
    class="wkq-${id}-st2 wkq-${id}-st7 wkq-${id}-st8"
  >
    ${devicePoint ? point.unit || "" : "℃"}
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
      let { id = "", value = "" } = item || {};
      if (devicePoint == id) {
        this.point = item || {};
      } else if (id == pointCode) {
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

export default Text;
