<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-10 09:04:27
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 10:29:42
 * @FilePath: /JinMa-demo/src/views/home/components/BlockCount.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full h-16 flex overflow-hidden">
    <!-- 浮动动画 -->
    <section class="flex-none w-16 h-16 relative animate__animated animate__zoomIn animate__delay-1s">
      <div class="absolute z-10 icon" :class="[`icon-${index}`]" />
      <div class="absolute z-0 bottom-0 left-0 bg w-full h-7" />
    </section>
    <!-- 文字部分 -->
    <section class="flex-1 flex flex-col justify-center items-start space-y-2 pl-2">
      <!-- 底色标题 -->
      <div class="subBg w-full h-6 px-4 flex justify-start items-center animate__animated animate__lightSpeedInRight animate__delay-2s">
        <span class="font-douyu text-white text-base font-light right-2">
          <span class="animate__animated animate__flipInX" v-for="(item, i) in title.split('')" :key="i" :class="[`animate-${i}`]">{{item}}</span>
          <!-- <span class="animate__animated animate__flipInX animate-1">N</span>
          <span class="animate__animated animate__flipInX animate-2">G</span>
          <span class="animate__animated animate__flipInX animate-3">产</span>
          <span class="animate__animated animate__flipInX animate-4">量</span>
          <span class="animate__animated animate__flipInX animate-5">统</span>
          <span class="animate__animated animate__flipInX animate-6">计</span> -->
        </span>
        <!-- <span class="font-douyu text-white text-xs">LNG产量统计</span> -->
      </div>
      <!-- 文字 -->
      <div class="w-full h-6 flex justify-between items-end text-xs text-white">
        <span class="animate__animated animate__zoomInRight animate__delay-3s">今日实时用量<span class="ml-2 font-douyu text-sm text-blue-400" :id="`Block2CountToday${index}`"></span></span>
        <span class="animate__animated animate__zoomInRight animate__delay-4s">2021年度用量<span class="ml-2 font-douyu text-sm text-green-400" :id="`Block2CountYear${index}`"></span></span>
      </div>
    </section>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
  export default {
    props: {
      index: {
        type: Number,
        default: 0
      },
      title: {
        type: String,
        default: ''
      },
      todayUse: {
        type: Number,
        default: 0
      },
      yearUse: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {}
    },
    mounted () {
      const countTodayUp = new CountUp(`Block2CountToday${this.index}`, this.todayUse, {
        duration: 4,
        decimalPlaces: 2
      })
      const countYearUp = new CountUp(`Block2CountYear${this.index}`, this.yearUse, {
        duration: 4,
        decimalPlaces: 2
      })
      setTimeout(() => {
        countTodayUp.start()
      }, 3000)
      setTimeout(() => {
        countYearUp.start()
      }, 4000)
    }
  }
</script>

<style lang="scss" scoped>
.icon {
  margin: 0 10px;
  width: 44px;
  height: 44px;
  // animation: name duration timing-function delay iteration-count direction fill-mode;
  animation: iconAnimation 4s ease-in-out 0s infinite;
}
.icon-0 {
  background: url('@/assets/home/block2Count/0.png') center center no-repeat;
  background-size: 100% 100%;
}
.icon-1 {
  background: url('@/assets/home/block2Count/1.png') center center no-repeat;
  background-size: 100% 100%;
}
.bg {
  background: url('@/assets/home/block2Count/bg.png') center center no-repeat;
  background-size: 100% 100%;
}

.subBg {
  background: url('@/assets/home/block2Count/subBg.png') center center no-repeat;
  background-size: 100% 100%;
}

@keyframes iconAnimation {
  from {
    top: 10px;
  }

  50% {
    top: 0px;
    transform: scale(1.25);
  }

  to {
    top: 10px;
  }
}

.animate-0 {
  animation-delay: 2s;
}
.animate-1 {
  animation-delay: 2.15s;
}
.animate-2 {
  animation-delay: 2.3s;
}
.animate-3 {
  animation-delay: 2.45s;
}
.animate-4 {
  animation-delay: 2.6s;
}
.animate-5 {
  animation-delay: 2.75s;
}
.animate-6 {
  animation-delay: 3s;
}
</style>

<style lang="scss">
</style>
