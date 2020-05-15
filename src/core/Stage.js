import '@/assets/css/index.css'

import Paw from '@/core/Paw.js'
import Move from '@/core/Move.js'
import SpiritFactory from '@/core/SpiritFactory.js'
import BindDevice from '@/components/BindDevice.js'
import Zoom from '@/core/Zoom.js'
import Library from '@/core/Library.js'
import Keydown from '@/core/Keydown.js'
import Align from '@/core/Align.js'
import HandleRecord from '@/core/HandleRecord.js'
import WaterPipe from '@/components/WaterPipe.js'

/**
 * 舞台
 */
class Stage {

	constructor(option) {
		let that = this;
		this.option = option;
		this.toolType = 1;// 1 移动方式 2 拼装方式
		this.selectedType = 1;//选择类型1:默认2:框选
		this.move = new Move(this);//全局移动
		this.paw = new Paw(0,0,0,0,this);//舞台移动
		this.selectedList = []
		this.isMove = false;
		this.library = new Library(this);//组件库
		this.keydown = new Keydown(this);//快捷键
		this.zoom = new Zoom(this);//缩放
		this.align = new Align(this);//对齐
		this.handleRecord = new HandleRecord(this);
		this.bindD = new BindDevice(this);
		this.option.canvas(function(data) {
			$('.bm-layout__header__name').text(data.name);
			that.canvasId = data.id;
			if(!data.data) {
				data.data = JSON.stringify({background:{url:'',color: '#fff'},capacity:[]})
			}
			that.analysis(data.width,data.height,JSON.parse(data.data));
		})
	}

