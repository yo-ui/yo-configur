<template>
  <div class="bm-basic-amt-com" :style="comStyle">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="`0 0 87 26`"
      :width="info.width"
      :height="info.height"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
      <defs
        v-html="
          `
        <style type='text/css'>
        .amt-${info.id}-st0{fill:url(#amt_${info.id}_SVGID_1_);}
	.amt-${info.id}-st1{fill:url(#amt_${info.id}_SVGID_2_);}
	.amt-${info.id}-st2{opacity:0.6;}
	.amt-${info.id}-st3{fill:#FFFFFF;}
	.amt-${info.id}-st4{display:none;}
	.amt-${info.id}-st5{display:inline;fill:url(#amt_${info.id}_SVGID_3_);}
	.amt-${info.id}-st6{display:inline;fill:url(#amt_${info.id}_SVGID_4_);}
	.amt-${info.id}-st7{display:inline;}
	.amt-${info.id}-st8{fill:#666666;}
      </style>
      `
        "
      ></defs>

      <g id="图层_2" v-if="info.content">
        <linearGradient
          :id="`amt_${info.id}_SVGID_1_`"
          gradientUnits="userSpaceOnUse"
          x1="43.5"
          y1="26"
          x2="43.5"
          y2="-9.094947e-13"
        >
          <stop offset="0" style="stop-color:#E6E6E6" />
          <stop offset="1" style="stop-color:#B3B3B3" />
        </linearGradient>
        <path
          :class="`amt-${info.id}-st0`"
          d="M84,26H3c-1.7,0-3-1.3-3-3V3c0-1.7,1.3-3,3-3h81c1.7,0,3,1.3,3,3v20C87,24.7,85.7,26,84,26z"
        />
        <linearGradient
          :id="`amt_${info.id}_SVGID_2_`"
          gradientUnits="userSpaceOnUse"
          x1="64"
          y1="24"
          x2="64"
          y2="2"
        >
          <stop offset="0" style="stop-color:#4D5189" />
          <stop offset="1" style="stop-color:#6B71A5" />
        </linearGradient>
        <path
          :class="`amt-${info.id}-st1`"
          d="M82,24H46c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3v16C85,22.7,83.7,24,82,24z"
        />
        <g :class="`amt-${info.id}-st2`">
          <path
            d="M13.9,7.5c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.3,0.2-0.6,0.3-0.9l1.3,0.2l-0.5,1.6h5v11h-9.9v-11H13.9z M11.6,10.8H19V8.7h-7.4
			V10.8z M11.6,13.9H19v-1.9h-7.4V13.9z M19,17.3v-2.2h-7.4v2.2H19z"
          />
          <path
            d="M27.8,12.8c0.1,0.2,0.2,0.5,0.3,0.8c0.1,0.3,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.3,1
			c0.2-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.5,0.2-1.2,0.3-2.1c0.1-0.9,0.2-1.9,0.2-3.1h-1.8V8.5h1.8l0.1-2.7h1.1
			l-0.1,2.7h3.3c0,0.6,0,1.3,0,2c0,0.7,0,1.4,0,2.2s0,1.5-0.1,2.2c0,0.7-0.1,1.4-0.1,2c0,0.5-0.2,0.9-0.4,1.2
			c-0.2,0.3-0.6,0.5-1.1,0.5c-0.1,0-0.3,0-0.4,0s-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0s-0.3,0-0.5,0l-0.3-1.3c0.3,0,0.7,0,0.9,0
			c0.3,0,0.5,0,0.8,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.3s0-0.3,0.1-0.5c0-0.5,0.1-1,0.1-1.6
			c0-0.6,0-1.2,0.1-1.8s0-1.2,0-1.8c0-0.6,0-1.1,0-1.6h-2.2c0,1.3-0.1,2.3-0.2,3.3s-0.2,1.7-0.3,2.3c-0.3,1.2-1,2.6-2.1,4l-1.1-0.7
			c0.4-0.5,0.7-1,1-1.4l-0.8,0.3L28.2,17c-0.4,0.1-0.8,0.1-1.2,0.2s-0.8,0.1-1.3,0.1c-0.4,0-0.9,0.1-1.3,0.1s-0.8,0.1-1.2,0.1
			l-0.3-1.2c0.2-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.3-0.7,0.4-1.1
			c0.1-0.4,0.3-0.8,0.4-1.2c0.1-0.4,0.3-0.8,0.4-1.1h-2v-1.2h6.2v1.2h-2.9c-0.2,0.6-0.4,1.3-0.7,2.1c-0.2,0.5-0.4,1-0.5,1.4
			c-0.2,0.4-0.3,0.8-0.5,1c0.5,0,0.9-0.1,1.5-0.1c0.5-0.1,1.1-0.1,1.7-0.2c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.3-0.2-0.5-0.3-0.7
			c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.2-0.4-0.2-0.5L27.8,12.8z M28.8,6.9V8h-5.2V6.9H28.8z"
          />
        </g>
        <g>
          <path
            :class="`amt-${info.id}-st3`"
            d="M57.8,13.5v-2.1H53v-1.2h4.8V8.1c-1,0.1-1.9,0.1-2.6,0.1c-0.8,0-1.4,0-2,0L53,7.1c0.7,0,1.5,0,2.3,0
			s1.9-0.1,3-0.2c1.1-0.1,2.1-0.2,2.9-0.3c0.8-0.1,1.5-0.2,2.2-0.3l0.3,1.2c-0.6,0.1-1.3,0.2-2,0.3C60.9,7.8,60,7.9,59.1,8v2.3h4.5
			v1.2h-4.5v2.1h5.5v1.2h-5.5v2.4c0,0.3,0,0.5-0.1,0.7s-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.1-0.4,0.1-0.7,0.2
			c-0.1,0-0.3,0-0.4,0s-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.4,0l-0.3-1.3c0.5,0,1,0.1,1.5,0c0.2,0,0.3,0,0.4,0
			c0.1,0,0.2-0.1,0.3-0.1s0.1-0.1,0.1-0.3c0-0.1,0-0.3,0-0.5v-1.9H52v-1.2H57.8z"
          />
          <path
            :class="`amt-${info.id}-st3`"
            d="M70.8,12.8c0.1,0.2,0.2,0.5,0.3,0.8c0.1,0.3,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.3,1
			c0.2-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.5,0.2-1.2,0.3-2.1c0.1-0.9,0.2-1.9,0.2-3.1h-1.8V8.5h1.8l0.1-2.7h1.1
			l-0.1,2.7h3.3c0,0.6,0,1.3,0,2c0,0.7,0,1.4,0,2.2s0,1.5-0.1,2.2c0,0.7-0.1,1.4-0.1,2c0,0.5-0.2,0.9-0.4,1.2
			c-0.2,0.3-0.6,0.5-1.1,0.5c-0.1,0-0.3,0-0.4,0s-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0s-0.3,0-0.5,0l-0.3-1.3c0.3,0,0.7,0,0.9,0
			c0.3,0,0.5,0,0.8,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.3s0-0.3,0.1-0.5c0-0.5,0.1-1,0.1-1.6
			c0-0.6,0-1.2,0.1-1.8s0-1.2,0-1.8c0-0.6,0-1.1,0-1.6h-2.2c0,1.3-0.1,2.3-0.2,3.3s-0.2,1.7-0.3,2.3c-0.3,1.2-1,2.6-2.1,4l-1.1-0.7
			c0.4-0.5,0.7-1,1-1.4l-0.8,0.3L71.2,17c-0.4,0.1-0.8,0.1-1.2,0.2s-0.8,0.1-1.3,0.1c-0.4,0-0.9,0.1-1.3,0.1s-0.8,0.1-1.2,0.1
			l-0.3-1.2c0.2-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.3-0.7,0.4-1.1
			c0.1-0.4,0.3-0.8,0.4-1.2c0.1-0.4,0.3-0.8,0.4-1.1h-2v-1.2h6.2v1.2h-2.9c-0.2,0.6-0.4,1.3-0.7,2.1c-0.2,0.5-0.4,1-0.5,1.4
			c-0.2,0.4-0.3,0.8-0.5,1c0.5,0,0.9-0.1,1.5-0.1c0.5-0.1,1.1-0.1,1.7-0.2c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.3-0.2-0.5-0.3-0.7
			c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.2-0.4-0.2-0.5L70.8,12.8z M71.8,6.9V8h-5.2V6.9H71.8z"
          />
        </g>
      </g>
      <!-- :class="`amt-${info.id}-st4`" -->
      <g id="图层_1" v-else>
        <linearGradient
          :id="`amt_${info.id}_SVGID_3_`"
          gradientUnits="userSpaceOnUse"
          x1="43.5"
          y1="26"
          x2="43.5"
          y2="-9.094947e-13"
        >
          <stop offset="0" style="stop-color:#E6E6E6" />
          <stop offset="1" style="stop-color:#B3B3B3" />
        </linearGradient>
        <path
          :class="`amt-${info.id}-st5`"
          d="M84,26H3c-1.7,0-3-1.3-3-3V3c0-1.7,1.3-3,3-3h81c1.7,0,3,1.3,3,3v20C87,24.7,85.7,26,84,26z"
        />
        <linearGradient
          :id="`amt_${info.id}_SVGID_4_`"
          gradientUnits="userSpaceOnUse"
          x1="23"
          y1="24"
          x2="23"
          y2="2"
        >
          <stop offset="0" style="stop-color:#007F6B" />
          <stop offset="1" style="stop-color:#00BFA1" />
        </linearGradient>
        <path
          :class="`amt-${info.id}-st6`"
          d="M41,24H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h36c1.7,0,3,1.3,3,3v16C44,22.7,42.7,24,41,24z"
        />
        <g :class="`amt-${info.id}-st7`">
          <path
            :class="`amt-${info.id}-st3`"
            d="M13.9,7.5c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.3,0.2-0.6,0.3-0.9l1.3,0.2l-0.5,1.6h5v11h-9.9v-11H13.9z M11.6,10.8
			H19V8.7h-7.4V10.8z M11.6,13.9H19v-1.9h-7.4V13.9z M19,17.3v-2.2h-7.4v2.2H19z"
          />
          <path
            :class="`amt-${info.id}-st3`"
            d="M27.8,12.8c0.1,0.2,0.2,0.5,0.3,0.8c0.1,0.3,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.3,1
			c0.2-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.5,0.2-1.2,0.3-2.1c0.1-0.9,0.2-1.9,0.2-3.1h-1.8V8.5h1.8l0.1-2.7h1.1
			l-0.1,2.7h3.3c0,0.6,0,1.3,0,2c0,0.7,0,1.4,0,2.2s0,1.5-0.1,2.2c0,0.7-0.1,1.4-0.1,2c0,0.5-0.2,0.9-0.4,1.2
			c-0.2,0.3-0.6,0.5-1.1,0.5c-0.1,0-0.3,0-0.4,0s-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0s-0.3,0-0.5,0l-0.3-1.3c0.3,0,0.7,0,0.9,0
			c0.3,0,0.5,0,0.8,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.3s0-0.3,0.1-0.5c0-0.5,0.1-1,0.1-1.6
			c0-0.6,0-1.2,0.1-1.8s0-1.2,0-1.8c0-0.6,0-1.1,0-1.6h-2.2c0,1.3-0.1,2.3-0.2,3.3s-0.2,1.7-0.3,2.3c-0.3,1.2-1,2.6-2.1,4l-1.1-0.7
			c0.4-0.5,0.7-1,1-1.4l-0.8,0.3L28.2,17c-0.4,0.1-0.8,0.1-1.2,0.2s-0.8,0.1-1.3,0.1c-0.4,0-0.9,0.1-1.3,0.1s-0.8,0.1-1.2,0.1
			l-0.3-1.2c0.2-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.3-0.7,0.4-1.1
			c0.1-0.4,0.3-0.8,0.4-1.2c0.1-0.4,0.3-0.8,0.4-1.1h-2v-1.2h6.2v1.2h-2.9c-0.2,0.6-0.4,1.3-0.7,2.1c-0.2,0.5-0.4,1-0.5,1.4
			c-0.2,0.4-0.3,0.8-0.5,1c0.5,0,0.9-0.1,1.5-0.1c0.5-0.1,1.1-0.1,1.7-0.2c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.3-0.2-0.5-0.3-0.7
			c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.2-0.4-0.2-0.5L27.8,12.8z M28.8,6.9V8h-5.2V6.9H28.8z"
          />
        </g>
        <g :class="`amt-${info.id}-st7`">
          <path
            :class="`amt-${info.id}-st8`"
            d="M57.8,13.5v-2.1H53v-1.2h4.8V8.1c-1,0.1-1.9,0.1-2.6,0.1c-0.8,0-1.4,0-2,0L53,7.1c0.7,0,1.5,0,2.3,0
			s1.9-0.1,3-0.2c1.1-0.1,2.1-0.2,2.9-0.3c0.8-0.1,1.5-0.2,2.2-0.3l0.3,1.2c-0.6,0.1-1.3,0.2-2,0.3C60.9,7.8,60,7.9,59.1,8v2.3h4.5
			v1.2h-4.5v2.1h5.5v1.2h-5.5v2.4c0,0.3,0,0.5-0.1,0.7s-0.1,0.3-0.2,0.5c-0.1,0.1-0.3,0.2-0.4,0.3c-0.2,0.1-0.4,0.1-0.7,0.2
			c-0.1,0-0.3,0-0.4,0s-0.3,0-0.5,0c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0-0.4,0l-0.3-1.3c0.5,0,1,0.1,1.5,0c0.2,0,0.3,0,0.4,0
			c0.1,0,0.2-0.1,0.3-0.1s0.1-0.1,0.1-0.3c0-0.1,0-0.3,0-0.5v-1.9H52v-1.2H57.8z"
          />
          <path
            :class="`amt-${info.id}-st8`"
            d="M70.8,12.8c0.1,0.2,0.2,0.5,0.3,0.8c0.1,0.3,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.4,1.1c0.1,0.4,0.3,0.7,0.3,1
			c0.2-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0.2-0.6,0.3-0.9c0.1-0.5,0.2-1.2,0.3-2.1c0.1-0.9,0.2-1.9,0.2-3.1h-1.8V8.5h1.8l0.1-2.7h1.1
			l-0.1,2.7h3.3c0,0.6,0,1.3,0,2c0,0.7,0,1.4,0,2.2s0,1.5-0.1,2.2c0,0.7-0.1,1.4-0.1,2c0,0.5-0.2,0.9-0.4,1.2
			c-0.2,0.3-0.6,0.5-1.1,0.5c-0.1,0-0.3,0-0.4,0s-0.3,0-0.5,0c-0.2,0-0.4,0-0.5,0s-0.3,0-0.5,0l-0.3-1.3c0.3,0,0.7,0,0.9,0
			c0.3,0,0.5,0,0.8,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2-0.1,0.2-0.1c0.1-0.1,0.1-0.2,0.1-0.3s0-0.3,0.1-0.5c0-0.5,0.1-1,0.1-1.6
			c0-0.6,0-1.2,0.1-1.8s0-1.2,0-1.8c0-0.6,0-1.1,0-1.6h-2.2c0,1.3-0.1,2.3-0.2,3.3s-0.2,1.7-0.3,2.3c-0.3,1.2-1,2.6-2.1,4l-1.1-0.7
			c0.4-0.5,0.7-1,1-1.4l-0.8,0.3L71.2,17c-0.4,0.1-0.8,0.1-1.2,0.2s-0.8,0.1-1.3,0.1c-0.4,0-0.9,0.1-1.3,0.1s-0.8,0.1-1.2,0.1
			l-0.3-1.2c0.2-0.1,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.2,0.2-0.4,0.3-0.7c0.1-0.3,0.3-0.7,0.4-1.1
			c0.1-0.4,0.3-0.8,0.4-1.2c0.1-0.4,0.3-0.8,0.4-1.1h-2v-1.2h6.2v1.2h-2.9c-0.2,0.6-0.4,1.3-0.7,2.1c-0.2,0.5-0.4,1-0.5,1.4
			c-0.2,0.4-0.3,0.8-0.5,1c0.5,0,0.9-0.1,1.5-0.1c0.5-0.1,1.1-0.1,1.7-0.2c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.3-0.2-0.5-0.3-0.7
			c-0.1-0.2-0.2-0.5-0.3-0.7c-0.1-0.2-0.2-0.4-0.2-0.5L70.8,12.8z M71.8,6.9V8h-5.2V6.9H71.8z"
          />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import bmCommon from "@/common/common";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
