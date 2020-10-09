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
  upload2OssUrl: `/upload/upload2Oss` //上传文件到阿里云oss
};
