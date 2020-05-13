import Spirit from '@/core/Spirit.js'

/**
 * 地图
 */
class Map extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.title = "地图";
	    this.className = "Map";
	    this.width = width;
	    this.height = height; 
	    this.minWidth = 50;   
	    this.minHeight = 50;
	    this.moveType = 4;
	    this.linkage = false;
	    this.isMove = true;
	    this.zIndex = 0;
	    this.config = {lng: 116.3964,lat: 39.9093,zoom: 15}
	}

	template(){
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;border:1px solid transparent;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
		        <div id="${this.id}_map" style="width:${this.width}px;height:${this.height}px;"></div>
		        <div class="images-shade" style="position:absolute;top:0;width:${this.width}px;height:${this.height}px;"></div>
		        </div>`)
		return div;
	}

	arrangement(stage) {
		let that = this;
		this.stage = stage;
		stage.element.append(this.template());
		that.map = new AMap.Map(this.id+"_map");
	}

	refresh() {
		this.map.panTo([this.config.lng, this.config.lat]);
		this.map.setZoom(this.config.zoom);
	}
	
	toJson() {
		let json = {
			title: this.title,
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
		let html = $(`<div class="bm-tree">${that.title}</div>
			<div>
				<div class="bm-cell no-hover">
					<div class="bm-cell__title">
						<input type="text" class="form-control map-s" style="display: none" placeholder="定位"/>
					</div>							
				</div>	
				<div class="bm-cell no-hover">
					<div class="bm-cell__title">
						<div class="bm-kv">
							<span class="bm-kv__text">lng：</span>
							<span class="bm-kv__value map-lng">${that.config.lng}</span>
						</div>
					</div>							
				</div>
				<div class="bm-cell no-hover">
					<div class="bm-cell__title">
						<div class="bm-kv">
							<span class="bm-kv__text">lat：</span>
							<span class="bm-kv__value map-lat">${that.config.lat}</span>
						</div>
					</div>							
				</div>
				<div class="bm-cell no-hover">
					<div class="bm-cell__title">
						<div class="bm-kv">
							<span class="bm-kv__text">zoom：</span>
							<span class="bm-kv__value map-zoom">${that.config.zoom}</span>
						</div>
					</div>							
				</div>							                     	                
			</div>`);

		$('#configur_property').append(html);

		if(this.isMove) {
			$('#configur_property').find('.map-s').show()
		}else {
			$('#configur_property').find('.map-s').hide()
		}

		AMap.plugin('AMap.Geocoder',function() {
			let geocoder = new AMap.Geocoder({});

			$('#configur_property').find('.map-s').on('input propertychange',function () {
				let address = $(this).val();
				geocoder.getLocation(address,function(status,result) {
					if(status=='complete'&&result.geocodes.length){
						that.map.setZoom(that.config.zoom);
						that.config.lng = result.geocodes[0].location.lng;
						that.config.lat = result.geocodes[0].location.lat;
						$('#configur_property').find('.map-lng').text(that.config.lng);
						$('#configur_property').find('.map-lat').text(that.config.lat);
						$('#configur_property').find('.map-zoom').text(that.config.zoom);
						that.map.panTo([that.config.lng, that.config.lat]);
					}
				})
			})
		});
	}	
}

export default Map;
