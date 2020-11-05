<template>
  <div class="box">
    <div class="api-select">
      <el-input v-model="videoSrc" clearable v-focus></el-input>

      <div class="apiList">
        <!-- <span @click.stop="toggleList">接口{{ getNowApiName }}</span> -->
        <el-select v-model="api" clearable filterable>
          <el-option
            v-for="(item, index) in apiList"
            :key="index"
            :label="'接口' + index"
            :value="item"
          >
          </el-option>
        </el-select>

        <!-- <ul v-if="isShow">
          <li
            v-for="(item, index) in api"
            :key="index"
            @click="selectApi(index)"
          >
            接口 {{ index + 1 }}
          </li>
        </ul> -->
      </div>
      <p class="tips">{{ api.length }}个接口任君选择，解析不了请切换接口</p>
    </div>
    <iframe
      id="videos"
      :src="api + videoSrc"
      frameborder="0"
      :width="width"
      :height="height"
    ></iframe>
  </div>
</template>

<script>
import apiList from "@/common/lib/videoApi";
export default {
  data() {
    return {
      apiList,
      api: apiList[0],
      nowIndex: 0,
      videoSrc: "https://v.qq.com/x/cover/p8bvvfh82dqrqgq.html",
      isShow: false,
      width: "",
      height: ""
    };
  },
  // watch: {
  //   videoSrc: function() {
  //     document.getElementById("videos").src = this.getApi;
  //   },
  //   nowIndex: function() {
  //     document.getElementById("videos").src = this.getApi;
  //   }
  // },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    // toggleList: function() {
    //   if (this.isShow == false) {
    //     this.isShow = true;
    //   } else {
    //     this.isShow = false;
    //   }
    // },
    // selectApi: function(index) {
    //   this.nowIndex = index;
    //   this.toggleList();
    // }
  },
  // computed: {
  //   getNowApiName: function() {
  //     return this.nowIndex + 1;
  //   },
  //   getApi: function() {
  //     return this.api[this.nowIndex] + this.videoSrc;
  //   }
  // },
  mounted() {
    // let that = this;
    // // 点击空白区域，列表消失
    // document.documentElement.addEventListener("click", function() {
    //   that.isShow = false;
    // });
    // 计算屏幕长宽
    this.width = $(window).width() + "px";
    this.height = $(window).height() - 50 + "px";
    // // 打开默认播放默认视频
    // document.getElementById("videos").src = this.getApi;
  }
};
</script>

<style lang="less">
.bm-video-box {
  span,
  ul {
    user-select: none;
  }
  .api-select {
    width: 500px;
    height: 30px;
    line-height: 30px;
    border: 4px solid #fff;
    border-radius: 3px;
    position: relative;
    margin: auto;
  }
  .api-select input {
    width: 400px;
    height: 30px;
    border: none;
    outline: none;
    text-indent: 1em;
    position: absolute;
  }

  .api-select .apiList {
    position: absolute;
    right: 0;
    width: 100px;
    line-height: 30px;
    text-align: center;
    overflow-x: hidden;
  }
  .api-select .apiList span {
    display: block;
    cursor: pointer;
    position: relative;
    border-left: 2px solid black;
    background-color: #fff;
  }
  .api-select .apiList span:after {
    content: "";
    display: block;
    position: absolute;
    top: 11px;
    right: 8px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 8px solid black;
    border-bottom: none;
  }
  .api-select .apiList ul {
    background-color: #fff;
    margin-top: 4px;
    list-style-type: none;
    width: 120px;
    height: 300px;
    overflow-y: scroll;
  }
  .api-select .apiList ul li {
    cursor: pointer;
  }
  .api-select .apiList ul li:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
  .api-select .tips {
    position: absolute;
    right: -20px;
    color: #fff;
    transform: translateX(100%);
  }
}
</style>
