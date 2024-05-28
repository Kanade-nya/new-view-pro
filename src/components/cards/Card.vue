<script setup>
import {onMounted, ref, watch} from 'vue'
import BrandDetails from "@/components/cards/BrandDetails.vue";
import UserWant from "@/components/cards/UserWant.vue";
import OfficialImage from "@/components/cards/OfficialImage.vue";
import Details from "@/components/cards/Details.vue";

// import {ref} from "vue";

function check() {

}

onMounted(() => {
  const col1 = document.querySelector('.coll')
  let col1_0 = col1.children[0]
  if (col1.style['height'] >= col1.style['width']) {
    console.log('高大')
    col1_0.style.width = '100%'
    col1_0.style.height = 'auto'
  } else {
    console.log('宽大')
    col1_0.style.width = 'auto'
    col1_0.style.height = '100%'
  }
  console.log(col1.style['height'])
})

const activeIndex = ref('details')
</script>
<template>
  <div style="display: flex;justify-content: center">
    <el-card style="max-width: 600px;min-width: 580px">
<!--      <div>this is card content</div>-->
      <el-row>
        <el-col class="coll" :span="8" style="height: 160px;position: relative;box-sizing: border-box;border: 2px solid deepskyblue;border-radius: 4px;overflow: hidden">
          <img class="inner-img" src="../../assets/img_2.png" alt="韩柏" style="position:absolute;object-fit: contain;display: inline-block"></el-col>
        <el-col :span="16" style="display: flex;align-items: center;flex-wrap: wrap;">
          <div class="introduce" style="flex-grow: 1;font-weight: bolder">世界计划: 细闪vol28.C 晓山瑞希</div>
          <div style="width: 100%;text-align: center">当前均价：40</div>
        </el-col>
      </el-row>
      <div><BrandDetails>世界计划 多彩舞台</BrandDetails></div>
      <div><BrandDetails>世嘉</BrandDetails></div>
      <div class="next-body">
        <el-tabs v-model="activeIndex" stretch=true>
           <el-tab-pane label="资料" name="details">
             <Details/>
           </el-tab-pane>
          <el-tab-pane  label="官方图" name="official">
            <OfficialImage/>
          </el-tab-pane>
          <el-tab-pane label="走势图" name="trend">走势图</el-tab-pane>
        </el-tabs>
      </div>
    <UserWant/>
    </el-card>
  </div>
</template>

<style scoped>
.el-menu{
  max-height: 40px;
}
.el-card{
  margin: 8px 0;
}
.inner-img {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  object-fit: cover;
}

.introduce {
  height: auto;
  overflow: auto;
  text-align: center;
  padding: 0 4px 0 4px;
}
.next-body{
  width: 100%;
  min-height: 300px
}

</style>