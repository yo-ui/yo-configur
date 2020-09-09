
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
          backgroundImage: "",
          backgroundSize: "100% 100%",
          backgroundRepeat: "repeat",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          left: 0,
          fontWeight: "",
          textDecoration: "",
          fontStyle: "",
          fontSize: 24,
          opacity:100,
          fontFamily: "",
          width: 300,
          height: 60,
          rotate: 0,
          scale: "scale(1,1)",
          top: 0,
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "动态数据",
        code: "dynamicText",
        icon: "/static/img/configur/text.png",
        data: {
          backgroundImage: "",
          backgroundSize: "100% 100%",
          backgroundRepeat: "repeat",
          fontWeight: "bold",
          textDecoration: "",
          fontStyle: "",
          fontSize: 24,
          fontFamily: "lcdD",
          originWidth: "", //原宽
          originHeight: "", //原高
          width: "",
          opacity:100,
          height: "",
          scale: "scale(1,1)",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          left: 0,
          top: 0,
          content: "00.00",
          scaleable: false, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        code: "image",
        name: "图片",
        icon: "/static/img/configur/img.png",
        data: {
          backgroundImage: "",
          backgroundSize: "100% 100%",
          backgroundRepeat: "repeat",
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          rotate: 0,
          scale: "scale(1,1)",
          width: 360,
          height: 220,
          left: 0,
          opacity:100,
          top: 0,
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "按钮",
        code: "button",
        icon: "/static/img/configur/button.png",
        data: {
          backgroundColor: "#fff",
          color: "#fff",
          borderColor: "#eee",
          borderStyle: "solid",
          borderRadius: 20,
          borderWidth: 1,
          fontWeight: "",
          textDecoration: "",
          fontStyle: "",
          fontSize: 14,
          fontFamily: "",
          backgroundImage: "",
          left: 500,
          width: "",
          height: "",
          rotate: 0,
          top: 0,
          opacity:100,
          content: "控制",
          scaleable: false, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "显示屏",
        code: "display",
        icon: "/static/img/configur/display.png",
        data: {
          content: "00.00",
          fontWeight: "bold",
          textDecoration: "",
          fontStyle: "",
          opacity:100,
          fontSize: 18,
          fontFamily: "lcdD",
          originWidth: "", //原宽
          originHeight: "", //原高
          left: 0,
          width: 75,
          height: 36,
          rotate: 0,
          top: 0,
          scaleable: false, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "块状",
        code: "block",
        icon: "/static/img/configur/text.png",
        data: {
          borderColor: "#eee",
          borderStyle: "solid",
          borderRadius: 0,
          borderWidth: 1,
          opacity:100,
          originWidth: "", //原宽
          originHeight: "", //原高
          width: "",
          height: "",
          left: 0,
          rotate: 0,
          top: 0,
          scaleable: false, //是否可缩放操作
          rotateable: false, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
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
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          opacity:100,
          left: 0,
          width: 480,
          height: 280,
          rotate: 0,
          top: 0,
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "地图",
        code: "map",
        icon: "/static/img/configur/position.png",
        data: {
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          opacity:100,
          left: 0,
          width: 400,
          height: 300,
          rotate: 0,
          top: 0,
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "折线图",
        code: "line",
        icon: "/static/img/configur/curve.png",
        data: {
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          opacity:100,
          left: 0,
          width: 300,
          height: 60,
          rotate: 0,
          top: 0,
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "柱状图",
        code: "bar",
        icon: "/static/img/configur/bar.jpg",
        data: {
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          opacity:100,
          left: 0,
          width: 300,
          height: 60,
          rotate: 0,
          top: 0,
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
      {
        name: "饼图",
        code: "pie",
        icon: "/static/img/configur/piechart.jpg",
        data: {
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          opacity:100,
          left: 0,
          width: 300,
          height: 60,
          rotate: 0,
          top: 0,
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
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
      {
        name: "仪表盘",
        code: "gauge",
        icon: "/static/img/configur/meter.png",
        data: {
          borderWidth: 0,
          borderStyle: "none",
          borderColor: "",
          opacity:100,
          left: 0,
          width: 300,
          height: 60,
          rotate: 0,
          top: 0,
          scaleable: true, //是否可缩放操作
          rotateable: true, //是否可旋转操作
          editable: false, //内容是否可编辑
          dragable: true //是否可拖动
        }
      },
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
    name: "设备"
  },
  {
    code: "additional",
    icon: "el-icon-files",
    name: "附加"
  }
]