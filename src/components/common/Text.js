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
	    this.config = {text:'文本',color:'#000',fontSize:24,fontStyle: 'normal',fontWeight: 'normal'}
	}

	template(){
		let content = ` <div style="
                      line-height: ${this.height}px;
                      height: ${this.height}px;
                      width: ${this.width}px;">
                      <span style="color: ${this.config.color};font-size: ${this.config.fontSize}px">${this.config.text}</span>
                    </div>`
    return super.template().html(content);
	}

	refresh() {
		$('#'+this.id).find('span').text(this.config.text);
		$('#'+this.id).find('span').css({
      color: this.config.color,
      'font-size': this.config.fontSize+"px",
      'font-style': this.config.fontStyle,
      'font-weight': this.config.fontWeight,
		});
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
                  <div class="bm-style">
                    <div class="text">颜色：</div>	
                    <div class="value">
                      <input class="text-color" title="字体颜色" />
                    </div>                      										
                  </div>
                  <div class="bm-style">
                    <div class="text">大小：</div>	
                    <div class="value">
                      <select class="bm-select" name="textFS" title="字体大小"></select>	
                    </div>						
                  </div>
                  <div class="bm-style">  
                    <div class="text">内容：</div>	              		
                    <div class="value">
                      <input type="text" class="text form-control" value="${this.config.text}" maxlength="32" title="字体文本" />
                    </div>		
                  </div>
                  <div class="bm-style">  
                    <div class="text">样式：</div>	              		
                    <div class="value">
                      <div class="bm-font-group"><span>B</span><span>I</span></div>
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

    $('#configur_property .bm-font-group span').each(function (index) {
      $(this).data("index", index);
      if(index==0) {
        if(that.config.fontWeight=="bold") {
          $(this).addClass("active")
        }
      }else {
        if(that.config.fontStyle=="italic") {
          $(this).addClass("active")
        }
      }
      $(this).on('click', function () {
        let index = $(this).data("index");
        if(index==0) {
          if($(this).hasClass("active")) {
            $(this).removeClass("active")
            $('#'+that.id).find('span').css({'font-weight': "normal"});
            that.config.fontWeight = "normal";
          }else {
            $(this).addClass("active")
            $('#'+that.id).find('span').css({'font-weight': "bold"});
            that.config.fontWeight = "bold";
          }
        }else {
          if($(this).hasClass("active")) {
            $(this).removeClass("active")
            $('#'+that.id).find('span').css({'font-style': "normal"});
            that.config.fontStyle = "normal";
          }else {
            $(this).addClass("active")
            $('#'+that.id).find('span').css({'font-style': "italic"});
            that.config.fontStyle = "italic";
          }
        }
        that.text();
      })
    });
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
