import RemoteObject from '@/assets/js/RemoteObject'
import ViewStage from '@/core/ViewStage'
import WebSocket from "@/assets/js/WebSocket";
/**
 *
 */
class Login {

  constructor(config) {
    this.config = config;
  }

  template() {
    return `<section class="bm-login">
              <div class="bm-login_from">
                <div class="bm-login_from_panel">
                    <div class="bm-login_system-name">登录账户</div>
                    <div>
                      <input type="text" name="loginName" class="bm-login_input form-control" placeholder="请输入账号" onfocus="" onblur="" maxlength="32">
                    </div>
                    <div>
                      <input type="password" name="password" value="" class="bm-login_input form-control" placeholder="请输入密码" onfocus="" onblur="" maxlength="32">
                    </div>                  
                  <span class="bm-login_message"><span style="height:30px">&nbsp;</span></span>
                  <input type="button" class="bm-button bm-button--primary bm-login_btn"  value="登录"/>
                </div>
              </div>
            </section>`;
  }

  init() {


  }
}

export default Login;
