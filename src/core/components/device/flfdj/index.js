// import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 风力发电机
class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {
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
    <div class="bm-device-flfdj-com component"
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
    viewBox="0 0 292 307"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >
    <defs><style type='text/css'>
    .flfdj-${id}-st0{fill:url(#flfdj_${id}_1_);}
    .flfdj-${id}-st1{fill:url(#flfdj_${id}_2_);}
    .flfdj-${id}-st2{opacity:0;fill:#FFFFFF;}
    .flfdj-${id}-st3{fill:url(#flfdj_${id}_3_);}
    .flfdj-${id}-st4{fill:#DDDDDD;}
    .flfdj-${id}-st5{fill:url(#flfdj_${id}_4_);}
    .flfdj-${id}-st6{fill:url(#flfdj_${id}_5_);}
    .flfdj-${id}-st7{opacity:0.2;}
    .flfdj-${id}-st8{fill:url(#flfdj_${id}_6_);}
    .flfdj-${id}-st9{opacity:0.4;fill:#FF0000;}
    </style></defs>
    ${this.renderSvgContent()}
  </svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `

    <g id="SVG_base1">
    <g>
      <linearGradient
        id="flfdj_${id}_1_"
        gradientUnits="userSpaceOnUse"
        x1="-940.5"
        y1="234.5"
        x2="-921.5"
        y2="234.5"
        gradientTransform="matrix(-1 0 0 1 -785 0)"
      >
        <stop offset="0" style="stop-color:#899194" />
        <stop offset="0.3533" style="stop-color:#CED1D2" />
        <stop offset="0.5936" style="stop-color:#FFFFFF" />
        <stop offset="0.6545" style="stop-color:#FAFBFB" />
        <stop offset="0.7217" style="stop-color:#EDEEEF" />
        <stop offset="0.7918" style="stop-color:#D7DADB" />
        <stop offset="0.864" style="stop-color:#B8BDBF" />
        <stop offset="0.937" style="stop-color:#91989B" />
        <stop offset="1" style="stop-color:#697377" />
      </linearGradient>
      <polygon
        class="flfdj-${id}-st0"
        points="136.5,307 155.5,307 151.5,162 140.5,162 		"
      />
    </g>
    <linearGradient
      id="flfdj_${id}_2_"
      gradientUnits="userSpaceOnUse"
      x1="146.0573"
      y1="172.0651"
      x2="145.9558"
      y2="128.5575"
    >
      <stop offset="0" style="stop-color:#899194" />
      <stop offset="0.5953" style="stop-color:#CED1D2" />
      <stop offset="1" style="stop-color:#FFFFFF" />
    </linearGradient>
    <polygon
      class="flfdj-${id}-st1"
      points="136.1,133 132,137.1 132,157.9 136.1,162 155.9,162 160,157.9 160,137.1 155.9,133 	"
    />
  </g>
  <g class="SVG_ani">
    <g>
      <circle
        class="flfdj-${id}-st2"
        cx="146"
        cy="145.9"
        r="148.9"
      />
      <g>
        <linearGradient
          id="flfdj_${id}_3_"
          gradientUnits="userSpaceOnUse"
          x1="114.7949"
          y1="72.5"
          x2="147.5"
          y2="72.5"
        >
          <stop offset="0" style="stop-color:#899194" />
          <stop offset="0.5953" style="stop-color:#CED1D2" />
          <stop offset="1" style="stop-color:#FFFFFF" />
        </linearGradient>
        <polygon
          class="flfdj-${id}-st3"
          points="150,0 150,145 144,145 131,109 145,3 			"
        />
        <polygon
          class="flfdj-${id}-st4"
          points="148,145 150,145 150,0 148,1.2 			"
        />
      </g>
      <g>
        <linearGradient
          id="flfdj_${id}_4_"
          gradientUnits="userSpaceOnUse"
          x1="-946.0128"
          y1="84.9576"
          x2="-913.3076"
          y2="84.9576"
          gradientTransform="matrix(-0.5 -0.866 0.866 -0.5 -447.4491 -567.3348)"
        >
          <stop offset="0" style="stop-color:#899194" />
          <stop offset="0.5953" style="stop-color:#CED1D2" />
          <stop offset="1" style="stop-color:#FFFFFF" />
        </linearGradient>
        <polygon
          class="flfdj-${id}-st5"
          points="18.7,215.2 144.3,142.7 147.3,147.9 122.6,177.2 23.8,218 			"
        />
        <polygon
          class="flfdj-${id}-st4"
          points="145.3,144.5 144.3,142.7 18.7,215.2 20.8,216.4 			"
        />
      </g>
      <g>
        <linearGradient
          id="flfdj_${id}_5_"
          gradientUnits="userSpaceOnUse"
          x1="-440.3976"
          y1="-981.9575"
          x2="-407.6924"
          y2="-981.9575"
          gradientTransform="matrix(-0.5 0.866 -0.866 -0.5 -845.0265 44.9593)"
        >
          <stop offset="0" style="stop-color:#899194" />
          <stop offset="0.5953" style="stop-color:#CED1D2" />
          <stop offset="1" style="stop-color:#FFFFFF" />
        </linearGradient>
        <polygon
          class="flfdj-${id}-st6"
          points="270.8,221.3 145.2,148.8 148.2,143.6 185.9,150.3 270.7,215.5 			"
        />
        <polygon
          class="flfdj-${id}-st4"
          points="146.2,147 145.2,148.8 270.8,221.3 270.7,218.9 			"
        />
      </g>

      <animateTransform
        attributeName="transform"
        from="0 145 146"
        to="360 145 146"
        type="rotate"
        begin="0s"
        dur="8s"
        repeatCount="indefinite"
      ></animateTransform>
    </g>
  </g>
  <g class="SVG_sta" >
    <g>
      <circle
        class="flfdj-${id}-st2"
        cx="146"
        cy="145.9"
        r="148.9"
      />
      <g>
        <linearGradient
          id="flfdj_${id}_3_"
          gradientUnits="userSpaceOnUse"
          x1="114.7949"
          y1="72.5"
          x2="147.5"
          y2="72.5"
        >
          <stop offset="0" style="stop-color:#899194" />
          <stop offset="0.5953" style="stop-color:#CED1D2" />
          <stop offset="1" style="stop-color:#FFFFFF" />
        </linearGradient>
        <polygon
          class="flfdj-${id}-st3"
          points="150,0 150,145 144,145 131,109 145,3 			"
        />
        <polygon
          class="flfdj-${id}-st4"
          points="148,145 150,145 150,0 148,1.2 			"
        />
      </g>
      <g>
        <linearGradient
          id="flfdj_${id}_4_"
          gradientUnits="userSpaceOnUse"
          x1="-946.0128"
          y1="84.9576"
          x2="-913.3076"
          y2="84.9576"
          gradientTransform="matrix(-0.5 -0.866 0.866 -0.5 -447.4491 -567.3348)"
        >
          <stop offset="0" style="stop-color:#899194" />
          <stop offset="0.5953" style="stop-color:#CED1D2" />
          <stop offset="1" style="stop-color:#FFFFFF" />
        </linearGradient>
        <polygon
          class="flfdj-${id}-st5"
          points="18.7,215.2 144.3,142.7 147.3,147.9 122.6,177.2 23.8,218 			"
        />
        <polygon
          class="flfdj-${id}-st4"
          points="145.3,144.5 144.3,142.7 18.7,215.2 20.8,216.4 			"
        />
      </g>
      <g>
        <linearGradient
          id="flfdj_${id}_5_"
          gradientUnits="userSpaceOnUse"
          x1="-440.3976"
          y1="-981.9575"
          x2="-407.6924"
          y2="-981.9575"
          gradientTransform="matrix(-0.5 0.866 -0.866 -0.5 -845.0265 44.9593)"
        >
          <stop offset="0" style="stop-color:#899194" />
          <stop offset="0.5953" style="stop-color:#CED1D2" />
          <stop offset="1" style="stop-color:#FFFFFF" />
        </linearGradient>
        <polygon
          class="flfdj-${id}-st6"
          points="270.8,221.3 145.2,148.8 148.2,143.6 185.9,150.3 270.7,215.5 			"
        />
        <polygon
          class="flfdj-${id}-st4"
          points="146.2,147 145.2,148.8 270.8,221.3 270.7,218.9 			"
        />
      </g>
    </g>
  </g>
  <g id="SVG_base2">
    <circle class="flfdj-${id}-st7" cx="146" cy="145.9" r="10" />
    <radialGradient
      id="flfdj_${id}_6_"
      cx="144.3989"
      cy="144.3915"
      r="9.7647"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.3209" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#C8CCCD" />
    </radialGradient>
    <circle class="flfdj-${id}-st8" cx="146" cy="145.9" r="8.6" />
  </g>
  <g class="SVG_alert" >
    <polygon
      class="flfdj-${id}-st9"
      points="270.8,221.3 270.7,215.5 185.9,150.3 160,145.7 160,137.1 155.9,133 150,133 150,0 145,3 131,109
139.7,133 136.1,133 132,137.1 132,149.8 18.7,215.2 20.8,216.4 20.8,216.4 23.8,218 122.6,177.2 135.7,161.7 136.1,162 140.5,162
136.5,307 155.5,307 151.5,162 155.9,162 160,157.9 160,157.3 	"
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
    let { point } = data || {};
    let { info = {} } = this;
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
