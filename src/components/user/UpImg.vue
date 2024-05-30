<template>
  <el-upload
      v-model:file-list="fileList"
      action="#"
      list-type="picture-card"
      :limit="imgLimited"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :before-upload="checkFormat"
      :auto-upload="false"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script setup>
import {ref} from 'vue'
import {Delete, Download, Plus, ZoomIn} from '@element-plus/icons-vue'
import {ElMessage, genFileId} from "element-plus";

// import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const imgLimited = 1

const checkFormat = (rawFile) => {
  console.log(rawFile.type)
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Goods picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Goods picture size can not exceed 2MB!')
    return false
  }
  return true
}


const fileList = ref([])

//
// const handleRemove = (file) => {
//   console.log(file)
// }


const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
      `当前状态只允许上传 1 图片, 你选择了 ${files.length} 图片,一共想上传 ${
          files.length + uploadFiles.length
      } 图片, 请只上传一张图片`
  )
  // dialogImageUrl.value.clearFiles()
  // const file = files[0]
  // file.uid = genFileId()
  // dialogImageUrl.value.handleStart(file)
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const handleDownload = (file) => {
  console.log(file)
}
const handleRemove = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

</script>
<style scoped>
.el-dialog {
  overflow: hidden;

}

.el-dialog img {
  overflow: hidden;
  max-width: 100%;

}
</style>