<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-10 16:01:39
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 10:34:08
 * @FilePath: /JinMa-demo/src/views/home/components/R/Count.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-full h-full flex space-x-2">
    <section 
      class="w-12 h-full animate__animated animate__fadeIn animate__delay-1s"
      :class="`bg-${index}`" 
    />
    <section class="flex-1 h-full flex flex-col">
      <div 
        class="w-full h-6 bg-gradient-to-r to-transparent pl-2 flex justify-start items-center animate__animated animate__fadeIn animate__delay-2s"
        :class="{
          'from-green-400/50': index === 0, 
          'from-blue-400/50': index === 1
        }"
      >
        <span class="font-douyu text-white text-base font-light right-2">
          <span class="animate__animated animate__flipInX" v-for="(item, i) in title.split('')" :key="i" :class="[`animate-${i}`]">{{item}}</span>
          <!-- <span class="animate__animated animate__flipInX animate-1">金</span>
          <span class="animate__animated animate__flipInX animate-2">马</span>
          <span class="animate__animated animate__flipInX animate-3">总</span>
          <span class="animate__animated animate__flipInX animate-4">产</span>
          <span class="animate__animated animate__flipInX animate-5">值</span> -->
          <!-- <span class="animate__animated animate__flipInX animate-6">计</span> -->
        </span>
      </div>
      <div class="w-full h-6 flex justify-start items-center">
        <span class="text-xs text-white animate__animated animate__fadeIn animate__delay-2s">占比<span 
          class="ml-2 text-base italic"
          :class="{
            'text-green-400': index === 0,
            'text-blue-400': index === 1
          }"
          :id="`RCount${index}`"
        /></span>
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
      count: {
        type: Number,
        default: 0
      },
    },
    data () {
      return {}
    },
    mounted() {
      const countUp = new CountUp(`RCount${this.index}`, this.count, {
        duration: 4,
        decimalPlaces: 0
      })
      setTimeout(() => {
        countUp.start()
      }, 2000)
    }
  }
</script>

<style lang="scss" scoped>
.bg-0 {
  background: url('@/assets/home/Count/0.png') center center no-repeat;
  // background-size: 100% 100%;
  background-size: cover;
}

.bg-1 {
  background: url('@/assets/home/Count/1.png') center center no-repeat;
  // background-size: 100% 100%;
  background-size: cover;
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
</style>

<style lang="scss">
</style>
