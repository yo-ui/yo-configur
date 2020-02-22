import Paw from '@/core/Paw.js' 
import Move from '@/core/Move.js' 
import SpiritFactory from '@/core/SpiritFactory.js' 
import WaterPipe from '@/core/WaterPipe.js' 
import Project from '@/components/Project.js' 
import BindDevice from '@/components/BindDevice.js'

class Stage {

	constructor(option) {
		this.option = option;
		this.toolType = 1;//工具类型
		this.move = new Move(this);//全局移动	
		this.paw = new Paw(0,0,0,0,this);//舞台移动				
		this.file = {id:0,name:'',type:1}
		this.canva = {id:0,name:'',type:1}						
		this.library();	
		this.keydown();
		this.toolbar();
		this.selectedList = []
		this.isMove = false;
		this.ratio = 1;
		
		$('#property_tabs a').each(function() {
			$(this).on('click',function() {
				$(this).parent().addClass('active');
				$(this).parent().siblings().each(function() {
					$(this).removeClass('active')
				})
				let value = $(this).data('value');
				if(value==1) {
					$('#tab_1').show();
					$('#tab_2').hide();
				}else {
					$('#tab_2').show();
					$('#tab_1').hide();
				}				
			})
		})
		
		let back = $(`<span style="cursor: pointer;">
		           <img src="static/images/angle-left.png" width="11"/>&nbsp;返回</span>`);
		$('#configur_menu').append(back);           
		back.on('click',function() {
			window.history.back(-1); 
		})		
		this.canvas();
	}
	
	keydown() {
		let that = this;
		$(document).keydown(function(e) {  
	        if(e.ctrlKey&&e.keyCode==67) {//ctrl+c 复制	         	        	
	        	that.clone();
	        	e.preventDefault();
	        }else if(e.ctrlKey&&e.keyCode==68) {//ctrl+d 删除
	        	that.remove();
	        	e.preventDefault();
	        }else if(e.ctrlKey&&e.keyCode==83) {//ctrl+s 保存
	        	that.save();
	        	e.preventDefault();
	        }else if(e.ctrlKey&&e.keyCode==90) {//ctrl+z 回撤
	        	that.layDown(); 
	        	that.lastStep();
	        	e.preventDefault();
	        }else if(e.keyCode==37) {//方向键 左
	        	that.paw.left();
	        	e.preventDefault();
	        }else if(e.keyCode==38) {//方向键 上
	        	that.paw.up();
	        	e.preventDefault();
	        }else if(e.keyCode==39) {//方向键 右	        	
	        	that.paw.right();
	        	e.preventDefault();
	        }else if(e.keyCode==40) {//方向键 下	        	        	
	        	that.paw.down();
	        	e.preventDefault();
	        }else if(e.ctrlKey&&e.keyCode==49) {     	        	
	        	that.alignLeft();
	        	e.preventDefault();
	        }else if(e.ctrlKey&&e.keyCode==50) {      	        	
	        	that.alignRight();
	        	e.preventDefault();
	        }else if(e.ctrlKey&&e.keyCode==51) {     	        	
	        	that.alignUp();
	        	e.preventDefault();
	        }else if(e.ctrlKey&&e.keyCode==52) {      	        	
	        	that.alignDown();
	        	e.preventDefault();
	        }	
	    })
	}
	
	handleRecord(record) {
		if(this.handles.length<10) {
			this.handles.unshift(record);
		}else {
			this.handles.pop();
			this.handles.unshift(record);
		}	
	}
	
    lastStep() {    	
    	let that = this;
    	if(this.handles.length>0) {
    		let handle = this.handles.shift();	    	
	    	if(handle.type=="add") { 
	    		$('#'+handle.data.id).remove();
	    	}else if(handle.type=="move") {
	    		$('#'+that.configurId).css({top:handle.data.top,left:handle.data.left});
	    		let property = that.getProperty();
	    		property.x = handle.data.left;
	    		property.y = handle.data.top;
	    		that.setProperty(property);		    		
	    	}else if(handle.type=="remove") {
	    		let className = handle.data.className;
	    		let x = handle.data.x;
	    		let y = handle.data.y;
	    		let width = handle.data.width;
	    		let height = handle.data.height;
	    		let spirit = that.create(className,x,y,width,height);
	    		that.configurId = spirit.id;
				that.capacity.push(spirit)
				that.configurList(spirit);	
	    	}
    	}   	
    }
    
