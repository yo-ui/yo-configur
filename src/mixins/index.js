import bmCommon from "@/common/common";
export default {
  methods: {
    initMoveEvent(e) {
      e.stopPropagation();
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
      let {
        left,
        top,
        width,
        height,
        // editable = false,
        // showCoverStatus = true
      } = activeCom || {};
      // if (!editable && !showCoverStatus) {
      //   e.preventDefault();
      // }
      this.initMove({
        startX: x,
        startY: y,
        originX: left,
        originY: top,
        originWidth: width,
        originHeight: height
      });

      // 绑定鼠标移动事件
      $(document).on("mousemove", this.mousemoveEvent);
      // 取消鼠标移动事件
      $(document).on("mouseup", this.mouseupEvent);
    },

    mousemoveEvent(e) {
      e.stopPropagation();
      e.preventDefault();

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
      this.createHistoryAction();
    }
  }
};

// export { move }
