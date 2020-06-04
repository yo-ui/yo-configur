/**
 *
 */
class BindDevice {

	constructor(stage) {
    this.stage = stage;
    this.bindDevice = {id:'',point:'',unit:''}
    this.points = []
	}

	create() {
		let that = this;
		if(that.stage.property) {
		  $('#configur_list').html('');
			if(that.stage.property.isBind) {
				let html = `<div class="bm-text-header">设备</div>
							<div class="bind-device bm-select-panel" style="z-index: 2">
							   <span class="select">
								   <span class="text">请选择设备</span>
								   <img src="static/images/angle-down.png">
							   </span>                          
							   <div>
								   <input type="text" class="form-control" maxlength="16" placeholder="设备名称"/>
								   <ul></ul>
							   </div>
							</div>
							<div class="point-panel" style="display: none">
								<div class="bm-text-header">点位</div>
								<div class="bind-point bm-select-panel" style="z-index: 1;">
								   <span class="select">
									   <span class="text">请选择点位</span>
									   <img src="static/images/angle-down.png">
								   </span>                          
								   <div>
									   <input type="text" class="form-control" maxlength="16" placeholder="设备名称"/>
									   <ul></ul>
								   </div>
								</div>
							</div>`;

				$('#configur_list').append(html)
				if(that.stage.property.bindType==2) {
					$('#configur_list').find('.point-panel').show()
				}
				let devicePanel = $('#configur_list').find('.bind-device');
				devicePanel.find('.select').on('click',function () {
					$(this).next().toggle();
				});

				devicePanel.find('div').on('mouseleave',function (e) {
					$(this).hide();
				});

				let pointPanel = $('#configur_list').find('.bind-point');
				pointPanel.find('.select').on('click',function () {
					$(this).next().toggle();
				});

				pointPanel.find('div').on('mouseleave',function (e) {
					$(this).hide();
				});

				that.createDeviceList(that.stage.deviceList);

				$('.bind-device input').on('input propertyChange',function () {
					let text = $(this).val();
          let dataList = []
					that.stage.deviceList.forEach(function (device) {
            if(device.name.indexOf(text)!=-1) {
              dataList.push(device);
            }
					})
					if(text) {
						that.createDeviceList(dataList);
					}else {
						that.createDeviceList(that.stage.deviceList);
					}
				})
			}
		}
	}

	createDeviceList(dataList) {
		$('.bind-device ul').html('');
		let that = this;
		if(dataList!=null&&dataList.length>0) {
		  let bindDevice = that.stage.property.config.bindDevice;
			dataList.forEach(function (device) {
				let li = $(`<li>${that.textFormat(device.name,12)}</li>`);
				li.data("id", device.id)
				li.data("points", device.points);
				li.on('click', function (e) {
          bindDevice.id = $(this).data("id");
          bindDevice.point = "";
          bindDevice.unit = "";
					$('.bind-device .text').text($(this).text());
					$('.bind-device div').hide();
					let points = $(this).data("points");
					that.createPoint(points);
					$(this).addClass('active');
					$(this).siblings().each(function () {
					  $(this).removeClass('active');
					});
				})
				$('.bind-device ul').append(li);
        if(device.id==bindDevice.id) {
          $('.bind-device .text').text(that.textFormat(device.name,12))
          li.addClass('active');
          that.createPoint(device.points);
        }
			})
		}else {
			$('.bind-device ul').append(`<li class="no-data">无设备</li>`);
		}
	}

	createPoint(points) {
		let that = this;
		if(that.stage.property.bindType==2) {
		  that.points = points;
			that.dPointList(points)
			$('.bind-point input').on('input propertyChange',function () {
				let text = $(this).val();
				let dataList = []
				that.points.forEach(function (point) {
					if(point.name.indexOf(text)!=-1) {
						dataList.push(point);
					}
				})
				if(text) {
					that.dPointList(dataList);
				}else {
					that.dPointList(that.points);
				}
			})
		}
	}

	dPointList(points) {
		$('.bind-point ul').html('');
		let that = this;
		if(points.length>0) {
      let bindDevice = that.stage.property.config.bindDevice;
      let isSelected = true;
			points.forEach(function (point,index) {
				let li = $(`<li>${point.name}</li>`);
				li.data("id", point.id);
				li.data("unit", point.unit==undefined?'':point.unit);
				li.on('click', function () {
          bindDevice.point = $(this).data("id");
          bindDevice.unit = $(this).data("unit");
					$('.bind-point .text').text($(this).text());
					$('.bind-point div').hide();
					$(this).addClass('active');
					$(this).siblings().each(function () {
						$(this).removeClass('active');
					});
				})
				$('.bind-point ul').append(li);

				if(point.id==bindDevice.point) {
					$('.bind-point .text').text(point.name)
					li.addClass('active');
          isSelected = false;
				}
			})
      if(isSelected) {
        $('.bind-point li').each(function (index) {
          $(this).removeClass('active');
          if(index==0) {
            $(this).addClass('active')
            $('.bind-point .text').text($(this).text())
          }
        })
      }
		}else {
			$('.bind-point ul').append(`<li class="no-data">无点位</li>`);
		}
	}

	textFormat(text,length) {
	  return text.length>length?text.substr(0,length)+"...":text;
  }
}

export default BindDevice;