let pointCode = "SwSts";
export default {
  name: "bmBasicAmtCom",
  data() {
    return {};
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
    ...mapGetters({
      showType: "canvas/getShowType" //当前显示类型
    }),

    //渐变颜色样式
    gradientStyle() {
      return (info = {}) => {
        // let { info = {} } = this;
        let { gradientStyle = {} } = info || {};
        let {
          type = "",
          angle = "",
          center = "",
          radialShape = "",
          valueList = []
        } = gradientStyle || {};
        let styles = {};
        let colors = valueList.map(item => `${item.code} ${item.value}%`);
        if (type == "linear") {
          styles.backgroundImage = `linear-gradient(${angle}deg, ${colors.join()})`;
        } else if (type == "radial") {
          styles.backgroundImage = `radial-gradient(${radialShape} at ${center}, ${colors.join()})`;
        }
        return styles;
      };
    },
    comStyle() {
      let { info = {}, gradientStyle } = this;
      let {
        width = "",
        height = "",
        // color = "",
        borderColor = "",
        borderStyle = "",
        borderWidth = "",
        borderRadiusTopLeft = 0,
        borderRadiusTopRight = 0,
        borderRadiusBottomLeft = 0,
        borderRadiusBottomRight = 0,
        backgroundType = "",
        backgroundColor = "",
        backgroundImage = "",
        marginTop = 0,
        marginBottom = 0,
        marginLeft = 0,
        marginRight = 0,
        paddingTop = 0,
        paddingBottom = 0,
        paddingLeft = 0,
        paddingRight = 0,
        shadow = {},
        shadowable = false,
        backgroundRepeat = "",
        backgroundSize = ""
      } = info || {};
      let styles = {
        margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
        padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
      };
      // if (textAlign) {
      //   styles["textAlign"] = textAlign;
      //   if (textAlign == "justify") {
      //     styles["text-align-last"] = textAlign;
      //   }
      // }
      if (shadowable) {
        let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
          shadow || {};
        styles[
          "boxShadow"
        ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
      }
      // if (textShadowable) {
      //   let { x = 0, y = 0, color = "", blur = 0 } = textShadow || {};
      //   styles["textShadow"] = `${x}px ${y}px ${blur}px ${color}`;
      // }
      if (width) {
        styles["width"] = `${width}px`;
      }
      if (height) {
        styles["height"] = `${height}px`;
      }
      if (backgroundRepeat) {
        styles["backgroundRepeat"] = backgroundRepeat;
      }
      if (backgroundSize) {
        styles["backgroundSize"] = backgroundSize;
      }
      if (borderColor) {
        styles["borderColor"] = borderColor;
      }
      if (borderStyle) {
        styles["borderStyle"] = borderStyle;
      }
      styles["borderWidth"] = `${borderWidth}px`;
      styles[
        "borderRadius"
      ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;

      if (backgroundType == "purity") {
        //纯色
        if (backgroundColor) {
          styles["backgroundColor"] = backgroundColor;
        }
        if (backgroundImage) {
          styles["backgroundImage"] = `url(${this.$loadImgUrl(
            backgroundImage
          )})`;
        }
      } else if (backgroundType == "gradient") {
        //渐变
        styles = { ...styles, ...gradientStyle(info) };
      }
      return styles || {};
    }
  },
  // created() {
  //   let { info = {} } = this;
  //   info.dataType = "device";
  //   this.setActiveCom(info);
  // },
  mounted() {
    let { info = {} } = this;
    // bmCommon.log("kg mounted=", info.content);
    let { content = "" } = info || {};
    if (content === "") {
      info.content = false;
    }
    this.init();
  },
  methods: {
    ...mapMutations({
      // setActiveCom: "canvas/setActiveCom" //设置当前选中组件
    }),
    ...mapActions({}),
    // controlEvent() {
    //   let { info = {} } = this;
    //   let { content = false, bindData = {} } = info || {};
    //   let { deviceId = "" } = bindData || {};
    //   if (!deviceId) {
    //     info.content = !content;
    //     return;
    //   }
    //   let point = pointCode;
    //   let value = !content ? 1 : 0;
    //   $vm.$emit("control", {
    //     deviceId,
    //     point,
    //     value,
    //     callback: flag => {
    //       if (flag) {
    //         info.content = !content;
    //       } else {
    //         info.content = content; //如果取消则重置结果
    //       }
    //     }
    //   });
    // },
    init() {
      let { info = {}, showType = "" } = this;
      if (showType != "edit") {
        let { id = "", bindData = {} } = info || {};
        let { devicePoint = "" } = bindData || {};
        if (!devicePoint) {
          return;
        }
        pointCode = devicePoint;
        $vm.$on(`devicePointEvent_${id}`, ({ device }) => {
          bmCommon.log("deviceAmtCom", device);
          let { pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { point: id = "" } = item || {};
            return id == pointCode; // SwSts  开关状态
          });
          if (point) {
            let { value = "" } = point || {};
            info.content = value == 1 ? true : false;
          }
        });
      }
      this.loadDeviceInfo();
    },
    loadDeviceInfo() {
      let { info = {} } = this;
      let { bindData = {} } = info || {};
      let { deviceId = "", devicePoint = "" } = bindData || {};
      if (!deviceId) {
        return;
      }
      devicePoint = pointCode;
      $vm.$emit("device", {
        deviceId,
        callback: (device = {}) => {
          let { points: pointList = [] } = device || {};
          let point = pointList.find(item => {
            let { id = "" } = item || {};
            return id == devicePoint; //
          });
          if (point) {
            let { value = "" } = point || {};
            info.content = value == 1 ? true : false;
          }
        }
      });
    }
  },
  watch: {
    "info.bindData.devicePoint": {
      handler(newVal, oldVal) {
        this.loadDeviceInfo();
      },
      deep: true
    }
  }
};
</script>

<style lang="less">
// @import (reference) "./../../../../assets/less/common.less";
// .bm-basic-switch-com {
//   .posr;
//   .pointer;
//   .btn-text {
//     .posa;
//     top: 50%;
//     .tranf(translate(0, -50%));
//   }
//   .btn-close-text {
//     right: 10%;
//   }
//   .btn-open-text {
//     left: 10%;
//   }
//   .btn-slider {
//     .posa;
//     top: 50%;
//     .br(50%);
//     .tranf(translate(0, -50%));
//   }
//   .btn-close-slider {
//     left: 4%;
//   }
//   .btn-open-slider {
//     right: 4%;
//   }
// }
</style>
