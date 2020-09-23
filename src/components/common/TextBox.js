import Spirit from './../../core/Spirit'

/**
 * 显示框
 */
class TextBox extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "显示框";
	    this.className = "TextBox";
      this.width = width;
	    this.height = height;
	    this.moveType = 0;
	    this.isBind = true;
	    this.bindType = 2;
	    this.zIndex = 4;
	    this.config = {bindData: {orgId:'',deviceId:'',devicePoint:''},color:'#000',fontSize:24,backgroundColor:'transparent'}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
                <div style="
                    min-width: ${this.width}px;
                    line-height: ${this.height}px;
                    height: ${this.height}px;
                    text-align: left;
                    background-color: ${this.config.backgroundColor}">
                    <span class="value" style="
                      font-weight:bold;
                      font-family: lcdD;
                      font-size: ${this.config.fontSize}px;">00.00</span>
                    <small class="unit" style="
                      text-align:center;
                      font-size: 12px;
                      transform: scale(0.7);
                      display: inline-block;
                      vertical-align: middle;
                      margin-left: -1px"></small>
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
		$('#'+this.id).find('div').css({color:this.config.color});
		$('#'+this.id).find('div').css({'background-color':this.config.backgroundColor});
		$('#'+this.id).find('.value').css({'font-size':this.config.fontSize+"px"});
	}

	renderer() {
	  let that = this;
		super.renderer();
		let html = `<div class="bm-tree">字体</div>					
					<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>字体颜色</div>
							<input class="text-color" title="字体颜色" />
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
							<input class="bg-color" title="字体颜色" />			
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
    element.on('change',function () {
      that.text();
    });
	}

	text() {
	  let that = this;
    let element = $('#configur_property').find('[name=textBoxFS]')
    let property = that.stage.property;
    property.config.fontSize = element.val();
    $('#'+property.id).find('span').css({'font-size': element.val()+"px"});
    $('#temp_value').html($('#'+property.id).find('div').html());
    let width = $('#temp_value').width();
    let height = $('#temp_value').height();
    $('.resize-panel').css({width:width,height:height});
    property.width = width-2;
    property.height = height;
    $('#'+property.id).find('div').css({'min-width':width+'px','line-height': height+"px",height});
  }
}

export default TextBox;
