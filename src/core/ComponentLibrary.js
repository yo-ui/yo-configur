import bmCommon from "@/common/common";
// 静态文本
import text from "@/core/components/basic/text/index";
import dynamicText from "@/core/components/basic/dynamicText/index";
import panel from "@/core/components/basic/panel/index";
import image from "@/core/components/basic/image/index";
import imageStatus from "@/core/components/basic/imageStatus/index";
import button from "@/core/components/basic/button/index";
import display from "@/core/components/basic/display/index";
import block from "@/core/components/basic/block/index";

// 热点
import hotPoint from "@/core/components/basic/hotPoint/index";

// 表格
import table from "@/core/components/basic/table/index";

// 横向滚动文本
import vScrollText from "@/core/components/basic/vScrollText/index";

// 竖向滚动文本
import hScrollText from "@/core/components/basic/hScrollText/index";

// 富文本
import richText from "@/core/components/basic/richText/index";

// 计分牌
import scoreBoard from "@/core/components/basic/scoreBoard/index";

// 计时器
import timeText from "@/core/components/basic/timeText/index";

// 指南针
import compass from "@/core/components/basic/compass/index";

// 指南针1
import compass1 from "@/core/components/basic/compass1/index";

// 倒计时
import countdownText from "@/core/components/basic/countdownText/index";

// 视频
import video from "@/core/components/basic/video/index";

// hls视频流
import hlsVideo from "@/core/components/basic/hlsVideo/index";

//按钮标签
import buttontab from "@/core/components/basic/buttontab/index";

//开关
import switchText from "@/core/components/basic/switch/index";

// 自动手动
import amt from "@/core/components/basic/amt/index";

// 启停
import startStop from "@/core/components/basic/startStop/index";

// 报警
import alarm from "@/core/components/basic/alarm/index";

// 故障
import fault from "@/core/components/basic/fault/index";

//百分比进度条
import progressbar from "@/core/components/basic/progressbar/index";

//iframe
import iframe from "@/core/components/basic/iframe/index";

//下拉框
import select from "@/core/components/basic/select/index";

// import lineChart from  "@/core/components/com/lineChart/index"

// import barChart from  "@/core/components/com/barChart/index"

// import sequenceBarChart from  "@/core/components/com/sequenceBarChart/index"

// import lineBarChart from  "@/core/components/com/lineBarChart/index"

// import statisticsAreaLineChart from  "@/core/components/com/statisticsAreaLineChart/index"

// import sequenceLineChart from  "@/core/components/com/sequenceLineChart/index"

// import sequenceAreaLineChart from  "@/core/components/com/sequenceAreaLineChart/index"

// import scatterChart from  "@/core/components/com/scatterChart/index"

// import bubbleChart from  "@/core/components/com/bubbleChart/index"

// import pileBarChart from  "@/core/components/com/pileBarChart/index"

// import pieChart from  "@/core/components/com/pieChart/index"

// import ringChart from  "@/core/components/com/ringChart/index"

// import nightingalePieChart from  "@/core/components/com/nightingalePieChart/index"

// import nightingaleRingChart from  "@/core/components/com/nightingaleRingChart/index"

// import map from  "@/core/components/com/map/index"

// import gaugeChart from  "@/core/components/com/gaugeChart/index"

// import liquidfillChart from  "@/core/components/com/liquidfillChart/index"

// import areaRadarChart from  "@/core/components/com/areaRadarChart/index"

// import statisticsRadarChart from  "@/core/components/com/statisticsRadarChart/index"

import deviceCommon from "@/core/components/device/common/index";

// // 水管（水平）
// import deviceSgH from "@/core/components/device/sg-h/index";

// // // 水管（垂直）
// // import deviceSgV from  "@/core/components/device/sg-v/index"

// // // 水管（上）
// // import deviceSgTop from  "@/core/components/device/sg-top/index"

// // // 水管（下）
// // import deviceSgBottom from  "@/core/components/device/sg-bottom/index"

// // // 水管（左）
// // import deviceSgLeft from  "@/core/components/device/sg-left/index"

// // // 水管（左上）
// // import deviceSgLeftTop from  "@/core/components/device/sg-left-top/index"

// // // 水管（左下）
// // import deviceSgLeftBottom from  "@/core/components/device/sg-left-bottom/index"

// // // 水管（右）
// // import deviceSgRight from  "@/core/components/device/sg-right/index"

