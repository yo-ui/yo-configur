/**
 * 文本颜色
 */
class TextColor {

  constructor(parent) {
    this.parent = parent;
  }

  init(content) {
    let that = this;
    let html = $(`<div>
                      <div class="bm-input-panel" style="z-index: 9999">
                         <span class="input-group">
                           <input type="text" class="form-control" name="expr" placeholder="请输入绑定数据点" onfocus="this.blur()"/>
                           <i class="fa fa-down"></i>
                         </span>
                         <div class="panel-content">
                           <ul class="bm-action-list"></ul>
                         </div>
                       </div>
                       <div class="animation-list">
                          <div class="bm-area">
                           <span>颜色</span>
                           <div>
                             <span><span>0,off,false：</span><input type="color" class="form-control" name="off" style="width: 80px" value="${that.parent.animation.off}"/></span>
                             <span><span>1,on,true：</span><input type="color" class="form-control" name="on" style="width: 80px" value="${that.parent.animation.on}"/></span>
                           </div>                       
                         </div>                
                        </div>
                   </div>`);
    html.find("[name=off]").on('change',function () {
      that.parent.animation.off = $(this).val();
    });
    html.find("[name=on]").on('change',function () {
      that.parent.animation.on = $(this).val();
    });
    content.find('.animation-content').html(html);
  }
}

export default TextColor;
