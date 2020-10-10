import SpiritFactory from './../core/SpiritFactory'
import Password from './../core/Password'
import Zoom from './../core/Zoom'
import Panel from './../core/Panel';
/**
 * 预览舞台
 */
class ViewStage {

	constructor(option,imgHost) {
	    let that = this;
	    this.imgHost = imgHost;
		  this.option = option;
	    this.zoom = new Zoom(this);
	    this.panel = new Panel(this);
		  this.option.canvas(function(data) {
			that.canvas = {id:data.id};
	        if(!data.data) {
	          data.data = JSON.stringify({background:{url:'',color: '#fff'},capacity:[]})
	        }
			that.analysis(data.width,data.height,JSON.parse(data.data));
            that.location();
		})
        this.password = new Password(this);
	}

	createStage(width,height,background) {
	    let that = this;
		this.width = width;
		this.height = height;
		this.background = background;
		let element = $('<div id="configur_stage"></div>').css({
			position: 'relative',
			width: width+'px',
			height: height+'px',
            'user-select:': 'none',
			'background-color': background.color
		});
		this.element = element;
		this.capacity = [];
		this.element.on('click',function(e) {
			$('.bm-view-panel').hide();
			e.stopPropagation();
		});
		$('#root').append(this.element);
		this.drag();
    that.zoomPanel(element);
	}

	zoomPanel(element) {
	  let that = this;
    let lock = false;
    let show = true;
    let t1;
    element.on('mousemove',function () {
      const t2 = setInterval(() => {
        if(show&&lock) {
          $('.bm-zoom-panel > div').hide();
          lock = false;
        }
        clearInterval(t2);
      }, 1500);
    });
    element.on('mouseover',function () {
      if(t1) {
        clearInterval(t1);
      }
      t1 = setInterval(() => {
        if(lock) {
          lock = false;
          $('.bm-zoom-panel > div').show();
        }
        lock = true;
      }, 500);
    });

    element.on('mouseout',function (e) {
      let y = e.offsetY;
      let x = e.offsetX;
      if((x<=0||x>=that.width)||
         (y<=0||y>=that.height)) {
        lock = false;
        $('.bm-zoom-panel > div').hide();
        clearInterval(t1)
      }
    });


    let panel = $('.bm-zoom-panel > div');

    panel.on('mouseover',function () {
      show = false;
    });

    panel.on('mouseleave',function (e) {
      show = true;
    });

    panel.find('.fa-zoom-in').on('click',function () {
      that.zoom.zoomIn()
      that.zoom.zoomText();
    });

    panel.find('.fa-zoom-out').on('click',function () {
      that.zoom.zoomOut()
      that.zoom.zoomText();
    });
  }

  drag() {
    let x,y,move;
    $("#configur_stage").on('mousedown',function (e,data) {
      move = true;
      $(this).css({cursor: 'grab'})
      if(data){
        x = data.x-parseInt($(this).css("left"));
        y = data.y-parseInt($(this).css("top"));
      }else{
        x = e.pageX-parseInt($(this).css("left"));
        y = e.pageY-parseInt($(this).css("top"));
      }
    })
    $("#configur_stage").on('mouseup',function (e) {
      $(this).css({cursor: 'default'})
    })
    $(document).mousemove(function(e) {
      if(move) {
        let left = e.pageX-x;
        let top = e.pageY-y;
        $("#configur_stage").css({top,left});
      }
    }).mouseup(function(ev) {
      move = false;
    });
  }

  location() {
    let stage = $('#configur_stage');
    let root = $('#root');
    let rootHeight = Number(root.height());
    let height = stage.height();
    if(height<rootHeight) {
      stage.css({top:(rootHeight-height)/2});
    }else {
      stage.css({top:0});
    }
    let width = stage.width();
    let rootWidth = Number(root.width());
    if(width<rootWidth) {
      stage.css({left:(rootWidth-width)/2});
    }else {
      stage.css({left:0});
    }
  }

	//创建
	create(className,x,y,width,height,rotate=0,id) {
    let spirit = SpiritFactory.getInstance(className,x,y,width,height);
    if(id) {
      spirit.id = id;
    }
    spirit.rotate = rotate;
    spirit.arrangement(this);
    this.addEvent(spirit);
    return spirit;
  }

	addEvent(spirit) {
		let that = this;
	    let el = spirit.getEl();
	    el.data("id", spirit.id);
	    el.on('contextmenu',function(e) {
	      if(spirit.isPanel) {
	        let id = $(this).data('id');
	        that.capacity.forEach(function (spirit) {
	          if(spirit.id == id) {
	            that.spirit = spirit;
	          }
	        });
	        if (that.spirit.config.bindData) {
	          let deviceId = that.spirit.config.bindData.deviceId;
	          if (deviceId) {
	            that.option.getDevice(deviceId, function (device) {
	              $('.bm-view-panel').hide();
	              if(device) {
	                let left = el.offset().left + el.width();
	                let top = el.offset().top - 60;
	                $('.bm-view-panel').css({left, top});
	                that.spirit.viewPanel(device);
	              }
	            })
	          }
	        }
	      }
	      e.stopPropagation();
	      e.preventDefault();
	    });
	}
  //解析
	analysis(width,height,data) {
    let that = this;
		$('#root').html('');
		if(data) {
	      if(data.variableList) {
	        that.variableList = data.variableList;
	      }else {
	        that.variableList = [];
	      }
		    this.createStage(width,height,data.background);
		    data.capacity.forEach(function(property) {
		    let id = property.id;
			  let className = property.className;
			  let x = property.x;
			  let y = property.y;
			  let width = property.width;
			  let height = property.height;
			  let rotate= property.rotate;
			  let spirit = that.create(className,x,y,width,height,rotate,id);
			  spirit.config = property.config;
	        if(className=="Images") {
	          let url = that.imgHost+"/"+spirit.config.url;
	          $('#'+spirit.id).find('img').attr('src', url);
	        }
			  spirit.refresh();
			  that.capacity.push(spirit);
			})
      console.log(this.capacity);
      let ids = new Set();
      this.capacity.forEach(function(data) {
          if(data.isBind) {
            let deviceId = data.config.bindData.deviceId;
            if(deviceId) {
              ids.add(deviceId);
            }
          }
          data.initialize(ids);
			});

	    that.option.socket(ids,function(dataList) {
	        that.reveal(dataList);
	    })
		}
	}

  //绑定数据显示
  reveal(dataList) {
	  let that = this;
      dataList.forEach(function(device) {
	      that.capacity.forEach(function(spirit) {
	        if(spirit.isBind) {
	          let deviceId = spirit.config.bindData.deviceId;
	          if(deviceId==device.id) {
	            spirit.reveal(device);
	          }
	        }
	      });
      })
  }

  //联动
  linkage(device) {
    this.capacity.forEach(function(spirit) {
      if(spirit.isBind){
        let deviceId = spirit.config.bindData.deviceId;
        if(deviceId==device.id) {
          spirit.reveal(device);
        }
      }
    });
  }

  getVariable(key) {
  	let data;
  	this.variableList.forEach(function(variable) {
  		if(key==variable.key) {
  			data=variable;
  		}
  	})
  	return data;
  }
}

export default ViewStage;
