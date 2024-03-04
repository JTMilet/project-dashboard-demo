<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 14:15:29
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 15:25:28
 * @FilePath: /JinMa-demo/src/views/home/components/Block.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full py-4 px-2 space-y-8">
    <!-- 板块名称 -->
    <BlockTitle :title="'今日实时总产值'"/>
    <!-- 图形块 -->
    <div class="flex justify-start items-center h-28">
      <section class="flex-none w-38 h-full flex flex-col space-y-4">
        <Count class="w-full flex-1" v-for="(item, index) in counts" :key="index" :title="item.title" :count="item.count" :index="index"/>
      </section>
      <section class="flex-1 h-full flex justify-between items-start space-x-1">
        <CountPie v-for="(item, index) in counPies" :key="index" :index="index" :title="item.title" :percent="item.percent"/>
        <!-- <CountPie />
        <CountPie /> -->
      </section>
    </div>
    <!-- 柱状图 -->
    <!-- <div class="flex justify-between items-start h-40">
      <Block3DBar class="flex-1 h-full animate__animated animate__flipInX" v-for="(item, index) in bars" :key="index" :count="item" :index="index" :max="max"/>
    </div> -->
  </div>
</template>

<script>
  export default {
    components: {
      BlockTitle: () => import('./common/BlockTitle'),
      Count: () => import('./R/Count'),
      CountPie: () => import('./R/CountPie')
      // BlockGraph: () => import('./BlockGraph'),
      // Block3DBar: () => import('./Block3DBar')
    },
    data () {
      return {
        max: 579,
        bars: [456, 575, 280, 579, 389],
        counts: [
          {
            title: '金马总产值',
            count: 1366
          },
          {
            title: '中东总产值',
            count: 1366
          }
        ],
        counPies: [
          {
            title: '蒸汽数据',
            percent: 36
          },
          {
            title: 'LNG数据',
            percent: 78
          },
          {
            title: '氢气数据',
            percent: 64
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
