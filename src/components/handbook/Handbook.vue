<script setup>

import BrandDetails from "@/components/cards/BrandDetails.vue";
import UserWant from "@/components/cards/UserWant.vue";
import Details from "@/components/cards/Details.vue";
import OfficialImage from "@/components/cards/OfficialImage.vue";

import {ref, watch} from 'vue'
import Character from "@/components/handbook/Character.vue";

const input = ref('')
const style = ref('')
watch(
    input,
    (newValue, oldValue) => {
      // console.log(newValue)
      // console.log(oldValue)
    })
function loadSearch(){
  console.log(input.value)
}
</script>

<template>
  <div>
    <div style="display: flex;justify-content: center;max-width: 1280px;min-width: 580px;width: 80%;margin: 0 10%">
      <el-card style="width: 100%">
        <!--      <div>this is card content</div>-->
        <div class="hb-search">
          <el-row style="width: 60%">
            <el-col :span="16"> <el-input v-model="input"  placeholder="Please input"/></el-col>
<!--            <el-col :span="1"/>-->
            <el-col :span="3" style="margin-left: 4px;width: 120px"> <el-input v-model="style"  placeholder="种类" /></el-col>
<!--            <el-col :span="1"/>-->
            <el-col :span="4" style="margin-left: 4px"><el-button @click="loadSearch">搜索</el-button></el-col>
          </el-row>

        </div>
        <Character/>
        <UserWant/>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.hb-search {

}
</style>