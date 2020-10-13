/**
 * SelectPanel
 */
class Tree {

  static init(tree) {
    tree.on('click',function () {
      if($(this).next().is(":hidden")) {
        $(this).next().show();
        $(this).find('i').addClass('fa-down')
        $(this).find('i').removeClass('fa-left')
      }else {
        $(this).next().hide();
        $(this).find('i').addClass('fa-left')
        $(this).find('i').removeClass('fa-down')
      }
    })
  }

}

export default Tree;
