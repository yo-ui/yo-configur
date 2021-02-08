// 静态文本
import textCom from "@/core/components/basic/text/Text.js";

const Library = {
  textCom
};
class ComponentLibrary {
  static getInstance(info) {
    let { type = "" } = info || {};
    let key = `${type}Com`;
    return new Library[key](info);
  }
}
export default ComponentLibrary;
