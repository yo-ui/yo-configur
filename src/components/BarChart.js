import Spirit from '@/core/Spirit.js'

/**
 * 柱状图
 */
class BarChart extends Spirit {

	constructor(x=0, y=0,width=400,height=200) {
        super(x, y);
	    this.title = "柱状图";
	    this.className = "BarChart";
	    this.width = width;
	    this.height = height; 
	    this.minWidth = 400;   
	    this.minHeight = 200;
	    this.moveType = 4;
	    this.linkage = false;
	    this.config = {
	    	option : {
			    color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {      
			            type : 'shadow'
			        }
			    },
			    grid: {
			        left: '4%',
			        right: '4%',
			        bottom: '10px',
			        top: '20px',
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
			            type:'bar',
			            barWidth: '60%',
			            data:[1, 2, 3, 4, 5, 6, 7]
			        }
			    ]
		    }
	    }
	    
	    this.count = 0;
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:0;border:1px solid transparent;">
		        <div style="width:${this.width-2}px;height:${this.height-2}px;border: 1px solid #ddd">
		            <div style="height:30px;line-height:30px;background-color: #f5f5f5;padding-left:5px">标题</div>
		            <div id="${this.id}_chart" style="width:100%;height:calc(100% - 30px)"></div>
		        </div>
		        </div>`)
		return div;
	}

	arrangement(stage) {		
		stage.element.append(this.template());
		this.myChart = echarts.init(document.getElementById(this.id+"_chart"));
        this.myChart.setOption(this.config.option);
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
       this.myChart.resize();
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

export default BarChart;
