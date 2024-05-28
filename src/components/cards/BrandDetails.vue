<script setup>

import {ArrowRight} from "@element-plus/icons-vue";
</script>

<template>
<div class="brand-details">
  <div style="display: inline-block"><slot></slot></div>
  <ArrowRight style="height: 16px;width: 16px"/>
</div>
</template>

<style scoped>
.brand-details{
  display: flex;
  max-width: 240px;
  height: 24px;
  font-size: 14px;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
}
.brand-details:hover{
  background-color: var(--el-menu-hover-bg-color);
  color: var(--el-menu-hover-text-color);
  outline: none;
}
</style>