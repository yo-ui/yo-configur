/**
 * SelectPanel
 */
class SelectPanel {

  init(value) {
    let that = this;
    this.content = $(`<div class="bm-select-panel">
               <span class="select">
                 <span class="text">微软雅黑</span>
                 <i class="icon fa fa-down"></i>
               </span>                          
               <div class="content">                                 
                 <ul></ul>
               </div>
             </div>`)
    let familyList = [
      {text:'微软雅黑',value: '微软雅黑'},
      {text:'电子数字',value: 'lcdD'},
      {text:'sans-serif',value: 'sans-serif'},
      {text:'Arial Black',value: 'Arial Black'},
      {text:'Bookman',value: 'Bookman'},
      {text:'Acens',value: 'Acens'}]
    familyList.forEach(function (family) {
      let li = $(`<li>${family.text}</li>`)
      li.css({'font-family':family.value})
      li.data('family',family.value)
      if(value==family.value) {
        li.addClass('active');
        that.content.find('.text').text(family.text);
      }
      that.content.find('ul').append(li);
    })

    that.content.find('.select').on('click',function () {
      $(this).next().toggle();
    });

    that.content.find('.content').on('mouseleave',function (e) {
      $(this).hide();
    });
    return that.content;
  }

  hide() {
    this.content.find('.content').hide();
  }

  text(value) {
    this.content.find('.text').text(value);
  }
}

export default SelectPanel;
