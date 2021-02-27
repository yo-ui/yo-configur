import bmCommon from "@/common/common";
import Component from "@/core/Component";
import "../../../../assets/less/components/component/basic/score.board.less";

class Text extends Component {
  constructor(props) {
    super(props);
  }
  init() {}

  decimal() {
    let { info = {} } = this;
    let { decimal = 0, content: value = "", decimalSeat = "0" } = info || {};
    let arr = [];
    let values = (value + "").split(".");
    let [, decimals = ""] = values || [];
    let { length = 0 } = decimals + "";
    decimals = decimals.split("");
    for (let i = 0; i < decimal - length; i++) {
      arr.push(decimalSeat);
    }
    return [...decimals, ...arr];
  }

  integer() {
    let { info = {} } = this;
    let { integer = 1, content: value = "", integerSeat = "" } = info || {};
    let arr = [];
    let values = (value + "").split(".");
    let [integers = ""] = values || [];
    let { length = 0 } = integers + "";
    integers = integers.split("");
    for (let i = 0; i < integer - length; i++) {
      arr.push(integerSeat);
    }
    return [...arr, ...integers];
  }

  //组件样式
  boardStyle() {
    let { info = {} } = this;
    let { board = {} } = info || {};
    let {
      width = "",
      height = "",
      // distance = 0,
      textAlign = "",
      // fontFamily = "",
      // color = "",
      // fontWeight = "",
      // fontStyle = "",
      // textDecoration = "",
      // fontSize = "",
      borderColor = "",
      borderStyle = "",
      borderWidth = "",
      borderRadiusTopLeft = 0,
      borderRadiusTopRight = 0,
      borderRadiusBottomLeft = 0,
      borderRadiusBottomRight = 0,
      marginTop = 0,
      marginBottom = 0,
      marginLeft = 0,
      marginRight = 0,
      borderTop = 0,
      borderBottom = 0,
      borderLeft = 0,
      borderRight = 0,
      paddingTop = 0,
      paddingBottom = 0,
      paddingLeft = 0,
      paddingRight = 0,
      shadowable = false,
      shadow,
      backgroundColor = "",
      backgroundType = "",
      backgroundImage = "",
      backgroundRepeat = "",
      backgroundSize = ""
    } = board || {};
    let styles = {
      // marginRight: `${distance}px`,
      margin: `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px `,
      padding: `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px `
    };
    if (width) {
      styles["width"] = `${width}px`;
      styles["min-width"] = `${width}px`;
    }
    if (height) {
      styles["height"] = `${height}px`;
      styles["line-height"] = `${height}px`;
    }
    if (borderTop) {
      if (borderStyle) {
        styles["border-top-style"] = borderStyle;
      }
      styles["border-top-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-top-color"] = borderColor;
      }
    } else {
      styles["border-top"] = "none";
    }
    if (borderBottom) {
      if (borderStyle) {
        styles["border-bottom-style"] = borderStyle;
      }
      styles["border-bottom-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-bottom-color"] = borderColor;
      }
    } else {
      styles["border-bottom"] = "none";
    }
    if (borderLeft) {
      if (borderStyle) {
        styles["border-left-style"] = borderStyle;
      }
      styles["border-left-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-left-color"] = borderColor;
      }
    } else {
      styles["border-left"] = "none";
    }
    if (borderRight) {
      if (borderStyle) {
        styles["border-right-style"] = borderStyle;
      }
      styles["border-right-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-right-color"] = borderColor;
      }
    } else {
      styles["border-right"] = "none";
    }
    styles[
      "border-radius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;

    if (textAlign) {
      styles["text-align"] = textAlign;
      if (textAlign == "justify") {
        styles["text-align-last"] = textAlign;
      }
    }
    styles["width"] = `${width}px`;
    styles["height"] = `${height}px`;
    if (borderTop) {
      if (borderStyle) {
        styles["border-top-style"] = borderStyle;
      }
      styles["border-top-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-top-color"] = borderColor;
      }
    } else {
      styles["border-top"] = "none";
    }
    if (borderBottom) {
      if (borderStyle) {
        styles["border-bottom-style"] = borderStyle;
      }
      styles["border-bottom-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-bottom-color"] = borderColor;
      }
    } else {
      styles["border-bottom"] = "none";
    }
    if (borderLeft) {
      if (borderStyle) {
        styles["border-left-style"] = borderStyle;
      }
      styles["border-left-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-left-color"] = borderColor;
      }
    } else {
      styles["border-left"] = "none";
    }
    if (borderRight) {
      if (borderStyle) {
        styles["border-right-style"] = borderStyle;
      }
      styles["border-right-width"] = `${borderWidth}px`;
      if (borderColor) {
        styles["border-right-color"] = borderColor;
      }
    } else {
      styles["border-right"] = "none";
    }
    styles[
      "border-radius"
    ] = `${borderRadiusTopLeft}px ${borderRadiusTopRight}px ${borderRadiusBottomRight}px ${borderRadiusBottomLeft}px`;
    // if (color) {
    //   styles["color"] = color;
    // }
    // if (fontSize) {
    //   styles["font-size"] = `${fontSize}px`;
    // }
    // if (fontFamily) {
    //   styles["font-family"] = `${fontFamily}`;
    // }
    // if (fontWeight) {
    //   styles["font-weight"] = fontWeight;
    // }
    // if (fontStyle) {
    //   styles["font-style"] = fontStyle;
    // }
    // if (textDecoration) {
    //   styles["text-decoration"] = textDecoration;
    // }
    if (shadowable) {
      let { x = 0, y = 0, color = "", type = "", spread = 0, blur = 0 } =
        shadow || {};
      styles[
        "box-shadow"
      ] = `${x}px ${y}px ${blur}px ${spread}px ${color} ${type}`;
    }
    if (backgroundType == "purity") {
      //纯色
      if (backgroundColor) {
        styles["background-color"] = backgroundColor;
      }
      if (backgroundImage) {
        styles["background-image"] = `url(${$vm.$loadImgUrl(backgroundImage)})`;
        if (backgroundRepeat) {
          styles["background-repeat"] = backgroundRepeat;
        }
        if (backgroundSize) {
          styles["background-size"] = backgroundSize;
        }
      }
    } else if (backgroundType == "gradient") {
      //渐变
      styles = { ...styles, ...this.gradientStyle(info.board) };
    }
    return styles || {};
  }

  template() {
    let { info = {} } = this;
    return super.wrap(
      { info },
      `
    <div class="bm-basic-score-board-com component"
    style="${this.composeStyles(this.comStyle())}">
${this.renderBoard()}
  </div>
    `
    );
  }

  renderBoard() {
    let { info = {} } = this;
    let { integer = 0, decimal = 0 } = info || {};
    let boardText = [];
    for (let i = 0; i < integer; i++) {
      boardText.push(`<span
        style="${this.composeStyles(this.boardStyle())}"
      >
        ${this.integer()[i]}
      </span>`);
    }
    if (decimal > 0) {
      boardText.push(
        `   <span style="${this.composeStyles(this.boardStyle())}">.</span>`
      );
      for (let i = 0; i < decimal; i++) {
        boardText.push(`
      <span
        style="${this.composeStyles(this.boardStyle())}"
      >
        ${this.decimal()[i]}
      </span>`);
      }
    }
    return boardText.join("");
  }

  refresh() {
    super.refresh();
    let { info = {} } = this;
    bmCommon.log(`${info.type}刷新 `);
    let { id = "" } = info || {};
    let $container = $(`#${id}>.component`);
    $container.html(this.renderBoard());
  }

  event() {}
}

export default Text;
