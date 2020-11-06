<template>
  <div class="bm-widget-list-com">
    <el-tabs v-model="activeIndex" tab-position="left" type="card">
      <el-tab-pane v-for="item in tabList" :key="item.code" :name="item.code">
        <template #label>
          <i :class="item.icon"></i>
          <p>{{ item.name }}</p>
        </template>
        <el-collapse
          v-model="item.activeNames"
          v-if="item.groupList && item.groupList.length > 0"
        >
          <el-collapse-item
            :title="_item.groupName"
            :name="_item.groupCode"
            v-for="_item in item.groupList"
            :key="_item.groupCode"
          >
            <ul class="com-box">
              <li
                v-for="(__item, __index) in _item.comList"
                draggable
                @mousedown.stop
                :key="`${_item.code}_${__item.groupCode}_${__index}`"
                @click.stop="clickEvent(__item)"
                :data-item="JSON.stringify(__item)"
              >
                <div class="cover" v-if="__item.comDisabled"></div>
                <i
                  class="bm-icon"
                  :style="`background-image:url(${__item.icon})`"
                ></i>
                {{ __item.name }}
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
        <ul class="com-box" v-else>
          <li
            v-for="(_item, _index) in item.comList"
            :draggable="!_item.comDisabled"
            @mousedown.stop
            :key="`${item.code}_${_index}`"
            @click.stop="clickEvent(_item)"
            :data-item="!_item.comDisabled ? JSON.stringify(_item) : ''"
          >
            <div class="cover" v-if="_item.comDisabled"></div>
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
      activeNames: [],
      tabList,
      activeIndex: tabList[0].code
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
      widgetList: "canvas/getWidgetList", //组件列表
      zoom: "canvas/getZoom", //放大缩小
      canvas: "canvas/getCanvas" //画布属性
    })
  },
  mounted() {
    this.initEvent();
  },
  methods: {
    ...mapMutations({
      // setWidgetList: "canvas/setWidgetList", //设置组件列表
      setLinkPoint: "canvas/setLinkPoint" //设置连接点信息
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      // upload2OssAction: "upload2Oss",
      createHistoryAction: "canvas/createHistory"
      // createRecordAction: "canvas/createRecord"
    }),
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
      let {
        data = {},
        name = "",
        code: type = "",
        alias = "",
        comDisabled = false
      } = item || {};
      // bmCommon.log("开始拖动元素", target, data);
      if (comDisabled) {
        this.$$msgWarn("当前组件不可用");
        return;
      }
      dataTransfer.setData(
        "data",
        JSON.stringify({ ...data, type, name, alias, comDisabled })
      );
      this.dragenterEvent(e);
    },
    dragenterEvent(e) {
      // e.stopPropagation();
      // e.preventDefault();
      // bmCommon.log("进入目标元素", e.target);
      $(document).on("dragover", this.dragoverEvent);
      // $(document).on("dragleave", this.dragleaveEvent);
      // $(document).on("drop", this.dropEvent);
      $(".content-box").on("drop", this.dropEvent);
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
      // $(document).off("drop", this.dropEvent);
      $(".content-box").off("drop", this.dropEvent);
    },
    dropEvent(e) {
      e.preventDefault();
      // bmCommon.log("拖到目标元素", e.target);
      e.stopPropagation();
      let { widgetList = [], zoom = 1 } = this;
      let { originalEvent = {} } = e;
      let offset = $(".view-box").offset();
      let { dataTransfer = {} } = originalEvent;
      let data = dataTransfer.getData("data");
      // let target = originalEvent.target;
      if (
        data
        // &&
        // ($(target).hasClass("canvas-box") ||
        //   $(target)
        //     .parent()
        //     .hasClass("canvas-box"))
      ) {
        data = typeof data === "string" ? JSON.parse(data) : {};
        let id = bmCommon.uuid();
        let pos = bmCommon.getMousePosition(e);
        let { left = 0, top = 0 } = offset || {};
        let { x = 0, y = 0 } = pos || {};
        let { width = 0, height = 0, alias = "", comDisabled = false } =
          data || {};
        // let { left: _left = 0, top: _top = 0 } = canvas || {};
        if (comDisabled) {
          this.$$msgWarn("当前组件不可用");
          return;
        }
        // bmCommon.log("释放当前元素", width, height, left, top, x, y);
        // left = x - left - _left - width / 2;
        // top = y - top - _top - height / 2;
        left = x / zoom - left / zoom - width / 2;
        top = y / zoom - top / zoom - height / 2;
        let orders = widgetList.map(item => item.order);
        let order = 1;
        if (orders && orders.length > 0) {
          order = Math.max(...orders);
          order += 1;
        }
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
        this.createHistoryAction();
        this.$nextTick(() => {
          this.selectComAction(id);
        });
        // this.createRecordAction();
        // this.uploadImg();
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
        comDisabled = false,
        alias = ""
      } = item || {};
      if (comDisabled) {
        this.$$msgWarn("当前组件不可用");
        return;
      }
      let id = bmCommon.uuid();
      let orders = widgetList.map(item => item.order);
      let order = 1;
      if (orders && orders.length > 0) {
        order = Math.max(...orders);
        order += 1;
      }
      let _item = {
        ...data,
        type,
        name,
        order,
        comDisabled,
        id,
        alias,
        left,
        top
      };
      if (alias == "linkPoint") {
        this.setLinkPoint(item);
      }
      widgetList.push(_item);
      this.createHistoryAction();
      this.selectComAction(id);
      // this.createRecordAction();
      // this.uploadImg();
    }
    // //上传图片
    // upload2OssFunc(options, callback) {
    //   let value = "";
    //   if (this._upload2OssStatus) {
    //     return;
    //   }
    //   this._upload2OssStatus = true;
    //   this.upload2OssAction(options)
    //     .then(({ data }) => {
    //       let { code = "", result = [], message = "" } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         let [fileName = ""] = result || [];
    //         // this.$$msgSuccess("添附件成功");
    //         value = fileName;
    //       } else {
    //         // this.$$msgError(message || "添附件失败");
    //         bmCommon.error(message || "图片上传失败");
    //       }
    //       callback && callback(value);
    //       this._upload2OssStatus = false;
    //     })
    //     .catch(err => {
    //       callback && callback(value);
    //       // this.$$msgError("添附件失败");
    //       this._upload2OssStatus = false;
    //       bmCommon.error("图片上传失败", err);
    //     });
    // }
  },
  beforeDestroy() {
    $(document).off("dragstart", this.dragstartEvent);
    $(document).off("dragover", this.dragoverEvent);
    $(".content-box").off("drop", this.dropEvent);
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/widget.list.less";
</style>
