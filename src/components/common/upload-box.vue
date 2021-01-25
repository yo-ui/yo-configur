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
      :src="$loadImgUrl(currentImage || imageList[0].picUrl)"
      :preview-src-list="imageList.map(item => $loadImgUrl(item.picUrl))"
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
        :style="`background-image:url(${$loadImgUrl(item.picUrl)})`"
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
        <i
          class="el-icon-check"
          v-if="selectImages.indexOf(item.picUrl) > -1"
        ></i>
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

    <el-pagination
      background
      @size-change="handleSizeChangeEvent"
      @current-change="handleCurrentChangeEvent"
      :current-page="condition.pageNo"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="condition.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="condition.totalRecord"
    >
    </el-pagination>
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
const PAGESIZE = 10;
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
      imageList: [],
      condition: {
        multipe: false,

        pageNo: 1,
        pageSize: PAGESIZE,
        totalRecord: 0
      }
    };
  },
  computed: {
    ...mapGetters({
      platform: "getPlatform",
      userInfo: "getUserInfo"
      // imageList: "getImageList"
    }),
    // imageList() {
    //   let { condition, imageList = [] } = this;
    //   let { pageNo = 1, pageSize = PAGESIZE } = condition;
    //   return imageList.slice(pageSize * (pageNo - 1), pageSize * pageNo);
    // },
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
    ...mapActions({
      entPicListAction: "entPicList",
      entPicDelAction: "entPicDel",
      entPicAddAction: "entPicAdd"
      // entPicUpdateAction: "entPicUpdate"
    }),
    previewImageEvent(item) {
      let { picUrl = "" } = item || {};
      this.currentImage = picUrl;
      this.$refs.imageRef?.clickHandler();
    },
    // 切换每页数据
    handleSizeChangeEvent(val) {
      // console.log(`每页 ${val} 条`);
      this.condition.pageNo = 1;
      this.condition.pageSize = val;
    },
    // 切换页号
    handleCurrentChangeEvent(val) {
      // console.log(`当前页: ${val}`);
      this.condition.pageNo = val;
    },
    // 删除图片
    removeImageEvent(item) {
      let { condition, selectImages = [] } = this;
      let { multipe = false } = condition;
      // condition.image = "";
      // this.imageUrl = "";
      let { picUrl = "", id = "" } = item || {};
      if (multipe) {
        let index = selectImages.findIndex(_item => _item == picUrl);
        selectImages.splice(index, 1);
      } else {
        this.selectImages = [];
      }
      // let index = imageList.findIndex(_item => _item.id == item.id);
      // imageList.splice(index, 1);
      // this.setImageList(imageList);
      this.entPicDelFunc({ id }, () => {
        this.loadImageList();
      });
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
      let { picUrl = "" } = item || {};
      if (multipe) {
        let index = selectImages.findIndex(_item => _item == picUrl);
        if (index > -1) {
          selectImages.splice(index, 1);
        } else {
          selectImages.push(picUrl);
        }
      } else {
        this.selectImages = [item.picUrl];
      }
    },
    show(item = {}) {
      let { condition } = this;
      let { callback = () => {}, multipe = false } = item || {};
      condition.callback = callback;
      condition.multipe = multipe;
      this.loadImageList();
      this.showDialogStatus = true;
    },
    loadImageList() {
      this.entPicListFunc((list = []) => {
        this.imageList = list || [];
      });
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
        // imageList.push(fileName);
        // this.setImageList(imageList);
        this.entPicAddFunc({ picUrl: fileName }, () => {
          this.loadImageList();
        });
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
    },
    //获取项目图片列表
    entPicListFunc(callback) {
      let value = [];
      let { condition } = this;
      let { pageSize = Constants.PAGESIZE, pageNo = 1 } = condition;
      this.entPicListAction({
        pageNo,
        pageSize
      })
        .then(({ data }) => {
          let { code = "", result = [], message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            let {
              list = [],
              pageSize = Constants.PAGESIZE,
              totalNum = 0,
              pageNo = 1
            } = result || {};
            value = list || [];
            condition.pageSize = pageSize;
            condition.totalRecord = totalNum;
            condition.pageNo = pageNo;
          } else {
            // this.$$msgError(message || "添附件失败");
            bmCommon.error(message || "获取项目图片列表失败");
          }
          callback && callback(value);
        })
        .catch(err => {
          callback && callback(value);
          // this.$$msgError("添附件失败");
          bmCommon.error("获取项目图片列表失败", err);
        });
    },
    //删除项目图片
    entPicDelFunc(options, success, error) {
      let value = [];
      // let { condition } = this;
      this.entPicDelAction(options)
        .then(({ data }) => {
          let { code = "", message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            this.$$msgSuccess("项目图片删除成功！");
            success && success(value);
          } else {
            this.$$msgError(message || "项目图片删除失败！");
            error && error(value);
            // bmCommon.error(message || "项目图片删除失败");
          }
          // callback && callback(value);
        })
        .catch(err => {
          error && error(value);
          this.$$msgError("项目图片删除失败！");
          bmCommon.error("项目图片删除失败", err);
        });
    },
    // //更新项目图片
    // entPicUpdateFunc(options, success, error) {
    //   let value = [];
    //   // let { condition } = this;
    //   if (this._entPicUpdateStatus) {
    //     return;
    //   }
    //   this._entPicUpdateStatus = true;

    //   this.entPicUpdateAction(options)
    //     .then(({ data }) => {
    //       let { code = "", message = "" } = data || {};
    //       if (code == Constants.CODES.SUCCESS) {
    //         this.$$msgSuccess("项目图片更新成功！");
    //         success && success(value);
    //       } else {
    //         this.$$msgError(message || "项目图片更新失败！");
    //         // bmCommon.error(message || "项目图片更新失败");
    //         error && error(value);
    //       }
    //       this._entPicUpdateStatus = false;
    //     })
    //     .catch(err => {
    //       this._entPicUpdateStatus = false;
    //       error && error(value);
    //       this.$$msgError("项目图片更新失败！");
    //       bmCommon.error("项目图片更新失败", err);
    //     });
    // },
    //添加项目图片
    entPicAddFunc(options, success, error) {
      let value = [];
      // let { condition } = this;
      if (this._entPicAddStatus) {
        return;
      }
      this._entPicAddStatus = true;

      this.entPicAddAction(options)
        .then(({ data }) => {
          let { code = "", message = "" } = data || {};
          if (code == Constants.CODES.SUCCESS) {
            this.$$msgSuccess("项目图片更新成功！");
            success && success(value);
          } else {
            this.$$msgError(message || "项目图片更新失败！");
            // bmCommon.error(message || "项目图片更新失败");
            error && error(value);
          }
          this._entPicAddStatus = false;
        })
        .catch(err => {
          this._entPicAddStatus = false;
          error && error(value);
          this.$$msgError("项目图片更新失败！");
          bmCommon.error("项目图片更新失败", err);
        });
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
      // .pt(0);
      .p(0 15px);
      .df;
      flex-direction: column;
    }
    .el-image {
      // .db(none);
      .squ(0);
    }
    .img-list {
      // .df;
      .m(15px 0);
      max-height: 50vh;
      .flex(1);
      // justify-content: flex-start;
      // align-items: flex-start;
      // flex-wrap: wrap;
      .touch-y;
      .img-box {
        .posr;
        .fl;
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
        .fl;
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
