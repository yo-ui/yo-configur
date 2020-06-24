<template>
  <div>
    测试页
  </div>
</template>
// <script>
// // import DynamicGrid from "../components/DynamicGrid.vue";
// // import "../assets/js/jquery.pagination.js";
// // import Source from "../data/source.js";
// // import ExcelUtils from "../assets/js/ExcelUtils.js";
// import RouterURL from "@/router/routers.conf";
// export default {
//   data() {
//     return {};
//   },
//   template: "",
//   methods: {
//     // exportExcel: function() {
//     //   let table = ExcelUtils.createTable("table", "表格");
//     //   console.log(table);
//     //   let data = {};
//     //   data.table = JSON.stringify(table);
//     //   this.remoteObject.proxy("common/createExcel", "post", data, function(
//     //     msg
//     //   ) {
//     //     let result = JSON.parse(msg);
//     //     if (result.success) {
//     //       ExcelUtils.download(result.message);
//     //     }
//     //   });
//     // }
//   },
//   mounted() {
//     let that = this;
//     let menuList = that.$store.getters.getAccountMenuList || [];
//     let menu =
//       menuList &&
//       menuList.find(item => {
//         return item.active;
//       });
//     let routeName = RouterURL.index.name;
//     if (menu) {
//       routeName = menu.url;
//     }
//     that.$jumpPage(routeName);
//   }
// };
// </script>