	createStage(width,height,background) {	
		let that = this;
		this.handles = [];
		this.width = width;
		this.height = height;
		this.x = 0;
		this.y = 0;
		this.background = background;
		this.isCreate = false;
		this.dw = 50;
		this.dh = 50;
		let element = $('<div id="configur_stage"></div>').css({
			position: 'relative',
			width: width+'px', 
			height: height+'px',
			transform: 'scale(1)',
			'transform-origin': '0 0'
		});
				
		let resizePanel = $('<div class="resize-panel"><div class="resize-panel-content"></div></div>');
		element.append(resizePanel);	
		let vLine = $('<div id="v_subline">&nbsp;</div>')
		vLine.css({
			display: 'none',
			position: 'absolute',
			'border-left': '1px dashed red',
			width: '1px',
			height: that.height+'px',
			'z-index': '1',
		})
		element.append(vLine);		
	    let hLine = $('<div id="h_subline">&nbsp;</div>')
		hLine.css({
			display: 'none',
			position: 'absolute',
			'border-top': '1px dashed red',
			width: that.width+'px',
			height: '1px',
			'z-index': '1',
		})		
		element.append(hLine);		
		let rectangle = $('<div id="selected_subline">&nbsp;</div>')
		rectangle.css({
			display: 'none',
			position: 'absolute',
			'border': '1px dashed #12a3ff',
			width: '0px',
			height: '0px',
			'z-index': '1',
		})
		element.append(rectangle);
		element.on('mouseover',function(e) {			
			if(that.isCreate) {
				that.isCreate = false;	
				if(that.toolType==1&&that.className) {
					let offsetLeft = $('#configur_stage').offset().left;
					let offsetTop = $('#configur_stage').offset().top;
					let left = e.pageX-offsetLeft;
					let top = e.pageY-offsetTop;					
					let spirit = that.create(that.className,left,top,that.dw,that.dh);
					that.capacity.push(spirit)
					that.configurList(spirit);	
					let data = {id:spirit.id,left:spirit.x,top:spirit.y}
					let record = {type:'add',name:'添加',data:data}					
					that.handleRecord(record);
				}				
			}				
		})
		
		element.on('click',function(e) {
			if(that.before&&that.property) {
	    		if(that.before.x!=that.property.x||
		    		that.before.y!=that.property.y||
		    		that.before.width!=that.property.width||
		    		that.before.height!=that.property.height) {   
				        let left = that.before.x;
				        let top = that.before.y;
				        let data = {left:left,top:top}
				        let record = {type:'move',name:'移动',data:data}		
				        that.handleRecord(record);
				        that.before = "";
		    	}
			}
			that.layDown();	
			that.property = "";			
			$('#configur_property').html('');				
			$('#configur_list li').each(function() {
				$(this).removeClass('active');			
			})			
			that.renderer();
			$('#v_subline').hide();
			$('#h_subline').hide();
			$('#selected_subline').hide();	
			that.zoom(element);
		});		
		
		that.rectangle = {};
		element.on('mousedown',function(e) {
			if(that.toolType==1) {
				that.capacity.forEach(function(data) {
					$('#'+data.id).css({border:'1px solid transparent'})
				});
				that.selectedList = [];
				$('#selected_subline').css({width:0,height:0,border:'1px dashed transparent'});
				that.rectangle.selected = true;
				that.rectangle.x = e.pageX;
				that.rectangle.y = e.pageY;
				
				let scrollLeft = $('#root').scrollLeft();
				let scrollTop = $('#root').scrollTop();
				let offsetLeft = $('#configur_stage').offset().left;
				let offsetTop = $('#configur_stage').offset().top;
				let left = e.pageX-offsetLeft+scrollLeft;
				let top = e.pageY-offsetTop+scrollTop;
				$('#selected_subline').css({left:left,top:top});
			}			
		});
		
		element.on('mousemove',function(e) {			
			if(!that.isMove&&that.rectangle.selected) {		
				if(e.pageY<that.rectangle.y) {
					let scrollTop = $('#root').scrollTop();
					let offsetTop = $('#configur_stage').offset().top;
					let top = e.pageY-offsetTop+scrollTop;
					$('#selected_subline').css({top:top})
					if(e.pageX<that.rectangle.x) {
						let width = that.rectangle.x-e.pageX;
						let height = that.rectangle.y-e.pageY;	
						let scrollLeft = $('#root').scrollLeft();
						let offsetLeft = $('#configur_stage').offset().left;
						let left = e.pageX-offsetLeft+scrollLeft;
						$('#selected_subline').css({left:left})
						$('#selected_subline').css({width: width,height: height,border:'1px dashed #12a3ff'})
					}else {
						let width = e.pageX-that.rectangle.x;
						let height = that.rectangle.y-e.pageY;	
						$('#selected_subline').css({width: width,height: height,border:'1px dashed #12a3ff'})
					}				    				    		    				    
				}else {
					if(e.pageX<that.rectangle.x) {
						let width = that.rectangle.x-e.pageX;
						let height = e.pageY-that.rectangle.y;	
					    let scrollLeft = $('#root').scrollLeft();
					    let offsetLeft = $('#configur_stage').offset().left;
						let left = e.pageX-offsetLeft+scrollLeft;
						$('#selected_subline').css({left:left})
					    $('#selected_subline').css({width: width,height: height,border:'1px dashed #12a3ff'})
					}else {
						let width = e.pageX-that.rectangle.x;
					    let height = e.pageY-that.rectangle.y;
					    $('#selected_subline').css({width: width,height: height,border:'1px dashed #12a3ff'})
					}					
				}
				if($('#selected_subline').width()>10) {
					$('#selected_subline').show();
				}
			}
		});
		
		element.on('mouseup',function() {
			that.rectangle.selected = false;
			let x = $('#selected_subline').position().left;
			let y = $('#selected_subline').position().top;
			let width = $('#selected_subline').width();
			let height = $('#selected_subline').height();
			let dataList = []
			that.capacity.forEach(function(data) {
				let d1 = {x:x,y:y,width:width,height:height}
				let d2 = {x:data.x,y:data.y,width:data.width,height:data.height};
				if(data.isMove&&that.overlap(d1,d2)) {
					dataList.push(data);
				}
			});
			dataList.forEach(function(data){
				$('#'+data.id).css({border:'1px solid #12a3ff'})
			});
			that.selectedList = dataList;
		});				
		this.element = element;		
		this.waterPipe = new WaterPipe(this); 					
		this.capacity = [];		
		$('.menu-panel').on('mouseleave',function() { 
			$('.menu-panel').hide();
		});	
		
		$('#root').append(this.element);	
		if(background) {
			element.css({
			'background-image': 'url('+background.url+')',
		    'background-color': background.color});
			that.pattern(background.pattern);
		}
		this.toolKit();
	}	
	
