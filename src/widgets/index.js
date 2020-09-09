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
  videoCom: () =>
    import(
      /* webpackChunkName: "bm-component-video" */ "@/components/component/basic/video/index.vue"
    ),
  lineChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-lineChart" */ "@/components/component/basic/lineChart/index.vue"
    ),
  barChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-barChart" */ "@/components/component/basic/barChart/index.vue"
    ),
  pieChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-pieChart" */ "@/components/component/basic/pieChart/index.vue"
    ),
  mapCom: () =>
    import(
      /* webpackChunkName: "bm-component-map" */ "@/components/component/basic/map/index.vue"
    ),
  gaugeChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-gaugeChart" */ "@/components/component/basic/gaugeChart/index.vue"
    ),
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
  videoStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-video-style" */ "@/components/component/basic/video/style.vue"
    ),
  lineChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-lineChart-style" */ "@/components/component/basic/lineChart/style.vue"
    ),
  mapStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-map-style" */ "@/components/component/basic/map/style.vue"
    ),
  pieChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-pieChart-style" */ "@/components/component/basic/pieChart/style.vue"
    ),
  barChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-barChart-style" */ "@/components/component/basic/barChart/style.vue"
    ),
  gaugeChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-gaugeChart-style" */ "@/components/component/basic/gaugeChart/style.vue"
    ),
};

export { widgets, styles };
