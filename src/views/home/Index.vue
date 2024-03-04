<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 10:41:36
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-10 15:26:42
 * @FilePath: /JinMa-demo/src/views/HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-screen h-screen bg relative">
    <LeftArea class="absolute left-0" />
    <RightArea class="absolute right-0" />
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    LeftArea: () => import('./components/LeftArea'),
    RightArea: () => import('./components/RightArea')
  }
}
</script>

<style lang="scss" scoped>
.bg {
  background: url('@/assets/home/bg.jpeg') center center no-repeat;
}
</style>
