import './../../assets/js/Sockjs.min';
import './../../assets/js/Stomp.min';

/**
 * socket
 */
class WebSocket {

  connect(url,theme,callback) {
    let socket = new SockJS(url);
    let stompClient = Stomp.over(socket);
    stompClient.connect({},function(){
      let subscription = stompClient.subscribe(theme, function (payload) {
        let result = JSON.parse(payload.body);
        if(result.code==200) {
          callback.call(this,result.result);
        }
      });
    },function (error){
      console.log("error: "+error);
    });
  }
}

export default WebSocket;
