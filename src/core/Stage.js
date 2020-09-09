import Paw from '@/core/Paw';
import Move from '@/core/Move';
import SpiritFactory from '@/core/SpiritFactory';
import Zoom from '@/core/Zoom';
import Library from '@/core/Library';
import Keydown from '@/core/Keydown';
import Align from '@/core/Align';
import HandleRecord from '@/core/HandleRecord';
import WaterPipe from '@/components/common/WaterPipe';
import BindData from '@/core/BindData';
import Toast from '@/core/Toast';
import View from "@/View";
import Color from "@/core/Color"
import Toolbar from "@/core/Toolbar"
import Vessel from "@/components/common/Vessel";
import Group from "@/core/Group"
import Panel from "@/core/Panel"

/**
 * 舞台
 */
class Stage {

	constructor(option,config) {
	  this.config = config;
		this.option = option;
		this.toolType = 1;//1移动方式 2拼装方式
		this.selectedType = 1;//选择类型 1:默认 2:框选
		this.selectedList = [];
    this.groupList = [];
		this.isMove = false;
    this.move = new Move(this);//全局移动
    this.paw = new Paw(0,0,0,0,this);//舞台移动
		this.zoom = new Zoom(this);//缩放
		this.align = new Align(this);//对齐
		this.handleRecord = new HandleRecord(this);//操作记录
    this.bindD = new BindData(this);//数据绑定
    this.toolbar = new Toolbar(this);//工具栏
    this.library = new Library(this);//组件库
    this.keydown = new Keydown(this);//快捷键
    this.group = new Group(this);
    this.panel = new Panel(this);
    this.toast = new Toast(this);
		this.init();
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
    this.stageAuto();

		let element = $('<div id="configur_stage"></div>').css({
			position: 'relative',
			width: width+'px',
			height: height+'px',
			transform: 'scale(1)',
      'transform-origin': '0 0',
			'background-color': background.color,
		});
		let board = $('<div id="board">&nbsp;</div>').css({
			position: 'absolute',
			width: width+'px',
			height: height+'px',
			'z-index': 10,
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
			height: height+'px',
			'z-index': 1,
		})
		element.append(vLine);
	  let hLine = $('<div id="h_subline">&nbsp;</div>')
		hLine.css({
			display: 'none',
			position: 'absolute',
			'border-top': '1px dashed red',
			width: width+'px',
			height: '1px',
			'z-index': 1,
		})
		element.append(hLine);
		let rectangle = $('<div id="selected_subline">&nbsp;</div>')
		rectangle.css({
			display: 'none',
			position: 'absolute',
			border: '1px dashed #12a3ff',
			width: '0px',
			height: '0px',
			'z-index': 1,
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
      that.toolbar.contextMenu();
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
          that.configurList();
					let data = {id:spirit.id,left:spirit.x,top:spirit.y}
					let record = {type:'add',name:'添加',data:data}
					that.handleRecord.add(record);
          that.triggerClick();
					that.vesselList();
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
			$('#configur_list li').each(function () {
        $(this).removeClass('active');
      });
			e.stopPropagation();
		});

		element.on('contextmenu',function(e) {
			if(that.toolType==1) {
				$(this).trigger('click');
				let left = $(this).offset().left+e.offsetX+5;
				let top = $(this).offset().top+e.offsetY+5;
				$('.bm-context-menu').css({left: left,top: top});
				$('.bm-context-menu').show();
        that.toolbar.contextMenu();
			}
			e.preventDefault();
			e.stopPropagation();
		});

		that.rectangle = {};
		element.on('mousedown',function(e) {
			if(that.toolType==1) {
				$('.bm-context-menu').hide();
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
				let left = data.x;
				let top = data.y;
				let width = data.width;
				let height = data.height;
				$('.bm-selected-panel').css({left,top,width,height})
			}
      that.vesselList();
		});

		this.element = element;
		this.capacity = [];
		$('.bm-toolbar_zoom').on('mouseleave',function() {
			$('.bm-toolbar_zoom').hide();
		});
		$('#root').append(this.element);
    this.waterPipe = new WaterPipe(this);
	}

  stageAuto() {
    let _height = $('.bm-layout__main__body').height();
    let _width = $('.bm-layout__main__body').width();
    $('.bm-stage').css({width: _width-40,height: _height-40,'margin-top': '20px','margin-left': '20px'});
  }

