import Spirit from './../../core/Spirit'
/**
 * 装饰1
 */
class Decorate2 extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "装饰1";
	    this.className = "Decorate2";
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
                   viewBox="0 0 510 108" xml:space="preserve" preserveAspectRatio="none">                                                                                               
                   <g>
                      <g>
                        <polygon style="fill: ${this.config.backgroundColor}" points="509.7,63.4 506.7,63.4 506.7,79 501.8,83.9 501.8,100 10.8,100 10.8,68.4 5.5,63.2 5.5,-0.1 
                          2.5,-0.1 2.5,5.6 -0.5,8.6 -0.5,25.5 2.5,30.8 2.5,103 181.2,103 186.3,108.1 247.4,108.1 250.1,103 509.7,103 		"/>
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

export default Decorate2;
