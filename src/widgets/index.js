// import Text from "@/components/component/basic/Text.vue";
// import Button from "@/components/component/basic/Button.vue";
// import Image from "@/components/component/basic/Image.vue";

export default {
  textCom: () =>
    import(
      /* webpackChunkName: "bm-component-text" */ "@/components/component/basic/text/index.vue"
    ),
  dynamicTextCom: () =>
    import(
      /* webpackChunkName: "bm-component-text" */ "@/components/component/basic/dynamicText/index.vue"
    ),
  buttonCom: () =>
    import(
      /* webpackChunkName: "bm-component-button" */ "@/components/component/basic/button/index.vue"
    ),
  imageCom: () =>
    import(
      /* webpackChunkName: "bm-component-image" */ "@/components/component/basic/image/index.vue"
    )
};
