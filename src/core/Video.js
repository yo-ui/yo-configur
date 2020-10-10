
/**
 *
 */
class Video {
  constructor(stage,width,height) {
    this.stage = stage;
    this.width = width;
    this.height = height;
    this.close();
  }

  init(deviceId) {
    let that = this;
    this.stage.panel.init("摄像头",Video.template(),800,500)
    this.stage.panel.floorHide();
    $('.direction > div').each(function() {
      $(this).on('mousedown',function() {
        let value = $(this).data("value")
        that.startVideoControl(deviceId,value);
      })
      $(this).on('mouseup',function() {
        let value = $(this).data("value")
        that.stopVideoControl(deviceId,value);
      })
    });
  }

  create(name,accessToken,serial) {
    let that = this;
    let url = "ezopen://open.ys7.com/"+serial+"/1.live";
    this.decoder = new EZUIKit.EZUIPlayer({
      id: 'playWind',
      autoplay: true,
      url: url,
      accessToken: accessToken,
      decoderPath: 'static/js',
      width: that.width,
      height: that.height-55,
    });
    this.show();
  }

  show() {
    $('.bm-configur-panel').show();
  }

  close() {
    let that = this;
    $('.bm-configur-panel__close').on('click',function() {
      if(that.decoder) {
        that.decoder.stop();
      }
      $('.bm-configur-panel').hide();
    })
  }

  static template() {
    return `<div id="playWind"></div>
             <div class="vision-btn">
               <div class="bm-direction">
                 <div class="bm-direction--top" data-value="0"><i class="fa fa-up"></i></div>
                 <div class="bm-direction--left" data-value="2"><i class="fa fa-left"></i></div>
                 <div class="bm-direction--right" data-value="3"><i class="fa fa-right"></i></div>
                 <div class="bm-direction--bottom" data-value="1"><i class="fa fa-down"></i></div>
               </div>
             </div>`
  }

  startVideoControl(deviceId,value) {
    this.stage.option.start(deviceId,value, function(message) {
      console.log("操作成功！");
    })
  }

  stopVideoControl(deviceId,value) {
    this.stage.option.stop(deviceId,value, function(message) {
      console.log("操作成功！");
    })
  }
}

export default Video;


