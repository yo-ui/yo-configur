import Spirit from './../../core/Spirit'

/**
 * 文本
 */
class Text extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "静态文本";
	    this.className = "Text";
	    this.height = height;
	    this.width = width;
	    this.minWidth = 20;
	    this.zIndex = 4;
	    this.config = {text:'文本',color:'#000',fontSize:24}
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <div style="
		          line-height: ${this.height}px;
              height: ${this.height}px;
              width: ${this.width}px;">
			        <span style="color: ${this.config.color};font-size: ${this.config.fontSize}px">${this.config.text}</span>
			      </div>			  
			  </div>`)
		return div;
	}

	refresh() {
		$('#'+this.id).find('span').text(this.config.text);
		$('#'+this.id).find('span').css({color:this.config.color,'font-size':this.config.fontSize+"px"});
	}

	toJson() {
		let json = {
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
                  <div class="bm-cell no-hover">
                    <div class="bm-cell__title">
                      <div>字体颜色</div>
                      <input class="text-color" title="字体颜色" />
                    </div>													
                  </div>
                  <div class="bm-cell no-hover">
                    <div class="bm-cell__title">
                      <div>字体大小</div>
                      <select class="bm-select" name="textFS" title="字体大小"></select>	
                    </div>							
                  </div>
                  <div class="bm-cell no-hover">
                    <div class="bm-cell__title">
                      <div>修改文本</div>
                      <input type="text" class="text form-control" value="${this.config.text}" maxlength="32" title="字体文本" />
                    </div>							
                  </div>`;
		$('#configur_property').append(html);
		let dataList = [11,13,14,15,16,18,24,30,60,100]
    let element = $('#configur_property').find('[name=textFS]');
    dataList.forEach(function(data) {
      let option = $('<option></option>')
      option.val(data)
      option.text(data)
      element.append(option)
    });
    element.val(this.config.fontSize)
    element.on('change',function() {
      that.text();
    });
    let input = $('#configur_property').find('.text');
    input.on('input propertyChange',function() {
			let value = $(this).val();
			that.update(value);
		})
    input.on('blur',function () {
			let value = $(this).val();
			if(value=="") {
				let text = "文本";
				$(this).val(text)
				that.update(text);
			}
		})
	}

	text() {
	  let that = this;
    let element = $('#configur_property').find('[name=textFS]');
    let property = that.stage.property;
    property.config.fontSize = element.val();
    $('#'+property.id).find('span').css({'font-size':property.config.fontSize+"px"});
    $('#temp_value').html($('#'+property.id).find('div').html());
    let width = $('#temp_value').width()+2;
    let height = $('#temp_value').height();
    $('.resize-panel').css({width,height});
    $('#'+property.id).find('div').css({width,'line-height': height+"px",height});
    property.height = height;
    property.width = width;
  }

	update(text) {
	  let property = this.stage.property;
    property.config.text = text;
    $('#'+property.id).find('span').text(text);
    $('#temp_value').html($('#'+property.id).find('div').html());
    let width = $('#temp_value').width()+1;
		$('.resize-panel').css({width:width})
    $('#'+property.id).find('div').css({width:width});
    property.width = width;
		this.refresh();
	}
}

export default Text;
