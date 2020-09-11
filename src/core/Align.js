/**
 * 对齐
 */
class Align {

	constructor(stage) {
		this.stage = stage;
	}
	//左对齐
	left() {
		let that = this.stage;
		let x = 0;
		that.selectedList.forEach(function(data,index) {
			if(index==0) {
				x = data.x;
			}else {
				if(data.x<x)x = data.x;
			}
		});
		that.selectedList.forEach(function(data) {
			$("#"+data.id).css({left:x})
			that.capacity.forEach(function(property) {
				if(data.id == property.id) {
					property.x = x;
				}
			})
		});
	}
	//右对齐
	right() {
		let that = this.stage;
		let x = 0;
		that.selectedList.forEach(function(data,index) {
			if(index==0) {
				x = data.x+data.width;
			}else {
				if(data.x+data.width>x)x = data.x+data.width;
			}
		});
		that.selectedList.forEach(function(data) {
			let value = x-(data.x+data.width)
			$("#"+data.id).css({left:data.x+value})
			that.capacity.forEach(function(property) {
				if(data.id == property.id) {
					property.x = data.x+value;
				}
			})
		});
	}
  //上对齐
	up() {
		let that = this.stage;
		let y = 0;
		that.selectedList.forEach(function(data,index) {
			if(index==0) {
				y = data.y;
			}else {
				if(data.y<y)y = data.y;
			}
		});
		that.selectedList.forEach(function(data) {
			$("#"+data.id).css({top:y})
			that.capacity.forEach(function(property) {
				if(data.id == property.id) {
					property.y = y;
				}
			})
		});
	}
  //下对齐
	down() {
		let that = this.stage;
		let y = 0;
		that.selectedList.forEach(function(data,index) {
			if(index==0) {
				y = data.y+data.height;
			}else {
				if(data.y+data.height>y)y = data.y+data.height;
			}
		});
		that.selectedList.forEach(function(data) {
			let value = y-(data.y+data.height)
			$("#"+data.id).css({top:data.y+value})
			that.capacity.forEach(function(property) {
				if(data.id == property.id) {
					property.y = data.y+value;
				}
			})
		});
	}
  //锁定
	lock() {
    let property = this.stage.property;
    if(property.isMove) {
      property.isMove = false;
      this.stage.layDown();
      if(property.className=="Map") {
        $('#'+property.id).find('.images-shade').hide();
      }
    }
	}
  //解锁
	unlock() {
	  let property = this.stage.property;
    if(!property.isMove) {
      property.isMove = true;
      $('#'+property.id).trigger('contextmenu');
      if(property.className=="Map") {
        $('#'+property.id).find('.images-shade').show();
      }
    }
  }
}

export default Align;
