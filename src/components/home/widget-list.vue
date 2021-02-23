<template>
  <div class="bm-widget-list-com">
    <el-input
      v-model="condition.keywords"
      :placeholder="$lang('请输入搜索关键字')"
      size="mini"
      clearable
    ></el-input>

    <el-tabs
      v-model="activeIndex"
      tab-position="left"
      type="card"
      @tab-click="tabClickEvent"
    >
      <el-tab-pane
        v-for="(item, index) in tabWidgetList"
        :key="item.code"
        :name="item.code"
      >
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
            v-for="(_item, _index) in item.groupList"
            :key="_item.groupCode"
          >
            <ul class="com-box">
              <li
                v-for="(__item, __index) in _item.comList"
                draggable
                @mousedown.stop
                class="click"
                :key="`${_item.groupCode}_${__item.code}_${__index}`"
                @click.stop="clickEvent(__item)"
                :data-item="`${index}-groupList-${_index}-comList-${__index}`"
              >
                <!-- :data-item="JSON.stringify(__item)" -->
                <div class="cover" v-if="__item.comDisabled"></div>
                <i
                  class="bm-icon"
                  :style="
                    `background-image:url(${__item.icon ||
                      $loadImgUrl(_item.picUrl)})`
                  "
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
            :class="
              !(showEditId == _item.id && activeIndex == 'diy') ? 'click' : ''
            "
            @contextmenu.prevent="contextMenuEvent($event, _item)"
            :key="`${item.code}_${_item.code}_${_index}`"
            @click.stop="clickEvent(_item)"
            :data-item="!_item.comDisabled ? `${index}-comList-${_index}` : ''"
          >
            <!-- :data-item="!_item.comDisabled ? JSON.stringify(_item) : ''" -->
            <div class="cover" v-if="_item.comDisabled"></div>
            <i
              class="bm-icon"
              :style="
                `background-image:url(${_item.icon ||
                  $loadImgUrl(_item.picUrl)})`
              "
            ></i>
            <el-input
              v-model="_item.name"
              :placeholder="$lang('请输入组件名称')"
              size="mini"
              clearable
              @click.stop.native
              @mousedown.stop.native
              @keydown.stop.native
              @keyup.enter.native="keyupEditEvent"
              @blur="blurEditEvent"
              v-if="showEditId == _item.id && activeIndex == 'diy'"
            ></el-input>
            <template v-else>
              {{ _item.name }}
            </template>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
    <ul
      class="context-menu"
      ref="contextMenuBox"
      v-show="showContextMenuStatus"
      @mouseenter="showContenxtMenuEvent"
      @mouseleave="hideContextMenuEvent"
      :style="contextMenuStyle"
    >
      <li @click="deleteEvent">
        <span><i class="el-icon-delete"></i> {{ $lang("删除") }}</span>
      </li>
      <li @click="renameEvent">
        <span><i class="el-icon-edit"></i> {{ $lang("重命名") }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
import ComponentLibrary from "@/core/ComponentLibrary.js";
import WidgetList from "@/core/info/widget-list.js";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const Props = {
  type: [
    "text" //静态文本
  ]
};
export default {
  data() {
    // let tabList = Object.freeze(Constants.COMPONENTLIBRARY);
    let tabList = Constants.COMPONENTLIBRARY;
    return {
      activeNames: [],
      tabList,
      activeIndex: tabList[0].code,
      showEditId: "",
      operateCom: null,
      showContextMenuStatus: false,
      // shiftCtrlKeyDownStatus: false, //shit ctrl键被按下
      contextMenuStyle: {},
      condition: {
        keywords: ""
      }
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
      //widgetList: "canvas/getWidgetList"
      widgetList: [], //组件列表
      zoom: "canvas/getZoom", //放大缩小
      // draging: "canvas/getDraging", //组件拖动状态
      canvas: "canvas/getCanvas" //画布属性
    }),
    tabWidgetList() {
      let { tabList = [], condition } = this;
      let { keywords = "" } = condition;
      tabList = bmCommon.clone(tabList);
      tabList.forEach(item => {
        let { groupList = [], comList = [] } = item || {};
        let { length = 0 } = groupList || [];
        if (length > 0) {
          groupList.forEach(_item => {
            let { comList = [] } = _item || {};
            _item.comList = comList.filter(__item => {
              return __item.name.indexOf(keywords) > -1;
            });
          });
        } else {
          item.comList = comList.filter(_item => {
            return _item.name.indexOf(keywords) > -1;
          });
        }
      });
      return tabList || [];
    }
  },
  mounted() {
    this.initEvent();
  },
  methods: {
    ...mapMutations({
      setLinkPoint: "canvas/setLinkPoint", //设置连接点信息
      setDraging: "canvas/setDraging" //设置连接点信息
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      widgetCustomListAction: "widgetCustomList",
      widgetMaterialListAction: "widgetMaterialList",
      widgetCustomDelAction: "widgetCustomDel",
      widgetCustomUpdateAction: "widgetCustomUpdate",
      createHistoryAction: "canvas/createHistory"
    }),
    initEvent() {
      $(document).on("dragstart", this.dragstartEvent);
      $(document).on("dragend", this.dragendEvent);
      //增加自定义组件监听
      $vm.$on("widget-list-diy", () => {
        let { activeIndex = "", tabList = [] } = this;
        if (activeIndex == "diy") {
          this.tabClickEvent({
            name: activeIndex,
            index: tabList.findIndex(item => item.code == "diy")
          });
        }
      });
    },
    contextMenuEvent(e, item) {
      e.stopPropagation();
      e.preventDefault();
      let { ctrlKey = false } = e;
      let { activeIndex = "" } = this;
      if (ctrlKey) {
        return;
      }
      if (activeIndex != "diy") {
        return;
      }
      this.closeContenxtMenuEvent();
      this.$nextTick(() => {
        let pos = bmCommon.getMousePosition(e);
        let { x = "", y = "" } = pos || {};
        let contextMenuBox = this.$refs.contextMenuBox;
        let { offsetHeight = 0 } = contextMenuBox || {};
        let $widgetListBox = $(".bm-widget-list-com");
        // let { top = 0, left = 0 } = $widgetListBox.offset();
        // let width = $widgetListBox.width();
        let height = $widgetListBox.height();
        y = y > height - offsetHeight + 5 ? height - offsetHeight : y;
        // x = x > width - offsetWidth + 5 ? width - offsetWidth : x;
        item.oldName = item.name;
        this.operateCom = item;
        this.contextMenuStyle = {
          left: x - 5 + "px",
          top: y - 5 + "px"
        };
      });
    },
    closeContenxtMenuEvent() {
      this.showContextMenuStatus = true;
      this._showContextMenuTimeoutId = setTimeout(() => {
        clearTimeout(this._showContextMenuTimeoutId);
        this.showContextMenuStatus = false;
      }, 1000);
    },
    showContenxtMenuEvent() {
      clearTimeout(this._showContextMenuTimeoutId);
    },
    hideContextMenuEvent() {
      clearTimeout(this._showContextMenuTimeoutId);
      this.showContextMenuStatus = false;
    },
    dragendEvent(e) {
      e.stopPropagation();
      this.dragleaveEvent(e);
    },
    blurEditEvent() {
      let { operateCom = {} } = this;
      let { oldName = "" } = operateCom || {};
      bmCommon.log("blurEditEvent");
      if (oldName) {
        operateCom.name = oldName;
      }
    },
    keyupEditEvent() {
      let { operateCom = {} } = this;
      let { id = "", name = "", oldName = "" } = operateCom || {};
      bmCommon.log("keyupEditEvent");
      operateCom.oldName = "";
      this.widgetCustomUpdateFunc(
        { id, name },
        () => {
          this.showEditId = "";
          operateCom.name = name;
        },
        () => {
          operateCom.name = oldName;
        }
      );
    },
    deleteEvent() {
      let { operateCom = {}, activeIndex = "", tabList = [] } = this;
      let { id = "" } = operateCom || {};
      this.showContextMenuStatus = false;
      this.widgetCustomDelFunc({ id }, () => {
        this.tabClickEvent({
          name: activeIndex,
          index: tabList.findIndex(item => item.code == "diy")
        });
      });
    },
    renameEvent() {
      let { operateCom = {} } = this;
      let { id = "" } = operateCom || {};
      this.showContextMenuStatus = false;
      this.showEditId = id;
    },
    dragstartEvent(e) {
      e.stopPropagation();
      // e.preventDefault();
      let { tabList = [], activeIndex = "" } = this;
      let { originalEvent = {} } = e;
      let { target, dataTransfer = {} } = originalEvent;
      let item = $(target).attr("data-item");
      if (!item) {
        this.$$msgWarn("当前组件不可用");
        return;
      }
      // item = JSON.parse(item);
      bmCommon.log(item);
      let indexes = item.split("-");
      let { length = 0 } = indexes || [];
      let index = 0;
      item = tabList;
      while (index < length) {
        item = item[indexes[index]];
        // bmCommon.log(index, "--------", item);
        index++;
      }
      //如果是自定义组件则另外处理
      if (activeIndex == "diy") {
        let { content = "" } = item || {};
        let data = typeof content === "string" ? JSON.parse(content) : {};
        let { type = "" } = data || {};
        item.code = type;
        item.data = {
          ...(Constants.COMPONENTPANEL || {}).data,
          ...data
        };
      } else if (activeIndex == "material") {
        let { code = "", picUrl = "" } = item || {};
        if (code == "material-house") {
          //素材库
          item = Constants.COMPONENTLIBRARYMAP["image"];
          item.data.content = picUrl;
        }
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
      // this.setDraging(true);
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
      e?.stopPropagation();
      // e.preventDefault();
      // bmCommon.log("离开当前元素", e.target);
      // $(document).off("dragleave", this.dragleaveEvent);
      $(document).off("dragover", this.dragoverEvent);
      // $(document).off("drop", this.dropEvent);
      $(".content-box").off("drop", this.dropEvent);
      this.setDraging(false);
    },
    dropEvent(e) {
      e.preventDefault();
      // bmCommon.log("拖到目标元素", e.target);
      e.stopPropagation();
      let { widgetList = [], zoom = 1, canvas = {} } = this;
      let { originalEvent = {} } = e;
      let offset = $(".view-box").offset();
      let { dataTransfer = {} } = originalEvent;
      let data = dataTransfer.getData("data");

      bmCommon.log("data=", data);
      if (data) {
        data = Object.freeze(typeof data === "string" ? JSON.parse(data) : {});
        let id = bmCommon.uuid();
        let pos = bmCommon.getMousePosition(e);
        let { left = 0, top = 0 } = offset || {};
        let { x = 0, y = 0 } = pos || {};
        let {
          width = 0,
          height = 0,
          alias = "",
          comDisabled = false,
          children = []
        } = data || {};
        let { left: _left = 0, top: _top = 0 } = canvas || {};
        if (comDisabled) {
          this.$$msgWarn("当前组件不可用");
          return;
        }
        (children || []).forEach(item => {
          item.id = bmCommon.uuid();
          item.parentId = id;
          item.showStatus = false;
        });
        // bmCommon.log("释放当前元素", width, height, left, top, x, y);
        // left = x - left - _left - width / 2;
        // top = y - top - _top - height / 2;
        left = x / zoom - _left / zoom - left / zoom - width / 2;
        top = y / zoom - _top / zoom - top / zoom - height / 2;
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
        // if (alias == "linkPoint") {
        //   this.setLinkPoint(item);
        // }
        // widgetList.push(item);
        bmCommon.log(item);

        let _canvas_content = $("#canvas_content");
        let obj = ComponentLibrary.getInstance(item);
        let dom = obj.template();
        if (dom) {
          let _div = $(obj.template());
          _canvas_content.append(_div[0]);
        }
        window.bm_widgetMap[id] = obj;
        canvas.action = "select";
        this.createHistoryAction();
        this.$nextTick(() => {
          this.selectComAction(id);
        });
      }
      this.dragleaveEvent(e);
    },
    tabClickEvent(item) {
      bmCommon.log("tabclick", item);
      let { tabList = [] } = this;
      let { name = "", index = 0 } = item || {};
      if (name == "diy") {
        this.widgetCustomListFunc({}, (list = []) => {
          tabList[index].comList = list || [];
        });
      } else if (name == "material") {
        this.widgetMaterialListFunc({}, (list = []) => {
          (list || []).forEach(item => (item.code = "material-house"));
          tabList[index]["groupList"][2].comList = list || [];
        });
      }
    },
    clickEvent(item) {
      let { widgetList = [], canvas = {}, activeIndex = "" } = this;
      //如果是自定义组件则另外处理
      if (activeIndex == "diy") {
        let { content = "" } = item || {};
        let data = typeof content === "string" ? JSON.parse(content) : {};
        let { type = "" } = data || {};
        item.code = type;
        item.data = {
          ...(Constants.COMPONENTPANEL || {}).data,
          ...data
        };
      } else if (activeIndex == "material") {
        let { code = "", picUrl = "" } = item || {};
        if (code == "material-house") {
          //素材库
          item = Constants.COMPONENTLIBRARYMAP["image"];
          item.data.content = picUrl;
        }
      }
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
      let { children = [] } = data || {};
      (children || []).forEach(item => {
        item.id = bmCommon.uuid();
        item.parentId = id;
        item.showStatus = false;
      });
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
      // if (alias == "linkPoint") {
      //   this.setLinkPoint(item);
      // }
      // widgetList.push(_item);
      canvas.action = "select";
      let _canvas_content = $("#canvas_content");
      let obj = ComponentLibrary.getInstance(item);
      let dom = obj.template();
      if (dom) {
        let _div = $(obj.template());
        _canvas_content.append(_div[0]);
        WidgetList.append(item);
      }
      window.bm_widgetMap[id] = obj;
      this.createHistoryAction();
      this.selectComAction(id);
      // this.createRecordAction();
      // this.uploadImg();
    },
    //获取素材列表
    widgetMaterialListFunc(options, callback) {
      let value = [];
      let { condition } = this;
      this.widgetMaterialListAction(options)
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let {
              list = [],
              pageSize = Constants.PAGESIZE,
              totalNum = 0,
              pageNo = 1
            } = result || {};
            value = list || [];
            condition.pageSize = pageSize;
            condition.totalNum = totalNum;
            condition.pageNo = pageNo;
          } else {
            // this.$$msgError(message || "添附件失败");
            bmCommon.error(message || "获取自定义组件列表失败");
          }
          callback && callback(value);
        })
        .catch(err => {
          callback && callback(value);
          // this.$$msgError("添附件失败");
          bmCommon.error("获取自定义组件列表失败", err);
        });
    },
    //获取自定义组件列表
    widgetCustomListFunc(options, callback) {
      let value = [];
      let { condition } = this;
      this.widgetCustomListAction(options)
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let {
              list = [],
              pageSize = Constants.PAGESIZE,
              totalNum = 0,
              pageNo = 1
            } = result || {};
            value = list || [];
            condition.pageSize = pageSize;
            condition.totalNum = totalNum;
            condition.pageNo = pageNo;
          } else {
            // this.$$msgError(message || "添附件失败");
            bmCommon.error(message || "获取自定义组件列表失败");
          }
          callback && callback(value);
        })
        .catch(err => {
          callback && callback(value);
          // this.$$msgError("添附件失败");
          bmCommon.error("获取自定义组件列表失败", err);
        });
    },
    //删除自定义组件
    widgetCustomDelFunc(options, success, error) {
      let value = [];
      // let { condition } = this;
      this.widgetCustomDelAction(options)
        .then(({ data }) => {
          let { code = "", message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            this.$$msgSuccess("自定义组件删除成功！");
            success && success(value);
          } else {
            this.$$msgError(message || "自定义组件删除失败！");
            error && error(value);
            // bmCommon.error(message || "自定义组件删除失败");
          }
          // callback && callback(value);
        })
        .catch(err => {
          error && error(value);
          this.$$msgError("自定义组件删除失败！");
          bmCommon.error("自定义组件删除失败", err);
        });
    },
    //更新自定义组件
    widgetCustomUpdateFunc(options, success, error) {
      let value = [];
      // let { condition } = this;
      if (this._widgetCustomUpdateStatus) {
        return;
      }
      this._widgetCustomUpdateStatus = true;

      this.widgetCustomUpdateAction(options)
        .then(({ data }) => {
          let { code = "", message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            this.$$msgSuccess("自定义组件更新成功！");
            success && success(value);
          } else {
            this.$$msgError(message || "自定义组件更新失败！");
            // bmCommon.error(message || "自定义组件更新失败");
            error && error(value);
          }
          this._widgetCustomUpdateStatus = false;
        })
        .catch(err => {
          this._widgetCustomUpdateStatus = false;
          error && error(value);
          this.$$msgError("自定义组件更新失败！");
          bmCommon.error("自定义组件更新失败", err);
        });
    }
  },
  beforeDestroy() {
    $(document).off("dragstart", this.dragstartEvent);
    $(document).off("dragend", this.dragendEvent);
    this.dragleaveEvent();
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/components/home/widget.list.less";
</style>
