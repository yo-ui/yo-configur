
let wsHost=process.env.NODE_ENV==='production'?'ws://127.0.0.1:8082/configur':'';
let host=process.env.NODE_ENV==='production'?'/configur':'/configur';
let debug=process.env.NODE_ENV==='production'?false:true
export default
{
  "debug": debug,
  "websocketUrl":wsHost+ "/websocket",
  "verifyInfo": host+"/common/verifyInfo",
  "organizList": host+"/common/organizList",
  "devicePoints": host+"/common/devicePoints",
  "devicePointHstData":host+ "/common/devicePointHstData",
  "deviceList":host+"/common/deviceList",
  "getDevice":host+"/common/getDevice",
  "get": host+"/canvas/get",
  "save": host+"/canvas/save",
  "control":host+ "/canvas/control",
  "token":host+ "/canvas/token",
  "start":host+ "/canvas/start",
  "stop":host+ "/canvas/stop",
  "upload": host+"/file/upload"
}
