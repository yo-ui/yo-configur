import apiConfig from "@/common/conf/index";
let { host = "", wsHost = "" } = apiConfig || {};

export default {
  

  loginAuthentUrl: `${host}/login/authent`, //登录

  websocketUrl: `${wsHost}/ws`,
  pushUrl: `${host}/configur/push`,
  commonVerifyInfoUrl: `${host}/configur/common/verifyInfo`,
  commonOrganizListUrl: `${host}/configur/common/organizList`,
  commonDevicePointsUrl: `${host}/configur/common/devicePoints`,
  commonDevicePointHstDataUrl: `${host}/configur/common/devicePointHstData`,
  commonDeviceListUrl: `${host}/configur/common/deviceList`,
  commonGetDeviceUrl: `${host}/configur/common/getDevice`,
  canvasGetUrl: `${host}/configur/canvas/get`,
  canvasSaveUrl: `${host}/configur/canvas/save`,
  canvasControlUrl: `${host}/configur/canvas/control`,
  canvasTokenUrl: `${host}/configur/canvas/token`,
  canvasStartUrl: `${host}/configur/canvas/start`,
  canvasStopUrl: `${host}/configur/canvas/stop`,
  upload2OssUrl: `${host}/upload/upload2Oss` //上传文件到阿里云oss
};
