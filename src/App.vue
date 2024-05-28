<script setup>
import Header from "@/components/frameworks/Header.vue";
import Footer from "@/components/frameworks/Footer.vue";
import Body from "@/components/frameworks/Body.vue";

let nums = 1

function add() {
  nums ++
  console.log(nums)
}
</script>

<template>
  <div>
    <Header>
      Head!!
    </Header>
    <Body>body</Body>
    <Footer>footer</Footer>
    <el-button @click = add>123</el-button>
  </div>
</template>

<style scoped>

</style>
