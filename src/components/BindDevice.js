/**
 * 
 */
class BindDevice {

	constructor(stage,name,width,height) {
	   let that = this;	
       $('.configur-panel').find('.configur-panel-h span').text(name)
       $('.configur-panel').find('.configur-panel-c').html(this.template());
       $('.configur-panel-content').css({width: width,height: height})
       $('.configur-panel').show();
       $('.configur-panel').find('.close').on('click',function() {
		   $('.configur-panel').hide();
	   });
	    
	   $('.configur-device').find('.tabs span').each(function(){
	   	 $(this).on('click',function() {
	   		$(this).addClass('active');
	   		$(this).siblings().each(function() {
	   			$(this).removeClass('active');
	   		})
	   		let value = $(this).data('value');
	   		if(value==0) {
	   			$('.configur-device').find('.search-group').show();
	   			$('.configur-device').find('.base-select').hide();
	   		}else {
	   			$('.configur-device').find('.search-group').hide();
	   			$('.configur-device').find('.base-select').show();
	   			$('.search-group').find('input').val('');
	   		}
	   	 })	   	
	   })
	   
	   $('.configur-device').find('.base-select').on('click',function(e) {
	   	   let value = $(this).data('value');
	   	   if(value==0) {
	   	   	 $(this).find('img').attr('src','static/images/down.png')
	   	   	 $(this).data('value',1)
	   	   	 $('.base-select-panel').show()
	   	   }else {
	   	   	 $(this).find('img').attr('src','static/images/right.png')
	   	   	 $(this).data('value',0)
	   	   	 $('.base-select-panel').hide()
	   	   }
	   	   e.stopPropagation();
	   })
	   
	   $('.configur-panel').on('click',function(e) {
	   	   that.hide();
	   	   e.stopPropagation();
	   })
	   
	   $('.base-select-panel').on('click',function(e) {
	   	   e.stopPropagation();
	   })
	   
	   $('.configur-canvas-floor .btn-add').on('click',function() {
		   let bindDevice = {}
           $('.configur-device-list li').each(function() {
               if($(this).hasClass('active')) {
            		bindDevice.id = $(this).data('id')
               }
           })           
           let bindPoint = {};
           $('.bind-point li').each(function() {
            	if($(this).hasClass('active')) {
            		bindPoint.id = $(this).data('id');
            		bindPoint.unit = $(this).data('unit');
            	}
           })			
		   that.stage.capacity.forEach(function(property) {
				if(that.stage.configurId==property.id) {
					property.bindDevice = bindDevice;
					property.config.bindPoint = bindPoint;
					property.init(property.config);
				}
		   })			
			$('.configur-panel').hide();
			$('#configur_list li').each(function() {
				if($(this).hasClass('active')) {
					$(this).find('img').attr('src','static/images/bind-1.png');
				}
			})
		});			
		
		$('.configur-canvas-floor .btn-close').on('click',function() { 
		    $('.configur-panel').hide();
		})
	   
	    $('.search-group').find('input').on('input propertychange',function() {
			let dataList = [];
			let text = $(this).val();
			that.stage.deviceList.forEach(function(device) {
				if(device.name.indexOf(text)!=-1) {
					dataList.push(device);
				}
			});
			that.createDeviceList(dataList);
		})

	    if(stage.property.bindType==1) {
	    	$('.bind-point').hide(); 
	    	$('.configur-device-list').css({width:'100%'})
	    }else {
	    	$('.bind-point').show();
	    	$('.configur-device-list').css({width:'280px'})
	    }
	    this.init(stage);
	}
	
	hide() {
		$('.base-select-panel').hide()
	   	$('.base-select').find('img').attr('src','static/images/right.png')
	   	$('.base-select').data('value',0)
	}

	template(){
		let html = `<div class="configur-device">
		              <div class="configur-device-list">
		                <div class="device-select">
		                    <div class="tabs"><span class="active" data-value="0">名称</span><span data-value="1">位置</span></div>
		                    <div class="relative inline-block v-middle">
			                    <div class="search-group"><input type="text" style="width:144px"/><img src="static/images/search-b.png"/></div>
			                    <div class="base-select" style="width:169px" data-value="0"><span></span><img src="static/images/right.png"/></div>
			                    <div class="base-select-panel device-group-list">
			                        <ul>
			                            
			                        </ul>
			                    </div>
		                    </div>
		                </div>		                
					    <ul></ul>
				      </div>
				      <div class="bind-point">
				        <ul></ul>				        
				      </div>
				      <div class="configur-canvas-floor" style="margin-top: 10px;">						
						<div class="btn btn-close">关闭</div>
						<div class="btn btn-add">确定</div>
					  </div>
				    </div>`
		return html;
	}
	
