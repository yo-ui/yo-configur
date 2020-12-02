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
    <template v-if="activeIndex == 'basicStyle'">
      <!-- {{activeCom}} -->
      <component
        class="com-style"
        v-if="activeCom.type"
        :info="activeCom"
        :is="styleCom"
      ></component>
    </template>
    <template v-if="activeIndex == 'dataBind'">
      <!-- {{activeCom}} -->
      <component
        class="com-style com-data"
        v-if="activeCom.type"
        :info="activeCom"
        :is="`${activeCom.dataCode || 'common'}DataCom`"
      ></component>
    </template>
    <template v-if="activeIndex == 'element'">
      <!-- <ul class="com-box"> -->
      <draggable
        v-model="widgetList"
        class="com-list-box"
        v-bind="dragOptions"
        @change="changeEvent"
        tag="ul"
      >
        <transition-group type="transition" name="flip-list">
          <li
            v-for="item in widgetList"
            @click.stop="selectComEvent(item)"
            :key="item.id"
            class="item"
          >
            <div class="title" :class="{ active: activeComId == item.id }">
              {{ item.name }}
              <!-- --{{ item.zIndex }}--{{ item.order }} -->
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
                ></i>
              </el-tooltip>
            </div>
            <ul
              v-if="item.children && item.children.length > 0"
              v-show="!!widgetMap[item.id]"
            >
              <li
                :class="{ active: activeComId == _item.id }"
                v-for="_item in item.children"
                @click.stop="selectComEvent(_item)"
                :key="_item.id"
                class="item"
              >
                <div class="title" :class="{ active: activeComId == _item.id }">
                  {{ _item.name }}
                  <!-- --{{ item.zIndex }}--{{ item.order }} -->
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
                </div>
              </li>
            </ul>
          </li>
        </transition-group>
        <!-- <button slot="footer" @click="addPeople">Add</button> -->
      </draggable>
      <!-- </ul> -->
      <!-- <ul class="com-box">
        <li
          :class="{ active: activeComId == item.id }"
          v-for="item in widgetList"
          @click="selectComEvent(item)"
          :key="item.id"
        >
          {{ item.type }}
        </li>
      </ul> -->
    </template>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// import { Constants } from "@/common/env";
import { styles, datas } from "@/widgets/index";
import draggable from "vuedraggable";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
const Props = {
  type: [
    "text" //静态文本
  ]
};
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
    draggable,
    ...styles,
    ...datas
  },
  computed: {
    ...mapGetters({
      getWidgetList: "canvas/getWidgetList",
      activeCom: "canvas/getActiveCom", //选中对象
      activeComs: "canvas/getActiveComs" //选中多选对象
    }),
    styleCom() {
      let { activeComs = [], activeCom = {} } = this;
      let { type = "", children = [], styleCode = "" } = activeCom || {};
      let { length = 0 } = activeComs || [];
      let com = ""; //`${type}StyleCom`;
      type = styleCode || type;
      if (length > 1) {
        let set = new Set();
        activeComs.forEach(item => {
          let { type = "" } = item || {};
          set.add(type);
        });
        let { size = 0 } = set || {};
        if (size > 0) {
          if (size == 1 && !set.has("")) {
            [type = ""] = Array.from(set);
            // com = `${type}StyleCom`;
          } else {
            type = "group";
          }
        }
      } else {
        let set = new Set();
        children.forEach(item => {
          let { type = "" } = item || {};
          set.add(type);
        });
        let { size = 0 } = set || {};
        if (size > 0) {
          if (size == 1 && !set.has("")) {
            [type = ""] = Array.from(set);
            // com = `${type}StyleCom`;
          } else {
            type = "group";
          }
        }
      }
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
    widgetList: {
      get() {
        let { getWidgetList = [] } = this;
        return bmCommon.clone(getWidgetList).sort((a, b) => {
          return a.order - b.order;
        });
      },
      set(value) {
        this.setWidgetList(value);
      }
    },
    activeComId() {
      let { activeCom = {} } = this;
      let { id = "" } = activeCom || {};
      return id;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations({
      setWidgetList: "canvas/setWidgetList"
      // setActiveCom: "canvas/setActiveCom",
    }),
    ...mapActions({
      selectComAction: "canvas/selectCom",
      selectComsAction: "canvas/selectComs"
    }),
    selectComEvent(item) {
      // this.setActiveCom(item);
      this.selectComsAction();
      let { id = "" } = item || {};
      this.selectComAction(id);
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
  }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/info.less";
</style>
