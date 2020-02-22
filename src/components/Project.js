import Spirit from '@/core/Spirit.js'

/**
 * 项目
 */
class Project {

	constructor(stage,name,width,height) {
       $('.configur-panel').find('.configur-panel-h span').text(name)
       $('.configur-panel').find('.configur-panel-c').html(this.template());
       $('.configur-panel-content').css({width: width,height: height})
       $('.configur-panel').show(); 
       $('.configur-panel').find('.close').on('click',function() {
			$('.configur-panel').hide();
	   });
	   this.init(stage);
	}

	template(){
		let html = `<div class="configur-file">
		                <div class="device-group-list">
		                    <ul></ul>
		                    <div class="configur-canvas-floor">
							    <div class="btn btn-add">创建</div>
							    <div class="btn btn-update">修改</div>
							    <div class="btn btn-remove">删除</div>
							</div>
		                </div>
		                <div class="configur-file-form">
		                    <div style="height: 300px">
							<input name="name" class="configur-input" type="text" placeholder="文件名称" autocomplete="off"/>		
							</div>
							<div class="configur-file-floor">
								<div class="btn btn-add">确定</div>
							    <div class="btn btn-close">关闭</div>
							</div>
					    </div>						
				    </div>
				    <div class="configur-canvas">
					    <div class="configur-canvas-list">
							<ul></ul>
							<div class="configur-canvas-floor">
							    <div class="btn btn-add">创建</div>
							    <div class="btn btn-update">修改</div>
							    <div class="btn btn-remove">删除</div>
							</div>
						</div>					
					    <div class="configur-canvas-form">
					        <div style="height: 300px">
					            <div>
					                <div style="line-height: 30px;">名称</div>
					                <input name="name" class="configur-input" type="text" placeholder="画布名称" autocomplete="off"/>
					            </div>
								
								<div>
								    <div style="line-height: 30px;">宽度</div>
									<input name="width" class="configur-input" type="number" value="1024" style="width: 310px;"/><span>&nbsp;&nbsp;px</span>
							    </div>
								<div>
								    <div style="line-height: 30px;">高度</div>
									<input name="height" class="configur-input" type="number" value="768" style="width: 310px;"/><span>&nbsp;&nbsp;px</span>
								</div>
							
							</div>
							<div class="configur-canvas-floor">
								<div class="btn btn-add">确定</div>
							    <div class="btn btn-close">关闭</div>
							</div>
					    </div>
				    </div>`		
		return html;
	}
	
