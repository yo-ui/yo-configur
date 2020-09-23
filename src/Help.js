
/**
 *
 */
class Help {

  constructor(stage) {
    this.stage = stage;
  }

  init() {
    this.stage.panel.init("关于组态",Help.template(),600,600)
    this.stage.panel.show();
  }

  static template() {
    return `<div class="bm-help-list" style="display: flex;height: 100%">
               <div style="width: 150px;height: 100%;border-right: 1px solid #ddd;padding-right: 10px">
                 <ul class="bm-action-list">
                   <li class="active">快捷键</li>
                 </ul>
               </div>
               <div style="flex: 1;padding-left: 10px;height: 100%;overflow: auto">
                 <table class="table table-responsive">
                   <thead>
                     <tr>
                       <td>名称</td>
                       <td>说明</td>
                     </tr>
                   </thead>
                   <tbody>
                     <tr><td>Ctrl+A</td><td>选中舞台</td></tr>
                     <tr><td>Ctrl+B</td><td>绑定数据</td></tr>
                     <tr><td>Ctrl+S</td><td>保存画布</td></tr>
                     <tr><td>Ctrl+C</td><td>复制组件</td></tr>
                     <tr><td>Ctrl+D</td><td>删除组件</td></tr>
                     <tr><td>Ctrl+Z</td><td>回撤</td></tr>
                     <tr><td>Ctrl+L</td><td>锁定</td></tr>
                     <tr><td>Ctrl+K</td><td>解锁</td></tr>
                     <tr><td>Ctrl+G</td><td>组合</td></tr>
                     <tr><td>Ctrl+F</td><td>分解组合</td></tr>
                     <tr><td>Ctrl+V</td><td>框选->垂直平分</td></tr>
                     <tr><td>Ctrl+H</td><td>框选->水平平分</td></tr>
                     <tr><td>Ctrl+↑</td><td>框选->上对齐</td></tr>
                     <tr><td>Ctrl+→</td><td>框选->右对齐</td></tr>
                     <tr><td>Ctrl+↓</td><td>框选->下对齐</td></tr>
                     <tr><td>Ctrl+←</td><td>框选->左对齐</td></tr>
                     <tr><td>↑</td><td>上移</td></tr>
                     <tr><td>→</td><td>右移</td></tr>
                     <tr><td>↓</td><td>下移</td></tr>
                     <tr><td>←</td><td>左移</td></tr>
                   </tbody>             
                 </table>
               </div>
             </div>`;
  }
}

export default Help;
