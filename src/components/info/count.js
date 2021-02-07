import bmCommon from "@/common/common";

class Count {
  container;
  constructor(id, options) {
    this.container = $(`${id}`);
    this.settings = { ...this.settings, ...options };
    this.init();
  }
  init() {
    this.template();
    this.event();
  }

  template() {
    let { container, settings = {} } = this;
    let { count = 0 } = settings || {};
    // bmCommon.log(container);
    container.html(`
      ${$vm.$lang("当前组件数量")}
    <span class="count" class="${count > 200 ? "red" : ""}">${count}</span>
    `);
  }

  event() {}
}

export default Count;
