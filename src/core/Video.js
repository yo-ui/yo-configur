/**
 *
 */
class Video {
  constructor(stage,width,height,deviceId) {
    this.stage = stage;
    this.deviceId = deviceId;
    let that = this;
    $('.bm-configur-panel__body').css({width: width,height: height})
    $('.direction > div').each(function () {
      $(this).on('mousedown',function () {
        let value = $(this).data("value")
        console.log(value);
        that.startVideoControl(that.deviceId,value);
      })
      $(this).on('mouseup',function () {
        let value = $(this).data("value")
        console.log(value);
        that.stopVideoControl(that.deviceId,value);
      })
    });
    this.close();
  }

  create(name,accessToken,serial) {
    $('.bm-configur-panel__header').text(name)
    let url = "ezopen://open.ys7.com/"+serial+"/1.live";
    this.decoder = new EZUIKit.EZUIPlayer({
      id: 'playWind',
      autoplay: true,
      url: url,
      accessToken: accessToken,
      decoderPath: 'static/lib',
      width: 800,
      height: 445,
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

  startVideoControl(deviceId,value) {
    this.stage.option.start(deviceId,value, function(message) {
      console.log(message);
    })
  }

  stopVideoControl(deviceId,value) {
    this.stage.option.stop(deviceId,value, function(message) {
      console.log(message);
    })
  }
}

export default Video;


