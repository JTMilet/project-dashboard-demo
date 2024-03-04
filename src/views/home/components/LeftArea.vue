<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 14:02:35
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-10 11:52:19
 * @FilePath: /JinMa-demo/src/views/home/components/LeftArea.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="left-area h-full p-4">
    <main class="w-full h-full rounded bg-color">
      <!-- 氢气原料 -->
      <Block />
      <!-- 氢气产量 -->
      <Block2 />
    </main>
  </div>
</template>

<script>
  export default {
    components: {
      Block: () => import('./Block'),
      Block2: () => import('./Block2')
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.left-area {
  width: 445px;
}

.bg-color {
  background-color: rgba(6, 29, 52, 0.63);
}
</style>

<style lang="scss">
</style>
