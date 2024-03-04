<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-10 11:00:39
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 15:22:12
 * @FilePath: /JinMa-demo/src/views/home/components/Block2LineChart.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="Block2LineChart" class="w-full h-full animate__animated animate__fadeInUp animate__delay-3s">
  </div>
</template>

<script>
import * as echarts from 'echarts';
  export default {
    data () {
      return {}
    },
    mounted () {
      setTimeout(() => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('Block2LineChart'));
      // 绘制图表
      myChart.setOption({
        // title: {
        //   text: 'ECharts 入门示例'
        // },
        legend: {
          data: ['LNG', '氢气'],
          right: 0,
          textStyle: {
            color: 'white'
          }
        },
        grid: {
          top: 28,
          right: 8,
          bottom: 28,
        },
        xAxis: {
          data: ['项目一', '项目二', '项目三', '项目四', '项目五', '项目六'],
          axisLine: {
            lineStyle: {
              color: 'RGBA(255, 255, 255, 0.5)'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'white'
          },
        },
        yAxis: {
          axisLabel: {
            color: 'white'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)',
              type: 'dashed'
            }
          }
        },
        series: [
          {
            name: 'LNG',
            type: 'line',
            data: [400, 600, 300, 400, 800, 500],
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(97,199,255, 1)'
                },
                {
                  offset: 1,
                  color: 'rgb(97,199,255, 0)'
                }
              ])
            },
            symbol: 'emptyCircle',
            symbolSize: 10,
          },
          {
            name: '氢气',
            type: 'line',
            data: [300, 500, 700, 600, 200, 400],
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(97,255,132,1)'
                },
                {
                  offset: 1,
                  color: 'rgb(97,199,255, 0)'
                }
              ])
            },
            symbol: 'emptyCircle',
            symbolSize: 10,
          }
        ]
      });
      }, 3000)
    }
  }
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
