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
            />
          </div>
          <div class="d_vague in_public">
            <p>模糊查询：</p>
            <el-input placeholder="请输入查询条件" />
          </div>
          <div class="d_vague in_public">
            <p>单点查询：</p>
            <el-select v-model="value" placeholder="--请选择--">
              <el-option v-for="item in options" :key="item.value" :label="item.lname" :value="item.lname" />
            </el-select>
          </div>
          <div class="d_vague in_public mt-5px">
            <el-button type="primary" @click="query_data">查询</el-button>
            <el-button type="success">导出</el-button>
          </div>
        </div>
      </div>
    </div>
    <Chart ref="chart" />
    <Table />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { ElMessage } from "element-plus"
import Chart from "@/components/Query/Data_query/Chart.vue"
import Table from "@/components/Query/Data_query/Table.vue"
import { AllPoints, Data_query } from "@/api/query/data-query"
const options = ref()
const chart = ref()
onMounted(async () => {
  const res = await AllPoints()
  options.value = res
})
//#region 单点查询 select 选择器
const value = ref("")
//#endregion
const value1 = ref<[string, string]>(["0000-00-00 00:00:00", "0000-00-00 23:59:59"])
const query_data = async () => {
  if (value.value === "") {
    return ElMessage.error("请选择查询条件")
  }
  const res: any = await Data_query({
    start_time: value1.value[0],
    end_time: value1.value[1],
    location_name: value.value
  })
  // 清空chart
  chart.value.$series = []
  chart.value.chart.clear()
  chart.value.option.title.text = value.value
  const num = res[0].cnum
  for (let i = 1; i <= num; i++) {
    const ch: any = [`ch${i}`]
    const st = "dch" + i
    const chname = res[0][`ch${i}name`]
    res.forEach((item: any) => {
      // ch.push(item[st], item["dtime"])
      ch.push([item.dtime, item[st]])
      //把 ch数组里第一个删除
    })
    ch.shift()
    chart.value.$series.push({
      name: chname,
      type: "line",
      smooth: true, //是否平滑
      showAllSymbol: true,
      symbol: "circle",
      symbolSize: 2,
      lineStyle: {
        color: "#7AA1FF"
      },
      itemStyle: {
        color: "#5B8FF9",
        borderWidth: 3,
        borderColor: "#5B8FF9"
      },
      data: ch
    })
  }
  chart.value.chart.setOption(chart.value.option)
}
</script>

<style lang="scss">
//引入公共样式
@import "@/styles/public-query.scss";
</style>
