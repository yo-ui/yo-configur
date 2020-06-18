import Spirit from '@/core/Spirit.js'

/**
 * 视图面板
 */
class ViewPanel extends Spirit {

  constructor(x=0, y=0,width,height) {
    super(x, y);
    this.title = "视图面板";
    this.className = "ViewPanel";
    this.width = width;
    this.height = height;
    this.minWidth = 240;
    this.minHeight = 115;
    this.moveType = 4;
    this.linkage = false;
    this.isMove = true;
    this.isBind = true;
    this.zIndex = 4;
    this.config = {bindData: {organizId:'',deviceId:'',devicePoint:''}}
  }

  template(){
    let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
                <div class="bm-view-panel" style="width: ${this.width-2}px;height: ${this.height-2}px">
                    <div class="bm-view-panel__title">设备名称</div>
                    <div class="bm-view-panel__content" style="max-height: ${this.height-50}px"></div>
                </div>
                <div class="images-shade" style="position:absolute;top:0;width:${this.width}px;height:${this.height}px;"></div>
                </div>`)
    return div;
  }

  refresh() {

  }

  reveal(device,config) {
    console.log(device);
    let that = this;
    if(device) {
      $('#'+that.id).find('.bm-view-panel__title').text(device.name);
      let ul = $('<ul></ul>');
      device.points.forEach(function(point) {
        let li = $(`<li><span class="text">${point.name}</span></li>`);
        if(point.id=="SwSts") {
          let text = $(`<span class="value">${point.value==0?'关':'开'}</span>`)
          li.append(text)
        }else {
          if(point.value) {
            let span = $(`<span class="value">${that.floatFormat(point.value)}<small class="unit">${that.undefinedToString(point.unit)}</small></span>`)
            li.append(span);
          }
        }
        ul.append(li);
      })

      $('#'+that.id).find('.bm-view-panel__content').append(ul);
    }
  }

  toJson() {
    let json = {
      title: this.title,
      className: this.className,
      moveType: this.moveType,
      minWidth: this.minWidth,
      isMove: this.isMove,
      zIndex: this.zIndex
    };
    return Object.assign(super.toJson(),json);
  }
}

export default ViewPanel;
