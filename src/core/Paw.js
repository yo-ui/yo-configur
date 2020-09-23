import Rotate from './../core/Rotate'

/**
 * 操作（移动，改变大小）
 */
class Paw {

  constructor(stage) {
    this.stage = stage;
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
    this._x = 0;
    this._y = 0;
    this.rotate = new Rotate(this);
    this.isRotate = true;
    this.move = true;
  }

  resize(property) {
    let that = this;
    that.property = property;
    that._x = property.x
    that._y = property.y;
    let resizePanel = $('.resize-panel');
    resizePanel.css({
      position: 'absolute',
      cursor: 'move',
      'z-index': property.zIndex+1,
      display: 'none',
      'user-select': 'none',
      'transform': 'rotate('+property.rotate+'deg)translateZ(0)',
    });

    let content = $('.resize-panel').find(".resize-panel-content");
    resizePanel.append(content);
    resizePanel.on('click',function(e) {
      e.stopPropagation();
    });

    resizePanel.find('.bm-rotate').hide();
    let dataList = [
      '.w','.e','.n','.s',
      '.bm-resizable-ne',
      '.bm-resizable-se',
      '.bm-resizable-nw',
      '.bm-resizable-sw']
    that.listHide(dataList);

    let moveType = this.property.moveType;
    if(moveType==1) {
      this.listShow(dataList);
    }else if(moveType==2) {
      this.listShow(['.w','.e']);
    }else if(moveType==3) {
      this.listShow(['.n','.s']);
    }else if(moveType==4) {
      this.listShow(['.w','.e']);
      this.listShow(['.n','.s']);
    }

    if(property.isRotate&&!property.isWater) {
      resizePanel.find('.bm-rotate').show();
    }
    resizePanel.show();
  }

  listHide(dataList) {
    dataList.forEach(function (className) {
      $('.resize-panel').find(className).hide();
    })
  }

  listShow(dataList) {
    dataList.forEach(function (className) {
      $('.resize-panel').find(className).show();
    })
  }

