let wsHost=process.env.NODE_ENV==='production'?'https://eiot.energyiot.cn':'http://192.168.0.175:8081';//https://eiot.energyiot.cn
let host=process.env.NODE_ENV==='production'?'/service':'/service';
let debug=process.env.NODE_ENV==='production'?false:true;
let imgHost=process.env.NODE_ENV==='production'?'http://pic.energyiot.cn':'http://test-pic.energyiot.cn'
export default
{
  "debug": debug,
  "websocketUrl": wsHost+"/ws",
  "verifyInfo": host+"/configur/common/verifyInfo",
  "organizList": host+"/configur/common/organizList",
  "devicePoints": host+"/configur/common/devicePoints",
  "devicePointHstData": host+"/configur/common/devicePointHstData",
  "deviceList": host+"/configur/common/deviceList",
  "getDevice": host+"/configur/common/getDevice",
  "push": host+"/configur/push",
  "get": host+"/configur/canvas/get",
  "save": host+"/configur/canvas/save",
  "control": host+"/configur/canvas/control",
  "token": host+"/configur/canvas/token",
  "start": host+"/configur/canvas/start",
  "stop": host+"/configur/canvas/stop",
  "upload": host+"/upload/upload2Oss",
  "imgHost": imgHost
}
