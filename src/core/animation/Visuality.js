/**
 * 显示
 */
class Visuality {

  constructor(parent) {
    this.parent = parent;
  }

  init(content) {
    content.find('.animation-content').html('');
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
                           <span>可见状态</span>
                           <div><span>0-->隐藏</span><span>1-->显示</span></div>                       
                         </div>                   
                        </div>
                   </div>`);
    content.find('.animation-content').html(html);
  }
}

export default Visuality;
