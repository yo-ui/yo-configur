import Spirit from '@/core/Spirit.js'

/**
 * 文本
 */
class Text extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.title = "静态文本";
	    this.className = "Text";
	    this.width = width;
	    this.height = 30;
	    this.minWidth = 20;
	    this.zIndex = 4;
	    this.config = {text:'文本',color:'#000',fontSize:24}
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
		        <span style="min-width: 20px;
			        line-height: 30px;
			        border-radius: 2px;
			        color: ${this.config.color};
			        font-size: ${this.config.fontSize}px">${this.config.text}</span></div>`)
		return div;
	}

	arrangement(stage) {
		this.stage = stage;
		stage.element.append(this.template());
	}

	getEl() {
		return $('#'+this.id);
	}

	refresh() {
		$('#'+this.id).find('span').text(this.config.text);
		$('#'+this.id).find('span').css({color:this.config.color,'font-size':this.config.fontSize+"px"});
	}

	toJson() {
		let json = {
			title: this.title,
			className: this.className, 
			moveType: this.moveType,
			minWidth: this.minWidth,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}
	
	renderer() {
		let that = this;
		super.renderer();
		let html = `<div class="bm-tree">字体</div>
                    <div>
                        <div class="bm-cell no-hover">
							<div class="bm-cell__title">
							    <div>字体颜色</div>
								<div class="bm-color-box text-color" title="字体颜色"></div>
							</div>													
                        </div>
                        <div class="bm-cell no-hover">
							<div class="bm-cell__title">
							    <div>字体大小</div>
								<select class="bm-select" name="textFontSize" title="字体大小"></select>	
							</div>							
                        </div>
                        <div class="bm-cell no-hover">
							<div class="bm-cell__title">
							    <div>修改文本</div>
								<input type="text" class="text form-control" value="${this.config.text}" maxlength="32" title="字体文本" />
							</div>							
                        </div>                                       
                    </div>`;
		$('#configur_property').append(html);	
		var dataList = [11,12,13,14,15,16,18,24,30]
	    dataList.forEach(function(data) {
	    	let option = $('<option></option>')
	    	option.val(data)
	    	option.text(data)
	    	$('#configur_property').find('[name=textFontSize]').append(option)
	    });
	    $('#configur_property').find('[name=textFontSize]').val(this.config.fontSize)
		$('#configur_property').find('.text').on('input propertyChange',function () {
			let value = $(this).val();
			that.update(value);
		})

		$('#configur_property').find('.text').on('blur',function () {
			let value = $(this).val();
			if(value=="") {
				let text = "文本";
				$(this).val(text)
				that.update(text);
			}
		})
	}

	update(text) {
		let width = $('#temp_value').css({'font-size':this.config.fontSize+"px"}).text(text).width()+4;
		$('#'+this.stage.property.id).find('span').css({width:width})
		$('.resize-panel').css({width:width})
		this.stage.property.width = width;
		this.stage.property.config.text = text;
		this.refresh();
	}
}

export default Text;
