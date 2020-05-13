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
	    this.minHeight = 100;
		this.zIndex = 3;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isBind = true;
	    this.bindType = 2;
	    this.bindDevice = {}
	    this.config = {
	    	bindPoint: {
    	        id:'',
    	        unit:'',
    	        startTime:'',
    	        endTime:''}
	    }
	    this.option = {
	    	title: {
				text: '时间轴折线图实例',
				padding: 10
			},
		    color: ['#3398DB'],
		    tooltip : {
		        trigger: 'axis',
		    },
			legend: {
				data: ['总量']
			},
		    grid: {
		        left: '5%',
		        right: '5%',
		        bottom: '10px',
		        top: '50px',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
					boundaryGap: false,
		            data : ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05', '2020-01-06', '2020-01-07'],
		        }
		    ],
		    yAxis : [
		        {
					type: 'value'
		        }
		    ],
		    series : [
		        {
					name: '正向有功电量',
					type: 'line',
					stack: '总量',
					data: [120, 132, 101, 134, 90, 230, 210]
		        }
		    ]
	    }
	}

	template() {
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
				        <div style="width:${this.width-2}px;height:${this.height-2}px;border: 1px solid #ddd;background-color: #fff;">
				            <div id="${this.id}_chart" style="width:100%;height:100%"></div>
				        </div>
			        </div>`)
		return div;
	}

	arrangement(stage) {
		let that = this;
		this.stage = stage;
		stage.element.append(this.template());
		this.chart = echarts.init(document.getElementById(this.id+"_chart"));		
        this.chart.setOption(this.option);
	}

	refresh() {
		let that = this;
		if(this.config.bindPoint.id) {			
			let timeList = [];
			let valueList = [];
			let deviceId = this.bindDevice.id;
			let point = this.config.bindPoint.id;
			let startTime = new Date().Format("yyyy-MM-dd 00:00");
			let endTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
			this.stage.option.devicePointHstData(deviceId,point,startTime,endTime,function(data) {
				$('#'+that.id).find('.chart-title').text(data.name);
				data.dataList.forEach(function(item) {
					timeList.push(item.time);
					valueList.push(parseFloat(item.value));
				});
				that.option.xAxis[0].data = timeList;
				that.option.series[0].data = valueList;
				that.option.series[0].name = data.descr;
				that.option.tooltip.formatter = "{a}<br/>{b} {c} "+that.config.bindPoint.unit
	            that.chart.setOption(that.option);
	            that.chart.resize();	            
			});
		}
	}
	
	reveal(device,config) {
		let that = this;
		let timeList = that.option.xAxis[0].data;
		let valueList = that.option.series[0].data;
		device.points.forEach(function(point) {
			if(that.config.bindPoint.id==point.id) {
				let time = new Date(point.time).Format("hh:mm:ss");
				let value = parseFloat(point.value);
				if(time!=timeList[timeList.length-1]) {
					timeList.push(time);
					valueList.push(value);
					that.option.xAxis[0].data = timeList;
				    that.option.series[0].data = valueList;
				    that.chart.setOption(that.option);
	                that.chart.resize();
				}
			}
		});
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
