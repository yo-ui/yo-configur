import Spirit from './../../core/Spirit'

/**
 * 客用电梯
 */
class Kydt extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "客用电梯";
	    this.className = "Kydt";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 24;
	    this.minHeight = 64;
		  this.zIndex = 3;
	    this.linkage = false;
	    this.isPanel = true;
	    this.isBind = true;
      this.isAnimation = true;
      this.config = {
        bindData: {deviceId: ''},
        animations: [
          {type: 31,
            text: '填充->离散',
            expr: 'SwSts',
            states: [
              {name:'start',text:'开启',value: 1},
              {name:'stop',text:'停止',value: 0},
              {name:'alarm',text:'报警',value: 2}],
            value: 0,
            category: 3}]
      }
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
                 viewBox="0 0 230 290" xml:space="preserve" preserveAspectRatio="none">
              <style type="text/css">
                .kydt-st0{fill:#E7E7E5;}
                .kydt-st1{opacity:0.3;}
                .kydt-st2{fill:#5B5E6F;}
                .kydt-st3{fill:#CBCBC9;}
                .kydt-st4{fill:url(#kydt_1_);}
                .kydt-st5{fill:url(#kydt_2_);}
                .kydt-st6{opacity:0.6;}
                .kydt-st7{fill:#A5A9AC;}
                .kydt-st8{fill:#C3C3C1;}
                .kydt-st9{fill:url(#kydt_3_);}
                .kydt-st10{fill:#FFFFFF;}
                .kydt-st11{fill:#7A7E89;}
                .kydt-st12{fill:url(#kydt_4_);}
                .kydt-st13{fill:url(#kydt_5_);}
                .kydt-st14{fill:#FF0000;}
                .kydt-st15{fill:url(#kydt_6_);}
                .kydt-st16{opacity:0.4;fill:#FF0000;}
                .kydt-st17{fill:url(#kydt_7_);}
                .kydt-st18{opacity:0.4;}
              
                .show {display:default;}
                .hide {display:none;}
                .f1 {display:default;}
                .f2 {display:none;}
              </style>
              <g>
                <rect x="89.54" y="2" class="kydt-st0" width="125" height="234"/>
                <g class="kydt-st1">
                  <rect x="107.01" y="2" class="kydt-st2" width="1.99" height="33.27"/>
                </g>
                <g class="kydt-st1">
                  <rect x="111.01" y="2" class="kydt-st2" width="1.99" height="33.27"/>
                </g>
                <g class="kydt-st1">
                  <rect x="115.01" y="2" class="kydt-st2" width="1.99" height="33.27"/>
                </g>
                <g class="kydt-st1">
                  <rect x="185.01" y="2" class="kydt-st2" width="1.99" height="33.27"/>
                </g>
                <g class="kydt-st1">
                  <rect x="189.01" y="2" class="kydt-st2" width="1.99" height="33.27"/>
                </g>
                <g class="kydt-st1">
                  <rect x="193.01" y="2" class="kydt-st2" width="1.99" height="33.27"/>
                </g>
                <polygon class="kydt-st3" points="89.54,237.47 28.54,281.47 28.54,46 89.54,2 	"/>
                <g>
                  <linearGradient id="kydt_1_" gradientUnits="userSpaceOnUse" x1="88.5355" y1="287" x2="88.5355" y2="48">
                    <stop  offset="0" style="stop-color:#BDBDBD"/>
                    <stop  offset="0.5168" style="stop-color:#F4F4F4"/>
                    <stop  offset="0.6083" style="stop-color:#EEEFEF"/>
                    <stop  offset="0.728" style="stop-color:#DEDFE0"/>
                    <stop  offset="0.8632" style="stop-color:#C3C5C7"/>
                    <stop  offset="1" style="stop-color:#A0A4A7"/>
                  </linearGradient>
                  <rect x="22.54" y="48" class="kydt-st4" width="132" height="239"/>
                </g>
                <g>
                  <linearGradient id="kydt_2_" gradientUnits="userSpaceOnUse" x1="154.5355" y1="143.5" x2="220.5355" y2="143.5">
                    <stop  offset="0" style="stop-color:#888E9A"/>
                    <stop  offset="1" style="stop-color:#5A5D6E"/>
                  </linearGradient>
                  <polygon class="kydt-st5" points="154.54,287 220.54,239 220.54,0 154.54,48 		"/>
                </g>
                <g class="kydt-st6">
                  <polygon points="87.48,48 86.28,48 86.28,287 87.48,287 87.48,48 		"/>
                </g>
                <g>
                  <g>
                    <path class="kydt-st7" d="M88.54,0l-66,48h132l66-48H88.54z M153.54,46h-125l61-44h125L153.54,46z"/>
                  </g>
                </g>
                <g>
                  <polygon class="kydt-st8" points="170.59,26.44 0,26.44 4.34,23.13 174.93,23.13 		"/>
                </g>
                <g>
                  <polygon class="kydt-st2" points="170.59,289 174.93,285.69 174.93,23.13 170.59,26.44 		"/>
                </g>
                <g>
                  <linearGradient id="kydt_3_" gradientUnits="userSpaceOnUse" x1="85.2956" y1="289" x2="85.2956" y2="26.4376">
                    <stop  offset="0" style="stop-color:#959A9E"/>
                    <stop  offset="0.5168" style="stop-color:#E1E2DD"/>
                    <stop  offset="1" style="stop-color:#838793"/>
                  </linearGradient>
                  <polygon class="kydt-st9" points="0,26.44 0,289 19,289 19,50 151,50 151,289 170.59,289 170.59,26.44 		"/>
                </g>
                <g>
                  <polygon class="kydt-st2" points="22.54,50 19,50 19,289 22.54,287 		"/>
                </g>
                <g>
                  <rect x="66" y="29.44" class="kydt-st10" width="40" height="17.56"/>
                </g>
                <g>
                  <rect x="153.93" y="156.07" class="kydt-st11" width="14" height="30.72"/>
                </g>
                <g class="kydt-st6">
                  <circle cx="161.32" cy="164.59" r="4.17"/>
                </g>
                <g>
                  <rect x="68" y="31.44" width="36" height="13.56"/>
                </g>
                <g>
                  <linearGradient id="kydt_4_" gradientUnits="userSpaceOnUse" x1="158.9103" y1="162.0714" x2="161.7412" y2="166.1156">
                    <stop  offset="0" style="stop-color:#959A9E"/>
                    <stop  offset="1" style="stop-color:#E1E2DD"/>
                  </linearGradient>
                  <circle class="kydt-st12" cx="160.94" cy="164.97" r="3.78"/>
                </g>
                <g class="kydt-st6">
                  <circle cx="161.32" cy="178.59" r="4.17"/>
                </g>
                <g>
                  <linearGradient id="kydt_5_" gradientUnits="userSpaceOnUse" x1="158.9103" y1="176.0714" x2="161.7412" y2="180.1156">
                    <stop  offset="0" style="stop-color:#959A9E"/>
                    <stop  offset="1" style="stop-color:#E1E2DD"/>
                  </linearGradient>
                  <circle class="kydt-st13" cx="160.94" cy="178.97" r="3.78"/>
                </g>
              </g>
                <g class="SVG_ani" style="display: none">
                  <g class="f1">
                    <animate values="show;hide" dur="2s" attributeName="class" repeatCount="indefinite"/>
                <polygon class="kydt-st14" points="97.72,35.27 94.27,41.16 90.81,35.27 	"/>
              
                    <radialGradient id="kydt_6_" cx="474.2651" cy="408.2188" r="6.7812" gradientTransform="matrix(-1 0 0 -1 568.5302 446.4377)" gradientUnits="userSpaceOnUse">
                  <stop  offset="0" style="stop-color:#FF0000"/>
                      <stop  offset="1" style="stop-color:#FF0000;stop-opacity:0"/>
                </radialGradient>
                    <circle class="kydt-st15" cx="94.27" cy="38.22" r="6.78"/>
                    <polygon class="kydt-st16" points="73.81,41.16 77.27,35.27 80.72,41.16 	"/>
              </g>
                  <g  class="f2">
                    <animate values="hide;show;" dur="2s" attributeName="class" repeatCount="indefinite"/>
                <polygon class="kydt-st14" points="73.81,41.16 77.27,35.27 80.72,41.16 	"/>
                    <radialGradient id="kydt_7_" cx="77.2651" cy="38.2188" r="6.7812" gradientUnits="userSpaceOnUse">
                  <stop  offset="0" style="stop-color:#FF0000"/>
                      <stop  offset="1" style="stop-color:#FF0000;stop-opacity:0"/>
                </radialGradient>
                    <circle class="kydt-st17" cx="77.27" cy="38.22" r="6.78"/>
                    <polygon class="kydt-st16" points="97.72,35.27 94.27,41.16 90.81,35.27 	"/>
              </g>
                </g>
              
              <g class="SVG_sta" style="display: none">
                <polygon class="kydt-st16" points="73.81,41.16 77.27,35.27 80.72,41.16 	"/>
                <polygon class="kydt-st16" points="97.72,35.27 94.27,41.16 90.81,35.27 	"/>
              </g>
              <g class="SVG_alert" style="display: none">
                <g class="kydt-st18">
                  <polygon class="kydt-st14" points="220.54,0 88.54,0 56.73,23.13 4.34,23.13 0,26.44 0,289 19,289 22.54,287 86.28,287 87.48,287 
                    151,287 151,289 170.59,289 174.93,285.69 174.93,272.17 220.54,239 		"/>
                </g>
              </g>
              </svg>
		        </div>`);
	}

  initialize() {
    let that = this;
    let deviceId = that.config.bindData.deviceId
    if(deviceId) {
      that.stage.option.getDevice(deviceId, function (device) {
        if (deviceId == device.id) {
          that.reveal(device);
        }
      });
    }
  }

  reveal(device) {
    let that = this;
    if(device) {
      device.points.forEach(function(point) {
        if(that.isAnimation) {
          let key = point.id;
          let value = point.value;
          that.dynamic(key,value);
        }
      })
    }
  }

  fillDiscrete(animation,value) {
    let that = this;
    animation.value = value;
    let states = animation.states;
    states.forEach(function (state) {
      if(state.value==value) {
         if(state.name=="start") {
           that.start();
         }else if(state.name=="stop") {
           that.stop();
         }else if(state.name=="alarm") {
           that.alarm();
         }
      }
    })
  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			minHeight: this.minHeight,
			linkage: this.linkage,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}
}

export default Kydt;
