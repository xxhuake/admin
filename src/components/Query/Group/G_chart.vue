<template>
  <div class="data_query">
    <div class="d_top">
      <h5 class="before">历史查询</h5>
      <div class="d_tools">
        <div class="d_vague in_public">
          <p>警戒线名称：</p>
          <el-input placeholder="请输入查询条件" />
        </div>
        <div class="d_vague in_public">
          <p>数值：</p>
          <el-input placeholder="请输入查询条件" />
        </div>
        <div class="d_vague in_public">
          <p>颜色：</p>
          <el-input placeholder="请输入查询条件" />
        </div>
        <div class="d_vague in_public" style="margin-top: 5px">
          <el-button type="primary">新增</el-button>
        </div>
        <div class="d_vague in_public">
          <p>最大值：</p>
          <el-input placeholder="请输入查询条件" />
        </div>
        <div class="d_vague in_public">
          <p>最小值：</p>
          <el-input placeholder="请输入查询条件" />
        </div>
        <div class="d_vague in_public" style="margin-top: 5px">
          <el-button type="primary">重绘</el-button>
          <el-button type="success">颜色管理</el-button>
        </div>
      </div>
      <div id="chart" ref="dom" style="width: 100%; height: 420px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts"
import { ref, onMounted, shallowRef } from "vue"
const dom = ref<echarts.ECharts>()
const chart = shallowRef()
const option = ref()
option.value = {
  title: {
    text: "Stacked Line"
  },
  tooltip: {
    trigger: "axis"
  },
  legend: {
    data: [
      "广州西门子变压器公司",
      "耐恒（广州）纸品有限公司",
      "广州斗原钢铁有限公司",
      "广州璨宇光学有限公司",
      "佐登妮丝（广州）有限公司"
    ]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "2021-12-20 00:00:00",
      "2021-12-20 06:00:00",
      "2021-12-20 12:00:00",
      "2021-12-20 18:00:00",
      "2021-12-21 00:00:00",
      "2021-12-21 06:00:00",
      "2021-12-21 12:00:00",
      "2021-12-21 18:00:00",
      "2021-12-22 00:00:00"
    ]
  },
  yAxis: {
    type: "value"
  },
  series: [
    {
      name: "广州西门子变压器公司",
      type: "line",
      // stack: 'Total',
      data: [130, 105, 135, 120, 175, 205, 185, 195, 208],
      smooth: true
    },
    {
      name: "耐恒（广州）纸品有限公司",
      type: "line",
      // stack: 'Total',
      data: [225, 222, 180, 234, 205, 180, 170, 220, 231],
      smooth: true
    },
    {
      name: "广州斗原钢铁有限公司",
      type: "line",
      // stack: 'Total',
      data: [180, 230, 201, 150, 230, 230, 240, 210, 240],
      smooth: true
    },
    {
      name: "广州璨宇光学有限公司",
      type: "line",
      // stack: 'Total',
      data: [180, 175, 201, 210, 200, 142, 205, 235, 248],
      smooth: true
    },
    {
      name: "佐登妮丝（广州）有限公司",
      type: "line",
      // stack: 'Total',
      data: [235, 250, 238, 252, 260, 245, 235, 235, 230],
      smooth: true
    }
  ]
}
onMounted(() => {
  chart.value = echarts.init(document.getElementById("chart") as HTMLDivElement)
  chart.value.setOption(option.value)
})
window.addEventListener("resize", function () {
  chart.value.resize()
})
</script>

<style lang="less" scoped></style>