  bindResizeEvent() {
    let that = this;
    let ox = 0; //原始事件x位置
    let oy = 0; //原始事件y位置
    let ow = 0; //原始宽度
    let oh = 0; //原始高度
    let oleft = 0; //原始元素位置
    let otop = 0;
    let resizePanel = $('.resize-panel');
    //东
    let emove = false;
    resizePanel.on('mousedown','.e', function(e) {
      ox = e.pageX;
      ow = parseInt(resizePanel.width());
      emove = true;
    });
    //南
    let smove = false;
    resizePanel.on('mousedown','.s', function(e) {
      oy = e.pageY;
      oh = parseInt(resizePanel.height());
      smove = true;
    });
    //西
    let wmove = false;
    resizePanel.on('mousedown','.w', function(e) {
      ox = e.pageX;
      ow = parseInt(resizePanel.width());
      wmove = true;
      oleft = parseInt(resizePanel.css('left').replace('px', ''));
    });
    //北
    let nmove = false;
    resizePanel.on('mousedown','.n', function(e) {
      oy = e.pageY;
      oh = parseInt(resizePanel.height());
      nmove = true;
      otop = parseInt(resizePanel.css('top').replace('px', ''));
    });
    //东北
    let nemove = false;
    resizePanel.on('mousedown','.bm-resizable-ne', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      ow = parseInt(resizePanel.width());
      oh = parseInt(resizePanel.height());
      nemove = true;
      otop = parseInt(resizePanel.css('top').replace('px', ''));
    });
    //西北
    let nwmove = false;
    resizePanel.on('mousedown','.bm-resizable-nw', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      ow = parseInt(resizePanel.width());
      oh = parseInt(resizePanel.height());
      otop = parseInt(resizePanel.css('top').replace('px', ''));
      oleft = parseInt(resizePanel.css('left').replace('px', ''));
      nwmove = true;
    });
    //东南
    let semove = false;
    resizePanel.on('mousedown','.bm-resizable-se', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      ow = parseInt(resizePanel.width());
      oh = parseInt(resizePanel.height());
      semove = true;
    });

    //西南
    let swmove = false;
    resizePanel.on('mousedown','.bm-resizable-sw', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      ow = parseInt(resizePanel.width());
      oh = parseInt(resizePanel.height());
      swmove = true;
      oleft = parseInt(resizePanel.css('left').replace('px', ''));
    });

    //拖拽
    let drag = false;
    resizePanel.on('mousedown', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      otop = parseInt(resizePanel.css('top').replace('px', ''));
      oleft = parseInt(resizePanel.css('left').replace('px', ''));
      drag = that.property.isDrag;
    });
    //旋转
    this.rotate.create();

    $(document).on('mousemove', function(e) {
      that.isMove = false;
      if(emove) {//右
        let x = e.pageX-ox;
        let width = ow+x;
        let height = that.property.height;
        if(that.property.minWidth<=width) {
          if(that.property.linkage) {
              resizePanel.css({width:width,height:height});
              resizePanel.find('.configur-spirit').children().css({width:width,height:height});
              that.property.width = width;
              that.property.height = width;
              that.stage.setProperty(that.property);
          }else {
              resizePanel.css({width:width});
              resizePanel.find('.configur-spirit').children().css({width:width});
              resizePanel.find("svg").css({width:width});
              if(that.property.className=="LevelWater") {
                resizePanel.find("rect").css({width:width});
              }
              that.property.width = width;
              that.stage.setProperty(that.property);
          }
        }
      } else if(smove) {//下
        let y = e.pageY-oy;
        let height = oh+y;
        if(that.property.minHeight<=height) {
          if(that.property.linkage) {
              resizePanel.css({width:height,height:height});
              resizePanel.find('.configur-spirit').children().css({width:height,height:height});
              that.property.width = height;
              that.property.height = height;
              that.stage.setProperty(that.property);
          }else {
              resizePanel.css({height:height});
              resizePanel.find('.configur-spirit').children().css({height:height});
              resizePanel.find("svg").css({height:height});
              if(that.property.className=="VerticalWater") {
                resizePanel.find("rect").css({height:height});
              }
              that.property.height = height;
              that.stage.setProperty(that.property);
          }
        }
      } else if(wmove) {//左
        let x = e.pageX-ox;
        let width = ow-x;
        let left = oleft+x;
        if(that.property.minWidth<=width) {
          if(that.property.linkage) {
              resizePanel.css({width:width,height:width,left:oleft+x});
              resizePanel.find('.configur-spirit').children().css({width:width,height:width});
              that.property.width = width;
              that.property.height = width;
              that.property.x = left;
              that.stage.setProperty(that.property);
          }else {
              resizePanel.css({width:width,left:left});
              resizePanel.find('.configur-spirit').children().css({width:width});
              resizePanel.find("svg").css({width:width});
              if(that.property.className=="LevelWater") {
                resizePanel.find("rect").css({width:width,left:left});
              }
              that.property.x = left;
              that.property.width = width;
              that.stage.setProperty(that.property);
          }
        }
      } else if(nmove) {//上
        let y = e.pageY-oy;
        let height = oh-y;
        let top = otop+y;
        if(that.property.minHeight<=height) {
          if(that.property.linkage) {
              resizePanel.css({width:height,height:height,top:top});
              resizePanel.find('.configur-spirit').children().css({width:height,height:height});
              that.property.y = top;
              that.property.width = height;
              that.property.height = height;
              that.stage.setProperty(that.property);
          }else {
              resizePanel.css({height:height,top:top});
              resizePanel.find('.configur-spirit').children().css({height:height});
              resizePanel.find("svg").css({height:height});
              if(that.property.className=="VerticalWater") {
                resizePanel.find("rect").css({height:height});
              }
              that.property.y = top;
              that.property.height = height;
              that.stage.setProperty(that.property);
          }
        }
      } else if(nemove) {//右上角
        let x = e.pageX - ox;
        let y = e.pageY - oy;
        resizePanel.css({height:oh-y,top:otop+y,width:ow+x});
        resizePanel.find('.configur-spirit').children().css({height:oh-y,width:ow+x});
        that.property.y = otop+y;
        that.property.width = ow+x;
        that.property.height = oh-y;
        that.stage.setProperty(that.property);
      } else if(nwmove) {//左上角
        let x = e.pageX - ox;
        let y = e.pageY - oy;
        resizePanel.css({height:oh-y,top:otop+y,width:ow-x,left:oleft+x});
        that.property.y = otop+y;
        that.property.x = oleft+x;
        that.property.width = ow-x;
        that.property.height = oh-y;
        that.stage.setProperty(that.property);
      } else if(semove) {//右下角
        let x = e.pageX - ox;
        let y = e.pageY - oy;
        resizePanel.css({width:ow+x,height:oh+y});
        that.property.width = ow+x;
        that.property.height = oh+y;
        that.stage.setProperty(that.property);
      } else if(swmove) {//左下角
        let x = e.pageX - ox;
        let y = e.pageY - oy;
        resizePanel.css({width:ow-x,left:oleft+x,height:oh+y});
        that.property.x = oleft+x;
        that.property.width = ow-x;
        that.property.height = oh+y;
        that.stage.setProperty(that.property);
      } else if(drag) {
        let x = e.pageX - ox;
        let y = e.pageY - oy;
        let left = oleft + x;
        let top = otop + y;
        resizePanel.css({left:left,top:top});
        that.property.x = left;
        that.property.y = top;
        that.stage.setProperty(that.property);
        that.isMove = true;
        that.subline(that.property.x,that.property.y);
        if(that._x!=that.property.x||that._y!=that.property.y) {
          that.moveRecord({x:that._x,y:that._y});
        }
        that.absorb();
        e.stopPropagation();
      }
    }).on('mouseup', function(e) {
      emove = false;
      smove = false;
      wmove = false;
      nmove = false;
      nemove = false;
      nwmove = false;
      swmove = false;
      semove = false;
      drag = false;
      e.preventDefault();
    });
  }

  absorb() {
    if(this.property.className=="Combination") {
      let that = this;
      let left = Number(that.property.x);
      let top = Number(that.property.y);
      let ids = that.property.config.ids;
      ids.forEach(function (id) {
        let x = $('#'+id).css('left').replace('px', '');
        let y = $('#'+id).css('top').replace('px', '');
        let _x = Number(x)+left;
        let _y = Number(y)+top;
        that.stage.capacity.forEach(function (c) {
          if(id==c.id) {
            c.x = _x;
            c.y = _y;
          }
        })
      })
    }
  }

  moveRecord(before) {
    let that = this;
    if (this.delayTimer) {
      clearInterval(this.delayTimer);
    }
    this.delayTimer = setInterval(() => {
      let left = before.x;
      let top = before.y;
      let data = {left:left,top:top}
      let record = {id:that.property.id,type:'move',name:'移动',data:data}
      that.stage.handleRecord.add(record);
      that._x = that.property.x;
      that._y = that.property.y;
      clearInterval(this.delayTimer);
    }, 1000);
  }

  register(el) {
    let that = this;
    $('.resize-panel').find('.resize-panel-content').append(el);
    $('.resize-panel').on('contextmenu',function (e) {
      let left = e.pageX;
      let top = e.pageY;
      $('.bm-context-menu').css({left: left,top: top});
      $('.bm-context-menu').show();
      that.stage.toolbar.contextMenu();
      e.preventDefault();
      e.stopPropagation();
    })
  }

  site(x,y,width,height) {
    $('.resize-panel').css({left:Number(x),top:Number(y),width:Number(width),height:Number(height)});
  }

  up() {
    let that = this;
    if(that.property) {
      let top = String($('.resize-panel').css('top')).replace('px', '');
      let y = Number(top)-1;
      $('.resize-panel').css({top:y});
      this.property.y = y;
      this.stage.setProperty(this.property);
    }
  }

  down() {
    let that = this;
    if(that.property) {
      let top = String($('.resize-panel').css('top')).replace('px', '');
      let y = Number(top)+1;
      $('.resize-panel').css({top:y});
      this.property.y = y;
      this.stage.setProperty(this.property);
    }
  }

  left() {
    let that = this;
    if(that.property) {
      let left = String($('.resize-panel').css('left')).replace('px', '');
      let x = Number(left)-1;
      $('.resize-panel').css({left:x});
      this.property.x = x;
      this.stage.setProperty(this.property);
    }
  }

  right() {
    let that = this;
    if(that.property) {
      let left = String($('.resize-panel').css('left')).replace('px', '');
      let x = Number(left)+1;
      $('.resize-panel').css({left:x});
      this.property.x = x;
      this.stage.setProperty(this.property);
    }
  }

  subline(x,y) {
    let that = this;
    let isX = false;
    let isY = false;
    that.stage.capacity.forEach(function(data) {
      if(data.isSubline&&that.property.id!=data.id) {
        if(data.x==x) isX = true
        if(data.y==y) isY = true;
      }
    });
    if(isX) {
      $('#v_subline').show();
      $('#v_subline').css({left:x,top:0})
    }else {
      $('#v_subline').hide();
    }
    if(isY) {
      $('#h_subline').show();
      $('#h_subline').css({left:0,top:y})
    }else {
      $('#h_subline').hide();
    }
  }
}

export default Paw;
