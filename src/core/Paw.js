import Rotate from '@/core/Rotate.js'

/**
 * 操作（移动，改变大小）
 */
class Paw {

  constructor(x,y,width,height,stage) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.stage = stage;
    this._x = 0;
    this._y = 0;
    this.rotate = new Rotate(this);
  }

  resizePanel(property) {
    let that = this;
    that.isRotate = false;
    this.property = property;
    that._x = property.x
    that._y = property.y;
    let resizePanel = $('.resize-panel');
    resizePanel.unbind();
    resizePanel.html('');
    resizePanel.css({
      position: 'absolute',
      border: '2px dashed #12a3ff',
      cursor: 'move',
      'z-index': property.zIndex+1,
      display: 'none',
      'user-select': 'none',
      transform: 'rotate('+property.rotate+'deg)'
    });

    if(property.isRotate) {
      //旋转
      this.rotate.create();
    }

    let content = $('<div class="resize-panel-content"></div>');
    content.css({
      position: 'absolute',
      top: '0px',
      left: '0px'
    })
    resizePanel.append(content);

    resizePanel.on('click',function(e) {
      e.stopPropagation();
    });

    let moveType = this.property.moveType;
    if(moveType==1) {
      this.changeWidth(resizePanel);
      this.changeHeight(resizePanel);
      this.quadrangle(resizePanel);
    }else if(moveType==2) {
      this.changeWidth(resizePanel);
    }else if(moveType==3) {
      this.changeHeight(resizePanel);
    }else if(moveType==4) {
      this.changeWidth(resizePanel);
      this.changeHeight(resizePanel);
    }
    return resizePanel;
  }

  changeWidth(resizePanel) {
    let w = $('<div class="w"></div>');//西
    let e = $('<div class="e"></div>');//东
    e.css({top: '50%','margin-top': '-3px',right: '-4px','cursor':'e-resize'});
    w.css({top: '50%','margin-top': '-3px',left: '-4px','cursor': 'w-resize'});
    this.addHandlerCss([w, e]);
    this.appendHandler([w, e], resizePanel);
  }

  changeHeight(resizePanel) {
    let n = $('<div class="n"></div>');//北
    let s = $('<div class="s"></div>');//南
    n.css({top: '-4px','margin-left': '-3px',left: '50%','cursor': 'n-resize'});
    s.css({bottom: '-4px','margin-left': '-3px',left: '50%','cursor': 's-resize'});
    this.addHandlerCss([n, s]);
    this.appendHandler([n, s], resizePanel);
  }

  quadrangle(resizePanel) {
    let ne = $('<div class="ne"></div>');//东北
    let nw = $('<div class="nw"></div>');//西北
    let se = $('<div class="se"></div>');//东南
    let sw = $('<div class="sw"></div>');//西南
    ne.css({top: '-4px',right: '-4px',cursor: 'ne-resize'});
    nw.css({top: '-4px',left: '-4px',cursor: 'nw-resize'});
    se.css({bottom: '-4px',right: '-4px',cursor: 'se-resize'});
    sw.css({bottom: '-4px',left: '-4px',cursor: 'sw-resize'});
    this.addHandlerCss([ne, se, nw, sw]);
    this.appendHandler([ne, se, nw, sw], resizePanel);
  }

  bindResizeEvent() {
    let that = this;
    let resizePanel = $('.resize-panel');
    let ox = 0; //原始事件x位置
    let oy = 0; //原始事件y位置
    let ow = 0; //原始宽度
    let oh = 0; //原始高度
    let oleft = 0; //原始元素位置
    let otop = 0;
    //东
    let emove = false;
    resizePanel.on('mousedown','.e', function(e) {
      ox = e.pageX;
      ow = resizePanel.width();
      emove = true;
    });
    //南
    let smove = false;
    resizePanel.on('mousedown','.s', function(e) {
      oy = e.pageY;
      oh = resizePanel.height();
      smove = true;
    });
    //西
    let wmove = false;
    resizePanel.on('mousedown','.w', function(e) {
      ox = e.pageX;
      ow = resizePanel.width();
      wmove = true;
      oleft = parseInt(resizePanel.css('left').replace('px', ''));
    });
    //北
    let nmove = false;
    resizePanel.on('mousedown','.n', function(e) {
      oy = e.pageY;
      oh = resizePanel.height();
      nmove = true;
      otop = parseInt(resizePanel.css('top').replace('px', ''));
    });
    //东北
    let nemove = false;
    resizePanel.on('mousedown','.ne', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      ow = resizePanel.width();
      oh = resizePanel.height();
      nemove = true;
      otop = parseInt(resizePanel.css('top').replace('px', ''));
    });
    //西北
    let nwmove = false;
    resizePanel.on('mousedown','.nw', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      ow = resizePanel.width();
      oh = resizePanel.height();
      otop = parseInt(resizePanel.css('top').replace('px', ''));
      oleft = parseInt(resizePanel.css('left').replace('px', ''));
      nwmove = true;
    });
    //东南
    let semove = false;
    resizePanel.on('mousedown','.se', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      ow = resizePanel.width();
      oh = resizePanel.height();
      semove = true;
    });

    //西南
    let swmove = false;
    resizePanel.on('mousedown','.sw', function(e) {
      ox = e.pageX;
      oy = e.pageY;
      ow = resizePanel.width();
      oh = resizePanel.height();
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
      drag = true;
    });

    $(document).on('mousemove', function(e) {
      that.isMove = false;
      if(emove) {//右
        let x = e.pageX-ox;
        let width = ow+x;
        let left = that.property.x;
        let top = that.property.y;
        let height = that.property.height;
        if(that.property.minWidth<=width) {
          if(that.property.linkage) {
            if(that.boundary(left,top,width,height)) {
              resizePanel.css({width:width,height:height});
              resizePanel.find('.configur-spirit').children().css({width:width-2,height:height-2});
              that.property.width = width-2;
              that.property.height = width-2;
              that.stage.setProperty(that.property);
            }
          }else {
            if(that.boundary(left,top,width,height)) {
              resizePanel.css({width:width});
              resizePanel.find('.configur-spirit').children().css({width:width-2});
              resizePanel.find("svg").css({width:width});
              if(that.property.className=="LevelWater") {
                resizePanel.find("rect").css({width:width});
              }
              that.property.width = width-2;
              that.stage.setProperty(that.property);
            }
          }
        }
      } else if(smove) {//下
        let y = e.pageY-oy;
        let height = oh+y;
        let left = that.property.x;
        let top = that.property.y;
        let width = that.property.width;
        if(that.property.minHeight<=height) {
          if(that.property.linkage) {
            if(that.boundary(left,top,width,height)) {
              resizePanel.css({width:height,height:height});
              resizePanel.find('.configur-spirit').children().css({width:height-2,height:height-2});

              that.property.width = height-2;
              that.property.height = height-2;
              that.stage.setProperty(that.property);
            }
          }else {
            if(that.boundary(left,top,width,height)) {
              resizePanel.css({height:height});
              resizePanel.find('.configur-spirit').children().css({height:height-2});
              resizePanel.find("svg").css({height:height});
              if(that.property.className=="VerticalWater") {
                resizePanel.find("rect").css({height:height});
              }
              that.property.height = height-2;
              that.stage.setProperty(that.property);
            }
          }
        }
      } else if(wmove) {//左
        let x = e.pageX-ox;
        let width = ow-x;
        let left = oleft+x;
        let top = that.property.y;
        let height = that.property.height;

        if(that.property.minWidth<=width) {
          if(that.property.linkage) {
            if(that.boundary(left,top,width,height)) {
              resizePanel.css({width:width,height:width,left:oleft+x});
              resizePanel.find('.configur-spirit').children().css({width:width-2,height:width-2});

              that.property.width = width-2;
              that.property.height = width-2;
              that.property.x = left+2;
              that.stage.setProperty(that.property);
            }
          }else {
            if(that.boundary(left,top,width,height)) {
              resizePanel.css({width:width,left:left});
              resizePanel.find('.configur-spirit').children().css({width:width-2});
              resizePanel.find("svg").css({width:width});
              if(that.property.className=="LevelWater") {
                resizePanel.find("rect").css({width:width,left:left});
              }
              that.property.x = left;
              that.property.width = width-2;
              that.stage.setProperty(that.property);
            }
          }
        }
      } else if(nmove) {//上
        let y = e.pageY-oy;
        let height = oh-y;
        let top = otop+y;
        let width = that.property.width;
        let left = that.property.x;

        if(that.property.minHeight<=height) {
          if(that.property.linkage) {
            if(that.boundary(left,top,width,height)) {
              resizePanel.css({width:height,height:height,top:top-2});
              resizePanel.find('.configur-spirit').children().css({width:height-2,height:height-2});
              that.property.y = top;
              that.property.width = height-2;
              that.property.height = height-2;
              that.stage.setProperty(that.property);
            }
          }else {
            if(that.boundary(left,top,width,height)) {
              resizePanel.css({height:height,top:top});
              resizePanel.find('.configur-spirit').children().css({height:height-2});
              resizePanel.find("svg").css({height:height});
              if(that.property.className=="VerticalWater") {
                resizePanel.find("rect").css({height:height});
              }
              that.property.y = top+2;
              that.property.height = height-2;
              that.stage.setProperty(that.property);
            }
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
        let width = that.property.width;
        let height = that.property.height;

        if(that.boundary(left,top,width,height)) {
          resizePanel.css({left:left,top:top});
          that.property.x = left+2;
          that.property.y = top+2;
          that.stage.setProperty(that.property);
        }
        that.isMove = true;
        that.subline(that.property.x,that.property.y);
        if(that._x!=that.property.x||that._y!=that.property.y) {
          that.moveRecord({x:that._x,y:that._y});
        }
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
    resizePanel.show();
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

  boundary(left,top,width,height) {
    let stageWidth = $('#configur_stage').width();
    let stageHeight = $('#configur_stage').height();
    let isB = (left>0&&left<=stageWidth-width-4)&&
      (top>0&&top<=stageHeight-height-4)
    return true;
  }

  addHandlerCss(els) {
    for(let i = 0; i < els.length; i++) {
      let el = els[i];
      el.css({
        position: 'absolute',
        width: '2px',
        height: '2px',
        background: '#12a3ff',
        border: '2px solid #12a3ff',
        'z-index': 10
      });
    }
  }

  appendHandler(handlers, target) {
    for(let i = 0; i < handlers.length; i++) {
      this.el = handlers[i];
      target.append(this.el);
    }
  }

  register(el) {
    let that = this;
    $('.resize-panel').find('.resize-panel-content').append(el);
    if(this.property.className=="Text") {
      let text = that.property.config.text;
      let fontSize = that.property.config.fontSize;
      let width = $('#temp_value').css({'font-size':fontSize+"px"}).text(text).width()+4;
      $('.resize-panel-content').find('span').css({width:width});
      $('.resize-panel').css({width:width});
    }
    $('.resize-panel').on('contextmenu',function (e) {
      let left = e.pageX;
      let top = e.pageY;
      $('.bm-context-menu').css({left: left,top: top});
      $('.bm-context-menu').show();
      that.stage.contextmenu();
      e.preventDefault();
      e.stopPropagation();
    })
  }

  site(x,y,width,height) {
    $('.resize-panel').css({top:y-2,left:x-2,width:width+2,height:height+2});
  }

  up() {
    let that = this;
    if(that.property) {
      let top = String($('.resize-panel').css('top')).replace('px', '');
      let x = that.property.x;
      let width = that.property.width;
      let height = that.property.height;
      let y = Number(top)-1;
      if(that.boundary(x,y,width,height)) {
        $('.resize-panel').css({top:y});
        this.property.y = y+2;
        this.stage.setProperty(this.property);
      }
    }
  }

  down() {
    let that = this;
    if(that.property) {
      let top = String($('.resize-panel').css('top')).replace('px', '');
      let x = that.property.x;
      let width = that.property.width;
      let height = that.property.height;
      let y = Number(top)+1;
      if(that.boundary(x,y,width,height)) {
        $('.resize-panel').css({top:y});
        this.property.y = y+2;
        this.stage.setProperty(this.property);
      }
    }
  }

  left() {
    let that = this;
    if(that.property) {
      let left = String($('.resize-panel').css('left')).replace('px', '');
      let x = Number(left)-1;
      let width = that.property.width;
      let height = that.property.height;
      let y = that.property.y;
      if(that.boundary(x,y,width,height)) {
        $('.resize-panel').css({left:x});
        this.property.x = x+2;
        this.stage.setProperty(this.property);
      }
    }
  }

  right() {
    let that = this;
    if(that.property) {
      let left = String($('.resize-panel').css('left')).replace('px', '');
      let x = Number(left)+1;
      let width = that.property.width;
      let height = that.property.height;
      let y = that.property.y;
      if(that.boundary(x,y,width,height)) {
        $('.resize-panel').css({left:x});
        this.property.x = x+2;
        this.stage.setProperty(this.property);
      }
    }
  }

  subline(x,y) {
    let that = this;
    let isX = false;
    let isY = false;
    that.stage.capacity.forEach(function(data) {
      if(that.property.id!=data.id) {
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
