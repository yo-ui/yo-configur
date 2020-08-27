/**
 * 提示框
 */
class Toast {

  constructor() {
    $('.main-content').append(this.template());
  }

  static alert(text,time=2000) {
    $('.bm-toast').show();
    $('.bm-toast__text').text(text);
    const timer = setInterval(() => {
      clearInterval(timer);
      $('.bm-toast').hide()
    }, time);
	}

	template() {
    let html = `<div style="display: none" class="bm-toast bm-toast--text bm-toast--top">
      <span class="bm-toast__text"></span>
    </div>`
    return html;
  }
}

export default Toast;
