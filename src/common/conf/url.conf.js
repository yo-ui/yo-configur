import apiConfig from "@/common/conf/index";
let { serviceHost = "",manageHost='', wsHost = "" } = apiConfig || {};

export default {
  loginAuthentUrl: `${manageHost}/login/authent`, //登录

  websocketUrl: `${wsHost}/ws`,
  pushUrl: `${manageHost}/configur/push`,
  // commonVerifyInfoUrl: `${manageHost}/configur/common/verifyInfo`,
  // commonOrganizListUrl: `${manageHost}/configur/common/organizList`,
  orgStrucListByLevelUrl: `${manageHost}/orgStruc/listByLevel`, //加载用户的组织结构
  commonDevicePointsUrl: `${manageHost}/configur/common/devicePoints`,
  commonDevicePointHstDataUrl: `${manageHost}/configur/common/devicePointHstData`,
  commonDeviceListUrl: `${manageHost}/configur/common/deviceList`,
  commonGetDeviceUrl: `${manageHost}/configur/common/getDevice`,
  canvasGetUrl: `${manageHost}/configur/canvas/get`,
  canvasSaveUrl: `${manageHost}/configur/canvas/save`,
  canvasControlUrl: `${manageHost}/configur/canvas/control`,
  canvasTokenUrl: `${manageHost}/configur/canvas/token`,
  canvasStartUrl: `${manageHost}/configur/canvas/start`,
  canvasStopUrl: `${manageHost}/configur/canvas/stop`,
  upload2OssUrl: `${manageHost}/upload/upload2Oss` //上传文件到阿里云oss
};
