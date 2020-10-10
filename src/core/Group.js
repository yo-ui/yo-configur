import Toast from './../core/Toast';
/**
 *
 */
class Group {

	constructor(stage) {
    this.stage = stage;
	}

	show() {
		let that = this;
		that.groupList = [...that.stage.groupList]
		let content = `<div>
                     <ul class="bm-list"></ul>
                     <div class="bm-line"></div>
                     <div class="group-sm">
                       <input type="text" class="form-control" name="name" maxlength="16" />
                       <span class="bm-add bm-button bm-button--small bm-button--primary">保存</span> 
                     </div>
                   </div>`;
    that.stage.panel.init("分组",content,500);
    that.stage.panel.show();
    that.stage.panel.confirm(function () {
      that.stage.property.config.groupId = that.id;
      that.stage.groupList = that.groupList;
    })
    $('.bm-configur-panel .bm-list').css({'max-height': 200, overflow: 'auto', 'padding-right': '1px'})
    let element = $('.bm-configur-panel').find("[name=name]");
    $('.bm-configur-panel').find('.bm-add').on('click',function () {
      let index = that.groupList.length;
      let name = element.val();
      if(!name) {
        Toast.alert("分组名称不能为空！");
        return;
      }
      if(that.id) {
        that.groupList.forEach(function (group) {
          if(that.id==group.id) {
            group.name = name;
          }
        })
        that.create();
      }else {
        let data = {}
        data.id = index+1;
        data.name = name;
        that.groupList.push(data);
        that.create();
      }
      element.focus();
      element.val("");
      that.id = "";
    });
    that.create();
	}

	create() {
	  let that = this;
    $('.bm-configur-panel').find(".bm-list").html('');
    let element = $('.bm-configur-panel').find("[name=name]");
    that.groupList.forEach(function (group) {
      let li = $(`<li><span class="text">${group.name}</span><span class="value"><i class="fa fa-close"/></span></li>`)
      li.data("id", group.id)
      li.data("name", group.name)
      li.on('click',function () {
        if($(this).hasClass('active')) {
          $(this).removeClass('active');
          that.id = "";
          element.val("");
        }else {
          $(this).addClass('active');
          $(this).siblings().each(function () {
            $(this).removeClass('active');
          });
          that.id = $(this).data("id");
          let name = $(this).data("name");
          element.val(name);
        }
      });

      li.find('.value').on('click',function (e) {
        let id = $(this).parent().data("id");
        that.groupList.forEach(function (g,index) {
          if(g.id == id) {
            that.groupList.splice(index, 1);
          }
        })
        that.create();
        e.preventDefault();
        e.stopPropagation();
      });
      if(group.id==that.stage.property.config.groupId) {
        li.addClass("active");
      }
      $('.bm-configur-panel').find(".bm-list").append(li);
    })
  }
}

export default Group;