// // // 水管（右上）
// // import deviceSgRightTop from  "@/core/components/device/sg-right-top/index"

// // // 水管（右下）
// // import deviceSgRightBottom from  "@/core/components/device/sg-right-bottom/index"

// // 电表
// import deviceDb from  "@/core/components/device/db/index"

// // 单项导轨电表
// import deviceDxdgdb from  "@/core/components/device/dxdgdb/index"

// // io控制模块
// import deviceIokzmk from  "@/core/components/device/iokzmk/index"

// // 断路器
// import deviceDuanluqi from  "@/core/components/device/duanluqi/index"

// // 壁挂式电表
// import deviceBgsdb from  "@/core/components/device/bgsdb/index"

// 接地刀闸
import deviceJddz from "@/core/components/device/jddz/index";

// 电力电容器
import deviceDldrq from "@/core/components/device/dldrq/index";

// 变压器
import deviceByq from "@/core/components/device/byq/index";

// 变压器
import deviceByq1 from "@/core/components/device/byq1/index";

// // 电容器
import deviceDrq from "@/core/components/device/drq/index";

// 电流互感器1
import deviceDlhgq1 from "@/core/components/device/dlhgq1/index";

// 电流互感器2
import deviceDlhgq2 from "@/core/components/device/dlhgq2/index";

// 电流互感器3
import deviceDlhgq3 from "@/core/components/device/dlhgq3/index";

// 电流互感器4
import deviceDlhgq4 from "@/core/components/device/dlhgq4/index";

// 接地
import deviceJd from "@/core/components/device/jd/index";

// 接地
import deviceJd1 from "@/core/components/device/jd1/index";

// 接地指示
import deviceJdzs from "@/core/components/device/jdzs/index";

// 电抗器
import deviceDkq from "@/core/components/device/dkq/index";

// 断路器1
import deviceDlq1 from "@/core/components/device/dlq1/index";

// 断路器2
import deviceDlq2 from "@/core/components/device/dlq2/index";

// // 开关1
// import deviceKg1 from  "@/core/components/device/kg1/index"

// 手车
import deviceSc from "@/core/components/device/sc/index";

// // 螺翼式水表
// import deviceLyssb from  "@/core/components/device/lyssb/index"

// // 阀控水表
// import deviceFksb from  "@/core/components/device/fksb/index"

// // 旋翼式水表
// import deviceXyssb from  "@/core/components/device/xyssb/index"

// // 超时波流量计
// import deviceCsbllj from  "@/core/components/device/csbllj/index"

// // 插卡式水表
// import deviceCkssb from  "@/core/components/device/ckssb/index"

// // 生活水泵
// import deviceShsb from  "@/core/components/device/shsb/index"

// // 集水井
// import deviceJsj from  "@/core/components/device/jsj/index"

// // 水箱
// import deviceSx from  "@/core/components/device/sx/index"

// // 消防水泵
// import deviceXfsb from  "@/core/components/device/xfsb/index"

// // 抽烟风机
// import deviceCyfj from  "@/core/components/device/cyfj/index"

// // 正压送风机
// import deviceZysfj from  "@/core/components/device/zysfj/index"

// // 蓄水装置
// import deviceXszz from  "@/core/components/device/xszz/index"

// // 手动水阀
// import deviceSdsf from  "@/core/components/device/sdsf/index"

// // 集水器
// import deviceJsq from  "@/core/components/device/jsq/index"

// // 分水器
// import deviceFsq from  "@/core/components/device/fsq/index"

// // 开关
// import deviceKg from  "@/core/components/device/kg/index"

// // 灯管
// import deviceDengg from  "@/core/components/device/dengg/index"

// // 灯泡
// import deviceDengp from  "@/core/components/device/dengp/index"

// //整体式热量表
// import deviceZtsrlb from  "@/core/components/device/ztsrlb/index"

// //组合式热量表
// import deviceZhsrlb from  "@/core/components/device/zhsrlb/index"

// //挂式空调
// import deviceGskt from  "@/core/components/device/gskt/index"

// //立式空调
// import deviceLskt from  "@/core/components/device/lskt/index"

// // 风冷热器
// import deviceFlrq from  "@/core/components/device/flrq/index"

// // 板式换热器
// import deviceBshrq from  "@/core/components/device/bshrq/index"

// // 冷却塔
// import deviceLqt from  "@/core/components/device/lqt/index"

// // 排风机
// import devicePfj from  "@/core/components/device/pfj/index"

