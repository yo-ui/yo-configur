import bmCommon from "@/common/common";
import Component from "@/core/Component";
// import "../../../../assets/less/components/component/basic/display.less";
// 蓄水装置
class Display extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  //组件样式

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-device-xszz-com component"
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
      viewBox="0 0 144 300"
      width="${width}"
      height="${height}"
      xml:space="preserve"
      preserveAspectRatio="none"
    >
    <defs>
    <style type='text/css'>
  .xszz-${id}-st0{fill:url(#xszz_1_);}
          .xszz-${id}-st1{fill:url(#xszz_2_);}
          .xszz-${id}-st2{fill:url(#xszz_3_);}
          .xszz-${id}-st3{fill:url(#xszz_4_);}
          .xszz-${id}-st4{fill:url(#xszz_5_);}
          .xszz-${id}-st5{fill:url(#xszz_6_);}
          .xszz-${id}-st6{fill:url(#xszz_7_);}
          .xszz-${id}-st7{opacity:0.7;fill:#353535;}
          .xszz-${id}-st8{fill:url(#xszz_8_);}
          .xszz-${id}-st9{fill:url(#xszz_9_);}
          .xszz-${id}-st10{fill:url(#xszz_10_);}
          .xszz-${id}-st11{fill:url(#xszz_11_);}
          .xszz-${id}-st12{fill:url(#xszz_12_);}
          .xszz-${id}-st13{fill:url(#xszz_13_);}
          .xszz-${id}-st14{fill:url(#xszz_14_);}
          .xszz-${id}-st15{fill:url(#xszz_15_);}
          .xszz-${id}-st16{fill:url(#xszz_16_);}
          .xszz-${id}-st17{fill:url(#xszz_17_);}
  </style>
  </defs>${this.renderSvgContent()}
    </svg>
    `;
  }

  renderSvgContent() {
    let { info = {} } = this;
    let { id = "" } = info || {};
    let text = `<g>
    <linearGradient
      id="xszz_1_"
      gradientUnits="userSpaceOnUse"
      x1="-9.8675"
      y1="329.4591"
      x2="13.7365"
      y2="329.4591"
      gradientTransform="matrix(0.9891 0.1473 -0.1683 1.1304 78.4652 -100.0087)"
    >
      <stop offset="0" style="stop-color:#564D4E" />
      <stop offset="0.034" style="stop-color:#6D6768" />
      <stop offset="0.0985" style="stop-color:#949494" />
      <stop offset="0.1607" style="stop-color:#B3B7B6" />
      <stop offset="0.2192" style="stop-color:#C9D0CF" />
      <stop offset="0.2724" style="stop-color:#D6DFDE" />
      <stop offset="0.3156" style="stop-color:#DBE4E3" />
      <stop offset="0.3588" style="stop-color:#D1D9D8" />
      <stop offset="0.435" style="stop-color:#B7BCBA" />
      <stop offset="0.5351" style="stop-color:#8C8C8A" />
      <stop offset="0.6543" style="stop-color:#524A48" />
      <stop offset="0.66" style="stop-color:#4F4745" />
      <stop offset="0.7581" style="stop-color:#5E5B57" />
      <stop offset="0.8547" style="stop-color:#71726C" />
      <stop offset="0.8835" style="stop-color:#6C6C67" />
      <stop offset="0.9204" style="stop-color:#5C5C57" />
      <stop offset="0.9616" style="stop-color:#42423F" />
      <stop offset="1" style="stop-color:#242321" />
    </linearGradient>
    <path
      class="xszz-${id}-st0"
      d="M33.77,293.44c0,0-0.41,6.6-13.49,6.56c-10.98-0.03-10.68-4.45-10.68-4.45l7.79-52.34l23.34,3.48L33.77,293.44
            z"
    />

    <linearGradient
      id="xszz_2_"
      gradientUnits="userSpaceOnUse"
      x1="56.4722"
      y1="267.5997"
      x2="80.0725"
      y2="267.5997"
      gradientTransform="matrix(1 0 0 1.1428 -0.2846 -55.2175)"
    >
      <stop offset="0" style="stop-color:#564D4E" />
      <stop offset="0.0406" style="stop-color:#60595A" />
      <stop offset="0.1441" style="stop-color:#757272" />
      <stop offset="0.2387" style="stop-color:#828181" />
      <stop offset="0.3156" style="stop-color:#868686" />
      <stop offset="0.402" style="stop-color:#7D7B7B" />
      <stop offset="0.5535" style="stop-color:#645F5E" />
      <stop offset="0.66" style="stop-color:#4F4745" />
      <stop offset="0.7581" style="stop-color:#5E5B57" />
      <stop offset="0.8547" style="stop-color:#71726C" />
      <stop offset="0.8835" style="stop-color:#6C6C67" />
      <stop offset="0.9204" style="stop-color:#5C5C57" />
      <stop offset="0.9616" style="stop-color:#42423F" />
      <stop offset="1" style="stop-color:#242321" />
    </linearGradient>
    <path
      class="xszz-${id}-st1"
      d="M79.79,274.85c0,0-1.11,4.42-11.8,4.42c-10.21,0-11.8-4.42-11.8-4.42v-52.91h23.6V274.85z"
    />

    <linearGradient
      id="xszz_3_"
      gradientUnits="userSpaceOnUse"
      x1="133.4917"
      y1="243.7333"
      x2="157.0925"
      y2="243.7333"
      gradientTransform="matrix(0.9862 -0.1655 0.1892 1.1271 -77.3245 22.3251)"
    >
      <stop offset="0" style="stop-color:#564D4E" />
      <stop offset="0.034" style="stop-color:#6D6768" />
      <stop offset="0.0985" style="stop-color:#949494" />
      <stop offset="0.1607" style="stop-color:#B3B7B6" />
      <stop offset="0.2192" style="stop-color:#C9D0CF" />
      <stop offset="0.2724" style="stop-color:#D6DFDE" />
      <stop offset="0.3156" style="stop-color:#DBE4E3" />
      <stop offset="0.3588" style="stop-color:#D1D9D8" />
      <stop offset="0.435" style="stop-color:#B7BCBA" />
      <stop offset="0.5351" style="stop-color:#8C8C8A" />
      <stop offset="0.6543" style="stop-color:#524A48" />
      <stop offset="0.66" style="stop-color:#4F4745" />
      <stop offset="0.7581" style="stop-color:#5E5B57" />
      <stop offset="0.8547" style="stop-color:#71726C" />
      <stop offset="0.8835" style="stop-color:#6C6C67" />
      <stop offset="0.9204" style="stop-color:#5C5C57" />
      <stop offset="0.9616" style="stop-color:#42423F" />
      <stop offset="1" style="stop-color:#242321" />
    </linearGradient>
    <path
      class="xszz-${id}-st2"
      d="M127.86,295.74c0,0-2.24,5.3-13.56,4.08c-10.12-1.1-10.9-7.22-10.9-7.22l-7.58-45.13l23.27-3.91L127.86,295.74
            z"
    />
    <linearGradient
      id="xszz_4_"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="141.8857"
      x2="129.4349"
      y2="141.8857"
    >
      <stop offset="0" style="stop-color:#564D4E" />
      <stop offset="0.034" style="stop-color:#6D6768" />
      <stop offset="0.0985" style="stop-color:#949494" />
      <stop offset="0.1607" style="stop-color:#B3B7B6" />
      <stop offset="0.2192" style="stop-color:#C9D0CF" />
      <stop offset="0.2724" style="stop-color:#D6DFDE" />
      <stop offset="0.3156" style="stop-color:#DBE4E3" />
      <stop offset="0.3588" style="stop-color:#D1D9D8" />
      <stop offset="0.435" style="stop-color:#B7BCBA" />
      <stop offset="0.5351" style="stop-color:#8C8C8A" />
      <stop offset="0.6543" style="stop-color:#524A48" />
      <stop offset="0.66" style="stop-color:#4F4745" />
      <stop offset="0.7581" style="stop-color:#5E5B57" />
      <stop offset="0.8547" style="stop-color:#71726C" />
      <stop offset="0.8835" style="stop-color:#6C6C67" />
      <stop offset="0.9204" style="stop-color:#5C5C57" />
      <stop offset="0.9616" style="stop-color:#42423F" />
      <stop offset="1" style="stop-color:#242321" />
    </linearGradient>
    <path
      class="xszz-${id}-st3"
      d="M0,25.97v208.04c0,10.11,28.97,23.78,64.72,23.78s64.72-13.67,64.72-23.78V25.97H0z"
    />

    <radialGradient
      id="xszz_5_"
      cx="23.4093"
      cy="11.8693"
      r="129.9642"
      gradientTransform="matrix(1 0 0 0.5141 0 5.7676)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#817E7E" />
      <stop offset="0.1577" style="stop-color:#7C7978" />
      <stop offset="0.3594" style="stop-color:#6E6A69" />
      <stop offset="0.584" style="stop-color:#58514E" />
      <stop offset="0.6592" style="stop-color:#4F4744" />
      <stop offset="0.7877" style="stop-color:#61625D" />
      <stop offset="0.9106" style="stop-color:#252422" />
    </radialGradient>
    <path
      class="xszz-${id}-st4"
      d="M129.43,25.97c0,10.11-28.97,18.3-64.72,18.3S0,36.08,0,25.97S28.97,0,64.72,0S129.43,15.87,129.43,25.97z"
    />

    <radialGradient
      id="xszz_6_"
      cx="61.0575"
      cy="231.0031"
      r="101.2564"
      gradientTransform="matrix(1 0 0 0.2634 0 170.1684)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.6272" style="stop-color:#000000;stop-opacity:0" />
      <stop offset="1" style="stop-color:#000000;stop-opacity:0.7" />
    </radialGradient>
    <path
      class="xszz-${id}-st5"
      d="M0,233.49v0.53c0,10.11,28.97,23.78,64.72,23.78s64.72-13.67,64.72-23.78v-0.53H0z"
    />

    <radialGradient
      id="xszz_7_"
      cx="49.9186"
      cy="209.9121"
      r="44.6739"
      gradientTransform="matrix(1 0 0 0.3889 0 -59.8889)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.8" />
      <stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0" />
    </radialGradient>
    <ellipse
      class="xszz-${id}-st6"
      cx="49.92"
      cy="21.74"
      rx="44.67"
      ry="17.37"
    />
    <g>
      <ellipse
        class="xszz-${id}-st7"
        cx="115.24"
        cy="228.09"
        rx="4.62"
        ry="8.69"
      />

      <linearGradient
        id="xszz_8_"
        gradientUnits="userSpaceOnUse"
        x1="633.0592"
        y1="221.3158"
        x2="633.0592"
        y2="235.0105"
        gradientTransform="matrix(-1 0 0 1 759.2192 0)"
      >
        <stop offset="0" style="stop-color:#564D4E" />
        <stop offset="0.034" style="stop-color:#6D6768" />
        <stop offset="0.0985" style="stop-color:#949494" />
        <stop offset="0.1607" style="stop-color:#B3B7B6" />
        <stop offset="0.2192" style="stop-color:#C9D0CF" />
        <stop offset="0.2724" style="stop-color:#D6DFDE" />
        <stop offset="0.3156" style="stop-color:#DBE4E3" />
        <stop offset="0.3588" style="stop-color:#D1D9D8" />
        <stop offset="0.435" style="stop-color:#B7BCBA" />
        <stop offset="0.5351" style="stop-color:#8C8C8A" />
        <stop offset="0.6543" style="stop-color:#524A48" />
        <stop offset="0.66" style="stop-color:#4F4745" />
        <stop offset="0.7581" style="stop-color:#5E5B57" />
        <stop offset="0.8547" style="stop-color:#71726C" />
        <stop offset="0.8835" style="stop-color:#6C6C67" />
        <stop offset="0.9204" style="stop-color:#5C5C57" />
        <stop offset="0.9616" style="stop-color:#42423F" />
        <stop offset="1" style="stop-color:#242321" />
      </linearGradient>
      <path
        class="xszz-${id}-st8"
        d="M140.33,235.01v-13.69h-26.11c0,0-2.23,2.05-2.23,6.85c0,5.67,2.23,6.85,2.23,6.85H140.33z"
      />

      <linearGradient
        id="xszz_9_"
        gradientUnits="userSpaceOnUse"
        x1="488.7284"
        y1="300.0054"
        x2="457.7979"
        y2="300.0054"
        gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)"
      >
        <stop offset="0" style="stop-color:#564D4E" />
        <stop offset="0.034" style="stop-color:#6D6768" />
        <stop offset="0.0985" style="stop-color:#949494" />
        <stop offset="0.1607" style="stop-color:#B3B7B6" />
        <stop offset="0.2192" style="stop-color:#C9D0CF" />
        <stop offset="0.2724" style="stop-color:#D6DFDE" />
        <stop offset="0.3156" style="stop-color:#DBE4E3" />
        <stop offset="0.3588" style="stop-color:#D1D9D8" />
        <stop offset="0.435" style="stop-color:#B7BCBA" />
        <stop offset="0.5351" style="stop-color:#8C8C8A" />
        <stop offset="0.6543" style="stop-color:#524A48" />
        <stop offset="0.66" style="stop-color:#4F4745" />
        <stop offset="0.7581" style="stop-color:#5E5B57" />
        <stop offset="0.8547" style="stop-color:#71726C" />
        <stop offset="0.8835" style="stop-color:#6C6C67" />
        <stop offset="0.9204" style="stop-color:#5C5C57" />
        <stop offset="0.9616" style="stop-color:#42423F" />
        <stop offset="1" style="stop-color:#242321" />
      </linearGradient>
      <path
        class="xszz-${id}-st9"
        d="M137.99,216.58c1.39,2.81,2.28,7.13,2.28,11.97c0,4.84-0.89,9.16-2.28,11.97v3.37h-3.8
              c-3.36,0-6.07-6.87-6.07-15.34c0-8.47,2.72-15.34,6.07-15.34h3.8V216.58z"
      />
      <linearGradient
        id="xszz_10_"
        gradientUnits="userSpaceOnUse"
        x1="146.7045"
        y1="231.2524"
        x2="135.1306"
        y2="227.6676"
      >
        <stop offset="0" style="stop-color:#74716F" />
        <stop offset="1" style="stop-color:#ABAEAD" />
      </linearGradient>
      <ellipse
        class="xszz-${id}-st10"
        cx="137.99"
        cy="228.55"
        rx="6.07"
        ry="15.34"
      />

      <linearGradient
        id="xszz_11_"
        gradientUnits="userSpaceOnUse"
        x1="479.4106"
        y1="295.4493"
        x2="467.3197"
        y2="295.4493"
        gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)"
      >
        <stop offset="0" style="stop-color:#262623" />
        <stop offset="0.648" style="stop-color:#575753" />
        <stop offset="1" style="stop-color:#262623" />
      </linearGradient>
      <ellipse
        class="xszz-${id}-st11"
        cx="138.75"
        cy="228.55"
        rx="2.46"
        ry="6.2"
      />
      <linearGradient
        id="xszz_12_"
        gradientUnits="userSpaceOnUse"
        x1="135.2497"
        y1="213.213"
        x2="135.2497"
        y2="243.8948"
      >
        <stop offset="0" style="stop-color:#AFB2B1" />
        <stop offset="2.568830e-04" style="stop-color:#AFB2B1" />
        <stop offset="0.0902" style="stop-color:#D2D3D3" />
        <stop offset="0.1753" style="stop-color:#EBEBEB" />
        <stop offset="0.2527" style="stop-color:#FAFAFA" />
        <stop offset="0.3156" style="stop-color:#FFFFFF" />
        <stop offset="0.3659" style="stop-color:#F4F4F4" />
        <stop offset="0.4545" style="stop-color:#D7D7D6" />
        <stop offset="0.5702" style="stop-color:#A9A7A7" />
        <stop offset="0.66" style="stop-color:#807E7D" />
        <stop offset="0.8547" style="stop-color:#8B8A88" />
        <stop offset="0.9067" style="stop-color:#868582" />
        <stop offset="0.9734" style="stop-color:#777772" />
        <stop offset="1" style="stop-color:#6F6F6A" />
      </linearGradient>
      <path
        class="xszz-${id}-st12"
        d="M133.1,228.55c0,7.97,2.41,14.52,5.48,15.27c-0.19,0.05-0.39,0.07-0.59,0.07c-3.36,0-6.07-6.87-6.07-15.34
              c0-8.47,2.72-15.34,6.07-15.34c0.2,0,0.4,0.03,0.59,0.07C135.5,214.04,133.1,220.58,133.1,228.55z"
      />
    </g>
    <g>
      <ellipse
        class="xszz-${id}-st7"
        cx="115.24"
        cy="57.49"
        rx="4.62"
        ry="8.69"
      />

      <linearGradient
        id="xszz_13_"
        gradientUnits="userSpaceOnUse"
        x1="633.0592"
        y1="50.7159"
        x2="633.0592"
        y2="64.4106"
        gradientTransform="matrix(-1 0 0 1 759.2192 0)"
      >
        <stop offset="0" style="stop-color:#564D4E" />
        <stop offset="0.034" style="stop-color:#6D6768" />
        <stop offset="0.0985" style="stop-color:#949494" />
        <stop offset="0.1607" style="stop-color:#B3B7B6" />
        <stop offset="0.2192" style="stop-color:#C9D0CF" />
        <stop offset="0.2724" style="stop-color:#D6DFDE" />
        <stop offset="0.3156" style="stop-color:#DBE4E3" />
        <stop offset="0.3588" style="stop-color:#D1D9D8" />
        <stop offset="0.435" style="stop-color:#B7BCBA" />
        <stop offset="0.5351" style="stop-color:#8C8C8A" />
        <stop offset="0.6543" style="stop-color:#524A48" />
        <stop offset="0.66" style="stop-color:#4F4745" />
        <stop offset="0.7581" style="stop-color:#5E5B57" />
        <stop offset="0.8547" style="stop-color:#71726C" />
        <stop offset="0.8835" style="stop-color:#6C6C67" />
        <stop offset="0.9204" style="stop-color:#5C5C57" />
        <stop offset="0.9616" style="stop-color:#42423F" />
        <stop offset="1" style="stop-color:#242321" />
      </linearGradient>
      <path
        class="xszz-${id}-st13"
        d="M140.33,64.41V50.72h-26.11c0,0-2.23,2.05-2.23,6.85c0,5.67,2.23,6.85,2.23,6.85H140.33z"
      />

      <linearGradient
        id="xszz_14_"
        gradientUnits="userSpaceOnUse"
        x1="659.3283"
        y1="300.0054"
        x2="628.3978"
        y2="300.0054"
        gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)"
      >
        <stop offset="0" style="stop-color:#564D4E" />
        <stop offset="0.034" style="stop-color:#6D6768" />
        <stop offset="0.0985" style="stop-color:#949494" />
        <stop offset="0.1607" style="stop-color:#B3B7B6" />
        <stop offset="0.2192" style="stop-color:#C9D0CF" />
        <stop offset="0.2724" style="stop-color:#D6DFDE" />
        <stop offset="0.3156" style="stop-color:#DBE4E3" />
        <stop offset="0.3588" style="stop-color:#D1D9D8" />
        <stop offset="0.435" style="stop-color:#B7BCBA" />
        <stop offset="0.5351" style="stop-color:#8C8C8A" />
        <stop offset="0.6543" style="stop-color:#524A48" />
        <stop offset="0.66" style="stop-color:#4F4745" />
        <stop offset="0.7581" style="stop-color:#5E5B57" />
        <stop offset="0.8547" style="stop-color:#71726C" />
        <stop offset="0.8835" style="stop-color:#6C6C67" />
        <stop offset="0.9204" style="stop-color:#5C5C57" />
        <stop offset="0.9616" style="stop-color:#42423F" />
        <stop offset="1" style="stop-color:#242321" />
      </linearGradient>
      <path
        class="xszz-${id}-st14"
        d="M137.99,45.98c1.39,2.81,2.28,7.13,2.28,11.97s-0.89,9.16-2.28,11.97v3.37h-3.8
              c-3.36,0-6.07-6.87-6.07-15.34s2.72-15.34,6.07-15.34h3.8V45.98z"
      />
      <linearGradient
        id="xszz_15_"
        gradientUnits="userSpaceOnUse"
        x1="146.7045"
        y1="60.6525"
        x2="135.1306"
        y2="57.0677"
      >
        <stop offset="0" style="stop-color:#74716F" />
        <stop offset="1" style="stop-color:#ABAEAD" />
      </linearGradient>
      <ellipse
        class="xszz-${id}-st15"
        cx="137.99"
        cy="57.95"
        rx="6.07"
        ry="15.34"
      />

      <linearGradient
        id="xszz_16_"
        gradientUnits="userSpaceOnUse"
        x1="650.0106"
        y1="295.4493"
        x2="637.9196"
        y2="295.4493"
        gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)"
      >
        <stop offset="0" style="stop-color:#262623" />
        <stop offset="0.648" style="stop-color:#575753" />
        <stop offset="1" style="stop-color:#262623" />
      </linearGradient>
      <ellipse
        class="xszz-${id}-st16"
        cx="138.75"
        cy="57.95"
        rx="2.46"
        ry="6.2"
      />
      <linearGradient
        id="xszz_17_"
        gradientUnits="userSpaceOnUse"
        x1="135.2497"
        y1="42.6131"
        x2="135.2497"
        y2="73.2949"
      >
        <stop offset="0" style="stop-color:#AFB2B1" />
        <stop offset="2.568830e-04" style="stop-color:#AFB2B1" />
        <stop offset="0.0902" style="stop-color:#D2D3D3" />
        <stop offset="0.1753" style="stop-color:#EBEBEB" />
        <stop offset="0.2527" style="stop-color:#FAFAFA" />
        <stop offset="0.3156" style="stop-color:#FFFFFF" />
        <stop offset="0.3659" style="stop-color:#F4F4F4" />
        <stop offset="0.4545" style="stop-color:#D7D7D6" />
        <stop offset="0.5702" style="stop-color:#A9A7A7" />
        <stop offset="0.66" style="stop-color:#807E7D" />
        <stop offset="0.8547" style="stop-color:#8B8A88" />
        <stop offset="0.9067" style="stop-color:#868582" />
        <stop offset="0.9734" style="stop-color:#777772" />
        <stop offset="1" style="stop-color:#6F6F6A" />
      </linearGradient>
      <path
        class="xszz-${id}-st17"
        d="M133.1,57.95c0,7.97,2.41,14.52,5.48,15.27c-0.19,0.05-0.39,0.07-0.59,0.07c-3.36,0-6.07-6.87-6.07-15.34
              s2.72-15.34,6.07-15.34c0.2,0,0.4,0.03,0.59,0.07C135.5,43.44,133.1,49.98,133.1,57.95z"
      />
    </g>
  </g>`;
    return text;
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "", width = 0, height = 0 } = info || {};
    let $container = $(`#${id}>.component`);
    let $svg = $container.find(`svg`);
    $svg.attr({ width, height });
  }

  // //加载数据
  // loadData() {
  //   this.loadDeviceInfo();
  // }

  // //刷新内容
  // refreshContent(data) {
  //   let { info = {} } = this;
  //   let { point } = data || {};
  //   if (point) {
  //     let { value = "", unit = "" } = point || {};
  //     info.content = value;
  //     info.unit = unit;
  //     this.refresh();
  //   }
  // }

  event() {}
}

export default Display;
