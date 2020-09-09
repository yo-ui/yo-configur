<template>
  <div class="bm-basic-map-com" :style="comStyle">
    <el-amap-search-box
      :search-option="amap.searchOption"
      class="search-box"
      :on-search-result="amap.onSearchResult"
    ></el-amap-search-box>
    <el-amap
      class="map-box"
      vid="amapBox"
      :amap-manager="amapManager"
      :events="amap.events"
      :plugin="amap.plugin"
      :zoom="amap.zoom"
      :center="amap.center"
    >
      <el-amap-marker
        vid="marker"
        :events="marker.events"
        :position="marker.position"
      ></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { AMapManager } from "vue-amap";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "mapCom",
  data() {
    let center = [121.59996, 31.197646];
    return {
      // 地图管理对象
      amapManager: new AMapManager(),
      condition: {},
      // 地图上的点
      marker: {
        position: center,
        events: {
          click: e => {
            this.getPosition(e);
          }
        }
      },
      //地图参数
      amap: {
        // 放大倍数
        zoom: 13,
        zooms: [3, 18],
        searchOption: {
          citylimit: false
        },
        // 搜索结果
        onSearchResult: pois => {
          let { amap = {}, marker = {}, condition } = this;
          if (pois.length > 0) {
            let [poi = {}] = pois;
            let { lng, lat, name = "", address = "" } = poi;
            let pos = [lng, lat];
            amap.center = pos;
            marker.position = pos;
            condition.locationDesc = name + "--" + address;
            // this.setBuildingLocation(pos);
          }
        },
        //地图中心
        center: center,
        plugin: [
          "ToolBar",
          "OverView",
          "Scale",
          {
            pName: "MapType",
            defaultType: 0
          },
          {
            pName: "Geolocation",
            events: {
              init: o => {
                let { amap = {}, marker = {} } = this;
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  let { position } = result || {};
                  if (position) {
                    let { lng = "", lat = "" } = position || {};
                    let pos = [lng, lat];
                    // self.lng = result.position.lng;
                    // self.lat = result.position.lat;
                    // self.center = [self.lng, self.lat];
                    // self.loaded = true;
                    // self.$nextTick();
                    amap.center = pos;
                    marker.position = pos;
                  }
                });
              }
            }
          }
        ],
        // 地图事件
        events: {
          init: () => {
            // this.fixedPosition();
          },
          click: e => {
            this.getPosition(e, true);
          }
        }
      }
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters(),

    comStyle() {
      let { info = {} } = this;
      let {
        width = "",
        height = "",
        // color = "",
        // borderColor = "",
        // borderStyle = "",
        // borderWidth = "",
        scale = ""
        // fontFamily = "",
        // fontSize = "",
        // fontWeight = "",
        // fontStyle = ""
        // backgroundColor = "",
        // backgroundImage = "",
        // backgroundRepeat = "",
        // backgroundSize = ""
      } = info || {};
      let styles = {};

      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      // if (backgroundRepeat) {
      //   styles["backgroundRepeat"] = backgroundRepeat;
      // }
      // if (backgroundSize) {
      //   styles["backgroundSize"] = backgroundSize;
      // }
      // if (borderColor) {
      //   styles["borderColor"] = borderColor;
      // }
      // if (borderStyle) {
      //   styles["borderStyle"] = borderStyle;
      // }
      // // if (borderWidth) {
      // styles["borderWidth"] = `${borderWidth}px`;
      // }
      if (scale) {
        (styles["transform"] = `${scale}`),
          (styles["-webkit-transform"] = `${scale}`),
          (styles["-ms-transform"] = `${scale}`),
          (styles["-o-transform"] = `${scale}`),
          (styles["-moz-transform"] = `${scale}`);
      }
      // if (color) {
      //   styles["color"] = color;
      // }
      // if (fontSize) {
      //   styles["fontSize"] = `${fontSize}px`;
      // }
      // if (fontFamily) {
      //   styles["fontFamily"] = `${fontFamily}`;
      // }
      // if (fontWeight) {
      //   styles["fontWeight"] = fontWeight;
      // }
      // if (fontStyle) {
      //   styles["fontStyle"] = fontStyle;
      // }
      // if (backgroundColor) {
      //   styles["backgroundColor"] = backgroundColor;
      // }
      // if (backgroundImage) {
      //   styles["backgroundImage"] = `url(${this.$loadImgUrl(backgroundImage)})`;
      // }
      return styles || {};
    }
  },
  mounted() {
    this.$emit("success"); //组件加载完成回调
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({}),
    //定位
    // fixedPosition() {
    //   let { amapManager, amap = {}, marker = {} } = this;
    //   // let that = this;
    //   let map = amapManager.getMap();
    //   let geolocation = new AMap.Geolocation({
    //     enableHighAccuracy: true, //是否使用高精度定位，默认:true
    //     timeout: 10000, //超过10秒后停止定位，默认：无穷大
    //     maximumAge: 0, //定位结果缓存0毫秒，默认：0
    //     convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
    //     showButton: true, //显示定位按钮，默认：true
    //     buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
    //     buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //     showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
    //     showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
    //     panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
    //     zoomToAccuracy: false //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
    //   });
    //   function onComplete(obj) {
    //     let { position = {} } = obj || {};
    //     let { lat = "", lng = "" } = position || [];
    //     let pos = [lng, lat];
    //     amap.center = pos;
    //     marker.position = pos;
    //     // that.setBuildingLocation(pos);
    //   }

    //   function onError(obj) {
    //     // bmCommon.log(obj.message);
    //   }
    //   map && map.addControl(geolocation);
    //   geolocation.getCurrentPosition();
    //   AMap.event.addListener(geolocation, "complete", onComplete); //返回定位信息
    //   AMap.event.addListener(geolocation, "error", onError);
    // },
    // 获取位置信息
    getPosition(e, flag) {
      let { lnglat = {} } = e || {};
      let { lng = "", lat = "" } = lnglat || {};
      let { condition, amap = {}, marker } = this;
      let { zoom = "" } = amap || {};
      condition.location = `${lng}/${lat}/${zoom}`;
      let pos = [lng, lat];
      flag && marker && (marker.position = pos);
      let geocoder = new AMap.Geocoder({});
      geocoder.getAddress(`${lng},${lat}`, function(status, result) {
        // 查询成功时，result即对应匹配的POI信息
        if (status == "complete") {
          let { regeocode = {} } = result || {};
          let { formattedAddress = "" } = regeocode || {};
          // bmCommon.log(lng + "," + lat, status, result);
          condition.locationDesc = formattedAddress;
        }
      });
    }
  }
};
</script>

<style lang="less">
@import (less) "../../../../assets/less/components/component/basic/map.less";
</style>