// // 燃气锅炉
// import deviceRqgl from  "@/core/components/device/rqgl/index"

// // 立式电锅炉
// import deviceLsdgl from  "@/core/components/device/lsdgl/index"

// // 新风控制器
// import deviceXfkzq from  "@/core/components/device/xfkzq/index"

// // 温控器
// import deviceWkq from  "@/core/components/device/wkq/index"

// // 太阳能热水器
// import deviceTynrsq from  "@/core/components/device/tynrsq/index"

// // 储液储气罐
// import deviceCycqg from  "@/core/components/device/cycqg/index"

// // 湿式报警阀
// import deviceSsbjf from  "@/core/components/device/ssbjf/index"

// // 烟雾报警传感器
// import deviceYwbjcgq from  "@/core/components/device/ywbjcgq/index"

// // 红外人体感应器
// import deviceHwrtgyq from  "@/core/components/device/hwrtgyq/index"

// // 摄像头
// import deviceSxt from  "@/core/components/device/sxt/index"

// // 门磁报警器
// import deviceMcbjq from  "@/core/components/device/mcbjq/index"

// // 漏水报警器
// import deviceLsbjq from  "@/core/components/device/lsbjq/index"

// // 光伏电池板
// import deviceGfdcb from  "@/core/components/device/gfdcb/index"

// // 光伏逆变器
// import deviceGfnbq from  "@/core/components/device/gfnbq/index"

// // 拉绳式测距
// import deviceLsscj from  "@/core/components/device/lsscj/index"

// // 超声波测距
// import deviceCsbcj from  "@/core/components/device/csbcj/index"

// // 液晶屏传感器
// import deviceYjpcgq from  "@/core/components/device/yjpcgq/index"

// // 传感器
// import deviceCgq from  "@/core/components/device/cgq/index"

// // 小型气象站
// import deviceXxqxz from  "@/core/components/device/xxqxz/index"

// // 客用电梯
// import deviceKydt from  "@/core/components/device/kydt/index"

// // 风力发电机
// import deviceFlfdj from  "@/core/components/device/flfdj/index"

// import materialCommon from  "@/core/components/material/common/index"

import materialLine from "@/core/components/material/line/index";

// import materialCurveLine from  "@/core/components/material/curveLine/index"

// import materialRectangle from  "@/core/components/material/rectangle/index"

// import materialCircle from  "@/core/components/material/circle/index"

// import materialArrow from  "@/core/components/material/arrow/index"

// import materialStar from  "@/core/components/material/star/index"

import materialPolygon from "@/core/components/material/polygon/index";

// import materialTriangle from  "@/core/components/material/triangle/index"

// import materialEmbellish1 from  "@/core/components/material/embellish1/index"

// import materialEmbellish2 from  "@/core/components/material/embellish2/index"

// import materialQuadrangle from  "@/core/components/material/quadrangle/index"

