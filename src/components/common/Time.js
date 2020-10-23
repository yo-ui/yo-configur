import Spirit from './../../core/Spirit'
/**
 * 背景
 */
class Time extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "时间";
	    this.className = "Time";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 50;
      this.minHeight = 30;
	    this.moveType = 0;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 2;
        this.config = {
	        bindData: {orgId: '', deviceId: '', devicePoint: ''},type: 1,
	        font: {size: 15,color: '#108cee'}
	    }
	}

	template(){
		let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width+1}px;
                    user-select: none;
                    "><span style="font-size: ${this.config.font.size}px;"></span>           
                  </div>	
                </div>`)
		return html;
	}

  arrangement(stage) {
	  let that = this;
    that.stage = stage;
    stage.element.append(that.template());
  }

  formatTime() {
	  let time = $('#'+this.id).find('span');
    switch(Number(this.config.type)) {
      case 1:time.text(this.year()+"-"+this.month()+"-"+this.day()+" "+this.hour()+":"+this.minute()+":"+this.second());break;
      case 2:time.text(this.year()+"-"+this.month()+"-"+this.day()+" "+this.hour()+":"+this.minute());break;
      case 3:time.text(this.year()+"-"+this.month()+"-"+this.day());break;
      case 4:time.text(this.year()+"-"+this.month());break;
      case 5:time.text(this.year());break;
      case 6:time.text(this.month()+"-"+this.day());break;
      case 7:time.text(this.month());break;
      case 8:time.text(this.day());break;
      case 9:time.text(this.hour()+":"+this.minute()+":"+this.second());break;
      case 10:time.text(this.hour()+":"+this.minute());break;
      case 11:time.text(this.hour());break;
      case 12:time.text(this.minute()+":"+this.second());break;
      case 13:time.text(this.minute());break;
      case 14:time.text(this.second());break;
    }
  }

  year() {
    var date = new Date();
	  return date.getFullYear();
  }

  month() {
    var date = new Date();
    let month = Number(date.getMonth())+1;
    if(month<10) {
      month = "0"+month;
    }
    return month;
  }

  day() {
    var date = new Date();
    let day = Number(date.getDate());
    if(day<10) {
      day = "0"+day;
    }
    return day;
  }

  hour() {
    var date = new Date();
    let hour = Number(date.getHours());
    if(hour<10) {
      hour = "0"+hour;
    }
    return hour;
  }

  minute() {
    var date = new Date();
    let minute = Number(date.getMinutes());
    if(minute<10) {
      minute = "0"+minute;
    }
    return minute;
  }

  second() {
    var date = new Date();
    let second = Number(date.getSeconds());
    if(second<10) {
      second = "0"+second;
    }
    return second;
  }

  refresh() {
	  let that = this;
    that.formatTime();
    setInterval(() => {
      that.formatTime();
    }, 1000)
    $('#'+this.id).find('span').css({color:this.config.font.color,'font-size':this.config.font.size+"px"});
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
	    let html = $(`<div class="bm-tree"><i class="fa fa-down"></i>&nbsp;字体</div>   
	                  <div class="bm-style">
	                    <div class="text">格式：</div>	
	                    <div class="value">
	                      <select class="bm-select" name="format">
	                        <option value="1">年月日时分秒</option>
	                        <option value="2">年月日时分</option>
	                        <option value="3">年月日</option>
	                        <option value="4">年月</option>
	                        <option value="5">年</option>
	                        <option value="6">月日</option>
	                        <option value="7">月</option>
	                        <option value="8">日</option>
	                        <option value="9">时分秒</option>
	                        <option value="10">时分</option>
	                        <option value="11">时</option>
	                        <option value="12">分秒</option>
	                        <option value="13">分</option>
	                        <option value="14">秒</option>
	                      </select>	
	                    </div>						
	                  </div>      
	                  <div class="bm-style">
	                    <div class="text">颜色：</div>			
	                    <div class="value"><input type="color" name="textColor" title="字体颜色"/></div>										
	                  </div>    
	                  <div class="bm-style">
	                    <div class="text">大小：</div>	
	                    <div class="value"><select class="bm-select" name="textFS" title="字体大小"></select>	</div>						
	                  </div>`);
	    $('#configur_property').append(html);
	    let dataList = [11,13,14,15,16,18,24,30]
	    let element = html.find('[name=textFS]');
	    dataList.forEach(function(data) {
	      let option = $('<option></option>');
	      option.val(data);
	      option.text(data);
	      element.append(option)
	    });
	    html.find("[name=textColor]").val(that.config.font.color)
	    html.find("[name=textColor]").on('change',function() {
	    	that.config.font.color = $(this).val();
	    	$('#'+that.id).find('span').css({color:that.config.font.color});
	    })

	    element.val(this.config.font.size)
	    element.on('change',function () {
	      that.text();
	    });

	    let format = html.find('[name=format]');
	    format.val(that.config.type);
	    format.on('change',function () {
	      let value = $(this).val();
	      that.config.type = value;
	      that.formatTime();
	      that.text();
	    });
	}

	text() {
	    let that = this;
      let property = that.stage.property;
	    property.config.font.size = $('#configur_property').find('[name=textFS]').val();
	    $('#'+property.id).find('span').css({'font-size':property.config.font.size+"px"});
	    $('#temp_value').html($('#'+property.id).find('div').html());
	    let width = $('#temp_value').width()+2;
	    let height = $('#temp_value').height();
	    $('.resize-panel').css({width,height});
	    $('#'+property.id).find('div').css({width,'line-height': height+"px",height: height+"px"});
	    property.height = height;
	    property.width = width;
  }
}

export default Time;
