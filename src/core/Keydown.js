/**
 * 快捷键
 */
class Keydown {

	constructor(stage) {
		this.init(stage)
	}

	init(stage) {
		$(document).keydown(function(e) {
		  console.log(e.keyCode);
      if(e.ctrlKey&&e.keyCode==37) {//左对齐
        stage.align.left();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==38) {//右对齐
        stage.align.right();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==39) {//上对齐
        stage.align.up();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==40) {//下对齐
        stage.align.down();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==65) {//ctrl+a 选中舞台
        stage.triggerClick();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==66) {//ctrl+b 绑定数据
        stage.bindD.create();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==67) {//ctrl+c 复制
        stage.clone();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==68) {//ctrl+d 删除
        stage.remove();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==71) {//ctrl+g 分组
        stage.group.show();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==72) {//ctrl+h 水平平分
        stage.hDivide();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==75) {//ctrl+k 解锁
        stage.align.unlock();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==76) {//ctrl+l 锁定
        stage.align.lock();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==83) {//ctrl+s 保存
        stage.save();
				e.preventDefault();
			}else if(e.ctrlKey&&e.keyCode==86) {//垂直平分
        stage.vDivide();
        e.preventDefault();
      }else if(e.ctrlKey&&e.keyCode==90) {//ctrl+z 回撤
        stage.layDown();
        stage.handleRecord.lastStep();
				e.preventDefault();
			}else if(e.keyCode==37) {//方向键 左
        stage.paw.left();
        e.preventDefault();
      }else if(e.keyCode==38) {//方向键 上
        stage.paw.up();
        e.preventDefault();
      }else if(e.keyCode==39) {//方向键 右
        stage.paw.right();
        e.preventDefault();
      }else if(e.keyCode==40) {//方向键 下
        stage.paw.down();
        e.preventDefault();
      }
		})
	}
}

export default Keydown;
