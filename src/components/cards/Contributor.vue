<script setup>

</script>

<template>
<div class="contributors">
  <el-card style="max-width: 600px;min-width: 580px">
    <h4>贡献者</h4>
    <p><img src="../../assets/img_2.png"> <span>小豆</span> <span>2024-12-05</span></p>
  </el-card>

</div>
</template>

<style scoped>
.contributors{
  display: flex;
  justify-content: center;
}
h4,p{
  margin: 8px 0;
  max-height: 20px;
}
h4{
  margin: 16px 0;
  margin-top: 8px;
}

p{
  display: flex;
  align-items: center;
}
p>img{
  display: inline-block;
  height: 100%;
  max-width: 28px;
  object-fit: fill;
  overflow: hidden;
}
</style>