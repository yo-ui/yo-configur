<template>
  <div class="bm-info-com" @mousedown.stop @keydown.stop>
    <el-tabs v-model="activeIndex" type="card">
      <template v-for="item in tabList">
        <el-tab-pane
          v-if="
            (item.code == 'dataBind' && activeCom.type != 'canvas') ||
              item.code != 'dataBind'
          "
          :key="item.code"
          :label="item.name"
          :name="item.code"
        >
        </el-tab-pane>
      </template>
    </el-tabs>
    <component
      v-show="activeIndex == 'basicStyle'"
      class="com-style"
      v-if="activeCom.type"
      :info="activeCom"
      :is="styleCom"
    ></component>
    <keep-alive>
      <component
        v-show="activeIndex == 'dataBind'"
        class="com-style com-data"
        v-if="activeCom.type && activeCom.type != 'canvas'"
        :info="activeCom"
        :is="`${activeCom.dataCode || 'common'}DataCom`"
      ></component>
    </keep-alive>
    <h3 class="com-count" id="info_com_count" v-show="activeIndex == 'element'">
      <!-- {{ $lang("当前组件数量") }}
      <span class="count" :class="{ red: widgetList.length > 200 }">{{
        widgetList.length
      }}</span> -->
    </h3>
    <ul id="info_com_list_box" class="com-list-box" v-show="activeIndex == 'element'">
    </ul>
    <!-- <ul class="com-list-box" v-show="activeIndex == 'element'">
      <li
        v-for="(item, index) in widgetList"
        @click.stop="selectComEvent(item)"
        :key="item.id + index"
        class="item"
      >
        <div class="title" :class="{ active: activeComId == item.id }">
          {{ item.comName || "组合" }}
          <span class="red">{{ item.show ? "已显示" : "已隐藏" }}</span>
          <span class="count" v-if="item.type == 'panel'">
            子组件数: {{ item.children.length }}
          </span>
          <span class="right">
            <el-tooltip :content="$lang('删除')" placement="top" effect="dark">
              <i class="el-icon-delete" @click.stop="deleteEvent(item)"></i>
            </el-tooltip>
            <el-tooltip
              :content="$lang('隐藏/显示')"
              placement="top"
              effect="dark"
            >
              <i class="el-icon-view" @click.stop="showEvent(item)"></i>
            </el-tooltip>
            <template v-if="item.children && item.children.length > 0">
              <i
                :class="
                  `
                    ${
                      { true: 'el-icon-plus', false: 'el-icon-minus' }[
                        !widgetMap[item.id]
                      ]
                    }
                  `
                "
                @click.stop="showChildEvent(item)"
              ></i>
            </template>
            <el-tooltip
              v-else
              :content="$lang('添加绑定')"
              placement="top"
              effect="dark"
            >
              <i
                v-if="item.dataType"
                class="el-icon-link"
                @click.stop="addEvent(item)"
                :class="{ active: item.bindData && item.bindData.orgId }"
              ></i> </el-tooltip
          ></span>
        </div>
        <ul
          v-if="item.children && item.children.length > 0"
          v-show="!!widgetMap[item.id]"
        >
          <li
            :class="{ active: activeComId == _item.id }"
            v-for="(_item, _index) in item.children"
            @click.stop="selectComEvent(_item)"
            :key="_item.id + _index"
            class="item"
          >
            <div class="title" :class="{ active: activeComId == _item.id }">
              {{ _item.name }}
              <span class="right">
                <el-tooltip
                  :content="$lang('删除')"
                  placement="top"
                  effect="dark"
                >
                  <i class="el-icon-delete" @click.stop="deleteEvent(item)"></i>
                </el-tooltip>
                <el-tooltip
                  :content="$lang('添加绑定')"
                  placement="top"
                  effect="dark"
                >
                  <i
                    v-if="_item.dataType"
                    class="el-icon-link"
                    @click.stop="addEvent(_item)"
                    :class="{
                      active: _item.bindData && _item.bindData.orgId
                    }"
                  ></i>
                </el-tooltip>
              </span>
            </div>
          </li>
        </ul>
      </li>
    </ul> -->
  </div>
