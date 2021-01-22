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
  canvasSelectUrl: `/canvas/select`, //画布列表
  // 小组件素材
  widgetMaterialAddUrl: `/widgetMaterial/add`, //添加单个【小组件素材】
  widgetMaterialDelUrl: `/widgetMaterial/del/{id}`, //删除单个【小组件素材】
  widgetMaterialGetUrl: `/widgetMaterial/get/{id}`, //查询单个【小组件素材】
  widgetMaterialListUrl: `/widgetMaterial/list`, //分页查询【小组件素材】列表,支持按名称模糊搜索
  widgetMaterialUpdateUrl: `/widgetMaterial/update`, //删除单个【小组件素材】
  // 项目图片
  entPicAddUrl: `/entPic/add`, //添加单个【项目图片】
  entPicDelUrl: `/entPic/del/{id}`, //删除单个【项目图片】
  // entPicGetUrl: `/entPic/get/{id}`, //查询单个【项目图片】
  entPicListUrl: `/entPic/list`, //分页查询【项目图片】列表,支持按名称模糊搜索
  entPicUpdateUrl: `/entPic/update`, //删除单个【项目图片】
  // 自定义组件
  widgetCustomAddUrl: `/widgetCustom/add`, //添加单个【自定义组件】
  widgetCustomDelUrl: `/widgetCustom/del/{id}`, //删除单个【自定义组件】
  widgetCustomGetUrl: `/widgetCustom/get/{id}`, //查询单个【自定义组件】
  widgetCustomListUrl: `/widgetCustom/list`, //分页查询【自定义组件】列表,支持按名称模糊搜索
  widgetCustomUpdateUrl: `/widgetCustom/update`, //删除单个【自定义组件】

  // 管理平台
  deviceGetUrl: `/device/get/{deviceId}`, //查询单个【网关设备】
  modelDevicePointsUrl: `/model/device/points/{deviceId}`, //获取设备点位

  upload2OssUrl: `/upload/upload2Oss` //上传文件到阿里云oss
};
