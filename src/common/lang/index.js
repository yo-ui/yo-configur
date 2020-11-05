// import bmCommon from '@/common/common';
export const getLang = function(lang) {
  lang = lang.toLowerCase();
  // bmCommon.log("-----"+lang);
  if (!lang) {
    lang = "zh";
  }
  let langObj = require("./" + lang + ".js");
  // bmCommon.log(langObj,"---------");
  return langObj.default;
};
