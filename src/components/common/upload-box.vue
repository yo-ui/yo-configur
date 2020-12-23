<template>
  <el-dialog
    v-dialogDrag="true"
    class="bm-upload-com"
    :title="$lang('图片上传')"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :visible.sync="showDialogStatus"
    width="70vw"
  >
    <el-image
      ref="imageRef"
      v-if="imageList && imageList.length > 0"
      :src="$loadImgUrl(currentImage || imageList[0])"
      :preview-src-list="imageList.map(item => $loadImgUrl(item))"
      fit="fill"
      @click="selectImageEvent"
    >
    </el-image>
    <div class="img-list">
      <div
        class="img-box"
        v-for="(item, index) in imageList"
        :key="index"
        @click="selectImageEvent(item)"
        :style="`background-image:url(${$loadImgUrl(item)})`"
      >
        <!-- <el-image
          :src=""
          :preview-src-list="imageList.map(item => $loadImgUrl(item))"
          fit="fill"
          :lazy="true"
          :class="{ active: selectImages.indexOf(item) > -1 }"
          @click="selectImageEvent"
        >
        </el-image> -->
        <i class="el-icon-close" @click.stop="removeImageEvent(item)"></i>
        <i class="el-icon-check" v-if="selectImages.indexOf(item) > -1"></i>
        <i class="preview-btn" @click.stop="previewImageEvent(item)">{{
          $lang("预览")
        }}</i>
      </div>
      <el-upload
        :auto-upload="true"
        class="upload-btn"
        drag
        :data="uploadData"
        :headers="uploadHeaders"
        ref="upload"
        name="files"
        :limit="limit"
        multiple
        :action="uploadUrl"
        :show-file-list="false"
        :on-success="onSuccessEvent"
        :on-exceed="onExceedEvent"
        :before-upload="beforeUploadEvent"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>
    <template #footer>
      <el-button @click="cancelEvent">{{ $lang("取消") }}</el-button>
      <el-button
        type="primary"
        :disabled="selectImages.length < 1"
        @click="submitEvent"
        >{{ $lang("提交") }}</el-button
      >
    </template>
  </el-dialog>
</template>

