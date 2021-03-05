// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 立式电锅炉
class Text extends Component {
  pointValue = 1;
  constructor(props) {
    super(props);
  }
  init() {
    this.refresh();
  }

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-lsdgl-com component"
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
    viewBox="0 0 100 194"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .lsdgl-${id}-st0 {
      fill: #d0d4d8;
    }
    .lsdgl-${id}-st1 {
      fill: url(#lsdgl_2_);
    }
    .lsdgl-${id}-st2 {
      fill: none;
      stroke: #d0d4d8;
      stroke-width: 0.75;
      stroke-miterlimit: 10;
    }
    .lsdgl-${id}-st3 {
      fill: #333333;
    }
    .lsdgl-${id}-st4 {
      fill: url(#lsdgl_${id}_SVGID_1_);
    }
    .lsdgl-${id}-st5 {
      fill: url(#lsdgl_${id}_SVGID_2_);
    }
    .lsdgl-${id}-st6 {
      fill: url(#lsdgl_${id}_SVGID_3_);
    }
    .lsdgl-${id}-st7 {
      fill: #3b3b3b;
    }
    .lsdgl-${id}-st8 {
      fill: #ffffff;
    }
    .lsdgl-${id}-st9 {
      fill: url(#lsdgl_${id}_SVGID_4_);
    }
    .lsdgl-${id}-st10 {
      fill: url(#lsdgl_${id}_SVGID_5_);
    }
    .lsdgl-${id}-st11 {
      fill: url(#lsdgl_${id}_SVGID_6_);
    }
    .lsdgl-${id}-st12 {
      fill: #848776;
    }
    .lsdgl-${id}-st13 {
      fill: #25282b;
    }
    .lsdgl-${id}-st14 {
      fill: #444444;
    }
    .lsdgl-${id}-st15 {
      fill: #666666;
    }
    .lsdgl-${id}-st16 {
      fill: #7d7d7d;
    }
    .lsdgl-${id}-st17 {
      fill: url(#lsdgl_${id}_SVGID_7_);
    }
    .lsdgl-${id}-st18 {
      fill: #2f3133;
    }
    .lsdgl-${id}-st19 {
      fill: #fffa63;
    }
    .lsdgl-${id}-st20 {
      opacity: 0.38;
      fill: #ff0000;
    }
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
    <g id="图层_2">
    <path
      id="lsdgl_1032_"
      class="lsdgl-${id}-st0"
      d="M96.1,195H5.7c-2.5,0-4.5-2-4.5-4.5V14.4l2.9-8.9C5,3.1,6.8,1,9.3,1h83.2
c2.5,0,4.4,2.2,5.2,4.5l2.9,8.9v176.1C100.6,193,98.6,195,96.1,195z"
    />
    <linearGradient
      id="lsdgl_2_"
      gradientUnits="userSpaceOnUse"
      x1="1.7594"
      y1="103.3102"
      x2="100.0523"
      y2="103.3102"
    >
      <stop offset="0" style="stop-color:#CDCFD1" />
      <stop offset="6.000000e-02" style="stop-color:#FFFFFF" />
      <stop offset="0.94" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#CDCFD1" />
    </linearGradient>
    <path
      id="lsdgl_1031_"
      class="lsdgl-${id}-st1"
      d="M94.5,194.4H7.3c-3.1,0-5.6-2.5-5.6-5.6v-171c0-3.1,2.5-5.6,5.6-5.6h87.2
c3.1,0,5.6,2.5,5.6,5.6v171C100.1,191.9,97.6,194.4,94.5,194.4z"
    />
    <path
      id="lsdgl_1017_"
      class="lsdgl-${id}-st2"
      d="M100.4,72.3c0,1.2-1.7,2.2-3.9,2.2H5.2c-2.1,0-3.9-1-3.9-2.2"
    />
    <g>
      <polygon points="35.2,24.7 24,25 13.9,24.7 13.9,23.7 35.2,23.7 		" />
      <rect
        x="13.9"
        y="24.7"
        class="lsdgl-${id}-st3"
        width="21.4"
        height="15.5"
      />
      <linearGradient
        id="lsdgl_${id}_SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="30.5343"
        y1="36.5012"
        x2="19.7833"
        y2="27.7571"
      >
        <stop offset="0" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#B5BABD" />
      </linearGradient>
      <polygon
        class="lsdgl-${id}-st4"
        points="33.3,34.4 30.5,37.3 16.7,37.3 16.7,26.7 33.3,26.7 		"
      />
      <polygon points="15.8,37.3 15.8,38.3 29.5,38.3 30.5,37.3 		" />
    </g>
    <g>
      <polygon points="62.2,24.7 51,25 40.9,24.7 40.9,23.7 62.2,23.7 		" />
      <rect
        x="40.9"
        y="24.7"
        class="lsdgl-${id}-st3"
        width="21.4"
        height="15.5"
      />
      <linearGradient
        id="lsdgl_${id}_SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="57.5343"
        y1="36.5012"
        x2="46.7833"
        y2="27.7571"
      >
        <stop offset="0" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#B5BABD" />
      </linearGradient>
      <polygon
        class="lsdgl-${id}-st5"
        points="60.3,34.4 57.5,37.3 43.7,37.3 43.7,26.7 60.3,26.7 		"
      />
      <polygon points="42.8,37.3 42.8,38.3 56.5,38.3 57.5,37.3 		" />
    </g>
    <g>
      <polygon points="89.2,24.7 78,25 67.9,24.7 67.9,23.7 89.2,23.7 		" />
      <rect
        x="67.9"
        y="24.7"
        class="lsdgl-${id}-st3"
        width="21.4"
        height="15.5"
      />
      <linearGradient
        id="lsdgl_${id}_SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="84.5343"
        y1="36.5012"
        x2="73.7833"
        y2="27.7571"
      >
        <stop offset="0" style="stop-color:#FFFFFF" />
        <stop offset="1" style="stop-color:#B5BABD" />
      </linearGradient>
      <polygon
        class="lsdgl-${id}-st6"
        points="87.3,34.4 84.5,37.3 70.7,37.3 70.7,26.7 87.3,26.7 		"
      />
      <polygon points="69.8,37.3 69.8,38.3 83.5,38.3 84.5,37.3 		" />
    </g>
    <g>
      <circle class="lsdgl-${id}-st7" cx="29" cy="58" r="4.9" />
      <circle class="lsdgl-${id}-st8" cx="29" cy="59" r="4.6" />
      <linearGradient
        id="lsdgl_${id}_SVGID_4_"
        gradientUnits="userSpaceOnUse"
        x1="29"
        y1="62.5285"
        x2="29"
        y2="55.4715"
      >
        <stop offset="0" style="stop-color:#8CD400" />
        <stop offset="1" style="stop-color:#4D7F00" />
      </linearGradient>
      <circle class="lsdgl-${id}-st9" cx="29" cy="59" r="3.5" />
    </g>
    <g>
      <circle class="lsdgl-${id}-st7" cx="51.3" cy="58" r="4.9" />
      <circle class="lsdgl-${id}-st8" cx="51.3" cy="59" r="4.6" />
      <linearGradient
        id="lsdgl_${id}_SVGID_5_"
        gradientUnits="userSpaceOnUse"
        x1="51.326"
        y1="62.5285"
        x2="51.326"
        y2="55.4715"
      >
        <stop offset="0" style="stop-color:#FF8955" />
        <stop offset="1" style="stop-color:#970000" />
      </linearGradient>
      <circle class="lsdgl-${id}-st10" cx="51.3" cy="59" r="3.5" />
    </g>
    <g>
      <circle class="lsdgl-${id}-st7" cx="74.3" cy="58" r="4.9" />
      <circle class="lsdgl-${id}-st8" cx="74.3" cy="59" r="4.6" />
      <linearGradient
        id="lsdgl_${id}_SVGID_6_"
        gradientUnits="userSpaceOnUse"
        x1="74.326"
        y1="62.5285"
        x2="74.326"
        y2="55.4715"
      >
        <stop offset="0" style="stop-color:#FF8955" />
        <stop offset="1" style="stop-color:#970000" />
      </linearGradient>
      <circle class="lsdgl-${id}-st11" cx="74.3" cy="59" r="3.5" />
    </g>
    <g id="lsdgl_620_">
      <rect
        id="lsdgl_624_"
        x="36.7"
        y="85.9"
        class="lsdgl-${id}-st12"
        width="30"
        height="16.9"
      />
      <path
        id="lsdgl_621_"
        class="lsdgl-${id}-st13"
        d="M67.7,103.9h-32V84.9h32V103.9z M37.7,101.9h28V86.9h-28V101.9z"
      />
    </g>
    <g id="lsdgl_543_">
      <path
        id="lsdgl_546_"
        class="lsdgl-${id}-st14"
        d="M19.2,99.5c-1.5,0-2.6,1.2-2.6,2.6v15.4c0,1.5,1.2,2.6,2.6,2.6c1.5,0,2.6-1.2,2.6-2.6v-15.4
  C21.8,100.7,20.7,99.5,19.2,99.5z"
      />
      <path
        id="lsdgl_354_"
        class="lsdgl-${id}-st15"
        d="M19.2,101c-0.8,0-1.4,0.6-1.4,1.4v14.9c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4v-14.9
  C20.6,101.6,20,101,19.2,101z"
      />
    </g>
    <g>
      <rect
        x="14"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -126.1876 64.9021)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="22"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -123.8444 70.559)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="30"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -121.5013 76.2158)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="38"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -119.1581 81.8727)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="46"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -116.815 87.5295)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="54"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -114.4718 93.1864)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="62"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -112.1287 98.8433)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="70"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -109.7856 104.5001)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="78"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -107.4424 110.157)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="86"
        y="183.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -105.0993 115.8138)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />
    </g>
    <g>
      <rect
        x="18"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -120.0663 65.6803)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="26"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -117.7231 71.3372)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />
      <rect
        x="34"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -115.38 76.994)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="42"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -113.0368 82.6509)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="50"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -110.6937 88.3077)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="58"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -108.3505 93.9646)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="66"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0074 99.6214)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="74"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -103.6642 105.2783)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />

      <rect
        x="82"
        y="176.5"
        transform="matrix(0.7071 -0.7071 0.7071 0.7071 -101.3211 110.9351)"
        class="lsdgl-${id}-st16"
        width="2.5"
        height="2.5"
      />
    </g>
  </g>
  <g class="SVG_ani">
    <linearGradient
      id="lsdgl_${id}_SVGID_7_"
      gradientUnits="userSpaceOnUse"
      x1="1.7594"
      y1="134.6873"
      x2="100.0523"
      y2="134.6873"
    >
      <stop offset="6.149733e-02" style="stop-color:#394147" />
      <stop offset="8.673798e-02" style="stop-color:#616668" />
      <stop offset="0.9118" style="stop-color:#616668" />
      <stop offset="0.9186" style="stop-color:#616668" />
      <stop offset="0.9465" style="stop-color:#394147" />
    </linearGradient>
    <path
      class="lsdgl-${id}-st17"
      d="M1.8,75v113.8c0,3.1,2.5,5.6,5.6,5.6h87.2c3.1,0,5.6-2.5,5.6-5.6V75H1.8z"
    />
    <path
      class="lsdgl-${id}-st18"
      d="M100,189.4l-1.9-6c-0.8-2.3-2.8-4.5-5.2-4.5H9c-2.5,0-4.3,2.1-5.2,4.5l-1.9,6c0.3,2.8,2.7,4.9,5.5,4.9h87.2
