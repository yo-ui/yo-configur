import bmCommon from "@/common/common";
let baseData = {
  backgroundImage: "",
  backgroundSize: "100% 100%",
  backgroundRepeat: "repeat",
  borderWidth: 0,
  borderStyle: "none",
  borderColor: "",
  borderRadius: 0,
  scale: "scale(1,1)",
  left: 0,
  content: "文本内容",
  name: "文本标题",
  dataType: "", //绑定数据类型  device point
  bindData: {
    devicePoint: "",
    deviceId: "",
    orgId: ""
  }, //绑定的数据
  animation: {
    name: "",
    direction: "normal",
    duration: 0.8,
    iterationCount: 1
  },
  color: "",
  originWidth: "", //原宽
  originHeight: "", //原高
  fontWeight: "",
  textDecoration: "",
  fontStyle: "",
  fontSize: 14,
  opacity: 100,
  fontFamily: "",
  width: 300,
  height: 60,
  rotate: 0,
  matrix: {
    //二维矩阵
    a: 1,
    b: 0,
    c: 0,
    d: 1,
    e: 0,
    f: 0
  },
  transformOrigin: "center",
  top: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
  textAlign: "left",
  shadowable: false,
  shadow: {
    color: "#eee",
    x: 0, //X偏移量
    y: 0, //Y偏移量
    blur: 0, //模糊半径
    spread: 0, //阴影大小
    type: "" //阴影类型 //空为外阴影  inset 为内阴影
  },
  textShadowable: false,
  textShadow: {
    color: "#eee",
    x: 0, //X偏移量
    y: 0, //Y偏移量
    blur: 0 //模糊半径
  },
  backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
  gradientStyle: {
    type: "linear", //渐变类型  linear 线性  radial 径向
    angle: 0,
    center: "50% 50%",
    values: [0, 100],
    radialShape: "circle",
    valueIndex: 0,
    valueOptions: [
      //   {
      //   // disabled: true
      // }, {
      //   // disabled: true
      // }
    ],
    valueList: [
      { code: "#108cee", value: 0 },
      { code: "#545fc8", value: 100 }
    ]
  },
  equalScaleable: false, //是否等比例缩放
  scaleable: true, //是否可缩放操作
  rotateable: true, //是否可旋转操作
  editable: false, //内容是否可编辑
  dragable: true //是否可拖动
};
export default [
  {
    name: "基本",
    code: "basic",
    icon: "el-icon-s-grid",
    comList: [
      {
        name: "静态文本",
        code: "text",
        icon: "/static/img/configur/dataing.png",
        data: {
          ...baseData,
          // backgroundImage: "",
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "repeat",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // left: 0,
          // fontWeight: "",
          // textDecoration: "",
          // fontStyle: "",
          fontSize: 24,
          // opacity: 100,
          // fontFamily: "",
          width: 300,
          height: 60,
          // rotate: 0,
          // top: 0,
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          editable: true //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "动态数据",
        code: "dynamicText",
        icon: "/static/img/configur/text.png",
        data: {
          ...baseData,
          // backgroundImage: "",
          dataType: "point",
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "repeat",
          // scale: "scale(1,1)",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          fontWeight: "bold",
          // textDecoration: "",
          // fontStyle: "",
          fontSize: 24,
          fontFamily: "lcdD",
          // originWidth: "", //原宽
          // originHeight: "", //原高
          width: "",
          height: "",
          // opacity: 100,
          // left: 0,
          // top: 0,
          content: "00.00",
          scaleable: false //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        code: "image",
        name: "图片",
        icon: "/static/img/configur/img.png",
        data: {
          ...baseData,
          width: 160,
          height: 160
        }
      },
      {
        name: "按钮",
        code: "button",
        icon: "/static/img/configur/button.png",
        data: {
          ...baseData,
          color: "#fff",
          borderRadius: 20,
          dataType: "device",
          width: "",
          height: "",
          content: "控制",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "显示屏",
        code: "display",
        icon: "/static/img/configur/display.png",
        data: {
          ...baseData,
          content: "00.00",
          fontWeight: "bold",
          fontSize: 18,
          fontFamily: "lcdD",
          dataType: "point",
          width: 75,
          height: 36,
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "块状",
        code: "block",
        icon: "/static/img/configur/text.png",
        data: {
          ...baseData,
          borderColor: "#eee",
          borderStyle: "solid",
          borderRadius: 0,
          borderWidth: 1,
          dataType: "point",
          width: "",
          height: "",
          scaleable: false, //是否可缩放操作
          rotateable: false //是否可旋转操作
        }
      },
      {
        name: "横向滚动文本",
        code: "vScrollText",
        icon: "/static/img/configur/announcement.png",
        data: {
          ...baseData
        }
      },
      {
        name: "多行文本",
        code: "richText",
        icon: "/static/img/configur/richtext.png",
        data: {
          ...baseData,
          originWidth: "", //原宽
          originHeight: "", //原高
          fontSize: 14,
          width: 300,
          height: 200
        }
      },
      {
        name: "表格",
        code: "table",
        icon: "/static/img/configur/visualtable.png",
        data: {
          ...baseData,
          width: 800,
          height: 500,
          headerable: true,
          theader: {
            backgroundColor: "#eaf6fe",
            color: "#333",
            fontSize: 14,
            fontFamily: "",
            textAlign: "center",
            splitBorderColor: "#4195ea",
            fontStyle: "",
            backgroundType: "purity",
            gradientStyle: bmCommon.clone(baseData.gradientStyle),
            textDecoration: "",
            fontWeight: ""
          },
          tbody: {
            color: "#333",
            fontSize: 14,
            fontFamily: "",
            textAlign: "center",
            fontStyle: "",
            textDecoration: "",
            fontWeight: "",
            cSplitBorderColor: "#4195ea", //列分隔线颜色
            rSplitBorderColor: "#4195ea" //行分隔线颜色
          }
        }
      },
      {
        name: "记分牌",
        code: "scoreBoard",
        icon: "/static/img/configur/scoreboard.png",
        data: {
          ...baseData,
          originWidth: "", //原宽
          originHeight: "", //原高
          width: "",
          height: "",
          integer: 6, //整数位
          integerSeat: "#", // 空白  0  #
          decimal: 4, //小数位
          decimalSeat: "0", //  0  #
          scaleable: false,
          value: 100.1, //数值
          board: {
            width: 20,
            height: 30,
            fontSize: 28,
            distance: 8, //卡片间距
            fontFamily: "Impact",
            backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
            gradientStyle: {
              type: "linear", //渐变类型  linear 线性  radial 径向
              angle: 0,
              center: "50% 50%",
              values: [0, 100],
              radialShape: "circle",
              valueIndex: 0,
              valueOptions: [],
              valueList: [
                { code: "#108cee", value: 0 },
                { code: "#545fc8", value: 100 }
              ]
            }
          }
        }
      },
      {
        name: "时间",
        code: "timeText",
        icon: "/static/img/configur/timeclock.png",
        data: {
          ...baseData,
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "倒计时",
        code: "countdownText",
        icon: "/static/img/configur/timeclock.png",
        data: {
          ...baseData,
          time: 100, //100s
          format: "{dd}天{hh}小时{mm}分{ss}秒",
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "轮播图文",
        code: "swiperText",
        icon: "/static/img/configur/imageList.png",
        data: {
          ...baseData,
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "HLS视频流",
        code: "hlsVideo",
        icon: "/static/img/configur/videostreaming.png",
        data: {
          ...baseData,
          url:
            "http://www.flashls.org/playlists/test_001/stream_1000k_48k_640x360.m3u8",
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "百分比条",
        code: "countdownText",
        icon: "/static/img/configur/percentagebar.png",
        data: {
          ...baseData,
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "iframe",
        code: "iframe",
        icon: "/static/img/configur/iframe.png",
        data: {
          ...baseData,
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "下拉筛选框",
        code: "select",
        icon: "/static/img/configur/select.png",
        data: {
          ...baseData,
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "按钮标签",
        code: "buttontab",
        icon: "/static/img/configur/buttontab.png",
        data: {
          ...baseData,
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      },
      {
        name: "开关",
        code: "switch",
        icon: "/static/img/configur/switch.png",
        data: {
          ...baseData,
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: "",
          height: "",
          content: "00.00",
          scaleable: false //是否可缩放操作
        }
      }
    ]
  },
  {
    code: "component",
    icon: "el-icon-s-ticket",
    name: "组件",
    comList: [
      {
        name: "视频",
        code: "video",
        icon: "/static/img/configur/video.png",
        data: {
          ...baseData,
          src:
            "https://www.apple.com/105/media/us/iphone-x/2017/01df5b43-28e4-4848-bf20-490c34a926a7/films/feature/iphone-x-feature-tpl-cc-us-20170912_1280x720h.mp4",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // backgroundImage: "",
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "repeat",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          controls: false,
          autoplay: false,
          loop: false,
          muted: false,
          preload: false,
          poster: "",
          width: 480,
          height: 280
          // rotate: 0,
          // top: 0,
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "地图",
        code: "map",
        icon: "/static/img/configur/position.png",
        data: {
          ...baseData,
          // backgroundImage: "",
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "repeat",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 550,
          height: 400
          // rotate: 0,
          // top: 0,
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "折线图",
        code: "lineChart",
        icon: "/static/img/configur/curve.png",
        data: {
          ...baseData,
          // backgroundImage: "",
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "repeat",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 400,
          height: 300,
          dataType: "device"
          // rotate: 0,
          // top: 0,
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "柱状图",
        code: "barChart",
        icon: "/static/img/configur/bar.jpg",
        data: {
          ...baseData,
          // backgroundImage: "",
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "repeat",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 400,
          height: 300,
          dataType: "device"
          // rotate: 0,
          // top: 0,
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "饼图",
        code: "pieChart",
        icon: "/static/img/configur/piechart.jpg",
        data: {
          // backgroundImage: "",
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "repeat",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 500,
          height: 300,
          dataType: "device"
          // rotate: 0,
          // top: 0,
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "仪表盘",
        code: "gaugeChart",
        icon: "/static/img/configur/meter.png",
        data: {
          ...baseData,
          // backgroundImage: "",
          // backgroundSize: "100% 100%",
          // backgroundRepeat: "repeat",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 400,
          height: 300,
          dataType: "device"
          // rotate: 0,
          // top: 0,
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      }
      // {
      //   name: "散点图",
      //   code: "scatter",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "地理坐标图",
      //   code: "geomap",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "K线图",
      //   code: "candlestick",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "雷达图",
      //   code: "radar",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "盒须图",
      //   code: "boxplot",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "热力图",
      //   code: "heatmap",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "关系图",
      //   code: "graph",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "路径图",
      //   code: "lines",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "树图",
      //   code: "tree",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "矩形树图",
      //   code: "treemap",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "旭日图",
      //   code: "sunburst",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "平行坐标系图",
      //   code: "parallel",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "桑基图",
      //   code: "sankey",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "漏斗图",
      //   code: "funnel",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "象形柱图",
      //   code: "text",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
      // {
      //   name: "象形柱图",
      //   code: "text",
      //   icon: "/static/img/configur/dataing.png",
      //   data: {
      //     borderWidth: 0,
      //     borderStyle: "none",
      //     borderColor: "",
      //     opacity:100,
      //     left: 0,
      //     width: 300,
      //     height: 60,
      //     rotate: 0,
      //     top: 0,
      //     scaleable: true, //是否可缩放操作
      //     rotateable: true, //是否可旋转操作
      //     editable: false, //内容是否可编辑
      //     dragable: true //是否可拖动
      //   }
      // },
    ]
  },
  {
    code: "device",
    icon: "el-icon-setting",
    name: "设备",
    comList: [
      {
        name: "电表",
        code: "deviceCommon",
        icon: "/static/img/configur/db.png",
        data: {
          ...baseData,
          backgroundImage: "/static/img/svg/db.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 50,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "单项导轨电表",
        code: "deviceCommon",
        icon: "/static/img/configur/dxdgdb.png",
        data: {
          ...baseData,
          backgroundImage: "/static/img/svg/dxdgdb.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 50,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "I/O控制模块",
        code: "deviceCommon",
        icon: "/static/img/configur/iokzmk.png",
        data: {
          ...baseData,
          backgroundImage: "/static/img/svg/iokzmk.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 50,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "断路器",
        code: "deviceCommon",
        icon: "/static/img/configur/dlq.png",
        data: {
          ...baseData,
          backgroundImage: "/static/img/svg/duanluqi.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 50,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "壁挂式电表",
        code: "deviceCommon",
        icon: "/static/img/configur/bgsdb.png",
        data: {
          ...baseData,
          backgroundImage: "/static/img/svg/bgsdb.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 50,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "接地刀闸",
        code: "deviceCommon",
        icon: "/static/img/configur/jddz.png",
        data: {
          ...baseData,
          backgroundImage: "/static/img/svg/jddz.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 50,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "电力电容器",
        code: "deviceCommon",
        icon: "/static/img/configur/dldrq.png",
        data: {
          backgroundImage: "/static/img/svg/dldrq.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 50,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "变压器",
        code: "deviceCommon",
        icon: "/static/img/configur/byq.png",
        data: {
          backgroundImage: "/static/img/svg/byq.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 50,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "螺翼式水表",
        code: "deviceCommon",
        icon: "/static/img/configur/lyssb.png",
        data: {
          backgroundImage: "/static/img/svg/lyssb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "阀控水表",
        code: "deviceCommon",
        icon: "/static/img/configur/sbfk.png",
        data: {
          backgroundImage: "/static/img/svg/fksb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "旋翼式水表",
        code: "deviceCommon",
        icon: "/static/img/configur/xyssb.png",
        data: {
          backgroundImage: "/static/img/svg/xyssb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "超时波流量计",
        code: "deviceCommon",
        icon: "/static/img/configur/csbllj.png",
        data: {
          backgroundImage: "/static/img/svg/csbllj.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "插卡式水表",
        code: "deviceCommon",
        icon: "/static/img/configur/ckssb.png",
        data: {
          backgroundImage: "/static/img/svg/ckssb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "生活水泵",
        code: "deviceCommon",
        icon: "/static/img/configur/shsb.png",
        data: {
          backgroundImage: "/static/img/svg/shsb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "集水井",
        code: "deviceCommon",
        icon: "/static/img/configur/jsj.png",
        data: {
          backgroundImage: "/static/img/svg/jsj.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水箱",
        code: "deviceCommon",
        icon: "/static/img/configur/sx.png",
        data: {
          backgroundImage: "/static/img/svg/sx.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "消防水泵",
        code: "deviceCommon",
        icon: "/static/img/configur/xfsb.png",
        data: {
          backgroundImage: "/static/img/svg/xfsb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "抽烟风机",
        code: "deviceCommon",
        icon: "/static/img/configur/cyfj.png",
        data: {
          backgroundImage: "/static/img/svg/cyfj.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "正压送风机",
        code: "deviceCommon",
        icon: "/static/img/configur/zysfj.png",
        data: {
          backgroundImage: "/static/img/svg/zysfj.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "蓄水装置",
        code: "deviceCommon",
        icon: "/static/img/configur/xszz.png",
        data: {
          backgroundImage: "/static/img/svg/xszz.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "手动水阀",
        code: "deviceCommon",
        icon: "/static/img/configur/sdsf.png",
        data: {
          backgroundImage: "/static/img/svg/sdsf.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "集水器",
        code: "deviceCommon",
        icon: "/static/img/configur/jsq.png",
        data: {
          backgroundImage: "/static/img/svg/jsq.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 30,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "分水器",
        code: "deviceCommon",
        icon: "/static/img/configur/fsq.png",
        data: {
          backgroundImage: "/static/img/svg/fsq.svg",
          // borderWidth: 0,
          // borderStyle: "none",
          // borderColor: "",
          // borderRadius: 0,
          // scale: "scale(1,1)",
          // opacity: 100,
          // left: 0,
          width: 50,
          height: 30,
          dataType: "device",
          // rotate: 0,
          // top: 0,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "开关",
        code: "deviceCommon",
        icon: "/static/img/configur/kg.png",
        data: {
          ...baseData,
          backgroundImage: "/static/img/svg/kg.svg",
          backgroundImageOn: "/static/img/svg/kg-on.svg",
          width: 50,
          height: 50,
          equalScaleable: true //是否等比例缩放
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // dragable: true //是否可拖动
        }
      },
      {
        name: "灯管",
        code: "deviceCommon",
        icon: "/static/img/configur/dengg.png",
        data: {
          backgroundImage: "/static/img/svg/dengg.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 20,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "灯泡",
        code: "deviceCommon",
        icon: "/static/img/configur/dengp.png",
        data: {
          backgroundImage: "/static/img/svg/dengp.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 20,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "整体式热量表",
        code: "deviceCommon",
        icon: "/static/img/configur/ztsrlb.png",
        data: {
          backgroundImage: "/static/img/svg/ztsrlb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "组合式热量表",
        code: "deviceCommon",
        icon: "/static/img/configur/zhsrlb.png",
        data: {
          backgroundImage: "/static/img/svg/zhsrlb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "挂式空调",
        code: "deviceCommon",
        icon: "/static/img/configur/gskt.png",
        data: {
          backgroundImage: "/static/img/svg/gskt.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "立式空调",
        code: "deviceCommon",
        icon: "/static/img/configur/lskt.png",
        data: {
          backgroundImage: "/static/img/svg/lskt.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 70,
          height: 160,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "风冷热器",
        code: "deviceCommon",
        icon: "/static/img/configur/flrb.png",
        data: {
          backgroundImage: "/static/img/svg/flrq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "板式换热器",
        code: "deviceCommon",
        icon: "/static/img/configur/bshrq.png",
        data: {
          backgroundImage: "/static/img/svg/bshrq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "冷却塔",
        code: "deviceCommon",
        icon: "/static/img/configur/lqt.png",
        data: {
          backgroundImage: "/static/img/svg/lqt.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 150,
          height: 150,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "排风机",
        code: "deviceCommon",
        icon: "/static/img/configur/pfj.png",
        data: {
          backgroundImage: "/static/img/svg/pfj.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "燃气锅炉",
        code: "deviceCommon",
        icon: "/static/img/configur/rqgl.png",
        data: {
          backgroundImage: "/static/img/svg/rqgl.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 70,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "湿式报警阀",
        code: "deviceCommon",
        icon: "/static/img/configur/ssbjf.png",
        data: {
          backgroundImage: "/static/img/svg/ssbjf.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "烟雾报警传感器",
        code: "deviceCommon",
        icon: "/static/img/configur/ywbjcgq.png",
        data: {
          backgroundImage: "/static/img/svg/ywbjcgq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "红外人体感应器",
        code: "deviceCommon",
        icon: "/static/img/configur/hwrtgyq.png",
        data: {
          backgroundImage: "/static/img/svg/hwrtgyq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "摄像头",
        code: "deviceCommon",
        icon: "/static/img/configur/sxt.png",
        data: {
          backgroundImage: "/static/img/svg/sxt.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "门磁报警器",
        code: "deviceCommon",
        icon: "/static/img/configur/mcbjq.png",
        data: {
          backgroundImage: "/static/img/svg/mcbjq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "漏水报警器",
        code: "deviceCommon",
        icon: "/static/img/configur/lsbjq.png",
        data: {
          backgroundImage: "/static/img/svg/lsbjq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "光伏电池板",
        code: "deviceCommon",
        icon: "/static/img/configur/gfdcb.png",
        data: {
          backgroundImage: "/static/img/svg/gfdcb.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "光伏逆变器",
        code: "deviceCommon",
        icon: "/static/img/configur/gfnbq.png",
        data: {
          backgroundImage: "/static/img/svg/gfnbq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "拉绳式测距",
        code: "deviceCommon",
        icon: "/static/img/configur/lsscj.png",
        data: {
          backgroundImage: "/static/img/svg/lsscj.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "超声波测距",
        code: "deviceCommon",
        icon: "/static/img/configur/csbcj.png",
        data: {
          backgroundImage: "/static/img/svg/csbcj.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "液晶屏传感器",
        code: "deviceCommon",
        icon: "/static/img/configur/hjjccgqa.png",
        data: {
          backgroundImage: "/static/img/svg/yjpcgq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "传感器",
        code: "deviceCommon",
        icon: "/static/img/configur/hjjccgqb.png",
        data: {
          backgroundImage: "/static/img/svg/cgq.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "小型气象站",
        code: "deviceCommon",
        icon: "/static/img/configur/xxqxz.png",
        data: {
          backgroundImage: "/static/img/svg/xxqxz.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 50,
          height: 50,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "客用电梯",
        code: "deviceCommon",
        icon: "/static/img/configur/kydt.png",
        data: {
          backgroundImage: "/static/img/svg/kydt.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 100,
          height: 140,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      }
    ]
  },
  {
    code: "assist",
    icon: "el-icon-files",
    name: "辅助",
    comList: [
      {
        name: "连接点",
        alias: "linkPoint",
        code: "assistCommon",
        icon: "/static/img/configur/link-point.png",
        data: {
          backgroundImage: "/static/img/svg/link-point.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: false, //是否等比例缩放
          scaleable: false, //是否可缩放操作
          rotateable: false, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（上）",
        code: "assistCommon",
        alias: "water_top",
        icon: "/static/img/configur/h-top.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-top.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（下）",
        code: "assistCommon",
        alias: "water_bottom",
        icon: "/static/img/configur/h-bottom.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-bottom.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（左）",
        code: "assistCommon",
        alias: "water_left",
        icon: "/static/img/configur/v-left.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-left.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（右）",
        code: "assistCommon",
        alias: "water_right",
        icon: "/static/img/configur/v-right.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-right.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（左上）",
        code: "assistCommon",
        alias: "water_lefttop",
        icon: "/static/img/configur/t-1.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-topleft.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（左下）",
        alias: "water_leftbottom",
        code: "assistCommon",
        icon: "/static/img/configur/t-4.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-bottomleft.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（右上）",
        alias: "water_righttop",
        code: "assistCommon",
        icon: "/static/img/configur/t-2.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-topright.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（右下）",
        alias: "water_rightbottom",
        code: "assistCommon",
        icon: "/static/img/configur/t-3.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-bottomright.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: true, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（水平）",
        alias: "water_horizontal",
        code: "assistCommon",
        icon: "/static/img/configur/h.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-h.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 150,
          height: 30,
          rotate: 0,
          top: 0,
          equalScaleable: false, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "水管（垂直）",
        code: "assistCommon",
        alias: "water_vertical",
        icon: "/static/img/configur/v.png",
        data: {
          backgroundImage: "/static/img/svg/shuiguan-v.svg",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          borderRadius: 0,
          scale: "scale(1,1)",
          opacity: 100,
          left: 0,
          width: 30,
          height: 150,
          rotate: 0,
          top: 0,
          equalScaleable: false, //是否等比例缩放
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      }
    ]
  }
];
