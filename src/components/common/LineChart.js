import Spirit from '@/core/Spirit.js'

/**
 * 折线图
 */
class LineChart extends Spirit {

	constructor(x=0, y=0,width=200,height=100) {
        super(x, y);
	    this.title = "折线图";
	    this.className = "LineChart";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 200;
	    this.minHeight = 120;
		  this.zIndex = 3;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isBind = true;
	    this.bindType = 1;
	    this.config = {bindData: {orgId:'',deviceId:'',devicePoint:''}};
	    this.option = {
		    tooltip : {
		        trigger: 'axis',
		    },
		    grid: {
		        left: '5%',
		        right: '5%',
		        bottom: '10px',
		        top: '20px',
		        containLabel: true
		    },
		    xAxis : [{
		        type : 'category',
					  boundaryGap: false,
            data : ['2020-05-01','2020-05-02','2020-05-03','2020-05-04'],
		        }
		    ],
		    yAxis : [{type: 'value'}],
		    series : [{
            name: '正向有功电量',
            type: 'line',
            stack: '总量',
            data: [10,22,33,44]
          }
		    ]
	    }

    this.isLast = false;
	}

	template() {
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
				        <div style="width:${this.width}px;height:${this.height}px;">
				            <div style="border: 1px solid #ddd;height: calc(100% - 2px)">
				            <div style="line-height: 40px;padding-left: 5px;background-color: #F5F5F5">
                      <span class="chart-name">设备</span>
                      <select class="bm-select" style="width: 100px;display: none"></select>
                      <span>实时数据</span>
				            </div>
				            <div id="${this.id}_chart" style="width:100%;height:calc(100% - 40px)"></div>
				            </div>
				        </div>
			        </div>`)
		return div;
	}

	arrangement(stage) {
		this.stage = stage;
		stage.element.append(this.template());
		this.chart = echarts.init(document.getElementById(this.id+"_chart"));
    this.chart.setOption(this.option);
	}

	reveal(device,config) {
    let that = this;
    if(device) {
      $('#'+that.id).find('.bm-select').show();
      if(this.isLast) {
        device.points.forEach(function(point,index) {
          let value = $('#'+that.id).find('.bm-select').val();
          let timeList = that.option.xAxis[0].data;
          let valueList = that.option.series[0].data;
          let lastTime = timeList[timeList.length-1];
          if(value==point.id) {
            let time = new Date(point.time).Format("hh:mm:ss")
            if(lastTime!=time) {
              timeList.push(time)
              that.option.xAxis[0].data = timeList;
              valueList.push(point.value);
              that.option.series[0].data = valueList;
              that.chart.setOption(that.option);
              that.chart.resize();
            }
          }
        })
      }else {
        this.isLast = true;
        device.points.forEach(function(point,index) {
          if(point.id!="err") {
            let option = $(`<option>${point.name}</option>`)
            option.val(point.id);
            $('#'+that.id).find('.bm-select').append(option)
          }
        })
        that.devicePointHstData();
        $('#'+this.id).find('.bm-select').on('change',function () {
          that.devicePointHstData();
        });
      }
    }
	}

  devicePointHstData() {
	  let that = this;
    let deviceId = that.config.bindData.deviceId
    let point = $('#'+that.id).find('.bm-select').val();
    let text = $('#'+that.id).find('.bm-select').text();
    if(deviceId&&point) {
      let timeList = [];
      let valueList = [];
      let startTime = new Date().Format("yyyy-MM-dd 00:00");
      let endTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
      this.stage.option.devicePointHstData(deviceId,point,startTime,endTime,function(data) {
        data.dataList.forEach(function(item) {
          timeList.push(new Date(item.time).Format("hh:mm:ss"));
          valueList.push(parseFloat(item.value));
        });
        that.option.xAxis[0].data = timeList;
        that.option.series[0].data = valueList;
        that.option.series[0].name = data.name;
        that.option.tooltip.formatter = "{b}<br/>{c} "+data.unit;
        that.chart.setOption(that.option);
        that.chart.resize();
        $('#'+that.id).find('.chart-name').text(data.name);
      });
    }
  }

	toJson() {
		let json = {
			title: this.title,
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
