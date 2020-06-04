/**
 * 操作步骤记录
 */
class HandleRecord {

	constructor(stage) {
		this.stage = stage;
		this.handles = [];
		this.step = 10
	}
    //添加
	add(data) {
		if(this.handles.length<this.step) {
			this.handles.unshift(data);
		}else {
			this.handles.pop();
			this.handles.unshift(data);
		}
	}
    //撤销一步
	lastStep() {
		let that = this;
		let handles = this.handles;
		if(handles.length>0) {
			let handle = handles.shift();
			if(handle.type=="add") {
				$('#'+handle.data.id).remove();
			}else if(handle.type=="move") {
				let left = handle.data.left;
				let top = handle.data.top;
				$('#'+handle.id).css({top:top,left:left});
				that.stage.configurId = handle.id;
				let property = that.stage.getProperty();
				property.x = left;
				property.y = top;
				that.stage.setProperty(property);
				$('#'+handle.id).trigger('click')
			}else if(handle.type=="remove") {
				let className = handle.data.className;
				let x = handle.data.x;
				let y = handle.data.y;
				let width = handle.data.width;
				let height = handle.data.height;
				let spirit = that.stage.create(className,x,y,width,height);
				that.stage.configurId = spirit.id;
				that.stage.capacity.push(spirit)
			}
		}
	}
}

export default HandleRecord;
