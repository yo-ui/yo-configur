/**
 * 触发（按钮）
 */
class Trigger {

  constructor(parent) {
    this.parent = parent;
  }

  init(content) {
    let that = this;
    let html = $(`<div class="bm-input-panel" style="z-index: 9999">
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
                           <span>动作</span>
                           <div>
                             <input type="radio" name="value" value="0" /><span style="vertical-align: top">&nbsp;直接</span>
                             <input type="radio" name="value" value="1" /><span style="vertical-align: top">&nbsp;取反</span>
                             <input type="radio" name="value" value="2" /><span style="vertical-align: top">&nbsp;切换</span>
                           </div>
                         </div>                     
                       </div>                   
                   </div>`)
    html.find("[name=value]").on('click',function () {
      that.parent.animation.value = $(this).val();
    });
    html.find("[name=value]").each(function () {
      if(that.parent.animation.value==$(this).val()) {
        $(this).attr("checked", true)
      }
    })
    content.find('.animation-content').html(html);
  }
}

export default Trigger;
