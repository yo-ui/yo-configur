// 静态文本
import text from "@/core/components/basic/text/index.js";
import dynamicText from "@/core/components/basic/dynamicText/index.js";
import panel from "@/core/components/basic/panel/index.js";

const Library = {
  text,
  dynamicText,
  panel
};
class ComponentLibrary {
  static getInstance(info) {
    let item = { ...info };
    let { type = "" } = item || {};
    return new Library[type](item);
  }
}
export default ComponentLibrary;