  vesselList() {
	  let that = this;
    that.capacity.forEach(function (data) {
      if(data.className == "Vessel"&&data.config.status==1) {
        let dataList = new Set(data.config.dataList);
        let x = that.property.x;
        let y = that.property.y;
        let width = that.property.width;
        let height = that.property.height;
        if((x>data.x&&(x+width)<(data.x+data.width))&&
          (y>data.y&&(y+height)<(data.y+data.height))) {
          dataList.add(that.property.id)
        }else {
          dataList.delete(that.property.id)
        }
        data.config.dataList = [...dataList];
      }
    })

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
      if(selected.x<data.x) {data.x = selected.x}
      if(selected.y<data.y) {data.y = selected.y}
      if(x2>data.x2) {data.x2 = x2}
      if(y2>data.y2) {data.y2 = y2}
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
							<input id="stage_bg" type="color"/>
						</div>
					</div>
					<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>背景图片</div>
							<div class="bm-checkbox">
								<input type='checkbox' id='subline'>
								<label for='subline'></label>
							</div>
							<form id="stageBg">
                <div class="bm-upload">
                  <span>选择图片</span>								 
                  <input type="file" name="stageBg"/>								 	              
                </div>
              </form>		
						</div>
					</div>
          <div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>缩放</div>
							<div class="bm-zoom">
                <div><i class="fa fa-zoom-in"></i></div>
                <span></span>
                <div><i class="fa fa-zoom-out"></i></div>
              </div>
						</div>
					</div>`;
		$('#configur_property').html(html);
		that.zoom.init();
		Tooltip.init();
    Color.empty();
		//背景颜色
    let element = $("#stage_bg");
    let color = that.background.color;
    Color.init(element,color,function (color) {
      that.background.color = color;
      $('#configur_stage').css({'background-color': color})
    });
		if(that.background.url) {
			$('#configur_stage').css({'background-image': 'url('+that.background.url+')'});
      $('#subline').prop("checked",true)
		}else {
			$('#configur_stage').css({'background-image': ''});
      $('#subline').prop("checked",false)
		}

    $('#subline').on('change',function () {
      if($(this).is(':checked')) {
        $('#configur_stage').css({'background-image': 'url('+that.background.url+')'});
        $("#stageBg").attr("disabled", true);
      }else {
        $('#configur_stage').css({'background-image': ''});
        $("#stageBg").attr("disabled", true);
        that.background.url = ""
      }
    })

    $('#configur_property').find('[name=stageBg]').on('change',function() {
      let form = $("#stageBg")[0]
      let file = $(this).get(0).files[0]
      that.option.upload(form,file,function(url) {
        that.background.url = that.config.imgHost+"/"+url;
        $('#configur_stage').css({'background-image': 'url('+that.background.url+')'});
      })
    })
    this.handleRecord.init();
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

  //水平平分
  hDivide() {
    if(this.selectedList.length<=2) {
      return;
    }
    let that = this;
    let data = that.selectedPanel(that.selectedList);
    let value = 0;
    that.selectedList.sort((a,b)=> a.y-b.y)
    that.selectedList.forEach(function (data) {
      value+=data.height;
    })
    if(data.height-value>0) {
      let v = (data.height-value)/(that.selectedList.length-1);
      that.selectedList.forEach(function (selected,index) {
        if(index>0&&index<that.selectedList.length-1) {
          let first = that.selectedList[index-1];
          let top = parseInt(first.y+first.height+v);
          $('#'+selected.id).css({top});
          selected.y = top;
        }
      })
    }
  }

  //垂直平分
  vDivide() {
    if(this.selectedList.length<=2) {
      return;
    }
    let that = this;
    let data = that.selectedPanel(that.selectedList);
    let value = 0;
    that.selectedList.sort((a,b)=> a.x-b.x)
    that.selectedList.forEach(function (data) {
      value+=data.width;
    })
    if(data.width-value>0) {
      let v = (data.width-value)/(that.selectedList.length-1);
      that.selectedList.forEach(function (selected,index) {
        if(index>0&&index<that.selectedList.length-1) {
          let first = that.selectedList[index-1];
          let left = parseInt(first.x+first.width+v)
          $('#'+selected.id).css({left});
          selected.x = left;
        }
      })
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
		let top = $('.resize-panel').css('top').replace('px', '');
    	let left = $('.resize-panel').css('left').replace('px', '');
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
    	}
    $('.resize-panel').find('.resize-panel-content').html('');
    $('.resize-panel').hide();
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
      Object.assign(spirit.config,this.property.config)
			spirit.refresh();
			this.capacity.push(spirit);
			let data = {id:spirit.id,left:spirit.x,top:spirit.y}
			let record = {type:'add',name:'添加',data:data}
			this.handleRecord.add(record);
      this.triggerClick();
      this.vesselList();
		}
	}

	//删除
	remove() {
		let that = this;
		if(that.selectedList.length>1) {
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
		that.triggerClick();
		that.configurList();
	}

	//创建
	create(className,x,y,width,height,rotate=0,id) {
		let that = this;
		this.className = className;
    let spirit = SpiritFactory.getInstance(className,x,y,width,height);
    if(id) {
      spirit.id = id;
    }
    spirit.name = spirit.name+"-"+that.capacity.length;
    if(spirit.className=="Images") {
      if(!spirit.config.url) {
        spirit.config.url = "static/images/background/background.jpg";
      }
    }
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
        that.configurList();
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
				that.toolbar.contextMenu();
			}
			e.preventDefault();
			e.stopPropagation();
		})
  }



	/**
	 * 属性样式
	 */
	propertyStyle() {
		let that = this;
		if(this.property){
      Tooltip.init();
			this.property.renderer();
      Color.empty();
      let config = that.property.config;
			if(config) {
        //字体颜色
        if(config.color) {
          let element = $(".text-color");
          let color = that.property.config.color;
          Color.init(element,color,function (color) {
            that.property.config.color = color;
            $('#'+that.property.id).find('span').css({'color': color});
          });
        }
        //背景颜色
        if(config.backgroundColor) {
          let element = $(".bg-color");
          let color = that.property.config.backgroundColor;
          Color.init(element,color,function (color) {
            that.property.config.backgroundColor = color;
            $('#'+that.property.id).find('div').css({'background-color': color});
          });
        }
      }
			$('#configur_property').find('[name=bg]').on('change',function() {
				let form = $("#imgBg")[0]
        let file = $(this).get(0).files[0]
        that.option.upload(form,file,function(url) {
          that.property.config.url = url;
          $('#'+that.property.id).find('img').attr('src',that.config.imgHost+"/"+url);
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
		if(data) {
      if(data.groupList) {
        that.groupList = data.groupList;
      }else {
        that.groupList = [];
      }
			this.createStage(width,height,data.background);
      let vesselList = []
			data.capacity.forEach(function(property) {
			  let id = property.id;
				let className = property.className;
				let x = property.x;
				let y = property.y;
				let width = property.width;
				let height = property.height;
				let rotate= property.rotate;
				let spirit = that.create(className,x,y,width,height,rotate,id);
				spirit.name = property.name;
				spirit.zIndex = property.zIndex;
				spirit.config = property.config;
        if(className=="Images") {
          let url = that.config.imgHost+"/"+spirit.config.url;
          $('#'+spirit.id).find('img').attr('src', url);
        }else if(className=="Vessel") {
          vesselList.push(spirit)
        }
				spirit.refresh();
				that.capacity.push(spirit);
				property.id = spirit.id;
			})
			that.triggerClick();
			that.location();
			that.configurList();
      vesselList.forEach(function (vessel) {
        let status = vessel.config.status;
        if(status==1) {
          vessel.show();
        }else if(status==2) {
          vessel.hide();
        }
      })
		}
	}

  configurList() {
    $('#configur_list ul').html('');
	  let that = this;
	  if(that.capacity) {
      that.capacity.forEach(function (data) {
        let li = $('<li></li>');
        li.data('id',data.id)
        li.on('click',function () {
          $(this).addClass('active');
          $(this).siblings().each(function () {
            $(this).removeClass('active');
          })
          $('#'+$(this).data('id')).trigger('click')
        })
        let text = $(`<span class="text">${data.name}</span>`)
        let value = $(`<span class="value"></span>`);
        if(data.isBind) {
          let bind = $('<i class="fa fa-bind"/>')
          if(data.config.bindData.deviceId) {
            bind.css({color:'red'})
          }
          bind.on('click',function (e) {
            $(this).parent().parent().trigger('click')
            that.bindD.create();
            e.stopPropagation();
          });
          value.append(bind);
        }
        li.append(text).append(value);
        if(that.property.id == data.id) {
          li.addClass('active');
        }
        $('#configur_list ul').append(li);
      })
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
          spirit.id = data.id;
          spirit.name = data.name;
          spirit.x = data.x;
          spirit.y = data.y;
          spirit.width = data.width;
          spirit.height = data.height;
          spirit.rotate = data.rotate;
          spirit.isMove = data.isMove;
          spirit.zIndex = data.zIndex;
          spirit.config = data.config;
          capacity.push(spirit);
        }
			});
			let data = {
				width: this.width,
				height: this.height,
        groupList: this.groupList,
        background: this.background,
        capacity: capacity
			}
			console.log(data);
			if(this.canvasId) {
				this.option.saveCanvas({
					id: this.canvasId,
          data: JSON.stringify(data)
				},function() {
          Toast.alert('保存成功');
				})
			}
		}
	}

  init() {
	  let that = this;
    this.option.canvas(function(data) {
      $('.bm-layout__header__name').text(data.name);
      that.canvasId = data.id;
      if(!data.data) {
        data.data = JSON.stringify({background:{url:'',color: '#fff'},capacity:[]})
      }
      that.analysis(data.width,data.height,JSON.parse(data.data));
    })
  }

  //预览
  preview() {
    let view = new View(this.config);
    $('.main-content').html(view.template());
    view.init();
  }

  //舞台触发点击
  triggerClick() {
    $('#configur_stage').trigger('click')
  }
}

export default Stage;
