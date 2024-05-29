<script setup>
import {onMounted, reactive, ref} from "vue";
import UpImg from "@/components/user/UpImg.vue";
// import {createFilter} from "vite";

const form = reactive({
  name: '',
  goodsIp: '',
  producer: '',
  character: '',
  type: '',
  productionDate: '',
  series: ''
})

const disabledDate = (time) => {
  return time.getTime() > Date.now()
}

const loadAll  = () => {
  return [
    {value: '吧唧'},
    {value: '拍立得'},
    {value: 'epick卡片'},
    {value: '亚克力支架'},
    {value: '生写'},
    {value: '明信片'},
    {value: '毛绒玩具'},
    {value: '色纸'},
    {value: '钥匙链'},
    {value: 'CD专辑'}
  ]
}

const restaurants = ref([])
const querySearch = (queryString,cb) => {
  const results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value
  cb(results)
}
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
onMounted(() =>{
  restaurants.value = loadAll()
})

</script>

<template>
  <div class="upload">
    <!--  上传资料的页面-->
    <el-card>
      <el-form :inline="true" :model="form">
        <el-form-item label="谷子名称" style="width: 35%">
          <el-input
              v-model="form.name"
              placeholder="例如：Vol.3 三星花前"
          />
        </el-form-item>
        <el-form-item label="角色" style="width: 35%">
          <el-input
              v-model="form.character"
              placeholder="例如：星乃一歌"
          />
        </el-form-item>
        <el-form-item label="IP" style="width: 35%">
          <el-input
              v-model="form.goodsIp"
              placeholder="例如：世界计划 多彩舞台"
          />
        </el-form-item>
        <el-form-item label="系列" style="width: 35%">
          <el-input
              v-model="form.series"
              placeholder="例如：细闪10.VOC A"
          />
        </el-form-item>
        <el-form-item label="种类" style="width: 35%">
          <el-autocomplete
              v-model="form.type"
              :fetch-suggestions="querySearch"
              :trigger-on-focus="false"
          />
        </el-form-item>
        <div style="margin: 4px auto; font-size: 14px;font-weight: bolder">
          <el-text style="cursor: default">更多细节</el-text>
        </div>
        <!--      <br/>-->
        <el-form-item label="生产商" style="width: 30%">
          <el-input v-model="form.producer"/>
        </el-form-item>
        <el-form-item label="出荷日期">
          <el-date-picker
              v-model="form.productionDate"
              type="date"
              placeholder="选择日期"
              :disabled-date="disabledDate"
              style="font-family: 'Hiragino Sans GB', monospace"
          />
        </el-form-item>
        <UpImg/>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped>
.upload {
  width: 60%;
  margin: 0 20%;
}
</style>