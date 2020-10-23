/**
 * 位置
 */
class Location {

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
                       <div class="animation-list"></div>
                   </div>`);
    if(this.parent.animation.type==61) {
       that.horizontal(html);
    }else if(this.parent.animation.type==62) {
       that.vertical(html);
    }
    content.find('.animation-content').html(html);
  }

  horizontal(html) {
    let that = this;
    let content = $(`<div class="bm-area">
                     <span>属性</span>
                     <div>
                       <div class="bm-area-line">
                         <span><span>可向左：</span><input type="number" name="left" class="form-control" min="0" value="${that.parent.animation.left}"/></span>
                         <span><span>可向右：</span><input type="number" name="right" class="form-control" min="0" value="${that.parent.animation.right}"/></span>
                       </div>
                     </div>
                     </div>`)
    content.find('[name=left]').on('input propertyChange',function () {
      that.parent.animation.left = $(this).val();
    });
    content.find('[name=right]').on('input propertyChange',function () {
      that.parent.animation.right = $(this).val();
    });
    html.find('.animation-list').html(content);
  }

  vertical(html) {
    let that = this;
    let content = $(`<div class="bm-area">
                     <span>属性</span>
                     <div>
                       <div class="bm-area-line">
                         <span><span>可向上：</span><input type="number" name="top" class="form-control" value="${that.parent.animation.top}"/></span>
                         <span><span>可向下：</span><input type="number" name="bottom" class="form-control" value="${that.parent.animation.bottom}"/></span>
                       </div>                     
                     </div>
                     </div>`)
    content.find('[name=top]').on('input propertyChange',function () {
      that.parent.animation.top = $(this).val();
    });
    content.find('[name=bottom]').on('input propertyChange',function () {
      that.parent.animation.bottom = $(this).val();
    });
    html.find('.animation-list').html(content);
  }
}

export default Location;
