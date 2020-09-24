let widgets = {
  textCom: () =>
    import(
      /* webpackChunkName: "bm-component-text" */ "@/components/component/basic/text/index.vue"
    ),
  dynamicTextCom: () =>
    import(
      /* webpackChunkName: "bm-component-dynamicText" */ "@/components/component/basic/dynamicText/index.vue"
    ),
  buttonCom: () =>
    import(
      /* webpackChunkName: "bm-component-button" */ "@/components/component/basic/button/index.vue"
    ),
  imageCom: () =>
    import(
      /* webpackChunkName: "bm-component-image" */ "@/components/component/basic/image/index.vue"
    ),
  displayCom: () =>
    import(
      /* webpackChunkName: "bm-component-display" */ "@/components/component/basic/display/index.vue"
    ),
  blockCom: () =>
    import(
      /* webpackChunkName: "bm-component-block" */ "@/components/component/basic/block/index.vue"
    ),
  tableCom: () =>
    import(
      /* webpackChunkName: "bm-component-table" */ "@/components/component/basic/table/index.vue"
    ),
  vScrollTextCom: () =>
    import(
      /* webpackChunkName: "bm-component-vScrollText" */ "@/components/component/basic/vScrollText/index.vue"
    ),
  richTextCom: () =>
    import(
      /* webpackChunkName: "bm-component-richText" */ "@/components/component/basic/richText/index.vue"
    ),

  videoCom: () =>
    import(
      /* webpackChunkName: "bm-component-video" */ "@/components/component/com/video/index.vue"
    ),
  lineChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-lineChart" */ "@/components/component/com/lineChart/index.vue"
    ),
  barChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-barChart" */ "@/components/component/com/barChart/index.vue"
    ),
  pieChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-pieChart" */ "@/components/component/com/pieChart/index.vue"
    ),
  mapCom: () =>
    import(
      /* webpackChunkName: "bm-component-map" */ "@/components/component/com/map/index.vue"
    ),
  gaugeChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-gaugeChart" */ "@/components/component/com/gaugeChart/index.vue"
    ),
  deviceCommonCom: () =>
    import(
      /* webpackChunkName: "bm-component-device" */ "@/components/component/device/common/index.vue"
    ),
  assistCommonCom: () =>
    import(
      /* webpackChunkName: "bm-component-assist" */ "@/components/component/assist/common/index.vue"
    )
};
let styles = {
  canvasStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-canvas-style" */ "@/components/component/canvas-style.vue"
    ),
  textStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-text-style" */ "@/components/component/basic/text/style.vue"
    ),
  dynamicTextStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-dynamicText-style" */ "@/components/component/basic/dynamicText/style.vue"
    ),
  buttonStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-button-style" */ "@/components/component/basic/button/style.vue"
    ),
  imageStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-image-style" */ "@/components/component/basic/image/style.vue"
    ),
  displayStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-display-style" */ "@/components/component/basic/display/style.vue"
    ),
  blockStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-block-style" */ "@/components/component/basic/block/style.vue"
    ),
  tableStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-table-style" */ "@/components/component/basic/table/style.vue"
    ),
  vScrollTextStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-vScrollText-style" */ "@/components/component/basic/vScrollText/style.vue"
    ),
  richTextStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-richText-style" */ "@/components/component/basic/richText/style.vue"
    ),

  videoStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-video-style" */ "@/components/component/com/video/style.vue"
    ),
  lineChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-lineChart-style" */ "@/components/component/com/lineChart/style.vue"
    ),
  mapStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-map-style" */ "@/components/component/com/map/style.vue"
    ),
  pieChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-pieChart-style" */ "@/components/component/com/pieChart/style.vue"
    ),
  barChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-barChart-style" */ "@/components/component/com/barChart/style.vue"
    ),
  gaugeChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-gaugeChart-style" */ "@/components/component/com/gaugeChart/style.vue"
    ),
  deviceCommonStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-style" */ "@/components/component/device/common/style.vue"
    ),
  assistCommonStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-assist-style" */ "@/components/component/assist/common/style.vue"
    )
};

export { widgets, styles };