	zoom(element) {
		let that = this;
		if(that.toolType==3) {
			let transform = element.css('transform');
			let scale = transform.substring(7,transform.indexOf(','));
			that.ratio = Number(scale)*2;

			element.css('transform','scale('+that.ratio+")")
			that.location();
		}else if(that.toolType==4) {
			let transform = element.css('transform');
			let scale = transform.substring(7,transform.indexOf(','));
			that.ratio = Number(scale)/2;
			element.css('transform','scale('+that.ratio+")")
			that.location();
		}
	}
	
	overlap(d1,d2) {
		let left = d1.x<d2.x&&d1.x+d1.width<d2.x;
		let up = d1.y<d2.y&&d1.y+d1.height<d2.y;
		let right = d1.x>d2.x+d2.width;
		let down = d2.y+d2.height<d1.y;
		return !(left||up||right||down)
	}
	
	renderer() {		
		let that = this;
		$('#configur_property').html(''); 		
		let html = `<div class="configur-property-title"><img src="static/images/angle-right.png" width="9"/>&nbsp;画布</div>
		            <div>
			            <div class="property-group">
				            <span class="property-text">W：</span>
				            <span class="property-value">${this.width}</span>
			            </div>
			            <div class="property-group">					     						 		
				            <span class="property-text">H：</span>
				            <span class="property-value">${this.height}</span>
			            </div>
		            </div>
		            <div class="configur-property-title"><img src="static/images/angle-right.png" width="9"/>&nbsp;背景</div>
		            <div>
			            <div class="property-group">	              
						  <span>填充颜色：</span>
						  <input type="text" name="color" class="input_cxcolor" style="padding:0;width:18px"/>
			            </div>
			            <div class="property-group">	
			              <span>填充图片：</span>
						  <div class="upload">
				              <span>选择图片</span>
				              <form id="uploadBg">
				                <input type="file" name="bg"/>
				              </form>
					      </div>
					      <span class="reset">重置</span>
			            </div>
			            <div class="property-group">	              
						  <span>填充模式：</span>
						  <select name="pattern">
						    <option value="1">适用于画布</option>
						    <option value="2">充满画布</option>
						    <option value="3">拉伸以充满画布</option>
						  </select>
			            </div>
		            </div>`;
		$('#configur_property').html(html);		
		$('#configur_property').find('[name=color]').cxColor({
		    color:that.background.color
		});
		$('#configur_property').find('[name=color]').on('change',function() {
			let color = $(this).val();
			$('#configur_stage').css({'background-color': color});
			that.background.color = color;	
		})
		$('#configur_property').find('[name=bg]').on('change',function() {
			let form = $("#uploadBg")[0]
            let file = $(this).get(0).files[0]           
            that.option.upload(form,file,function(msg) {           	
            	let url = "/upload/background/"+JSON.parse(msg).fileName;          	
				that.background.url = url;
				$('#configur_stage').css({'background-image': 'url('+url+')'});
				let pattern = $('#configur_property').find('[name=pattern]').val();
            	that.pattern(pattern);
            })
		})	

		$('#configur_property').find('[name=pattern]').val(that.background.pattern);	
		$('#configur_property').find('[name=pattern]').on('change',function() {
			that.pattern($(this).val());
			that.background.pattern = $(this).val();
		})
		
		$('#configur_property .reset').on('click',function() {
			$('#configur_stage').css({'background-image': 'none'})
			that.background = {url:'',pattern:1,color: '#fff'};
		})
		
		$('#configur_property .configur-property-title').each(function() {
			$(this).on('click',function() {
				$(this).next().toggle();
				if($(this).next().is(':hidden')) {
					$(this).find('img').attr('src', "static/images/angle-down.png");
					$(this).css({'background-color':'#fff'})
				}else {
					$(this).find('img').attr('src', "static/images/angle-right.png");
					$(this).css({'background-color':'#DBDEE3'})
				}
			});
		})
	}
	
