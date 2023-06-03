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
            <p>群组查询：</p>
            <el-select v-model="value" placeholder="--请选择--">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <div class="d_vague in_public m-t5px">
            <el-button type="primary">查询</el-button>
            <el-button type="success">导出</el-button>
          </div>
        </div>
      </div>
    </div>
    <Chart />
    <Table />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Chart from "@/components/Query/Group/G_chart.vue"
import Table from "@/components/Query/Group/G_Table.vue"
const value1 = ref<[string, string]>(["00-00-00 00:00:00", "00-00-00 00:00:00"])
const changed_date = (val: [string, string]) => {
  console.log(val)
}
//#region 群组查询 select 选择器
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
</script>

<style lang="scss">
@import "@/styles/public-query.scss";
</style>
