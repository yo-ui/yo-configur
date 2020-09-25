import Spirit from './../../core/Spirit'
import Toast from "../../core/Toast";
import AnimationPanel from "../../core/AnimationPanel";

/**
 * 显示器
 */
class Display extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.name = "显示器";
	    this.className = "Display";
	    this.width = width;
	    this.height = height;
	    this.moveType = 0;
      this.linkage = false;
	    this.isBind = true;
	    this.bindType = 2;
	    this.zIndex = 3;
	    this.config = {
	      bindData: {orgId:'',deviceId:'',devicePoint:''},
        animation: {type: 1,text: '赋值',point: '',name: ''}
	    }
	}

	template(){
		let content = `
		      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}" height="${this.height}"
               viewBox="0 0 89 43" xml:space="preserve" preserveAspectRatio="none">
            <style type="text/css">
              .display-st0{fill:#FFFFFF;}
              .display-st1{fill:#DFE3E8;}
              .display-st2{fill:#C2C8CE;}
              .display-st3{fill:url(#display_4_);}
              .display-st4{fill:#9DA1A5;}
              .display-st5{fill:#848776;}
            </style>
            <g>
              <rect id="XMLID_656_" x="1" y="4.1" class="display-st0" width="79.5" height="38"/>
              <path id="XMLID_653_" class="display-st1" d="M81.5,43.1H0v-40h81.5V43.1z M2,41.1h77.5v-36H2V41.1z"/>
              <polygon id="XMLID_652_" class="display-st2" points="81.5,3.1 0,3.1 8.2,0 88.7,0 	"/>
              <linearGradient id="display_4_" gradientUnits="userSpaceOnUse" x1="85.1155" y1="43.0819" x2="85.1155" y2="0">
                <stop  offset="0" style="stop-color:#C2C8CE"/>
                <stop  offset="1" style="stop-color:#848689"/>
              </linearGradient>
              <path id="XMLID_1_" class="display-st3" d="M88.7,40l-7.2,3.1v-40L88.7,0V40z"/>
            </g>
            <g>
              <path id="XMLID_10_" class="display-st4" d="M76.5,37.1H5v-5h71.5V37.1z"/>
            </g>
            <g >
              <g id="XMLID_647_">
                <rect id="XMLID_651_" x="6.5" y="8.5" class="display-st5" width="69" height="19"/>
                <path id="XMLID_648_" class="st6" d="M76.5,28.5h-71v-21h71V28.5z M7.5,26.5h67v-17h-67V26.5z"/>
              </g>
            </g>
            </svg>
            <div style="
                position: absolute;
                top: ${this.height*0.2-1}px;
                left: ${this.width*0.1}px;
                width: ${this.width*0.75}px;
                height: 24px;
                text-align: center">
                <span class="value" style="
                  font-weight:bold;
                  font-family: lcdD;
                  font-size: 18px;
                  margin-right: -3px">00.00</span>      
                <small class="unit" style="
                  display: inline-block;
                  text-align:center;
                  font-size: 12px;color: #ddd;
                  transform: scale(0.7);             
                  vertical-align: middle;"></small>             
            </div>
         </div>`;
		return super.template().html(content);
	}

	//
	reveal(device,config) {
		let that = this;
		if(device) {
			device.points.forEach(function(point) {
				if(that.config.animation.point==point.id) {
				  $('#'+that.id).find('.value').text(parseFloat(point.value));
          $('#'+that.id).find('.unit').text(point.unit);
          $('#temp_value').html($('#'+that.id).find('div').html());
          let width = $('#temp_value').width()
          $('#'+that.id).find('svg').css({width: width/0.75+"px"});
          $('#'+that.id).find('div').css({left: width*0.12+"px",width: width/0.98+"px"});
				}
			})
		}
	}

  renderer() {
    let that = this;
    super.renderer();
    let html = `<div class="bm-tree">动画</div>
                <div class="bm-style">
                  <div class="text">${this.config.animation.text}：</div>
                  <div class="value">
                    <span class="variable"></span>
                    <i class="fa fa-edit" title="设置赋值变量"></i>
                  </div>
                </div>`;
    $('#configur_property').append(html);

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
          device.points.forEach(function (point) {
            let option = $(`<option>${point.name}</option>`);
            option.val(point.id);
            $('.bm-configur-panel').find('[name=point]').append(option);
          })
        });
      }
      let value = that.config.animation.point;
      $('.bm-configur-panel').find('[name=point]').val(value);
      that.stage.panel.confirm(function () {
        let element = $('.bm-configur-panel').find('[name=point]');
        let value = element.val();
        let name = element.find("option:selected").text()
        that.config.animation.point = value;
        that.config.animation.name = name;
        $('#configur_property').find('.variable').text(name+"("+value+")");
      })
    })

  }

	toJson() {
		let json = {
			className: this.className,
			moveType: this.moveType,
			minWidth: this.minWidth,
			isBind: this.isBind,
			zIndex: this.zIndex,
		};
		return Object.assign(super.toJson(),json);
	}
}

export default Display;
