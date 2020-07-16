import Spirit from '@/core/Spirit.js'

/**
 * 图片
 */
class Images extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.title = "图片";
	    this.className = "Images";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 50;
	    this.minHeight = 50;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 0;
	    this.config = {url:'static/images/background/background.jpg'}
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
		        <img src="${this.config.url}" style="width:${this.width}px;height:${this.height}px;"/>
		        <div class="images-shade" style="position:absolute;top:0;width:${this.width}px;height:${this.height}px;"></div>
		        </div>`)
		return div;
	}

	toJson() {
		let json = {
			title: this.title,
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
		let html = `<div class="bm-tree">${that.title}</div>
                    <div>
		                <div class="bm-cell no-hover">
		                  <div class="bm-cell__title">
		                      <form id="uploadBg">
								  <div class="bm-upload">
									  <span>选择图片</span>								 
									  <input type="file" name="bg"/>								 	              
								  </div>
							  </form>		
					      </div>
					     
			            </div>			             
			        </div>`;
		$('#configur_property').append(html);
	}
}

export default Images;
