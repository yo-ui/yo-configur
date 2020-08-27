import Spirit from '@/core/Spirit.js'

/**
 * 地图
 */
class Map extends Spirit {

	constructor(x=0, y=0,width,height) {
        super(x, y);
	    this.name = "地图";
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
		let div = $(`<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index: ${this.zIndex};transform: rotate(${this.rotate}deg">
		        <div class="map" style="width:${this.width}px;height:${this.height}px;">
		           <div style="border: 1px solid #f5f5f5;height: calc(100% - 2px)">
                  <div id="${this.id}_map" style="width: 100%;height: 100%"></div>
               </div>
            </div>		     	        
		        <div class="images-shade" style="position:absolute;top:0;width:${this.width}px;height:${this.height}px;"></div>
		        </div>`)
		return div;
	}

	arrangement(stage) {
		this.stage = stage;
		stage.element.append(this.template());
    this.map = new AMap.Map(this.id+"_map");
    this.refresh();
	}

	refresh() {
	  let that = this;
    this.map.panTo([this.config.lng, this.config.lat]);
    this.map.setZoom(this.config.zoom);
    that.map.on('zoomend',function () {
      let zoom = that.map.getZoom();
      let lng = that.map.getCenter().lng;
      let lat = that.map.getCenter().lat;
      that.site(lng,lat,zoom)
    });

    that.map.on('moveend',function () {
      let zoom = that.map.getZoom();
      let lng = that.map.getCenter().lng;
      let lat = that.map.getCenter().lat;
      that.site(lng,lat,zoom)
    });
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
		let html = $(`<div class="bm-tree">地图<div class="all" title="充满画布"><i class="fa fa-all"></i></div></div>
				<div class="bm-cell no-hover">
					<div class="bm-cell__title">
						<input type="text" class="form-control map-search" placeholder="定位"/>
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
				</div>`);

		$('#configur_property').append(html);

    $('#configur_property').find('.all').on('click',function () {
      let width = that.stage.width;
      let height = that.stage.height;
      $('.resize-panel').css({left:-2,top:-2,width,height})
      $('#'+that.stage.property.id).find('.map').css({width,height});
      that.stage.property.x = 0;
      that.stage.property.y = 0;
      that.stage.property.width = width;
      that.stage.property.height = height;
    });

		AMap.plugin('AMap.Geocoder',function() {
			let geocoder = new AMap.Geocoder({});
			$('#configur_property').find('.map-search').on('input propertychange',function () {
				let address = $(this).val();
				geocoder.getLocation(address,function(status,result) {
					if(status=='complete'&&result.geocodes.length){
					  let lng = result.geocodes[0].location.lng;
					  let lat = result.geocodes[0].location.lat;
					  let zoom = that.config.zoom;
						that.map.setZoom(zoom);
						that.site(lng,lat,zoom)
						that.map.panTo([lng,lat]);
					}
				})
			})
		});
	}

	site(lng,lat,zoom) {
    $('#configur_property').find('.map-lng').text(lng);
    $('#configur_property').find('.map-lat').text(lat);
    $('#configur_property').find('.map-zoom').text(zoom);
    this.config.lng = lng;
    this.config.lat = lat;
    this.config.zoom = zoom;
  }
}

export default Map;
