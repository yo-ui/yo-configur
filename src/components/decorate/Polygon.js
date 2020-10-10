import Spirit from './../../core/Spirit'
/**
 * 多边形
 */
class Polygon extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "多边形";
	    this.className = "Polygon";
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
                  <path style="${this.config.backgroundColor}" d="M50.5,9.3l43.7,31.8L77.5,92.5H23.5L6.8,41.1L50.5,9.3z"/>
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
	    let html = $(`<div class="bm-tree">背景</div>
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

export default Polygon;