<script>
import bmCommon from "@/common/common";
import { URL as _URL } from "@/common/env";
import { Constants } from "@/common/env";
// eslint-disable-next-line no-undef
const { mapActions, mapMutations, mapGetters } = Vuex;
export default {
  data() {
    return {
      // 上传文件地址
      // uploadUrl: _URL.upload2OssUrl,
      limit: 5, //最大上传个数
      // 预览图片地址
      selectImages: [],
      currentImage: "",
      showDialogStatus: false,
      uploadData: {
        subDir: Constants.UPLOADDIR.IMG
      },
      condition: {
        multipe: false
      }
    };
  },
  computed: {
    ...mapGetters({
      platform: "getPlatform",
      userInfo: "getUserInfo",
      imageList: "getImageList"
    }),
    // currentImage() {
    //   let { imageList = [] } = this;
    //   let [image = ""] = imageList || [];
    //   return image;
    // },
    uploadUrl() {
      let { platform = "" } = this;
      return platform + _URL.upload2OssUrl;
    },
    uploadHeaders() {
      let { userInfo = {} } = this;
      let { token = "" } = userInfo || {};
      let headers = {};
      headers[Constants.AUTHORIZATION] = token;
      return headers || {};
    }
  },
  methods: {
    ...mapMutations({
      setImageList: "setImageList"
    }),
    ...mapActions(),
    previewImageEvent(item) {
      this.currentImage = item;
      this.$refs.imageRef?.clickHandler();
    },
    // 删除图片
    removeImageEvent(item) {
      let { condition, selectImages = [], imageList = [] } = this;
      let { multipe = false } = condition;
      // condition.image = "";
      // this.imageUrl = "";
      if (multipe) {
        let index = selectImages.findIndex(_item => _item == item);
        selectImages.splice(index, 1);
      } else {
        this.selectImages = [];
      }
      let index = imageList.findIndex(_item => _item == item);
      imageList.splice(index, 1);
      this.setImageList(imageList);
    },
    cancelEvent() {
      this.showDialogStatus = false;
    },
    submitEvent() {
      let { selectImages = [], condition } = this;
      let { callback = () => {} } = condition;
      this.showDialogStatus = false;
      // this.$emit("success", imageUrl);
      callback && callback(selectImages);
    },
    selectImageEvent(item) {
      let { selectImages = [], condition } = this;
      let { multipe = false } = condition;
      if (multipe) {
        let index = selectImages.findIndex(_item => _item == item);
        if (index > -1) {
          selectImages.splice(index, 1);
        } else {
          selectImages.push(item);
        }
      } else {
        this.selectImages = [item];
      }
    },
    show(item = {}) {
      let { condition } = this;
      let { callback = () => {}, multipe = false } = item || {};
      condition.callback = callback;
      condition.multipe = multipe;
      this.showDialogStatus = true;
    },
    // //上传文件到服务器
    // uploadEvent() {
    //   this.$refs.upload?.submit();
    // },
    onExceedEvent(file, fileList) {
      let { limit = 0 } = this;
      this.$$msgError(`图片最多同时上传${limit}张`);
    },
    onSuccessEvent(res, file, fileList) {
      let { imageList = [], condition, selectImages = [] } = this;
      let { code = "", message = "", result = [] } = res || {};
      let { multipe = false } = condition;
      if (code == Constants.CODES.SUCCESS) {
        let [fileName = ""] = result || [];
        // condition.image = fileName || "";
        // this.imageUrl = fileName;
        if (multipe) {
          selectImages.push(fileName);
        } else {
          this.selectImages = [fileName];
        }
        bmCommon.log(imageList, fileName);
        imageList.push(fileName);
        this.setImageList(imageList);
      } else {
        this.$$msgError(message || "图片上传失败");
      }
      // this.$refs.upload?.clearFiles();
      // this.$emit("success", this.imageUrl);
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

<style lang="less" scoped>
@import (reference) "./../../assets/less/common.less";
.bm-upload-com {
  // .flex(none) !important;
  /deep/ .el-dialog {
    .df;
    .h(65vh);
    flex-direction: column;
    .el-dialog__body {
      .flex(1);
      .pt(0);
      .touch-y;
    }
    .el-image {
      // .db(none);
      .squ(0);
    }
    .img-list {
      .df;
      flex-wrap: wrap;
      .img-box {
        .posr;
        .mr(15);
        .mb(15);
        .bg-img;
        .squ(120);
        .bor(1px solid @grayC);
        .pointer;
        &:hover {
          .el-icon-close {
            .db;
          }
        }
        .el-icon-check {
          .posa;
          right: 5px;
          bottom: 5px;
          .c(@green-dark);
          .fz(22);
          .fw(700);
        }
        .preview-btn {
          .posa;
          left: 5px;
          bottom: 5px;
          .fz(12);
          .p(2px 5px);
          .c(@themes);
          .bc(@grayE);
          .tran;
          &:hover {
            .bc(rgba(0, 0, 0, 0.9));
            .c(@white);
          }
        }
        .el-icon-close {
          .posa;
          .db(none);
          .pointer;
          right: 5px;
          top: 5px;
          .bc(rgba(0, 0, 0, 0.7));
          .c(@white);
          .br(50%);
          .p(3px);
        }
      }
      .upload-btn {
        .bor(1px solid @grayC);
        .squ(120);
        .fz(25);
        .pointer;
        .el-upload-dragger {
          .bor(none);
          .br(0);
          .df;
          align-items: center;
          justify-content: center;
          .squ(120);
        }
      }
    }
  }
  // .mr(15);
  // .br(0);
  // }
  // /deep/
}
</style>
