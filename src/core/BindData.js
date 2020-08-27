/**
 *
 */
class BindData {

	constructor(stage) {
    this.stage = stage;
    this.bindData = {orgId:'',deviceId:'',devicePoint:''}
	}

	create() {
    this.organizs = []
    this.points = []
		let that = this;
		if(that.stage.property) {
      that.bindData = that.stage.property.config.bindData;
		  let content = `<div>
                      <span class="bm-text-header">组织</span>
                      <div class="organiz-panel bm-select-panel" style="z-index: 4">
                         <span class="select">
                           <span class="text">请选择组织</span>
                           <img src="static/images/angle-down.png">
                         </span>                          
                         <div class="content organiz-list">
                           <ul></ul>  
                         </div>
                      </div>
                  </div>               
                  <div class="device">
                    <span class="bm-text-header">设备</span>
                    <div class="device-panel bm-select-panel" style="z-index: 3">
                       <span class="select">
                         <span class="text">请选择设备</span>
                         <img src="static/images/angle-down.png">
                       </span>                          
                       <div class="content device-list">
                         <div style="margin: 5px"><input type="text" class="form-control" maxlength="16" placeholder="设备名称"/></div>                  
                         <ul></ul>
                       </div>
                    </div>
                  </div>
                  <div class="point" style="display: none">
                    <span class="bm-text-header">点位</span>
                    <div class="point-panel bm-select-panel" style="z-index: 2">
                       <span class="select">
                         <span class="text">请选择点位</span>
                         <img src="static/images/angle-down.png">
                       </span>                          
                       <div class="content point-list">
                         <div style="margin: 5px">
                           <input type="text" class="form-control" maxlength="16" placeholder="点位名称"/>
                         </div>                  
                         <ul></ul>
                       </div>
                    </div>
                  </div>`;
      that.stage.panel.init("数据绑定",content,500);
      that.stage.panel.confirm(function () {
        that.stage.property.config.bindData = that.bindData;
      })

      let organizPanel = $('.bm-configur-panel').find('.organiz-panel');
      organizPanel.find('.select').on('click',function () {
        $(this).next().toggle();
      });
      organizPanel.find('.content').on('mouseleave',function (e) {
        $(this).hide();
      });

      let devicePanel = $('.bm-configur-panel').find('.device-panel');
      devicePanel.find('.select').on('click',function () {
        $(this).next().toggle();
        $('.device-list input').val('');
        that.createDevice(that.deviceList);
      });
      devicePanel.find('.content').on('mouseleave',function (e) {
        $(this).hide();
      });

      let pointPanel = $('.bm-configur-panel').find('.point-panel');
      pointPanel.find('.select').on('click',function () {
        $(this).next().toggle();
        $('.point-list input').val('');
        that.createPoint(that.points);
      });
      pointPanel.find('.content').on('mouseleave',function (e) {
        $(this).hide();
      });

      if(that.stage.property.bindType == 2) {
        $('.bm-configur-panel').find('.point').show();
      }

      $('.device-list input').on('input propertyChange',function () {
        let text = $(this).val();
        let dataList = []
        that.deviceList.forEach(function (device) {
          if(device.name.indexOf(text)!=-1) {
            dataList.push(device);
          }
        })
        if(text) {
          that.createDevice(dataList);
        }else {
          that.createDevice(that.deviceList);
        }
      })
      that.oList();


		}
	}
  //组织列表
  oList() {
    let that = this;
    that.stage.option.organizList(function(dataList) {
      if(dataList.length>0) {
        if(!that.bindData.orgId) {
          that.bindData.orgId = dataList[0].id;
        }
        that.organizs = dataList;
        that.createOrganiz();
        that.dList()
      }
    })
  }

  createOrganiz() {
	  let that = this;
    let dataList = []
    this.iteration(dataList,0,0);
    dataList.forEach(function (data) {
      let li = $('<li></li>')
      li.data('id', data.id);
      li.attr('title', data.name);
      li.text(data.name);
      li.css({'padding-left': (data.level*20+5)+"px"});
      if(that.bindData.orgId == data.id) {
        $('.organiz-panel').find('.text').text(data.name);
        li.addClass('active')
      }
      li.on('click',function () {
        $(this).addClass('active');
        $(this).siblings().each(function () {
          $(this).removeClass('active');
        });
        $(this).parent().parent().hide();
        let id = $(this).data('id');
        let name = $(this).attr('title');
        that.bindData.orgId = id;
        $('.organiz-panel').find('.text').text(name);
        that.dList();
      });
      $('.bm-select-panel ul').append(li);
    })
  }

  //设备列表
  dList() {
    let that = this;
    let id = that.bindData.orgId;
    if(id) {
      that.stage.option.devicePoints(id,function(deviceList) {
        that.deviceList = deviceList;
        that.createDevice(that.deviceList);
        that.stage.panel.show()
      })
    }
  }

  createDevice(deviceList) {
    $('.device-list ul').html('');
    let that = this;
    if(deviceList) {
      deviceList.forEach(function (device, index) {
        let li = $('<li></li>')
        li.data('id', device.id)
        li.data('points', device.points);
        li.text(that.textFormat(device.name, 16));
        li.attr('title', device.name);
        li.on('click', function () {
          $(this).addClass('active')
          $(this).siblings().each(function () {
            $(this).removeClass('active');
          });
          that.bindData.deviceId = $(this).data('id');
          $(this).parent().parent().hide();
          that.points = $(this).data('points');
          $('.device-panel').find('.text').text($(this).attr('title'));
          that.createPoint(that.points);
        });
        if (that.bindData.deviceId == device.id) {
          li.addClass('active');
          that.points = device.points;
          $('.device-panel').find('.text').text(device.name);
          that.createPoint(that.points);
        }
        $('.device-list ul').append(li);
      })
    }
  }

  createPoint(points) {
    let that = this;
    $('.point-list ul').html('');
    let isSelected = true;
	  points.forEach(function (point,index) {
      let li = $('<li></li>')
      li.data('id', point.id)
      li.text(point.name);
      li.on('click', function () {
        $(this).parent().parent().hide();
        $('.point-panel').find('.text').text($(this).text());
        that.bindData.devicePoint = $(this).data('id');
        $(this).siblings().each(function () {
          $(this).removeClass('active');
        });
      });
      if(that.bindData.devicePoint==point.id) {
        li.addClass('active')
        $('.point-panel').find('.text').text(point.name);
        isSelected = false;
      }
      $('.point-list ul').append(li);
    })

    if(isSelected) {
      $('.point-list li').each(function (index) {
        $(this).removeClass('active');
        if(index==0) {
          $(this).addClass('active')
          $('.point-panel').find('.text').text($(this).text())
          that.bindData.devicePoint = $(this).data('id');
        }
      })
    }
  }


  iteration(dataList,pid,level) {
	  let that = this;
    that.organizs.forEach(function (data) {
      if(pid==data.pid) {
        data.level = level;
        dataList.push(data);
        that.iteration(dataList,data.id,level+1);
      }
    })
  }

	textFormat(text,length) {
	  return text.length>length?text.substr(0,length)+"...":text;
  }
}

export default BindData;
