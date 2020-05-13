import '@/assets/css/index.css'

import SpiritFactory from '@/core/SpiritFactory.js'

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
		
		$('.password-header').find('span').on('click',function() {
			$('.password-panel').hide()
		})
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
			margin: 'auto',
			transform: 'scale(1)',
			'background-color': background.color
		});							
		this.element = element;
		this.capacity = [];//容器 
		this.element.on('click',function(e) {
			$('.bm-view-panel').hide();
			e.stopPropagation();
		});
		$('#root').append(this.element);
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
						let left = el.offset().left+el.width();
						let top = el.offset().top-60;
						$('.bm-view-panel').css({left:left,top:top});
						that.spirit.viewPanel(device);																				
					})					
					e.stopPropagation();
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
			
			$('#configur_stage').css({top:'50%','margin-top':-height/2+'px'});
			
			$('.password-header').find('span').on('click',function() {
				$('.password-panel').hide();
			});
			
			$('.password-cancel').on('click',function() {
				$('.password-panel').hide();
			});
			
			$('.password-input input').each(function() {
				$(this).on('input propertychange',function() {
					if($(this).val()!="") {
						$(this).next().focus();
					}else {
						$(this).prev().focus();
					}
				});
			})
		}	
	}

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