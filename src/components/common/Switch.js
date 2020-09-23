import Spirit from './../../core/Spirit'
/**
 * 背景
 */
class Switch extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "开关";
	    this.className = "Switch";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 30;
      this.minHeight = 30;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 1;
      this.isBind = true;
      this.config = {
        bindData: {orgId: '', deviceId: '', devicePoint: ''}, value: 0,
        stages: [{name: '关', url: 'static/images/end.png'}, {name: '开', url:'static/images/start.png'}]
      }
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    user-select: none;">
                    <img src="" style="width:100%;height: 100%"/>
                    <div class="images-shade" style="position:absolute;top:0;width:100%;height: 100%"></div>
                  </div>	
                </div>`)
	}

  arrangement(stage) {
	  let that = this;
    that.stage = stage;
    stage.element.append(that.template());
    let index = this.config.value;
    $('#'+this.id).find('img').attr("src", this.config.stages[index].url)
  }

  refresh() {
    let index = this.config.value;
    $('#'+this.id).find('img').attr("src", this.config.stages[index].url)
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

	initialize() {
    let that = this;
    $('#'+this.id).on('click',function () {
      that.point = {id:'',value:''}
      let deviceId = that.config.bindData.deviceId
      if(deviceId) {
        that.stage.option.getDevice(deviceId,function (device) {
          if(deviceId==device.id) {
            if(device.points) {
              device.points.forEach(function (point) {
                if(point.id == "SwSts") {
                  that.point = point;
                  if(that.point.id&&that.point.value) {
                    let point = that.point.id;
                    let value = that.point.value;
                    that.control(deviceId,point,value==0?1:0)
                  }
                }
              });
            }
          }
        });
      }
    });
  }

	renderer() {
    let that = this;
    super.renderer();
    let html = `<div class="bm-tree">状态</div>             
                 <div class="bm-cell no-hover">
                   <div class="bm-cell__title">
                     <ul class="bm-common-list"></ul>
                   </div>							
                 </div>`;
    $('#configur_property').append(html);

    that.config.stages.forEach(function (stage,index) {
      let li = $(`<li><span>${stage.name}：</span><img src="${that.config.stages[index].url}"></li>`);
      let button = $(`<span><form><div class="bm-upload" style="width: 50px"><span>更改</span><input type="file"/></div></form></span>`);
      button.data("index", index);
      button.find('form').on('change',function () {
        let index = $(this).parent().data("index");
        let form = $(this)[0]
        let file = $(this).find('input').get(0).files[0]
        that.stage.option.upload(form,file,function(url) {
          let imgUrl = that.stage.config.imgHost+"/"+url;
          that.config.stages[index].url = imgUrl;
          button.prev().attr("src", imgUrl);
          that.refresh();
        })
      });
      li.append(button);
      $('.bm-common-list').append(li);
    })
	}
}

export default Switch;
