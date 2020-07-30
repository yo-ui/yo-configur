/**
 * 控制密码
 */
class Password {
  constructor(stage) {
    this.stage = stage;
    $('.bm-password-panel__input input').each(function() {
      $(this).on('input propertychange',function() {
        if($(this).val()!="") {
          $(this).next().focus();
        }else {
          $(this).prev().focus();
        }
      });
    })

    $('.bm-password-panel__header').find('span').on('click',function () {
      $('.bm-password-panel').hide();
    })

    $('.bm-password-cancel').on('click',function() {
      $('.bm-password-panel').hide();
    })
  }

  confirm(callback) {
    let that = this;
    $('.bm-password-affirm').on('click',function(e) {
      let text = '';
      $('.bm-password-panel__input input').each(function() {
        text+=$(this).val()
      })
      if(text.length<6) {
        that.stage.toast('请输入正确密码');
        return;
      }
      callback.call(this, text);
    })
  }

  show(text) {
    $('.bm-password-panel__input input').each(function() {
      $(this).val('');
    })
    $('.bm-password-panel__header').find('.text').text(text);
    $('.bm-password-panel').show();
  }

  hide() {
    $('.bm-password-panel').hide();
  }
}

export default Password;
