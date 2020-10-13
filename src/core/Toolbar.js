import Animation from './../core/Animation'

/**
 * 工具栏
 */
class Toolbar {

	constructor(stage) {
		this.stage = stage;
	}

  contextMenu() {
    $('.bm-context-menu ul').html('')
    let that = this;
    let menus = []
    if(that.stage.selectedType==1) {
      let property = that.stage.property;
      if(property) {
        if(property.isMove) {
            menus = [{name:'复制',icon:'fa-copy',type: 3,key:'Ctrl+C'},
                     {name:'删除',icon:'fa-delete',type: 4,key:'Ctrl+D'},
                     {name:'锁定',icon:'fa-lock',type: 9,key:'Ctrl+L'}]
          if(property.isCombination) {
            let menu = {name:'分解',icon:'fa-resolve',type: 17,key:'Ctrl+F'};
            menus.push(menu);
          }else if(property.isAnimation) {
            let menu = {name:'动画链接',icon:'fa-bind',type: 15,key:'Ctrl+A'};
            menus.push(menu);
          }
        }else {
          menus = [{name:'解锁',icon:'fa-unlock',type: 10,key:'Ctrl+K'}]
        }
      }else {
        menus = [{name:'保存',icon:'fa-save',type: 2,key:'Ctrl+S'}]
        if(that.stage.handleRecord.handles.length>0) {
          let menu = {name:'回撤',icon:'fa-back',type: 1,key:'Ctrl+Z'};
          menus.push(menu);
        }
      }
    }else {
      menus = [{name:'左对齐',icon:'fa-align-left',type: 5,key:'Ctrl+←'},
               {name:'右对齐',icon:'fa-align-right',type: 6,key:'Ctrl+→'},
               {name:'上对齐',icon:'fa-align-up',type: 7,key:'Ctrl+↑'},
               {name:'下对齐',icon:'fa-align-down',type: 8,key:'Ctrl+↓'},
               {name:'垂直平分',icon:'fa-v-divide',type: 12,key:'Ctrl+V'},
               {name:'水平平分',icon:'fa-h-divide',type: 13,key:'Ctrl+H'},
               {name:'组合',icon:'fa-comb',type:16,key:'Ctrl+G'},
               {name:'删除',icon:'fa-delete',type:4,key:'Ctrl+D'}]
    }

    menus.forEach(function(data) {
      let li = $(`<li><span class="text"><i class="fa ${data.icon}"></i>${data.name}</span><span class="value">${data.key}</span></li>`)
      li.data("type",data.type)
      li.on('click',function() {
        let type = $(this).data("type");
        that.shortcutsKey(type);
        $('.bm-context-menu').hide();
      })
      $('.bm-context-menu ul').append(li)
    })
  }

  disabled() {
    let that = this;
    let dataList = [
      {name:'back',type: 1},
      {name:'align-left',type:5},
      {name:'align-right',type:6},
      {name:'align-up',type:7},
      {name:'align-down',type:8},
      {name:'delete',type: 4},
      {name:'copy',type: 3},
      {name:'delete',type: 11},
      {name:'v-divide',type: 12},
      {name:'h-divide',type: 13},
      {name:'comb',type: 16},
      {name:'resolve',type: 17},
      {name:'lock',type: 9},
      {name:'unlock',type: 10}]
    dataList.forEach(function (data) {
      $('.bm-toolbar').find('.'+data.name).addClass('disabled');
      $('.bm-toolbar').find('.'+data.name).unbind('click')
    })
  }

  edit() {
	  this.disabled();
	  let that = this;
    let toolbarList = []
    if(that.stage.selectedType==1) {
      let property = that.stage.property;
      if(property) {
        if(property.isMove) {
          toolbarList = [{name:'copy',type: 3},{name:'delete',type: 4},{name:'lock',type: 9}]
          if(property.isCombination) {
            toolbarList = [{name:'resolve',type: 17}]
          }
        }else {
          toolbarList = [{name:'unlock',type: 10}]
        }
      }else {
        if(that.stage.handleRecord.handles.length>0) {
          toolbarList = [{name:'back',type: 1}]
        }
      }
    }else {
      toolbarList = [
        {name:'align-left',type:5},
        {name:'align-right',type:6},
        {name:'align-up',type:7},
        {name:'align-down',type:8},
        {name:'v-divide',type: 12},
        {name:'h-divide',type: 13},
        {name:'comb',type: 16},
        {name:'resolve',type: 17}]
    }

    toolbarList.forEach(function (data) {
      $('.bm-toolbar').find('.'+data.name).removeClass('disabled');
      let toolbar = $('.bm-toolbar').find('.'+data.name);
      toolbar.data("type", data.type);
      toolbar.on('click',function () {
        let type = $(this).data("type")
        that.shortcutsKey(type);
      })
    })
  }



  shortcutsKey(type) {
    let that = this;
    switch(type) {
      case 1:that.stage.handleRecord.lastStep();break;
      case 2:that.stage.save();break;
      case 3:that.stage.clone();break;
      case 4:that.stage.remove();break;
      case 5:that.stage.align.left();break;
      case 6:that.stage.align.right();break;
      case 7:that.stage.align.up();break;
      case 8:that.stage.align.down();break;
      case 9:that.stage.align.lock();break;
      case 10:that.stage.align.unlock();break;
      case 12:that.stage.hDivide();break;
      case 13:that.stage.vDivide();break;
      case 14:that.stage.group.show();break;
      case 15:that.animation();break;
      case 16:that.stage.combination();break;
      case 17:that.stage.resolve();break;
    }
  }


  animation() {
    let animation = new Animation(this.stage);
    animation.init();
  }
}

export default Toolbar;
