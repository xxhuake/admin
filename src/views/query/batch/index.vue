<template>
  <div class="box">
    <div class="data_query public-query">
      <div class="d_top">
        <h5 class="before">历史查询</h5>
        <div class="d_tools">
          <div class="block">
            <p>起止时间：</p>
            <el-date-picker
              v-model="value1"
              format="YYYY-MM-DD HH:mm:ss"
              value-format="YYYY-MM-DD HH:mm:ss"
              type="datetimerange"
              start-placeholder="Start date"
              end-placeholder="End date"
              @change="changed_date"
            />
          </div>
          <div class="d_vague in_public">
            <p>模糊查询：</p>
            <el-input placeholder="请输入查询条件" />
          </div>
          <div class="d_vague in_public">
            <p>单点查询：</p>
            <el-select v-model="value" placeholder="--请选择--">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <div class="d_vague in_public mt-5px">
            <el-button type="primary">查询</el-button>
            <el-button type="success">导出</el-button>
          </div>
        </div>
      </div>
    </div>
    <Table />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Table from "@/components/Query/Batch/Table.vue"
//#region 单点查询 select 选择器
const value = ref("")
const options = [
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2"
  },
  {
    value: "Option3",
    label: "Option3"
  },
  {
    value: "Option4",
    label: "Option4"
  },
  {
    value: "Option5",
    label: "Option5"
  }
]
//#endregion
const value1 = ref<[string, string]>(["2023-08-01 00:00:00", "2021-08-31 23:59:59"])
const changed_date = (val: [string, string]) => {
  console.log(...val)
}
</script>

<style lang="scss">
//引入公共样式
@import "@/styles/public-query.scss";
</style>
