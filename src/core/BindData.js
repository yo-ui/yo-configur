/**
 *
 */
class BindData {

	constructor(stage) {
    this.stage = stage;
    this.bindData = {orgId:'',deviceId:'',devicePoint:''}
    this.index = 0;
	}

	create() {
    this.organizs = []
    this.points = []
		let that = this;
		if(that.stage.property) {
      that.bindData = that.stage.property.config.bindData;
		  let content = `<div class="bm-bind">
                        <div class="icon">
                          <span class="active">设备</span><span>组织</span>
                        </div>
                        <div class="text organiz-panel">
                           <input type="search" class="form-control" placeholder="请输入设备名称" maxlength="16"/>
                           <div class="bm-select-panel" style="display: none">
                             <span class="select">
                               <span class="text">请选择组织</span>
                               <span class="icon"><i class="fa fa-down"></i></span>
                             </span>                          
                             <div class="content organiz-list">
                               <ul></ul>  
                             </div>
                           </div>
                        </div>
                        
                     </div>   
                     <div class="bm-line"></div> 
                     <div class="bm-device-point">          
                       <div class="device-list" style="flex: 1;">
                         <ul class="bm-list"></ul>
                         <div></div>
                       </div>
                       <div class="point-list" style="display: none">
                         <ul class="bm-list"></ul>
                       </div>
                     </div>`;
      that.stage.panel.init("数据绑定",content,500);
      that.stage.panel.confirm(function () {
        that.stage.property.config.bindData = that.bindData;
      })

      let panel = $('.bm-configur-panel').find('.organiz-panel');
      panel.find('.select').on('click',function () {
        $(this).next().toggle();
        that.trigger(panel);
      });
      panel.on('mouseleave',function (e) {
        $(this).find('.content').hide();
        that.trigger(panel);
      });

      if(that.stage.property.bindType == 2) {
        $('.bm-configur-panel').find('.point-list').show();
      }

      $('.bm-bind input').on('input propertyChange',function () {
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

      $('.bm-bind .icon span').each(function (index) {
        $(this).data('index', index);
        $(this).on('click',function () {
          $(this).addClass('active');
          $(this).siblings().each(function(){
            $(this).removeClass('active');
          });
          that.index = $(this).data('index');
          if(that.index==0) {
            $('.bm-bind').find('.form-control').show();
            $('.bm-bind').find('.bm-select-panel').hide();
          }else {
            $('.bm-bind').find('.form-control').hide();
            $('.bm-bind').find('.bm-select-panel').show();
          }
        });
      });
      that.oList();
		}
	}

  trigger(panel) {
    if(panel.find('.content').is(':hidden')) {
      panel.find('.icon').html(`<i class="fa fa-down"/>`);
    }else {
      panel.find('.icon').html(`<i class="fa fa-left"/>`);
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
    $('.point-list ul').html('');
    let that = this;
    let isSelected = true;
    if(deviceList) {
      deviceList.forEach(function (device, index) {
        let li = $('<li></li>')
        li.data('id', device.id)
        li.data('points', device.points);
        li.text(that.textFormat(device.name, 16));
        li.attr('title', device.name);
        li.on('click', function() {
          $(this).addClass('active')
          $(this).siblings().each(function () {
            $(this).removeClass('active');
          });
          that.bindData.deviceId = $(this).data('id');
          that.points = $(this).data('points');
          that.createPoint(that.points);
        });
        if (that.bindData.deviceId == device.id) {
          li.addClass('active');
          that.points = device.points;
          that.createPoint(that.points);
          isSelected = false;
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
        that.bindData.devicePoint = $(this).data('id');
        $(this).addClass('active');
        $(this).siblings().each(function () {
          $(this).removeClass('active');
        });
      });
      if(that.bindData.devicePoint==point.id) {
        li.addClass('active')
        isSelected = false;
      }
      $('.point-list ul').append(li);
    })

    if(isSelected) {
      $('.point-list li').each(function (index) {
        $(this).removeClass('active');
        if(index==0) {
          $(this).addClass('active')
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