</template>

<script>
import bmCommon from "@/common/common";
import WidgetList from "@/components/info/widget-list";
// import { Constants } from "@/common/env";
import { styles, datas } from "@/widgets/index";
// import draggable from "vuedraggable";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const Props = {
  type: [
    "text" //静态文本
  ]
};

// const watches = {};
// for (let i in Constants.BASEDATA) {
//   if (i != "id") {
//     let key = `activeCom.${i}`;
//     watches[key] = {
//       handler(newVal, oldVal) {
//         let { activeCom = {} } = this;
//         let { parentId = "" } = activeCom || {};
//         let { activeComs = [], moving = false, selectBox = {} } = this;
//         let { moving: _moving = false } = selectBox || {};
//         let { length = 0 } = activeComs || [];
//         if (!(moving || _moving || parentId)) {
//           if (length > 1) {
//             activeComs.forEach(item => {
//               item[i] = newVal;
//             });
//           }
//         }
//       },
//       deep: true
//     };
//   }
// }
export default {
  data() {
    let tabList = Object.freeze([
      { code: "basicStyle", name: "基本样式" },
      { code: "dataBind", name: "数据绑定" },
      { code: "element", name: "画布" }
    ]);
    return {
      tabList,
      widgetMap: {},
      // widgetList: [],
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
  components: {
    // draggable,
    ...styles,
    ...datas
  },
  computed: {
    ...mapGetters({
      //widgetList: "canvas/getWidgetList"
      widgetList: [],
      getActiveCom: "canvas/getActiveCom", //选中对象
      selectBox: "canvas/getSelectBox", //选取框
      activeCom: "canvas/getActiveCom", //选中对象
      moving: "canvas/getMoving", //组件是否移动
      activeComs: "canvas/getActiveComs" //选中多选对象
    }),
    // activeCom() {
    //   let { activeComs = [], getActiveCom = {} } = this;
    //   let { length = 0 } = activeComs || [];
    //   if (length > 1) {
    //     let [activeCom = {}] = activeComs || [];
    //     return activeCom || {};
    //   }
    //   return getActiveCom || {};
    // },
    styleCom() {
      let { activeComs = [], activeCom = {} } = this;
      let { type = "", styleCode = "" } = activeCom || {};
      let { length = 0 } = activeComs || [];
      let com = ""; //`${type}StyleCom`;
      type = styleCode || type;
      if (length > 1) {
        let set = new Set();
        activeComs.forEach(item => {
          let { type = "", styleCode = "" } = item || {};
          type = styleCode || type;
          set.add(type);
        });
        let { size = 0 } = set || {};
        if (size > 0) {
          if (size == 1 && !set.has("")) {
            [type = ""] = Array.from(set);
            // com = `${type}StyleCom`;
          }
          //  else {
          //   type = "group";
          // }
        }
      }
      // else {
      //   let set = new Set();
      //   children.forEach(item => {
      //     let { type = "", styleCode = "" } = item || {};
      //     type = styleCode || type;
      //     set.add(type);
      //   });
      //   let { size = 0 } = set || {};
      //   if (size > 0) {
      //     if (size == 1 && !set.has("")) {
      //       [type = ""] = Array.from(set);
      //       // com = `${type}StyleCom`;
      //     } else {
      //       type = "group";
      //     }
      //   }
      // }
      com = `${type}StyleCom`;
      bmCommon.log("panel==>", com);
      return com;
      // return `${
      //   activeComs && length > 1
      //     ? "group"
      //     : activeCom.styleCode || activeCom.type
      // }StyleCom`;
    },
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    },
    // comList: {
    //   get(){
    //     let { getWidgetList = [] } = this;
    //     return bmCommon.clone(getWidgetList).sort((a, b) => {
    //       return a.order - b.order;
    //     });
    //   },
    //   set(val){
    //     this.comList
    //   }
    // },
    // widgetList: {
    //   get() {
    //     let { getWidgetList = [] } = this;
    //     return bmCommon.clone(getWidgetList).sort((a, b) => {
    //       return a.order - b.order;
    //     });
    //   },
    //   set(value) {
    //     this.setWidgetList(value);
    //   }
    // },
    activeComId() {
      let { activeCom = {} } = this;
      let { id = "" } = activeCom || {};
      return id;
    }
  },
  mounted() {
    this.init();
    bmCommon.log("info style 初始化");
  },
  updated() {
    bmCommon.log("info style update");
    // vm.$watch("someObject", callback, {
    //   deep: true
    // });
    this.initWatches();
  },
  methods: {
    ...mapMutations({
      // setWidgetList: "canvas/setWidgetList"
      // setActiveCom: "canvas/setActiveCom",
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      selectComsAction: "canvas/selectComs"
    }),
    initWatches() {
      let { activeCom = {} } = this;
      // for (let i in Constants.BASEDATA) {
      let { id = "" } = activeCom || {};
      for (let i in activeCom) {
        if (i != "id") {
          let key = `activeCom.${i}`;
          // bmCommon.log(key, this);
          this.$watch(
            key,
            (newVal, oldVal) => {
              // let { activeCom = {} } = this;
              // let { children = [] } = getActiveCom || {};
              let { parentId = "" } = activeCom || {};
              let { activeComs = [], moving = false, selectBox = {} } = this;
              let { moving: _moving = false } = selectBox || {};
              let { length = 0 } = activeComs || [];
              if (!(moving || _moving || parentId)) {
                if (length > 1) {
                  activeComs
                    .filter(item => item.id != id)
                    .forEach(item => {
                      item[i] = newVal;
                    });
                }
              }
              //  else {
              //   if (newVal !== oldVal) {
              //     children.forEach(item => {
              //       item[i] = newVal;
              //     });
              //   }
              // }
            },
            {
              deep: true,
              immediate: false
            }
          );
        }
      }
    },
    selectComEvent(item) {
      // this.setActiveCom(item);
      this.selectComsAction();
      let { id = "" } = item || {};
      this.selectComAction(id);
    },
    deleteEvent(item) {
      this.selectComEvent(item);
      $vm.$emit("delete-command");
    },
    showEvent(obj) {
      let { getWidgetList = [] } = this;
      let item = getWidgetList.find(item => item.id == obj.id);
      item.show = !item.show;
    },
    changeEvent(item) {
      // bmCommon.log(item);
      let { moved } = item || {};
      if (moved) {
        let { widgetList = [] } = this;
        let { newIndex = 0, oldIndex = 0 } = moved || {};
        let newItem = widgetList[newIndex] || {};
        let oldItem = widgetList[oldIndex] || {};
        let { order: oldOrder } = oldItem || {};
        let { order: newOrder } = newItem || {};
        newItem.order = oldOrder;
        oldItem.order = newOrder;
      }
    },
    init() {
      // this.loadComList();
      this.initWatches();
      $vm.$on("info-data-init", (item={}) => {
        this.dataInit(item);
      });
    },
    dataInit(item) {
      new WidgetList("#info_com_list_box",item)
    },
    showChildEvent(item) {
      // bmCommon.log()
      let { id = "" } = item || {};
      let { widgetMap = {} } = this;
      this.$set(widgetMap, id, !widgetMap[id]);
      // bmCommon.log(widgetMap);
    },
    // loadComList() {
    //   let { widgetList = [] } = this;
    //   this.comList = bmCommon.clone(widgetList).sort((a, b) => {
    //     return b.order - a.order;
    //   });
    // },
    addEvent(item = {}) {
      $vm.$emit("bind-device", item);
    }
  },
  watch: {
    "activeCom.type"(newVal, oldVal) {
      if (newVal != oldVal) {
        if (newVal == "canvas") {
          let { tabList = [] } = this;
          this.activeIndex = tabList[0].code;
        }
      }
    }
    // ...watches
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/info.less";
</style>
