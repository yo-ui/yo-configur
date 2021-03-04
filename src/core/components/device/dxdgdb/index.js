import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/hScroll.less";
// 单项导轨电表
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
    <div class="bm-device-dxdgdb-com component"
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
    viewBox="0 0 64 60"
    width="${width}"
    height="${height}"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xml:space="preserve"
  >

  <defs>
  <style type='text/css'>
  .dxdgdb-${id}-st0{fill:#C2C8CE;}
    .dxdgdb-${id}-st1{fill:#DFE3E8;}
    .dxdgdb-${id}-st2{fill:#FFFFFF;}
    .dxdgdb-${id}-st3{fill:#8F9499;}
    .dxdgdb-${id}-st4{fill:#848776;}
    .dxdgdb-${id}-st5{fill:#25282B;}
    .dxdgdb-${id}-st6{fill:#F95D06;}
    .dxdgdb-${id}-st7{fill:#565656;}
    .dxdgdb-${id}-st8{fill:#8BB70F;}
</style></defs>

${this.renderSvgContent()}
</svg>`;
  }
  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `

<g id="dxdgdb_710_">
<rect
  id="dxdgdb_719_"
  x="2"
  y="46.7"
  class="dxdgdb-${id}-st0"
  width="60"
  height="4.5"
/>
<rect
  id="dxdgdb_718_"
  x="2"
  y="51.2"
  class="dxdgdb-${id}-st1"
  width="60"
  height="8.6"
/>
<rect
  id="dxdgdb_717_"
  x="1"
  y="17.7"
  class="dxdgdb-${id}-st2"
  width="62"
  height="29"
/>
<path
  id="dxdgdb_714_"
  class="dxdgdb-${id}-st1"
  d="M64,47.7H0v-31h64V47.7z M2,45.7h53v-27H2V45.7z"
/>
<polygon
  id="dxdgdb_713_"
  class="dxdgdb-${id}-st0"
  points="64,16.7 0,16.7 2,12.4 62,12.4 	"
/>
<rect
  id="dxdgdb_712_"
  x="2"
  y="3.7"
  class="dxdgdb-${id}-st1"
  width="60"
  height="8.7"
/>
<polygon
  id="dxdgdb_711_"
  class="dxdgdb-${id}-st0"
  points="59,0.2 5,0.2 2,3.7 62,3.7 	"
/>
</g>
<circle
id="dxdgdb_709_"
class="dxdgdb-${id}-st3"
cx="11.5"
cy="8.1"
r="2"
/>
<circle
id="dxdgdb_708_"
class="dxdgdb-${id}-st3"
cx="45.2"
cy="8.1"
r="2"
/>
<g id="dxdgdb_703_">
<rect
  id="dxdgdb_707_"
  x="10.5"
  y="25.1"
  class="dxdgdb-${id}-st4"
  width="27"
  height="12"
/>
<path
  id="dxdgdb_704_"
  class="dxdgdb-${id}-st5"
  d="M38.5,38.1h-29v-14h29V38.1z M11.5,36.1h25v-10h-25V36.1z"
/>
</g>
<circle
id="dxdgdb_702_"
class="dxdgdb-${id}-st3"
cx="11.5"
cy="54.1"
r="2"
/>
<circle
id="dxdgdb_701_"
class="dxdgdb-${id}-st3"
cx="45.2"
cy="54.1"
r="2"
/>
<rect
id="dxdgdb_700_"
x="43.1"
y="22.1"
class="dxdgdb-${id}-st3"
width="4.5"
height="2.5"
/>
<rect
id="dxdgdb_699_"
x="43"
y="36.6"
class="dxdgdb-${id}-st6"
width="6.7"
height="3.7"
/>
<rect
id="dxdgdb_698_"
x="42.8"
y="28.6"
class="dxdgdb-${id}-st0"
width="7.8"
height="1"
/>
<rect
id="dxdgdb_697_"
x="42.8"
y="30.7"
class="dxdgdb-${id}-st0"
width="5.4"
height="1"
/>
<g id="dxdgdb_748_">
<rect
  id="dxdgdb_676_"
  x="58.8"
  y="25.8"
  class="dxdgdb-${id}-st7"
  width="1"
  height="16"
/>
<circle
  id="dxdgdb_694_"
  class="dxdgdb-${id}-st8"
  cx="59.2"
  cy="22.2"
  r="1.5"
/>
</g>`;
    return text;
  }

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  // //刷新内容
  // refreshContent(data) {
  //   let { point } = data || {};
  //   if (point) {
  //     let { value = "" } = point || {};
  //     this.pointValue = value;
  //     this.refresh();
  //   }
  // }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", height = 0, width = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    // $container.html(this.renderSvg());
    $svg.attr({ width, height });
  }

  event() {}
}

export default Text;
