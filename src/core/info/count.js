import bmCommon from "@/common/common";
import Canvas from "../Canvas";

class Count {
  // container;
  constructor() {
    // this.container = $(`${id}`);
    // this.settings = { ...this.settings, ...options };
    // this.init();
  }
  static init(item) {
    Count.render(Count.template(item));
    Count.event();
  }

  static template(item) {
    let { count = 0 } = item || {};
    // bmCommon.log(container);
    Count.count = count;
    return `
    <span class="left">
      ${$vm.$lang("当前组件数量")}
    <span class="count" class="${count > 200 ? "red" : ""}">${count}</span>
    </span>
    <i class="el-icon-view" title="显示/隐藏"></i>
    `;
  }

  static render(html) {
    let $container = $("#info_com_count");
    $container.html(html);
  }

  static refresh(item) {
    let $container = $("#info_com_count");
    let { count = 0 } = item;
    count = Count.count + count;
    let $count = $container.find(".count");
    if (count > 200) {
      $count.addClass("red");
    } else {
      $count.removeClass("red");
    }
    $count.html(count);
    Count.count = count;
  }

  static setCount(count) {
    let $container = $("#info_com_count");
    let $count = $container.find(".count");
    if (count > 200) {
      $count.addClass("red");
    } else {
      $count.removeClass("red");
    }
    $count.html(count);
    Count.count = count;
  }

  static event() {
    let $container = $("#info_com_count");

    //增加显示隐藏事件
    $container.on("click", ".el-icon-view", function(e) {
      e.stopPropagation();
      window.requestAnimationFrame(() => {
        Canvas.toggle();
      });
    });
  }
}

export default Count;
