import Spirit from '@/core/Spirit'

/**
 * 监控画面
 */
class Monitor extends Spirit {

	constructor(x=0, y=0,width=400,height=200) {
        super(x, y);
	    this.name = "监控画面";
	    this.className = "Monitor";
	    this.width = width;
	    this.height = height;
	    this.minWidth = 400;
	    this.minHeight = 200;
		  this.zIndex = 3;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isLink = true;
	    this.isBind = true;
	    this.config = {bindData: {orgId:'',deviceId:'',devicePoint:''}};
      this.isLast = false;
	}

	template() {
		return $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg)">
				        <div style="width:${this.width}px;height:${this.height}px;">
                      <div id="${this.id}_monitor" style="width:100%;height:100%">
                        <div style="position: absolute;width: 100%;height: 100%;background-color: #000;">
                          <img src="static/images/stop.png" 
                          style="position: absolute;width: 60px;top: 50%;left: 50%;margin-left: -30px;margin-top: -30px">&nbsp;</div>
                        </div>                   
				        </div>
			        </div>`)
	}

	arrangement(stage) {
		this.stage = stage;
		stage.element.append(this.template());
	}

	initialize() {
	  let that = this;
	  let deviceId = this.config.bindData.deviceId;
	  if(deviceId) {
      this.stage.option.token(deviceId, function(message) {
        let accessToken = message.accessToken;
        let serial = message.serial;
        let url = "ezopen://open.ys7.com/"+serial+"/1.live";
        this.decoder = new EZUIKit.EZUIPlayer({
          id: that.id+"_monitor",
          width: that.width,
          height: that.height,
          url: url,
          accessToken: accessToken,
          decoderPath: 'static/js',
          autoplay: true,
        });
      })
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
		return Object.assign(super.toJson(), json);
	}
}

export default Monitor;