import assistCommon from "@/core/components/assist/common/index";
const Library = {
  text,
  dynamicText,
  panel,
  button,
  image,
  imageStatus,
  display,
  block,

  // 热点
  hotPoint,

  // 表格
  table,

  // 横向滚动文本
  vScrollText,

  // 竖向滚动文本
  hScrollText,

  // 富文本
  richText,

  // 计分牌
  scoreBoard,

  // 计时器
  timeText,

  // 指南针
  compass,

  // 指南针1
  compass1,

  // 倒计时
  countdownText,

  // 视频
  video,

  // hls视频流
  hlsVideo,

  //按钮标签
  buttontab,

  //开关
  switch: switchText,

  // 自动手动
  amt,

  // 启停
  startStop,

  // 报警
  alarm,

  // 故障
  fault,

  //百分比进度条
  progressbar,

  //iframe
  iframe,

  //下拉框
  select,

  // lineChart,

  // barChart,

  // sequenceBarChart,

  // lineBarChart,

  // statisticsAreaLineChart,

  // sequenceLineChart,

  // sequenceAreaLineChart,

  // scatterChart,

  // bubbleChart,

  // pileBarChart,

  // pieChart,

  // ringChart,

  // nightingalePieChart,

  // nightingaleRingChart,

  // map,

  // gaugeChart,

  // liquidfillChart,

  // areaRadarChart,

  // statisticsRadarChart,

  deviceCommon,

  // 水管（水平）
  // deviceSgH,

  // 水管（垂直）
  // deviceSgV,

  // 水管（上）
  // deviceSgTop,

  // 水管（下）
  // deviceSgBottom,

  // 水管（左）
  // deviceSgLeft,

  // 水管（左上）
  // deviceSgLeftTop,

  // 水管（左下）
  // deviceSgLeftBottom,

  // 水管（右）
  // deviceSgRight,

  // 水管（右上）
  // deviceSgRightTop,

  // 水管（右下）
  // deviceSgRightBottom,

  // 电表
  // deviceDb,

  // 单项导轨电表
  // deviceDxdgdb,

  // io控制模块
  // deviceIokzmk,

  // 断路器
  // deviceDuanluqi,

  // 壁挂式电表
  // deviceBgsdb,

  // 接地刀闸
  deviceJddz,

  // 电力电容器
  deviceDldrq,

  // 变压器
  deviceByq,

  // 变压器
  deviceByq1,

  // 电容器
  deviceDrq,

  // 电流互感器1
  deviceDlhgq1,

  // 电流互感器2
  deviceDlhgq2,

  // 电流互感器3
  deviceDlhgq3,

  // 电流互感器4
  deviceDlhgq4,

  // 接地
  deviceJd,

  // 接地
  deviceJd1,

  // 接地指示
  deviceJdzs,

  // 电抗器
  deviceDkq,

  // 断路器1
  deviceDlq1,

  // 断路器2
  deviceDlq2,

  // 开关1
  // deviceKg1,

  // 手车
  deviceSc,

  // 螺翼式水表
  // deviceLyssb,

  // 阀控水表
  // deviceFksb,

  // 旋翼式水表
  // deviceXyssb,

  // 超时波流量计
  // deviceCsbllj,

  // 插卡式水表
  // deviceCkssb,

  // 生活水泵
  // deviceShsb,

  // 集水井
  // deviceJsj,

  // 水箱
  // deviceSx,

  // 消防水泵
  // deviceXfsb,

  // 抽烟风机
  // deviceCyfj,

  // 正压送风机
  // deviceZysfj,

  // 蓄水装置
  // deviceXszz,

  // 手动水阀
  // deviceSdsf,

  // 集水器
  // deviceJsq,

  // 分水器
  // deviceFsq,

  // 开关
  // deviceKg,

  // 灯管
  // deviceDengg,

  // 灯泡
  // deviceDengp,

  //整体式热量表
  // deviceZtsrlb,

  //组合式热量表
  // deviceZhsrlb,

  //挂式空调
  // deviceGskt,

  //立式空调
  // deviceLskt,

  // 风冷热器
  // deviceFlrq,

  // 板式换热器
  // deviceBshrq,

  // 冷却塔
  // deviceLqt,

  // 排风机
  // devicePfj,

  // 燃气锅炉
  // deviceRqgl,

  // 立式电锅炉
  // deviceLsdgl,

  // 新风控制器
  // deviceXfkzq,

  // 温控器
  // deviceWkq,

  // 太阳能热水器
  // deviceTynrsq,

  // 储液储气罐
  // deviceCycqg,

  // 湿式报警阀
  // deviceSsbjf,

  // 烟雾报警传感器
  // deviceYwbjcgq,

  // 红外人体感应器
  // deviceHwrtgyq,

  // 摄像头
  // deviceSxt,

  // 门磁报警器
  // deviceMcbjq,

  // 漏水报警器
  // deviceLsbjq,

  // 光伏电池板
  // deviceGfdcb,

  // 光伏逆变器
  // deviceGfnbq,

  // 拉绳式测距
  // deviceLsscj,

  // 超声波测距
  // deviceCsbcj,

  // 液晶屏传感器
  // deviceYjpcgq,

  // 传感器
  // deviceCgq,

  // 小型气象站
  // deviceXxqxz,

  // 客用电梯
  // deviceKydt,

  // 风力发电机
  // deviceFlfdj,

  // materialCommon,

  materialLine,

  // materialCurveLine,

  // materialRectangle,

  // materialCircle,

  // materialArrow,

  // materialStar,

  materialPolygon,

  // materialTriangle,

  // materialEmbellish1,

  // materialEmbellish2,

  // materialQuadrangle,

  assistCommon
};
class ComponentLibrary {
  static getInstance(info) {
    let item = { ...info };
    let { type = "" } = item || {};
    bmCommon.log("当前渲染组件为", type);
    return new Library[type](item);
  }
}
export default ComponentLibrary;
