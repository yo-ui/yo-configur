import bmCommon from "@/common/common";
let position = {
  originX: 0,
  originY: 0
};
export default {
  methods: {
    initMoveEvent(e) {
      // e.stopPropagation();
      e.preventDefault();
      let { activeCom = {} } = this;
      // var activeCom = this.$vpd.state.activeElement
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      // 设置移动状态初始值
      // this.$vpd.commit('initmove', {
      //   startX: e.pageX,
      //   startY: e.pageY,
      //   originX: activeCom.left,
      //   originY: activeCom.top
      // })
      let { left, top, width, height, editable = false } = activeCom || {};
      if (!editable) {
        e.preventDefault();
      }
      this.initMove({
        startX: x,
        startY: y,
        originX: left,
        originY: top,
        originWidth: width,
        originHeight: height
      });
      position.originX = left;
      position.originY = top;

      // 绑定鼠标移动事件
      // document.addEventListener('mousemove', this.mousemoveEvent, true)
      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);

      // 取消鼠标移动事件
      // document.addEventListener('mouseup', this.mouseupEvent, true)
    },

    mousemoveEvent(e) {
      e.stopPropagation();
      // e.preventDefault();
      // this.$vpd.commit('move', {
      //   x: e.pageX,
      //   y: e.pageY
      // })
      // bmCommon.log("组件移动");
      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      this.moving({
        x,
        y
      });
    },

    mouseupEvent() {
      let { activeCom = {} } = this;
      let { alias = "", left = 0, top = 0, id = "" } = activeCom || {};
      let { originX = 0, originY = 0 } = position || {};
      // document.removeEventListener('mousemove', this.mousemoveEvent, true)
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      // document.removeEventListener('mouseup', this.mouseupEvent, true)
      // this.$vpd.commit('stopmove')
      if (alias == "linkPoint") {
        this.setLinkPoint(activeCom);
      }
      // bmCommon.log("组件停止移动");
      this.stopMove();
      let box = document.getElementById(`box_${id}`)?.__vue__;
      if (box) {
        box.loadComPoints();
      }
      if (Math.abs(originX - left) > 5 || Math.abs(originY - top) > 5) {
        this.createHistoryAction();
      }
    }
  }
};

// export { move }
