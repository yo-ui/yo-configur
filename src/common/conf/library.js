import bmCommon from "@/common/common";
let animation = {
  name: "",
  direction: "normal",
  duration: 0.8,
  iterationCount: 1
};
let shadow = {
  color: "#eee",
  x: 0, //X偏移量
  y: 0, //Y偏移量
  blur: 0, //模糊半径
  spread: 0, //阴影大小
  type: "" //阴影类型 //空为外阴影  inset 为内阴影
};
let textShadow = {
  color: "#eee",
  x: 0, //X偏移量
  y: 0, //Y偏移量
  blur: 0 //模糊半径
};
let gradientStyle = {
  type: "linear", //渐变类型  linear 线性  radial 径向
  angle: 0,
  center: "50% 50%",
  values: [0, 100],
  radialShape: "circle",
  valueIndex: 0,
  gradientId: "",
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
};
let bindData = {
  devicePoint: "", //点位
  deviceId: "", //设备id
  orgId: "", //组织id
  x: "", //x 坐标
  y: "", //y 坐标
  height: "", //高
  width: "", //宽
  visible: "", //显隐
  rotate: "", //旋转角度
  tagList: "", //标签 key
  content: "", //读取值 key
  writeContent: "" //写入值 key
};
let baseData = {
  backgroundImage: "",
  backgroundSize: "100% 100%",
  backgroundColor: "",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  borderWidth: 1,
  comName: "", //
  order: "",
  borderStyle: "none",
  borderColor: "#000",
  borderRadius: 0,
  borderRadiusTopLeft: 0,
  borderRadiusTopRight: 0,
  borderRadiusBottomLeft: 0,
  borderRadiusBottomRight: 0,
  scale: "scale(1,1)",
  showCoverStatus: true, //默认显示覆盖层
  left: 0,
  content: "",
  name: "文本标题",
  dataType: "", //绑定数据类型  device point
  styleCode: "", //样式组件代码
  dataCode: "common", //数据绑定组件代码
  bindData, //绑定的数据
  animation,
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
  shadow,
  textShadowable: false,
  textShadow,
  backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
  gradientStyle,
  equalScaleable: false, //是否等比例缩放
  scaleable: true, //是否可缩放操作
  rotateable: true, //是否可旋转操作
  editable: false, //内容是否可编辑
  locked: false, //是否锁定
  visible: true, //是否可见
  flipV: false, //是否垂直翻转
  flipH: false, //是否水平翻转
  descrStyle: {
    showCode: false, //是否显示代码
    formatNum: 2, //显示字符位数
    fontSize: 10,
    color: "#fff",
    left: 8,
    top: 22,
    fontFamily: "OPPOSans-M",
    textShadow,
    textShadowable: false
  },
  unitStyle: {
    fontSize: 10,
    color: "#fff",
    left: 49,
    top: 22,
    fontFamily: "OPPOSans-M",
    textShadow,
    textShadowable: false
  },
  valueStyle: {
    decimal: 1, //小数位
    fontSize: 19,
    color: "#fff",
    left: 11,
    top: 44,
    fontFamily: "OPPOSans-H",
    textShadow,
    textShadowable: false
  }
};
let componentLibrary = [
  {
    name: "通用",
    code: "basic",
    icon: "el-icon-s-grid",
    comList: [
      {
        name: "静态文本",
        code: "text",
        icon: "/static/img/configur/dataing.png",
        data: {
          ...baseData,
          content: "静态文本",
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
          width: 100,
          height: 40,
          // rotate: 0,
          // top: 0,
          // scaleable: true, //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          editable: true //内容是否可编辑
          // locked: true //是否可拖动
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
          decimal: 1, //小数位
          // textDecoration: "",
          // fontStyle: "",
          fontSize: 24,
          fontFamily: "lcdD",
          // originWidth: "", //原宽
          // originHeight: "", //原高
          width: 100,
          height: 40,
          // opacity: 100,
          // left: 0,
          // top: 0,
          content: "00.00",
          unit: "℃",
          unitFontFamily: "lcdD",
          unitFontSize: 10,
          unitColor: "#999"
          // scaleable: false //是否可缩放操作
          // rotateable: true, //是否可旋转操作
          // editable: false, //内容是否可编辑
          // locked: true //是否可拖动
        }
      },
      {
        code: "image",
        name: "图片",
        icon: "/static/img/configur/img.png",
        data: {
          ...baseData,
          width: 160,
          height: 160,
          isAssignUrl: false,
          content: "",
          contentRepeat: "",
          contentSize: ""
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
          infoType: "device",
          backgroundColor: "#4195ea",
          width: 75,
          height: 35,
          content: "控制",
          textAlign: "center"
          // scaleable: false //是否可缩放操作
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
          textAlign: "center",
          width: 75,
          decimal: 1, //小数位
          height: 36,
          unit: "℃",
          unitFontFamily: "lcdD",
          unitFontSize: 10,
          unitColor: "#fff"
          // scaleable: false //是否可缩放操作
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
          content: "0.00",
          unit: "",
          pointName: "",
          width: 145,
          height: 60
          // scaleable: false, //是否可缩放操作
          // rotateable: false //是否可旋转操作
        }
      },
      {
        name: "横向滚动文本",
        code: "vScrollText",
        icon: "/static/img/configur/announcement.png",
        // comDisabled: true, //组件不可用
        data: {
          ...baseData,
          scrollTime: 8000, //滚动持续时间
          stayTime: 3000, //首尾停留时间
          content:
            "组态支持横向滚动的公告组件了！这条公告会循环滚动播放，您可以使用它来公布一些信息。它也可以绑定数据源从而动态显示信息。"
        }
      },
      {
        name: "纵向滚动文本",
        code: "hScrollText",
        icon: "/static/img/configur/announcement.png",
        // comDisabled: true, //组件不可用
        data: {
          ...baseData,
          scrollTime: 500, //滚动持续时间
          lineTime: 3000, //每行停留时间
          stayTime: 3000, //首尾停留时间
          lineHeight: 30, //每行高度
          contentList: [
            {
              text: "组态支持纵向滚动的公告组件了！"
            },
            {
              text: "这些公告会自动滚动，循环播放。"
            },
            {
              text: "您可以用它来公布一系列的信息"
            },
            {
              text: "也可以绑定到数据源的某一列上"
            }
          ]
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
          content: "多行文本",
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
        // comDisabled: true, // 组件是否可用
        data: {
          ...baseData,
          originWidth: "", //原宽
          originHeight: "", //原高
          width: "",
          height: "",
          fontSize: 28,
          color: "#000",
          fontFamily: "Impact",
          integer: 6, //整数位
          integerSeat: "#", // 空白  0  #  整数位补足符号
          decimal: 4, //小数位
          decimalSeat: "0", //  0  #  小数位补足符号
          // scaleable: false,
          content: 100.1, //数值
          board: {
            width: 20,
            height: 30,
            // fontSize: 28,
            // distance: 8, //卡片间距
            textAlign: "center",
            // fontFamily: "Impact",
            backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
            backgroundColor: "#4195ea",
            gradientStyle,
            marginTop: 0,
            shadowable: false,
            shadow,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 8,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            borderRadiusTopLeft: 0,
            borderRadiusTopRight: 0,
            borderRadiusBottomLeft: 0,
            borderRadiusBottomRight: 0,
            borderWidth: 1,
            borderStyle: "none",
            borderColor: "#ccc"
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
          width: 200,
          format: "YYYY-MM-DD HH:mm:ss",
          height: 50,
          textAlign: "center"
          // content: "00.00"
          // scaleable: false //是否可缩放操作
        }
      },
      {
        name: "指南针",
        code: "compass",
        icon: "/static/img/configur/compass.png",
        data: {
          ...baseData,
          // dataType: "point",
          width: 100,
          height: 100,
          equalScaleable: true //是否等比缩放
        }
      },
      {
        name: "指南针1",
        code: "compass1",
        icon: "/static/img/configur/compass1.png",
        data: {
          ...baseData,
          // dataType: "point",
          width: 100,
          height: 100,
          equalScaleable: true //是否等比缩放
        }
      },
      {
        name: "倒计时",
        code: "countdownText",
        icon: "/static/img/configur/timeclock.png",
        data: {
          ...baseData,
          content: 100, //100s
          format: "{dd}天{hh}小时{mm}分{ss}秒",
          // dataType: "point",
          fontWeight: "bold",
          fontSize: 24,
          fontFamily: "lcdD",
          width: 300,
          height: 35
          // scaleable: false //是否可缩放操作
        }
      },
      {
        name: "轮播图文",
        code: "swiperText",
        icon: "/static/img/configur/imageList.png",
        comDisabled: true, //组件不可用
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
        name: "视频",
        code: "video",
        icon: "/static/img/configur/video.png",
        data: {
          ...baseData,
          src: "/static/video/video.mp4",
          controls: true,
          autoplay: false,
          loop: false,
          muted: false,
          preload: false,
          poster: "",
          width: 480,
          height: 280
        }
      },
      {
        name: "HLS视频流",
        code: "hlsVideo",
        icon: "/static/img/configur/videostreaming.png",
        data: {
          ...baseData,
          src: "http://192.168.0.134/hls/test.m3u8",
          dataType: "device",
          // infoType: "device",
          width: 480,
          height: 280,
          autoplay: false,
          // loop: false,
          muted: false
        }
      },
      {
        name: "百分比条",
        code: "progressbar",
        icon: "/static/img/configur/percentagebar.png",
        // comDisabled: true, // 组件是否可用
        data: {
          ...baseData,
          // dataType: "point",
          // fontWeight: "bold",
          progressBackgroundColor: "#1f2e50",
          progressForegroundColor: "#1775ea",
          sliderBackgroundColor: "#fff",
          fontSize: 16,
          start: 0,
          end: 100,
          content: 75,
          lineWidth: 10, //百分比条宽
          showTag: true, //显示标记
          showPercent: true, //显示百分比
          gradientValue: 3, //渐变程度
          // fontFamily: "lcdD",
          width: 500,
          height: 30
          // content: "00.00",
          // scaleable: false //是否可缩放操作
        }
      },
      {
        name: "iframe",
        code: "iframe",
        icon: "/static/img/configur/iframe.png",
        // comDisabled: true, //组件不可用
        data: {
          ...baseData,
          // dataType: "point",
          // fontWeight: "bold",
          // fontSize: 24,
          // fontFamily: "lcdD",
          content: "https://www.energyiot.cn",
          width: 500,
          height: 500
          // content: "00.00",
          // scaleable: false //是否可缩放操作
        }
      },
      {
        name: "下拉筛选框",
        code: "select",
        icon: "/static/img/configur/select.png",
        // comDisabled: true, //组件不可用
        data: {
          ...baseData,
          // dataType: "point",
          fontWeight: "bold",
          // fontSize: 24,
          // fontFamily: "lcdD",
          width: 160,
          height: 30,
          content: "a",
          textIndent: 10,
          borderStyle: "solid",
          borderColor: "#ccc",
          //箭头
          arrow: {
            status: true,
            fontWeight: "bold",
            marginRight: 11,
            fontSize: 16,
            color: "#333"
          },
          // input: {
          //   // height: 40, //按钮高度
          //   // width: 80, //按钮宽度
          //   color: "#333",
          //   fontFamily: "",
          //   fontSize: 14,
          //   fontWeight: "",
          //   fontStyle: "",
          //   textDecoration: "",
          //   textAlign: "center",
          //   textShadowable: false,
          //   textShadow,
          //   marginTop: 0,
          //   marginBottom: 0,
          //   marginLeft: 0,
          //   marginRight: 0,
          //   paddingTop: 0,
          //   paddingBottom: 0,
          //   paddingLeft: 0,
          //   paddingRight: 0,
          //   backgroundColor: "#fff",
          //   backgroundImage: "",
          //   backgroundRepeat: "",
          //   backgroundSize: "",
          //   backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
          //   gradientStyle,
          //   borderRadiusTopLeft: 0,
          //   borderRadiusTopRight: 0,
          //   borderRadiusBottomLeft: 0,
          //   borderRadiusBottomRight: 0,
          //   borderWidth: 1,
          //   borderStyle: "solid",
          //   borderColor: "#ccc",
          //
          // },
          select: {
            // color: "#fff",
            // backgroundColor: "#4195ea",
            // textShadowable: false,
            // textShadow,
            showable: false, //默认显示
            shadowable: false,
            shadow,
            arrowStatus: true,
            arrowColor: "#fff",
            // fontFamily: "",
            // fontSize: 14,
            // fontWeight: "",
            // fontStyle: "",
            // textDecoration: "",
            // backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
            // gradientStyle,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            maxHeight: 200,
            borderStyle: "none",
            borderWidth: 1,
            borderRadius: 0,
            borderColor: "#4195ea"
          },
          option: {
            height: 30, //按钮高度
            // width: 80, //按钮宽度
            textIndent: 10,
            color: "#333",
            fontFamily: "",
            fontSize: 14,
            fontWeight: "",
            fontStyle: "",
            textDecoration: "",
            textAlign: "center",
            textShadowable: false,
            textShadow,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColor: "#fff",
            backgroundImage: "",
            backgroundRepeat: "",
            backgroundSize: "",
            backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
            gradientStyle,
            borderRadiusTopLeft: 0,
            borderRadiusTopRight: 0,
            borderRadiusBottomLeft: 0,
            borderRadiusBottomRight: 0,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#ccc"
          },
          optionHover: {
            color: "#fff",
            backgroundColor: "#4195ea",
            // textShadowable: false,
            // textShadow,
            // fontFamily: "",
            // fontSize: 14,
            // fontWeight: "",
            // fontStyle: "",
            // textDecoration: "",
            backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
            gradientStyle
            // borderColor: "#4195ea"
          },
          optionActive: {
            color: "#fff",
            backgroundColor: "#4195ea",
            // textShadowable: false,
            // textShadow,
            // fontFamily: "",
            // fontSize: 14,
            // fontWeight: "",
            // fontStyle: "",
            // textDecoration: "",
            backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
            gradientStyle
            // borderColor: "#4195ea"
          },
          contentList: [
            {
              text: "标签A",
              value: "a"
            },
            {
              text: "标签B",
              value: "b"
            },
            {
              text: "标签C",
              value: "c"
            }
          ]
        }
      },
      {
        name: "按钮标签",
        code: "buttontab",
        // comDisabled: true, //组件不可用
        icon: "/static/img/configur/buttontab.png",
        data: {
          ...baseData,
          dataCode: "buttontab",
          // dataType: "point",
          // fontWeight: "bold",
          // fontSize: 24,
          // fontFamily: "lcdD",
          width: 240,
          height: 40,
          content: "b",
          button: {
            height: 40, //按钮高度
            width: 80, //按钮宽度
            color: "#333",
            fontFamily: "",
            fontSize: 14,
            fontWeight: "",
            fontStyle: "",
            textDecoration: "",
            textAlign: "center",
            textShadowable: false,
            textShadow,
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColor: "#fff",
            backgroundImage: "",
            backgroundRepeat: "",
            backgroundSize: "",
            backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
            gradientStyle,
            borderRadiusTopLeft: 0,
            borderRadiusTopRight: 0,
            borderRadiusBottomLeft: 0,
            borderRadiusBottomRight: 0,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#ccc"
          },
          buttonActive: {
            color: "#fff",
            backgroundColor: "#4195ea",
            textShadowable: false,
            textShadow,
            fontFamily: "",
            fontSize: 14,
            fontWeight: "",
            fontStyle: "",
            textDecoration: "",
            backgroundType: "purity", //纯色和渐变色 purity  纯色  gradients 渐变色
            gradientStyle,
            borderColor: "#4195ea"
          },
          contentList: [
            {
              text: "标签A",
              value: "a"
            },
            {
              text: "标签B",
              value: "b"
            },
            {
              text: "标签C",
              value: "c"
            }
          ]
          // scaleable: false //是否可缩放操作
        }
      },
      {
        name: "开关",
        code: "switch",
        icon: "/static/img/configur/switch.png",
        data: {
          ...baseData,
          dataType: "point",
          // content: false,
          width: 80,
          height: 35,
          // activeColor:'#13ce66',
          // inactiveColor:'#ff4949',
          closeText: "关",
          openText: "开",
          closeColor: "#fff",
          openColor: "#fff",
          inactiveColor: "#aaa",
          activeColor: "#108cee",
          gradientStyle: {},
          closeSliderColor: "#fff",
          openSliderColor: "#fff",
          sliderBorderWidth: 0,
          sliderBorderColor: "",
          sliderBorderStyle: "none",

          fontWeight: "bold",
          fontSize: 24,
          borderRadiusTopLeft: 18,
          borderRadiusTopRight: 18,
          borderRadiusBottomLeft: 18,
          borderRadiusBottomRight: 18
          // fontFamily: "lcdD"
          // width: "",
          // height: "",
          // content: "00.00",
          // scaleable: false //是否可缩放操作
        }
      },
      {
        name: "自动手动",
        code: "amt",
        icon: "/static/img/configur/amt.svg",
        data: {
          ...baseData,
          dataType: "point",
          width: 87,
          height: 26
        }
      },
      {
        name: "启停",
        code: "startStop",
        icon: "/static/img/configur/start-stop.svg",
        data: {
          ...baseData,
          dataType: "point",
          // content: false,
          width: 87,
          height: 26
        }
      },
      {
        name: "报警",
        code: "alarm",
        icon: "/static/img/configur/alarm.svg",
        data: {
          ...baseData,
          dataType: "point",
          // content: false,
          width: 46,
          height: 26
        }
      },
      {
        name: "故障",
        code: "fault",
        icon: "/static/img/configur/fault.svg",
        data: {
          ...baseData,
          dataType: "point",
          // content: false,
          width: 46,
          height: 26
        }
      }
    ]
  },
  {
    code: "device",
    icon: "bomi bomi-device",
    name: "设备",
    activeNames: ["pipeline-system"],
    groupList: [
      {
        groupName: "管道",
        groupCode: "pipeline-system",
        // {
        //   code: "assist",
        //   icon: "el-icon-files",
        //   name: "辅助",
        comList: [
          // {
          //   name: "连接点",
          //   alias: "linkPoint",
          //   code: "assistCommon",
          //   icon: "/static/img/configur/link-point.png",
          //   data: {
          //     ...baseData,
          //     backgroundImage: "/static/img/svg/link-point.svg",
          //     width: 80,
          //     height: 80
          //   }
          // },
          {
            name: "水管（上）",
            // code: "deviceSgTop",
            code: "deviceCommon",
            alias: "water_top",
            icon: "/static/img/configur/h-top.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-top.svg",
              width: 40,
              height: 40
            }
          },
          {
            name: "水管（下）",
            // code: "deviceSgBottom",
            code: "deviceCommon",
            alias: "water_bottom",
            icon: "/static/img/configur/h-bottom.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-bottom.svg",
              width: 40,
              height: 40
            }
          },
          {
            name: "水管（左）",
            // code: "deviceSgLeft",
            code: "deviceCommon",
            alias: "water_left",
            icon: "/static/img/configur/v-left.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-left.svg",
              width: 40,
              height: 40
            }
          },
          {
            name: "水管（右）",
            // code: "deviceSgRight",
            code: "deviceCommon",
            alias: "water_right",
            icon: "/static/img/configur/v-right.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-right.svg",
              width: 40,
              height: 40
            }
          },
          {
            name: "水管（左上）",
            // code: "deviceSgLeftTop",
            code: "deviceCommon",
            alias: "water_lefttop",
            icon: "/static/img/configur/t-1.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-topleft.svg",
              width: 40,
              height: 40
            }
          },
          {
            name: "水管（左下）",
            alias: "water_leftbottom",
            // code: "deviceSgLeftBottom",
            code: "deviceCommon",
            icon: "/static/img/configur/t-4.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-bottomleft.svg",
              width: 40,
              height: 40
            }
          },
          {
            name: "水管（右上）",
            alias: "water_righttop",
            // code: "deviceSgRightTop",
            code: "deviceCommon",
            icon: "/static/img/configur/t-2.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-topright.svg",
              width: 40,
              height: 40
            }
          },
          {
            name: "水管（右下）",
            alias: "water_rightbottom",
            // code: "deviceSgRightBottom",
            code: "deviceCommon",
            icon: "/static/img/configur/t-3.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-bottomright.svg",
              width: 40,
              height: 40
            }
          },
          {
            name: "水管（水平）",
            alias: "water_horizontal",
            // code: "deviceCommon",
            code: "deviceCommon",
            icon: "/static/img/configur/h.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-h.svg",
              width: 75,
              height: 40
            }
          },
          {
            name: "水管（垂直）",
            code: "deviceCommon",
            alias: "water_vertical",
            icon: "/static/img/configur/v.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shuiguan-v.svg",
              width: 40,
              height: 75
            }
          }
        ]
        // }
      },
      {
        groupName: "配电系统",
        groupCode: "electricity-system",
        comList: [
          {
            name: "电表",
            code: "deviceDb",
            icon: "/static/img/configur/db.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/db.svg",
              width: 70,
              height: 69,
              dataType: "device",
              infoType: "device",
              equalScaleable: true //是否等比例缩放
            }
          },
          {
            name: "单项导轨电表",
            code: "deviceDxdgdb",
            alias: "dxdgdb",
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
              width: 64,
              height: 60,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "I/O控制模块",
            code: "deviceIokzmk",
            alias: "iokzmk",
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
              width: 53,
              height: 48,
              dataType: "device", // 数据绑定类型
              infoType: "device", // 信息展示处理
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "断路器",
            code: "deviceDuanluqi",
            alias: "dlq",
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
              width: 45,
              height: 45,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "壁挂式电表",
            code: "deviceBgsdb",
            alias: "bgsdb",
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
              width: 58,
              height: 75,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "接地刀闸",
            code: "deviceJddz",
            alias: "jddz",
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
              width: 70,
              height: 60,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "电力电容器",
            code: "deviceDldrq",
            alias: "dldrq",
            icon: "/static/img/configur/dldrq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/dldrq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 71,
              height: 64,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "变压器",
            code: "deviceByq",
            alias: "byq",
            icon: "/static/img/configur/byq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/byq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 90,
              height: 97,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          }
        ]
      },
      {
        groupName: "给水系统",
        groupCode: "water-system",
        comList: [
          {
            name: "螺翼式水表",
            code: "deviceLyssb",
            alias: "lyssb",
            icon: "/static/img/configur/lyssb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/lyssb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 72,
              height: 68,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "阀控水表",
            code: "deviceFksb",
            // code: "deviceFksb",
            alias: "fksb",
            icon: "/static/img/configur/fksb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/fksb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 97,
              height: 56,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "旋翼式水表",
            code: "deviceXyssb",
            alias: "xyssb",
            icon: "/static/img/configur/xyssb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/xyssb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 80,
              height: 55,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "超时波流量计",
            code: "deviceCsbllj",
            alias: "csbllj",
            icon: "/static/img/configur/csbllj.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/csbllj.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 52,
              height: 78,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "插卡式水表",
            code: "deviceCkssb",
            alias: "ckssb",
            icon: "/static/img/configur/ckssb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/ckssb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 88,
              height: 50,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "生活水泵",
            code: "deviceShsb",
            alias: "shsb",
            icon: "/static/img/configur/shsb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/shsb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device",
              width: 235,
              height: 171,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "集水井",
            code: "deviceJsj",
            alias: "jsj",
            icon: "/static/img/configur/jsj.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/jsj.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 324,
              height: 238,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "水箱",
            code: "deviceSx",
            alias: "sx",
            icon: "/static/img/configur/sx.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/sx.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 300,
              height: 275,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "消防水泵",
            code: "deviceXfsb",
            alias: "xfsb",
            icon: "/static/img/configur/xfsb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/xfsb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device",
              width: 152,
              height: 200,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "抽烟风机",
            code: "deviceCyfj",
            alias: "cyfj",
            icon: "/static/img/configur/cyfj.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/cyfj.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 346,
              height: 317,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "正压送风机",
            code: "deviceZysfj",
            alias: "zysfj",
            icon: "/static/img/configur/zysfj.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/zysfj.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device",
              width: 346,
              height: 317,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "蓄水装置",
            code: "deviceXszz",
            alias: "xszz",
            icon: "/static/img/configur/xszz.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/xszz.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 144,
              height: 300,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "手动水阀",
            code: "deviceSdsf",
            alias: "sdsf",
            icon: "/static/img/configur/sdsf.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/sdsf.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 94,
              height: 97,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "集水器",
            code: "deviceJsq",
            alias: "jsq",
            icon: "/static/img/configur/jsq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/jsq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 206,
              height: 104,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "分水器",
            code: "deviceFsq",
            alias: "fsq",
            icon: "/static/img/configur/fsq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/fsq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 206,
              height: 104,
              dataType: "device",
              infoType: "device",
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          }
        ]
      },
      {
        groupName: "照明系统",
        groupCode: "lighting-system",
        comList: [
          {
            name: "开关",
            code: "deviceKg",
            alias: "kg",
            icon: "/static/img/configur/kg.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/kg.svg",
              backgroundImageOn: "/static/img/svg/kg-on.svg",
              dataType: "device",
              infoType: "device",
              width: 43,
              height: 40,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "灯管",
            code: "deviceDengg",
            alias: "dengg",
            icon: "/static/img/configur/dengg.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/dengg.svg",
              dataType: "point",
              // infoType: "device",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 164,
              height: 30,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "灯泡",
            code: "deviceDengp",
            alias: "dengp",
            icon: "/static/img/configur/dengp.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/dengp.svg",
              dataType: "point",
              // infoType: "device", //显示详情组件前缀名
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 32,
              height: 50,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          }
        ]
      },
      {
        groupName: "空调系统",
        groupCode: "air-system",
        comList: [
          {
            name: "整体式热量表",
            code: "deviceZtsrlb",
            alias: "ztsrlb",
            icon: "/static/img/configur/ztsrlb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/ztsrlb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 60,
              height: 36,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "组合式热量表",
            code: "deviceZhsrlb",
            alias: "zhsrlb",
            icon: "/static/img/configur/zhsrlb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/zhsrlb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 82,
              height: 68,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "挂式空调",
            code: "deviceGskt",
            alias: "gskt",
            icon: "/static/img/configur/gskt.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/gskt.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 163,
              height: 64,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "立式空调",
            code: "deviceLskt",
            alias: "lskt",
            icon: "/static/img/configur/lskt.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/lskt.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 96,
              height: 228,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "风冷热器",
            code: "deviceFlrq",
            alias: "flrq",
            icon: "/static/img/configur/flrq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/flrq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device", //显示详情组件前缀名
              width: 400,
              height: 320,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "板式换热器",
            code: "deviceBshrq",
            alias: "bshrq",
            icon: "/static/img/configur/bshrq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/bshrq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 281,
              height: 260,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "冷却塔",
            code: "deviceLqt",
            alias: "lqt",
            icon: "/static/img/configur/lqt.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/lqt.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device", //显示详情组件前缀名
              width: 275,
              height: 315,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "排风机",
            code: "devicePfj",
            alias: "pfj",
            icon: "/static/img/configur/pfj.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/pfj.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device", //显示详情组件前缀名
              width: 200,
              height: 165,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "燃气锅炉",
            code: "deviceRqgl",
            alias: "rqgl",
            icon: "/static/img/configur/rqgl.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/rqgl.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device", //显示详情组件前缀名
              width: 606,
              height: 417,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "立式电锅炉",
            code: "deviceLsdgl",
            alias: "lsdgl",
            icon: "/static/img/configur/lsdgl.png",
            data: {
              ...baseData,
              dataType: "device",
              infoType: "device", //显示详情组件前缀名
              width: 100,
              height: 194,
              equalScaleable: true //是否等比例缩放
            }
          },
          {
            name: "新风控制器",
            code: "deviceXfkzq",
            alias: "xfkzq",
            icon: "/static/img/configur/xfkzq.svg",
            data: {
              ...baseData,
              dataType: "point",
              infoType: "device", //显示详情组件前缀名
              width: 85,
              height: 58,
              descrStyle: {
                showCode: false, //是否显示代码
                formatNum: 2, //显示字符位数
                fontSize: 10,
                color: "#fff",
                left: 8,
                top: 22,
                fontFamily: "OPPOSans-M",
                textShadow,
                textShadowable: false
              },
              unitStyle: {
                fontSize: 10,
                color: "#fff",
                left: 49,
                top: 22,
                fontFamily: "OPPOSans-M",
                textShadow,
                textShadowable: false
              },
              valueStyle: {
                decimal: 1, //小数位
                fontSize: 19,
                color: "#fff",
                left: 11,
                top: 44,
                fontFamily: "OPPOSans-H",
                textShadow,
                textShadowable: false
              }
              // equalScaleable: true //是否等比例缩放
            }
          },
          {
            name: "温控器",
            code: "deviceWkq",
            alias: "wkq",
            icon: "/static/img/configur/wkq.svg",
            data: {
              ...baseData,
              dataType: "point",
              infoType: "device", //显示详情组件前缀名
              width: 73,
              height: 65,
              descrStyle: {
                showCode: false, //是否显示代码
                formatNum: 2, //显示字符位数
                fontSize: 10,
                color: "#fff",
                left: 10,
                top: 22,
                fontFamily: "OPPOSans-M"
              },
              unitStyle: {
                fontSize: 10,
                color: "#fff",
                left: 54,
                top: 22,
                fontFamily: "OPPOSans-M"
              },
              valueStyle: {
                fontSize: 19,
                decimal: 1, //小数位
                color: "#fff",
                left: 15,
                top: 44,
                fontFamily: "OPPOSans-H"
              }
              // equalScaleable: true //是否等比例缩放
            }
          }
        ]
      },
      {
        groupName: "安防系统",
        groupCode: "security-system",
        comList: [
          {
            name: "湿式报警阀",
            code: "deviceSsbjf",
            alias: "ssbjf",
            icon: "/static/img/configur/ssbjf.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/ssbjf.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device", //显示详情组件前缀名
              width: 240,
              height: 210,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "烟雾报警传感器",
            code: "deviceYwbjcgq",
            alias: "ywbjcgq",
            icon: "/static/img/configur/ywbjcgq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/ywbjcgq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 42,
              height: 35,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "红外人体感应器",
            code: "deviceHwrtgyq",
            alias: "hwrtgyq",
            icon: "/static/img/configur/hwrtgyq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/hwrtgyq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 43,
              height: 41,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "摄像头",
            code: "deviceSxt",
            alias: "sxt",
            icon: "/static/img/configur/sxt.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/sxt.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              // infoType: "device", //显示详情组件前缀名
              width: 74,
              height: 58,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "门磁报警器",
            code: "deviceMcbjq",
            alias: "mcbjq",
            icon: "/static/img/configur/mcbjq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/mcbjq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 48,
              height: 44,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "漏水报警器",
            code: "deviceLsbjq",
            alias: "lsbjq",
            icon: "/static/img/configur/lsbjq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/lsbjq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 34,
              height: 44,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          }
        ]
      },
      {
        groupName: "光伏系统",
        groupCode: "photovoltaic-system",
        comList: [
          {
            name: "光伏电池板",
            code: "deviceGfdcb",
            alias: "gfdcb",
            icon: "/static/img/configur/gfdcb.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/gfdcb.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 182,
              height: 136,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "光伏逆变器",
            code: "deviceGfnbq",
            alias: "gfnbq",
            icon: "/static/img/configur/gfnbq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/gfnbq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 140,
              height: 154,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          }
        ]
      },
      {
        groupName: "环境系统",
        groupCode: "environment-system",
        comList: [
          {
            name: "拉绳式测距",
            code: "deviceLsscj",
            alias: "lsscj",
            icon: "/static/img/configur/lsscj.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/lsscj.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 51,
              height: 49,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "超声波测距",
            code: "deviceCsbcj",
            alias: "csbcj",
            icon: "/static/img/configur/csbcj.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/csbcj.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 56,
              height: 33,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "液晶屏传感器",
            code: "deviceYjpcgq",
            alias: "yjpcgq",
            icon: "/static/img/configur/yjpcgq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/yjpcgq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 50,
              height: 80,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "传感器",
            code: "deviceCgq",
            alias: "cgq",
            icon: "/static/img/configur/cgq.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/cgq.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 52,
              height: 58,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          },
          {
            name: "小型气象站",
            code: "deviceXxqxz",
            alias: "xxqxz",
            icon: "/static/img/configur/xxqxz.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/xxqxz.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              width: 135,
              height: 178,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          }
        ]
      },
      {
        groupName: "其它系统",
        groupCode: "other-system",
        comList: [
          {
            name: "客用电梯",
            code: "deviceKydt",
            alias: "kydt",
            icon: "/static/img/configur/kydt.png",
            data: {
              ...baseData,
              backgroundImage: "/static/img/svg/kydt.svg",
              // borderWidth: 0,
              // borderStyle: "none",
              // borderColor: "",
              // borderRadius: 0,
              // scale: "scale(1,1)",
              // opacity: 100,
              // left: 0,
              dataType: "device",
              infoType: "device", //显示详情组件前缀名
              width: 230,
              height: 290,
              // rotate: 0,
              // top: 0,
              equalScaleable: true //是否等比例缩放
              // scaleable: true, //是否可缩放操作
              // rotateable: true, //是否可旋转操作
              // editable: false, //内容是否可编辑
              // locked: true //是否可拖动
            }
          }
        ]
      }
    ]
  },
  {
    name: "图表",
    code: "chart",
    icon: "bomi bomi-chart",
    activeNames: ["bar-chart"],
    groupList: [
      {
        groupName: "柱状图",
        groupCode: "bar-chart",
        comList: [
          {
            name: "统计柱状图",
            code: "barChart",
            icon: "/static/img/configur/bar.jpg",
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "point"
            }
          },
          {
            name: "时序柱状图",
            code: "sequenceBarChart",
            icon: "/static/img/configur/curve.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "折线柱状图",
            code: "lineBarChart",
            icon: "/static/img/configur/curve.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "堆叠柱状图",
            code: "pileBarChart",
            icon: "/static/img/configur/curve.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          }
        ]
      },
      {
        groupName: "折线图",
        groupCode: "line-chart",
        comList: [
          {
            name: "统计折线图",
            code: "lineChart",
            icon: "/static/img/configur/curve.png",
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "point"
            }
          },
          {
            name: "统计面积图",
            code: "statisticsAreaLineChart",
            icon: "/static/img/configur/curve.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "时序折线图",
            code: "sequenceLineChart",
            icon: "/static/img/configur/curve.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "时序面积图",
            code: "sequenceAreaLineChart",
            icon: "/static/img/configur/curve.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          }
        ]
      },
      {
        groupName: "散点气泡图",
        groupCode: "scatter-bubble-chart",
        comList: [
          {
            name: "散点图",
            code: "scatterChart",
            icon: "/static/img/configur/curve.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "气泡图",
            code: "bubbleChart",
            icon: "/static/img/configur/curve.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          }
        ]
      },
      {
        groupName: "单值图表",
        groupCode: "single-value-chart",
        comList: [
          {
            name: "仪表盘",
            code: "gaugeChart",
            icon: "/static/img/configur/meter.png",
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "水球图",
            code: "liquidfillChart",
            icon: "/static/img/configur/meter.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          }
        ]
      },
      {
        groupName: "雷达图",
        groupCode: "radar-chart",
        comList: [
          {
            name: "统计雷达图",
            code: "statisticsRadarChart",
            icon: "/static/img/configur/meter.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "面积雷达图",
            code: "areaRadarChart",
            icon: "/static/img/configur/meter.png",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 400,
              height: 300,
              dataType: "device"
            }
          }
        ]
      },
      {
        groupName: "饼图",
        groupCode: "pie-chart",
        comList: [
          {
            name: "饼图",
            code: "pieChart",
            icon: "/static/img/configur/piechart.jpg",
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "圆环图",
            code: "ringChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "南丁格尔图",
            code: "nightingalePieChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "南丁格尔环图",
            code: "nightingaleRingChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          }
        ]
      },
      {
        groupName: "条形图",
        groupCode: "bar-type-chart",
        comList: [
          {
            name: "统计条形图",
            code: "statisticsBarTypeChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "堆叠条形图",
            code: "pileBarTypeChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "时序条形图",
            code: "sequenceBarTypeChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          }
        ]
      },
      {
        groupName: "混合图",
        groupCode: "mix-chart",
        comList: [
          {
            name: "双Y轴图",
            code: "doubleYChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          }
        ]
      },
      {
        groupName: "三维图",
        groupCode: "3d-chart",
        comList: [
          {
            name: "三维柱状图",
            code: "3dBarChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          },
          {
            name: "三维散点图",
            code: "3dScatterChart",
            icon: "/static/img/configur/piechart.jpg",
            comDisabled: true, //组件不可用
            data: {
              ...baseData,
              width: 500,
              height: 300,
              dataType: "device"
            }
          }
        ]
      }
    ]
  },

  {
    code: "component",
    icon: "el-icon-map-location",
    name: "地图",
    comList: [
      {
        name: "地图",
        code: "map",
        icon: "/static/img/configur/position.png",
        data: {
          ...baseData,
          width: 550,
          height: 400
        }
      },
      {
        name: "行政区地图",
        code: "districtMap",
        icon: "/static/img/configur/position.png",
        comDisabled: true, //组件不可用
        data: {
          ...baseData,
          width: 550,
          height: 400
        }
      },
      {
        name: "设备地图",
        code: "deviceMap",
        icon: "/static/img/configur/position.png",
        comDisabled: true, //组件不可用
        data: {
          ...baseData,
          width: 550,
          height: 400
        }
      },
      {
        name: "建筑地图",
        code: "buildingMap",
        icon: "/static/img/configur/position.png",
        comDisabled: true, //组件不可用
        data: {
          ...baseData,
          width: 550,
          height: 400
        }
      },
      {
        name: "地图热力图",
        code: "hotMap",
        icon: "/static/img/configur/position.png",
        comDisabled: true, //组件不可用
        data: {
          ...baseData,
          width: 550,
          height: 400
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
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
      //     locked: true //是否可拖动
      //   }
      // },
    ]
  },
  {
    name: "形状",
    code: "shape",
    icon: "bomi bomi-shape",
    comList: [
      {
        name: "直线",
        code: "materialLine",
        icon: "/static/img/configur/material/arrow.png",
        data: {
          ...baseData,
          // styleCode: "material",
          backgroundColor: "#0075E7",
          borderColor: "#0075E7",
          lineWidth: 1,
          x1: 0,
          y1: 0,
          x2: 200,
          y2: 0,
          // backgroundImage: "/static/img/svg/material/arrow.svg",
          // originWidth: 100,
          // originHeight: 10,
          // dataType: "device",
          // infoType:"device",
          // equalScaleable: true //是否等比例缩放,
          scaleable: false, //是否可缩放
          rotateable: false //是否可旋转
        }
      },
      {
        name: "矩形",
        code: "materialRectangle",
        icon: "/static/img/configur/material/rectangle.png",
        data: {
          ...baseData,
          // styleCode: "material",
          // backgroundImage: "/static/img/svg/material/rectangle.svg",
          backgroundColor: "#0075E7",
          width: 200,
          height: 100
          // dataType: "device",
          // infoType:"device",
          // equalScaleable: true //是否等比例缩放
        }
      },
      {
        name: "箭头",
        code: "materialArrow",
        icon: "/static/img/configur/material/arrow.png",
        data: {
          ...baseData,
          styleCode: "material",
          backgroundColor: "#0075E7",
          // backgroundImage: "/static/img/svg/material/arrow.svg",
          width: 100,
          height: 100
          // dataType: "device",
          // infoType:"device",
          // equalScaleable: true //是否等比例缩放
        }
      },
      {
        name: "星形",
        code: "materialStar",
        icon: "/static/img/configur/material/star.png",
        data: {
          ...baseData,
          // styleCode: "material",
          // backgroundImage: "/static/img/svg/material/star.svg",
          cornerCount: 5,
          innerRadius: 50,
          backgroundColor: "#0075E7",
          width: 150,
          height: 150
          // dataType: "device",
          // infoType:"device",
          // equalScaleable: true //是否等比例缩放
        }
      },
      {
        name: "圆形",
        code: "materialCircle",
        icon: "/static/img/configur/material/circle.png",
        data: {
          ...baseData,
          styleCode: "material",
          backgroundColor: "#0075E7",
          // backgroundImage: "/static/img/svg/material/circle.svg",
          width: 100,
          height: 100
          // dataType: "device",
          // infoType:"device",
          // equalScaleable: true //是否等比例缩放
        }
      },
      {
        name: "四边形",
        code: "materialQuadrangle",
        icon: "/static/img/configur/material/quadrangle.png",
        data: {
          ...baseData,
          // styleCode: "material",
          backgroundColor: "#0075E7",
          // backgroundImage: "/static/img/svg/material/quadrangle.svg",
          width: 100,
          height: 100
          // dataType: "device",
          // infoType:"device",
          // equalScaleable: true //是否等比例缩放
        }
      },
      {
        name: "多边形",
        code: "materialPolygon",
        icon: "/static/img/configur/material/polygon.png",
        data: {
          ...baseData,
          styleCode: "material",
          backgroundColor: "#0075E7",
          // backgroundImage: "/static/img/svg/material/polygon.svg",
          width: 100,
          height: 100
          // dataType: "device",
          // infoType:"device",
          // equalScaleable: true //是否等比例缩放
        }
      }
    ]
  },
  {
    code: "material",
    icon: "el-icon-files",
    name: "素材",
    activeNames: ["material-embellish"],
    groupList: [
      {
        groupName: "装饰",
        groupCode: "material-embellish",
        comList: [
          {
            name: "装饰1",
            code: "materialEmbellish1",
            icon: "/static/img/configur/material/embellish-1.png",
            data: {
              ...baseData,
              styleCode: "material",
              backgroundColor: "#0075E7",
              // backgroundImage: "/static/img/svg/material/embellish-1.svg",
              width: 600,
              height: 40
              // dataType: "device",
              // infoType:"device",
              // equalScaleable: true //是否等比例缩放
            }
          },
          {
            name: "装饰2",
            code: "materialEmbellish2",
            icon: "/static/img/configur/material/embellish-2.png",
            data: {
              ...baseData,
              styleCode: "material",
              backgroundColor: "#0075E7",
              // backgroundImage: "/static/img/svg/material/embellish-2.svg",
              width: 800,
              height: 80
              // dataType: "device",
              // infoType:"device",
              // equalScaleable: true //是否等比例缩放
            }
          }
        ]
      },
      {
        groupName: "图标",
        groupCode: "material-icon",
        comList: []
      }
    ]
  }
];
let componentPanel = {
  name: "组合",
  code: "panel",
  data: {
    ...baseData,
    width: 600,
    height: 400
  }
};
let componentLibraryMap = {};
componentLibrary.forEach(item => {
  let { comList = [], groupList = [] } = item || {};
  let { length = 0 } = groupList || [];
  if (length > 0) {
    groupList.forEach(_item => {
      let { comList = [] } = _item || {};
      comList.forEach(__item => {
        let { code = "", alias = "" } = __item || {};
        if (!alias) {
          alias = code;
        }
        componentLibraryMap[alias] = __item || {};
      });
    });
  } else {
    comList.forEach(_item => {
      let { code = "", alias = "" } = _item || {};
      if (!alias) {
        alias = code;
      }
      componentLibraryMap[alias] = _item || {};
    });
  }
});
export default {
  baseData,
  componentPanel,
  componentLibrary,
  componentLibraryMap
};
