import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 灯泡
class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
      <div
      class="bm-device-dengp-com component"
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
      viewBox="0 0 53 60"
      width="${width}"
      height="${height}"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs><style type='text/css'>
      .dengp-${id}-st0{fill:url(#dengp_2_);}
      .dengp-${id}-st1{fill:url(#dengp_3_);}
      .dengp-${id}-st2{fill:url(#dengp_4_);}
      .dengp-${id}-st3{fill:#AEB4BA;}
      .dengp-${id}-st4{fill:#4B5156;}
      .dengp-${id}-st5{fill:url(#dengp_5_);}
      .dengp-${id}-st6{fill:url(#dengp_6_);}
      </style></defs>
      ${this.renderSvgContent()}
    </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `
      <g class="SVG_ani">
        <radialGradient
          id="dengp_2_"
          cx="26.186"
          cy="33.7572"
          r="26.186"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#FCFCB1;stop-opacity:0" />
        </radialGradient>
        <circle
          id="dengp_1409_"
          class="dengp-${id}-st0"
          cx="26.2"
          cy="33.8"
          r="26.2"
        />
        <radialGradient
          id="dengp_3_"
          cx="25.7781"
          cy="31.0932"
          r="15.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#FFFFFF" />
          <stop offset="0.1762" style="stop-color:#FFFFFB" />
          <stop offset="0.3468" style="stop-color:#FEFDEF" />
          <stop offset="0.5151" style="stop-color:#FCFBDC" />
          <stop offset="0.6821" style="stop-color:#FAF8C1" />
          <stop offset="0.8464" style="stop-color:#F7F49E" />
          <stop offset="1" style="stop-color:#F4F076" />
        </radialGradient>
        <path
          id="dengp_1407_"
          class="dengp-${id}-st1"
          d="M32.4,17.4v-3.2H19.1v3.2c0,1.9-0.8,3.7-2.3,4.8c-3.5,2.8-5.7,7.1-5.6,12
		c0.3,7.4,6.4,13.6,13.8,13.9c8.3,0.4,15.2-6.2,15.2-14.5c0-4.6-2.1-8.6-5.4-11.3C33.4,21.1,32.4,19.3,32.4,17.4z"
        />
        <linearGradient
          id="dengp_4_"
          gradientUnits="userSpaceOnUse"
          x1="18.7519"
          y1="10.7767"
          x2="32.8042"
          y2="10.7767"
        >
          <stop offset="0" style="stop-color:#ACB1B9" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9AEB7" />
        </linearGradient>
        <path
          id="dengp_1406_"
          class="dengp-${id}-st2"
          d="M18.8,5v8.2c0,1.9,3.1,3.4,7,3.4c3.9,0,7-1.5,7-3.4V5H18.8z"
        />
        <ellipse
          id="dengp_1403_"
          class="dengp-${id}-st3"
          cx="25.8"
          cy="5"
          rx="7"
          ry="3.4"
        />
        <path
          id="dengp_1402_"
          class="dengp-${id}-st4"
          d="M29.2,1.9L29.2,1.9L29.2,1.9c0,0-0.1-0.1-0.1-0.1L27.8,1h-4l-0.9,0.6
		c-0.7,0.4-1.2,0.9-1.2,1.4c0,1.1,1.8,2,4.1,2s4.1-0.9,4.1-2C29.9,2.6,29.7,2.2,29.2,1.9z"
        />
        <ellipse
          id="dengp_1400_"
          class="dengp-${id}-st3"
          cx="25.8"
          cy="1"
          rx="2"
          ry="1"
        />
      </g>
      <g class="SVG_sta">
        <radialGradient
          id="dengp_5_"
          cx="25.8905"
          cy="31.0651"
          r="15.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" style="stop-color:#C2C2C2" />
          <stop offset="1" style="stop-color:#7A7A7A" />
        </radialGradient>
        <path
          id="dengp_1405_"
          class="dengp-${id}-st5"
          d="M32.6,17.3v-3.2H19.2v3.2c0,1.9-0.8,3.7-2.3,4.8c-3.5,2.8-5.7,7.1-5.6,12
		c0.3,7.4,6.4,13.6,13.8,13.9c8.3,0.4,15.2-6.2,15.2-14.5c0-4.6-2.1-8.6-5.4-11.3C33.5,21,32.6,19.3,32.6,17.3z"
        />
        <linearGradient
          id="dengp_6_"
          gradientUnits="userSpaceOnUse"
          x1="18.8643"
          y1="10.7485"
          x2="32.9167"
          y2="10.7485"
        >
          <stop offset="0" style="stop-color:#ACB1B9" />
          <stop offset="0.4813" style="stop-color:#FFFFFF" />
          <stop offset="1" style="stop-color:#A9AEB7" />
        </linearGradient>
        <path
          id="dengp_1399_"
          class="dengp-${id}-st6"
          d="M18.9,5v8.2c0,1.9,3.1,3.4,7,3.4c3.9,0,7-1.5,7-3.4V5H18.9z"
        />
        <ellipse
          id="dengp_1398_"
          class="dengp-${id}-st3"
          cx="25.9"
          cy="5"
          rx="7"
          ry="3.4"
        />
        <path
          id="dengp_1404_"
          class="dengp-${id}-st4"
          d="M29.3,1.9L29.3,1.9L29.3,1.9c0,0-0.1-0.1-0.1-0.1L27.9,1h-4L23,1.6c-0.7,0.4-1.2,0.9-1.2,1.4
		c0,1.1,1.8,2,4.1,2S30,4.1,30,3C30,2.6,29.8,2.2,29.3,1.9z"
        />
        <ellipse
          id="dengp_1401_"
          class="dengp-${id}-st3"
          cx="25.9"
          cy="1"
          rx="2"
          ry="1"
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
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", height = 0, width = 0, content = false } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
    if (content) {
      $svg.find(".SVG_ani").show();
      $svg.find(".SVG_sta").hide();
      // $svg.find(".SVG_alert").hide();
    } else {
      $svg.find(".SVG_ani").hide();
      $svg.find(".SVG_sta").show();
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
