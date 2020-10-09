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
        this.isAnimation = true;
	    this.config = {
	        bindData: {deviceId: ''},
			animations: [
			    {type: 31,
		    	 text: '填充->离散',
		    	 expr: 'SwSts',
		    	 on: {value: 1,url: 'static/images/start.png'},
		    	 off: {value: 0,url: 'static/images/end.png'},
		    	 value: 0,
		    	 category: 2}]
	    }
	}

	template(){
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    user-select: none;">
                    <img src="static/images/end.png" style="width:100%;height: 100%"/>
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

	initialize() {
	    let that = this;
        let deviceId = that.config.bindData.deviceId
        if(deviceId) {
	        that.stage.option.getDevice(deviceId,function (device) {
	            if(deviceId==device.id) {
	                that.reveal(device);
	            }
		    });
	    }
        $('#'+that.id).on('click',function() {
            that.config.animations.forEach(function(animation) {
            	if(animation.type==31) {
            		let value = animation.value==0?1:0;
            		that.control(deviceId,animation.expr,value,function() {
            			animation.value = value;
            		})
            	}
            })
	    });
	}

	reveal(device) {
	    let that = this;
	    if(device) {
	      device.points.forEach(function(point) {
	      	if(that.isAnimation) {
	      		let key = point.id;
	      	    let value = point.value;
	            that.dynamic(key,value);
	      	}
	      })
	    }
	}

	//填充（离散）
	fillDiscrete(animation,value) {
		let that = this;
		animation.value = value;
        if(animation.category==2) {
			if(value==animation.on.value) {
		        $('#'+that.id).find('img').attr("src", animation.on.url)
		   }else if(value==animation.off.value) {
		        $('#'+that.id).find('img').attr("src", animation.off.url)
		    }
		}
	}

	renderer() {
	    let that = this;
	    super.renderer();
	    /**let dataList = []
	    dataList.push(that.config.state.start)
	    dataList.push(that.config.state.stop)
	    dataList.forEach(function (data,index) {
	      let li = $(`<li><span>${data.name}：</span><img src="${data.url}"></li>`);
	      let button = $(`<span><form><div class="bm-upload" style="width: 50px"><span>更改</span><input type="file"/></div></form></span>`);
	      button.data("index", index);
	      button.find('form').on('change',function() {
	        let index = $(this).parent().data("index");
	        let form = $(this)[0]
	        let file = $(this).find('input').get(0).files[0]
	        that.stage.option.upload(form,file,function(url) {
	          let imgUrl = that.stage.config.imgHost+"/"+url;
	          if(index==0) {
	          	that.config.state.stop.url = imgUrl
	          }else if(index==1) {
	          	that.config.state.start.url = imgUrl
	          }
	          button.prev().attr("src", imgUrl);
	          that.refresh();
	        })
	      });
	      li.append(button);
	      $('.bm-common-list').append(li);
	    })**/
	}
}

export default Switch;