	createStage(width,height,background) {
		let that = this;
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
			'transform-origin': '0 0',
			border: '1px solid #f5f5f5',
			'background-color': background.color
		});
		let board = $('<div id="board">&nbsp;</div>').css({
			position: 'absolute',
			width: width+'px',
			height: height+'px',
			'z-index': 4,
			display: 'none'
		});
		element.append(board);
		let rotate = $('<div id="rotate">&nbsp;</div>').css({
			position: 'absolute',
			width: width+'px',
			height: height+'px',
			'z-index': 10,
			display: 'none'
		});
		element.append(rotate);

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
			border: '1px dashed #12a3ff',
			width: '0px',
			height: '0px',
			'z-index': '1',
		})
		element.append(rectangle);
		let selectedPanel = $(`<div class="bm-selected-panel">&nbsp;</div>`)
		selectedPanel.on('mouseup',function (e) {
			that.rectangle.selected = false;
			e.stopPropagation();
		});
		selectedPanel.on('contextmenu',function (e) {
			let left = $(this).offset().left+e.offsetX+5;
			let top = $(this).offset().top+e.offsetY+5;
			$('.bm-context-menu').css({left: left,top: top});
			$('.bm-context-menu').show();
			that.contextmenu();
			e.preventDefault();
			e.stopPropagation();
		});
		element.append(selectedPanel);
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
					let data = {id:spirit.id,left:spirit.x,top:spirit.y}
					let record = {type:'add',name:'添加',data:data}
					that.handleRecord.add(record);
				}
			}
		})

		element.on('click',function(e) {
			that.layDown();
			that.property = "";
			that.renderer();
			$('#v_subline').hide();
			$('#h_subline').hide();
			$('#selected_subline').hide();
			$('.bm-context-menu').hide();
			$('#configur_list').html('');
			e.stopPropagation();
		});

		element.on('contextmenu',function(e) {
			if(that.toolType==1) {
				$(this).trigger('click');
				let left = $(this).offset().left+e.offsetX+5;
				let top = $(this).offset().top+e.offsetY+5;
				$('.bm-context-menu').css({left: left,top: top});
				$('.bm-context-menu').show();
				that.contextmenu();
			}
			e.preventDefault();
			e.stopPropagation();
		});

		that.rectangle = {};
		element.on('mousedown',function(e) {
			if(that.toolType==1) {
				$('.bm-context-menu').hide();
				that.capacity.forEach(function(data) {
					$('#'+data.id).css({border:'1px solid transparent'})
				});
				if(that.selectedType==1) {
					that.selectedList = [];
				}
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

		element.on('mouseup',function(e) {
			that.selectedType = 1;
			$('.bm-selected-panel').hide();
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
			that.selectedList = dataList;
			if(that.selectedList.length>1) {
				that.selectedType = 2;
				let data = that.selectedPanel(that.selectedList);
				$('.bm-selected-panel').show();
				$('.bm-selected-panel').css({left: data.x,top: data.y,width: data.width,height: data.height})
			}
		});

		this.element = element;
		this.capacity = [];
		$('.bm-toolbar_zoom').on('mouseleave',function() {
			$('.bm-toolbar_zoom').hide();
		});
		$('#root').append(this.element);
    this.waterPipe = new WaterPipe(this);
	}

	selectedPanel(dataList) {
		let data = {x:0,y:0,x2:0,y2:0}
		dataList.forEach(function (selected,index) {
           let x2 = selected.x+selected.width;
           let y2 = selected.y+selected.height;
           if(data.x==0&&data.y==0) {
           	   data.x = selected.x;
           	   data.y = selected.y;
           	   data.x2 = x2;
           	   data.y2 = y2;
		   }
           if(selected.x<data.x) {
           	   data.x = selected.x
		   }
           if(selected.y<data.y) {
           	   data.y = selected.y
           }
           if(x2>data.x2) {
           	   data.x2 = x2
           }
           if(y2>data.y2) {
			   data.y2 = y2
		   }
		})
		return {x:data.x,y:data.y,width:data.x2-data.x,height:data.y2-data.y+2}
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
		let html = `<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>功能选择</div>
							<div class="bm-img handle">
							    <div><img src="static/images/move.png" width="30" title="移动组件"></div>
							    <div><img src="static/images/water.png" width="30" title="拼装水管"></div>						    				    
                            </div>
						</div>					
					</div>
                    <div class="bm-tree">画布</div>
					<div class="bm-cell no-hover" style="text-align: left">
						<div class="bm-cell__title">
							<div class="bm-kv">
								<span class="bm-kv__text">W：</span>
								<span class="bm-kv__value">${this.width}</span>
							</div> 
						</div>								
						<div class="bm-cell__value">
							<div class="bm-kv">
								<span class="bm-kv__text">H：</span>
								<span class="bm-kv__value">${this.height}</span>
							</div> 
						</div>				
					</div>
		            <div class="bm-tree">背景</div>
					<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>背景颜色</div>
							 <div class="bm-color-box"></div>
						</div>
					</div>
					<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>网格</div>
							<div class="bm-checkbox">
								<input type='checkbox' id='subline'>
								<label for='subline'></label>
							</div>
						</div>
					</div>
                    <div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>缩放</div>
							<div class="bm-zoom">
							    <img src="static/images/magnify.png"/>							    
							    <img src="static/images/shrink.png"/>
							    <span></span>
                            </div>
						</div>
					</div>
                    `;
		$('#configur_property').html(html);
		that.zoom.init();
		Tooltip.init();
		$('.colpick').remove()
		$('.bm-color-box').colpick({
			colorScheme:'dark',
			layout:'rgbhex',
			color:that.background.color,
			onSubmit:function(hsb,hex,rgb,el) {
				$(el).css('background-color', '#'+hex);
				that.background.color = '#'+hex;
				$('#configur_stage').css({'background-color': '#'+hex})
				$(el).colpickHide();
			}
		}).css('background-color', that.background.color);

		$('#subline').on('change',function () {
            if($(this).is(':checked')) {
            	$('#configur_stage').css({'background-image': 'url(static/images/background/background.png)'});
            	that.background.url = "static/images/background/background.png"
			}else {
				$('#configur_stage').css({'background-image': ''});
				that.background.url = ""
			}
		})

		if(that.background.url) {
			$('#configur_stage').css({'background-image': 'url(static/images/background/background.png)'});
			$('#subline').prop("checked",true)
		}else {
			$('#configur_stage').css({'background-image': ''});
			$('#subline').prop("checked",false)
		}

		$('.handle div').each(function (index) {
			$(this).data('index', index);
			if(that.toolType==index+1) {
				$(this).addClass('active')
			}
			$(this).on('click',function () {
				let index = $(this).data('index');
				$(this).addClass('active')
				if(index==0) {
					that.toolType = 1;
					$(this).addClass('active')
          if(that.waterPipe) {
            that.waterPipe.setDraw(false);
            that.removeLinkPoints();
          }
				}else if(index==1) {
					that.toolType = 2;
					$(this).addClass('active')
					if(that.waterPipe) {
						that.waterPipe.setDraw(true);
            that.createLinkPoints();
					}
				}
				$(this).siblings().each(function () {
				  $(this).removeClass('active')
				})
			})
		});
	}

  removeLinkPoints() {
	  let tempList = []
    this.capacity.forEach(function (property) {
      if(property.isAuto) {
        $('#'+property.id).remove();
      }else {
        tempList.push(property)
      }
    })
    this.capacity = tempList;
  }

	createLinkPoints() {
	  this.capacity.forEach(function (property) {
      if(property.isLinkPoint) {
        property.createLinkPoint();
      }
    })
  }

	shortcutsKey(type) {
		let that = this;
		switch(type) {
		    case 1:that.handleRecord.lastStep();break;
		    case 2:that.save();break;
		    case 3:that.clone();break;
		    case 4:that.remove();break;
		    case 5:that.align.left();break;
		    case 6:that.align.right();break;
		    case 7:that.align.up();break;
		    case 8:that.align.down();break;
			case 9:that.align.lock();break;
			case 10:that.align.lock();break;
			case 11:that.remove();break;
		}
	}

	location() {
		let stage = $('#configur_stage');
		let ratioIndex = this.zoom.ratioIndex;
		let rootHeight = Number($('#root').height());
		let height = stage.height()*this.zoom.ratios[ratioIndex];
		if(height<rootHeight) {
			stage.css({top:(rootHeight-height)/2});
		}else {
			stage.css({top:0});
		}
		let width = stage.width()*this.zoom.ratios[ratioIndex];
		let rootWidth = Number($('#root').width());
		if(width<rootWidth) {
			stage.css({left:(rootWidth-width)/2});
		}else {
			stage.css({left:0});
		}
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
	    	el.css({
				left: Number(left)+2,
				top: Number(top)+2,
				transform: 'rotate('+that.property.rotate+'deg)'
	    	});
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
			let rotate = this.property.rotate;
			let spirit = this.create(this.className,x,y,width,height,rotate);
			spirit.bindDevice = this.property.bindDevice;
			this.capacity.push(spirit);
			spirit.getEl().trigger('click');
			let data = {id:spirit.id,left:spirit.x,top:spirit.y}
			let record = {type:'add',name:'添加',data:data}
			this.handleRecord.add(record);
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
			$('.bm-selected-panel').hide();
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
			that.handleRecord.add(record);
		}
		$('#configur_stage').trigger('click');
	}

	//创建
	create(className,x,y,width,height,rotate=0) {
		let that = this;
		this.className = className;
    	let spirit = SpiritFactory.getInstance(className,x,y,width,height);
    	spirit.rotate = rotate;
		spirit.arrangement(this);
		this.addEvent(spirit.getEl());
		this.move.move = false;
		return spirit;
    }
    //给组件添加事件
    addEvent(el) {
        let that = this;
        el.on('click',function(e) {
            if(that.toolType==1) {
				that.layDown();
				$('#configur_list').html('');
				$('.bm-context-menu').hide();
                that.configurId = $(this).attr('id');
                that.property = that.getProperty();
                $(this).css({left:0,top:0,transform: 'rotate(0deg)'});
                if(that.property.isMove) {
                    that.propertyStyle();
                    that.paw.resizePanel(that.property);
                    that.paw.bindResizeEvent();
                    let x = that.property.x;
                    let y = that.property.y;
                    let width = that.property.width;
                    let height = that.property.height;
                    that.paw.site(x,y,width,height);
                    that.paw.register(el);
                    that.isMove = true;
                    el.unbind();
                }else {
                    that.setProperty(that.property)
                    that.propertyStyle();
                    let x = that.property.x;
                    let y = that.property.y;
                    let rotate = that.property.rotate;
                    $('#'+that.property.id).css({left:x,top:y,transform: 'rotate('+rotate+'deg)'});
                    that.layDown();
                }
                if(that.property.isBind) {
					that.bindD.create();
				}
				e.stopPropagation();
            }
        });

		el.on('contextmenu',function(e) {
			if(that.toolType==1) {
				el.trigger('click');
				let left = e.pageX;
				let top = e.pageY;
				$('.bm-context-menu').css({left: left,top: top});
				$('.bm-context-menu').show();
				that.contextmenu();
			}
			e.preventDefault();
			e.stopPropagation();
		})
    }

    contextmenu() {
		$('.bm-context-menu ul').html('')
		let that = this;
		let menus = []
		if(that.selectedType==1) {
			if(that.property) {
				if(that.property.isMove) {
					menus = [{name:'复制',icon:'fa-copy',type: 3,key:'Ctrl+C'},
						     {name:'删除',icon:'fa-remove',type: 4,key:'Ctrl+D'},
						     {name:'锁定',icon:'fa-lock',type: 9,key:'Ctrl+L'}]
				}else {
					menus = [{name:'解锁',icon:'fa-uplock',type: 10,key:'Ctrl+L'}]
				}
			}else {
				menus = [{name:'保存',icon:'fa-save',type: 2,key:'Ctrl+S'}]
				if(that.handleRecord.handles.length>0) {
					let menu = {name:'回撤',icon:'fa-back',type: 1,key:'Ctrl+Z'};
					menus.push(menu);
				}
			}
		}else {
			menus = [{name:'左对齐',icon:'fa-align-left',type: 5,key:'Ctrl+←'},
				     {name:'右对齐',icon:'fa-align-right',type: 6,key:'Ctrl+→'},
				     {name:'上对齐',icon:'fa-align-up',type: 7,key:'Ctrl+↑'},
				     {name:'下对齐',icon:'fa-align-down',type: 8,key:'Ctrl+↓'},
				     {name:'删除',icon:'fa-remove',type:11,key:'Ctrl+D'}]
		}
		menus.forEach(function (data) {
			let li = $(`<li><span class="text"><i class="fa ${data.icon}"></i>${data.name}</span><span class="value">${data.key}</span></li>`)
			li.data("type",data.type)
			li.on('click',function () {
				let type = $(this).data("type");
				that.shortcutsKey(type);
				$('.bm-context-menu').hide();
			})
			$('.bm-context-menu ul').append(li)
		})
	}

	/**
	 * 属性样式
	 */
	propertyStyle() {
		let that = this;
		if(this.property){
			this.property.renderer();
			Tooltip.init();
			$('#configur_property input').on('change',function() {
				that.capacity.forEach(function(property) {
					if(that.property.id==property.id) {
						property.config.color = that.property.config.color;
						property.config.fontSize = that.property.config.fontSize;
					}
				})
			});

			$('#configur_property select').on('change',function() {
				let name = $(this).attr("name");
				if(name=="textFontSize") {
					that.property.config.fontSize = $(this).val();
					$('#'+that.property.id).find('span').css({'font-size':that.property.config.fontSize+"px"});
					let text = that.property.config.text;
                    let width = $('#temp_value').css({'font-size':$(this).val()+"px"}).text(text).width()+4;
                    $('#'+that.property.id).find('span').css({width:width});
                    $('.resize-panel').css({width:width});
				}else if(name=="textBoxFontSize") {
					that.property.config.fontSize = $(this).val();
					$('#'+that.property.id).find('span').css({'font-size':that.property.config.fontSize+"px"});
				}

				that.capacity.forEach(function(property) {
					if(that.property.id==property.id) {
						property.config.color = that.property.config.color;
						property.config.fontSize = that.property.config.fontSize;
					}
				})
			});

			$('#configur_property .bm-tree').each(function() {
				$(this).on('click',function() {
					$(this).next().toggle();
					if($(this).next().is(':hidden')) {
						$(this).find('img').attr('src', "static/images/angle-down.png");
					}else {
						$(this).find('img').attr('src', "static/images/angle-right.png");
					}
				});
			})

			$('.colpick').remove()
      if(that.property.config) {
        $('.text-color').colpick({
          colorScheme:'dark',
          layout:'rgbhex',
          color:that.property.config.color,
          onSubmit:function(hsb,hex,rgb,el) {
            $(el).css('background-color', '#'+hex);
            that.property.config.color = '#'+hex;
            $('#'+that.property.id).find('span').css({color:'#'+hex});
            $(el).colpickHide();
          }
        }).css('background-color', that.property.config.color);
      }

      if(that.property.config) {
        $('.bg-color').colpick({
          colorScheme:'dark',
          layout:'rgbhex',
          color:that.property.config.backgroundColor,
          onSubmit:function(hsb,hex,rgb,el) {
            $(el).css('background-color', '#'+hex);
            that.property.config.backgroundColor = '#'+hex;
            $('#'+that.property.id).find('span').css({'background-color':'#'+hex});
            $(el).colpickHide();
          }
        }).css('background-color', that.property.config.backgroundColor);
      }

			$('#configur_property').find('[name=bg]').on('change',function() {
				let form = $("#uploadBg")[0]
	            let file = $(this).get(0).files[0]
	            that.option.upload(form,file,function(msg) {
					that.property.config.url = msg;
					$('#'+that.property.id).find('img').attr('src',msg);
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
		if(this.property.className=="LineChart") {
			this.property.chart.resize();
		}
		$('#configur_property').find('.bm-site-x').text(data.x)
		$('#configur_property').find('.bm-site-y').text(data.y)
		$('#configur_property').find('.bm-size-w').text(data.width)
		$('#configur_property').find('.bm-size-h').text(data.height)
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
				let rotate= property.rotate;
				let spirit = that.create(className,x,y,width,height,rotate);

				spirit.isMove = property.isMove;
				spirit.zIndex = property.zIndex;
				spirit.bindDevice = property.bindDevice;
				spirit.config = property.config;
				spirit.refresh();
				that.capacity.push(spirit);
				property.id = spirit.id;
			})
			$('#configur_stage').trigger('click')
			that.location();
		}
	}

	save() {
		let that = this;
		if(this.capacity) {
			let capacity = [];
			this.capacity.forEach(function(data) {
			  if(data.className!="LinkPoint") {
          let spirit = {}
          spirit.className = data.className;
          spirit.x = data.x;
          spirit.y = data.y;
          spirit.width = data.width;
          spirit.height = data.height;
          spirit.rotate = data.rotate;
          spirit.isMove = data.isMove;
          spirit.zIndex = data.zIndex;
          spirit.title = data.title;
          spirit.bindDevice = data.bindDevice;
          spirit.config = data.config;
          capacity.push(spirit);
        }
			});
			let data = {
				width: this.width,
				height: this.height,
        background: {color: this.background.color},
        capacity: capacity
			}
			if(this.canvasId) {
				this.option.saveCanvas({
					id: this.canvasId,
          data: JSON.stringify(data)
				},function(msg) {
					if(msg=="ok") {
						that.toast('保存成功');
					}
				})
			}
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

export default Stage;
