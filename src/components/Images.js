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
	    this.config = {url:'static/images/configur/img.png'} 
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:0;border:1px solid transparent;">
		        <img src="${this.config.url}" style="width:${this.width}px;height:${this.height}px;"/>
		        <div class="images-shade" style="position:absolute;top:0;width:${this.width}px;height:${this.height}px;"></div>
		        </div>`)
		return div;
	}
	
	init(config) {
		this.config = config; 
		$('#'+this.id).find('img').attr('src', this.config.url);			
	}
	
	toJson() {
		let json = {
			title: this.title,
			className: this.className, 
			moveType: this.moveType,
			minWidth: this.minWidth,
			isBind: this.isBind,
			isMove: this.isMove
		};
		return Object.assign(super.toJson(),json);
	}
	
	renderer() {
		let that = this;
		super.renderer();
		let html = `<div class="configur-property-title"><img src="static/images/angle-right.png" width="9"/>&nbsp;更换</div>
		            <div class="property-group">	
						  <div class="upload">
				              <span>选择图片</span>
				              <form id="uploadBg">
				                <input type="file" name="bg"/>
				              </form>
				              
					      </div>
					      <span class="reset">${that.isMove?'置底':'恢复'}</span>
			            </div>`;
		$('#configur_property').append(html);	
		$('#configur_property').find('.reset').on('click',function(e) {	
			that.isMove = !that.stage.property.isMove;
			that.stage.property.isMove = that.isMove;
			let text = that.stage.property.isMove?"置底":"恢复";
			$('#configur_property').find('.reset').text(text)
			that.stage.layDown();
		});
	}	
}

export default Images;
