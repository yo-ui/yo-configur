/**
 * 
 */
class Move {
	constructor(stage) {
		this.stage = stage;		
	}
	
	site(top,left) {
		$('.global-panel').css({top:top,left:left});
	}

    register(el) {  	
		$('.global-panel').append(el);
	}
    
    drag() {   
    	this.move = true;
    	let that = this;
    	let _move=false;//
		let _x,_y;//  
		$(".global-panel").mousedown(function(e,data) {  
	        _move=true; 
	        if(data) {
	            _x=data.x-parseInt($(".global-panel").css("left"));  
	            _y=data.y-parseInt($(".global-panel").css("top"));  
	        }else{
	            _x=e.pageX-parseInt($(".global-panel").css("left"));  
	            _y=e.pageY-parseInt($(".global-panel").css("top"));  
	        }
	        $(".global-panel").fadeTo(20, 0.8);
	    });  
	    $(document).mousemove(function(e) { 
	        if(_move) {  
	            var x=e.pageX-_x; 
	            var y=e.pageY-_y;  
	            $(".global-panel").css({top:y-5,left:x});           
	        } 
	    }).mouseup(function(ev) {  
	        _move=false;
	        if(that.move) {
	        	$(".global-panel").hide();        
		        if(ev.pageX>180) {        	
		            that.stage.isCreate = true;
		        }
	        }	        	        
	    }); 
    }

    
}

export default Move;