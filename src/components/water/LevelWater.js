import Spirit from '@/core/Spirit.js'

/**
 * 水管（水平）
 */
class LevelWater extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "水管（水平）";
	    this.className = "LevelWater";
	    this.width = width;
	    this.height = 10;
	    this.moveType = 2;
	    this.minWidth = 10;
	}

	template(){
		return `<div id="${this.id}" class="configur-spirit" style="position:absolute;left:${this.x}px;top: ${this.y}px;line-height:10px;z-index:2;border:1px solid transparent">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${this.width}"  height="10" xml:space="preserve">
				<linearGradient id="XMLID_U_" gradientUnits="userSpaceOnUse" x1="-149.4816" y1="-983.9756" x2="-149.4816" y2="-989.9756" gradientTransform="matrix(-1 0 0 -1 -144.4816 -981.9756)">
					<stop  offset="0" style="stop-color:#777C7F"/>
					<stop  offset="0.5" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#777C7F"/> 
				</linearGradient>
				<rect id="XMLID_551_" x="0" y="2.5" style="fill:url(#XMLID_U_)" width="${this.width}" height="6"/>
				</svg></div>`;
	}
	
	transform() {
		$('#'+this.id).css({left:this.x});
		$('#'+this.id).find("svg").css({width:this.width});
		$('#'+this.id).find("rect").css({width:this.width});
	}

	toJson(){
		let json = {
			title:this.title,
			className:this.className,
			
		};
		return Object.assign(super.toJson(),json);
	}
}

export default LevelWater;
