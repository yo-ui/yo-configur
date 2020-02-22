import Spirit from '@/core/Spirit.js'

/**
 * 饼图
 */
class PieChart extends Spirit {

	constructor(x=0, y=0,width=300,height=300) {
        super(x, y);
	    this.title = "饼图";
	    this.className = "PieChart";
	    this.width = width;
	    this.height = height; 
	    this.minWidth = 300;   
	    this.minHeight = 300;
	    this.moveType = 0;
	    this.linkage = true;
	    this.config = {
	    	option : {			  
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    calculable : true,
			    series : [
			        {
			            name:'',
			            type:'pie',
			            radius : [40, 80],
			            center : ['50%', '50%'],
			            roseType : 'radius',
			            label: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: true
			                }
			            },
			            lableLine: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: true
			                }
			            },
			            data:[
			                {value:50, name:'rose1'},
			                {value:15, name:'rose2'},
			                {value:35, name:'rose3'},
			                {value:25, name:'rose4'},
			            ]
			        },
			       
			    ]
			}
	    }
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:0;border:1px solid transparent;">
		        <div id="${this.id}_chart" style="width:${this.width}px;height:${this.height}px;"></div>
		        </div>`)
		return div;
	}

	arrangement(stage) {		
		stage.element.append(this.template());
		this.myChart = echarts.init(document.getElementById(this.id+"_chart"));
        this.myChart.setOption(this.config.option);
	}

	getEl() {
		return $('#'+this.id);
	}
	
	init(config) {
		this.config = config; 
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

export default PieChart;
