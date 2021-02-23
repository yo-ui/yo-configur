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
    Count.count = count;
    container.html(`
      ${$vm.$lang("当前组件数量")}
    <span class="count" class="${count > 200 ? "red" : ""}">${count}</span>
    `);
  }

  static render(item = 1) {
    let $container = $("#info_com_count");
    let { count = 0 } = Count;
    count = count + item;
    let $count = $container.find(".count");
    if (count > 200) {
      $count.addClass("red");
    } else {
      $count.removeClass("red");
    }
    $count.html(count);
    Count.count = count;
  }

  event() {}
}

export default Count;
