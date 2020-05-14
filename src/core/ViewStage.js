import '@/assets/css/index.css'

import SpiritFactory from '@/core/SpiritFactory.js'
import Password from '@/core/Password.js'
/**
 * 预览舞台
 */
class ViewStage {

	constructor(option) {
		this.option = option;
		let that = this;
		this.option.canvas(function(data) {
			that.canvas = {id:data.id};
			that.analysis(data.width,data.height,JSON.parse(data.data));
		})
    this.password = new Password(this);
		this.location()
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
			'background-color': background.color
		});
		this.element = element;
		this.capacity = [];//容器
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
        $("#configur_stage").css({top:top,left:left});
      }
    }).mouseup(function(ev) {
      move = false;
    });
  }

  location() {
    let stage = $('#configur_stage');
    let rootHeight = Number($('#root').height());
    let height = stage.height();
    if(height<rootHeight) {
      stage.css({top:(rootHeight-height)/2});
    }else {
      stage.css({top:0});
    }
    let width = stage.width();
    let rootWidth = Number($('#root').width());
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
		if(spirit.isPanel) {
			let el = spirit.getEl();
			el.data("id", spirit.id);
			el.on('click',function(e) {
				let id = $(this).data('id');
				that.capacity.forEach(function(property) {
					if(property.id==id) {
						that.spirit = property;
					}
				});
				if(that.spirit.bindDevice) {
					that.option.getDevice(that.spirit.bindDevice.id,function(device) {
            $('.bm-view-panel').hide();
						that.spirit.viewPanel(device);
					})
          e.stopPropagation();
          e.preventDefault();
				}

			});
		}
	}

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
				spirit.bindDevice = property.bindDevice;
				spirit.config = property.config
				spirit.refresh();
				that.capacity.push(spirit);
			})

			let ids = new Set();
			this.capacity.forEach(function(data) {
			    if(data.bindDevice) {
			    	ids.add(data.bindDevice.id);
			    }
			});

			let devices = []
			for(let id of ids.keys()) {
			    that.capacity.forEach(function(data) {
				    if(data.bindDevice&&data.bindDevice.id==id) {
				    	devices.push(data.bindDevice);
				    }
				});
			}

			this.option.devicePoints(devices,function(deviceList) {
				deviceList.forEach(function(device) {
					that.capacity.forEach(function(spirit) {
						if(spirit.bindDevice) {
							if(spirit.bindDevice.id==device.id) {
						    	spirit.reveal(device,spirit.config);
						    }
						}
					});
				})
			})

			//$('#configur_stage').css({top:'50%','margin-top':-height/2+'px'});
		}
	}
  //联动 改变点位时联动关联的绑定设备
  linkage(device) {
    this.capacity.forEach(function(spirit) {
      if(spirit.bindDevice) {
        if(spirit.bindDevice.id==device.id) {
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
