import Spirit from '@/core/Spirit.js'

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
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
		    grid: {
		        left: '10%',
		        right: '5%',
		        bottom: '20px',
		        top: '40px',
		    },
		    xAxis : [{
		        type : 'category',
					  boundaryGap: false,
            data : ['08:01','08:02','08:03','08:04','08:05','08:06','08:07','08:08','08:09'],
		        }
		    ],
		    yAxis : [{type: 'value',name:''}],
		    series : [{
            name: '正向有功电量',
            type: 'line',
            stack: '总量',
            data: [1,2,3,4,1,3,8,10,8]
          }
		    ]
	    }

    this.isLast = false;
	}

	template() {
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
				        <div style="width:${this.width}px;height:${this.height}px;">
                  <div style="height: 100%">
                    <div id="${this.id}_chart" style="width:100%;height:100%"></div>
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
          if(value==point.id&&lastTime!=point.time) {
            timeList.push(point.time);
            valueList.push(point.value);
            that.option.xAxis[0].data = timeList;
            that.option.series[0].data = valueList;
            that.chart.setOption(that.option);
            that.chart.resize();
          }
        })
      }else {
        this.isLast = true;
        let select = $('#'+that.id).find('.bm-select');
        device.points.forEach(function(point,index) {
          if(point.id!="err") {
            let option = $(`<option>${point.name}</option>`)
            option.val(point.id);
            select.append(option)
          }
        })
        that.devicePointHstData();
        select.on('change',function () {
          that.devicePointHstData();
        });
      }
    }
	}

  devicePointHstData() {
	  let that = this;
    let deviceId = that.config.bindData.deviceId
    let point = $('#'+that.id).find('.bm-select').val();
    if(deviceId&&point) {
      let timeList = [];
      let valueList = [];
      let startTime = new Date().Format("yyyy-MM-dd 00:00");
      let endTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
      this.stage.option.devicePointHstData(deviceId,point,startTime,endTime,function(data) {
        data.dataList.forEach(function(item) {
          timeList.push(item.time);
          valueList.push(parseFloat(item.value));
        });
        that.option.xAxis[0].data = timeList;
        that.option.series[0].data = valueList;
        that.option.series[0].name = data.name;
        that.option.tooltip.formatter = "{b}<br/>{c}";
        that.chart.setOption(that.option);
        that.chart.resize();
        $('#'+that.id).find('.chart-name').text(data.name);
      });
    }
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
