import Spirit from '@/core/Spirit.js'

/**
 * 图片
 */
class Images extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "图片";
	    this.className = "Images";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 50;
	    this.minHeight = 50;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 0;
	    this.config = {url:''}
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
		        <div class="img" style="width:${this.width}px;height:${this.height}px;">
              <img src="${this.config.url}" style="width:100%;height: 100%"/>
              <div class="images-shade" style="position:absolute;top:0;width:100%;height: 100%"></div>
            </div>
		        </div>`)
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
		let html = `<div class="bm-tree">图片<div class="all" title="充满画布"><i class="fa fa-all"></i></div></div>
                  <div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <form id="imgBg">
                      <div class="bm-upload">
                        <span>选择图片</span>								 
                        <input type="file" name="bg"/>								 	              
                      </div>
                    </form>		
                  </div>				     		             
			        </div>`;
		$('#configur_property').append(html);

    $('#configur_property').find('.all').on('click',function () {
      let width = that.stage.width;
      let height = that.stage.height;
      $('.resize-panel').css({left:-2,top:-2,width,height})
      $('#'+that.stage.property.id).find('.img').css({width,height});
      that.stage.property.x = 0;
      that.stage.property.y = 0;
      that.stage.property.width = width;
      that.stage.property.height = height;
    });
	}
}

export default Images;
