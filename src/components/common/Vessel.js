import Spirit from './../../core/Spirit'
/**
 * 容器
 */
class Vessel extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "容器";
	    this.className = "Vessel";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 50;
      this.minHeight = 30;
	    this.moveType = 4;
	    this.linkage = false;
      this.isLink = true;
	    this.isMove = true;
	    this.zIndex = 0;
      this.config = {
        bindData: {orgId: '', deviceId: '', devicePoint: ''},
        backgroundColor:'transparent',
        status: 1,
        dataList: []
      }
	}

	template(){
		let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div class="bm-vessel" style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    background-color: ${this.config.backgroundColor}">      
                    <div class="bm-foot"></div>           
                  </div>	
                </div>`)
		return html;
	}

  refresh() {
    $('#'+this.id).find('div').css({'background-color':this.config.backgroundColor});
    this.config.status==1?this.show():this.hide();
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
    let html = `<div class="bm-tree">背景</div>
                <div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <div>背景颜色</div>
                    <input class="bg-color" title="背景颜色" />
                  </div>													
                </div>
                <div class="bm-tree">动作</div>
                <div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <select class="bm-select" style="display: inline-block;">
                      <option value="1">显示</option>
                      <option value="2">隐藏</option>
                    </select>
                  </div>													
                </div>`;
    $('#configur_property').append(html);

    let select = $('#configur_property').find('.bm-select');
    select.on("change",function () {
      let value = $(this).val();
      if(value==1) {
        that.show();
      }else if(value==2) {
        that.hide();
      }
    });
    select.val(that.config.status);
	}

	show() {
    super.show();
    this.config.status = 1;
    this.config.dataList.forEach(function (id) {
      $("#"+id).show();
    })
  }

  hide() {
    super.hide();
    this.config.status = 2;
    this.config.dataList.forEach(function (id) {
      $("#"+id).hide();
    })
  }
}

export default Vessel;
