let wsHost=process.env.NODE_ENV==='production'?'https://eiot.energyiot.cn':'http://localhost:8081';
let host=process.env.NODE_ENV==='production'?'/service':'/service';
let debug=true;
if(process.env.ENV==='prod'){
  debug=false
}
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
  "getEndPoint": host+"/upload/get/endPoint",
}