	pattern(pattern) {
		if(pattern=="1") {
			$('#configur_stage').css({
			'background-repeat': 'no-repeat',
			'background-size': 'auto',
		    'background-position': 'center'});				
		}else if(pattern=="2") {
			$('#configur_stage').css({
			'background-repeat': 'no-repeat',
			'background-size': '100% 100%',
		    'background-position': 'center'});				
		}else if(pattern=="3") {
			$('#configur_stage').css({
			'background-size': 'cover',
			'background-position': 'center',
			'background-repeat': 'no-repeat'});
		}	
	}

    //工具栏
	toolbar() {
		let that = this;
		let barList = [
			{type:1,name:'撤销',url:'static/images/tool/recall.png'},
			{type:2,name:'保存',url:'static/images/tool/save.png'},
			{type:3,name:'复制',url:'static/images/tool/copy.png'},
			{type:4,name:'删除',url:'static/images/tool/delete.png'},
			{type:5,name:'右对齐',url:'static/images/tool/right.png'},
			{type:6,name:'左对齐',url:'static/images/tool/left.png'},
			{type:7,name:'上对齐',url:'static/images/tool/up.png'},
			{type:8,name:'下对齐',url:'static/images/tool/down.png'}]
		barList.forEach(function(bar) {
			let li = $(`<li><div><img src="${bar.url}"/><p>${bar.name}</p></div></li>`)
			li.data('type',bar.type);
			li.on('click',function() {
				let type = $(this).data('type');
				that.shortcutsKey(type);
			});
			$('.configur-center-header ul').append(li);
		});			
		let oper = $(`<div class="configur-oper">
				  		<img src="static/images/tool/device.png" width="18"/>
				  		<p>运行</p>
				  	</div>`);
		oper.on('click',function() {
			that.option.preview(function() {})
		});
		$('.configur-center-header').append(oper)
	}
	
	shortcutsKey(type) {
		let that = this;
		switch(type) {
		    case 1:that.lastStep();break;
		    case 2:that.save();break;
		    case 3:that.clone();break;
		    case 4:that.remove();break;
		    case 5:that.alignRight();break;
		    case 6:that.alignLeft();break;
		    case 7:that.alignUp();break;
		    case 8:that.alignDown();break;
		}
	}
	
	alignLeft() {
		let that = this;
		let x = 0;
		this.selectedList.forEach(function(data,index) {
			if(index==0) {
				x = data.x;
			}else {
				if(data.x<x)x = data.x;
			}
		});		
		this.selectedList.forEach(function(data) {
			$("#"+data.id).css({left:x})
			that.capacity.forEach(function(property) {
				if(data.id == property.id) {
					property.x = x;
				}				
			})
		});
	}
	
	alignRight() {
		let that = this;
		let x = 0;
		this.selectedList.forEach(function(data,index) {
			if(index==0) {
				x = data.x+data.width;
			}else {
				if(data.x+data.width>x)x = data.x+data.width;
			}
		});		
		this.selectedList.forEach(function(data) {
			let value = x-(data.x+data.width)
			$("#"+data.id).css({left:data.x+value})
			that.capacity.forEach(function(property) {
				if(data.id == property.id) {
					property.x = data.x+value;
				}				
			})
		});
	}
	
	alignUp() {
		let that = this;
		let y = 0;
		this.selectedList.forEach(function(data,index) {
			if(index==0) {
				y = data.y;
			}else {
				if(data.y<y)y = data.y;
			}
		});		
		this.selectedList.forEach(function(data) {
			$("#"+data.id).css({top:y})
			that.capacity.forEach(function(property) {
				if(data.id == property.id) {
					property.y = y;
				}				
			})
		});
	}
	
	alignDown() {
		let that = this;
		let y = 0;
		this.selectedList.forEach(function(data,index) {
			if(index==0) {
				y = data.y+data.height; 
			}else {
				if(data.y+data.height>y)y = data.y+data.height;
			}
		});		
		this.selectedList.forEach(function(data) {
			let value = y-(data.y+data.height)
			$("#"+data.id).css({top:data.y+value})
			that.capacity.forEach(function(property) {
				if(data.id == property.id) { 
					property.y = data.y+value;
				}				
			})
		});
	}

	canvas() {
		let that = this;
		this.option.canvas(function(canvas) {
			that.canvas.id = canvas.id;
			if(!canvas.data) {
				canvas.data = JSON.stringify({background:{url:'',pattern:1,color: '#fff'},capacity:[]})
			}
			that.analysis(canvas.width,canvas.height,JSON.parse(canvas.data));
		})	
	}
	
