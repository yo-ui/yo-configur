import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/display.less";
// 消防水泵
class Display extends Component {
  pointValue = 1;
  constructor(props) {
    super(props);
  }
  init() {
    this.refresh();
  }

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-xfsb-com component"
    style="${this.composeStyles(this.comStyle())}">
    ${this.renderSvg()}
  </div>
    `
    );
  }

  renderSvg() {
    let { info = {} } = this;
    let { id = "", width = 0, height = 0 } = info || {};
    return `
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 152 200"
      width="${width}"
      height="${height}"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
    <defs>

    <style type='text/css'>
    .xfsb-${id}-st0{fill:#E88880;}
     .xfsb-${id}-st1{fill:#B41511;}
     .xfsb-${id}-st2{fill:url(#xfsb_${id}_SVGID_1_);}
     .st3{fill:#FB8085;}
     .xfsb-${id}-st4{fill:url(#xfsb_${id}_SVGID_2_);}
     .xfsb-${id}-st5{fill:url(#xfsb_${id}_SVGID_3_);}
     .xfsb-${id}-st6{fill:url(#xfsb_${id}_SVGID_4_);}
     .xfsb-${id}-st7{fill:url(#xfsb_${id}_SVGID_5_);}
     .xfsb-${id}-st8{fill:url(#xfsb_${id}_SVGID_6_);}
     .xfsb-${id}-st9{fill:#F8422A;}
     .xfsb-${id}-st10{fill:url(#xfsb_${id}_SVGID_7_);}
     .xfsb-${id}-st11{fill:url(#xfsb_${id}_SVGID_8_);}
     .xfsb-${id}-st12{fill:url(#xfsb_${id}_SVGID_9_);}
     .xfsb-${id}-st13{fill:url(#xfsb_${id}_SVGID_10_);}
     .xfsb-${id}-st14{fill:url(#xfsb_${id}_SVGID_11_);}
     .xfsb-${id}-st15{fill:url(#xfsb_${id}_SVGID_12_);}
     .xfsb-${id}-st16{fill:url(#xfsb_${id}_SVGID_13_);}
     .xfsb-${id}-st17{fill:url(#xfsb_${id}_SVGID_14_);}
     .xfsb-${id}-st18{fill:url(#xfsb_${id}_SVGID_15_);}
     .xfsb-${id}-st19{fill:url(#xfsb_${id}_SVGID_16_);}
     .xfsb-${id}-st20{fill:url(#xfsb_${id}_SVGID_17_);}
     .xfsb-${id}-st21{fill:url(#xfsb_${id}_SVGID_18_);}
     .xfsb-${id}-st22{fill:url(#xfsb_${id}_SVGID_19_);}
     .xfsb-${id}-st23{fill:url(#xfsb_${id}_SVGID_20_);}
     .xfsb-${id}-st24{fill:url(#xfsb_${id}_SVGID_21_);}
     .xfsb-${id}-st25{fill:url(#xfsb_${id}_SVGID_22_);}
     .xfsb-${id}-st26{fill:url(#xfsb_${id}_SVGID_23_);}
     .xfsb-${id}-st27{fill:url(#xfsb_${id}_SVGID_24_);}
     .xfsb-${id}-st28{display:none;}
     .xfsb-${id}-st29{display:inline;}
     .st30{fill:#600B0B;}
     .st31{fill:#1E0000;}
     .st32{fill:#AA3F3F;}
     .st33{fill:url(#xfsb_${id}_SVGID_25_);}
     .st34{opacity:0.5;}
     .st35{fill:#FFFFFF;}
     .st36{fill:#0E1F3D;}
     .st37{fill:url(#xfsb_${id}_SVGID_26_);}
     .st38{fill:url(#xfsb_${id}_SVGID_27_);}
     .st39{opacity:0.7;fill:#CC7979;}

     .show {display:default;}
     .hide {display:none;}
     .f1 {display:default;}
     .f2 {display:none;}
     .f3 {display:none;}
   </style>
    </defs>
    ${this.renderSvgContent()}
    </svg>
    `;
  }

  renderSvgContent() {
    let { info = {}, pointValue } = this;
    let { id = "" } = info || {};
    let text = `
    <g id="SVG_base">
      <rect
        x="23.61"
        y="191.45"
        class="xfsb-${id}-st0"
        width="76.5"
        height="8.55"
      />
      <polygon
        class="xfsb-${id}-st1"
        points="118.57,174.87 100.1,200 100.1,191.45 118.57,166.32 	"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="72.2693"
        y1="171.537"
        x2="69.2545"
        y2="190.3109"
      >
        <stop offset="0" style="stop-color:#2D0503" />
        <stop offset="1" style="stop-color:#8F0201" />
      </linearGradient>
      <path
        class="xfsb-${id}-st2"
        d="M42.08,166.32l-18.47,25.13h76.5l18.47-25.13H42.08z"
      />
      <polygon
        class="xfsb-${id}-st3"
        points="100.21,191.73 23.61,191.73 23.61,191.16 100.01,191.16 118.4,166.1 118.75,166.54 	"
      />

      <radialGradient
        id="xfsb_${id}_SVGID_2_"
        cx="0.9933"
        cy="127.1809"
        r="86.4478"
        gradientTransform="matrix(0.7818 0 0 0.4034 72.2902 85.4334)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.3973" style="stop-color:#850503" />
        <stop offset="0.7139" style="stop-color:#FF8689" />
        <stop offset="1" style="stop-color:#73150D" />
      </radialGradient>
      <ellipse
        class="xfsb-${id}-st4"
        cx="73.69"
        cy="148.62"
        rx="49.14"
        ry="28.82"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="41.4307"
        y1="126.9879"
        x2="105.9529"
        y2="126.9879"
      >
        <stop offset="0" style="stop-color:#FF6A6A" />
        <stop offset="0.0587" style="stop-color:#FF7070" />
        <stop offset="0.1337" style="stop-color:#FF7F7F" />
        <stop offset="0.2176" style="stop-color:#FF9A9A" />
        <stop offset="0.3074" style="stop-color:#FFBEBE" />
        <stop offset="0.3603" style="stop-color:#FFD7D7" />
        <stop offset="0.3662" style="stop-color:#FDD3D2" />
        <stop offset="0.447" style="stop-color:#E59A98" />
        <stop offset="0.525" style="stop-color:#D26A67" />
        <stop offset="0.5983" style="stop-color:#C24541" />
        <stop offset="0.6658" style="stop-color:#B72B26" />
        <stop offset="0.7255" style="stop-color:#B01B16" />
        <stop offset="0.7709" style="stop-color:#AE1510" />
        <stop offset="1" style="stop-color:#FF7F7F" />
      </linearGradient>
      <path
        class="xfsb-${id}-st5"
        d="M41.43,109.26v23.9c0,6.38,14.44,11.55,32.26,11.55c17.82,0,32.26-5.17,32.26-11.55v-23.9H41.43z"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_4_"
        gradientUnits="userSpaceOnUse"
        x1="41.4307"
        y1="115.6123"
        x2="105.9529"
        y2="115.6123"
      >
        <stop offset="0" style="stop-color:#3B3E47" />
        <stop offset="0.3324" style="stop-color:#8B8F98" />
        <stop offset="0.7486" style="stop-color:#5C6B7E" />
        <stop offset="1" style="stop-color:#5C6063" />
      </linearGradient>
      <path
        class="xfsb-${id}-st6"
        d="M41.43,112.56c3.51,5.39,16.62,9.4,32.26,9.4c15.64,0,28.75-4.01,32.26-9.4v-3.3H41.43V112.56z"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_5_"
        gradientUnits="userSpaceOnUse"
        x1="73.6918"
        y1="120.8099"
        x2="73.6918"
        y2="97.719"
      >
        <stop offset="0" style="stop-color:#5A5E6A" />
        <stop offset="1" style="stop-color:#323641" />
      </linearGradient>
      <ellipse
        class="xfsb-${id}-st7"
        cx="73.69"
        cy="109.26"
        rx="32.26"
        ry="11.55"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_6_"
        gradientUnits="userSpaceOnUse"
        x1="24.5532"
        y1="148.6211"
        x2="122.8304"
        y2="148.6211"
      >
        <stop offset="0" style="stop-color:#6A0000;stop-opacity:0.8" />
        <stop offset="0.5782" style="stop-color:#6A0000;stop-opacity:0" />
        <stop offset="1" style="stop-color:#6A0000;stop-opacity:0.8" />
      </linearGradient>
      <ellipse
        class="xfsb-${id}-st8"
        cx="73.69"
        cy="148.62"
        rx="49.14"
        ry="28.82"
      />
      <path
        class="xfsb-${id}-st1"
        d="M68.03,162.48c0,0-0.3,6.25,1.52,11.31c0.77,2.15,1.67,3.75,1.67,3.75v2.25l-7.13,10.73l-2.28-19.85
        L68.03,162.48z"
      />
      <polygon
        class="xfsb-${id}-st9"
        points="68.03,162.48 62.71,162.48 58.77,190.53 64.09,190.53 	"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_7_"
        gradientUnits="userSpaceOnUse"
        x1="115.3613"
        y1="-154.34"
        x2="115.3613"
        y2="-129.1122"
        gradientTransform="matrix(1 0 0 1 8.8102 292.3716)"
      >
        <stop offset="0" style="stop-color:#FF6A6A" />
        <stop offset="0.0587" style="stop-color:#FF7070" />
        <stop offset="0.1337" style="stop-color:#FF7F7F" />
        <stop offset="0.2176" style="stop-color:#FF9A9A" />
        <stop offset="0.3074" style="stop-color:#FFBEBE" />
        <stop offset="0.3603" style="stop-color:#FFD7D7" />
        <stop offset="0.3662" style="stop-color:#FDD3D2" />
        <stop offset="0.447" style="stop-color:#E59A98" />
        <stop offset="0.525" style="stop-color:#D26A67" />
        <stop offset="0.5983" style="stop-color:#C24541" />
        <stop offset="0.6658" style="stop-color:#B72B26" />
        <stop offset="0.7255" style="stop-color:#B01B16" />
        <stop offset="0.7709" style="stop-color:#AE1510" />
        <stop offset="1" style="stop-color:#FF7F7F" />
      </linearGradient>
      <path
        class="xfsb-${id}-st10"
        d="M119.22,138.03c-2.99,0-7.76,5.65-7.76,12.61s1.64,12.61,4.63,12.61h20.8v-25.23H119.22z"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_8_"
        gradientUnits="userSpaceOnUse"
        x1="576.8693"
        y1="299.0972"
        x2="524.5706"
        y2="299.0972"
        gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)"
      >
        <stop offset="0" style="stop-color:#FF6A6A" />
        <stop offset="0.0587" style="stop-color:#FF7070" />
        <stop offset="0.1337" style="stop-color:#FF7F7F" />
        <stop offset="0.2176" style="stop-color:#FF9A9A" />
        <stop offset="0.3074" style="stop-color:#FFBEBE" />
        <stop offset="0.3603" style="stop-color:#FFD7D7" />
        <stop offset="0.3662" style="stop-color:#FDD3D2" />
        <stop offset="0.447" style="stop-color:#E59A98" />
        <stop offset="0.525" style="stop-color:#D26A67" />
        <stop offset="0.5983" style="stop-color:#C24541" />
        <stop offset="0.6658" style="stop-color:#B72B26" />
        <stop offset="0.7255" style="stop-color:#B01B16" />
        <stop offset="0.7709" style="stop-color:#AE1510" />
        <stop offset="1" style="stop-color:#FF7F7F" />
      </linearGradient>
      <path
        class="xfsb-${id}-st11"
        d="M141.52,130.91c2.35,4.75,3.85,12.05,3.85,20.24c0,8.19-1.5,15.49-3.85,20.24v5.7h-6.42
        c-5.67,0-10.27-11.61-10.27-25.94c0-14.33,4.6-25.94,10.27-25.94h6.42V130.91z"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_9_"
        gradientUnits="userSpaceOnUse"
        x1="156.2546"
        y1="155.7116"
        x2="136.6849"
        y2="149.6502"
      >
        <stop offset="0" style="stop-color:#2D0503" />
        <stop offset="1" style="stop-color:#8F0201" />
      </linearGradient>
      <ellipse
        class="xfsb-${id}-st12"
        cx="141.52"
        cy="151.15"
        rx="10.27"
        ry="25.94"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_10_"
        gradientUnits="userSpaceOnUse"
        x1="561.1144"
        y1="291.3935"
        x2="540.6705"
        y2="291.3935"
        gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)"
      >
        <stop offset="0" style="stop-color:#2D0503" />
        <stop offset="0.648" style="stop-color:#8F0201" />
        <stop offset="1" style="stop-color:#2D0503" />
      </linearGradient>
      <ellipse
        class="xfsb-${id}-st13"
        cx="142.81"
        cy="151.15"
        rx="4.15"
        ry="10.49"
      />
      <path
        class="xfsb-${id}-st3"
        d="M133.25,151.15c0,13.48,4.07,24.55,9.27,25.82c-0.33,0.08-0.66,0.12-1,0.12c-5.67,0-10.27-11.61-10.27-25.94
        c0-14.33,4.6-25.94,10.27-25.94c0.34,0,0.67,0.04,1,0.12C137.32,126.6,133.25,137.67,133.25,151.15z"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_11_"
        gradientUnits="userSpaceOnUse"
        x1="103.3693"
        y1="-154.34"
        x2="103.3693"
        y2="-129.1122"
        gradientTransform="matrix(-1 0 0 1 128.4414 292.3716)"
      >
        <stop offset="0" style="stop-color:#FF6A6A" />
        <stop offset="0.0587" style="stop-color:#FF7070" />
        <stop offset="0.1337" style="stop-color:#FF7F7F" />
        <stop offset="0.2176" style="stop-color:#FF9A9A" />
        <stop offset="0.3074" style="stop-color:#FFBEBE" />
        <stop offset="0.3603" style="stop-color:#FFD7D7" />
        <stop offset="0.3662" style="stop-color:#FDD3D2" />
        <stop offset="0.447" style="stop-color:#E59A98" />
        <stop offset="0.525" style="stop-color:#D26A67" />
        <stop offset="0.5983" style="stop-color:#C24541" />
        <stop offset="0.6658" style="stop-color:#B72B26" />
        <stop offset="0.7255" style="stop-color:#B01B16" />
        <stop offset="0.7709" style="stop-color:#AE1510" />
        <stop offset="1" style="stop-color:#FF7F7F" />
      </linearGradient>
      <path
        class="xfsb-${id}-st14"
        d="M29.03,138.03c2.39,0,6.2,5.65,6.2,12.61s-1.31,12.61-3.7,12.61H14.91v-25.23H29.03z"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_12_"
        gradientUnits="userSpaceOnUse"
        x1="576.8693"
        y1="313.6405"
        x2="524.5706"
        y2="313.6405"
        gradientTransform="matrix(-4.078302e-16 -1 1 -4.078302e-16 -296.9493 701.7421)"
      >
        <stop offset="0" style="stop-color:#FF6A6A" />
        <stop offset="0.0587" style="stop-color:#FF7070" />
        <stop offset="0.1337" style="stop-color:#FF7F7F" />
        <stop offset="0.2176" style="stop-color:#FF9A9A" />
        <stop offset="0.3074" style="stop-color:#FFBEBE" />
        <stop offset="0.3603" style="stop-color:#FFD7D7" />
        <stop offset="0.3662" style="stop-color:#FDD3D2" />
        <stop offset="0.447" style="stop-color:#E59A98" />
        <stop offset="0.525" style="stop-color:#D26A67" />
        <stop offset="0.5983" style="stop-color:#C24541" />
        <stop offset="0.6658" style="stop-color:#B72B26" />
        <stop offset="0.7255" style="stop-color:#B01B16" />
        <stop offset="0.7709" style="stop-color:#AE1510" />
        <stop offset="1" style="stop-color:#FF7F7F" />
      </linearGradient>
      <path
        class="xfsb-${id}-st15"
        d="M10.27,130.91c-2.35,4.75-3.85,12.05-3.85,20.24c0,8.19,1.5,15.49,3.85,20.24v5.7h6.42
        c5.67,0,10.27-11.61,10.27-25.94c0-14.33-4.6-25.94-10.27-25.94h-6.42V130.91z"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_13_"
        gradientUnits="userSpaceOnUse"
        x1="141.7112"
        y1="155.7116"
        x2="122.1415"
        y2="149.6502"
        gradientTransform="matrix(-1 0 0 1 137.2516 0)"
      >
        <stop offset="0" style="stop-color:#2D0503" />
        <stop offset="1" style="stop-color:#8F0201" />
      </linearGradient>
      <ellipse
        class="xfsb-${id}-st16"
        cx="10.27"
        cy="151.15"
        rx="10.27"
        ry="25.94"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_14_"
        gradientUnits="userSpaceOnUse"
        x1="561.1144"
        y1="305.9369"
        x2="540.6705"
        y2="305.9369"
        gradientTransform="matrix(-4.078302e-16 -1 1 -4.078302e-16 -296.9493 701.7421)"
      >
        <stop offset="0" style="stop-color:#2D0503" />
        <stop offset="0.648" style="stop-color:#8F0201" />
        <stop offset="1" style="stop-color:#2D0503" />
      </linearGradient>
      <ellipse
        class="xfsb-${id}-st17"
        cx="8.99"
        cy="151.15"
        rx="4.15"
        ry="10.49"
      />
      <path
        class="xfsb-${id}-st3"
        d="M18.55,151.15c0,13.48-4.07,24.55-9.27,25.82c0.33,0.08,0.66,0.12,1,0.12c5.67,0,10.27-11.61,10.27-25.94
        c0-14.33-4.6-25.94-10.27-25.94c-0.34,0-0.67,0.04-1,0.12C14.48,126.6,18.55,137.67,18.55,151.15z"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_15_"
        gradientUnits="userSpaceOnUse"
        x1="612.8093"
        y1="-61.2804"
        x2="612.8093"
        y2="9.5678"
        gradientTransform="matrix(0 -1 1 0 99.7421 701.7421)"
      >
        <stop offset="0" style="stop-color:#620405" />
        <stop offset="0.5" style="stop-color:#AD140F" />
        <stop offset="1" style="stop-color:#421210" />
      </linearGradient>
      <path
        class="xfsb-${id}-st18"
        d="M38.46,120.12c0,9.49,15.86,17.17,35.42,17.17s35.42-7.69,35.42-17.17V40.57H38.46V120.12z"
      />

      <linearGradient
        id="xfsb_${id}_SVGID_16_"
        gradientUnits="userSpaceOnUse"
        x1="612.8165"
        y1="-62.8003"
        x2="612.8165"
        y2="11.0877"
        gradientTransform="matrix(0 -1 1 0 99.7421 701.7421)"
      >
        <stop offset="0" style="stop-color:#CE1C0E" />
        <stop offset="0.3464" style="stop-color:#FC7883" />
        <stop offset="0.7095" style="stop-color:#5F0101" />
        <stop offset="1" style="stop-color:#AF3E43" />
      </linearGradient>
      <path
        class="xfsb-${id}-st19"
        d="M36.94,38.76v1.42l0.33,0.39v83.01c0.35,1.28,0.97,2.52,1.85,3.7V42.73l2.35,2.74v84.32
        c0.57,0.5,1.19,0.99,1.85,1.46V46.45l2.35,1.22v85.08c0.59,0.34,1.21,0.67,1.85,0.98v-85.1l2.35,1.22v84.94
        c0.6,0.25,1.22,0.49,1.85,0.72v-84.7l2.35,1.22v84.27c0.61,0.19,1.22,0.37,1.85,0.54V52.41l2.35,0.46v84.56
        c0.61,0.14,1.22,0.27,1.85,0.39V53.23l2.35,0.46v84.54c0.61,0.1,1.23,0.19,1.85,0.27V54.06l2.35,0.46v84.25
        c0.61,0.06,1.23,0.11,1.85,0.15V54.88l2.35,0.46v83.7c0.61,0.02,1.23,0.04,1.85,0.05V55.53h2.35v83.57
        c0.62-0.01,1.24-0.03,1.85-0.05V55.53h2.35v83.39c0.62-0.04,1.24-0.1,1.85-0.15V55.53h2.35v82.97c0.62-0.08,1.24-0.17,1.85-0.27
        V55.28l2.35-0.43v82.97c0.62-0.12,1.24-0.25,1.85-0.39V54.51l2.35-0.43v82.77c0.63-0.17,1.24-0.35,1.85-0.54V53.73l2.35-1.37v83.17
        c0.63-0.23,1.25-0.47,1.85-0.72V51.28l2.35-1.37v83.83c0.64-0.32,1.26-0.65,1.85-0.98V48.83l1.18-0.69l1.16-1.3v84.42
        c0.66-0.47,1.28-0.96,1.85-1.46V44.78l2.35-2.62v85.12c0.88-1.18,1.5-2.42,1.85-3.7V41.82h-1.55l1.88-2.1v-0.97H36.94z"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_17_"
        gradientUnits="userSpaceOnUse"
        x1="54.0703"
        y1="88.7171"
        x2="93.7012"
        y2="88.7171"
      >
        <stop offset="0" style="stop-color:#FD686C" />
        <stop offset="1" style="stop-color:#A80F0A" />
      </linearGradient>
      <path
        class="xfsb-${id}-st20"
        d="M72.5,77.11c-8.68,0-14.38-1.68-18.43-3.72v27.77c0,1.98,1.61,3.59,3.59,3.59h32.44
        c1.98,0,3.59-1.61,3.59-3.59V72.68C87.24,75.36,80.2,77.11,72.5,77.11z"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_18_"
        gradientUnits="userSpaceOnUse"
        x1="56.6129"
        y1="81.7453"
        x2="149.648"
        y2="171.0507"
      >
        <stop offset="0" style="stop-color:#AE1510" />
        <stop offset="0.3324" style="stop-color:#FE6873" />
        <stop offset="0.7151" style="stop-color:#5B0000" />
        <stop offset="1" style="stop-color:#B91611" />
      </linearGradient>
      <path
        class="xfsb-${id}-st21"
        d="M93.7,83.64v29.38c0,2-1.62,3.63-3.63,3.63H57.7c-2,0-3.63-1.62-3.63-3.63V83.64c0-2,1.62-3.63,3.63-3.63
        h32.38C92.08,80.01,93.7,81.63,93.7,83.64z"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_19_"
        gradientUnits="userSpaceOnUse"
        x1="57.8111"
        y1="109.7966"
        x2="85.9849"
        y2="92.2905"
      >
        <stop offset="0" style="stop-color:#FD686C" />
        <stop offset="1" style="stop-color:#A80F0A" />
      </linearGradient>
      <polygon
        class="xfsb-${id}-st22"
        points="92.84,108.64 85.67,115.81 63.3,115.81 56.13,108.64 56.13,90.24 63.3,83.07 85.67,83.07
        92.84,90.24 	"
      />
      <polygon
        class="xfsb-${id}-st3"
        points="92.84,90.24 92.84,108.64 91.71,109.77 91.71,91.81 84.54,84.64 61.73,84.64 63.3,83.07 85.67,83.07
        "
      />

      <radialGradient
        id="xfsb_${id}_SVGID_20_"
        cx="1.8133"
        cy="16.6776"
        r="52.7517"
        gradientTransform="matrix(0.7818 0 0 0.2712 72.2902 45.835)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.3184" style="stop-color:#202528;stop-opacity:0.8" />
        <stop offset="1" style="stop-color:#1D2225;stop-opacity:0" />
      </radialGradient>
      <polygon
        class="xfsb-${id}-st23"
        points="37.28,78.02 37.28,29.2 110.5,26.61 110.5,79.8 	"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_21_"
        gradientUnits="userSpaceOnUse"
        x1="35.2356"
        y1="36.0014"
        x2="113.7322"
        y2="36.0014"
      >
        <stop offset="0" style="stop-color:#FF6A6A" />
        <stop offset="0.0587" style="stop-color:#FF7070" />
        <stop offset="0.1337" style="stop-color:#FF7F7F" />
        <stop offset="0.2176" style="stop-color:#FF9A9A" />
        <stop offset="0.3074" style="stop-color:#FFBEBE" />
        <stop offset="0.3603" style="stop-color:#FFD7D7" />
        <stop offset="0.3662" style="stop-color:#FDD3D2" />
        <stop offset="0.447" style="stop-color:#E59A98" />
        <stop offset="0.525" style="stop-color:#D26A67" />
        <stop offset="0.5983" style="stop-color:#C24541" />
        <stop offset="0.6658" style="stop-color:#B72B26" />
        <stop offset="0.7255" style="stop-color:#B01B16" />
        <stop offset="0.7709" style="stop-color:#AE1510" />
        <stop offset="1" style="stop-color:#FF7F7F" />
      </linearGradient>
      <path
        class="xfsb-${id}-st24"
        d="M35.24,15.15v27.66c0,7.76,17.57,14.05,39.25,14.05c21.68,0,39.25-6.29,39.25-14.05V15.15H35.24z"
      />
      <path
        class="xfsb-${id}-st3"
        d="M35.24,19.16c4.27,6.56,20.22,11.43,39.25,11.43c19.03,0,34.97-4.87,39.25-11.43v-4.01h-78.5V19.16z"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_22_"
        gradientUnits="userSpaceOnUse"
        x1="74.4839"
        y1="29.1963"
        x2="74.4839"
        y2="1.1042"
      >
        <stop offset="0" style="stop-color:#FD686C" />
        <stop offset="1" style="stop-color:#A80F0A" />
      </linearGradient>
      <ellipse
        class="xfsb-${id}-st25"
        cx="74.48"
        cy="15.15"
        rx="39.25"
        ry="14.05"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_23_"
        gradientUnits="userSpaceOnUse"
        x1="42.0357"
        y1="15.7425"
        x2="106.9321"
        y2="15.7425"
      >
        <stop offset="0" style="stop-color:#AE1510" />
        <stop offset="0.3324" style="stop-color:#FEA2A3" />
        <stop offset="0.7151" style="stop-color:#8D0000" />
        <stop offset="1" style="stop-color:#B91611" />
      </linearGradient>
      <path
        class="xfsb-${id}-st26"
        d="M101.14,7.75H47.83l-5.8,5.79c0,5.62,14.53,10.18,32.45,10.18s32.45-4.56,32.45-10.18L101.14,7.75z"
      />
      <path
        class="xfsb-${id}-st3"
        d="M101.14,7.75H47.83L47.44,9.2c1.24,4.3,12.87,7.67,27.04,7.67c14.17,0,25.8-3.37,27.04-7.67L101.14,7.75z"
      />
      <linearGradient
        id="xfsb_${id}_SVGID_24_"
        gradientUnits="userSpaceOnUse"
        x1="74.4839"
        y1="15.5072"
        x2="74.4839"
        y2="0"
      >
        <stop offset="0" style="stop-color:#FD686C" />
        <stop offset="1" style="stop-color:#A80F0A" />
      </linearGradient>
      <ellipse
        class="xfsb-${id}-st27"
        cx="74.48"
        cy="7.75"
        rx="26.65"
        ry="7.75"
      />
    </g><g class="SVG_ani">
      <g class="f1">
        <animate
          values="show;hide;hide;"
          dur="0.5s"
          attributeName="class"
          repeatCount="indefinite"
        />
        <g class="xfsb-${id}-st29">
          <path
            class="xfsb-${id}-st30"
            d="M73.89,67.22c-15.57,0-28.51-4.04-31.23-9.37v65.05c0,6.22,13.98,11.26,31.23,11.26s31.23-5.04,31.23-11.26
          V57.84C102.4,63.18,89.46,67.22,73.89,67.22z"
          />
          <ellipse
            class="xfsb-${id}-st31"
            cx="73.89"
            cy="122.89"
            rx="31.23"
            ry="11.26"
          />
          <g>
            <path
              class="xfsb-${id}-st32"
              d="M105.11,57.84c-0.43,0.84-1.11,1.65-2.01,2.41v66.62c1.3-1.24,2.01-2.58,2.01-3.98V57.84z"
            />
          </g>
          <path
            class="xfsb-${id}-st32"
            d="M42.66,57.84v65.05c0,1.4,0.71,2.73,2,3.97V60.24C43.76,59.48,43.08,58.68,42.66,57.84z"
          />

          <linearGradient
            id="xfsb_${id}_SVGID_25_"
            gradientUnits="userSpaceOnUse"
            x1="606.0136"
            y1="1.031"
            x2="606.0136"
            y2="-52.2624"
            gradientTransform="matrix(0 -1 1 0 99.5014 701.5014)"
          >
            <stop offset="0" style="stop-color:#A6B5BD" />
            <stop offset="0.1313" style="stop-color:#73858E" />
            <stop offset="0.5251" style="stop-color:#CFDCE2" />
            <stop offset="0.852" style="stop-color:#73858E" />
            <stop offset="1" style="stop-color:#8D9EA6" />
          </linearGradient>
          <path
            class="xfsb-${id}-st33"
            d="M73.89,128.98c14.72,0,26.65-4.25,26.65-9.5V61.99c-5.66,3.14-15.48,5.22-26.65,5.22
          c-11.17,0-20.99-2.08-26.65-5.22v57.49C47.24,124.73,59.17,128.98,73.89,128.98z"
          />
          <g class="xfsb-${id}-st34">
            <path
              class="xfsb-${id}-st35"
              d="M53.42,125.56V64.51c-1.39-0.42-2.69-0.89-3.86-1.39v60.23C50.56,124.16,51.86,124.9,53.42,125.56z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M71.7,67.19c-1.31-0.03-2.6-0.09-3.86-0.18v61.73c1.26,0.1,2.55,0.18,3.86,0.21V67.19z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M66.46,66.9l0.04,0c-0.02,0-0.05,0-0.07-0.01L66.46,66.9z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M87.38,66.13v61.54c1.37-0.29,2.66-0.62,3.86-0.99V65.35C90.01,65.64,88.72,65.9,87.38,66.13z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M96.96,63.63v60.6c1.3-0.8,2.28-1.68,2.88-2.61V62.35C98.96,62.8,98.01,63.23,96.96,63.63z"
            />
          </g>
          <g>
            <path
              class="xfsb-${id}-st36"
              d="M52.43,125.12V64.2c-0.66-0.22-1.29-0.45-1.9-0.69v60.54C51.1,124.43,51.74,124.78,52.43,125.12z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M66.46,66.9l0.04,0c-0.02,0-0.05,0-0.07-0.01L66.46,66.9z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M88.36,65.95v61.5c0.65-0.15,1.29-0.31,1.9-0.48v-61.4C89.64,65.71,89.01,65.83,88.36,65.95z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M97.69,63.33v60.42c0.55-0.39,1.02-0.79,1.42-1.21V62.71C98.66,62.93,98.18,63.13,97.69,63.33z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M70.72,67.15c-0.64-0.02-1.27-0.05-1.9-0.09v61.74c0.63,0.04,1.26,0.08,1.9,0.1V67.15z"
            />
          </g>
        </g>
      </g>
      <g class="f2">
        <animate
          values="hide;show;hide;"
          dur="0.5s"
          attributeName="class"
          repeatCount="indefinite"
        />
        <g class="xfsb-${id}-st29">
          <path
            class="xfsb-${id}-st30"
            d="M73.89,67.22c-15.57,0-28.51-4.04-31.23-9.37v65.05c0,6.22,13.98,11.26,31.23,11.26s31.23-5.04,31.23-11.26
          V57.84C102.4,63.18,89.46,67.22,73.89,67.22z"
          />
          <ellipse
            class="xfsb-${id}-st31"
            cx="73.89"
            cy="122.89"
            rx="31.23"
            ry="11.26"
          />
          <g>
            <path
              class="xfsb-${id}-st32"
              d="M105.11,57.84c-0.43,0.84-1.11,1.65-2.01,2.41v66.62c1.3-1.24,2.01-2.58,2.01-3.98V57.84z"
            />
          </g>
          <path
            class="xfsb-${id}-st32"
            d="M42.66,57.84v65.05c0,1.4,0.71,2.73,2,3.97V60.24C43.76,59.48,43.08,58.68,42.66,57.84z"
          />

          <linearGradient
            id="xfsb_${id}_SVGID_26_"
            gradientUnits="userSpaceOnUse"
            x1="606.0136"
            y1="1.031"
            x2="606.0136"
            y2="-52.2624"
            gradientTransform="matrix(0 -1 1 0 99.5014 701.5014)"
          >
            <stop offset="0" style="stop-color:#A6B5BD" />
            <stop offset="0.1313" style="stop-color:#73858E" />
            <stop offset="0.5251" style="stop-color:#CFDCE2" />
            <stop offset="0.852" style="stop-color:#73858E" />
            <stop offset="1" style="stop-color:#8D9EA6" />
          </linearGradient>
          <path
            class="xfsb-${id}-st37"
            d="M73.89,128.98c14.72,0,26.65-4.25,26.65-9.5V61.99c-5.66,3.14-15.48,5.22-26.65,5.22
          c-11.17,0-20.99-2.08-26.65-5.22v57.49C47.24,124.73,59.17,128.98,73.89,128.98z"
          />
          <g class="xfsb-${id}-st34">
            <path
              class="xfsb-${id}-st35"
              d="M66.46,66.9l0.04,0c-0.02,0-0.05,0-0.07-0.01L66.46,66.9z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M59.67,127.52V66c-1.35-0.24-2.64-0.52-3.86-0.83v61.29C57,126.85,58.29,127.21,59.67,127.52z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M92.52,65.04v61.24c1.27-0.44,2.42-0.93,3.42-1.45V64C94.86,64.37,93.72,64.72,92.52,65.04z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M79.52,67.03c-1.26,0.08-2.55,0.14-3.86,0.16v61.76c1.32-0.03,2.61-0.09,3.86-0.19V67.03z"
            />
          </g>
          <g>
            <path
              class="xfsb-${id}-st36"
              d="M66.46,66.9l0.04,0c-0.02,0-0.05,0-0.07-0.01L66.46,66.9z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M93.38,64.8v61.16c0.59-0.23,1.15-0.46,1.68-0.71V64.29C94.52,64.47,93.96,64.63,93.38,64.8z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M58.69,127.29V65.82c-0.65-0.13-1.28-0.26-1.9-0.4v61.35C57.4,126.95,58.03,127.12,58.69,127.29z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M78.54,128.84V67.09c-0.63,0.03-1.26,0.06-1.9,0.08v61.76C77.28,128.91,77.91,128.88,78.54,128.84z"
            />
          </g>
        </g>
      </g>
      <g class="f3">
        <animate
          values="hide;hide;show;"
          dur="0.5s"
          attributeName="class"
          repeatCount="indefinite"
        />
        <g class="xfsb-${id}-st29">
          <path
            class="xfsb-${id}-st30"
            d="M73.89,67.22c-15.57,0-28.51-4.04-31.23-9.37v65.05c0,6.22,13.98,11.26,31.23,11.26s31.23-5.04,31.23-11.26
          V57.84C102.4,63.18,89.46,67.22,73.89,67.22z"
          />
          <ellipse
            class="xfsb-${id}-st31"
            cx="73.89"
            cy="122.89"
            rx="31.23"
            ry="11.26"
          />
          <g>
            <path
              class="xfsb-${id}-st32"
              d="M105.11,57.84c-0.43,0.84-1.11,1.65-2.01,2.41v66.62c1.3-1.24,2.01-2.58,2.01-3.98V57.84z"
            />
          </g>
          <path
            class="xfsb-${id}-st32"
            d="M42.66,57.84v65.05c0,1.4,0.71,2.73,2,3.97V60.24C43.76,59.48,43.08,58.68,42.66,57.84z"
          />

          <linearGradient
            id="xfsb_${id}_SVGID_27_"
            gradientUnits="userSpaceOnUse"
            x1="606.0136"
            y1="1.031"
            x2="606.0136"
            y2="-52.2624"
            gradientTransform="matrix(0 -1 1 0 99.5014 701.5014)"
          >
            <stop offset="0" style="stop-color:#A6B5BD" />
            <stop offset="0.1313" style="stop-color:#73858E" />
            <stop offset="0.5251" style="stop-color:#CFDCE2" />
            <stop offset="0.852" style="stop-color:#73858E" />
            <stop offset="1" style="stop-color:#8D9EA6" />
          </linearGradient>
          <path
            class="xfsb-${id}-st38"
            d="M73.89,128.98c14.72,0,26.65-4.25,26.65-9.5V61.99c-5.66,3.14-15.48,5.22-26.65,5.22
          c-11.17,0-20.99-2.08-26.65-5.22v57.49C47.24,124.73,59.17,128.98,73.89,128.98z"
          />
          <g class="xfsb-${id}-st34">
            <path
              class="xfsb-${id}-st35"
              d="M65.92,66.85c-1.32-0.12-2.61-0.28-3.86-0.46V128c1.24,0.22,2.53,0.41,3.86,0.56V66.85z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M50.29,63.42c-0.97-0.39-1.86-0.8-2.67-1.23v58.88c0.47,1,1.39,1.95,2.67,2.82V63.42z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M66.46,66.9l0.04,0c-0.02,0-0.05,0-0.07-0.01L66.46,66.9z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M96.51,63.79v60.71c1.04-0.59,1.9-1.23,2.55-1.9V62.73C98.27,63.11,97.42,63.46,96.51,63.79z"
            />
            <path
              class="xfsb-${id}-st35"
              d="M85.77,66.39c-1.25,0.18-2.54,0.34-3.86,0.46v61.7c1.34-0.15,2.63-0.34,3.86-0.56V66.39z"
            />
          </g>
          <g>
            <path
              class="xfsb-${id}-st36"
              d="M66.46,66.9l0.04,0c-0.02,0-0.05,0-0.07-0.01L66.46,66.9z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M49.61,63.14c-0.46-0.2-0.89-0.4-1.31-0.6v59.59c0.35,0.44,0.8,0.86,1.31,1.27V63.14z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M64.94,66.75c-0.64-0.07-1.28-0.14-1.9-0.22v61.64c0.62,0.1,1.26,0.19,1.9,0.27V66.75z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M97.16,63.55v60.56c0.46-0.29,0.88-0.6,1.25-0.91V63.03C98.01,63.21,97.59,63.38,97.16,63.55z"
            />
            <path
              class="xfsb-${id}-st36"
              d="M84.79,66.52c-0.63,0.08-1.26,0.16-1.9,0.23v61.68c0.65-0.08,1.28-0.18,1.9-0.27V66.52z"
            />
          </g>
        </g>
      </g>
    </g><g class="SVG_alert">
      <path
        class="xfsb-${id}-st39"
        d="M151.79,151.15c0-13.9-4.33-25.25-9.77-25.91c-0.17-0.02-0.33-0.03-0.5-0.03h-6.42
        c-3.78,0-7.08,5.15-8.86,12.82h-6.85c-2.86-4.24-7.38-7.98-13.09-10.96v-0.02c1.04-1.15,1.84-2.36,2.35-3.62v3.84
        c0.88-1.18,1.5-2.42,1.85-3.7V79.8V48.39c2.08-1.71,3.24-3.6,3.24-5.59V19.16v-4.01l0,0c0-4.73-6.53-8.9-16.52-11.45
        C92.52,1.48,84.1,0,74.48,0c-9.61,0-18.04,1.48-22.73,3.7c-10,2.55-16.52,6.72-16.52,11.45l0,0v4.01v23.64
        c0,1.56,0.72,3.06,2.04,4.47v30.75v45.55c0.35,1.28,0.97,2.52,1.85,3.7v-3.84c0.49,1.22,1.24,2.39,2.23,3.5
        c-5.85,3-10.46,6.79-13.37,11.1h-2.44c-1.78-7.67-5.08-12.82-8.86-12.82h-6.42c-0.17,0-0.34,0.01-0.5,0.03
        C4.33,125.9,0,137.25,0,151.15s4.33,25.25,9.77,25.91c0.17,0.02,0.33,0.03,0.5,0.03h6.42c3.94,0,7.36-5.61,9.08-13.83h5.59
        c2.31,2.29,5.14,4.37,8.4,6.2l-15.96,21.71h-0.21v0.28v0.28V200h76.5l18.47-25.13v-8.09l0.18-0.24l-0.18-0.22l0,0l0,0l-0.18-0.22
        l-0.16,0.22h-5.78c1.3-0.98,2.49-2,3.57-3.07c0.02,0,0.05,0.01,0.07,0.01h9.93c1.72,8.22,5.14,13.83,9.08,13.83h6.42
        c0.17,0,0.34-0.01,0.5-0.03C147.47,176.39,151.79,165.05,151.79,151.15z"
      />
    </g>`;
    return text;
  }

  refresh() {
    super.refresh();
    let { info = {}, pointValue } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", height = 0, width = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find("svg");
    $svg.attr({ width, height });
    if (pointValue == 1) {
      $svg.find(".SVG_ani").show();
      // $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").hide();
    } else if (pointValue == 2) {
      $svg.find(".SVG_ani").hide();
      // $svg.find(".SVG_sta").hide();
      $svg.find(".SVG_alert").show();
    }
  }

  //加载数据
  loadData() {
    this.loadDeviceInfo();
  }

  //刷新内容
  refreshContent(data) {
    let { point } = data || {};
    if (point) {
      let { value = "" } = point || {};
      this.pointValue = value;
      this.refresh();
    }
  }

  event() {}
}

export default Display;
