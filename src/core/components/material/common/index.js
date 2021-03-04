import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/material/common.less";
// 水管（水平）
class Display extends Component {
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
    <img class="bm-material-common-com component" :src="info.backgroundImage" :style="comStyle" />
    `
    );
  }
  refresh() {
    super.refresh();
    // let { info = {} } = this;
    // let { id = "", width = 0, height = 0 } = info || {};
    // let $container = $(`#${id}>.component`);
    // $container.find(`svg`).attr({ width, height, viewBox: `0 0 ${width} 10` });
    // $container.find("rect").attr({ width });
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
