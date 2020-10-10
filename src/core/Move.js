/**
 *
 */
class Move {
  constructor(stage) {
    this.stage = stage;
    this.move = true;
  }

  site(top,left) {
    $('.bm-global-panel').css({top:top,left:left});
  }

  register(el) {
    $('.bm-global-panel').append(el);
  }

  drag() {
    let that = this;
    let move = false;
    let x,y;
    $(".bm-global-panel").mousedown(function(e,data) {
      move = true;
      if(data) {
        x = data.x-parseInt($(".bm-global-panel").css("left"));
        y = data.y-parseInt($(".bm-global-panel").css("top"));
      }else{
        x = e.pageX-parseInt($(".bm-global-panel").css("left"));
        y = e.pageY-parseInt($(".bm-global-panel").css("top"));
      }
      $(".bm-global-panel").fadeTo(20, 0.8);
    });
    $(document).mousemove(function(e) {
      if(move) {
        let left = e.pageX-x;
        let top = e.pageY-y;
        $(".bm-global-panel").css({top:top-53,left:left-1});
      }
    }).mouseup(function(ev) {
      move = false;
      if(that.move) {
        $(".bm-global-panel").hide();
        if(ev.pageX>220) {
          that.stage.isCreate = true;
        }
      }
    });
  }
}

export default Move;
