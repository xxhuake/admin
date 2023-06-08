<template>
  <el-dialog v-model="dialogVisible" title="添加硬体" width="30%">
    <span>测试一下</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const dialogVisible = ref(false)

defineExpose({
  dialogVisible
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
