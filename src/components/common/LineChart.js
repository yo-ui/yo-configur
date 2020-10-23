import Spirit from './../../core/Spirit'
import Toast from "../../core/Toast";
import AnimationPanel from "../../core/animation/Animation";

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
      this.bindType = 1;
	    this.linkage = false;
	    this.isBind = true;
      this.isLast = false;
      this.isAnimation = true;
	    this.config = {
        bindData: {orgId: '', deviceId: '', devicePoint: ''}, type: 1,
        animations: [{type: 91, text: '值显示->点位', expr: ''}]
      }
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
        name: '',
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

  initialize() {
	  let point;
    let animations = this.config.animations;
    animations.forEach(function (animation) {
      if(animation.type==91) {
        point = animation.expr
      }
    })
    let deviceId = this.config.bindData.deviceId;
    this.devicePointHstData(deviceId,point);
  }

  reveal(device) {
	  //console.log(config);
    let that = this;
    if(device) {
      let point = "";
      let animations = that.config.animations;
      animations.forEach(function (animation) {
        if(animation.type==91) {
          point = animation.expr
        }
      })
      let option = that.chart.getOption();
      device.points.forEach(function(point) {
        let timeList = option.xAxis[0].data;
        let valueList = option.series[0].data;
        let lastTime = timeList[timeList.length-1];
        if(point==point.id&&lastTime!=point.time) {
          timeList.push(point.time);
          valueList.push(point.value);
          that.chart.setOption(option);
          that.chart.resize();
        }
      })
    }
	}

  devicePointHstData(deviceId,point) {
	  let that = this;
    if(deviceId&&point) {
      let timeList = [];
      let valueList = [];
      let startTime = new Date().Format("yyyy-MM-dd 00:00:00");
      let endTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
      let option = that.chart.getOption();
      this.stage.option.devicePointHstData(deviceId,point,startTime,endTime,function(data) {
        console.log(data)
        data.dataList.forEach(function(item) {
          timeList.push(item.time);
          valueList.push(parseFloat(item.value));
        });
        option.xAxis[0].data = timeList;
        option.series[0].data = valueList;
        option.series[0].name = data.name;
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
                   `;
    $('#configur_property').append(html);

    $('#configur_property').find('.bm-select').val(that.config.type);
    $('#configur_property').find('.bm-select').on('change',function () {
      let value = $(this).val();
      that.config.type = value;
      that.refresh();
    });
  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			isBind: this.isBind,
			zIndex: this.zIndex
		};
		return Object.assign(super.toJson(), json);
	}
}

export default LineChart;
