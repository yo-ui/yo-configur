<template>
  <el-upload
    :auto-upload="true"
    class="upload-box"
    drag
    :data="uploadData"
    ref="upload"
    name="files"
    :limit="1"
    :action="uploadUrl"
    :show-file-list="false"
    :on-success="onSuccessEvent"
    :before-upload="beforeUploadEvent"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <template v-if="imageUrl">
        <div
          class="img-box"
          :style="`background-image:url(${$loadImgUrl(imageUrl)})`"
        >
          <div class="icon-box">
            <i class="el-icon-delete" @click.stop="removeImageEvent"></i>
            <i class="el-icon-zoom-in" @click.stop="showImagePreviewEvent"></i>
          </div>
        </div>
      </template>
      <template v-else>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          {{ $lang("将文件拖到此处，或") }}<em>{{ $lang("点击上传") }}</em>
        </div>
        <div class="el-upload__tip" slot="tip">
          {{ $lang("只能上传jpg/png/jpeg/gif文件，且不超过500kb") }}
        </div>
      </template>
    </template>
  </el-upload>
</template>

<script>
// import bmCommon from "@/common/common";
import { URL as _URL } from "@/common/env";
import { Constants } from "@/common/env";
export default {
  data() {
    return {
      // 上传文件地址
      uploadUrl: _URL.upload2OssUrl,
      // 预览图片地址
      imageUrl: "",

      uploadData: {
        subDir: Constants.UPLOADDIR.IMG
      }
    };
  },
  methods: {
    // 删除图片
    removeImageEvent() {
      // let { condition } = this;
      // condition.image = "";
      this.imageUrl = "";
    },
    //预览图片
    showImagePreviewEvent() {
      let previewer = this.$refs.elImage;
      previewer && previewer.clickHandler();
    },
    // //上传文件到服务器
    // uploadEvent() {
    //   this.$refs.upload?.submit();
    // },
    onSuccessEvent(res, file, fileList) {
      // let { condition } = this;
      let { code = "", message = "", result = [] } = res || {};
      if (code == Constants.CODES.SUCCESS) {
        let [fileName = ""] = result || [];
        // condition.image = fileName || "";
        this.imageUrl = fileName;
      } else {
        this.$$msgError(message || "图片上传失败");
      }
      this.$refs.upload?.clearFiles();
      this.$emit("success", this.imageUrl);
    },
    beforeUploadEvent(file) {
      let that = this;
      let { type = "", name = "" } = file || {};
      type = type.toLowerCase();
      const isImage =
        type === "image/jpeg" || type === "image/gif" || type === "image/png";
      if (!isImage) {
        that.$$msgError(
          that.$lang(
            '不正确的文件扩展名{name}. 只支持 "jpg, gif, png" 的文件扩展名.',
            { name }
          )
        );
        return false;
      }
      if (isImage) {
        //通过file.size可以取得图片大小
        return new Promise(function(resolve, reject) {
          let imageUrl = URL.createObjectURL(file);
          var img = new Image();
          img.src = imageUrl;
          img.onload = function() {
            // if (img.width < 300) {
            //   that.$$msgError(
            //     that.$lang("图像文件{name}的宽度不能小于300像素.", { name })
            //   );
            //   reject(false);
            // } else if (img.height > 320) {
            //   that.$$msgError(
            //     that.$lang("图像文件{name}的高度不能超过320像素.", { name })
            //   );
            //   // return false;
            //   reject(false);
            // } else {
            //   // that.imageUrl = imageUrl;
            //   resolve(true);
            // }
            resolve(true);
          };
          img.onerror = function() {
            reject(false);
          };
        });
      } else {
        return false;
      }
    }
  }
};
</script>

<style></style>
