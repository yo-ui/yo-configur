/**
 * 上传
 */
class Upload {

	constructor(name,width,height) {
       $('.configur-panel').find('.configur-panel-h span').text(name)
       $('.configur-panel').find('.configur-panel-c').html(this.template());
       $('.configur-panel-content').css({width: width,height: height})
       $('.configur-panel').show();
       $('.configur-upload div').each(function() {
       	 $(this).on('click',function() {
       	 	$(this).addClass('active')
       	 	$(this).siblings().each(function() {
       	 		$(this).removeClass('active')
       	 	})
       	 })
       })
	}

	template(){
		return `<div>
	             <div class="configur-upload-list">
		             <div class="configur-upload">
		               <div><img src="static/images/FBK.png"/></div>
		               <div><img src="static/images/background/5P.png"/></div>
		               <div><img src="static/images/FBK.png"/></div>
		               <div><img src="static/images/FBK.png"/></div>
		               <div><img src="static/images/FBK.png"/></div>
		             </div>
	             </div>
	             <div class="upload">
		              <p>上传背景图片</p>
		              <form>
		                <input type="file" name="bg"/>
		              </form>
			      </div>
	            </div>`;
	}
	
}

export default Upload;
