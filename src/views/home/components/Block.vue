<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 14:15:29
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 15:23:06
 * @FilePath: /JinMa-demo/src/views/home/components/Block.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full py-4 px-2 space-y-4">
    <!-- 板块名称 -->
    <BlockTitle :title="'氢气生产原料使用统计'"/>
    <!-- 图形块 -->
    <div class="flex justify-between items-center h-20">
      <BlockGraph 
        class="flex-1 h-full" 
        :left="true"
      />
      <BlockGraph 
        class="flex-1 h-full" 
        :left="false"
      />
    </div>
    <!-- 柱状图 -->
    <div class="flex justify-between items-start h-40">
      <Block3DBar class="flex-1 h-full animate__animated animate__flipInX" v-for="(item, index) in bars" :key="index" :count="item" :index="index" :max="max"/>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
      BlockTitle: () => import('./common/BlockTitle'),
      BlockGraph: () => import('./BlockGraph'),
      Block3DBar: () => import('./Block3DBar')
    },
    data () {
      return {
        max: 579,
        bars: [456, 575, 280, 579, 389]
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
