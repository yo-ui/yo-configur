import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 灯管
class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
    let { info = {} } = this;
    info.content = false;
    this.refresh();
  }

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
      <div
      class="bm-device-dengg-com component"
      style="${this.composeStyles(this.comStyle())}"
    >
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
    viewBox="0 0 164 30"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'> .kg-${id}-st0{fill:#B0B9C1;}
    .dengg-${id}-st0{fill:#98A1A8;}
    .dengg-${id}-st1{fill:#C2C8CE;}
    .dengg-${id}-st2{fill:#DFE3E8;}
    .dengg-${id}-st3{fill:url(#dengg_16_);}
    .dengg-${id}-st4{fill:url(#dengg_17_);}
    .dengg-${id}-st5{fill:url(#dengg_18_);}
    .dengg-${id}-st6{fill:url(#dengg_19_);}
    .dengg-${id}-st7{fill:url(#dengg_20_);}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <g>
    <g id="dengg_12_">
      <polygon
        id="dengg_15_"
        class="dengg-${id}-st0"
        points="6.68,8.67 15.58,1.46 15.58,15.42 7.64,31.09 		"
      />
      <polygon
        id="dengg_14_"
        class="dengg-${id}-st1"
        points="7.64,15.49 3.82,19.37 0,15.49 8.54,1.46 15.58,1.46 		"
      />
      <rect
        id="dengg_13_"
        x="0"
        y="15.49"
        class="dengg-${id}-st2"
        width="7.64"
        height="15.59"
      />
    </g>
    <linearGradient
      id="dengg_19_"
      gradientUnits="userSpaceOnUse"
      x1="84.58"
      y1="16.4783"
      x2="84.58"
      y2="6.4783"
    >
      <stop offset="0" style="stop-color:#828282" />
      <stop offset="0.5561" style="stop-color:#C2C2C2" />
      <stop offset="1" style="stop-color:#7A7A7A" />
    </linearGradient>
    <path
      id="dengg_11_"
      class="dengg-${id}-st6"
      d="M154.72,6.48H14.44c-1.4,0-2.54,2.24-2.54,5s1.14,5,2.54,5h140.28c1.4,0,2.54-2.24,2.54-5
              S156.12,6.48,154.72,6.48z"
    />
    <linearGradient
      id="dengg_20_"
      gradientUnits="userSpaceOnUse"
      x1="81.3582"
      y1="24.959"
      x2="81.3582"
      y2="13.7458"
    >
      <stop offset="0" style="stop-color:#828282" />
      <stop offset="0.5561" style="stop-color:#C2C2C2" />
      <stop offset="1" style="stop-color:#7A7A7A" />
    </linearGradient>
    <path
      id="dengg_9_"
      class="dengg-${id}-st7"
      d="M151.83,13.75H10.89c-1.34,0-2.42,2.51-2.42,5.61s1.08,5.61,2.42,5.61h140.93
              c1.34,0,2.42-2.51,2.42-5.61S153.16,13.75,151.83,13.75z"
    />
    <g id="dengg_5_">
      <polygon
        id="dengg_8_"
        class="dengg-${id}-st0"
        points="154.68,8.67 163.58,1.46 163.58,15.42 155.64,31.09 		"
      />
      <polygon
        id="dengg_7_"
        class="dengg-${id}-st1"
        points="155.64,15.49 151.82,19.37 148,15.49 156.54,1.46 163.58,1.46 		"
      />
      <rect
        id="dengg_6_"
        x="148"
        y="15.49"
        class="dengg-${id}-st2"
        width="7.64"
        height="15.59"
      />
    </g>
  </g>
  <g class="SVG_ani">
    <g id="dengg_1416_">
      <polygon
        id="dengg_1419_"
        class="dengg-${id}-st0"
        points="6.68,8.67 15.58,1.46 15.58,15.42 7.64,31.09 		"
      />
      <polygon
        id="dengg_1418_"
        class="dengg-${id}-st1"
        points="7.64,15.49 3.82,19.37 0,15.49 8.54,1.46 15.58,1.46 		"
      />
      <rect
        id="dengg_1417_"
        x="0"
        y="15.49"
        class="dengg-${id}-st2"
        width="7.64"
        height="15.59"
      />
    </g>
    <linearGradient
      id="dengg_16_"
      gradientUnits="userSpaceOnUse"
      x1="84.58"
      y1="16.4783"
      x2="84.58"
      y2="6.4783"
    >
      <stop offset="0" style="stop-color:#B6DEFF" />
      <stop offset="0.5561" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#B6DEFF" />
    </linearGradient>
    <path
      id="dengg_1411_"
      class="dengg-${id}-st3"
      d="M154.72,6.48H14.44c-1.4,0-2.54,2.24-2.54,5s1.14,5,2.54,5h140.28c1.4,0,2.54-2.24,2.54-5
              S156.12,6.48,154.72,6.48z"
    />

    <radialGradient
      id="dengg_17_"
      cx="74.2881"
      cy="-1150.5645"
      r="61.9705"
      gradientTransform="matrix(1.161 0 0 0.3685 -4.9993 446.8132)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#B6DEFF;stop-opacity:0" />
    </radialGradient>
    <ellipse
      id="dengg_1408_"
      class="dengg-${id}-st4"
      cx="81.25"
      cy="22.84"
      rx="71.95"
      ry="22.84"
    />
    <linearGradient
      id="dengg_18_"
      gradientUnits="userSpaceOnUse"
      x1="81.3582"
      y1="24.959"
      x2="81.3582"
      y2="13.7458"
    >
      <stop offset="0" style="stop-color:#B6DEFF" />
      <stop offset="0.5561" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#B6DEFF" />
    </linearGradient>
    <path
      id="dengg_1410_"
      class="dengg-${id}-st5"
      d="M151.83,13.75H10.89c-1.34,0-2.42,2.51-2.42,5.61s1.08,5.61,2.42,5.61h140.93
              c1.34,0,2.42-2.51,2.42-5.61S153.16,13.75,151.83,13.75z"
    />
    <g id="dengg_1_">
      <polygon
        id="dengg_4_"
        class="dengg-${id}-st0"
        points="154.68,8.67 163.58,1.46 163.58,15.42 155.64,31.09 		"
      />
      <polygon
        id="dengg_3_"
        class="dengg-${id}-st1"
        points="155.64,15.49 151.82,19.37 148,15.49 156.54,1.46 163.58,1.46 		"
      />
      <rect
        id="dengg_2_"
        x="148"
        y="15.49"
        class="dengg-${id}-st2"
        width="7.64"
        height="15.59"
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
      info.content = value == 1 ? true : false;
      this.refresh();
    }
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", height = 0, width = 0, content = false } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
    if (content) {
      $svg.find(".SVG_ani").show();
      // $svg.find(".SVG_sta").hide();
      // $svg.find(".SVG_alert").hide();
    } else {
      $svg.find(".SVG_ani").hide();
      // $svg.find(".SVG_sta").show();
      // $svg.find(".SVG_alert").show();
    }
  }

  event() {
    let { info = {} } = this;
    let { id = "", content = "" } = info || {};
    let $container = $(`#${id}>.component`);
    let that = this;
    $container.on("click", function(e) {
      e.stopPropagation();
      that.controlEvent({ value: !content ? 1 : 0 }, flag => {
        if (flag) {
          info.content = !content;
        } else {
          info.content = content; //如果取消则重置结果
        }
      });
    });
  }
}

export default Text;
