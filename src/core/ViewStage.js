import SpiritFactory from '@/core/SpiritFactory.js'
import Password from '@/core/Password.js'
/**
 * 预览舞台
 */
class ViewStage {

	constructor(option) {
    let that = this;
		this.option = option;
		this.option.canvas(function(data) {
			that.canvas = {id:data.id};
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
	}

  drag() {
    let x,y;
    let move;
    $("#configur_stage").on('mousedown',function (e,data) {
      move = true;
      $(this).css({cursor: 'grab'})
      if(data) {
        x = data.x-parseInt($("#configur_stage").css("left"));
        y = data.y-parseInt($("#configur_stage").css("top"));
      }else{
        x = e.pageX-parseInt($("#configur_stage").css("left"));
        y = e.pageY-parseInt($("#configur_stage").css("top"));
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
	create(className,x,y,width,height,rotate=0) {
    let that = this;
    let spirit = SpiritFactory.getInstance(className,x,y,width,height);
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
            if (spirit.id == id) {
              that.spirit = spirit;
            }
          });
          if (that.spirit.config.bindData) {
            let deviceId = that.spirit.config.bindData.deviceId;
            if (deviceId) {
              that.option.getDevice(deviceId, function (device) {
                $('.bm-view-panel').hide();
                if (device) {
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
		$('#root').html('');
		if(data) {
			let that = this;
			this.createStage(width,height,data.background);
			data.capacity.forEach(function(property) {
				let className = property.className;
				let x = property.x;
				let y = property.y;
				let width = property.width;
				let height = property.height;
				let rotate= property.rotate;
				let spirit = that.create(className,x,y,width,height,rotate);
				spirit.config = property.config
				spirit.refresh();
				that.capacity.push(spirit);
			})
      let ids = new Set();
			this.capacity.forEach(function(data) {
        if(data.isBind) {
          let id = data.config.bindData.deviceId;
          if(id) {
            ids.add(id);
          }
        }
			});
			this.option.deviceList(ids,function(dataList) {
			  console.log(dataList);
        that.initialize(dataList);
        that.option.socket(ids,function(dataList) {
          that.reveal(dataList);
        })
			})
		}
	}

  initialize(dataList) {
    let that = this;
    dataList.forEach(function(device) {
      that.capacity.forEach(function(spirit) {
        if(spirit.isBind) {
          if(spirit.config.bindData.deviceId==device.id) {
            spirit.initialize(device,spirit.config);
          }
        }
      });
    })
  }

  //绑定数据显示
  reveal(dataList) {
	  let that = this;
    dataList.forEach(function(device) {
      that.capacity.forEach(function(spirit) {
        if(spirit.isBind) {
          if(spirit.config.bindData.deviceId==device.id) {
            spirit.reveal(device,spirit.config);
          }
        }
      });
    })
  }
  //联动 改变点位时联动关联的绑定设备
  linkage(device) {
    this.capacity.forEach(function(spirit) {
      if(spirit.isBind) {
        if(spirit.config.bindData.deviceId==device.id) {
          spirit.reveal(device,spirit.config);
        }
      }
    });
  }
  //提示框
	toast(text) {
		$('.bm-toast').show();
		$('.bm-toast__text').text(text);
		const timer = setInterval(() => {
			clearInterval(timer);
			$('.bm-toast').hide()
		}, 2000);
	}
}

export default ViewStage;
