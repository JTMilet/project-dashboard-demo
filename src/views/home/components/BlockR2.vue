<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 14:15:29
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 15:25:50
 * @FilePath: /JinMa-demo/src/views/home/components/Block.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full py-4 px-2 space-y-10 overflow-hidden">
    <!-- 板块名称 -->
    <BlockTitle :title="'年度使用量与外销量'"/>
    <!-- 图形块 -->
    <BlockR2Count :sales="366" :usage="221"/>
    <!-- 饼图块 -->
    <BlockR2Pie :pieData="pieData" />
    <!-- 柱状图 -->
    <BlockR2Bar />
  </div>
</template>

<script>
  export default {
    components: {
      BlockTitle: () => import('./common/BlockTitle'),
      BlockR2Count: () => import('./R/BlockR2Count'),
      BlockR2Pie: () => import('./R/BlockR2Pie'),
      BlockR2Bar: () => import('./R/BlockR2Bar')
    },
    data () {
      return {
        pieData: [
          { value: 49.3, name: '金马' },
          { value: 49.3, name: '清水源' },
          { value: 32.6, name: '金源' },
          { value: 32.6, name: '海湾' },
          { value: 9.1, name: '金瑞' },
          { value: 9.1, name: '金江' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
