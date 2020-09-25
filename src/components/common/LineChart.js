import Spirit from './../../core/Spirit'
import Toast from "../../core/Toast";
import AnimationPanel from "../../core/AnimationPanel";

/**
 * 折线图
 */
class LineChart extends Spirit {

	constructor(x=0, y=0,width=200,height=100) {
        super(x, y);
	    this.name = "折线图";
	    this.className = "LineChart";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 200;
	    this.minHeight = 80;
		  this.zIndex = 3;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isBind = true;
	    this.bindType = 1;
	    this.config = {
	      bindData: {orgId:'',deviceId:'',devicePoint:''},type:1,
        animation: {type: 1,text: '赋值',point: '',name: ''}}
      this.isLast = false;
	}

	template() {
		let content = `<div style="width:${this.width}px;height:${this.height}px;">
                      <div style="height: 100%">
                        <div id="${this.id}_chart" style="width:100%;height:100%"></div>
                      </div>
                    </div>`
    return super.template().html(content);
	}

	arrangement(stage) {
		this.stage = stage;
		stage.element.append(this.template());
		this.chart = echarts.init(document.getElementById(this.id+"_chart"));
		this.refresh();
	}

  refresh() {
	  this.func();
  }

	func() {
    if(this.config.type==1) {
      this.deviceRealData();
    }else if(this.config.type==2) {
      this.consumption();
    }
  }

  deviceRealData() {
	  let that = this;
    let option = {
      tooltip : {
        trigger: 'axis',
      },
      grid: {
        left: '8%',
        right: '5%',
        bottom: '20px',
        top: '10px',
      },
      xAxis : [{
        type : 'category',
        boundaryGap: false,
        data : ['08:01','08:02','08:03','08:04','08:05','08:06','08:07','08:08','08:09'],
      }],
      yAxis : [{type: 'value',name:''}],
      series : [{
        name: ''+that.config.animation.name,
        type: 'line',
        data: [1,2,3,4,5,6,8,9,10]
      }
      ]
    }
    this.chart.setOption(option);
    this.chart.resize();
  }

  consumption() {
    let option = {
      tooltip : {
        trigger: 'axis',
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '20px',
        top: '10px',
      },
      xAxis : [{
        type : 'category',
        boundaryGap: false,
        data : ['1点','2点','3点','4点','5点','6点','7点','8点','9点'],
      }
      ],
      yAxis : [{type: 'value',name:''}],
      series : [{
        name: '用量',
        type: 'line',
        stack: '总量',
        data: [1,2,3,4,1,3,8,10,8]
      }
      ]
    }
    this.chart.setOption(option);
    this.chart.resize();
  }

  reveal(device,config) {
    let that = this;
    if(device) {
      if(this.isLast) {
        let option = that.chart.getOption();
        device.points.forEach(function(point) {
          let timeList = option.xAxis[0].data;
          let valueList = option.series[0].data;
          let lastTime = timeList[timeList.length-1];
          if(that.config.animation.point==point.id&&lastTime!=point.time) {
            timeList.push(point.time);
            valueList.push(point.value);
            that.chart.setOption(option);
            that.chart.resize();
          }
        })
      }else {
        this.isLast = true;
        that.devicePointHstData();
      }
    }
	}

  devicePointHstData() {
	  let that = this;
    let deviceId = that.config.bindData.deviceId
    let point = that.config.animation.point;
    if(deviceId&&point) {
      let timeList = [];
      let valueList = [];
      let startTime = new Date().Format("yyyy-MM-dd 00:00:00");
      let endTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let option = that.chart.getOption();
      this.stage.option.devicePointHstData(deviceId,point,startTime,endTime,function(data) {
        data.dataList.forEach(function(item) {
          timeList.push(item.time);
          valueList.push(parseFloat(item.value));
        });
        option.xAxis[0].data = timeList;
        option.series[0].data = valueList;
        option.series[0].name = data.name+"("+that.config.animation.name+")";
        option.tooltip.formatter = "{b}<br/>{c}";
        that.chart.setOption(option);
        that.chart.resize();
      });
    }
  }

  renderer() {
    let that = this;
    super.renderer();
    let html  =  `<div class="bm-tree">功能</div>
                   <div class="bm-cell no-hover">
                    <div class="bm-cell__title">
                      <select class="bm-select">
                        <option value="1">设备点位实时数据</option>
                      </select>
                    </div>          						
                   </div>
                   <div class="bm-tree">动画</div>
                    <div class="bm-style">
                      <div class="text">${this.config.animation.text}：</div>
                      <div class="value">
                        <span class="variable"></span>
                        <i class="fa fa-edit" title="设置赋值变量"></i>
                      </div>
                    </div>`;
    $('#configur_property').append(html);

    $('#configur_property').find('.bm-select').val(that.config.type);
    $('#configur_property').find('.bm-select').on('change',function () {
      let value = $(this).val();
      that.config.type = value;
      that.func();
    });

    if(this.config.animation.point) {
      let variable = $('#configur_property').find('.variable');
      variable.text(this.config.animation.name+"("+this.config.animation.point+")");
    }
    let edit = $('#configur_property').find('.fa-edit');
    edit.on("click",function () {
      if(that.config.bindData.deviceId=="") {
        Toast.alert("请先绑定设备！")
        return;
      }
      that.stage.panel.init("动画->赋值",AnimationPanel.pointTemplate(),500);
      that.stage.panel.show();
      let deviceId = that.config.bindData.deviceId;
      if(deviceId) {
        that.stage.option.getDevice(deviceId,function (device) {
          console.log(device);
          device.points.forEach(function (point) {
            let option = $(`<option>${point.name}</option>`);
            option.val(point.id);
            $('.bm-configur-panel').find('[name=point]').append(option);
          })
          let value = that.config.animation.point;
          $('.bm-configur-panel').find('[name=point]').val(value);
        });
      }

      that.stage.panel.confirm(function () {
        let element = $('.bm-configur-panel').find('[name=point]');
        let value = element.val();
        let name = element.find("option:selected").text()
        that.config.animation.point = value;
        that.config.animation.name = name;
        $('#configur_property').find('.variable').text(name+"("+value+")");
        that.func();
      })
    })
  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			isBind: this.isBind,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(),json);
	}
}

export default LineChart;
