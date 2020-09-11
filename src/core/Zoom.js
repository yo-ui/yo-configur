/**
 * 缩放
 */
class Zoom {

	constructor(stage) {
    this.stage = stage;
		this.ratioIndex = 3;
		this.ratios = [0.2,0.3,0.5,1,1.2,1.5,2]
		$('.main-content').append(Zoom.template())
	}

	//放大
	zoomIn() {
    let that = this;
    let element = $('#configur_stage');
    that.ratioIndex++;
    if(that.ratioIndex<that.ratios.length) {
      element.css('transform','scale('+that.ratios[that.ratioIndex]+")")
      this.stage.location();
    }else {
      that.ratioIndex = that.ratios.length-2;
    }
  }

  //缩小
  zoomOut() {
    let that = this;
    let element = $('#configur_stage');
    that.ratioIndex--;
    if(that.ratioIndex>=0) {
      element.css('transform','scale('+that.ratios[that.ratioIndex]+")")
      that.stage.location();
    }else {
      that.ratioIndex = 0;
    }
  }

	init() {
		let that = this;
    $('.bm-zoom').find('.fa-zoom-in').on('click',function () {
      that.zoomIn();
      that.resetText();
    });
    $('.bm-zoom').find('.fa-zoom-out').on('click',function () {
      that.zoomOut();
      that.resetText();
    });
    that.resetText();
	}


	resetText() {
		let value = this.ratios[this.ratioIndex];
		$('.bm-zoom').find('span').text(value*100+'%');
	}

  zoomText() {
    let value = this.ratios[this.ratioIndex];
    $('.bm-zoom-panel').find('span').text(value*100+'%');
  }

  static template() {
    let html = `<div class="bm-zoom-panel">
                  <div>
                  <div><i class="fa fa-zoom-in"/></div>
                  <span>100%</span>
                  <div><i class="fa fa-zoom-out"/></div>
                  </div>
                 </div>`;
    return html;
  }
}

export default Zoom;
