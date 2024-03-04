<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-10 15:24:31
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 08:34:21
 * @FilePath: /JinMa-demo/src/views/home/components/RightArea.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="right-area h-full p-4">
    <main class="w-full h-full rounded bg-color">
      <!-- 氢气原料 -->
      <BlockR />
      <!-- 氢气产量 -->
      <BlockR2 />
    </main>
  </div>
</template>

<script>
  export default {
    components: {
      BlockR: () => import('./BlockR'),
      BlockR2: () => import('./BlockR2')
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
.right-area {
  width: 445px;
}

.bg-color {
  background-color: rgba(6, 29, 52, 0.63);
}
</style>

<style lang="scss">
</style>