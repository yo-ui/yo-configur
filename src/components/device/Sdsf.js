import Spirit from './../../core/Spirit'
/**
 * 手动水阀
 */
class Sdsf extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "手动水阀";
	    this.className = "Sdsf";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 20;
	    this.minHeight = 20;
	    this.linkage = true;
	    this.zIndex = 2;
      this.config = {
        bindData: {orgId:'',deviceId:'',devicePoint:''},
        state: {expr:'SwSts',stop:0,start:1,alarm:2}
      };
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
                 viewBox="0 0 94 97" style="enable-background:new 0 0 94 97;" xml:space="preserve">
              <style type="text/css">
                  .sdsf-st0{fill:url(#sdsf_1_);}
                .sdsf-st1{fill:url(#sdsf_2_);}
                .sdsf-st2{fill:url(#sdsf_3_);}
                .sdsf-st3{fill:url(#sdsf_4_);}
                .sdsf-st4{fill:url(#sdsf_5_);}
                .sdsf-st5{fill:url(#sdsf_6_);}
                .sdsf-st6{fill:url(#sdsf_7_);}
                .sdsf-st7{fill:url(#sdsf_8_);}
                .sdsf-st8{fill:url(#sdsf_9_);}
                .sdsf-st9{opacity:0.4;}
                .sdsf-st10{fill:url(#sdsf_10_);}
                .sdsf-st11{fill:url(#sdsf_11_);}
                .sdsf-st12{fill:url(#sdsf_12_);}
                .sdsf-st13{fill:#4AA7F4;}
                .sdsf-st14{fill:url(#sdsf_13_);}
                .sdsf-st15{fill:url(#sdsf_14_);}
                .sdsf-st16{fill:url(#sdsf_15_);}
              </style>
              <linearGradient id="sdsf_1_" gradientUnits="userSpaceOnUse" x1="657.6" y1="427.1804" x2="606.0741" y2="427.1804" gradientTransform="matrix(4.489700e-11 -1 -1 -4.489700e-11 434.2008 701.7421)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="sdsf-st0" d="M11.41,50.09c1.6,4.68,2.63,11.87,2.63,19.94s-1.03,15.26-2.63,19.94v5.61H7.02C3.14,95.59,0,84.14,0,70.03
                c0-14.11,3.14-25.56,7.02-25.56h4.39V50.09z"/>
              <linearGradient id="sdsf_2_" gradientUnits="userSpaceOnUse" x1="23.3598" y1="73.7317" x2="7.4827" y2="68.814">
                <stop  offset="0" style="stop-color:#74716F"/>
                <stop  offset="1" style="stop-color:#ABAEAD"/>
              </linearGradient>
              <ellipse class="sdsf-st1" cx="11.41" cy="70.03" rx="7.02" ry="25.56"/>
              <linearGradient id="sdsf_3_" gradientUnits="userSpaceOnUse" x1="8.2389" y1="44.4742" x2="8.2389" y2="95.5856">
                <stop  offset="0" style="stop-color:#AFB2B1"/>
                <stop  offset="2.568830e-04" style="stop-color:#AFB2B1"/>
                <stop  offset="0.0902" style="stop-color:#D2D3D3"/>
                <stop  offset="0.1753" style="stop-color:#EBEBEB"/>
                <stop  offset="0.2527" style="stop-color:#FAFAFA"/>
                <stop  offset="0.3156" style="stop-color:#FFFFFF"/>
                <stop  offset="0.3659" style="stop-color:#F4F4F4"/>
                <stop  offset="0.4545" style="stop-color:#D7D7D6"/>
                <stop  offset="0.5702" style="stop-color:#A9A7A7"/>
                <stop  offset="0.66" style="stop-color:#807E7D"/>
                <stop  offset="0.8547" style="stop-color:#8B8A88"/>
                <stop  offset="0.9067" style="stop-color:#868582"/>
                <stop  offset="0.9734" style="stop-color:#777772"/>
                <stop  offset="1" style="stop-color:#6F6F6A"/>
              </linearGradient>
              <path class="sdsf-st2" d="M5.75,70.03c0,13.28,2.78,24.19,6.34,25.43c-0.22,0.08-0.45,0.12-0.68,0.12c-3.88,0-7.02-11.44-7.02-25.56
                s3.14-25.56,7.02-25.56c0.23,0,0.46,0.04,0.68,0.12C8.53,45.84,5.75,56.75,5.75,70.03z"/>
              <linearGradient id="sdsf_4_" gradientUnits="userSpaceOnUse" x1="657.6" y1="-205.6794" x2="606.0741" y2="-205.6794" gradientTransform="matrix(0 -1 1 0 292.6589 701.7421)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="sdsf-st3" d="M82.59,50.09c-1.6,4.68-2.63,11.87-2.63,19.94s1.03,15.26,2.63,19.94v5.61h4.39c3.88,0,7.02-11.44,7.02-25.56
                s-3.14-25.56-7.02-25.56h-4.39V50.09z"/>
              <linearGradient id="sdsf_5_" gradientUnits="userSpaceOnUse" x1="656.2196" y1="73.7317" x2="640.3425" y2="68.814" gradientTransform="matrix(-1 0 0 1 726.8597 0)">
                <stop  offset="0" style="stop-color:#74716F"/>
                <stop  offset="1" style="stop-color:#ABAEAD"/>
              </linearGradient>
              <ellipse class="sdsf-st4" cx="82.59" cy="70.03" rx="7.02" ry="25.56"/>
              <linearGradient id="sdsf_6_" gradientUnits="userSpaceOnUse" x1="641.0986" y1="44.4742" x2="641.0986" y2="95.5856" gradientTransform="matrix(-1 0 0 1 726.8597 0)">
                <stop  offset="0" style="stop-color:#AFB2B1"/>
                <stop  offset="2.568830e-04" style="stop-color:#AFB2B1"/>
                <stop  offset="0.0902" style="stop-color:#D2D3D3"/>
                <stop  offset="0.1753" style="stop-color:#EBEBEB"/>
                <stop  offset="0.2527" style="stop-color:#FAFAFA"/>
                <stop  offset="0.3156" style="stop-color:#FFFFFF"/>
                <stop  offset="0.3659" style="stop-color:#F4F4F4"/>
                <stop  offset="0.4545" style="stop-color:#D7D7D6"/>
                <stop  offset="0.5702" style="stop-color:#A9A7A7"/>
                <stop  offset="0.66" style="stop-color:#807E7D"/>
                <stop  offset="0.8547" style="stop-color:#8B8A88"/>
                <stop  offset="0.9067" style="stop-color:#868582"/>
                <stop  offset="0.9734" style="stop-color:#777772"/>
                <stop  offset="1" style="stop-color:#6F6F6A"/>
              </linearGradient>
              <path class="sdsf-st5" d="M88.25,70.03c0,13.28-2.78,24.19-6.34,25.43c0.22,0.08,0.45,0.12,0.68,0.12c3.88,0,7.02-11.44,7.02-25.56
                s-3.14-25.56-7.02-25.56c-0.23,0-0.46,0.04-0.68,0.12C85.47,45.84,88.25,56.75,88.25,70.03z"/>
              <linearGradient id="sdsf_7_" gradientUnits="userSpaceOnUse" x1="711.9023" y1="57.9723" x2="711.9023" y2="80.7859" gradientTransform="matrix(-1 0 0 1 759.2192 0)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="sdsf-st6" d="M82.34,80.79c0,0,2.29-2.35,2.29-11.41c0-9.63-2.29-11.41-2.29-11.41H12.69C12.69,57.97,10,59,10,69
                c0,12,2.69,11.79,2.69,11.79H82.34z"/>
              <linearGradient id="sdsf_8_" gradientUnits="userSpaceOnUse" x1="99.1167" y1="-55.3511" x2="99.1167" y2="-21.6657" gradientTransform="matrix(-4.489700e-11 1 1 4.489700e-11 85.2791 -46.0111)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="sdsf-st7" d="M63.61,38H29.93v20.65c0,0,5.05,9.56,16.84,9.56c13.96,0,16.84-9.56,16.84-9.56V38z"/>
              <linearGradient id="sdsf_9_" gradientUnits="userSpaceOnUse" x1="46.7707" y1="29.4925" x2="46.7707" y2="46.5075">
                <stop  offset="0" style="stop-color:#74716F"/>
                <stop  offset="1" style="stop-color:#ABAEAD"/>
              </linearGradient>
              <ellipse class="sdsf-st8" cx="46.77" cy="38" rx="16.84" ry="8.51"/>
              <ellipse class="sdsf-st9" cx="47.06" cy="38.92" rx="6.38" ry="2.67"/>
              <linearGradient id="sdsf_10_" gradientUnits="userSpaceOnUse" x1="77.2409" y1="-43.616" x2="77.2409" y2="-33.4007" gradientTransform="matrix(-4.489700e-11 1 1 4.489700e-11 85.2791 -46.0111)">
                <stop  offset="0" style="stop-color:#564D4E"/>
                <stop  offset="0.034" style="stop-color:#6D6768"/>
                <stop  offset="0.0985" style="stop-color:#949494"/>
                <stop  offset="0.1607" style="stop-color:#B3B7B6"/>
                <stop  offset="0.2192" style="stop-color:#C9D0CF"/>
                <stop  offset="0.2724" style="stop-color:#D6DFDE"/>
                <stop  offset="0.3156" style="stop-color:#DBE4E3"/>
                <stop  offset="0.3588" style="stop-color:#D1D9D8"/>
                <stop  offset="0.435" style="stop-color:#B7BCBA"/>
                <stop  offset="0.5351" style="stop-color:#8C8C8A"/>
                <stop  offset="0.6543" style="stop-color:#524A48"/>
                <stop  offset="0.66" style="stop-color:#4F4745"/>
                <stop  offset="0.7581" style="stop-color:#5E5B57"/>
                <stop  offset="0.8547" style="stop-color:#71726C"/>
                <stop  offset="0.8835" style="stop-color:#6C6C67"/>
                <stop  offset="0.9204" style="stop-color:#5C5C57"/>
                <stop  offset="0.9616" style="stop-color:#42423F"/>
                <stop  offset="1" style="stop-color:#242321"/>
              </linearGradient>
              <path class="sdsf-st10" d="M51.88,21.56H41.66V38c0,0,1.53,2.9,5.11,2.9c4.23,0,5.11-2.9,5.11-2.9V21.56z"/>
              <radialGradient id="sdsf_11_" cx="46.784" cy="17.8744" r="37.184" gradientTransform="matrix(1 0 0 0.4993 0 8.9491)" gradientUnits="userSpaceOnUse">
                <stop  offset="0.7737" style="stop-color:#00447C"/>
                <stop  offset="0.8827" style="stop-color:#4AA7F4"/>
                <stop  offset="1" style="stop-color:#00447C"/>
              </radialGradient>
              <path class="sdsf-st11" d="M46.94,38c-20.47,0-36.5-8.35-36.5-19S26.48,0,46.94,0s36.5,8.35,36.5,19S67.41,38,46.94,38z M46.94,6
                c-17.97,0-30.5,6.85-30.5,13s12.53,13,30.5,13s30.5-6.85,30.5-13S64.92,6,46.94,6z"/>
              <linearGradient id="sdsf_12_" gradientUnits="userSpaceOnUse" x1="65.135" y1="-45.7718" x2="65.135" y2="-31.245" gradientTransform="matrix(-4.489700e-11 1 1 4.489700e-11 85.2791 -46.0111)">
                <stop  offset="0" style="stop-color:#00447C"/>
                <stop  offset="0.5419" style="stop-color:#4AA7F4"/>
                <stop  offset="1" style="stop-color:#00447C"/>
              </linearGradient>
              <path class="sdsf-st12" d="M54.03,13.04H39.51v8.91c0,0,1.33,3.26,7.26,3.26c6.02,0,7.26-3.26,7.26-3.26V13.04z"/>
              <ellipse class="sdsf-st13" cx="46.77" cy="13.04" rx="7.26" ry="3.67"/>
              <linearGradient id="sdsf_13_" gradientUnits="userSpaceOnUse" x1="67.8105" y1="-49.2541" x2="67.8105" y2="-43.6703" gradientTransform="matrix(0.872 -0.371 -0.3915 -0.9202 -47.1005 5.2313)">
                <stop  offset="0" style="stop-color:#00447C"/>
                <stop  offset="0.5419" style="stop-color:#4AA7F4"/>
                <stop  offset="1" style="stop-color:#00447C"/>
              </linearGradient>
              <path class="sdsf-st14" d="M17.71,25.12l2.19,5.14l21.49-9.14c0,0,1.14-1.04,0.25-3.14c-0.91-2.13-2.44-2-2.44-2L17.71,25.12z"/>
              <linearGradient id="sdsf_14_" gradientUnits="userSpaceOnUse" x1="34.453" y1="-35.8066" x2="34.453" y2="-30.2228" gradientTransform="matrix(-0.872 -0.371 0.3915 -0.9202 106.7857 5.2313)">
                <stop  offset="0" style="stop-color:#00447C"/>
                <stop  offset="0.5419" style="stop-color:#4AA7F4"/>
                <stop  offset="1" style="stop-color:#00447C"/>
              </linearGradient>
              <path class="sdsf-st15" d="M76.33,25.12l-2.19,5.14l-21.49-9.14c0,0-1.14-1.04-0.25-3.14c0.91-2.13,2.44-2,2.44-2L76.33,25.12z"/>
              <linearGradient id="sdsf_15_" gradientUnits="userSpaceOnUse" x1="43.9341" y1="6.4076" x2="49.559" y2="6.4076">
                <stop  offset="0" style="stop-color:#00447C"/>
                <stop  offset="0.5419" style="stop-color:#4AA7F4"/>
                <stop  offset="1" style="stop-color:#00447C"/>
              </linearGradient>
              <path class="sdsf-st16" d="M46.77,9.37c0.99,0,1.93,0.1,2.79,0.28l-0.04-5.04c0,0-0.52-1.46-2.8-1.45c-2.31,0.01-2.79,1.47-2.79,1.47
                l0.04,5.02C44.84,9.47,45.78,9.37,46.77,9.37z"/>
              </svg>
		        </div>`);
	}

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			linkage: this.linkage,
			minWidth: this.minWidth,
			minHeight: this.minHeight,
			zIndex: this.zIndex,
      isLinkPoint: this.isLinkPoint
		};
		return Object.assign(super.toJson(),json);
	}

  reveal(device,config) {
    let that = this;
    let state = that.config.state;
    if(device) {
      device.points.forEach(function(point) {
        if(point.id==state.expr) {
          if(point.value==state.alarm) {
            that.alarm();
          }else if(point.value==state.stop) {
            that.stop();
          }else if(point.value==state.start) {
            that.start();
          }
        }
      })
    }
  }
}

export default Sdsf;
