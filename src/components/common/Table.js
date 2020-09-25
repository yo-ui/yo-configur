import Spirit from './../../core/Spirit'
/**
 * 表格
 */
class Table extends Spirit {

	constructor(x=0,y=0,width,height) {
	    super(x,y);
	    this.name = "表格";
	    this.className = "Table";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 400;
      this.minHeight = 60;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 3;
      this.config = {
        bindData: {orgId: '', deviceId: '', devicePoint: ''},type: 1
      }
	}

	template(){
    let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    overflow: auto">                      
                  </div>	
                </div>`)
    return html;
	}

  refresh() {
    $('#'+this.id).find("div").html('');
    if(this.config.type==1) {
      this.gateway();
    }else if(this.config.type==2) {
      this.device();
    }
  }

  initialize() {
    $("#"+this.id).find('.dataList').html('');
	  let that = this;
    if(this.config.type==1) {
      this.stage.option.gatewayAlarm(function (dataList) {
        let tr = $(`<tr></tr>`);
        dataList.forEach(function (data,index) {
          let tr = $(`<tr></tr>`);
          tr.append(`<td>${index+1}</td>`);
          tr.append(`<td>${data.offlineDate}</td>`);
          tr.append(`<td>${data.offlineTime}</td>`);
          tr.append(`<td>${data.name}</td>`);
          tr.append(`<td>${data.ip}</td>`);
          tr.append(`<td>${data.wip}</td>`);
          tr.append(`<td>${data.site}</td>`);
          $("#"+that.id).find('.dataList').append(tr);
        })
      })
    }else if(this.config.type==2) {
      this.stage.option.deviceAlarm(function (dataList) {
        dataList.forEach(function (data,index) {
          let tr = $(`<tr></tr>`);
          tr.append(`<td>${index+1}</td>`);
          tr.append(`<td>${data.lastTime}</td>`);
          tr.append(`<td>${data.deviceName}</td>`);
          tr.append(`<td>${data.descr}</td>`);
          tr.append(`<td>${data.organizName}</td>`);
          tr.append(`<td>${data.gatewayName}</td>`);
          tr.append(`<td>${data.channelName}</td>`);
          tr.append(`<td>${data.addr}</td>`);
          tr.append(`<td>${data.continue}</td>`);
          $("#"+that.id).find('.dataList').append(tr);
        })
      })
    }
  }

  gateway() {
	  let content = `<table class="table table-hover">
                      <thead>
                        <tr>
                          <th width="50">序号</th>                       
                          <th>离线日期</th>
                          <th>离线时间</th>
                          <th>网关名称</th>
                          <th>网关IP</th>
                          <th>内网IP</th>
                          <th>位置</th>
                        </tr>
                      </thead>
                      <tbody class="dataList"></tbody>
                    </table>`;
	  $('#'+this.id).find("div").html(content);
  }

  device() {
    let content = `<table class="table table-hover">
                      <thead>
                        <tr>
                          <th width="50">序号</th>
                          <th>最近报警时间</th>
                          <th>设备名称</th>
                          <th>报警描述</th>
                          <th>位置</th>
                          <th>网关名称</th>
                          <th>通道名称</th>
                          <th>通讯地址</th>
                          <th>持续时间</th>
                        </tr>
                      </thead>
                      <tbody class="dataList"></tbody>
                    </table>`;
    $('#'+this.id).find("div").html(content);
  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			isMove: this.isMove,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}

	renderer() {
    let that = this;
    super.renderer();
    let html = `<div class="bm-tree">功能</div>
                 <div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <select class="bm-select">
                      <option value="1">网关报警</option>
                      <option value="2">设备报警</option>
                    </select>
                  </div>          						
                 </div>`;
    $('#configur_property').append(html);
    $('#configur_property').find('.bm-select').val(that.config.type);
    $('#configur_property').find('.bm-select').on('change',function () {
      that.config.type = $(this).val();
      that.refresh();
    })
	}
}

export default Table;
