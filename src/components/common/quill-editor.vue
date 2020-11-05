<template lang="html">
  <!-- <div class="bm-common-quill-editor-com">
    <div ref="editor" class="text"></div>
  </div> -->
  <div class="bm-common-quill-editor-com">
    <quill-editor
      ref="quillEditor"
      v-model="condition.content"
      :options="qillOptions"
      @change="cutoff($event, condition.content, 1000)"
    />
    <bm-upload ref="bmUpload" @success="successCallback"> </bm-upload>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
// import { URL, Constants } from "@/common/env";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
// import bmCommon from "@/common/common";

// eslint-disable-next-line no-undef
const { mapGetters, mapMutations, mapActions } = Vuex;
export default {
  name: "bm-common-quill-editor-com",
  data() {
    let that = this;
    return {
      // uploadPath,
      quillEditor: null,
      condition: {
        content: ""
      },
      qillOptions: {
        placeholder: "",
        modules: {
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"], // toggled buttons
              ["blockquote", "code-block"],

              // [{ header: [1, 2, false] }], // custom button values
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }], // superscript/subscript
              [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
              [{ direction: "rtl" }], // text direction

              [{ size: ["small", false, "large", "huge"] }], // custom dropdown
              [{ header: [1, 2, 3, 4, 5, 6, false] }],

              [{ color: [] }, { background: [] }], // dropdown with defaults from theme
              [{ font: [] }],
              [{ align: [] }],
              ["link", "image", "video"],
              ["clean"]
              // [{ header: [1, 2, false] }],
              // ["bold", "italic", "underline"],
              // ["clean"]
            ],
            handlers: {
              image(value) {
                if (value) {
                  that.$refs.bmUpload?.$el
                    .querySelector(".el-upload__input")
                    .click();
                } else {
                  this.quill.format("image", false);
                }
              }
            }
          }
        }
      }
    };
  },
  model: {
    prop: "value",
    event: "change"
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo"
    })
  },
  props: {
    value: {
      type: String,
      default: ""
    }
    // isClear: {
    //   type: Boolean,
    //   default: false
    // },
    // menus: {
    //   type: Array,
    //   default: () => {
    //     return [];
    //   }
    // }
  },
  components: {
    quillEditor,
    bmUpload: () =>
      import(
        /* webpackChunkName: "bm-component-upload" */ "@/components/common/upload.vue"
      )
  },
  watch: {
    // isClear(val) {
    //   // 触发清除文本域内容
    //   if (val) {
    //     this.editor.txt.clear();
    //     this._info = null;
    //   }
    // },
    // value: function(value) {
    //   if (value !== this.quillEditor.getText()) {
    //     this.quillEditor.setText(value);
    //   }
    // },
    "condition.content"(value) {
      // bmCommon.log(value);
      this.$emit("change", value);
    }
    // value为编辑框输入的内容，这里我监听了一下值，当父组件调用得时候，如果给value赋值了，子组件将会显示父组件赋给的值
  },
  mounted() {
    const { value = "" } = this;
    this.setEditor();
    // this.quillEditor.setText(value);
    this.condition.content = value;
  },
  methods: {
    ...mapMutations(),
    ...mapActions(),
    successCallback(url) {
      // let { info = {} } = this;
      // info.backgroundImage = url;
      let quill = this.$refs.quillEditor?.quill;
      quill.focus();
      let length = quill.getSelection().index;
      quill.insertEmbed(length, "image", this.$loadImgUrl(url));
      quill.setSelection(length + 1);
    },
    setEditor() {
      let quillEditor = this.$refs.quillEditor?.quill;
      this.quillEditor = quillEditor;
    },
    cutoff(e, v, d) {
      e.quill.deleteText(d, 1, v);
    }
  }
};
</script>

<style lang="less">
@import "../../assets/less/components/common/quill.editor.less";
// .editor {
//   width: 100%;
//   margin: 0 auto;
//   position: relative;
//   z-index: 0;
// }
// .toolbar {
//   border: 1px solid #ccc;
// }
// .text {
//   border: 1px solid #ccc;
//   min-height: 500px;
// }
</style>
