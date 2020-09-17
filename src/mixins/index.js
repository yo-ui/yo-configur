import bmCommon from "@/common/common";
export default {
  methods: {
    initMoveEvent(e) {
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
      let { left, top, width, height } = activeCom || {};
      this.initMove({
        startX: x,
        startY: y,
        originX: left,
        originY: top,
        originWidth: width,
        originHeight: height
      });

      // 绑定鼠标移动事件
      // document.addEventListener('mousemove', this.mousemoveEvent, true)
      $(document).on("mousemove", this.mousemoveEvent);
      $(document).on("mouseup", this.mouseupEvent);

      // 取消鼠标移动事件
      // document.addEventListener('mouseup', this.mouseupEvent, true)
    },

    mousemoveEvent(e) {
      e.stopPropagation();
      e.preventDefault();

      // this.$vpd.commit('move', {
      //   x: e.pageX,
      //   y: e.pageY
      // })

      let pos = bmCommon.getMousePosition(e);
      let { x = "", y = "" } = pos || {};
      this.moving({
        x,
        y
      });
    },

    mouseupEvent() {
      let { activeCom = {} } = this;
      let { alias = "" } = activeCom || {};
      // document.removeEventListener('mousemove', this.mousemoveEvent, true)
      $(document).off("mousemove", this.mousemoveEvent);
      $(document).off("mouseup", this.mouseupEvent);
      // document.removeEventListener('mouseup', this.mouseupEvent, true)
      // this.$vpd.commit('stopmove')
      if (alias == "linkPoint") {
        this.setLinkPoint(activeCom);
      }
      this.stopMove();
    }
  }
};

// export { move }