	init(stage) {
		
		let that = this;
		stage.option.files(function(dataList) {		
			that.createFiles(stage,dataList)
		});
		
		$('.device-group-list').find('.btn-add').on("click",function() {
			stage.file = {id:0,name:'',type:1};
			$('.configur-file-form [name=name]').val('');
			$('.configur-file-form').show();
			$('.device-group-list').hide(); 
			$('.device-group-list li').each(function() {
				$(this).removeClass('active');
			})
			$('.configur-canvas-list ul').html('')
		});			
		
		$('.device-group-list').find('.btn-update').on("click",function() {		
			if(stage.file.id==0) {
				alert("请选择文件");
				return;
			}
			stage.file.type = 2;
			$('.configur-file-form [name=name]').val(stage.file.name);	
			$('.configur-file-form').show();
			$('.device-group-list').hide(); 
		});	
		
		$('.configur-file-form').find('.btn-add').on("click",function() {
			let data = {}
			data.id = stage.file.id;
			data.name = $('.configur-file-form [name=name]').val();
			if(data.name=="") {
				alert("文件名称不能为空");
				return;
			}
			let type = stage.file.type;
			let file = {}
        	file.name = data.name;
        	if(type==1) {    
        		file.pid = data.id;
        		stage.option.insertFile(file,function(msg) {
        			if(msg=="ok") {
        				$('.configur-file-form').hide();
			            $('.device-group-list').show(); 
				    	stage.option.files(function(dataList) {
				    		that.createFiles(stage,dataList)
				    	})				    	
				    }
        		});
        	}else if(type==2) {
        		file.id = data.id;
        		stage.option.updateFile(file,function(msg) {
        			if(msg=="ok") {
        				$('.configur-file-form').hide();
			            $('.device-group-list').show(); 
				    	stage.option.files(function(dataList) {
				    		that.createFiles(stage,dataList)
				    	})
				    }
        		});
        	}
		});	
		
		$('.configur-file-form').find('.btn-close').on("click",function() {
			$('.configur-file-form').hide();
			$('.device-group-list').show(); 
		});	
		
		$('.configur-panel').find('.btn-close').on("click",function() {
			$('.configur-canvas-form').hide();
			$('.configur-canvas-list').show();
		});
		
		
		$('.configur-canvas-list').find('.btn-add').on("click",function() {
			stage.canva = {id:0,name:'',type:1};
			$('.configur-canvas-form [name=name]').val('');
			$('.configur-canvas-form [name=width]').val('1600');	
			$('.configur-canvas-form [name=height]').val('1200');
			$('.configur-canvas-form').show();
			$('.configur-canvas-list').hide(); 
			$('.configur-canvas-list li').each(function() {
				$(this).removeClass('active');
			})
		});	
		
		$('.configur-canvas-list').find('.btn-update').on("click",function() {
			if(stage.canva.id==0) {
				alert("请选择画布"); 
				return;
			}
			stage.canva.type = 2;
			$('.configur-canvas-form [name=name]').val(stage.canva.name);
			let id = stage.canva.id;
			let canvas;
			stage.canvasList.forEach(function(data) {
				if(id==data.id) {
					canvas = data;
				}
			})
			if(canvas) {
				let width = JSON.parse(canvas.data).width;
				let height = JSON.parse(canvas.data).height;
				$('.configur-canvas-form [name=width]').val(width);	
			    $('.configur-canvas-form [name=height]').val(height);	
			}			
			$('.configur-canvas-form').show();
			$('.configur-canvas-list').hide();
		});	
		
		$('.configur-canvas-form').find('.btn-add').on("click",function() {			
			let id = stage.canva.id;
			let name = $('.configur-canvas-form [name=name]').val();
			if(name=="") {
				alert("画布名称不能为空");
				return;
			}
			let data;
			stage.canvasList.forEach(function(canvas) {
				if(id==canvas.id) {
					data = canvas.data;
				}
			})
		    if(data) {
		    	data = JSON.parse(data);		    	
		    }else {
		    	data = {width:0,height:0,background:{},capacity:[]};
		    }
		    data.width = $('.configur-canvas-form [name=width]').val();
			if(data.width=="") {
				alert("画布宽度不能为空");
				return;
			}
			data.height = $('.configur-canvas-form [name=height]').val();
			if(data.height=="") {
				alert("画布高度不能为空");
				return;
			}
						
			let type = stage.canva.type
			if(type==1) {
				stage.option.insertCanvas({
					name: name,					
					folderId: stage.file.id,
					data: JSON.stringify(data)
				},function(msg) {
				    if(msg=="ok") {	
				    	stage.fileList.forEach(function(file) {
							if(stage.file.id==file.id) {
								file.count = file.count+1
							}
						});	
				    	stage.canvas(stage.file.id)
				    }
			    })
			}else if(type==2) {				
				stage.option.updateCanvas({
					id: id,
					name: name,
					folderId: stage.file.id,
					data: JSON.stringify(data)
				},function(msg) {
				    if(msg=="ok") {
				    	stage.canvas(stage.file.id)
				    }
			    })
			}						
		})
		
		$('.device-group-list').find('.btn-remove').on("click",function() {					
			stage.fileList.forEach(function(file) {
				if(stage.file.id==file.id) {
					stage.file.leaf = file.leaf
					stage.file.count = file.count
				}
			})			
			if(!stage.file.leaf) {
				alert("请先删除子项")
				return
			}
			if(stage.file.count>0) {
				alert("请先删除画布")
				return
			}
			stage.option.removeFile(stage.file.id,function(msg) {
				if(msg=="ok") {
					stage.option.files(function(dataList) {
			    		that.createFiles(stage,dataList)
			    	})
				}
			});
		})
		
		$('.configur-canvas-list').find('.btn-remove').on("click",function() {		
			if(stage.canva.id==0) {
				alert("请选择画布")
				return
			}
			stage.option.removeCanvas(stage.canva.id,function(msg) {
				if(msg=="ok") {
					stage.canva = {id:0,name:'',type:1}
					stage.fileList.forEach(function(file) {
						if(stage.file.id==file.id) {
							file.count = file.count-1
						}
					})
					stage.canvas(stage.file.id)
					$('#root').html('')
				}
			});
		})
	}
	
	createFiles(stage,dataList) {
		let ul = $('.configur-panel').find('.configur-file ul');
		ul.html('');
		stage.files(dataList,ul);
		$('.configur-file li').each(function(index) {					
			if(index==0) {
				$(this).addClass('active');
				let id = $(this).data('id');	
				stage.file.id = id;
				stage.file.name = $(this).text();
				stage.canvas(id);
			}
			$(this).on('click',function() {
				let id = $(this).data('id');
				if($(this).hasClass('active')) {
					$(this).removeClass('active');
					stage.file = {id:0,name:'',type: 1}
					$('.configur-canvas-list ul').html('');
				}else {
					stage.file.id = id;
					stage.file.name = $(this).text();
					$('.configur-file li').each(function() {
						$(this).removeClass('active');
					});
					$(this).addClass('active');
					stage.canvas(id);
				}					
			});
		});		    
	}
}

export default Project;
