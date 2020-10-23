/**
 * 分组
 */
class Group {

  constructor(parent) {
    this.parent = parent;
  }

  init(content) {
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
                       <div class="animation-list">
                         <div class="bm-area">
                           <span>颜色</span>
                           <div>0,off,false：<input type="color" name="color" value="${that.parent.animation.color}"/></div>                      
                         </div>
                      </div>
                   </div>`);
    html.find('[name=color]').on('change',function () {
      that.parent.animation.color = $(this).val();
    });
    content.find('.animation-content').html(html);
  }
}

export default Group;
