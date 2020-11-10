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
  // hls视频流
  hlsVideoCom: () =>
    import(
      /* webpackChunkName: "bm-component-hls-video" */ "@/components/component/basic/hlsVideo/index.vue"
    ),
  //开关
  switchCom: () =>
    import(
      /* webpackChunkName: "bm-component-switch" */ "@/components/component/basic/switch/index.vue"
    ),
  //百分比进度条
  progressbarCom: () =>
    import(
      /* webpackChunkName: "bm-component-progressbar" */ "@/components/component/basic/progressbar/index.vue"
    ),
  //iframe
  iframeCom: () =>
    import(
      /* webpackChunkName: "bm-component-iframe" */ "@/components/component/basic/iframe/index.vue"
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
  // 电表
  deviceDbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-db" */ "@/components/component/device/db/index.vue"
    ),
  // 单项导轨电表
  deviceDxdgdbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dxdgdb" */ "@/components/component/device/dxdgdb/index.vue"
    ),
  // io控制模块
  deviceIokzmkCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-iokzmk" */ "@/components/component/device/iokzmk/index.vue"
    ),
  // 断路器
  deviceDuanluqiCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-duanluqi" */ "@/components/component/device/duanluqi/index.vue"
    ),
  // 壁挂式电表
  deviceBgsdbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-bgsdb" */ "@/components/component/device/bgsdb/index.vue"
    ),
  // 接地刀闸
  deviceJddzCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-jddz" */ "@/components/component/device/jddz/index.vue"
    ),
  // 电力电容器
  deviceDldrqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dldrq" */ "@/components/component/device/dldrq/index.vue"
    ),
  // 变压器
  deviceByqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-byq" */ "@/components/component/device/byq/index.vue"
    ),
  // 螺翼式水表
  deviceLyssbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lyssb" */ "@/components/component/device/lyssb/index.vue"
    ),
  // 阀控水表
  deviceFksbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-fksb" */ "@/components/component/device/fksb/index.vue"
    ),
  // 旋翼式水表
  deviceXyssbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xyssb" */ "@/components/component/device/xyssb/index.vue"
    ),
  // 超时波流量计
  deviceCsblljCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-csbllj" */ "@/components/component/device/csbllj/index.vue"
    ),
  // 插卡式水表
  deviceCkssbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ckssb" */ "@/components/component/device/ckssb/index.vue"
    ),
  // 生活水泵
  deviceShsbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-shsb" */ "@/components/component/device/shsb/index.vue"
    ),
  // 集水井
  deviceJsjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-jsj" */ "@/components/component/device/jsj/index.vue"
    ),
  // 水箱
  deviceSxCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-sx" */ "@/components/component/device/sx/index.vue"
    ),
  // 消防水泵
  deviceXfsbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xfsb" */ "@/components/component/device/xfsb/index.vue"
    ),
  // 抽烟风机
  deviceCyfjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-cyfj" */ "@/components/component/device/cyfj/index.vue"
    ),
  // 正压送风机
  deviceZysfjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-zysfj" */ "@/components/component/device/zysfj/index.vue"
    ),
  // 蓄水装置
  deviceXszzCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xszz" */ "@/components/component/device/xszz/index.vue"
    ),
  // 手动水阀
  deviceSdsfCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-sdsf" */ "@/components/component/device/sdsf/index.vue"
    ),
  // 集水器
  deviceJsqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-jsq" */ "@/components/component/device/jsq/index.vue"
    ),
  // 分水器
  deviceFsqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-fsq" */ "@/components/component/device/fsq/index.vue"
    ),
  // 开关
  deviceKgCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-kg" */ "@/components/component/device/kg/index.vue"
    ),
  // 灯管
  deviceDenggCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dengg" */ "@/components/component/device/dengg/index.vue"
    ),
  // 灯泡
  deviceDengpCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dengp" */ "@/components/component/device/dengp/index.vue"
    ),
  //整体式热量表
  deviceZtsrlbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ztsrlb" */ "@/components/component/device/ztsrlb/index.vue"
    ),
  //组合式热量表
  deviceZhsrlbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-zhsrlb" */ "@/components/component/device/zhsrlb/index.vue"
    ),
  //挂式空调
  deviceGsktCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-gskt" */ "@/components/component/device/gskt/index.vue"
    ),
  //立式空调
  deviceLsktCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lskt" */ "@/components/component/device/lskt/index.vue"
    ),
  // 风冷热器
  deviceFlrqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-flrq" */ "@/components/component/device/flrq/index.vue"
    ),
  // 板式换热器
  deviceBshrqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-bshrq" */ "@/components/component/device/bshrq/index.vue"
    ),
  // 冷却塔
  deviceLqtCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lqt" */ "@/components/component/device/lqt/index.vue"
    ),
  // 排风机
  devicePfjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-pfj" */ "@/components/component/device/pfj/index.vue"
    ),
  // 燃气锅炉
  deviceRqglCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-rqgl" */ "@/components/component/device/rqgl/index.vue"
    ),
  // 立式电锅炉
  deviceLsdglCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lsdgl" */ "@/components/component/device/lsdgl/index.vue"
    ),
  // 湿式报警阀
  deviceSsbjfCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ssbjf" */ "@/components/component/device/ssbjf/index.vue"
    ),
  // 烟雾报警传感器
  deviceYwbjcgqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ywbjcgq" */ "@/components/component/device/ywbjcgq/index.vue"
    ),
  // 红外人体感应器
  deviceHwrtgyqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-hwrtgyq" */ "@/components/component/device/hwrtgyq/index.vue"
    ),
  // 摄像头
  deviceSxtCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-sxt" */ "@/components/component/device/sxt/index.vue"
    ),
  // 门磁报警器
  deviceMcbjqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-mcbjq" */ "@/components/component/device/mcbjq/index.vue"
    ),
  // 漏水报警器
  deviceLsbjqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lsbjq" */ "@/components/component/device/lsbjq/index.vue"
    ),
  // 光伏电池板
  deviceGfdcbCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-gfdcb" */ "@/components/component/device/gfdcb/index.vue"
    ),
  // 光伏逆变器
  deviceGfnbqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-gfnbq" */ "@/components/component/device/gfnbq/index.vue"
    ),
  // 拉绳式测距
  deviceLsscjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lsscj" */ "@/components/component/device/lsscj/index.vue"
    ),
  // 超声波测距
  deviceCsbcjCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-csbcj" */ "@/components/component/device/csbcj/index.vue"
    ),
  // 液晶屏传感器
  deviceYjpcgqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-yjpcgq" */ "@/components/component/device/yjpcgq/index.vue"
    ),
  // 传感器
  deviceCgqCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-cgq" */ "@/components/component/device/cgq/index.vue"
    ),
  // 小型气象站
  deviceXxqxzCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xxqxz" */ "@/components/component/device/xxqxz/index.vue"
    ),
  // 客用电梯
  deviceKydtCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-kydt" */ "@/components/component/device/kydt/index.vue"
    ),

  materialCommonCom: () =>
    import(
      /* webpackChunkName: "bm-component-material" */ "@/components/component/material/common/index.vue"
    ),
  materialLineCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-line" */ "@/components/component/material/line/index.vue"
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
  switchStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-switch-style" */ "@/components/component/basic/switch/style.vue"
    ),
  progressbarStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-progressbar-style" */ "@/components/component/basic/progressbar/style.vue"
    ),
  iframeStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-iframe-style" */ "@/components/component/basic/iframe/style.vue"
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
  deviceDxdgdbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dxdgdb-style" */ "@/components/component/device/dxdgdb/style.vue"
    ),
  deviceIokzmkStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-iokzmk-style" */ "@/components/component/device/iokzmk/style.vue"
    ),
  deviceDuanluqiStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-duanluqi-style" */ "@/components/component/device/duanluqi/style.vue"
    ),
  deviceBgsdbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-bgsdb-style" */ "@/components/component/device/bgsdb/style.vue"
    ),
  deviceJddzStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-jddz-style" */ "@/components/component/device/jddz/style.vue"
    ),
  deviceDldrqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-dldrq-style" */ "@/components/component/device/dldrq/style.vue"
    ),
  deviceByqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-byq-style" */ "@/components/component/device/byq/style.vue"
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
  deviceLyssbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lyssb-style" */ "@/components/component/device/lyssb/style.vue"
    ),
  deviceFksbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-fksb-style" */ "@/components/component/device/fksb/style.vue"
    ),
  deviceXyssbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xyssb-style" */ "@/components/component/device/xyssb/style.vue"
    ),
  deviceCsblljStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-csbllj-style" */ "@/components/component/device/csbllj/style.vue"
    ),
  deviceCkssbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ckssb-style" */ "@/components/component/device/ckssb/style.vue"
    ),
  deviceJsjStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-jsj-style" */ "@/components/component/device/jsj/style.vue"
    ),
  deviceSxStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-sx-style" */ "@/components/component/device/sx/style.vue"
    ),
  deviceXszzStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xszz-style" */ "@/components/component/device/xszz/style.vue"
    ),
  deviceSdsfStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-sdsf-style" */ "@/components/component/device/sdsf/style.vue"
    ),
  deviceJsqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-jsq-style" */ "@/components/component/device/jsq/style.vue"
    ),
  deviceFsqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-fsq-style" */ "@/components/component/device/fsq/style.vue"
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
  //整体式热量表
  deviceZtsrlbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ztsrlb-style" */ "@/components/component/device/ztsrlb/style.vue"
    ),
  //组合式热量表
  deviceZhsrlbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-zhsrlb-style" */ "@/components/component/device/zhsrlb/style.vue"
    ),
  //挂式空调
  deviceGsktStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-gskt-style" */ "@/components/component/device/gskt/style.vue"
    ),
  //立式空调
  deviceLsktStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lskt-style" */ "@/components/component/device/lskt/style.vue"
    ),
  // 风冷热器
  deviceFlrqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-flrq-style" */ "@/components/component/device/flrq/style.vue"
    ),
  // 板式换热器
  deviceBshrqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-bshrq-style" */ "@/components/component/device/bshrq/style.vue"
    ),
  // 冷却塔
  deviceLqtStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lqt-style" */ "@/components/component/device/lqt/style.vue"
    ),
  // 排风机
  devicePfjStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-pfj-style" */ "@/components/component/device/pfj/style.vue"
    ),
  // 燃气锅炉
  deviceRqglStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-rqgl-style" */ "@/components/component/device/rqgl/style.vue"
    ),
  // 立式电锅炉
  deviceLsdglStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lsdgl-style" */ "@/components/component/device/lsdgl/style.vue"
    ),
  // 湿式报警阀
  deviceSsbjfStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ssbjf-style" */ "@/components/component/device/ssbjf/style.vue"
    ),
  // 烟雾报警传感器
  deviceYwbjcgqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-ywbjcgq-style" */ "@/components/component/device/ywbjcgq/style.vue"
    ),
  // 红外人体感应器
  deviceHwrtgyqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-hwrtgyq-style" */ "@/components/component/device/hwrtgyq/style.vue"
    ),
  // 摄像头
  deviceSxtStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-sxt-style" */ "@/components/component/device/sxt/style.vue"
    ),
  // 门磁报警器
  deviceMcbjqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-mcbjq-style" */ "@/components/component/device/mcbjq/style.vue"
    ),
  // 漏水报警器
  deviceLsbjqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lsbjq-style" */ "@/components/component/device/lsbjq/style.vue"
    ),
  // 光伏电池板
  deviceGfdcbStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-gfdcb-style" */ "@/components/component/device/gfdcb/style.vue"
    ),
  // 光伏逆变器
  deviceGfnbqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-gfnbq-style" */ "@/components/component/device/gfnbq/style.vue"
    ),
  // 拉绳式测距
  deviceLsscjStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-lsscj-style" */ "@/components/component/device/lsscj/style.vue"
    ),
  // 超声波测距
  deviceCsbcjStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-csbcj-style" */ "@/components/component/device/csbcj/style.vue"
    ),
  // 液晶屏传感器
  deviceYjpcgqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-yjpcgq-style" */ "@/components/component/device/yjpcgq/style.vue"
    ),
  // 传感器
  deviceCgqStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-cgq-style" */ "@/components/component/device/cgq/style.vue"
    ),
  // 小型气象站
  deviceXxqxzStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-device-xxqxz-style" */ "@/components/component/device/xxqxz/style.vue"
    ),
  // 客用电梯
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
  materialLineStyleCom: () =>
    import(
      /* webpackChunkName: "bm-component-material-line-style" */ "@/components/component/material/line/style.vue"
    ),
  // materialRectangleStyleCom: () =>
  //   import(
  //     /* webpackChunkName: "bm-component-material-rectangle-style" */ "@/components/component/material/rectangle/style.vue"
  //   ),
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
