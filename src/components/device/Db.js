import Spirit from './../../core/Spirit'

/**
 * 电表
 */
class Db extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "电表";
	    this.className = "Db";
	    this.width = width;
	    this.height = height;
	    this.moveType = 4;
	    this.minWidth = 24;
	    this.minHeight = 24;
		  this.zIndex = 2;
	    this.linkage = true;
	    this.isPanel = true;
	    this.isBind = true;
      this.config = {
        bindData: {orgId:'',deviceId:'',devicePoint:''},
        state: {expr:'SwSts',stop:0,start:1,alarm:2}
      }
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
                 viewBox="0 0 70 69" xml:space="preserve">
              <style type="text/css">
                .db-st0{fill:url(#db_1_);}
                .db-st1{fill:#DFE3E8;}
                .db-st2{fill:url(#db_11_);}
                .db-st3{fill:#FFFFFF;}
                .db-st4{fill:#C2C8CE;}
                .db-st5{fill:#848776;}
                .db-st6{fill:#25282B;}
                .db-st7{fill:#8F9499;}
                .db-st8{fill:#5B280E;}
                .db-st9{fill:#F95D06;}
                .db-st10{fill:url(#db_12_);}
                .db-st11{opacity:0.4;fill:#FF0000;}
              </style>
              <g>
                <linearGradient id="db_1_" gradientUnits="userSpaceOnUse" x1="60.525" y1="62.945" x2="54.1179" y2="57.8484">
                  <stop  offset="0" style="stop-color:#C2C8CE"/>
                  <stop  offset="1" style="stop-color:#848689"/>
                </linearGradient>
                <path class="db-st0" d="M67.73,41h-54.5v10.34c0,1.9,1.54,3.44,3.44,3.44h33.57l5.49,12.81l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69
                  l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73V41z"/>
                <path id="XMLID_657_" class="db-st1" d="M56.5,55.08H2v10.34c0,1.9,1.54,3.44,3.44,3.44h47.62c1.9,0,3.44-1.54,3.44-3.44V55.08z"/>
                <linearGradient id="db_11_" gradientUnits="userSpaceOnUse" x1="29.2499" y1="58.6952" x2="29.2499" y2="49.8142">
                  <stop  offset="0" style="stop-color:#000000;stop-opacity:0"/>
                  <stop  offset="1" style="stop-color:#000000"/>
                </linearGradient>
                <rect id="XMLID_658_" x="2" y="54.06" class="db-st2" width="54.5" height="8.88"/>
                <rect id="XMLID_656_" x="1" y="15.08" class="db-st3" width="56.5" height="39"/>
                <path id="XMLID_653_" class="db-st1" d="M58.5,55.08H0v-41h58.5V55.08z M2,53.08h54.5v-37H2V53.08z"/>
                <polygon id="XMLID_652_" class="db-st4" points="58.5,14.08 0,14.08 12.23,0 69.73,0 	"/>
                <g id="XMLID_647_">
                  <rect id="XMLID_651_" x="9.5" y="21.5" class="db-st5" width="40" height="12"/>
                  <path id="XMLID_648_" class="db-st6" d="M50.5,34.5h-42v-14h42V34.5z M10.5,32.5h38v-10h-38V32.5z"/>
                </g>
                <circle id="XMLID_646_" class="db-st7" cx="11.97" cy="63.16" r="2.03"/>
                <circle id="XMLID_645_" class="db-st7" cx="29.22" cy="63.16" r="2.03"/>
                <circle id="XMLID_659_" class="db-st7" cx="46.22" cy="63.16" r="2.03"/>
                <rect id="XMLID_644_" x="9.74" y="36.5" class="db-st6" width="4.48" height="2.5"/>
                <rect id="XMLID_643_" x="19.74" y="36.5" class="db-st6" width="4.48" height="2.5"/>
                <rect id="XMLID_635_" x="29.74" y="36.5" class="db-st6" width="4.48" height="2.5"/>
                <rect id="XMLID_634_" x="39.74" y="36.5" class="db-st6" width="4.48" height="2.5"/>
                <rect id="XMLID_6_" x="8.74" y="37.5" class="db-st7" width="4.48" height="2.5"/>
                <rect id="XMLID_5_" x="18.74" y="37.5" class="db-st7" width="4.48" height="2.5"/>
                <rect id="XMLID_4_" x="28.74" y="37.5" class="db-st7" width="4.48" height="2.5"/>
                <rect id="XMLID_2_" x="38.74" y="37.5" class="db-st7" width="4.48" height="2.5"/>
                <rect id="XMLID_632_" x="9.61" y="44.98" class="db-st8" width="6.72" height="3.69"/>
                <rect id="XMLID_552_" x="19.61" y="44.98" class="db-st8" width="6.72" height="3.69"/>
                <rect id="XMLID_551_" x="29.61" y="44.98" class="db-st8" width="6.72" height="3.69"/>
                <rect id="XMLID_9_" x="8.61" y="45.98" class="db-st9" width="6.72" height="3.69"/>
                <rect id="XMLID_8_" x="18.61" y="45.98" class="db-st9" width="6.72" height="3.69"/>
                <rect id="XMLID_7_" x="28.61" y="45.98" class="db-st9" width="6.72" height="3.69"/>
                <rect id="XMLID_550_" x="8.48" y="42.05" class="db-st4" width="36.74" height="1"/>
                <linearGradient id="db_12_" gradientUnits="userSpaceOnUse" x1="64.1155" y1="55.0819" x2="64.1155" y2="0">
                  <stop  offset="0" style="stop-color:#C2C8CE"/>
                  <stop  offset="1" style="stop-color:#848689"/>
                </linearGradient>
                <path id="db_1_" class="db-st10" d="M69.73,41L58.5,55.08v-41L69.73,0V41z"/>
              </g>
              <g class="SVG_alert" style="display: none">
                <path class="db-st11" d="M69.73,0h-57.5L0,14.08v41h2v7.86v2.48c0,1.9,1.54,3.44,3.44,3.44h47.62c1.08,0,2.04-0.51,2.67-1.29
                  l0.01,0.01l10.94-13.77c0.21-0.2,0.39-0.44,0.55-0.69l0.04-0.05l-0.01-0.01c0.3-0.51,0.48-1.1,0.48-1.73v-7.84l2-2.51V0z"/>
              </g>
              </svg>
		        </div>`);
	}

  reveal(device) {
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

export default Db;
