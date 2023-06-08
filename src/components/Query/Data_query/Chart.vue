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
import dayjs from "dayjs"
const dom = ref<echarts.ECharts>()
const chart = shallowRef()
const option = ref()
const $series = ref([])
option.value = {
  backgroundColor: "#fff",
  title: {
    text: "",
    subtext: "",
    x: "50%",
    textStyle: {
      color: "#000000",
      fontSize: "20"
    }
  },
  legend: {
    textStyle: {
      align: "right"
    },
    top: "2%",
    right: "2%"
  },

  tooltip: {
    trigger: "axis"
  },

  grid: {
    top: "18%",
    left: "8%",
    right: "3%",
    bottom: "10%"
  },
  dataZoom: {
    type: "inside"
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      splitNumber: 10,
      max: "dataMax",
      min: "dataMin",
      axisLine: {
        show: true,
        lineStyle: {
          color: "#000"
        }
      },
      axisLabel: {
        formatter: function (value: any) {
          return dayjs(value).format("YYYY-MM-DD \n HH:mm:ss")
        },
        color: "#000"
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(83, 83, 83, .4)"
        }
      },
      axisTick: {
        show: false
      }
    }
  ],

  yAxis: [
    {
      type: "value",
      min: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: "#e3e3e3"
        }
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 20,
        formatter: "{value}"
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: $series
}

onMounted(() => {
  chart.value = echarts.init(document.getElementById("chart") as HTMLDivElement)
})
defineExpose({
  option,
  chart,
  $series
})
</script>

<style lang="less" scoped></style>
