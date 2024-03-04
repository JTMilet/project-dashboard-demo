<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 14:15:29
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 15:24:04
 * @FilePath: /JinMa-demo/src/views/home/components/Block2.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full py-4 px-2 space-y-4 overflow-hidden">
    <!-- 板块名称 -->
    <BlockTitle :title="'氢气产量统计'" />
    <!-- 图形块 -->
    <div class="h-40 space-y-4">
      <Block2Count v-for="(item, index) in counts" :key="index" :index="index" :todayUse="item.todayUse" :yearUse="item.yearUse" :title="item.title"/>
    </div>
    <!-- 柱状图 -->
    <div class="flex justify-between items-start h-80">
      <Block2LineChart />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      BlockTitle: () => import('./common/BlockTitle'),
      Block2Count: () => import('./Block2Count'),
      Block2LineChart: () => import('./Block2LineChart')
    },
    data () {
      return {
        max: 579,
        bars: [456, 575, 280, 579, 389],
        counts: [
          {
            title: 'LNG产量统计',
            todayUse: 12.34,
            yearUse: 4231.43
          },
          {
            title: '氢气产量统计',
            todayUse: 12.34,
            yearUse: 4231.43
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
