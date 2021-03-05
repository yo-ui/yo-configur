import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";

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
    <div class="bm-basic-compass-com component"
    style="${this.composeStyles(this.comStyle())}">
      ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="${width}"
      height="${height}"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs>
          <style type='text/css'>
            .compass-${id}-st0{opacity:0.3;fill:#494949;}
            .compass-${id}-st1{opacity:0.3;}
            .compass-${id}-st2{fill:#FFFFFF;}
            .compass-${id}-st3{fill-rule:evenodd;clip-rule:evenodd;fill:#C60909;}
            .compass-${id}-st4{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}
      </style></defs>
      <g id="图层_3">
        <path
          class="compass-${id}-st0"
          d="M100,3C46.4,3,3,46.4,3,100s43.4,97,97,97s97-43.4,97-97S153.6,3,100,3L100,3z"
        />
      </g>
      <g id="图层_5">
        <g class="compass-${id}-st1">
          <path
            class="compass-${id}-st2"
            d="M23.5,85C29.7,53.3,55.1,28.5,87,23.1v-2C54,26.5,27.7,52.2,21.4,85H23.5z"
          />
          <path
            class="compass-${id}-st2"
            d="M112,22.9c32.4,5,58.3,30.1,64.5,62.1h2c-6.3-33.1-33.1-59-66.6-64.1V22.9z"
          />
          <path
            class="compass-${id}-st2"
            d="M87,176.9c-32.6-5.5-58.4-31.3-63.9-63.9h-2c5.5,33.7,32.2,60.4,65.9,65.9V176.9z"
          />
          <path
            class="compass-${id}-st2"
            d="M176.9,113c-5.6,32.9-31.8,58.9-64.9,64.1v2c34.2-5.2,61.3-32,66.9-66.1H176.9z"
          />
        </g>
      </g>
      <g id="图层_6">
        <path
          class="compass-${id}-st2"
          d="M100,41c32.5,0,59,26.5,59,59s-26.5,59-59,59s-59-26.5-59-59S67.5,41,100,41 M100,37c-34.8,0-63,28.2-63,63
		s28.2,63,63,63s63-28.2,63-63S134.8,37,100,37L100,37z"
        />
        <g>
          <rect
            x="98"
            y="39.2"
            class="compass-${id}-st2"
            width="4"
            height="13.8"
          />
          <rect
            x="98"
            y="147"
            class="compass-${id}-st2"
            width="4"
            height="13.8"
          />
        </g>
        <g>
          <rect
            x="147"
            y="98"
            class="compass-${id}-st2"
            width="13.8"
            height="4"
          />
          <rect
            x="39.2"
            y="98"
            class="compass-${id}-st2"
            width="13.8"
            height="4"
          />
        </g>
      </g>
      <g id="图层_1">
        <polygon
          class="compass-${id}-st3"
          points="100,146 82.4,100 100,54 117.6,100"
        />
        <polygon
          class="compass-${id}-st4"
          points="100,140 84.7,100 115.3,100"
        />
      </g>
      <g id="图层_7"></g>
      <g id="图层_2">
        <g>
          <path
            class="compass-${id}-st2"
            d="M92.8,30.5V12h3.3c2.7,4.3,8.5,13.6,9.5,15.6h0c-0.2-2.4-0.2-5.3-0.2-8.3V12h2.3v18.6h-3.1
			c-2.5-4-8.5-14-9.7-16h0c0.1,2.1,0.1,5.3,0.1,8.6v7.4H92.8z"
          />
        </g>
        <g>
          <path
            class="compass-${id}-st2"
            d="M95,184.4c0.5,2.2,2,3.4,4.7,3.4c2.9,0,4-1.4,4-3.1c0-1.9-0.9-2.9-4.6-3.8c-4.4-1.1-5.9-2.6-5.9-5.2
			c0-2.8,2-5,6.2-5c4.4,0,6.2,2.6,6.5,5h-2.5c-0.3-1.7-1.4-3-4.1-3c-2.3,0-3.5,1-3.5,2.8c0,1.7,1,2.4,4.3,3.2
			c5.3,1.3,6.2,3.3,6.2,5.7c0,3-2.2,5.3-6.8,5.3c-4.7,0-6.7-2.6-7.1-5.4H95z"
          />
        </g>
        <g>
          <path
            class="compass-${id}-st2"
            d="M184.4,99.9h-9.2v6.6h10.1l-0.3,2.1h-12.2V90h12.1v2.1h-9.7v5.7h9.2V99.9z"
          />
        </g>
        <g>
          <path
            class="compass-${id}-st2"
            d="M12.9,108.5L8,90h2.6c1.4,6.1,3.4,13.8,3.8,15.9h0c0.5-2.4,3-11.1,4.2-15.9H21c1.1,4.1,3.6,13.6,4.1,15.8h0
			c0.6-3.2,3.2-12,4.2-15.8h2.4l-5.4,18.6h-2.6c-1.1-4.3-3.5-13.1-4-15.3h0c-0.6,2.8-2.9,11.1-4.1,15.3H12.9z"
          />
        </g>
      </g>
    </svg>`;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    $container.find("svg").css({ width, height });
  }

  event() {}
}

export default Text;
