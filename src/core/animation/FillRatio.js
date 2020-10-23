import Toast from "../Toast";

/**
 * 填充比例
 */
class FillRatio {

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
                     <div class="bm-area">
                       <span>属性</span>
                       <div>
                         <div class="bm-area-line" style="margin-bottom: 10px">
                           <span><span>最大填充值：</span><input type="text" name="maxValue" class="form-control" value="${that.parent.animation.maxValue}"/></span>
                           <span><span>最大填充百分比：</span><input type="text" name="maxRatio" class="form-control" value="${that.parent.animation.maxRatio}"/></span>
                         </div> 
                         <div class="bm-area-line">
                           <span><span>最小填充值：</span><input type="text" name="minValue" class="form-control" value="${that.parent.animation.minValue}"/></span>
                           <span><span>最大填充百分比：</span><input type="text" name="minRatio" class="form-control" value="${that.parent.animation.minRatio}"/></span>
                         </div>                         
                       </div>
                     </div> 
                     <div class="bm-area">
                       <span>填充颜色</span>
                       <div><input type="color" class="form-control" name="color" style="width: 80px" value="${that.parent.animation.color}"/></div>
                     </div>  
                     <div class="bm-area">
                       <span>方向</span>
                       <div class="direction"></div>
                     </div>                 
                   </div>`)
    if(that.parent.animation.type==71) {
      that.horizontal(html);
    }else if(that.parent.animation.type==72) {
      that.vertical(html);
    }

    html.find('[name=direction]').each(function () {
      if(that.parent.animation.direction==$(this).val()) {
        $(this).attr("checked", true)
      }
    })

    html.find('[name=expr]').on('input propertyChange',function () {
      that.parent.animation.expr = $(this).val();
    });

    html.find('[name=maxValue]').on('input propertyChange',function () {
      that.parent.animation.minValue = $(this).val();
    });

    html.find('[name=maxRatio]').on('input propertyChange',function () {
      that.parent.animation.maxRatio = $(this).val();
    });

    html.find('[name=minValue]').on('input propertyChange',function () {
      that.parent.animation.minValue = $(this).val();
    });

    html.find('[name=minRatio]').on('input propertyChange',function () {
      that.parent.animation.minRatio = $(this).val();
    });

    html.find('[name=color]').on('input propertyChange',function () {
      that.parent.animation.color = $(this).val();
    });

    html.find('[name=direction]').on('input propertyChange',function () {
      that.parent.animation.direction = $(this).val();
    });

    content.find('.animation-content').html(html);
  }

  horizontal(html) {
    let content = `<span>向右</span><span><input type="radio" name="direction" value="right"/></span>
                    <span>向左</span><span><input type="radio" name="direction" value="left"/></span>`
    html.find('.direction').html(content);
  }

  vertical(html) {
    let content = `<span>向上</span><span><input type="radio" name="direction" value="top"/></span>
                    <span>向下</span><span><input type="radio" name="direction" value="bottom"/></span>`
    html.find('.direction').html(content);
  }
}

export default FillRatio;
