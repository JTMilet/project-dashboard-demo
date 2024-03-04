<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-11 09:11:06
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 11:21:05
 * @FilePath: /JinMa-demo/src/views/home/components/R/BlockR2Count.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full h-12 flex justify-start items-center space-x-2 overflow-hidden">
    <!-- 图标 -->
    <section class="w-12 h-12 relative animate__animated animate__fadeIn animate__delay-1s" >
      <div class="icon w-10 h-10 mx-1 absolute z-10 left-0"></div>
      <div class="base w-full h-3 absolute z-0 bottom-0 left-0"></div>
    </section>
    <!-- 文字 -->
    <section class="flex-1 relative">
      <div class="absolute w-full h-5 bg-gradient-to-r from-transparent from-0% via-blue-500/50 via-30% to-transparent to-100% animate__animated animate__backInRight animate__delay-2s" />
      <div class="absolute -top-4 left-0 space-x-8 flex justify-center items-center">
        <span class="h-8 text-white text-base italic flex justify-center items-center animate__animated animate__zoomInRight animate__delay-3s">外销售总数<span class="ml-2 text-blue-400 italic text-3xl font-light align-bottom" id="R2Count1"></span></span>
        <span class="h-8 text-white text-base italic flex justify-center items-center animate__animated animate__zoomInRight animate__delay-4s">使用量<span class="ml-2 text-blue-400 italic text-3xl font-light align-bottom" id="R2Count2"></span></span>
      </div>
    </section>
  </div>
</template>

<script>
  import { CountUp } from 'countup.js'
  export default {
    props: {
      sales: {
        type: Number,
        default: 0
      },
      usage: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {}
    },
    mounted () {
      const count1Up = new CountUp('R2Count1', this.sales, {
        duration: 4,
        decimalPlaces: 0
      })
      setTimeout(() => {
        count1Up.start()
      }, 3000)
      const count2Up = new CountUp('R2Count2', this.usage, {
        duration: 4,
        decimalPlaces: 0
      })
      setTimeout(() => {
        count2Up.start()
      }, 4000)
    }
  }
</script>

<style lang="scss" scoped>
.icon {
  background: url('@/assets/home/blockR2Count/icon.png') center center no-repeat;
  background-size: 100% 100%;
  animation: iconAnimation 4s ease-in-out 0s infinite;
}

.base {
  background: url('@/assets/home/blockR2Count/base.png') center center no-repeat;
  background-size: 100% 100%;
}

@keyframes iconAnimation {
  from {
    top: 6px;
  }

  50% {
    top: 0px;
    transform: scale(1.25);
  }

  to {
    top: 6px;
  }
}
</style>

<style lang="scss">
</style>
