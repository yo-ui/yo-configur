// 静态文本
import text from "@/core/components/basic/text/index.js";
import dynamicText from "@/core/components/basic/dynamicText/index.js";

const Library = {
  text,
  dynamicText
};
class ComponentLibrary {
  static getInstance(info) {
    let item = { ...info };
    let { type = "" } = item || {};
    if (type === "text" || type === "dynamicText") {
      return new Library[type](item);
    } else {
      return "";
    }
  }
}
export default ComponentLibrary;
