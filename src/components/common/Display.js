import Spirit from '@/core/Spirit.js'

/**
 * 显示器
 */
class Display extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "显示器";
	    this.className = "Display";
	    this.width = width;
	    this.height = height;
	    this.moveType = 0;
      this.linkage = false;
	    this.isBind = true;
	    this.bindType = 2;
	    this.zIndex = 4;
	    this.config = {bindData: {orgId:'',deviceId:'',devicePoint:''}}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
               viewBox="0 0 89 43" xml:space="preserve" preserveAspectRatio="none">
            <style type="text/css">
              .display-st0{fill:#FFFFFF;}
              .display-st1{fill:#DFE3E8;}
              .display-st2{fill:#C2C8CE;}
              .display-st3{fill:url(#display_4_);}
              .display-st4{fill:#9DA1A5;}
              .display-st5{fill:#848776;}
              .display-st6{fill:#25282B;}
            </style>
            <g>
              <rect id="XMLID_656_" x="1" y="4.1" class="display-st0" width="79.5" height="38"/>
              <path id="XMLID_653_" class="display-st1" d="M81.5,43.1H0v-40h81.5V43.1z M2,41.1h77.5v-36H2V41.1z"/>
              <polygon id="XMLID_652_" class="display-st2" points="81.5,3.1 0,3.1 8.2,0 88.7,0 	"/>
              <linearGradient id="display_4_" gradientUnits="userSpaceOnUse" x1="85.1155" y1="43.0819" x2="85.1155" y2="0">
                <stop  offset="0" style="stop-color:#C2C8CE"/>
                <stop  offset="1" style="stop-color:#848689"/>
              </linearGradient>
              <path id="XMLID_1_" class="display-st3" d="M88.7,40l-7.2,3.1v-40L88.7,0V40z"/>
            </g>
            <g>
              <path id="XMLID_10_" class="display-st4" d="M76.5,37.1H5v-5h71.5V37.1z"/>
            </g>
            <g >
              <g id="XMLID_647_">
                <rect id="XMLID_651_" x="6.5" y="8.5" class="display-st5" width="69" height="19"/>
                <path id="XMLID_648_" class="st6" d="M76.5,28.5h-71v-21h71V28.5z M7.5,26.5h67v-17h-67V26.5z"/>
              </g>
            </g>
            </svg>
            <div style="
                position: absolute;
                top: ${this.height*0.2-1}px;
                left: ${this.width*0.1}px;
                width: ${this.width*0.75}px;
                height: 24px;
                text-align: center">
                <span class="value" style="
                  font-weight:bold;
                  font-family: lcdD;
                  font-size: 18px;
                  margin-right: -3px">00.00</span>      
                <small class="unit" style="
                  display: inline-block;
                  text-align:center;
                  font-size: 12px;color: #ddd;
                  transform: scale(0.7);             
                  vertical-align: middle;"></small>             
            </div>
         </div>`);
	}

	//
	reveal(device,config) {
		let that = this;
		if(device) {
			device.points.forEach(function(point) {
				if(config.bindData.devicePoint==point.id) {
				  $('#'+that.id).find('.value').text(parseFloat(point.value));
          $('#'+that.id).find('.unit').text(point.unit);
          $('#temp_value').html($('#'+that.id).find('div').html());
          let width = $('#temp_value').width()
          $('#'+that.id).find('svg').css({width: width/0.75+"px"});
          $('#'+that.id).find('div').css({left: width*0.12+"px",width: width/0.98+"px"});
				}
			})
		}
	}

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			isBind: this.isBind,
			zIndex: this.zIndex,
		};
		return Object.assign(super.toJson(),json);
	}
}

export default Display;