	//工具初始化
	toolKit() {
		let that = this;
		let tools = [{type:1,title:'拖拽',url:'static/images/move.png',width: 24},
					 {type:2,title:'水管',url:'static/images/water.png',width: 60},
					 {type:3,title:'放大',url:'static/images/magnify.png',width: 24},
					 {type:4,title:'缩小',url:'static/images/shrink.png',width: 24}];
		let toolPanel = $('<div class="tool-panel"></div>');             
		tools.forEach(function(tool,index) {
			let img = $('<img/>')
			img.attr("src", tool.url);
			img.data('type', tool.type);
			img.attr("title", tool.title);
			img.css({width: tool.width});
			img.on('click',function() {
				that.layDown();
				that.capacity.forEach(function(data) {
					$('#'+data.id).css({border:'1px solid transparent'})
				});
				$('#selected_subline').hide();
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
					that.toolType = 0;
					that.layDown();
				}else {
					$(this).addClass('active');
					that.toolType = $(this).data('type');
				}				
				$(this).siblings().each(function() {
					$(this).removeClass('active');
				});
				
				if(that.waterPipe) {
					that.waterPipe.setDraw(that.toolType==2);		
				}
				if(that.toolType!=3&&that.toolType!=4) {
					that.ratio = 1;
					$('#configur_stage').css('transform','scale(1)')
					that.location();
				}
			});			
			if(index==0) {
			    img.addClass('active');
			    that.toolType = tool.type;
			}				
			toolPanel.append(img)
		});
		$('.configur-center-header').append(toolPanel);
	}
	//组件库初始化
	library() {	
		let that = this;		
		that.move.drag($('.global-panel'));
		this.library = [{
			name:'基础',type:1,url:'static/images/common/common.png',
				subList:[				
				    {className:'TextBox',title:'动态数据',url:'static/images/configur/dataing.png',width:100,height:30},
				    {className:'Text',title:'静态文本',url:'static/images/configur/text.png',width:100,height:30},
				    {className:'Images',title:'图片',url:'static/images/configur/img.png',width:50,height:50},
				    {className:'LineChart',title:'折线图',url:'static/images/configur/line.jpg',width:400,height:200}]},
		    {name:'配电',type:1,url:'static/images/common/pdxt.png',
				subList:[
					{className:'ElectricityMeter',title:'单项导轨电表',url:'static/images/configur/dxdgdb.png',width:50,height:50},
					{className:'Sxdgdb',title:'三项导轨电表',url:'static/images/configur/sxdgdb.png',width:50,height:50},
					{className:'ElectricBox',title:'断路器',url:'static/images/configur/dlq.png',width:50,height:50},
					{className:'Bgsdb',title:'壁挂式电表',url:'static/images/configur/bgsdb.png',width:50,height:50},
					{className:'Jddz',title:'接地刀闸',url:'static/images/configur/jddz.png',width:50,height:50},
					{className:'Dldrq',title:'电力电容器',url:'static/images/configur/dldrq.png',width:50,height:50},
					{className:'Byq',title:'变压器',url:'static/images/configur/byq.png',width:50,height:50}]},
		    {name:'给水',type:1,url:'static/images/common/jsxt.png',
				subList:[
					{className:'Lyssb',title:'螺翼式水表',url:'static/images/configur/lyssb.png',width:50,height:50},
					{className:'Sbfkg',title:'阀控水表',url:'static/images/configur/sbfk.png',width:50,height:50},
					{className:'Xyssb',title:'旋翼式水表',url:'static/images/configur/xyssb.png',width:50,height:50},
					{className:'Csbllj',title:'超时波流量计',url:'static/images/configur/csbllj.png',width:50,height:50},
					{className:'Ckssb',title:'插卡式水表',url:'static/images/configur/ckssb.png',width:50,height:50},
				    {className:'LeftWater',title:'水管左',url:'static/images/configur/v-left.png',width:20,height:20},
				    {className:'RightWater',title:'水管右',url:'static/images/configur/v-right.png',width:20,height:20},
				    {className:'UpWater',title:'水管上',url:'static/images/configur/h-top.png',width:20,height:20},
				    {className:'DownWater',title:'水管下',url:'static/images/configur/h-bottom.png',width:20,height:20},			    
				    {className:'LUWater',title:'水管（左上）',url:'static/images/configur/t-1.png',width:20,height:20},
				    {className:'RUWater',title:'水管（右上）',url:'static/images/configur/t-2.png',width:20,height:20},
				    {className:'DRWater',title:'水管（右下）',url:'static/images/configur/t-3.png',width:20,height:20},
				    {className:'LDWater',title:'水管（左下）',url:'static/images/configur/t-4.png',width:20,height:20},
					{className:'LevelWater',title:'水管（水平）',url:'static/images/configur/h.png',width:50,height:50},
					{className:'VerticalWater',title:'水管（垂直）',url:'static/images/configur/v.png',width:50,height:50}]},
			{name:'照明',type:1,url:'static/images/common/zmxt.png',
				subList:[
					{className:'Iokzmk',title:'I/O控制模块',url:'static/images/configur/iokzmk.png',width:50,height:50},
					{className:'Kg',title:'开关',url:'static/images/configur/kg.png',width:50,height:50},
					{className:'Dengg',title:'灯管',url:'static/images/configur/dengg.png',width:50,height:50}, 
					{className:'Dengp',title:'灯炮',url:'static/images/configur/dengp.png',width:50,height:50}]},
		    {name:'空调',type:1,url:'static/images/common/ktxt.png',
				subList:[
					{className:'Ztsrlb',title:'整体式热量表',url:'static/images/configur/ztsrlb.png',width:50,height:50},
					{className:'Zhsrlb',title:'组合式热量表',url:'static/images/configur/zhsrlb.png',width:50,height:50},
					{className:'Gskt',title:'挂式空调',url:'static/images/configur/gskt.png',width:50,height:50},
					{className:'Lskt',title:'立式空调',url:'static/images/configur/lskt.png',width:70,height:160},
					{className:'Sx',title:'水箱',url:'static/images/configur/sx.png',width:50,height:50},
					{className:'Flrb',title:'风冷热器',url:'static/images/configur/flrb.png',width:50,height:50},
					{className:'Bshrq',title:'板式换热器',url:'static/images/configur/bshrq.png',width:50,height:50},
					{className:'Wssb',title:'卧式水泵',url:'static/images/configur/wssb.png',width:50,height:50},
					{className:'Lssb',title:'立式水泵',url:'static/images/configur/lssb.png',width:50,height:50}]},
			{name:'安防',type:1,url:'static/images/common/common.png',
				subList:[
					{className:'Ywbjcgq',title:'烟雾报警传感器',url:'static/images/configur/ywbjcgq.png',width:50,height:50},
					{className:'Hwrtgyq',title:'红外人体感应器',url:'static/images/configur/hwrtgyq.png',width:50,height:50},
					{className:'Sxta',title:'摄像头',url:'static/images/configur/sxta.png',width:50,height:50},
					{className:'Mcbjq',title:'门磁报警器',url:'static/images/configur/mcbjq.png',width:50,height:50},
					{className:'Lsbjq',title:'漏水报警器',url:'static/images/configur/lsbjq.png',width:50,height:50}]},
			{name:'光伏',type:1,url:'static/images/common/common.png',
				subList:[
					{className:'Gfdcb',title:'光伏电池板',url:'static/images/configur/gfdcb.png',width:50,height:50},
					{className:'Gfnbq',title:'光伏逆变器',url:'static/images/configur/gfnbq.png',width:50,height:50}]},
			{name:'环境',type:1,url:'static/images/common/hjxt.png',
				subList:[
					{className:'Lsscj',title:'拉绳式测距',url:'static/images/configur/lsscj.png',width:50,height:50},
					{className:'Csbcj',title:'超声波测距',url:'static/images/configur/csbcj.png',width:50,height:50},
					{className:'Hjjccgqa',title:'带液晶屏的环境监测传感器',url:'static/images/configur/hjjccgqa.png',width:50,height:50},
					{className:'Hjjccgqb',title:'无液晶屏的环境监测传感器',url:'static/images/configur/hjjccgqb.png',width:50,height:50},
					{className:'Xxqxz',title:'小型气象站',url:'static/images/configur/xxqxz.png',width:50,height:50}]},
			]
		this.library.forEach(function(data,index) {
			let li = $(`<li ><div><img src="${data.url}"/></div>${data.name}</li>`);
			li.data("index",index);
			if(index==0) {
				li.addClass('active');
				that.createLib(0);
			}
			li.on('click',function() {
				let index = $(this).data('index');
				that.createLib(index);
				$(this).addClass('active');
				$(this).siblings().each(function() {
					$(this).removeClass('active');
				})
			})
			$('#configur_library ul').append(li);
		})		
		
		$('#configur_library').children('.configur-item').each(function() {
			$(this).find('span').on('click',function() {
				$(this).next().toggle()
			})
		})
	}
	
	createLib(index) {
		let that = this;
		$('.configur-left-content').html('');
		let dataList = this.library[index].subList;
		dataList.forEach(function(sub,index) {
			let img = $('<img/>')					
			img.data("className", sub.className);
			img.data("width", sub.width);
			img.data("height", sub.height);
			img.attr("title", sub.title);				
			img.on('mousedown', function(e) {
				if(that.toolType==1) {
					that.move.move = true;
					$('.global-panel').html('');
					that.dw = $(this).data("width");
					that.dh = $(this).data("height");
					let img = $('<img/>')
					img.attr("src", $(this).attr("src")); 
					img.css({left:0,top:0,width:$(this).width(),height:$(this).height()});				
					that.move.register(img);							
					let y = e.pageY; 
			    	let x = e.pageX;
			    	
			    	$('.global-panel').css('top',y-50); 
			        $('.global-panel').css('left',x-5);
			    	$('.global-panel').trigger('mousedown',{x:x,y:y});
			    	that.className = $(this).data('className');
			    	e.preventDefault();				
		        }
			});
			img.attr("src", sub.url);
			let div = $(`<div></div>`);
			div.append(img);
			div.append(`<p>${sub.title}</p>`);
		    $('.configur-left-content').append(div);
		});
	}
	
	//鼠标放下
	layDown() {
		let that = this;
		let top = String($('.resize-panel').css('top')).replace('px', '');
    	let left = String($('.resize-panel').css('left')).replace('px', '');
    	let el = $('.resize-panel').find('.resize-panel-content').children('div');
    	let id = el.attr('id'); 
    	if(id) {
    		that.configurId = id;
	    	el.css({left:Number(left)+2,top:Number(top)+2}); 
	    	this.addEvent(el);
	    	this.element.append(el);
	    	$('.resize-panel').find('.resize-panel-content').html('');
	    	$('.resize-panel').hide();
    	}	   	
    	that.isMove = false;
	}
	//克隆
	clone() {
		if(!$('.resize-panel').is(":hidden")) {
			this.layDown();
			this.className = this.property.className;
			let x = this.property.x+50;
			let y = this.property.y+50;
			let width = this.property.width;
			let height = this.property.height;
			let spirit = this.create(this.className,x,y,width,height);
			spirit.bindDevice = this.property.bindDevice;
			spirit.init(this.property.config);
			this.capacity.push(spirit)
			this.configurList(spirit);	
			spirit.getEl().trigger('click');
			let data = {id:spirit.id,left:spirit.x,top:spirit.y}
			let record = {type:'add',name:'添加',data:data}				
			this.handleRecord(record);
		}		
	}
	//删除
	remove() {
		let that = this;		
		if(that.selectedList.length>0) {
			let set = new Set()
			that.selectedList.forEach(function(selected) {
				set.add(selected.id);	
				$('#'+selected.id).remove();
		    });			
			that.capacity = Array.from(that.capacity.filter(v => !set.has(v.id)));
		}else {
			$('.resize-panel').find('.resize-panel-content').html('');
		    $('.resize-panel').hide();		
			let dataList = [];
			that.capacity.forEach(function(data) {
				if(data.id!=that.property.id) {
					dataList.push(data);
				}
			})
			that.capacity = dataList;
			let className = that.property.className;
			let x = that.property.x;
			let y = that.property.y;
			let width = that.property.width;
			let height = that.property.height;
			let record = {type:'remove',name:'删除',data: {className,x,y,width,height}}				
			that.handleRecord(record);
		}
		$('#configur_list ul').html('');
		that.capacity.forEach(function(spirit) {
			that.configurList(spirit)
		});		
		$('#configur_stage').trigger('click');
	}
	
	//创建
	create(className,x,y,width,height) {
		let that = this;
		this.className = className;		
    	let spirit = SpiritFactory.getInstance(className,x,y,width,height);       	
		spirit.arrangement(this);	
		this.addEvent(spirit.getEl());	
		this.move.move = false;
		return spirit;
    }
	
	configurList(spirit) {
		let that = this;
		let li = $('<li></li>');		
		li.text(spirit.title) 
		li.data('id', spirit.id)		
		if(spirit.isBind) {
		    let img = $('<img src="static/images/bind-0.png"/>')
		    if(spirit.bindDevice) {
		  	    img = $('<img src="static/images/bind-1.png"/>')
		    }
		    img.on('click',function() {
			  	let id = $(this).parent().data('id');
			  	that.configurId = id;
			  	that.property = that.getProperty();
			  	new BindDevice(that,"设备绑定",570,420);
		    });
		    li.append(img);
		}
		li.on('click',function() {
			that.layDown();
			$('#'+$(this).data('id')).trigger('click');
		});
		$('#configur_list ul').append(li);
	}	
	
	addEvent(el) {		
		let that = this;
		el.on('click',function(e) {	
			if(that.toolType==1) {				
				that.configurId = $(this).attr('id');				
				that.property = that.getProperty();
				$(this).css({left:0,top:0});	
				if(that.property.isMove) {									
					that.layDown();				
					that.propertyPanel(); 
					that.paw.resizePanel(that.property);
				    that.paw.bindResizeEvent(); 				    
				    let x = that.property.x;
				    let y = that.property.y;
				    let width = that.property.width;
				    let height = that.property.height;			 
				    that.before = {x,y,width,height}
				    that.paw.site(x,y,width,height);
				    that.paw.register(el);			    					
					that.selectedConfigur();	
					that.isMove = true;
					el.unbind();				
				}else {
					that.setProperty(that.property)	
					that.propertyPanel();
					that.layDown();
					let x = that.property.x;
					let y = that.property.y;
					$('#'+that.property.id).css({left:x,top:y});	
				}								
				e.stopPropagation();
			}
		});			
	}	
	
	selectedConfigur() {
		let that = this;
		$('#configur_list li').each(function() {
			$(this).removeClass('active');
			let id = $(this).data('id');
			if(id==that.property.id) {
				$(this).addClass('active');
			}
		})
	}
	
	propertyPanel() {
		let that = this;
		if(this.property){
			this.property.renderer();
			
			$('#configur_property input').on('change',function() {
				if($(this).attr("name")=="cxColor") {
					that.property.config.color = $(this).val();
					$('#'+that.property.id).find('span').css({color:that.property.config.color});
				}
				that.capacity.forEach(function(property) {
					if(that.property.id==property.id) {
						property.config.color = that.property.config.color;
						property.config.fontSize = that.property.config.fontSize;
					}
				})
			});	
			
			$('#configur_property select').on('change',function() {
				if($(this).attr("name")=="fontSize") {
					that.property.config.fontSize = $(this).val();
					$('#'+that.property.id).find('span').css({'font-size':that.property.config.fontSize+"px"});					
					let text = that.property.config.text;
                    let width = $('#temp_value').css({'font-size':$(this).val()+"px"}).text(text).width()+4;
                    $('#'+that.property.id).find('span').css({width:width});	
                    $('.resize-panel').css({width:width});
				}
				that.capacity.forEach(function(property) {
					if(that.property.id==property.id) {
						property.config.color = that.property.config.color;
						property.config.fontSize = that.property.config.fontSize;
					}
				})
			});	
			
			$('#configur_property .configur-property-title').each(function() {
				$(this).on('click',function() {
					$(this).next().toggle();
					if($(this).next().is(':hidden')) {
						$(this).find('img').attr('src', "static/images/angle-down.png");
						$(this).css({'background-color': '#fff'})
					}else {
						$(this).find('img').attr('src', "static/images/angle-right.png");
						$(this).css({'background-color': '#DBDEE3'})
					}
				});
			})
			
			$('#configur_property').find('[name=cxColor]').cxColor();
			
			$('#configur_property').find('[name=bg]').on('change',function() {
				let form = $("#uploadBg")[0]
	            let file = $(this).get(0).files[0] 
	            that.option.upload(form,file,function(msg) {           	
	            	let url = "/upload/background/"+JSON.parse(msg).fileName;          	
					that.property.config.url = url;
					$('#'+that.property.id).find('img').attr('src',url);
	            })
			})
		}
	}
	
	getProperty() {	
		let that = this;
		let property = {}
		this.capacity.forEach(function(data) {			
			if(data.id==that.configurId) {
				property = data;
			}
		})
		return property;
	}
	
	setProperty(data) {
		let that = this;
		this.capacity.forEach(function(property) {
			if(data.id==property.id) {
				Object.assign(property,data);
			}
		})
		this.property = data;
		this.property.renderer();
		if(this.property.className=="BarChart"||
		   this.property.className=="LineChart"||
		   this.property.className=="PieChart") {
			this.property.refresh();
		}
	}
	
	analysis(width,height,data) {	
		let that = this;
		$('#root').html('');	
		$('#configur_list ul').html('');
		if(data) {					
			this.createStage(width,height,data.background);						
			data.capacity.forEach(function(property) {
				let className = property.className;
				let x = property.x;
				let y = property.y;
				let width = property.width;
				let height = property.height;
				let bindDevice = property.bindDevice;
				let spirit = that.create(className,x,y,width,height);
				spirit.isMove = property.isMove;
				spirit.bindDevice = property.bindDevice;
				spirit.init(property.config);
				that.capacity.push(spirit);
				that.configurList(spirit);
				property.id = spirit.id;
			})					
					
			$('#configur_stage').trigger('click')
			that.location();			
		}	
	}
	
	location() {	
		let rootHeight = Number($('#root').height());
		let height = $('#configur_stage').height()*this.ratio;
		if(height<rootHeight) {
			$('#configur_stage').css({top:(rootHeight-height)/2});
		}else {
			$('#configur_stage').css({top:0});
		}
		let width = $('#configur_stage').width()*this.ratio;
		let rootWidth = $('#root').width();
		if(width<rootWidth) {
			$('#configur_stage').css({left:(rootWidth-width)/2});
		}else {
			$('#configur_stage').css({left:0});
		}
	}
	
	save() {		
		if(this.capacity) {
			let keys = ['className','x','y','width','height','title']
			let capacity = [];		
			this.capacity.forEach(function(data) {
				let spirit = {}
				spirit.className = data.className;
				spirit.x = data.x;
				spirit.y = data.y;
				spirit.width = data.width;
				spirit.height = data.height;
				spirit.isMove = data.isMove;
				spirit.title = data.title;
				spirit.bindDevice = data.bindDevice;
				spirit.config = data.config;
				capacity.push(spirit);
			});		
			let data = {
				width: this.width,
				height: this.height,
			    background: this.background, 
			    capacity: capacity
			}	
			if(this.canvas.id) {		    
				this.option.saveCanvas({
					id: this.canvas.id,
			        data: JSON.stringify(data)
				},function(msg) {
					if(msg=="ok") {
						alert("保存成功");
					}				
				})
			}	
		}
	}
}

export default Stage;
