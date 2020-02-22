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
	    this.moveType = 4;
	    this.linkage = false;
	    this.isBind = true;
	    this.bindType = 2;
	    this.config = {
	    	bindPoint: {
    	        id:'',
    	        unit:'',
    	        startTime:'',
    	        endTime:''}
	    }
	    this.option = {
		    color: ['#3398DB'],
		    tooltip : {
		        trigger: 'axis',
		        formatter: "{b}<br/>{c} ",
		    },
		    grid: {
		        left: '3%',
		        right: '3%',
		        bottom: '10px',
		        top: '10px',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value'
		        }
		    ],
		    series : [
		        {
		            name:'',
		            type:'line',
		            data:[1, 2, 3, 4, 5, 6, 7]
		        }
		    ]
	    }
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:3;border:1px solid transparent;">
				        <div style="width:${this.width-2}px;height:${this.height-2}px;border: 1px solid #ddd;background-color: #fff;">
				            <div class="chart-title" style="height:30px;line-height:30px;background-color: #f5f5f5;padding-left:5px">标题</div>
				            <div id="${this.id}_chart" style="width:100%;height:calc(100% - 30px)"></div>
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
	
	init(config) {
		let that = this;
		this.config = config; 
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
					timeList.push(new Date(item.time).Format("hh:mm:ss"));
					valueList.push(parseFloat(item.value));
				});
				that.option.xAxis[0].data = timeList;
				that.option.series[0].data = valueList;
				that.option.series[0].name = data.descr;
				that.option.tooltip.formatter = "{a}<br/>{b} {c} "+config.bindPoint.unit
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
	
	refresh() {
		/**let that = this;
		this.count= 0;
        setTimeout(() => {
            if(this.count==0) {  
                this.myChart.resize();
            }
            this.count++;
        }, 50)**/
       //this.config.option.color = ['#2398DB']
       //this.myChart.setOption(this.config.option);
       this.chart.resize();
	}
	
	toJson() {
		let json = {
			title: this.title,
			className: this.className, 
			moveType: this.moveType,
			minWidth: this.minWidth,
			isBind: this.isBind,
		};
		return Object.assign(super.toJson(),json);
	}	
}

export default LineChart;
