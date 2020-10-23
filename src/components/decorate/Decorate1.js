import Spirit from './../../core/Spirit'
/**
 * 装饰1
 */
class Decorate1 extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "装饰1";
	    this.className = "Decorate1";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 1;
      this.minHeight = 1;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 1;
	    this.config = {background:{color: '#0075E7'}}
	}

	template(){
		let content = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
                   viewBox="0 0 504 62" xml:space="preserve" preserveAspectRatio="none">                                                                                               
                   <g>
                      <g>
                        <polygon style="fill: ${this.config.backgroundColor}" points="505.2,57.4 203.9,57.4 199.7,54 181.3,54 174.3,47 168,47 128,7 75.1,7 72.5,1.4 46.1,1.4 40.5,7 
                          1,7 1,10 116,10 141.3,33.7 150.5,33.7 177.2,60.4 358,60.4 360.9,63.3 407.6,63.3 409.9,60.4 505.2,60.4 		"/>
                      </g>
                   </g>
                </svg>`
    return super.template().html(content);
	}

  refresh() {
    $('#'+this.id).find('polygon').css({fill: this.config.background.color})
  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			isMove: this.isMove,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}

	renderer() {
	    let that = this;
	    super.renderer();
	    let html = $(`<div class="bm-tree"><i class="fa fa-down"></i>&nbsp;背景</div>
	                <div class="bm-cell no-hover">
	                  <div class="bm-cell__title">
	                    <div>背景颜色</div>
	                    <input type="color" name="bgColor" title="背景颜色" />
	                  </div>													
	                </div>`);
	    $('#configur_property').append(html);

	    html.find("[name=bgColor]").val(that.config.background.color)
	    html.find("[name=bgColor]").on('change',function() {
	    	that.config.background.color = $(this).val();
	    	that.refresh();
	    })
	}
}

export default Decorate1;
