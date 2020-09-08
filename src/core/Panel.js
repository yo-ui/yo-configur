/**
 * 面板
 */
class Panel {

	constructor(stage) {
		this.stage = stage;
		$('.main-content').append(Panel.template());
		this.close();
	}

	init(titie,content,width,height = "auto") {
	  this.empty();
    $('.bm-configur-panel__header').find("span").text(titie);
    $('.bm-configur-panel__content').html(content);
    $('.bm-configur-panel__body').css({width,height});
  }

  empty() {
    $('.bm-configur-panel__content').html('');
  }

  close() {
	  let that = this;
    $('.bm-configur-panel').find('.close').on('click',function() {
      that.hide();
    });
    $('.bm-configur-panel__close').on('click',function() {
      that.hide();
    });
  }

  confirm(callback) {
	  let that = this;
    $('.bm-configur-panel .confirm').on("click",function() {
      callback.call(this);
      that.hide();
    });
  }

  show() {
    $('.bm-configur-panel').show();
  }

  hide() {
    $('.bm-configur-panel').hide();
  }

  floorHide() {
    $('.bm-configur-panel__floor').hide();
  }

  static template() {
	  return `<div class="bm-configur-panel" style="display: none;">
                  <div class="bm-configur-panel__body">
                      <div class="bm-configur-panel__header"><span></span><div class="bm-configur-panel__close">×</div></div>
                      <div class="bm-configur-panel__content"></div>
                      <div class="bm-configur-panel__floor">
                          <div class="close bm-button bm-button--small bm-button--default">关闭</div>
                          <div class="confirm bm-button bm-button--small bm-button--primary">确定</div>
                      </div>
                  </div>
              </div>`;
  }
}

export default Panel;
