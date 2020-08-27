/**
 * 颜色
 */
class Color {

	static init(element,color,callback) {
	  let container = $('.sp-container');
	  if(container) {
      container.remove()
    }
    element.spectrum({
      allowEmpty:true,
      color: color,
      showInput: true,
      containerClassName: "full-spectrum",
      showInitial: true,
      showPalette: false,
      showSelectionPalette: true,
      showAlpha: true,
      maxPaletteSize: 10,
      preferredFormat: "hex",
      localStorageKey: "spectrum.demo",
      hide: function (color) {
        var hexColor = "transparent";
        let alpha = Number(color.getAlpha());
        if(alpha>0.3&&color) {
          hexColor = color.toHexString();
        }
        callback.call(this, hexColor);
      }
    });
	}
}

export default Color;
