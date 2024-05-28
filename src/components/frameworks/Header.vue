<script setup>
import {ref} from "vue";
import {Lightning} from "@element-plus/icons-vue";

const data = ref(0)
const activeIndex = ref('1')
function dataLog(){
  console.log(data.value)
}
</script>

<template>
  <div class= "header">
    <div class="brand">
      <img src="../../assets/logo.png" alt="logo">
<!--      <div>谷云</div>-->
    </div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        :ellipsis="false"
    >

      <el-menu-item index="1">首页</el-menu-item>
      <div class="flex-glow"></div>
      <el-menu-item index="2">图鉴</el-menu-item>
      <el-menu-item index="3">市场</el-menu-item>
      <el-menu-item index="4">吃谷</el-menu-item>
    </el-menu>
  </div>

</template>

<style scoped>
.brand{
  height: 60px;
  cursor:default;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 240px;
  font-size: 24px;
  img,div{
    overflow: hidden;
    display: inline-block;
  }
  img{
    height: 100%;
  }
}
.el-menu:nth-child(0){
  background-color: white;
}
.el-menu{
  flex: 5;
}
.header{
  display: flex;
}
.flex-glow{
  flex-grow: 1;
}
.el-menu-item{
  //flex-grow: 1;
}
</style>