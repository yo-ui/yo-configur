import Paw from './Paw';
import Move from './Move';
import SpiritFactory from './SpiritFactory';
import Zoom from './Zoom';
import Library from './Library';
import Keydown from './Keydown';
import Align from './Align';
import HandleRecord from './HandleRecord';
import WaterPipe from './WaterPipe';
import BindData from './BindData';
import Toast from './Toast';
import View from "./../View";
import Color from "./Color"
import Toolbar from "./Toolbar"
import Group from "./Group"
import Help from "./../Help"
import Combination from "../components/common/Combination";
import Tree from "./../assets/js/Tree"

/**
 * 舞台
 */
class Stage {

	constructor(option,imgHost) {
	    this.imgHost = imgHost;
	    this.option = option;
	    this.toolType = 1;//1移动方式 2拼装方式
	    this.selectedType = 1;//选择类型 1:默认 2:框选
	    this.selectedList = [];
      this.variableList = [];
		  this.isMove = false;
		  this.isPanel = false;
		  this.move = new Move(this);//全局移动
      this.paw = new Paw(this);//舞台移动
		  this.zoom = new Zoom(this);//缩放
		  this.align = new Align(this);//对齐
		  this.handleRecord = new HandleRecord(this);//操作记录
      this.bindD = new BindData(this);//数据绑定
      this.toolbar = new Toolbar(this);//工具栏
      this.library = new Library(this);//组件库
      this.keydown = new Keydown(this);//快捷键
      this.group = new Group(this);
      this.help = new Help(this);
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
		let resizePanel = $(`<div class="resize-panel">
                            <div class="resize-panel-content"></div>
                            <div class="bm-resizable-handle bm-resizable-w"><div class="w"></div></div>
                            <div class="bm-resizable-handle bm-resizable-e"><div class="e"></div></div>
                            <div class="bm-resizable-handle bm-resizable-n"><div class="n"></div></div>
                            <div class="bm-resizable-handle bm-resizable-s"><div class="s"></div></div>
                            <div class="bm-resizable-handle bm-resizable-ne"></div>
                            <div class="bm-resizable-handle bm-resizable-se"></div>
                            <div class="bm-resizable-handle bm-resizable-nw"></div>
                            <div class="bm-resizable-handle bm-resizable-sw"></div>
                          </div>`);
		element.append(resizePanel);
		let vLine = $('<div id="v_subline">&nbsp;</div>')
		vLine.css({
			display: 'none',
			position: 'absolute',
			'border-left': '1px dashed red',
			width: '1px',
			height: height+'px',
			'z-index': 10,
		})
		element.append(vLine);
	    let hLine = $('<div id="h_subline">&nbsp;</div>')
		hLine.css({
			display: 'none',
			position: 'absolute',
			'border-top': '1px dashed red',
			width: width+'px',
			height: '1px',
			'z-index': 10,
		})
		element.append(hLine);
		let rectangle = $('<div id="selected_subline">&nbsp;</div>')
		rectangle.css({
			display: 'none',
			position: 'absolute',
			border: '1px dashed #12a3ff',
			width: '0px',
			height: '0px',
			'z-index': 10,
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
					let x = parseInt(e.pageX-offsetLeft);
					let y = parseInt(e.pageY-offsetTop);
					let spirit = that.create(that.className,x,y,that.dw,that.dh);
					spirit.refresh();
					that.capacity.push(spirit)
          that.configurList();
					let data = {id:spirit.id,left:spirit.x,top:spirit.y}
					let record = {type:'add',name:'添加',data:data}
					that.handleRecord.add(record);
          that.triggerClick();
				}
			}
		})

		element.on('click',function(e) {
      if(that.property&&that.property.isMove) {
        if(that.property.className=="Combination") {
          that.absorb(false);
          $('#'+that.property.id).find(".comb").html('');
        }
      }
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
			that.toolbar.edit();
			e.stopPropagation();
		});

		element.on('contextmenu',function(e) {
			if(that.toolType==1) {
				$(this).trigger('click');
				let left = $(this).offset().left+e.offsetX+5;
				let top = $(this).offset().top+e.offsetY+5;
				$('.bm-context-menu').css({left,top});
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
			if(data.isSelected) {
	            let d1 = {x:x,y:y,width:width,height:height}
	            let d2 = {x:data.x,y:data.y,width:data.width,height:data.height};
	          if(data.isMove&&that.overlap(d1,d2)) {
	            dataList.push(data);
	          }
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
        that.toolbar.edit();
			}
		});

		this.element = element;
		this.capacity = [];
		$('.bm-toolbar_zoom').on('mouseleave',function() {
			$('.bm-toolbar_zoom').hide();
		});
		$('#root').append(this.element);
    this.waterPipe = new WaterPipe(this);
    this.paw.bindResizeEvent();
    this.toolbar.disabled();
    this.zoom.init();
	}

  stageAuto() {
    let width = $('.bm-layout__main__body').width()-94;
    let height = $('.bm-layout__main__body').height()-94;
    $('.bm-stage').css({width,height,'margin-top': '25px','margin-left': '47px'});
  }

	selectedPanel(dataList) {
		let data = {x:0,y:0,x2:0,y2:0}
		dataList.forEach(function (selected,index) {
	        let x2 = Number(selected.x)+Number(selected.width);
	        let y2 = Number(selected.y)+Number(selected.height);
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
		let x = Number(data.x);
		let y = Number(data.y);
		let width = Number(data.x2)-Number(data.x);
		let height = Number(data.y2)-Number(data.y);
		return {x,y,width,height}
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
		let html = $(`<div class="bm-cell no-hover">
						<div class="bm-cell__title">
							<div>功能选择</div>
							<div class="bm-img handle">
							    <div><img src="static/images/move.png" width="30" title="移动组件"></div>
							    <div><img src="static/images/water.png" width="30" title="拼装水管"></div>						    				    
              </div>
						</div>					
					</div>
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
		      <div class="bm-tree"><i class="fa fa-down"></i>&nbsp;背景</div>
		      <div>
            <div class="bm-style">
              <div class="text">颜色：</div>
              <div class="value">
                <input type="color" name="bgColor" title="背景颜色" />
              </div>
            </div>
            <div class="bm-style">
              <div class="text">图片：</div>
              <div class="value">
                <div class="bm-checkbox" style="width: 20px;vertical-align: middle;">
                  <input type='checkbox' id='subline'>
                  <label for='subline'></label>
                </div>
                <form id="stageBg" style="display: inline-block">
                  <div class="bm-upload" style="width: 80px">
                    <div class="primary">选择图片</div>								 
                    <input type="file" name="stageBg"/>								 	              
                  </div>
                </form>		
              </div>
						</div>
					</div>`);
        $('#configur_property').html(html);

        html.find("[name=bgColor]").val(that.background.color)
        html.find("[name=bgColor]").on('change',function() {
            that.background.color = $(this).val();
            $('#configur_stage').css({'background-color': $(this).val()})
        })
        $('#configur_property .bm-tree').each(function () {
          Tree.init($(this))
        })
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
            that.background.url = that.imgHost+"/"+url;
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
	            left: Number(left),
	            top: Number(top),
	            transform: 'rotate('+that.property.rotate+'deg)',
              'z-index': that.property.zIndex
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
	  let that = this;
      if(!that.property.isDrag) {
	      Toast.alert("请先分解在复制！")
	      return;
      }
		if(!$('.resize-panel').is(":hidden")) {
			this.layDown();
			let className = this.property.className;
			let x = Number(this.property.x)+50;
			let y = Number(this.property.y)+50;
			let width = this.property.width;
			let height = this.property.height;
			let rotate = this.property.rotate;
			let spirit = this.create(className,x,y,width,height,rotate);
			if(spirit.config){
        spirit.config = JSON.parse(JSON.stringify(this.property.config))//深拷贝
      }
      spirit.isSubline = this.property.isSubline;
      spirit.isSelected = this.property.isSelected;
      spirit.zIndex = this.property.zIndex;
      if(className=="Combination") {
			  let idList = [];
			  let ids = this.property.config.ids;
			  let dataList = [...that.capacity]
			  ids.forEach(function (id) {
          dataList.forEach(function (c) {
            if(c.id==id) {
              let configur = that.create(c.className,c.x,c.y,c.width,c.height,0);
              if(configur.config){
                configur.config = JSON.parse(JSON.stringify(c.config))//深拷贝
              }
              configur.isSelected = c.isSelected;
              configur.isSubline = c.isSubline;
              configur.refresh();
              configur.x = c.x+50;
              configur.y = c.y+50;
              that.capacity.push(configur);
              idList.push(configur.id)
            }
          })
        })
        spirit.config.ids = idList;
      }else {
        let data = {id:spirit.id,left:spirit.x,top:spirit.y}
        let record = {type:'add',name:'添加',data:data}
        this.handleRecord.add(record);
      }
			spirit.refresh();
			this.capacity.push(spirit);
      spirit.getEl().trigger('click');
		}
	}

	//删除
	remove() {
		let that = this;
		if(that.property&&!that.property.isDrag) {
		  Toast.alert("请先分解在删除！")
      return;
    }
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
			let className = that.property.className;
			let x = that.property.x;
			let y = that.property.y;
			let width = that.property.width;
			let height = that.property.height;
			let record = {type:'remove',name:'删除',data: {className,x,y,width,height}}
			that.handleRecord.add(record);
			if(that.property.className=="Combination") {
        let ids = that.property.config.ids;
        that.updateCapacity([that.property.id]);
        that.updateCapacity(ids);
      }else {
        that.updateCapacity([that.property.id]);
      }
      that.property = "";
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
        if(that.property.isMove) {
            $(this).css({left:0,top:0,transform: 'rotate(0deg)'});
            that.propertyStyle();
            that.paw.resize(that.property);
            let x = that.property.x;
            let y = that.property.y;
            let width = that.property.width;
            let height = that.property.height;
            let className = that.property.className;
            if(className=="TextBox"||className=="Text") {
              that.property.text();
            }else if(that.property.className=="Combination") {
              let left = that.property.x;
              let top = that.property.y;
              let ids = that.property.config.ids;
              that.property.isSubline = true;
              ids.forEach(function (id) {
                that.capacity.forEach(function (data) {
                  if(id == data.id) {
                    that.createCombination(that.property.id,data,left,top)
                  }
                })
              })
            }
            that.paw.site(x,y,width,height);
            that.paw.register(el);
            that.isMove = true;
            el.unbind();
        }else {
            that.setProperty(that.property);
            that.propertyStyle();
            that.layDown();
        }
        that.configurList();
        e.stopPropagation();
      }
      that.toolbar.edit();
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
			this.property.renderer();
		  let config = that.property.config;
			$('#configur_property').find('[name=bg]').on('change',function() {
          let form = $("#imgBg")[0]
          let file = $(this).get(0).files[0]
          that.option.upload(form,file,function(url) {
            that.property.config.url = url;
            $('#'+that.property.id).find('img').attr('src',that.imgHost+"/"+url);
          })
			})
      $('#configur_property .bm-tree').each(function () {
        Tree.init($(this))
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
			this.property.refresh();
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
      if(data.variableList) {
        that.variableList = data.variableList;
      }else {
        that.variableList = [];
      }
			this.createStage(width,height,data.background);
      let combinationList = []
			data.capacity.forEach(function(c) {
			  let id = c.id;
				let className = c.className;
				let x = c.x;
				let y = c.y;
				let width = c.width;
				let height = c.height;
				let rotate= c.rotate;
				let spirit = that.create(className,x,y,width,height,rotate,id);
        c.id = spirit.id;
        spirit.name = c.name;
        spirit.zIndex = c.zIndex;
        spirit.isSelected = c.isSelected;
        spirit.isSubline = c.isSubline;
        spirit.isDrag = c.isDrag;
        spirit.isRotate = c.isRotate;
        spirit.config = c.config;
        $("#"+spirit.id).css({'z-index': spirit.zIndex})
        if(className=="Images") {
          let url = that.imgHost+"/"+spirit.config.url;
          $('#'+spirit.id).find('img').attr('src', url);
        }
        spirit.refresh();
        that.capacity.push(spirit);
			})
			that.triggerClick();
			that.location();
			that.configurList();
		}
	}

  configurList() {
    $('#configur_list ul').html('');
	  let that = this;
	  if(that.capacity) {
      that.capacity.forEach(function (data) {
          let li = $('<li></li>');
          li.data('id',data.id)
          li.on('click',function (e) {
            that.property = "";
            that.triggerClick();
            $(this).addClass('active');
            $(this).siblings().each(function () {
              $(this).removeClass('active');
            })
            $('#'+$(this).data('id')).trigger('click');
            e.stopPropagation();
          })
          let text = $(`<span class="text">${data.name}</span>`)
          let value = $(`<span class="value"></span>`);
          if(data.isBind) {
            let bind = $('<i class="fa fa-bind"/>')
            if(data.config.bindData.deviceId) {
              bind.css({color:'red'})
            }
            bind.on('click',function (e) {
              let id = $(this).parent().parent().data("id");
              that.bindD.create(id);
              $(this).parent().parent().trigger('click');

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
	            spirit.isSelected = data.isSelected;
	            spirit.isSubline = data.isSubline;
	            spirit.isDrag = data.isDrag;
	            spirit.isRotate = data.isRotate;
	            spirit.config = data.config;
	            capacity.push(spirit);
          }
			});
			let data = {
				width: this.width,
				height: this.height,
		        variableList: this.variableList,
		        background: this.background,
		        capacity: capacity
			}
			console.log(data);
			if(this.canvasId) {
				this.option.save({
					id: this.canvasId,
                    data: JSON.stringify(data)},
                    function() {
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

  //组合
  combination() {
	let that = this;
    let left = $('.bm-selected-panel').css('left').replace('px', '');
    let top = $('.bm-selected-panel').css('top').replace('px', '');
    let width = $('.bm-selected-panel').width();
    let height = $('.bm-selected-panel').height();
    $('.bm-selected-panel').hide();
    let spirit = this.create("Combination",left,top,width,height,0);
    if(spirit.config){
      Object.assign(spirit.config,this.property.config)
    }
    spirit.refresh();
    let combinationIds = [];
    let ids = [];
    this.selectedList.forEach(function (selected) {
      selected.isSelected = false;
      selected.isSubline = false;
      selected.isDrag = false;
      selected.isRotate = false;
      if(selected.className=="Combination") {
        let idList = selected.config.ids;
        idList.forEach(function (id) {
          that.capacity.forEach(function (c,index) {
            if(id==c.id) {
              ids.push(that.createCombination(spirit.id,c,left,top))
            }
          })
        })
        combinationIds.push(selected.id)
        $("#"+selected.id).remove();
      }else {
        ids.push(that.createCombination(spirit.id,selected,left,top))
      }
    })
    that.updateCapacity(combinationIds);
    spirit.config.ids = ids;
    this.capacity.push(spirit);
    spirit.getEl().trigger('click');
  }

  //分解
  resolve() {
    this.absorb(true);
    this.property.config.ids = [];
    this.layDown();
    let ids = [this.property.id];
    this.updateCapacity(ids);
    $('#'+this.property.id).remove();
  }

  absorb(resolve) {
	let that = this;
    let left = Number(that.property.x);
    let top = Number(that.property.y);
    let ids = that.property.config.ids;
    ids.forEach(function (id) {
      let x = $('#'+id).css('left').replace('px', '');
      let y = $('#'+id).css('top').replace('px', '');
      let _x = Number(x)+left;
      let _y = Number(y)+top;
      that.capacity.forEach(function (c) {
        if(id==c.id) {
          if(resolve) {
            c.isSubline = true;
            c.isSelected = true;
            c.isDrag = true;
            c.isRotate = true;
          }
          c.x = _x;
          c.y = _y;
          let element = $('#'+c.id).css({left:c.x,top:c.y});
          that.addEvent(element);
          $("#configur_stage").append(element);
        }
      })
    })
  }

  //更新组件库
  updateCapacity(ids) {
	  let that = this;
    let dataList = [...that.capacity]
    ids.forEach(function (id) {
      that.capacity.forEach(function (d,index) {
        if (id == d.id) {
          dataList.splice(index,1)
        }
      })
      that.capacity = dataList;
    })
  }

  createCombination(id,data,left,top) {
    let _x = data.x-left;
    let _y = data.y-top;
    $('#'+data.id).css({position:"absolute",left:_x,top:_y});
    $('#'+id).find(".comb").append($('#'+data.id).remove());
    return data.id;
  }

  //舞台触发点击
  triggerClick() {
    $('#configur_stage').trigger('click')
  }
}

export default Stage;
