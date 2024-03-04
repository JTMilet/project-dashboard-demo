<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 14:18:08
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 10:37:50
 * @FilePath: /JinMa-demo/src/views/home/components/common/BlockTitle.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full h-9 relative overflow-hidden">
    <div class="bg absolute top-0 left-0 h-9 z-0" />
    <span class="title block ml-14 -top-1 h-9 relative z-10 font-bold text-2xl text-white font-douyu animate__animated animate__fadeInUp animate__delay-1s">{{title}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    },
  }
</script>

<style lang="scss" scoped>
.title {
  text-shadow: 0 2px #393939;
}
.bg {
  background: url('@/assets/home/blockTitle/bg.png') left center no-repeat;
  animation: bgWidth 1s ease-in-out 0s 1 forwards;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
}

@keyframes bgWidth {
  from {
    width: 36px;
    background-size: 36px 100%;
    opacity: 0;
  }

  to {
    width: 100%;
    background-size: 100% 100%;
    opacity: 1;
  }
}
</style>

<style lang="scss">
</style>
