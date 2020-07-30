/**
 * 工具栏
 */
class Toolbar {

	constructor(stage) {
		this.stage = stage;
		this.init()
	}

	init() {
		let that = this.stage;
		let barList = [
			{type:1,name:'撤销',url:'static/images/tool/recall.png'},
			{type:2,name:'保存',url:'static/images/tool/save.png'},
			{type:3,name:'复制',url:'static/images/tool/copy.png'},
			{type:4,name:'删除',url:'static/images/tool/delete.png'},
			{type:5,name:'右对齐',url:'static/images/tool/right.png'},
			{type:6,name:'左对齐',url:'static/images/tool/left.png'},
			{type:7,name:'上对齐',url:'static/images/tool/up.png'},
			{type:8,name:'下对齐',url:'static/images/tool/down.png'}]
		barList.forEach(function(bar) {
			let tool = $(`<div class="bm-toolbar__item" ><img src="${bar.url}" title="${bar.name}"/></div>`)
			tool.data('type',bar.type);
			tool.on('click',function() {
				let type = $(this).data('type');
				that.shortcutsKey(type);
			});
			$('.bm-toolbar').append(tool);
		});
		let oper = $(`<div class="bm-toolbar__oper" title="预览">
				  		<img src="static/images/tool/device.png" width="18"/>
				  	</div>`);
		oper.on('click',function() {
			that.option.preview()
		});
		$('.bm-toolbar').append(oper)
	}

	kit() {
		let that = this.stage;
		let tools = [{type:1,title:'放大',url:'static/images/magnify.png'},
			{type:2,title:'缩小',url:'static/images/shrink.png'}];
		let toolPanel = $('<div class="bm-toolbar__zoom"></div>');
		tools.forEach(function(tool,index) {
			let img = $('<img/>')
			img.attr("src", tool.url);
			img.data('type', tool.type);
			img.attr("title", tool.title);
			img.on('click',function() {
				that.layDown();
				that.capacity.forEach(function(data) {
					$('#'+data.id).css({border:'1px solid transparent'})
				});
				$('#selected_subline').hide();

				that.toolType = $(this).data('type');
				that.zoom.control(that.toolType);
				that.toolType = 1;
			});
			if(index==1){
				let ratio = that.zoom.get();
				toolPanel.append('<span>'+ratio*100+'%</span>')
			}
			toolPanel.append(img)
		});
		$('.bm-toolbar').append(toolPanel);
	}
}

export default Toolbar;