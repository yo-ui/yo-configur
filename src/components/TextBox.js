import Spirit from '@/core/Spirit.js'

/**
 * 显示框
 */
class TextBox extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "显示框";
	    this.className = "TextBox";
	    this.width = 75;
	    this.height = 26;
	    this.moveType = 0;
	    this.minWidth = 40;
	    this.isBind = true;
	    this.bindType = 2;
	    this.config = {bindPoint: {id:'',unit:'kWh'},color:'#000000'}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" 
		        style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:4;border:1px solid transparent">
		        <span style="min-width: ${this.width-2}px;
			        line-height: ${this.height}px;
			        height: ${this.height}px;
			        font-size: 15px;">
		            <span class="configur-value" style="font-weight:bold">0.00</span>
			        <small class="configur-unit" style="text-align:left;">${this.config.bindPoint.unit}</small>
			    </span></div>`);
	}
	
	//
	reveal(device,config) {
		let that = this;
		if(device) {
			device.points.forEach(function(point) {
				if(config.bindPoint.id==point.id) {
				  $('#'+that.id).find('.configur-value').text(parseFloat(point.value));
		          $('#'+that.id).find('.configur-unit').text(config.bindPoint.unit);
				}
			})
		}		
	}

	toJson() {
		let json = {
			title: this.title,
			className: this.className, 
			moveType: this.moveType,
			minWidth: this.minWidth,
			isBind: this.isBind
		};
		return Object.assign(super.toJson(),json);
	}
	
	init(config) {
		this.config = config; 
		$('#'+this.id).find('span').css({color:this.config.color});		
		if(config.bindPoint.unit) {
			$('#'+this.id).find('.configur-unit').text(this.config.bindPoint.unit);
		}		
	}
	
	renderer() {
		super.renderer();
		let html = `<div class="configur-property-title"><img src="static/images/angle-right.png" width="9"/>&nbsp;字体</div>
		            <div>
			            <div class="property-group">
			                <span>字体颜色：</span>
			                <input name="cxColor" type="text" class="input_cxcolor" value="${this.config.color}" style="padding:0;width:18px"/>
		                </div>
	                </div>`;
		$('#configur_property').append(html);		
	}	
}

export default TextBox;
