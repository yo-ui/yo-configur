// 静态文本
import text from "@/core/components/basic/text/index.js";
import dynamicText from "@/core/components/basic/dynamicText/index.js";
import panel from "@/core/components/basic/panel/index.js";
import image from "@/core/components/basic/image/index.js";
import imageStatus from "@/core/components/basic/imageStatus/index.js";
import button from "@/core/components/basic/button/index.js";
import display from "@/core/components/basic/display/index.js";

const Library = {
  text,
  dynamicText,
  panel,
  button,
  image,
  imageStatus,
  display
};
class ComponentLibrary {
  static getInstance(info) {
    let item = { ...info };
    let { type = "" } = item || {};
    return new Library[type](item);
  }
}
export default ComponentLibrary;
