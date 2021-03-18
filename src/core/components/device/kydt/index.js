// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 客用电梯
class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    super.initEvent();

    let { info = {} } = this;
    info.content = 0;
    this.refresh();
  }

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-kydt-com component"
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
    viewBox="0 0 230 290"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .kydt-${id}-st0 {
      fill: #e7e7e5;
    }
    .kydt-${id}-st1 {
      opacity: 0.3;
    }
    .kydt-${id}-st2 {
      fill: #5b5e6f;
    }
    .kydt-${id}-st3 {
      fill: #cbcbc9;
    }
    .kydt-${id}-st4 {
      fill: url(#kydt_${id}_1_);
    }
    .kydt-${id}-st5 {
      fill: url(#kydt_${id}_2_);
    }
    .kydt-${id}-st6 {
      opacity: 0.6;
    }
    .kydt-${id}-st7 {
      fill: #a5a9ac;
    }
    .kydt-${id}-st8 {
      fill: #c3c3c1;
    }
    .kydt-${id}-st9 {
      fill: url(#kydt_${id}_3_);
    }
    .kydt-${id}-st10 {
      fill: #ffffff;
    }
    .kydt-${id}-st11 {
      fill: #7a7e89;
    }
    .kydt-${id}-st12 {
      fill: url(#kydt_${id}_4_);
    }
    .kydt-${id}-st13 {
      fill: url(#kydt_${id}_5_);
    }
    .kydt-${id}-st14 {
      fill: #ff0000;
    }
    .kydt-${id}-st15 {
      fill: url(#kydt_${id}_6_);
    }
    .kydt-${id}-st16 {
      opacity: 0.4;
      fill: #ff0000;
    }
    .kydt-${id}-st17 {
      fill: url(#kydt_${id}_7_);
    }
    .kydt-${id}-st18 {
      opacity: 0.4;
    }

    .show {
      display: default;
    }
    .hide {
      display: none;
    }
    .f1 {
      display: default;
    }
    .f2 {
      display: none;
    }
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <g>
    <rect
      x="89.54"
      y="2"
      class="kydt-${id}-st0"
      width="125"
      height="234"
    />
    <g class="kydt-${id}-st1">
      <rect
        x="107.01"
        y="2"
        class="kydt-${id}-st2"
        width="1.99"
        height="33.27"
      />
    </g>
    <g class="kydt-${id}-st1">
      <rect
        x="111.01"
        y="2"
        class="kydt-${id}-st2"
        width="1.99"
        height="33.27"
      />
    </g>
    <g class="kydt-${id}-st1">
      <rect
        x="115.01"
        y="2"
        class="kydt-${id}-st2"
        width="1.99"
        height="33.27"
      />
    </g>
    <g class="kydt-${id}-st1">
      <rect
        x="185.01"
        y="2"
        class="kydt-${id}-st2"
        width="1.99"
        height="33.27"
      />
    </g>
    <g class="kydt-${id}-st1">
      <rect
        x="189.01"
        y="2"
        class="kydt-${id}-st2"
        width="1.99"
        height="33.27"
      />
    </g>
    <g class="kydt-${id}-st1">
      <rect
        x="193.01"
        y="2"
        class="kydt-${id}-st2"
        width="1.99"
        height="33.27"
      />
    </g>
    <polygon
      class="kydt-${id}-st3"
      points="89.54,237.47 28.54,281.47 28.54,46 89.54,2 	"
    />
    <g>
      <linearGradient
        id="kydt_${id}_1_"
        gradientUnits="userSpaceOnUse"
        x1="88.5355"
        y1="287"
        x2="88.5355"
        y2="48"
      >
        <stop offset="0" style="stop-color:#BDBDBD" />
        <stop offset="0.5168" style="stop-color:#F4F4F4" />
        <stop offset="0.6083" style="stop-color:#EEEFEF" />
        <stop offset="0.728" style="stop-color:#DEDFE0" />
        <stop offset="0.8632" style="stop-color:#C3C5C7" />
        <stop offset="1" style="stop-color:#A0A4A7" />
      </linearGradient>
      <rect
        x="22.54"
        y="48"
        class="kydt-${id}-st4"
        width="132"
        height="239"
      />
    </g>
    <g>
      <linearGradient
        id="kydt_${id}_2_"
        gradientUnits="userSpaceOnUse"
        x1="154.5355"
        y1="143.5"
        x2="220.5355"
        y2="143.5"
      >
        <stop offset="0" style="stop-color:#888E9A" />
        <stop offset="1" style="stop-color:#5A5D6E" />
      </linearGradient>
      <polygon
        class="kydt-${id}-st5"
        points="154.54,287 220.54,239 220.54,0 154.54,48 		"
      />
    </g>
    <g class="kydt-${id}-st6">
      <polygon points="87.48,48 86.28,48 86.28,287 87.48,287 87.48,48 		" />
    </g>
    <g>
      <g>
        <path
          class="kydt-${id}-st7"
          d="M88.54,0l-66,48h132l66-48H88.54z M153.54,46h-125l61-44h125L153.54,46z"
        />
      </g>
    </g>
    <g>
      <polygon
        class="kydt-${id}-st8"
        points="170.59,26.44 0,26.44 4.34,23.13 174.93,23.13 		"
      />
    </g>
    <g>
      <polygon
        class="kydt-${id}-st2"
        points="170.59,289 174.93,285.69 174.93,23.13 170.59,26.44 		"
      />
    </g>
    <g>
      <linearGradient
        id="kydt_${id}_3_"
        gradientUnits="userSpaceOnUse"
        x1="85.2956"
        y1="289"
        x2="85.2956"
        y2="26.4376"
      >
        <stop offset="0" style="stop-color:#959A9E" />
        <stop offset="0.5168" style="stop-color:#E1E2DD" />
        <stop offset="1" style="stop-color:#838793" />
      </linearGradient>
      <polygon
        class="kydt-${id}-st9"
        points="0,26.44 0,289 19,289 19,50 151,50 151,289 170.59,289 170.59,26.44 		"
      />
    </g>
    <g>
      <polygon
        class="kydt-${id}-st2"
        points="22.54,50 19,50 19,289 22.54,287 		"
      />
    </g>
    <g>
      <rect
        x="66"
        y="29.44"
        class="kydt-${id}-st10"
        width="40"
        height="17.56"
      />
    </g>
    <g>
      <rect
        x="153.93"
        y="156.07"
        class="kydt-${id}-st11"
        width="14"
        height="30.72"
      />
    </g>
    <g class="kydt-${id}-st6">
      <circle cx="161.32" cy="164.59" r="4.17" />
    </g>
    <g>
      <rect x="68" y="31.44" width="36" height="13.56" />
    </g>
    <g>
      <linearGradient
        id="kydt_${id}_4_"
        gradientUnits="userSpaceOnUse"
        x1="158.9103"
        y1="162.0714"
        x2="161.7412"
        y2="166.1156"
      >
        <stop offset="0" style="stop-color:#959A9E" />
        <stop offset="1" style="stop-color:#E1E2DD" />
      </linearGradient>
      <circle
        class="kydt-${id}-st12"
        cx="160.94"
        cy="164.97"
        r="3.78"
      />
    </g>
    <g class="kydt-${id}-st6">
      <circle cx="161.32" cy="178.59" r="4.17" />
    </g>
    <g>
      <linearGradient
        id="kydt_${id}_5_"
        gradientUnits="userSpaceOnUse"
        x1="158.9103"
        y1="176.0714"
        x2="161.7412"
        y2="180.1156"
      >
        <stop offset="0" style="stop-color:#959A9E" />
        <stop offset="1" style="stop-color:#E1E2DD" />
      </linearGradient>
      <circle
        class="kydt-${id}-st13"
        cx="160.94"
        cy="178.97"
        r="3.78"
      />
    </g>
  </g>
  <g class="SVG_ani" >
    <g class="f1">
      <animate
        values="show;hide"
        dur="2s"
        attributeName="class"
        repeatCount="indefinite"
      />
      <polygon
        class="kydt-${id}-st14"
        points="97.72,35.27 94.27,41.16 90.81,35.27 	"
      />

      <radialGradient
        id="kydt_${id}_6_"
        cx="474.2651"
        cy="408.2188"
        r="6.7812"
        gradientTransform="matrix(-1 0 0 -1 568.5302 446.4377)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#FF0000" />
        <stop offset="1" style="stop-color:#FF0000;stop-opacity:0" />
      </radialGradient>
      <circle
        class="kydt-${id}-st15"
        cx="94.27"
        cy="38.22"
        r="6.78"
      />
      <polygon
        class="kydt-${id}-st16"
        points="73.81,41.16 77.27,35.27 80.72,41.16 	"
      />
    </g>
    <g class="f2">
      <animate
        values="hide;show;"
        dur="2s"
        attributeName="class"
        repeatCount="indefinite"
      />
      <polygon
        class="kydt-${id}-st14"
        points="73.81,41.16 77.27,35.27 80.72,41.16 	"
      />
      <radialGradient
        id="kydt_${id}_7_"
        cx="77.2651"
        cy="38.2188"
        r="6.7812"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" style="stop-color:#FF0000" />
        <stop offset="1" style="stop-color:#FF0000;stop-opacity:0" />
      </radialGradient>
      <circle
        class="kydt-${id}-st17"
        cx="77.27"
        cy="38.22"
        r="6.78"
      />
      <polygon
        class="kydt-${id}-st16"
        points="97.72,35.27 94.27,41.16 90.81,35.27 	"
      />
    </g>
  </g>

  <g class="SVG_sta">
    <polygon
      class="kydt-${id}-st16"
      points="73.81,41.16 77.27,35.27 80.72,41.16 	"
    />
    <polygon
      class="kydt-${id}-st16"
      points="97.72,35.27 94.27,41.16 90.81,35.27 	"
    />
  </g>
  <g class="SVG_alert" >
    <g class="kydt-${id}-st18">
      <polygon
        class="kydt-${id}-st14"
        points="220.54,0 88.54,0 56.73,23.13 4.34,23.13 0,26.44 0,289 19,289 22.54,287 86.28,287 87.48,287
                151,287 151,289 170.59,289 174.93,285.69 174.93,272.17 220.54,239 		"
      />
    </g>
  </g>`;
    return text;
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { info = {} } = this;
    let { point } = data || {};
    if (point) {
      let { value = "" } = point || {};
      info.content = value;
      this.refresh();
    }
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", height = 0, width = 0, content = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
    if (content == 0) {
      $svg.find(".SVG_ani").hide();
      $svg.find(".SVG_sta").show();
      $svg.find(".SVG_alert").hide();
    } else if (content == 1) {
      $svg.find(".SVG_ani").show();
      $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").hide();
    } else if (content == 2) {
      $svg.find(".SVG_ani").hide();
      $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").show();
    }
  }

  event() {}
}

export default Text;
