/**
 * 提示框
 */
class Toast {

  static alert(text,time=2000) {
    $('.bm-toast').show();
    $('.bm-toast__text').text(text);
    const timer = setInterval(() => {
      clearInterval(timer);
      $('.bm-toast').hide()
    }, time);
	}
}

export default Toast;
