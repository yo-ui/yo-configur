<template>
  <div class="bm-archives-page" ref="tableBox">
    <el-tabs v-model="activeName">
      <el-tab-pane
        v-for="(item, index) in TABMAP"
        :key="index"
        :name="item.code"
        :label="$lang(item.name)"
        lazy
      >
        <bm-type-tab
          v-if="item.code == TABMAP.TYPE.code && activeName == TABMAP.TYPE.code"
        >
        </bm-type-tab>
        <bm-category-tab
          v-if="
            item.code == TABMAP.CATEGORY.code &&
              activeName == TABMAP.CATEGORY.code
          "
        >
        </bm-category-tab>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// import BmTypeTab from "@/components/archives/type-tab";
// import BmCategoryTab from "@/components/archives/category-tab";
import bmCommon from "@/common/common";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    let TABMAP = {
      TYPE: { code: "TYPE", name: "设备类型" },
      CATEGORY: { code: "CATEGORY", name: "设备分类" }
    };
    return {
      TABMAP: TABMAP,
      activeName: TABMAP.TYPE.code,
      condition: {}
    };
  },
  components: {
    BmTypeTab: () =>
      import(
        /* webpackChunkName: "bm-archives-type-tab" */ "@/components/archives/type-tab"
      ),
    BmCategoryTab: () =>
      import(
        /* webpackChunkName: "bm-archives-category-tab" */ "@/components/archives/category-tab"
      )
  },
  computed: {
    ...mapGetters({})
  },
  methods: {
    ...mapMutations({
      setDictListDataMap: "dict/setDictListDataMap"
    }),
    ...mapActions({
      dictListDataAction: "dictListData"
    }),
    init() {
      this.dictListDataFunc();
    },
    //查询字典数据列表
    dictListDataFunc(callback) {
      let that = this;
      let value = {};
      let typeList =
        "installation_way,communication_way,metering_principle,power_supply_way,point_data_type,protocol_type";
      // let key = typeList;
      that
        .dictListDataAction({ typeList })
        .then(({ data }) => {
          let { code = "", result = {} } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            value = result || {};
          }
          let keys = Object.keys(value || {});
          keys.forEach(key => {
            let item = value[key] || {};
            that.setDictListDataMap({ key, value: item });
          });
          callback && callback(value || {});
        })
        .catch(err => {
          callback && callback(value || {});
          // that.setDictListDataMap({ key, value });
          bmCommon.error("查询字典数据列表失败", err);
        });
    }
  },
  watch: {},
  mounted() {
    this.init();
  }
};
</script>

<style lang="less">
@import (less) "../../assets/less/pages/archives/archives.less";
</style>
