import { URL } from "@/common/env";
import bmCommon from "@/common/common";
import { post, get } from "@/store/axios";
export default {
  // //获取网关设备
  // async modelGateways(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelGatewaysUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //获取网关设备
  // async modelGateway(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelGatewayUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //获取建筑功能
  // async modelBuildingFunction(context, options) {
  //   const data = await post({
  //     url: URL.modelBuildingFunctionUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取项目类型
  // async modelTypeFunction(context, options) {
  //   const data = await post({
  //     url: URL.modelTypeFunctionUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取数据中心
  // async modelDatacenters(context, options) {
  //   const data = await post({
  //     url: URL.modelDatacentersUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取数据中心
  // async modelDevices(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelDevicesUrl, options),
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取数据中心
  // async modelChannels(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelChannelsUrl, options),
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取直接设备列表
  // async modelDirectDeviceList(context, options) {
  //   const data = await post({
  //     url: URL.modelDirectDeviceListUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //删除直接设备
  // async modelDirectDeviceRemove(context, options) {
  //   const data = await post({
  //     url: URL.modelDirectDeviceRemoveUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  //获取设备点位
  async modelDevicePoints(context, options) {
    const data = await get({
      url: bmCommon.substitute(URL.modelDevicePointsUrl, options),
      params: {},
      store: context
    });
    return data;
  },
  // //批量添加设备
  // async modelDeviceBatchInsert(context, options) {
  //   const data = await post({
  //     url: URL.modelDeviceBatchInsertUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //设备下发
  // async modelGatewayIssued(context, options) {
  //   const data = await post({
  //     url: URL.modelGatewayIssuedUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //区域列表
  // async modelOrganizBuildingParents(context, options) {
  //   const data = await get({
  //     url: URL.modelOrganizBuildingParentsUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //更换位置
  // async modelOrganizUpdateLocation(context, options) {
  //   const data = await post({
  //     url: URL.modelOrganizUpdateLocationUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取设备点位
  // async modelGatewayUpdateFile(context, options) {
  //   const data = await post({
  //     url: URL.modelGatewayUpdateFileUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //判断是否删除
  // async modelIsDelete(context, options) {
  //   const data = await post({
  //     url: URL.modelIsDeleteUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },

  // //更新通道
  // async modelChannelUpdate(context, options) {
  //   const data = await post({
  //     url: URL.modelChannelUpdateUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取通道信息
  // async modelChannel(context, options) {
  //   const data = await get({
  //     url: bmCommon.substitute(URL.modelChannelUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //获取通道类型
  // async modelChannelTypes(context, options) {
  //   const data = await get({
  //     url: URL.modelChannelTypesUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取通道参数
  // async modelChannelParams(context, options) {
  //   const data = await get({
  //     url: URL.modelChannelParamsUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //添加通道
  // async modelChannelInsert(context, options) {
  //   const data = await post({
  //     url: URL.modelChannelInsertUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取设备类型
  // async modelDeviceTypes(context, options) {
  //   const data = await get({
  //     url: bmCommon.substitute(URL.modelDeviceTypesUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //获取设备类型点位
  // async modelDeviceTypePoint(context, options) {
  //   const data = await get({
  //     url: bmCommon.substitute(URL.modelDeviceTypePointUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //获取建筑key
  // async modelIdKey(context, options) {
  //   const data = await post({
  //     url: URL.modelIdKeyUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //删除网关设备
  // async modelDeviceDelete(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelDeviceDeleteUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // // //更新网关设备
  // // async modelDeviceUpdate(context, options) {
  // //   const data = await post({
  // //     url: URL.modelDeviceUpdateUrl,
  // //     params: options,
  // //     store: context
  // //   });
  // //   return data;
  // // },
  // // //获取网关设备
  // // async modelDevice(context, options) {
  // //   const data = await post({
  // //     url: bmCommon.substitute(URL.modelDeviceUrl, options),
  // //     params: {},
  // //     store: context
  // //   });
  // //   return data;
  // // },
  // // //添加网关设备
  // // async modelDeviceInsert(context, options) {
  // //   const data = await post({
  // //     url: URL.modelDeviceInsertUrl,
  // //     params: options,
  // //     store: context
  // //   });
  // //   return data;
  // // },
  // //添加组织
  // async modelOrganizInsert(context, options) {
  //   const data = await post({
  //     url: URL.modelOrganizInsertUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //批量楼层添加
  // async modelOrganizBatchFloor(context, options) {
  //   const data = await post({
  //     url: URL.modelOrganizBatchFloorUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //批量房间添加
  // async modelOrganizBatchRoom(context, options) {
  //   const data = await post({
  //     url: URL.modelOrganizBatchRoomUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取组织
  // async modelOrganizGet(context, options) {
  //   const data = await post({
  //     url: URL.modelOrganizGetUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取网关信息
  // async modelGatewayGet(context, options) {
  //   const data = await post({
  //     url: URL.modelGatewayGetUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取网关信息
  // async modelDatacenterGet(context, options) {
  //   const data = await post({
  //     url: URL.modelDatacenterGetUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取网关信息
  // async modelGatewayInfo(context, options) {
  //   const data = await post({
  //     url: URL.modelGatewayInfoUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取网关设备信息
  // async modelDeviceInfo(context, options) {
  //   const data = await post({
  //     url: URL.modelDeviceInfoUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //批量保存设备点位信息
  // async modelPointBatchParam(context, options) {
  //   const data = await post({
  //     url: URL.modelPointBatchParamUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //自动测试
  // async modelDatamodelDeviceAcq(context, options) {
  //   const data = await post({
  //     url: URL.modelDatamodelDeviceAcqUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //手动测试
  // async modelDatamodelDeviceRelay(context, options) {
  //   const data = await post({
  //     url: URL.modelDatamodelDeviceRelayUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //是否是电表
  // async modelPointIsAmmeter(context, options) {
  //   const data = await get({
  //     url: URL.modelPointIsAmmeterUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },

  // //获取网关设备点位
  // async modelDevicePoint(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelDevicePointUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },

  // //更新网关设备点位
  // async modelDevicePointUpdate(context, options) {
  //   const data = await post({
  //     url: URL.modelDevicePointUpdateUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },

  // //添加网关设备点位
  // async modelDevicePointInsert(context, options) {
  //   const data = await post({
  //     url: URL.modelDevicePointInsertUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },

  // //获取网关设备点位
  // async modelDeviceOptionalPoints(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelDeviceOptionalPointsUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //获取网关信息
  // async modelDeviceDeletePoints(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelDeviceDeletePointsUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //获取网关信息
  // async modelDeviceManufacturer(context, options) {
  //   const data = await get({
  //     url: URL.modelDeviceManufacturerUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //获取设备容量
  // async modelDeviceCapacity(context, options) {
  //   const data = await post({
  //     url: URL.modelDeviceCapacityUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //修改组织
  // async modelOrganizUpdate(context, options) {
  //   const data = await post({
  //     url: URL.modelOrganizUpdateUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //删除网关
  // async modelGatewayDelete(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelGatewayDeleteUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //添加网关
  // async modelGatewayInsert(context, options) {
  //   const data = await post({
  //     url: URL.modelGatewayInsertUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //更新网关
  // async modelGatewayUpdate(context, options) {
  //   const data = await post({
  //     url: URL.modelGatewayUpdateUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // },
  // //删除通道
  // async modelChannelDelete(context, options) {
  //   const data = await post({
  //     url: bmCommon.substitute(URL.modelChannelDeleteUrl, options),
  //     params: {},
  //     store: context
  //   });
  //   return data;
  // },
  // //删除组织
  // async modelOrganizDelete(context, options) {
  //   const data = await post({
  //     url: URL.modelOrganizDeleteUrl,
  //     params: options,
  //     store: context
  //   });
  //   return data;
  // }
};
