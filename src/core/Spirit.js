class Spirit {
	
	constructor(x=0,y=0,width=10,height=10) {
		this.id = "c_"+Math.random().toString().substr(2,10);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.isMove = true;
		this.bindType = 1;
	}
	
	toString() {}
	
	toJson() {
		return {
			id:this.id,
			x:this.x,
			y:this.y,
			width:this.width,
			height:this.height,
			isMove:this.isMove 
		}
	}
	
	init(config) {
		this.config = config
	}
	
	getEl() {
		return $('#'+this.id);
	}
	
	arrangement(stage) {
		this.stage = stage;
		stage.element.append(this.template());
	}
	
	reveal(device,config) {}
	
	renderer() {
		$('#configur_property').html('');	
		let html = `<div class="configur-property-title"><img src="static/images/angle-right.png" width="9"/>&nbsp;${this.title}</div>
		            <div>
			            <div class="property-group">
					        <div class="property-row">
			                    <span>X：</span><span style="text-align:left">${this.x}</span>
			                </div>
			                <div class="property-row">
			                    <span>Y：</span><span style="text-align:left">${this.y}</span>
			                </div>
				        </div>
				        <div class="property-group">
				            <div class="property-row">
				                <span>W：</span><span style="text-align:left">${this.width}</span>
					        </div>
				            <div class="property-row">
				                <span>H：</span><span style="text-align:left">${this.height}</span>
				            </div>	
				        </div>
			        </div>`;
		$('#configur_property').html(html);
	}
	
	viewPanel(device) {
		if(device) {					
			let that = this;
			$('.view-panel').html('');
			let vpt = $(`<div class="view-panel-title">${that.lengthFormat(device.name,24)}</div>`);
		    let vpc = $(`<div class="view-panel-content"></div>`);
		    let ul = $('<ul></ul>');	      
		    device.points.forEach(function(point) {
		    	let li = $(`<li>
		    	              <span class="text">${point.name}</span>
		    	          </li>`);
		    	if(point.id=="SwSts") {
		    		let img = $('<img style="height: 20px;vertical-align: middle;"/>')
		    		if(point.value==1) {
		    			img.attr("src","static/images/start.png");
		    			img.data("value", 1)
		    		}else {
		    			img.attr("src","static/images/end.png");
		    			img.data("value", 0)
		    		}
		    		img.on('click',function(e) {
		    			let value = img.data("value");	
		    			$('.password-affirm').unbind();		    			
		    			$('.password-input input').each(function() {
						    $(this).val('');
						})
						$('.password-panel').show();								
						$('.password-cancel').on('click',function() {
							$('.password-panel').hide();
						})								
						$('.password-affirm').on('click',function(e) {
							let text = '';
						    $('.password-input input').each(function() {
						    	text+=$(this).val()
						    })
						    if(text.length<6) {
						    	alert('请输入正确密码！');
						    	return;
						    }							
							that.stage.option.control(device.id,point.id,value==1?0:1,function(msg) {
								var result = JSON.parse(msg);
                                if(result.success) {
                                	var message = JSON.parse(result.message);
                                    if(message.status.code==100000){
										if(value==1) {
						    				img.attr("src","static/images/end.png")
						    			    img.data("value", 0)
						    			    $('#'+that.id).html(that.close())
						    			}else {
						    				img.attr("src","static/images/start.png")
						    			    img.data("value", 1)
						    			    $('#'+that.id).html(that.open())
						    			}
					    		    }
								}else {
									alert(msg.message);
								}
								$('.password-panel').hide();
							})														    			
						})	    			
		    		})
		    	    li.append(img)
		    	}else {
		    		if(point.value) {
		    			let span = $(`<span class="value">${that.floatFormat(point.value)}</span>`)
				    	let small = $(`<small class="unit">${that.undefinedToString(point.unit)}</small>`)
				    	li.append(span).append(small);
		    		}		    		
		    	}
		    	ul.append(li);
		    });
		    vpc.append(ul);
			$('.view-panel').append(vpt).append(vpc);  
			$('.view-panel').css({width:350});
			$('.view-panel').show();	
		}
	}
	
	floatFormat(value) {
		if(value) {
			return parseFloat(value)
		}
		return "";
	}
	
	undefinedToString(value) {
		return value==undefined?'':value;
	}
	
	lengthFormat(text,length) {
		return text.length>length?text.substr(0,length)+"...":text
	}
}

export default Spirit;