<template>
  <div
    :contenteditable="info.editable"
    @dblclick.stop="dbClickEvent"
    :style="comStyle"
  >
    {{ info.content }}
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  name: "dynamicTextStyleCom",
  data() {
    return {};
  },
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    ...mapGetters(),
    comStyle() {
      let { info = {} } = this;
      let { width = "", height = "", backgroundColor = "" ,color=''} = info || {};
      return {
        width: width + "px",
        height: height + "px",
        backgroundColor: backgroundColor,
        color:color,
        // backgroundImage: 'url(' + val.backPic + ')',
        // color: val.color
      };
    }
  },
  methods: {
    ...mapMutations(
      {

      }
    ),    
    dbClickEvent() {
      this.editable = true;
      // this.addBodyEvent();
    },
  },
};
</script>

<style></style>
