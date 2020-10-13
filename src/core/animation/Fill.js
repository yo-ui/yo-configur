/**
 *
 */
class Fill {

  constructor(stage) {
    this.stage = stage;
  }

  init(content,animation) {
    let that = this;
    let html = $(`<div>
                       <select class="bm-select" name="expr">
                         <option value="">请输入设备点位</option>
                       </select>
                     </div>`);
    content.find('.animation-content').html(html);
    let deviceId = that.stage.property.config.bindData.deviceId;
    if(deviceId) {
      animation.stage.option.getDevice(deviceId,function (device) {
        device.points.forEach(function (point) {
          let option = $(`<option>${point.name}</option>`)
          option.val(point.id);
          html.find('[name=expr]').append(option);
        })
        html.find('[name=expr]').val(that.animation.expr);
        html.find('[name=expr]').on('change',function () {
          that.animation.expr = $(this).val();
          that.updateAnimation(that.animation);
        });
      })
    }
  }

  template() {

  }
}

export default Fill;
