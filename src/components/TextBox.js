import Spirit from '@/core/Spirit.js'

/**
 * 显示框
 */
class TextBox extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "显示框";
	    this.className = "TextBox";
	    this.height = 30;
	    this.moveType = 0;
	    this.isBind = true;
	    this.bindType = 2;
	    this.zIndex = 4;
	    this.config = {bindDevice: {id:'',point:'',unit:''},color:'#000',fontSize:24,backgroundColor:'transparent'}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
                <div style="
                    line-height: ${this.height}px;
                    height: ${this.height}px;
                    text-align: center;
                    background-color: ${this.config.backgroundColor};
                    border-radius: 2px">
                    <span class="value" style="font-weight:bold;font-family: electronicFont;font-size: ${this.config.fontSize}px;height: 29px;">00.00</span>
                    <small class="unit" style="text-align:center;font-size: ${this.config.fontSize*0.5}px">${this.config.bindDevice.unit}</small>
                </div>
               </div>`);
	}

	//
	reveal(device,config) {
		let that = this;
		if(device) {
			device.points.forEach(function(point) {
				if(config.bindDevice.point==point.id) {
				  $('#'+that.id).find('.value').text(parseFloat(point.value));
          $('#'+that.id).find('.unit').text(that.config.bindDevice.unit);
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
			isBind: this.isBind,
			zIndex: this.zIndex,
		};
		return Object.assign(super.toJson(),json);
	}

	refresh() {
		$('#'+this.id).find('div').css({color:this.config.color});
		$('#'+this.id).find('div').css({'background-color':this.config.backgroundColor});
		$('#'+this.id).find('.value').css({'font-size':this.config.fontSize+"px"});
	}

	renderer() {
		super.renderer();
		let html = `<div class="bm-tree">字体</div>					
					<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>字体颜色</div>
							<div class="bm-color-box text-color" data-value="1"></div>
						</div>
					</div>
          <div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>字体大小</div>
							<select class="bm-select" name="textBoxFS" title="字体大小"></select>	
						</div>							
					</div>
					<div class="bm-tree">背景</div>		
            <div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>背景颜色</div>							
							<div class="bm-color-box bg-color" data-value="2"></div>					
						</div>							
					</div>`;
		$('#configur_property').append(html);
		let element = $('#configur_property').find('[name=textBoxFS]');
		let dataList = [11,12,13,14,15,16,18,24,30]
		dataList.forEach(function(data) {
			let option = $('<option></option>')
			option.val(data)
			option.text(data)
      element.append(option)
		});
    element.val(this.config.fontSize)
	}
}

export default TextBox;
