import Spirit from './../../core/Spirit'
/**
 * 四角形
 */
class Quadrangle extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "四角形";
	    this.className = "Quadrangle";
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
                  <path style="fill-rule:evenodd;clip-rule:evenodd;fill:${this.config.backgroundColor};" 
                  d="M28.5,14.5h44c7.7,0,14,6.3,14,14v44c0,7.7-6.3,14-14,14h-44c-7.7,0-14-6.3-14-14v-44 C14.5,20.8,20.8,14.5,28.5,14.5z"/>
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

export default Quadrangle;
