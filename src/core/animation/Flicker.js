/**
 * 闪烁
 */
class Flicker {

  constructor(parent) {
    this.parent = parent;
  }

  init(content) {
    content.find('.animation-content').html('');
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
                           <span>闪烁颜色</span>
                           <div><input type="color" class="form-control" name="color" style="width: 80px" value="${that.parent.animation.color}"/></div>                       
                         </div> 
                         <div class="bm-area">
                           <span>闪烁速度</span>
                           <div>
                             <input type="radio" name="speed" value="0" checked/><span>慢速</span>
                             <input type="radio" name="speed" value="1"/><span>中速</span>
                             <input type="radio" name="speed" value="2"/><span>快速</span>
                           </div>
                         </div>      
                        </div>
                   </div>`);
    html.find("[name=color]").on('change',function () {
      that.parent.animation.color = $(this).val();
    });
    html.find("[name=speed]").on('click',function () {
      that.parent.animation.speed = $(this).val();
    });
    html.find("[name=speed]").each(function () {
      if(that.parent.animation.speed==$(this).val()) {
        $(this).attr("checked", true)
      }
    })
    content.find('.animation-content').html(html);
  }
}

export default Flicker;
