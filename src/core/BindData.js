/**
 *
 */
class BindData {

  constructor(stage) {
    this.stage = stage;
    this.bindData = {orgId:'',deviceId:'',devicePoint:''}
    this.property;
  }

  create(id) {
    this.organizs = []
    this.points = []
    let that = this;
    if(id) {
      that.stage.capacity.forEach(function (c) {
        if(id==c.id) {
          that.property = c;
        }
      })
    }else {
      this.property = this.stage.property;
      console.log(that.property)
    }
    if(that.property) {
      that.bindData = that.property.config.bindData;
      let content = `<div class="bm-area">
                      <span>组织</span>
                      <div>
                        <div class="organiz-panel bm-select-panel" style="z-index: 4">
                           <span class="select">
                             <span class="text">请选择组织</span>
                             <i class="icon fa fa-down"></i>
                           </span>                          
                           <div class="content organiz-list">
                             <ul></ul>  
                           </div>
                        </div>
                      </div>                   
                  </div>     
                  <div class="device">
                    <div class="bm-area">
                      <span>设备</span>
                      <div>
                      <div class="device-panel bm-select-panel" style="z-index: 3">
                       <span class="select">
                         <span class="text">请选择设备</span>
                         <i class="icon fa fa-down"></i>
                       </span>                          
                       <div class="content device-list">
                         <div style="margin: 5px"><input type="text" class="form-control" maxlength="16" placeholder="设备名称"/></div>                  
                         <ul></ul>
                       </div>
                       </div>
                    </div>
                    </div>                
                  </div>
                  `;
      that.stage.panel.init("数据绑定",content,500);
      that.stage.panel.confirm(function () {
        that.property.config.bindData = that.bindData;
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
        that.dList();
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
          $('.device-panel > div').hide();
          $('.device-panel .text').text($(this).attr("title"));
        });
        if (that.bindData.deviceId == device.id) {
          li.addClass('active');
          $('.device-panel .text').text(device.name);
        }
        $('.device-list ul').append(li);
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
