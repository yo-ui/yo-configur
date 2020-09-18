<template>
  <div class="bm-info-com" @mousedown.stop>
    <el-tabs v-model="activeIndex" type="card">
      <el-tab-pane
        v-for="item in tabList"
        :key="item.code"
        :label="item.name"
        :name="item.code"
      >
      </el-tab-pane>
    </el-tabs>
    <template v-if="activeIndex == 'basicStyle'">
      <!-- {{activeCom}} -->
      <component
        class="com-style" v-if="activeCom.type"
        :info="activeCom"
        :is="`${activeCom.type}StyleCom`"
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
            :class="{ active: activeComId == item.id }"
            v-for="item in widgetList"
            @click="selectComEvent(item)"
            :key="item.id"
            class="item"
          >
            {{ item.name }}--{{ item.zIndex }}--{{ item.order }}
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
import { Constants } from "@/common/env";
import { styles } from "@/widgets/index";
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
      { code: "element", name: "画布" }
    ]);
    return {
      tabList,
      comList: [],
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
    ...styles
  },
  computed: {
    ...mapGetters({
      getWidgetList: "canvas/getWidgetList",
      activeCom: "canvas/getActiveCom" //选中对象
    }),

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
      setWidgetList: "canvas/setWidgetList",
      setActiveCom: "canvas/setActiveCom"
    }),
    ...mapActions(),
    selectComEvent(item) {
      this.setActiveCom(item);
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
      this.loadComList()
    },
    loadComList() {
      let { widgetList = [] } = this;
      this.comList = bmCommon.clone(widgetList).sort((a, b) => {
        return a.order - b.order;
      });
    }
  },
  // watch: {
  //   widgetList(newVal, oldVal) {
  //     // if (newVal != oldVal) {
  //       this.loadComList();
  //     // }
  //   }
  // }
};
</script>

<style lang="less">
@import (less) "../assets/less/components/info.less";
</style>
