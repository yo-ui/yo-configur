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
	    this.height = 26; 
	    this.minWidth = 20;    
	    this.config = {text:'标题',color:'#000000',fontSize:24}
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:4;border:1px solid transparent">
		        <span style="min-width: 20px;
			        line-height: ${this.height}px;
			        border-radius: 2px;
			        color: ${this.config.color};
			        font-size: ${this.config.fontSize}px">${this.config.text}</span></div>`)
		return div;
	}

	arrangement(stage) {		
		stage.element.append(this.template());
	}

	getEl() {
		return $('#'+this.id);
	}
	
	init(config) {
		this.config = config;
		$('#'+this.id).find('span').text(this.config.text);
		$('#'+this.id).find('span').css({color:this.config.color,'font-size':this.config.fontSize+"px"});
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
	
	renderer() {
		super.renderer();
		let html = `<div class="configur-property-title"><img src="static/images/angle-right.png" width="9"/>&nbsp;字体</div>
		            <div>
			            <div class="property-group">
			                <span>字体大小：</span>
			                <select name="fontSize">
			                </select>
		                </div>
		                <div class="property-group">					     					     	
			                <span>字体颜色：</span>
			                <input name="cxColor" type="text" class="input_cxcolor" value="${this.config.color}" style="padding:0;width:18px"/>
		                </div>
	                </div>`;          
		$('#configur_property').append(html);	
		var dataList = [8,9,10,11,12,13,14,15,16,18,24,30] 
	    dataList.forEach(function(data) {
	    	var option = $('<option></option>')
	    	option.val(data)
	    	option.text(data)
	    	$('#configur_property').find('[name=fontSize]').append(option)
	    });
	    $('#configur_property').find('[name=fontSize]').val(this.config.fontSize)  
	}	
}

export default Text;
