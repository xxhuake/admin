<script lang="ts" setup>
import { reactive, ref } from "vue"
import { ElMessageBox, ElMessage, FormInstance } from "element-plus"
//定义空数组
interface IGetTableData {
  date: string
  name: string
  address: string
}
const allTableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-08",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-06",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-07",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
]

const state = reactive({
  page: 1,
  limit: 10,
  total: allTableData.length
})
const tableData = () => {
  return allTableData.filter(
    (item, index) => index < state.page * state.limit && index >= state.limit * (state.page - 1)
  )
}
//改变页码
const handleCurrentChange = (e: number) => {
  state.page = e
}
//改变页数限制
const handleSizeChange = (e: number) => {
  state.limit = e
}
const dialogVisible = ref<boolean>(false)
const formData = reactive({
  username: "",
  password: ""
})
const resetForm = () => {
  currentUpdateId.value = undefined
  formData.username = ""
  formData.password = ""
}
const formRef = ref<FormInstance | null>(null)
//#region 删
const handleDelete = (row: IGetTableData) => {
  ElMessageBox.confirm(`正在删除用户：${row.name}，确认删除？`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  })
}
//#endregion

//#region 改
const currentUpdateId = ref<undefined | string>(undefined)
const handleUpdate = (row: IGetTableData) => {
  currentUpdateId.value = row.name
  formData.username = row.name
  dialogVisible.value = true
}
const handleCreate = () => {
  ElMessage.success("修改成功")
  dialogVisible.value = false
}
//#endregion
</script>

<template>
  <div class="data_query">
    <div class="d_top">
      <h5 class="before">统计数值</h5>
      <div class="export_btn">
        <label>记录总数: </label>
        <el-button type="success">导出</el-button>
        <div id="table">
          <el-table :data="tableData()" height="250" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
            <el-table-column fixed="right" label="操作" width="150" align="center">
              <template #default="scope">
                <el-button type="primary" text bg size="small" @click="handleUpdate(scope.row)">修改</el-button>
                <el-button type="danger" text bg size="small" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="example-pagination-block">
            <el-pagination
              background
              layout="prev, pager, next ,total,sizes"
              :total="state.total"
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
            />
          </div>
          <el-dialog v-model="dialogVisible" title="修改用户" @close="resetForm" width="30%">
            <el-form ref="formRef" :model="formData" label-width="100px" label-position="left">
              <el-form-item prop="username" label="用户名">
                <el-input v-model="formData.username" placeholder="请输入" />
              </el-form-item>
            </el-form>
            <template #footer>
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="handleCreate">确认</el-button>
            </template>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.d_top {
  width: 100%;
  height: 100%;
}
.export_btn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  label {
    font-size: 14px;
    font-weight: 600;
    margin-left: 20px;
    white-space: nowrap;
  }
  #table {
    width: 100%;
    height: 100%;
  }
  .example-pagination-block {
    float: right;
  }
}
</style>
