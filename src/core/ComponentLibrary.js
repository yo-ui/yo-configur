// 静态文本
import textCom from "@/core/components/basic/text/Text.js";
import dynamicTextCom from "@/core/components/basic/dynamicText/index.js";

const Library = {
  textCom,
  dynamicTextCom
};
class ComponentLibrary {
  static getInstance(info) {
    let { type = "" } = info || {};
    let key = `${type}Com`;
    return new Library[key](info);
  }
}
export default ComponentLibrary;
