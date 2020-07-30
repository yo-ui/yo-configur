/**
 * 缩放
 */
class Zoom {
	
	constructor(stage) {
		this.ratioIndex = 3;
		this.ratios = [0.2,0.3,0.5,1,1.2,1.5,2]
		this.stage = stage;
	}
		
	control(type) {
		let that = this;
		let element = $('#configur_stage');
		if(type==1) {
			that.ratioIndex++;
			if(that.ratioIndex<that.ratios.length) {
				let transform = element.css('transform');
				let scale = transform.substring(7,transform.indexOf(','));
				element.css('transform','scale('+that.ratios[that.ratioIndex]+")")
				this.stage.location();
				this.resetText();
			}else {
				that.ratioIndex = that.ratios.length-2;
			}
		}else if(type==2) {
			that.ratioIndex--;
			if(that.ratioIndex>=0) {
				let transform = element.css('transform');
				let scale = transform.substring(7,transform.indexOf(','));
				element.css('transform','scale('+that.ratios[that.ratioIndex]+")")
				that.stage.location();
				this.resetText();
			}else {
				that.ratioIndex = 0;
			}
		}
	}

	init() {
		let that = this;
        $('.bm-zoom img').each(function (index) {
        	$(this).data("value", index+1);
        	$(this).on('click',function () {
                let value = $(this).data("value");
				that.control(value);
			})
		});
        that.resetText();
	}
	
	/**
	 * 重置比例显示
	 */
	resetText() {
		let value = this.ratios[this.ratioIndex];
		$('.bm-zoom').find('span').text(value*100+'%');
	}
}

export default Zoom;