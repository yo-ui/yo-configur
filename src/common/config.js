
let wsHost=process.env.NODE_ENV==='production'?'ws://127.0.0.1:8082/configur':'/configur';
let host=process.env.NODE_ENV==='production'?'':'/configur';
let debug=process.env.NODE_ENV==='production'?false:true
export default
{
  "debug": debug,
  "websocketUrl":wsHost+ "/websocket",
  "verifyInfo": host+"api/common/verifyInfo",
  "organizList": host+"api/common/organizList",
  "devicePoints": host+"api/common/devicePoints",
  "devicePointHstData":host+ "api/common/devicePointHstData",
  "deviceList":host+"api/common/deviceList",
  "getDevice":host+"api/common/getDevice",
  "get": host+"api/canvas/get",
  "save": host+"api/canvas/save",
  "control":host+ "api/canvas/control",
  "token":host+ "api/canvas/token",
  "start":host+ "api/canvas/start",
  "stop":host+ "api/canvas/stop",
  "upload": host+"api/file/upload"
}
