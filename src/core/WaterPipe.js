

class WaterPipe {
	
	constructor(stage) {
		this.stage = stage; 
		this.water = {start:true,direction:""};
		this.isDraw = false;
		this.init();
	}	
	
	init() {
		let that = this;
		that.stage.element.on('click',function(e) {
			if(that.isDraw) {						
				if(that.water.start) {
					that.water.startX = e.offsetX;
		            that.water.startY = e.offsetY;
		            that.water.isWater = true;
		            that.water.start = false;
		            that.stage.capacity.forEach(function(data) {
		            	if(data.isSplice) {
		            		if(data.className=="LeftWater") {
			            		if(data.x+10<e.offsetX&&e.offsetY>data.y-30&&e.offsetY<data.y+30) {
			            			that.water.startX = data.x+9;
			            			that.water.startY = data.y+5;
			            		}else if(e.offsetY<data.y&&e.offsetY>data.y-50&&e.offsetX<data.x) {
			            			that.water.startX = data.x;
			            			that.water.startY = data.y+5;
			            		}else if(e.offsetY>data.y&&e.offsetY+50&&e.offsetX<data.x) {
			            			that.water.startX = data.x;
			            			that.water.startY = data.y+15;
			            		}
		            		}else if(data.className=="RightWater") {
		            			if(e.offsetX<data.x&&e.offsetY>data.y-30&&e.offsetY<data.y+30) {
		            				that.water.startX = data.x+1;
			            			that.water.startY = data.y+5;
		            			}else if(e.offsetY<data.y&&e.offsetY>data.y-50) {
			            			that.water.startX = data.x;
			            			that.water.startY = data.y+5;
			            		}else if(e.offsetY>data.y&&e.offsetY+50) {
			            			that.water.startX = data.x;
			            			that.water.startY = data.y+15;
			            		}
		            		}else if(data.className=="DownWater") {
		            			if(e.offsetY<data.y&&e.offsetX>data.x-20&&e.offsetX<data.x+40) {
		            				that.water.startX = data.x;
			            			that.water.startY = data.y+5;
		            			}else if(e.offsetX<data.x&&e.offsetX>data.x-30) {
			            			that.water.startX = data.x+1;
			            			that.water.startY = data.y+4;
			            		}else if(e.offsetX>data.x+10&&e.offsetX<data.x+40) {
			            			that.water.startX = data.x+9;
			            			that.water.startY = data.y+4;
			            		}
		            		}else if(data.className=="UpWater") {
		            			if(e.offsetY>data.y&&e.offsetX>data.x-20&&e.offsetX<data.x+40) {
		            				that.water.startX = data.x;
			            			that.water.startY = data.y+15;
		            			}else if(e.offsetX<data.x&&e.offsetX>data.x-30) {
			            			that.water.startX = data.x+1;
			            			that.water.startY = data.y+5;
			            		}else if(e.offsetX>data.x+10&&e.offsetX<data.x+40) {
			            			that.water.startX = data.x+9;
			            			that.water.startY = data.y+5;
			            		}
		            		}
		            	}
		            })
				}else {					
					that.water.isWater = false;
					if(that.water.direction=="down") {
						let x = that.waterSpirit.x;
					    let y = that.waterSpirit.y+that.waterSpirit.height;
						that.water.isWater = true; 
						if(e.offsetX>x) {					
						    that.water.startX = x+10; 
						    that.water.startY = y;
						    that.waterSpirit = that.stage.create("LDWater",x,y,20,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.waterSpirit = that.stage.create("LevelWater",that.water.startX,that.water.startY,20,1);
						    that.stage.capacity.push(that.waterSpirit);
						    that.water.direction = "right"
						}else {		
						    that.water.startX = x;
						    that.water.startY = y; 
						    that.waterSpirit = that.stage.create("DRWater",x,y,20,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.waterSpirit = that.stage.create("LevelWater",that.water.startX,that.water.startY,1,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.water.direction = "left"
						}										
					}else if(that.water.direction=="up") {
						let x = that.waterSpirit.x;
						that.water.isWater = true;
						if(e.offsetX>x) {		
					        let y = that.waterSpirit.y-10;
						    that.water.startX = x+10; 
						    that.water.startY = y; 
						    that.waterSpirit = that.stage.create("LUWater",x,y,20,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.waterSpirit = that.stage.create("LevelWater",that.water.startX,that.water.startY,20,1);
						    that.stage.capacity.push(that.waterSpirit);
						    that.water.direction = "right"
						}else {									
					        let y = that.waterSpirit.y-10;
						    that.water.startX = x;
						    that.water.startY = y; 
						    that.waterSpirit = that.stage.create("RUWater",x,y,20,20); 
						    that.stage.capacity.push(that.waterSpirit);
						    that.waterSpirit = that.stage.create("LevelWater",that.water.startX,that.water.startY,1,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.water.direction = "left"
						}										
					}else if(that.water.direction=="right") {
						let x = that.waterSpirit.x+that.waterSpirit.width;
					    let y = that.waterSpirit.y;					
					    that.water.isWater = true;
						if(e.offsetY>y) {						
							that.water.startX = x; 
						    that.water.startY = y+10; 
						    that.waterSpirit = that.stage.create("RUWater",x,y,20,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.waterSpirit = that.stage.create("VerticalWater",that.water.startX,that.water.startY,20,1);
						    that.stage.capacity.push(that.waterSpirit);
						    that.water.direction = "down"
						}else {						
						    that.water.startX = x; 
						    that.water.startY = y; 
						    that.waterSpirit = that.stage.create("DRWater",x,y,20,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.waterSpirit = that.stage.create("VerticalWater",that.water.startX,that.water.startY,20,1);
						    that.stage.capacity.push(that.waterSpirit);
						    that.water.direction = "up"
						}											
					}else if(that.water.direction=="left") {	
						let x = that.waterSpirit.x-10;	
					    let y = that.waterSpirit.y;	
					    that.water.isWater = true;
						if(e.offsetY>y) {												
							that.water.startX = x; 
						    that.water.startY = y+10; 
						    that.waterSpirit = that.stage.create("LUWater",x,y,20,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.waterSpirit = that.stage.create("VerticalWater",that.water.startX,that.water.startY,20,1);
						    that.stage.capacity.push(that.waterSpirit);
						    that.water.direction = "down"
						}else {					
						    that.water.startX = x; 
						    that.water.startY = y; 
						    that.waterSpirit = that.stage.create("LDWater",x,y,20,20);
						    that.stage.capacity.push(that.waterSpirit);
						    that.waterSpirit = that.stage.create("VerticalWater",that.water.startX,that.water.startY,20,1);
						    that.stage.capacity.push(that.waterSpirit);
						    that.water.direction = "up"
						}											
				    }
			    }
			}						
		});
		
		that.stage.element.on('mousemove',function(e) {	
			if(that.isDraw&&that.water.isWater) {
				let start = {x:that.water.startX,y:that.water.startY}
			    let end = {x:e.offsetX,y:e.offsetY}
			    let angle= that.angle(start,end);
			    if((angle>-45&&angle<0)||(angle>=0&&angle<45)) {
			    	if(that.water.direction=="right") {
			    		if(that.waterSpirit) {
			    			let width = e.offsetX-that.water.startX;
			    			that.waterSpirit.width = width;				    			
			    		    that.waterSpirit.transform(); 
			    		    that.stage.setProperty(that.waterSpirit);
			    		}					    		
			    	}else if(that.water.direction=="") {				    		
			    		that.waterSpirit = that.stage.create("LevelWater",that.water.startX,that.water.startY,1,20);
			    		that.stage.capacity.push(that.waterSpirit);
			    		that.water.direction = "right";			    		
			    	}
			    }else if((angle>=45&&angle<135)) {	
			    	if(that.water.direction=="down") {
			    		if(that.waterSpirit) {
			    			let height = e.offsetY-that.water.startY;
			    			that.waterSpirit.height = height;			    			
			    		    that.waterSpirit.transform();		
			    		    that.stage.setProperty(that.waterSpirit);
			    		}					    	
			    	}else if(that.water.direction=="") {
			    		that.waterSpirit = that.stage.create("VerticalWater",that.water.startX,that.water.startY,20,1);
			    		that.stage.capacity.push(that.waterSpirit);
				    	that.water.direction = "down";	
			    	}			    	
			    }else if((angle>=135&&angle<180)||(angle>=-180&&angle<-135)) {		    	
			    	if(that.water.direction=="left") {
			    		if(that.waterSpirit) {			    			
			    			let width = e.offsetX-that.water.startX;
			    			that.waterSpirit.width = -width;
			    			that.waterSpirit.x = e.offsetX;				    			
			    		    that.waterSpirit.transform();	
			    		    that.stage.setProperty(that.waterSpirit);
			    		}					    		
			    	}else if(that.water.direction=="") {	
			    		that.waterSpirit = that.stage.create("LevelWater",that.water.startX,that.water.startY,1,20);
			    		that.stage.capacity.push(that.waterSpirit);
			    		that.water.direction = "left";		    		
			    	}
			    }else if((angle>=-135&&angle<-45)) {
			    	if(that.water.direction=="up") {
			    		if(that.waterSpirit){
			    			let height = e.offsetY-that.water.startY;
			    			that.waterSpirit.height = -height;
			    			that.waterSpirit.y = e.offsetY;				    			
			    		    that.waterSpirit.transform();	
			    		    that.stage.setProperty(that.waterSpirit);
			    		}					    	
			    	}else if(that.water.direction==""){
			    		that.waterSpirit = that.stage.create("VerticalWater",that.water.startX,that.water.startY,20,1);
			    		that.stage.capacity.push(that.waterSpirit);
				    	that.water.direction = "up";	
			    	}			    	
			    }
			}									
		});
		
		this.stage.element.on('contextmenu',function(e) {
			if(e.button==2) {
				that.water.isWater = false;
				that.water.start = true; 
				that.water.direction = "";
				e.preventDefault();		
			}
		})
	}
	
	setDraw(draw) {
		this.isDraw = draw;
	}
	
	angle(start,end) {
	    return Math.atan2((end.y-start.y), (end.x-start.x))*(180/Math.PI);
	}
}

export default WaterPipe;