C97.3,194.4,99.7,192.2,100,189.4z"
    />
    <g>
      <path
        class="lsdgl-${id}-st19"
        d="M78.8,171h-2.7c-4,0-7.2-3.2-7.2-7.2V89c0-1.8-1.4-3.2-3.2-3.2h-2.7c-1.8,0-3.2,1.4-3.2,3.2v74.8
  c0,4-3.2,7.2-7.2,7.2h-2.7c-4,0-7.2-3.2-7.2-7.2V89c0-1.8-1.4-3.2-3.2-3.2H37c-1.8,0-3.2,1.4-3.2,3.2v74.8c0,4-3.2,7.2-7.2,7.2H24
  c-4,0-7.2-3.2-7.2-7.2v-80h4v80c0,1.8,1.4,3.2,3.2,3.2h2.7c1.8,0,3.2-1.4,3.2-3.2V89c0-4,3.2-7.2,7.2-7.2h2.7c4,0,7.2,3.2,7.2,7.2
  v74.8c0,1.8,1.4,3.2,3.2,3.2h2.7c1.8,0,3.2-1.4,3.2-3.2V89c0-4,3.2-7.2,7.2-7.2h2.7c4,0,7.2,3.2,7.2,7.2v74.8
  c0,1.8,1.4,3.2,3.2,3.2h2.7c1.8,0,3.2-1.4,3.2-3.2v-80h4v80C86,167.8,82.8,171,78.8,171z"
      />
    </g>
  </g>

  <g class="SVG_alert">
    <path
      class="lsdgl-${id}-st20"
      d="M97.7,5.5C96.9,3.2,95,1,92.5,1H9.3C6.8,1,5,3.1,4.1,5.5l-2.9,8.9v176.1c0,2.5,2,4.5,4.5,4.5h90.4
c2.5,0,4.5-2,4.5-4.5V14.4L97.7,5.5z"
    />
  </g>`;
    return text;
  }
  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { point = {} } = data || {};
    // let { pointCode = "" } = this;
    // let { device = {} } = data || {};
    // let { pointList = [] } = device || {};
    // let point = pointList.find(item => {
    //   let { point: id = "" } = item || {};
    //   return id == pointCode; // SwSts  开关状态
    // });
    if (point) {
      let { value = "" } = point || {};
      this.pointValue = value;
      this.refresh();
    }
  }

  refresh() {
    super.refresh();
    let { info = {}, pointValue } = this;
    let { id = "", height = 0, width = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
    // if (pointValue == 0) {
    //   $svg.find(".SVG_ani").hide();
    //   $svg.find(".SVG_sta").show();
    //   $svg.find(".SVG_alert").hide();
    // } else
    if (pointValue == 1) {
      $svg.find(".SVG_ani").show();
      $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").hide();
    } else if (pointValue == 2) {
      $svg.find(".SVG_ani").hide();
      $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").show();
    }
  }
  event() {}
}

export default Text;
