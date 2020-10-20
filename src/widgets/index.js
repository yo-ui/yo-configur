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
  scoreBoardCom: () =>
    import(
      /* webpackChunkName: "bm-component-scoreBoard" */ "@/components/component/basic/scoreBoard/index.vue"
    ),
  timeTextCom: () =>
    import(
      /* webpackChunkName: "bm-component-timeText" */ "@/components/component/basic/timeText/index.vue"
    ),
  countdownTextCom: () =>
    import(
      /* webpackChunkName: "bm-component-countdownText" */ "@/components/component/basic/countdownText/index.vue"
    ),
  videoCom: () =>
    import(
      /* webpackChunkName: "bm-component-video" */ "@/components/component/basic/video/index.vue"
    ),
  hlsVideoCom: () =>
    import(
      /* webpackChunkName: "bm-component-hls-video" */ "@/components/component/basic/hlsVideo/index.vue"
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
  deviceDbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-db" */ "@/components/component/device/db/index.vue"
    ),
  materialCommonCom: () =>
    import(
      /* webpackChunkName: "bm-component-material" */ "@/components/component/material/common/index.vue"
    ),
  materialRectangleCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-rectangle" */ "@/components/component/material/rectangle/index.vue"
    ),
  materialCircleCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-circle" */ "@/components/component/material/circle/index.vue"
    ),
  materialArrowCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-arrow" */ "@/components/component/material/arrow/index.vue"
    ),
  materialStarCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-star" */ "@/components/component/material/star/index.vue"
    ),
  materialPolygonCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-polygon" */ "@/components/component/material/polygon/index.vue"
    ),
  materialEmbellish1Com: () =>
    import(
      /* webpackChunkName: "bm-component-material-embellish1" */ "@/components/component/material/embellish1/index.vue"
    ),
  materialEmbellish2Com: () =>
    import(
      /* webpackChunkName: "bm-component-material-embellish2" */ "@/components/component/material/embellish2/index.vue"
    ),
  materialQuadrangleCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-quadrangle" */ "@/components/component/material/quadrangle/index.vue"
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
  scoreBoardStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-scoreBoard-style" */ "@/components/component/basic/scoreBoard/style.vue"
    ),
  timeTextStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-timeText-style" */ "@/components/component/basic/timeText/style.vue"
    ),
  countdownTextStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-countdownText-style" */ "@/components/component/basic/countdownText/style.vue"
    ),
  videoStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-video-style" */ "@/components/component/basic/video/style.vue"
    ),
  hlsVideoStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-hls-video-style" */ "@/components/component/basic/hlsVideo/style.vue"
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
  deviceDbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-db-style" */ "@/components/component/device/db/style.vue"
    ),
  materialCommonStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-common-style" */ "@/components/component/material/common/style.vue"
    ),
  materialStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-style" */ "@/components/component/material/style.vue"
    ),
  materialRectangleStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-rectangle-style" */ "@/components/component/material/rectangle/style.vue"
    ),
  materialStarStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-star-style" */ "@/components/component/material/star/style.vue"
    ),
  assistCommonStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-assist-style" */ "@/components/component/assist/common/style.vue"
    )
};

let datas = {
  commonDataCom: () =>
    import(
      /* webpackChunkName: "bm-component-data" */ "@/components/component/data.vue"
    )
};

export { widgets, styles, datas };
