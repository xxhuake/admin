<script lang="ts" setup>
import { reactive } from "vue"
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
</script>

<template>
  <div class="data_query">
    <div class="d_top">
      <h5 class="before">统计数值</h5>
      <div class="export_btn">
        <label>记录总数: </label>
        <el-button type="success">导出</el-button>
        <div id="table">
          <el-table :data="tableData()" height="250" style="width: 100%" stripe>
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
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
