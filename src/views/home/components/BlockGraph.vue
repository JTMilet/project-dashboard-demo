<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 15:14:50
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 10:30:17
 * @FilePath: /JinMa-demo/src/views/home/components/BlockGraph.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="animate__animated animate__fadeIn animate__delay-1s relative" :class="{'bg-left': left, 'bg-right': !left}">
    <span v-if="left" class="font-douyu text-white text-base font-light absolute right-2 self">
      <span class="animate__animated animate__flipInX animate-0 ">电</span>
      <span class="animate__animated animate__flipInX animate-1">量</span>
      <span class="animate__animated animate__flipInX animate-2">实</span>
      <span class="animate__animated animate__flipInX animate-3">时</span>
      <span class="animate__animated animate__flipInX animate-4">用</span>
      <span class="animate__animated animate__flipInX animate-5">量</span>
    </span>
    <span v-else class="font-douyu text-white text-base font-light absolute right-2 self">
      <span class="animate__animated animate__flipInX animate-0 ">水</span>
      <span class="animate__animated animate__flipInX animate-1">量</span>
      <span class="animate__animated animate__flipInX animate-2">实</span>
      <span class="animate__animated animate__flipInX animate-3">时</span>
      <span class="animate__animated animate__flipInX animate-4">用</span>
      <span class="animate__animated animate__flipInX animate-5">量</span>
    </span>
    <span class="block w-24 font-douyu text-white text-base font-light absolute bottom-2 right-2  text-center" :id="count"></span>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
  export default {
    props: {
      left: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        count: this.left ? 'countUpLeft' : 'countUpRight'
      }
    },
    mounted() {
      const countUp = new CountUp(this.count, this.left ? 356.12 : 11.12, {
        duration: 4,
        decimalPlaces: 2
      })
      setTimeout(() => {
        countUp.start()
      }, 2000)
    }
  }
</script>

<style lang="scss" scoped>
.bg-left {
  background: url('@/assets/home/blockGraph/1st.png') center center no-repeat;
  background-size: 100% 100%;
} 
.bg-right {
  background: url('@/assets/home/blockGraph/2nd.png') center center no-repeat;
  background-size: 100% 100%;
} 

.self {
  top: 16px;
}
// .animate__animated.animate__fadeIn
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
