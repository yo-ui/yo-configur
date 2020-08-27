import Spirit from '@/core/Spirit.js'

/**
 * 块状
 */
class Lump extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "块状";
	    this.className = "Lump";
      this.width = 140;
	    this.height = 52;
	    this.moveType = 0;
	    this.isBind = true;
	    this.bindType = 2;
	    this.zIndex = 4;
	    this.config = {bindData: {orgId:'',deviceId:'',devicePoint:''},color:'#000'}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
                 <div style="min-width: ${this.width}px;height: ${this.height}px;background-color: #fff">   
                   <div style="border: 1px solid #ddd;padding: 5px">                
                     <div class="bm-lump">
                       <div class="icon">
                         <img src="static/images/device/device-defult.png">
                       </div>
                       <div class="text">
                         <p class="name">正向有功电量</p>
                         <span class="value">00.00</span>&nbsp;<small class="unit">kWh</small>
                       </div>                   
                     </div>
                   </div>  
                 </div>
               </div>`);
	}

	reveal(device,config) {
		let that = this;
		if(device) {
			device.points.forEach(function(point) {
				if(config.bindData.devicePoint==point.id) {
          $('#'+that.id).find('.name').text(point.name);
				  $('#'+that.id).find('.value').text(parseFloat(point.value));
          $('#'+that.id).find('.unit').text(point.unit);
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

	refresh() {
		$('#'+this.id).find('div').css({color: this.config.color});
		$('#'+this.id).find('div').css({'background-color': this.config.backgroundColor});
		$('#'+this.id).find('.value').css({'font-size': this.config.fontSize+"px"});
	}
}

export default Lump;