	init(stage) {		
		let that = this;
		that.stage = stage;
		stage.capacity.forEach(function(property) {
			if(stage.configurId==property.id) {
				stage.bindDevice = property.bindDevice;
				stage.config = property.config;
			}
		})			
		this.organizList();		
	}
	
	organizList() {
		let that = this;
		that.stage.option.organizList(function(organizList) {
			var dataList = [];
			that.treeData(organizList,dataList,{id:0},0)
			that.stage.organizList = dataList;
			that.createOrganizList();
			if(that.stage.organizList.length) {
				that.orgId = that.stage.organizList[0].id;
				that.devicePoints();
			}
		})
	}
	
	createOrganizList() {
		$('.device-group-list > ul').html('')
		let that = this;
		this.stage.organizList.forEach(function(data,index) {		
			if(data.isShow) {
				let li = $('<li></li>')
				let span = $('<span></span>')
				if(!data.leaf) {
					if(data.isOpen) {
		                let img = $('<img src="static/images/right.png"/>')
					    span.append(img)
		            }else {
		                let img = $('<img src="static/images/down.png"/>')
					    span.append(img)
		            }
	            }
				span.data('id',data.id);
				span.data('isOpen', data.isOpen);
				span.on('click',function(e) {
					let id = $(this).data('id');
				    let isOpen = $(this).data('isOpen');
					that.iteration(id,!isOpen);
					that.createOrganizList();
					e.stopPropagation();
				})
				let small = $('<small></small>')
				small.text(that.textFormatt(data.name,10));
				li.append(span).append(small)
				li.css({'padding-left':(data.level*20+5)+'px'});
				if(index==0) {
					li.addClass('active')
					$('.base-select').find('span').text(that.textFormatt(data.name,10))
				}
				li.data('id',data.id);
				li.on('click',function() {
					let text = $(this).find('small').text();
					$('.base-select').find('span').text(that.textFormatt(text,10));
					$(this).addClass('active')
					$(this).siblings().each(function() {
						$(this).removeClass('active')
					})
					that.orgId = $(this).data('id')
					that.devicePoints();
					that.hide();
				})
				$('.device-group-list > ul').append(li)
			}
		});
	}
	
	textFormatt(text,value) {
		return text.length>value?text.substr(0,value)+"...":text
	}
	
	iteration(id,isShow) {	  
		let that = this;
        that.stage.organizList.forEach(function (data) {
	        if(id==data.id) {
	            data.isOpen = isShow;
	        }
	        if(id==data.pid) {
	          data.isShow = isShow;
	          that.iteration(data.id,isShow);
	        }
        })
    }
	
	treeData(itemList,dataList,parent,level) {
        var that = this;
        parent.leaf = true;
        itemList.forEach(function (data) {
            if(parent.id==data.pid) {
               parent.leaf = false;
               parent.isOpen = true;
               data.isShow = true;
               data.isOpen = false;
               data.level = level;
               dataList.push(data);
               that.treeData(itemList,dataList,data,data.level+1);
            }
        })
    }
	
	devicePoints() {
		let that = this;
		that.stage.option.devicePoints(that.orgId,function(deviceList) {
			that.stage.deviceList = deviceList;	
			let dataList = [...deviceList]
			that.createDeviceList(dataList);
		})
	}
	
	createDeviceList(deviceList) {
		$('.bind-point ul').html('');
		let that = this;
		$('.configur-device-list > ul').html('');
		deviceList.forEach(function(device,index) {
			let li = $('<li></li>')
			li.text(that.textFormatt(device.name,16));
			li.data("id", device.id);
			
			if(that.stage.bindDevice) {
				if(that.stage.bindDevice.id==device.id) {
					li.addClass('active');
					that.dPointList(that.stage,device.points);
				}
			}		
			li.on('click',function() {
				$(this).addClass('active')
				$(this).siblings().each(function() {
					$(this).removeClass('active');
				})
				let id = $(this).data('id');
				let pointList = []
				that.stage.deviceList.forEach(function(d) {
					if(d.id==id) {
						pointList = d.points;
					}
				});
				that.dPointList(that.stage,pointList); 
			});
			$('.configur-device-list > ul').append(li);
		});
	}
	
	dPointList(stage,pointList) {
		$('.bind-point ul').html('');
		pointList.forEach(function(point) {
			let li = $('<li></li>')
			li.text(point.name+"("+point.id+")");
			li.data("id",point.id);
			li.data("unit",point.unit);
			if(stage.config.bindPoint) {							
				if(stage.config.bindPoint.id == point.id) {
					li.addClass('active');
				}
			}
			li.on('click',function() {
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
				}else {
					$(this).addClass('active')
					$(this).siblings().each(function() {
						$(this).removeClass('active');
					})
				}				
			});
            $('.bind-point ul').append(li);
		})
	}
}

export default BindDevice;
