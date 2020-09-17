<template>
  <div class="bm-widget-list-com">
    <el-tabs v-model="activeIndex" tab-position="left" type="card">
      <el-tab-pane v-for="item in tabList" :key="item.code" :name="item.code">
        <template #label>
          <i :class="item.icon"></i>
          <p>{{ item.name }}</p>
        </template>
        <ul class="com-box">
          <li
            v-for="(_item, _index) in item.comList"
            draggable
            @mousedown.stop
            :key="`${item.code}_${_index}`"
            @click.stop="clickEvent(_item)"
            :data-item="JSON.stringify(_item)"
          >
            <i
              class="bm-icon"
              :style="`background-image:url(${_item.icon})`"
            ></i>
            {{ _item.name }}
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const Props = {
  type: [
    "text" //静态文本
  ]
};
export default {
  data() {
    let tabList = Object.freeze(Constants.COMPONENTLIBRARY);
    return {
      tabList,
      activeIndex: tabList[3].code
    };
  },
  props: {
    type: {
      type: String,
      validator(value) {
        return Props.type.indexOf(value) != -1;
      }
    }
  },
  computed: {
    ...mapGetters({
      widgetList: "canvas/getWidgetList" //组件列表
    })
  },
  mounted() {
    this.initEvent();
  },
  methods: {
    ...mapMutations({
      setWidgetList: "canvas/setWidgetList", //设置组件列表
      setLinkPoint: "canvas/setLinkPoint" //设置连接点信息
    }),
    ...mapActions(),
    initEvent() {
      $(document).on("dragstart", this.dragstartEvent);
    },
    dragstartEvent(e) {
      //dataTransfer.setData()方法设置数据类型和拖动的数据
      e.stopPropagation();
      // e.preventDefault();
      let { originalEvent = {} } = e;
      let { target, dataTransfer = {} } = originalEvent;
      let item = $(target).attr("data-item");
      if (item) {
        item = JSON.parse(item);
      }
      let { data = {}, name = "", code: type = "", alias = "" } = item || {};
      // bmCommon.log("开始拖动元素", target, data);
      dataTransfer.setData(
        "data",
        JSON.stringify({ ...data, type, name, alias })
      );
      this.dragenterEvent(e);
    },
    dragenterEvent(e) {
      // e.stopPropagation();
      // e.preventDefault();
      // bmCommon.log("进入目标元素", e.target);
      $(document).on("dragover", this.dragoverEvent);
      // $(document).on("dragleave", this.dragleaveEvent);
      $(document).on("drop", this.dropEvent);
    },
    dragoverEvent(e) {
      e.stopPropagation();
      e.preventDefault();
      // bmCommon.log("拖到目标元素上", e.target);
      // e.preventDefault();
    },
    dragleaveEvent(e) {
      e.stopPropagation();
      // e.preventDefault();
      // bmCommon.log("离开当前元素", e.target);
      // $(document).off("dragleave", this.dragleaveEvent);
      $(document).off("dragover", this.dragoverEvent);
      $(document).off("drop", this.dropEvent);
    },
    dropEvent(e) {
      e.preventDefault();
      // bmCommon.log("拖到目标元素", e.target);
      e.stopPropagation();
      let { widgetList = [] } = this;
      let { originalEvent = {} } = e;
      let offset = $(".view-box").offset();
      let { dataTransfer = {} } = originalEvent;
      let data = dataTransfer.getData("data");
      let target = originalEvent.target;
      if (
        data &&
        ($(target).hasClass("canvas-box") ||
          $(target)
            .parent()
            .hasClass("canvas-box"))
      ) {
        data = typeof data === "string" ? JSON.parse(data) : {};
        let id = bmCommon.uuid();
        let pos = bmCommon.getMousePosition(e);
        let { left = 0, top = 0 } = offset || {};
        let { x = 0, y = 0 } = pos || {};
        let { width = 0, height = 0, alias = "" } = data || {};
        // bmCommon.log("释放当前元素",data, target, width, height, left, top, x, y);
        left = x - left - width / 2;
        top = y - top - height / 2;
        let orders = widgetList.map(item => item.order);
        let order = Math.max(...orders);
        order += 1;
        let item = {
          ...data,
          order,
          alias,
          id,
          left,
          top
        };
        if (alias == "linkPoint") {
          this.setLinkPoint(item);
        }
        widgetList.push(item);
        // this.setWidgetList(widgetList);
      }
      this.dragleaveEvent(e);
    },
    clickEvent(item) {
      let { widgetList = [] } = this;
      let {
        data = {},
        name = "",
        code: type = "",
        left = 0,
        top = 0,
        alias = ""
      } = item || {};
      let id = bmCommon.uuid();
      let orders = widgetList.map(item => item.order);
      let order = Math.max(...orders);
      order += 1;
      let _item = {
        ...data,
        type,
        name,
        order,
        id,
        alias,
        left,
        top
      };
      if (alias == "linkPoint") {
        this.setLinkPoint(item);
      }
      widgetList.push(_item);
    }
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/widget.list.less";
</style>
