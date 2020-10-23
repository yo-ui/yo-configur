/**
 * 大小
 */
class Size {

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
    if(this.parent.animation.type==51) {
       that.width(html);
    }else if(this.parent.animation.type==52) {
       that.height(html);
    }
    content.find('.animation-content').html(html);
  }

  width(html) {
    let that = this;
    let content = $(`<div>
                       <div class="bm-area">
                         <span>属性</span>
                         <div>
                           <div class="bm-area-line">
                             <span><span>最大宽度值：</span><input type="number" name="maxWidth" class="form-control" min="0" value="${that.parent.animation.maxWidth}"/></span>
                             <span><span>最小宽度值：</span><input type="number" name="minWidth" class="form-control" min="0" value="${that.parent.animation.minWidth}"/></span>
                           </div>
                         </div>
                       </div>
                       <div class="bm-area">
                         <span>参考位置</span>
                         <div>
                           <input type="radio" name="site" value="0"/><span>左端</span>
                           <input type="radio" name="site" value="1"/><span>中间</span>
                           <input type="radio" name="site" value="2"/><span>右端</span>
                         </div>
                       </div>
                     </div>`)
    content.find('[name=maxWidth]').on('input propertyChange',function () {
      that.parent.animation.maxWidth = $(this).val();
    });
    content.find('[name=minWidth]').on('input propertyChange',function () {
      that.parent.animation.minWidth = $(this).val();
    });
    content.find("[name=site]").on('click',function () {
      that.parent.animation.site = $(this).val();
    });
    content.find("[name=site]").each(function () {
      if(that.parent.animation.site==$(this).val()) {
        $(this).attr("checked", true)
      }
    })
    html.find('.animation-list').html(content);
  }

  height(html) {
    let that = this;
    let content = $(`<div>
                       <div class="bm-area">
                         <span>属性</span>
                         <div>
                           <div class="bm-area-line">
                             <span><span>最大高度值：</span><input type="number" name="maxHeight" class="form-control" min="0" value="${that.parent.animation.maxHeight}"/></span>
                             <span><span>最小高度值：</span><input type="number" name="minHeight" class="form-control" min="0" value="${that.parent.animation.minHeight}"/></span>
                           </div>
                         </div>
                       </div>
                       <div class="bm-area">
                         <span>参考位置</span>
                         <div>
                           <input type="radio" name="site" value="0"/><span>顶端</span>
                           <input type="radio" name="site" value="1"/><span>中间</span>
                           <input type="radio" name="site" value="2"/><span>底端</span>
                         </div>
                       </div>
                     </div>`)
    content.find('[name=maxHeight]').on('input propertyChange',function () {
      that.parent.animation.maxHeight = $(this).val();
    });
    content.find('[name=minHeight]').on('input propertyChange',function () {
      that.parent.animation.minHeight = $(this).val();
    });
    content.find("[name=site]").on('click',function () {
      that.parent.animation.site = $(this).val();
    });
    content.find("[name=site]").each(function () {
      if(that.parent.animation.site==$(this).val()) {
        $(this).attr("checked", true)
      }
    })
    html.find('.animation-list').html(content);
  }
}

export default Size;
