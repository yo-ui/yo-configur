/**
 * 快捷键
 */
class Keydown {

	constructor(stage) {
		this.init(stage)
	}

	init(stage) {
		let that = stage;
		$(document).keydown(function(e) {
			if(e.ctrlKey&&e.keyCode==67) {//ctrl+c 复制
				that.clone();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==68) {//ctrl+d 删除
				that.remove();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==83) {//ctrl+s 保存
				that.save();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==90) {//ctrl+z 回撤
				that.layDown();
				that.handleRecord.lastStep();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==37) {
				that.align.left();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==38) {
				that.align.right();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==39) {
				that.align.up();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==40) {
				that.align.down();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==76) {
				that.align.lock();
				e.preventDefault();
			}else if(e.keyCode==37) {//方向键 左
				that.paw.left();
				e.preventDefault();
			}else if(e.keyCode==38) {//方向键 上
				that.paw.up();
				e.preventDefault();
			}else if(e.keyCode==39) {//方向键 右
				that.paw.right();
				e.preventDefault();
			}else if(e.keyCode==40) {//方向键 下
				that.paw.down();
				e.preventDefault();
			}
		})
	}
}

export default Keydown;