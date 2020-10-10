/**
 * 水管
 */
class WaterPipe {

	constructor(stage) {
		this.stage = stage;
		this.water = {start:true,direction:""};
		this.isDraw = false;
		this.isMove = true;
		this.init();
		this.tempList = []
		this.linkPointList = []
	}

	init() {
		let that = this;
		$('#board').on('click',function(e) {
			if(that.stage.toolType==1) {
				return;
			}
			if(that.isAuto) {
				that.empty();
				that.isAuto = false;
				return;
			}
			if(that.isDraw) {
				if(that.water.start) {
				  that.stage.capacity.forEach(function(data) {
						if(data.className=="LinkPoint") {
							that.linkPointList.push(data);
							if((e.offsetX>data.x-12&&e.offsetX<data.x+12)||
								(e.offsetY>data.y-12&&e.offsetY<data.y+12)) {
								let start = {x:data.x,y:data.y}
								let end = {x:e.offsetX,y:e.offsetY}
								let angle = that.angle(start,end);
								if(((angle>-45&&angle<0)||(angle>=0&&angle<45))&&(e.offsetX>data.x&&e.offsetX<data.x+12)) {
									that.water.startX = data.x+4;
									that.water.startY = data.y-1;
									that.waterSpirit = that.stage.create("LevelWater",that.water.startX,that.water.startY,20,20);
									that.stage.capacity.push(that.waterSpirit);
									that.water.direction = "right"
									that.water.start = false;
									that.tempList.push(that.waterSpirit)
								}else if((angle>=45&&angle<135)&&(e.offsetY>data.y&&e.offsetY<data.y+12)) {
									that.water.startX = data.x;
									that.water.startY = data.y+4;
									that.waterSpirit = that.stage.create("VerticalWater",that.water.startX,that.water.startY,20,20);
									that.stage.capacity.push(that.waterSpirit);
									that.water.direction = "down"
									that.water.start = false;
									that.tempList.push(that.waterSpirit)
								}else if(((angle>=135&&angle<180)||(angle>=-180&&angle<-135))&&(e.offsetX>data.x-12&&e.offsetX<data.x)) {
									that.water.startX = data.x+4;
									that.water.startY = data.y-1;
									that.waterSpirit = that.stage.create("LevelWater",that.water.startX-12,that.water.startY,20,20);
									that.stage.capacity.push(that.waterSpirit);
									that.water.direction = "left"
									that.water.start = false;
									that.tempList.push(that.waterSpirit)
								}else if((angle>=-135&&angle<-45)&&(e.offsetY>data.y-15&&e.offsetY<data.y)) {
									that.water.startX = data.x;
									that.water.startY = data.y+5;
									that.waterSpirit = that.stage.create("VerticalWater",that.water.startX,that.water.startY-12,20,20);
									that.stage.capacity.push(that.waterSpirit);
									that.water.direction = "up"
									that.water.start = false;
									that.tempList.push(that.waterSpirit)
								}
							}
						}
		            })
				}else {
					if(that.isWater) {
						if(that.water.direction=="down") {
							let x = that.waterSpirit.x;
							let y = that.waterSpirit.y+that.waterSpirit.height;
							if(e.offsetX>x) {
								that.water.startX = x+10;
								that.water.startY = y;
								that.waterSpirit = that.stage.create("LDWater",x,y,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
                let left = that.water.startX;
                let top = parseInt(that.water.startY);
								that.waterSpirit = that.stage.create("LevelWater",left,top,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
								that.water.direction = "right"
							}else {
								that.water.startX = x;
								that.water.startY = y;
								that.waterSpirit = that.stage.create("DRWater",x,y,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
                let left = that.water.startX-20;
                let top = parseInt(that.water.startY);
								that.waterSpirit = that.stage.create("LevelWater",left,top,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
								that.water.direction = "left"
							}
						}else if(that.water.direction=="up") {
							let x = that.waterSpirit.x;
							if(e.offsetX>x) {
								let y = that.waterSpirit.y-10;
								that.water.startX = x+10;
								that.water.startY = y;
								that.waterSpirit = that.stage.create("LUWater",x,y,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
                let left = parseInt(that.water.startX);
                let top = parseInt(that.water.startY);
								that.waterSpirit = that.stage.create("LevelWater",left,top,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
								that.water.direction = "right"
							}else {
								let y = that.waterSpirit.y-10;
								that.water.startX = x;
								that.water.startY = y;
								that.waterSpirit = that.stage.create("RUWater",x,y,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
                let left = parseInt(that.water.startX-20);
                let top = parseInt(that.water.startY);
								that.waterSpirit = that.stage.create("LevelWater",left,top,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
								that.water.direction = "left"
							}
						}else if(that.water.direction=="right") {
              console.log("right");
							let x = that.waterSpirit.x+that.waterSpirit.width;
							let y = that.waterSpirit.y;
							if(e.offsetY>y) {
								that.water.startX = x;
								that.water.startY = y+10;
								that.waterSpirit = that.stage.create("RUWater",x,y,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
                let left = that.water.startX;
                let top = parseInt(that.water.startY);
								that.waterSpirit = that.stage.create("VerticalWater",left,top,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
								that.water.direction = "down"
							}else {
								that.water.startX = x;
								that.water.startY = y;
								that.waterSpirit = that.stage.create("DRWater",x,y,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
                let left = that.water.startX;
                let top = parseInt(that.water.startY-20);
								that.waterSpirit = that.stage.create("VerticalWater",left,top,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
								that.water.direction = "up"
							}
						}else if(that.water.direction=="left") {
						  console.log("left")
							let x = that.waterSpirit.x-10;
							let y = that.waterSpirit.y;
							if(e.offsetY>y) {
								that.water.startX = x;
								that.water.startY = y+10;
								that.waterSpirit = that.stage.create("LUWater",x,y,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
                let left = parseInt(that.water.startX);
                let top = parseInt(that.water.startY);
								that.waterSpirit = that.stage.create("VerticalWater",left,top,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
								that.water.direction = "down"
							}else {
								that.water.startX = x;
								that.water.startY = y;
								that.waterSpirit = that.stage.create("LDWater",x,y,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
                let left = parseInt(that.water.startX);
                let top = parseInt(that.water.startY-20);
								that.waterSpirit = that.stage.create("VerticalWater",left,top,20,20);
								that.stage.capacity.push(that.waterSpirit);
								that.tempList.push(that.waterSpirit)
								that.water.direction = "up"
							}
						}
					}else {
						that.isWater = true;
					}
			  }
			}
		});

		$('#board').on('mousemove',function(e) {
			if(that.stage.toolType==1) {
				return;
			}
			if(that.isMove) {
				that.isWater = false;
				let start = {x:that.water.startX,y:that.water.startY}
				let end = {x:e.offsetX,y:e.offsetY}
				let angle= that.angle(start,end);
				if((angle>-45&&angle<0)||(angle>=0&&angle<45)) {
					if(that.water.direction=="right") {
						if(that.waterSpirit) {
							let width = parseInt(e.offsetX-that.water.startX);
							that.waterSpirit.width = width;
							that.waterSpirit.transform();
							that.stage.setProperty(that.waterSpirit);
							let data = {}
							data.x = that.waterSpirit.x+width;
							data.y = that.waterSpirit.y;
							that.auto(data,"right");
						}
					}
				}else if((angle>=45&&angle<135)) {
					if(that.water.direction=="down") {
						if(that.waterSpirit) {
							let height = parseInt(e.offsetY-that.water.startY);
							that.waterSpirit.height = height;
							that.waterSpirit.transform();
							that.stage.setProperty(that.waterSpirit);
							let data = {}
							data.x = that.waterSpirit.x;
							data.y = that.waterSpirit.y+height;
							that.auto(data,"down");
						}
					}
				}else if((angle>=135&&angle<180)||(angle>=-180&&angle<-135)) {
					if(that.water.direction=="left") {
						if(that.waterSpirit) {
							let width = parseInt(e.offsetX-that.water.startX);
							that.waterSpirit.width = -width;
							that.waterSpirit.x = parseInt(e.offsetX);
							that.waterSpirit.transform();
							that.stage.setProperty(that.waterSpirit);
							let data = {}
							data.x = that.waterSpirit.x;
							data.y = that.waterSpirit.y;
							that.auto(data,"left");
						}
					}
				}else if((angle>=-135&&angle<-45)) {
					if(that.water.direction=="up") {
						if(that.waterSpirit) {
							let height = parseInt(e.offsetY-that.water.startY);
							that.waterSpirit.height = -height;
							that.waterSpirit.y = parseInt(e.offsetY);
							that.waterSpirit.transform();
							that.stage.setProperty(that.waterSpirit);
							let data = {}
							data.x = that.waterSpirit.x;
							data.y = that.waterSpirit.y;
							that.auto(data,"up");
						}
					}
				}
			}
		});

		$('#board').on('mousedown',function (e) {
            that.isMove = true;
		})

		$('#board').on('mouseup',function (e) {
			that.isMove = false;
		})

		$('#board').on('contextmenu',function (e) {
			that.empty();
		})
	}

    //清空
	empty() {
		this.water = {start:true,direction:''};
		this.isDraw = true;
		this.tempList = [];
		this.linkPointList = [];
	}

	draw(value) {
		this.isDraw = value;
		if(value) {
			$('#board').show();
		}else {
			$('#board').hide();
		}
	}
	//计算角度
	angle(start,end) {
	    return Math.atan2((end.y-start.y), (end.x-start.x))*(180/Math.PI);
	}

	//自动连接
	auto(data,text) {
		let that = this;
		if(that.tempList.length>2) {
			that.linkPointList.forEach(function (linkPoint) {
				if((data.x>linkPoint.x-10&&data.x<linkPoint.x+10)&&
					(data.y>linkPoint.y-20&&data.y<linkPoint.y+20)) {
					if(text=="right") {
						let spirit1 = that.tempList[that.tempList.length-1];
						let value = linkPoint.y-spirit1.y-1;
						spirit1.width = parseInt(spirit1.width+14);
						spirit1.y = linkPoint.y-1;
						spirit1.transform();
						that.stage.setProperty(spirit1);

						let spirit2 = that.tempList[that.tempList.length-2];
						spirit2.y = linkPoint.y-1;
						spirit2.transform();
						that.stage.setProperty(spirit2);
						if(spirit2.className == 'LUWater') {
							let spirit3 = that.tempList[that.tempList.length-3];
							spirit3.height = parseInt(spirit3.height-value);
							spirit3.y = spirit3.y+value;
							spirit3.transform();
							that.stage.setProperty(spirit3);
						}else if(spirit2.className == 'LDWater') {
							let spirit3 = that.tempList[that.tempList.length-3];
							spirit3.height = parseInt(spirit3.height+value);
							spirit3.transform();
							that.stage.setProperty(spirit3);
						}
					}else if(text=="left") {
						let spirit1 = that.tempList[that.tempList.length-1];
						let width = parseInt(spirit1.x-linkPoint.x+2);
						let height = parseInt(linkPoint.y-spirit1.y-1);
						spirit1.x = parseInt(linkPoint.x+4);
						spirit1.width = parseInt(spirit1.width+width-4);
						spirit1.y = parseInt(linkPoint.y-1);
						spirit1.transform();
						that.stage.setProperty(spirit1);
						let spirit2 = that.tempList[that.tempList.length-2];
						spirit2.y = parseInt(linkPoint.y-1);
						spirit2.transform();
						that.stage.setProperty(spirit2);

						if(spirit2.className == 'RUWater') {
							let spirit3 = that.tempList[that.tempList.length-3];
							spirit3.height = parseInt(spirit3.height-height);
							spirit3.y = parseInt(spirit3.y+height);
							spirit3.transform();
							that.stage.setProperty(spirit3);
						}else if(spirit2.className == 'DRWater') {
							let spirit3 = that.tempList[that.tempList.length-3];
							spirit3.height = parseInt(spirit3.height+height);
							spirit3.transform();
							that.stage.setProperty(spirit3);
						}
					}else if(text=='down') {
						let spirit1 = that.tempList[that.tempList.length-1];
						let height = parseInt(linkPoint.y-spirit1.y-spirit1.height);
						let width = parseInt(spirit1.x-linkPoint.x);
						spirit1.x = linkPoint.x;
						spirit1.height = parseInt(spirit1.height+height+5)
						spirit1.transform();
						that.stage.setProperty(spirit1);

						let spirit2 = that.tempList[that.tempList.length-2];
						spirit2.x = linkPoint.x;
						spirit2.transform();
						that.stage.setProperty(spirit2);
						if(spirit2.className == 'RUWater') {
							let spirit3 = that.tempList[that.tempList.length-3];
							spirit3.width = parseInt(spirit3.width-width);
							spirit3.transform();
							that.stage.setProperty(spirit3);
						}else if(spirit2.className == 'LUWater') {
							let spirit3 = that.tempList[that.tempList.length-3];
							spirit3.x = spirit3.x-width;
							spirit3.width = parseInt(spirit3.width+width);
							spirit3.transform();
							that.stage.setProperty(spirit3);
						}
					}else if(text=='up') {
						let spirit1 = that.tempList[that.tempList.length-1];
						let height = parseInt(spirit1.y-linkPoint.y);
						let width = parseInt(spirit1.x-linkPoint.x);
						spirit1.x = linkPoint.x;
						spirit1.y = spirit1.y-height+4;
						spirit1.height = parseInt(spirit1.height+height-4)
						spirit1.transform();
						that.stage.setProperty(spirit1);

						let spirit2 = that.tempList[that.tempList.length-2];
						spirit2.x = linkPoint.x;
						spirit2.transform();
						that.stage.setProperty(spirit2);
						if(spirit2.className == 'DRWater') {
							let spirit3 = that.tempList[that.tempList.length-3];
							spirit3.width = parseInt(spirit3.width-width);
							spirit3.transform();
							that.stage.setProperty(spirit3);
						}else if(spirit2.className == 'LDWater') {
							let spirit3 = that.tempList[that.tempList.length-3];
							spirit3.x = spirit3.x-width;
							spirit3.width = parseInt(spirit3.width+width);
							spirit3.transform();
							that.stage.setProperty(spirit3);
						}
					}
					that.isMove = false;
					that.isAuto = true;
				}
			})
		}
	}
}

export default WaterPipe;
