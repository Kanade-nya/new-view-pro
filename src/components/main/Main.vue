<script setup>

import {ArrowRight} from "@element-plus/icons-vue";
// import router from "@/router.js";
import {useRoute,useRouter} from "vue-router";
const router = useRouter();
const route = useRoute();

const changeRoute = ()=>{
  router.push("/test")
}
</script>

<template>
  <el-button @click="changeRoute">点击</el-button>
  <div class="main">
    <el-main>

      <div class="content">
        <div class="content-header"></div>
        <div class="content-wrapper">
          <div class="xy-wide-top"></div>
          <div id="wide">
            <div class="wrapper">
              <el-card>
              <div class="classify-more">
                    <div class="classify">IP分类</div>
                    <el-icon>
                      <ArrowRight/>
                    </el-icon>
              </div>
                <div class="cla-content">
                  <div class="cla-a-content">
                    <div>介绍一</div>
                    <img src="../../assets/img_1.png" alt="none">
                  </div>

                  <div class="cla-a-content">
                    <div>介绍一</div>
                    <img src="../../assets/img_1.png" alt="none">
                  </div>

                  <div class="cla-a-content">
                    <div>介绍一</div>
                    <img src="../../assets/img_1.png" alt="none">
                  </div>

                  <div class="cla-a-content">
                    <div>介绍一</div>
                    <img src="../../assets/img_1.png" alt="none">
                  </div>
                </div>
              </el-card>

              <el-card>
                <div class="classify-more">
                  <div class="classify">IP分类</div>
                  <el-icon>
                    <ArrowRight/>
                  </el-icon>
                </div>
                <div class="cla-content">
                  <div class="cla-a-content">
                    <div>介绍一</div>
                    <img src="../../assets/img_1.png" alt="none">
                  </div>

                  <div class="cla-a-content">
                    <div>介绍一</div>
                    <img src="../../assets/img_1.png" alt="none">
                  </div>

                  <div class="cla-a-content">
                    <div>介绍一</div>
                    <img src="../../assets/img_1.png" alt="none">
                  </div>

                  <div class="cla-a-content">
                    <div>介绍一</div>
                    <img src="../../assets/img_1.png" alt="none">
                  </div>
                </div>
              </el-card>
            </div>
          </div>
          <div id="side">
            <div class="wrapper">
              <div class="update-line">
                更新日志
                <p>2024-05-29 施工中</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<style scoped>
.el-card{
  margin: 8px 0;
}
.cla-content{

  display: flex;
  flex-wrap: wrap;
}
.cla-a-content{
  width: 25%;
}
.cla-content{
  img{
    max-width: 100%;
    max-height: 240px;
  }
}
.content-wrapper {
  overflow: hidden;
  clear: both;
  max-width: 1280px;
  min-height: 512px;
  margin: auto;
  padding: 16px 8px;
}

.xy-wide-top {
  overflow: hidden;
  padding: 12px 0 24px;
}

#wide {
  float: left;
  padding: 0;
  width: 65%;
  background-color: grey;

  .wrapper {
    padding: 8px 0;
  }
}

#side {
  float: right;
  width: 35%;
  background-color: deepskyblue;

  .wrapper {
    padding: 8px 0 8px 21px;
  }
}

.main {
  width: 60%;
  margin: 0 20%;
}
.el-card{
  width: 100%;
}
.classify-more {
  display: flex;
  align-items: center;
  justify-content: left;

  .classify {
    max-width: 200px;
    height: 20px;
    line-height: 20px;
  }

  svg {
    height: 20px;
    width: 20px;
    margin-top: 3px;
  }
}

</style>