// import apiConfig from "@/common/conf/index";
// let { serviceHost = "",manageHost='', wsHost = "" } = apiConfig || {};

export default {
  loginAuthentUrl: `/login/authent`, //登录

  websocketUrl: `/ws`,
  pushUrl: `/configur/push`,
  // commonVerifyInfoUrl: `/configur/common/verifyInfo`,
  // commonOrganizListUrl: `/configur/common/organizList`,
  orgStrucListByLevelUrl: `/orgStruc/listByLevel`, //加载用户的组织结构
  commonDevicePointsUrl: `/configur/common/devicePoints`,
  commonDevicePointHstDataUrl: `/configur/common/devicePointHstData`,
  commonDeviceListUrl: `/configur/common/deviceList`,
  commonGetDeviceUrl: `/configur/common/getDevice`,
  canvasGetUrl: `/configur/canvas/get`,
  canvasSaveUrl: `/configur/canvas/save`,
  canvasControlUrl: `/configur/canvas/control`,
  canvasTokenUrl: `/configur/canvas/token`,
  canvasStartUrl: `/configur/canvas/start`,
  canvasStopUrl: `/configur/canvas/stop`,
  deviceControlledPointsUrl: `/configur/device/controlled/points/{deviceId}`, //获取设备可控制点位列表

  // 管理平台
  deviceGetUrl: `/device/get/{deviceId}`, //查询单个【网关设备】
  modelDevicePointsUrl: `/model/device/points/{deviceId}`, //获取设备点位

  upload2OssUrl: `/upload/upload2Oss` //上传文件到阿里云oss
};
