<template>
  <div class="bm-info-com" @mousedown.stop @keydown.stop>
    <el-tabs v-model="activeIndex" type="card" @tab-click="tabClickEvent">
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
    <!-- {{ activeCom.type }}--{{ activeIndex }}--{{ styleCom }} -->
    <keep-alive>
      <component
        v-show="activeIndex == 'basicStyle'"
        class="com-style"
        v-if="activeCom.type"
        :info="activeCom"
        :is="styleCom"
      ></component>
    </keep-alive>
    <keep-alive>
      <component
        v-show="activeIndex == 'dataBind'"
        v-if="activeCom.type && activeCom.type != 'canvas'"
        class="com-style com-data"
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
    <ul
      id="info_com_list_box"
      class="com-list-box"
      v-show="activeIndex == 'element'"
    ></ul>
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
// import { Constants } from "@/common/env";
import { styles, datas } from "@/widgets/index";
import WidgetList from "@/core/info/widget-list";
const { mapActions, mapMutations, mapGetters } = Vuex;
// const Props = {
//   type: [
//     "text" //静态文本
//   ]
// };

const watches = {};
export default {
  data() {
    let tabList = Object.freeze([
      { code: "basicStyle", name: "基本样式" },
      { code: "dataBind", name: "数据绑定" },
      { code: "element", name: "画布" }
    ]);
    return {
      tabList,
      // activeCom: { ...Constants.COMPONENTCANVAS },
      // widgetMap: {},
      // widgetList: [],
      activeIndex: tabList[0].code
    };
  },
  props: {
    type: {
      type: String
      // validator(value) {
      //   return Props.type.indexOf(value) != -1;
      // }
    }
  },
  components: {
    // draggable,
    ...styles,
    ...datas
  },
  computed: {
    ...mapGetters({
      activeCom: "canvas/getActiveCom" //选中对象
    }),
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
      com = `${type}StyleCom`;
      // bmCommon.log("panel==>", com);
      return com;
    }
  },
  mounted() {
    this.init();
  },
  created() {},
  updated() {
    this.initWatches();
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    tabClickEvent() {
      let { activeIndex } = this;
      if (activeIndex === "element") {
        let id = window.bm_active_com_id;
        if (id) {
          WidgetList.active(id);
        }
      }
    },

    initWatch(name, item) {
      let { type = "" } = item || {};
      for (let i in item) {
        if (
          (name == "activeCom" && i !== "type" && i != "id") ||
          name != "activeCom"
        ) {
          let key = `${name}.${i}`;
          if (watches[key]) {
            watches[key]();
            this.setTimeoutId = setTimeout(() => {
              clearTimeout(this.setTimeoutId);
              // bmCommon.log("unWatches", key);
            }, 1);
          }
          if (type === "canvas") {
            continue;
          }
          let value = item[i];
          if (typeof value === "object" && !Array.isArray(value)) {
            this.initWatch(`${name}.${i}`, value);
          }
          this.setTimeoutId = setTimeout(() => {
            clearTimeout(this.setTimeoutId);
            // bmCommon.log(
            //   "watches",
            //   key,
            //   typeof value,
            //   typeof value === "object" && !Array.isArray(value)
            // );
          }, 1);
          watches[key] = this.$watch(
            key,
            (newVal, oldVal) => {
              // let { children = [] } = getActiveCom || {};
              // let { parentId = "", id = "" } = activeCom || {};
              let { activeCom = {} } = this;
              if (
                JSON.stringify(newVal) !== JSON.stringify(oldVal) ||
                Array.isArray(value)
              ) {
                this.setTimeoutId = setTimeout(() => {
                  clearTimeout(this.setTimeoutId);
                  // bmCommon.log(
                  //   "刷新 处理",
                  //   JSON.stringify(newVal) === JSON.stringify(oldVal),
                  //   i,
                  //   name,
                  //   _lastWatchType,
                  //   type
                  // );
                }, 1);
                let { id = "" } = activeCom || {};
                let obj = window.bm_widgetMap[id];
                if (obj) {
                  // obj?.setInfo({ ...activeCom });
                  obj?.setInfo(Object.freeze({ ...activeCom }));
                  obj?.refresh();
                  if (i === "bindData") {
                    if (obj.loadData) {
                      obj?.loadData();
                    }
                  }
                }
              }
            },
            {
              deep: true,
              immediate: false
            }
          );
        }
      }
    },
    initWatches() {
      let { activeCom = {} } = this;
      this.initWatch("activeCom", activeCom);
    },
    init() {
      this.setTimeoutId = setTimeout(() => {
        this.initWatches();
      }, 1);
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
