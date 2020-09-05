// import Text from "@/components/component/basic/Text.vue";
// import Button from "@/components/component/basic/Button.vue";
// import Image from "@/components/component/basic/Image.vue";

export default {
  textCom: () =>
    import(
      /* webpackChunkName: "bm-component-text" */ "@/components/component/basic/Text.vue"
    ),
  buttonCom: () =>
    import(
      /* webpackChunkName: "bm-component-button" */ "@/components/component/basic/Button.vue"
    ),
  imageCom: () =>
    import(
      /* webpackChunkName: "bm-component-image" */ "@/components/component/basic/Image.vue"
    )
};
