import Toast from './../core/Toast';
/**
 * 控制密码
 */
class Password {

  constructor(stage) {
    this.stage = stage;
    $('.main-content').append(Password.template());
    this.close();
    this.input();
  }

  input() {
    $('.bm-password-panel__input input').each(function() {
      $(this).on('input propertychange',function() {
        if($(this).val()!="") {
          $(this).next().focus();
        }else {
          $(this).prev().focus();
        }
      });
    })
  }

  close() {
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
        Toast.alert('请输入正确密码');
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

  static template() {
    let html = `<div class="bm-password-panel">
      <div class="bm-password-panel__shade">&nbsp;</div>
      <div class="bm-password-panel__content">
        <div class="bm-password-panel__header"><small class="text">控制密码</small><span>×</span></div>
        <div class="bm-password-panel__input">
          <input type="password" maxlength="1" autocomplete="off"/>
          <input type="password" maxlength="1" autocomplete="off"/>
          <input type="password" maxlength="1" autocomplete="off"/>
          <input type="password" maxlength="1" autocomplete="off"/>
          <input type="password" maxlength="1" autocomplete="off"/>
          <input type="password" maxlength="1" autocomplete="off"/>
        </div>
        <div class="bm-password-panel__floor">
          <div class="bm-password-cancel">取消</div>
          <div class="bm-password-affirm">确定</div>
        </div>
      </div>
    </div>`;
    return html;
  }
}

export default Password;
