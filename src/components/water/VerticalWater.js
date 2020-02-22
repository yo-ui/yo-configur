import Spirit from '@/core/Spirit.js'

/**
 * 水管（垂直）
 */
class VerticalWater extends Spirit {

	constructor(x=10, y=10,width,height) {
        super(x, y);
	    this.title = "水管（垂直）";
	    this.className = "VerticalWater";
	    this.height = height;
	    this.width = 10;
	    this.moveType = 3;
	    this.minHeight = 10;
	}

	template(){
		return `<div id="${this.id}" style="position:absolute;left:${this.x}px;top: ${this.y}px;z-index:2;border:1px solid transparent">
		        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
		        width="10" height = "${this.height}" xml:space="preserve">
				<linearGradient id="XMLID_V_" gradientUnits="userSpaceOnUse" x1="-149.4816" y1="-983.9756" x2="-149.4816" y2="-989.9756" gradientTransform="matrix(-4.489659e-011 -1 1 -4.489659e-011 991.9756 -144.4816)">
					<stop  offset="0" style="stop-color:#777C7F"/>
					<stop  offset="0.5" style="stop-color:#FFFFFF"/>
					<stop  offset="1" style="stop-color:#777C7F"/>
				</linearGradient>
				<rect id="XMLID_551_" x="2" y="0" style="fill:url(#XMLID_V_)" width="6" height="${this.height}"/>
				</svg></div>`;
	}
	
	transform() {
		$('#'+this.id).css({top:this.y});
		$('#'+this.id).find("svg").css({height:this.height});
		$('#'+this.id).find("rect").css({height:this.height});
	}

	toJson(){
		let json = {
			title:this.title,
			className:this.className,			
		};
		return Object.assign(super.toJson(),json);
	}
}

export default VerticalWater;
