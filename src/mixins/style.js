import bmCommon from "@/common/common";

export default {
  methods: {},
  watch: {
    info: {
      handler: (newVal, oldVal) => {
        // let { info = {} } = this;
        bmCommon.log(
          "刷新 处理",
          JSON.stringify(newVal.bindData),
          JSON.stringify(oldVal.bindData)
          // type
        );
        // if (
        //   JSON.stringify(newVal) !== JSON.stringify(oldVal) &&
        // ) {
        let { id = "" } = newVal || {};
        let obj = window.bm_widgetMap[id];
        if (obj) {
          // obj?.setInfo({ ...activeCom });
          obj?.setInfo(Object.freeze({ ...newVal }));
          obj?.refresh();
          // if (i === "bindData") {
          obj?.loadData();
          // }
        }
        // }
      },
      deep: true
    }
  }
};

// export { move }
