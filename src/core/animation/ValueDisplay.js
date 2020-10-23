/**
 * 值显示
 */
class ValueDisplay {

  constructor(parent) {
    this.parent = parent;
  }

  init(content) {
    if(this.parent.animation.type==90) {
      this.displayDiscrete(content)
    }else if(this.parent.animation.type==91) {
      this.displayAnalog(content)
    }else if(this.parent.animation.type==92) {
      this.displayString(content)
    }
  }

  //显示字符串
  displayString(content) {
    let html = $(`<div>
                     <div class="bm-input-panel" style="z-index: 9999">
                       <span class="input-group">
                         <input type="text" class="form-control" name="expr" placeholder="请输入绑定数据点"/>
                         <i class="fa fa-down"></i>
                       </span>
                       <div class="panel-content">
                         <ul class="bm-action-list"></ul>
                       </div>
                     </div>
                   </div>`);
    content.find('.animation-content').html(html);
  }

  //显示模拟
  displayAnalog(content) {
    let html = $(`<div>
                     <div class="bm-input-panel" style="z-index: 9999">
                       <span class="input-group">
                         <input type="text" class="form-control" name="expr" placeholder="请输入绑定数据点"/>
                         <i class="fa fa-down"></i>
                       </span>
                       <div class="panel-content">
                         <ul class="bm-action-list"></ul>
                       </div>
                     </div>
                   </div>`);
    content.find('.animation-content').html(html);
  }

  //显示离散
  displayDiscrete(content) {
    let that = this;
    let html = $(`<div>
                     <div class="bm-input-panel" style="z-index: 9999">
                       <span class="input-group">
                         <input type="text" class="form-control" name="expr" placeholder="请输入绑定数据点"/>
                         <i class="fa fa-down"></i>
                       </span>
                       <div class="panel-content">
                         <ul class="bm-action-list"></ul>
                       </div>
                     </div>
                     <div class="bm-area">
                       <span>显示</span>
                       <div>
                         <div class="bm-area-line">
                         <span>
                           <span>打开消息：</span>
                           <input type="text" name="on" class="form-control" value="${that.parent.animation.on}" maxlength="16"/>
                         </span>
                         <span>
                           <span>关闭消息：</span>
                           <input type="text" name="off" class="form-control" value="${that.parent.animation.off}" maxlength="16"/>
                         </span>
                       </div>                       
                       </div>
                     </div>
                   </div>`);
    html.find('[name=on]').on('input propertyChange',function () {
      that.parent.animation.on = $(this).val();
    });
    html.find('[name=off]').on('input propertyChange',function () {
      that.parent.animation.off = $(this).val();
    });
    content.find('.animation-content').html(html);
  }
}

export default ValueDisplay;
