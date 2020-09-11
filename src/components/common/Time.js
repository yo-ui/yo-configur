import Spirit from '@/core/Spirit'
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
	    this.zIndex = 1;
      this.config = {
        bindData: {orgId: '', deviceId: '', devicePoint: ''},fontSize: 15,color:'#000'
      }
	}

	template(){
		let html = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">		                
                  <div style="
                    height: ${this.height}px;
                    width: ${this.width}px;
                    user-select: none;
                    "><span style="font-size: ${this.config.fontSize}px;"></span>           
                  </div>	
                </div>`)
		return html;
	}

  arrangement(stage) {
	  let that = this;
    that.stage = stage;
    stage.element.append(that.template());
    that.text()
    setInterval(() => {
      that.text()
    }, 1000);
  }

  text() {
    var date = new Date();
    let year = date.getFullYear();
    let month = Number(date.getMonth())+1;
    if(month<10) {
      month = "0"+month;
    }
    let day = Number(date.getDate());
    if(day<10) {
      day = "0"+day;
    }
    let hour = Number(date.getHours());
    if(hour<10) {
      hour = "0"+hour;
    }
    let minute = Number(date.getMinutes());
    if(minute<10) {
      minute = "0"+minute;
    }
    let second = Number(date.getSeconds());
    if(second<10) {
      second = "0"+second;
    }
    $('#'+this.id).find('span').text(year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second);
  }

  refresh() {
    $('#'+this.id).find('span').css({color:this.config.color,'font-size':this.config.fontSize+"px"});
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
    let html = `<div class="bm-tree">字体</div>         
                  <div class="bm-cell no-hover">
                    <div class="bm-cell__title">
                      <div>字体颜色</div>
                      <input class="text-color" title="字体颜色" />
                    </div>													
                  </div>    
                <div class="bm-cell no-hover">
                  <div class="bm-cell__title">
                    <div>字体大小</div>
                    <select class="bm-select" name="textFS" title="字体大小"></select>	
                  </div>							
                </div>`;
    $('#configur_property').append(html);
    let dataList = [11,13,14,15,16,18,24,30]
    let element = $('#configur_property').find('[name=textFS]');
    dataList.forEach(function(data) {
      let option = $('<option></option>')
      option.val(data)
      option.text(data)
      element.append(option)
    });

    element.val(this.config.fontSize)
    element.on('change',function () {
      let property = that.stage.property;
      property.config.fontSize = $(this).val();
      $('#'+property.id).find('span').css({'font-size':property.config.fontSize+"px"});
      $('#temp_value').html($('#'+property.id).find('div').html());
      let width = $('#temp_value').width()+2;
      let height = $('#temp_value').height();
      $('.resize-panel').css({width,height});
      $('#'+property.id).find('div').css({width,'line-height': height+"px",height: height+"px"});
      property.height = height;
      property.width = width;
    });
	}
}

export default Time;
