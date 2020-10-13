import Spirit from './../../core/Spirit'
/**
 * 箭头
 */
class Arrows extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "箭头";
	    this.className = "Arrows";
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
                   viewBox="0 0 100 100" xml:space="preserve" preserveAspectRatio="none">                         
                  <g><g>
                      <polygon style="fill-rule:evenodd;clip-rule:evenodd;fill:${this.config.background.color};" points="84,17.5 53.3,28.5 59.6,34.8 17.5,76.9 24.6,84 66.7,41.9 73,48.3 		"/>
                  </g></g>
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

export default Arrows;
