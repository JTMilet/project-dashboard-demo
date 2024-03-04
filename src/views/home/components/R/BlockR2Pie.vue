<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-11 11:23:46
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 15:01:56
 * @FilePath: /JinMa-demo/src/views/home/components/R/BlockR2Pie.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full h-28 flex justify-start items-center space-x-8">
    <div class="w-28 h-28 relative animate__animated animate__fadeIn animate__delay-2s">
      <div class="absolute base w-full h-full" />
      <div class="absolute inner w-full h-full" />
      <!-- 饼图 -->
      <div id="BlockR2Pie" class="w-24 h-24 m-2" />
      <div class="absolute w-12 h-12 m-8 top-0 left-0 flex justify-center items-center text-white text-base rounded-full">{{total.toFixed(1)}}</div>
    </div>
    <!-- 图例 -->
    <section class="flex-1 h-full animate__animated animate__fadeIn animate__delay-3s">
      <div class="w-full h-4 text-xs text-white leading-4">使用量</div>
      <div class="w-full h-24 grid grid-rows-3 grid-cols-2 gap-2">
        <div class="flex h-8 justify-start items-center" v-for="(item, index) in pieData" :key="index">
          <div class="w-3 h-3 m-2.5 rounded-full" :style="{'background-color': colors[index]}">
            <div class="w-2 h-2 m-0.5 rounded-full bg-gray-700"></div>
          </div>
          <div class="flex-1 flex justify-between items-center space-x-1">
            <span class="flex-1 text-xs text-white">{{item.name}}</span>
            <span class="flex-none w-8 text-xs" :style="{'color': colors[index]}">{{(item.value / total * 100).toFixed(1) + '%'}}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  const colors =  ['#61C7FF', '#F66060', '#44B38B', '#A17DF5', '#ECC468', '#43F2E8']
  export default {
    props: {
      pieData: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        colors: Object.freeze(colors)
      }
    },
    computed: {
      total () {
        const total = this.pieData.map(o => o.value).reduce((total, current) => {
          return total + current
        })
        return total
      }
    },
    mounted () {
      const _this = this
      setTimeout(() => {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('BlockR2Pie'));
      // 绘制图表
      myChart.setOption({
        tooltip: {
    trigger: 'item'
  },
  series: [
    {
      type: 'pie',
      radius: ['50%', '60%'],
      avoidLabelOverlap: true,
      itemStyle: {
        borderRadius: 20,
        borderWidth: 0
      },
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      color: colors,
      data: _this.pieData
    }
  ]
      });
      }, 3000)
    }
  }
</script>

<style lang="scss" scoped>
.base {
  background: url('@/assets/home/blockR2Pie/base.png') center center no-repeat;
  background-size: 100% 100%;
  animation: round 4s ease-in-out 0s infinite;
}

.inner {
  background: url('@/assets/home/blockR2Pie/inner.png') center center no-repeat;
  background-size: 100% 100%;
  animation: roundReverse 8s linear 0s infinite;
}

@keyframes round {
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(720deg)
  }
}

@keyframes roundReverse {
  from {
    transform: rotate(1080deg)
  }
  to {
    transform: rotate(0deg)
  }
}
</style>

<style lang="scss">
</style>
