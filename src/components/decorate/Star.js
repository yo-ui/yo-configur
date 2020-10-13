import Spirit from './../../core/Spirit'
/**
 * 星形
 */
class Star extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "星形";
	    this.className = "Star";
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
                      <path style="${this.config.backgroundColor}" d="M50.5,12.5l9.4,29.1l30.6-0.1L65.7,59.5l9.5,29l-24.7-18l-24.7,18l9.5-29L10.6,41.6l30.6,0.1L50.5,12.5z"/>
                  </g></g>
                </svg>`
    return super.template().html(content);
	}

  refresh() {
    $('#'+this.id).find('path').css({fill: this.config.background.color})
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

export default Star;
