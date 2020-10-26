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
  sequenceBarChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-sequenceBarChart" */ "@/components/component/com/sequenceBarChart/index.vue"
    ),

  lineBarChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-lineBarChart" */ "@/components/component/com/lineBarChart/index.vue"
    ),
  statisticsAreaLineChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-statisticsAreaLineChart" */ "@/components/component/com/statisticsAreaLineChart/index.vue"
    ),
  sequenceLineChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-sequenceLineChart" */ "@/components/component/com/sequenceLineChart/index.vue"
    ),
  sequenceAreaLineChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-sequenceAreaLineChart" */ "@/components/component/com/sequenceAreaLineChart/index.vue"
    ),

  scatterChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-scatterChart" */ "@/components/component/com/scatterChart/index.vue"
    ),
  bubbleChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-bubbleChart" */ "@/components/component/com/bubbleChart/index.vue"
    ),

  pileBarChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-pileBarChart" */ "@/components/component/com/pileBarChart/index.vue"
    ),
  pieChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-pieChart" */ "@/components/component/com/pieChart/index.vue"
    ),
  ringChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-ringChart" */ "@/components/component/com/ringChart/index.vue"
    ),
  nightingalePieChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-nightingalePieChart" */ "@/components/component/com/nightingalePieChart/index.vue"
    ),
  nightingaleRingChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-nightingaleRingChart" */ "@/components/component/com/nightingaleRingChart/index.vue"
    ),
  mapCom: () =>
    import(
      /* webpackChunkName: "bm-component-map" */ "@/components/component/com/map/index.vue"
    ),
  gaugeChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-gaugeChart" */ "@/components/component/com/gaugeChart/index.vue"
    ),
  liquidfillChartCom: () =>
    import(
      /* webpackChunkName: "bm-component-liquidfillChart" */ "@/components/component/com/liquidfillChart/index.vue"
    ),
    areaRadarChartCom: () =>
      import(
        /* webpackChunkName: "bm-component-areaRadarChart" */ "@/components/component/com/areaRadarChart/index.vue"
      ),
    statisticsRadarChartCom: () =>
      import(
        /* webpackChunkName: "bm-component-statisticsRadarChart" */ "@/components/component/com/statisticsRadarChart/index.vue"
      ),
  deviceCommonCom: () =>
    import(
      /* webpackChunkName: "bm-component-device" */ "@/components/component/device/common/index.vue"
    ),
  deviceDbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-db" */ "@/components/component/device/db/index.vue"
    ),
  deviceShsbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-shsb" */ "@/components/component/device/shsb/index.vue"
    ),
  deviceZysfjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-zysfj" */ "@/components/component/device/zysfj/index.vue"
    ),
  deviceXfsbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xfsb" */ "@/components/component/device/xfsb/index.vue"
    ),
  deviceCyfjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-cyfj" */ "@/components/component/device/cyfj/index.vue"
    ),
  deviceKgCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-kg" */ "@/components/component/device/kg/index.vue"
    ),
  deviceDenggCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dengg" */ "@/components/component/device/dengg/index.vue"
    ),
  deviceDengpCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dengp" */ "@/components/component/device/dengp/index.vue"
    ),
  deviceFlrqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-flrq" */ "@/components/component/device/flrq/index.vue"
    ),
  deviceLqtCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lqt" */ "@/components/component/device/lqt/index.vue"
    ),
  devicePfjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-pfj" */ "@/components/component/device/pfj/index.vue"
    ),
  deviceRqglCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-rqgl" */ "@/components/component/device/rqgl/index.vue"
    ),
  deviceLsdglCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lsdgl" */ "@/components/component/device/lsdgl/index.vue"
    ),
  deviceSsbjfCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ssbjf" */ "@/components/component/device/ssbjf/index.vue"
    ),
  deviceSxtCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-sxt" */ "@/components/component/device/sxt/index.vue"
    ),
  deviceKydtCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-kydt" */ "@/components/component/device/kydt/index.vue"
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
  groupStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-group-style" */ "@/components/component/group-style.vue"
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
  ringChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-ringChart-style" */ "@/components/component/com/ringChart/style.vue"
    ),
  nightingalePieChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-nightingalePieChart-style" */ "@/components/component/com/nightingalePieChart/style.vue"
    ),
  nightingaleRingChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-nightingaleRingChart-style" */ "@/components/component/com/nightingaleRingChart/style.vue"
    ),
  barChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-barChart-style" */ "@/components/component/com/barChart/style.vue"
    ),
  sequenceBarChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-sequenceBarChart-style" */ "@/components/component/com/sequenceBarChart/style.vue"
    ),
  lineBarChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-lineBarChart-style" */ "@/components/component/com/lineBarChart/style.vue"
    ),
  statisticsAreaLineChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-statisticsAreaLineChart-style" */ "@/components/component/com/statisticsAreaLineChart/style.vue"
    ),
  sequenceLineChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-sequenceLineChart-style" */ "@/components/component/com/sequenceLineChart/style.vue"
    ),
  sequenceAreaLineChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-sequenceAreaLineChart-style" */ "@/components/component/com/sequenceAreaLineChart/style.vue"
    ),

  scatterChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-scatterChart" */ "@/components/component/com/scatterChart/style.vue"
    ),
  bubbleChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-bubbleChart" */ "@/components/component/com/bubbleChart/style.vue"
    ),

  pileBarChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-pileBarChart-style" */ "@/components/component/com/pileBarChart/style.vue"
    ),

  gaugeChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-gaugeChart-style" */ "@/components/component/com/gaugeChart/style.vue"
    ),
  liquidfillChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-liquidfillChart-style" */ "@/components/component/com/liquidfillChart/style.vue"
    ),
  areaRadarChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-areaRadarChart-style" */ "@/components/component/com/areaRadarChart/style.vue"
    ),
  statisticsRadarChartStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-statisticsRadarChart-style" */ "@/components/component/com/statisticsRadarChart/style.vue"
    ),

  deviceCommonStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-style" */ "@/components/component/device/common/style.vue"
    ),
  deviceDbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-db-style" */ "@/components/component/device/db/style.vue"
    ),
  deviceShsbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-shsb-style" */ "@/components/component/device/shsb/style.vue"
    ),
  deviceZysfjStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-zysfj-style" */ "@/components/component/device/zysfj/style.vue"
    ),
  deviceXfsbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xfsb-style" */ "@/components/component/device/xfsb/style.vue"
    ),
  deviceCyfjStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-cyfj-style" */ "@/components/component/device/cyfj/style.vue"
    ),
  deviceKgStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-kg-style" */ "@/components/component/device/kg/style.vue"
    ),
  deviceDenggStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dengg-style" */ "@/components/component/device/dengg/style.vue"
    ),
  deviceDengpStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dengp-style" */ "@/components/component/device/dengp/style.vue"
    ),
  deviceFlrqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-flrq-style" */ "@/components/component/device/flrq/style.vue"
    ),
  deviceLqtStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lqt-style" */ "@/components/component/device/lqt/style.vue"
    ),
  devicePfjStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-pfj-style" */ "@/components/component/device/pfj/style.vue"
    ),
  deviceRqglStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-rqgl-style" */ "@/components/component/device/rqgl/style.vue"
    ),
  deviceLsdglStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lsdgl-style" */ "@/components/component/device/lsdgl/style.vue"
    ),
  deviceSsbjfStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ssbjf-style" */ "@/components/component/device/ssbjf/style.vue"
    ),
  deviceSxtStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-sxt-style" */ "@/components/component/device/sxt/style.vue"
    ),
  deviceKydtStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-kydt-style" */ "@/components/component/device/kydt/style.vue"
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

let infos = {
  deviceInfoCom: () =>
    import(
      /* webpackChunkName: "bm-device-info" */ "@/components/data/device-info.vue"
    )
};
export { widgets, styles, datas, infos };
