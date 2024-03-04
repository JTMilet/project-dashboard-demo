<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 16:20:39
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 15:37:03
 * @FilePath: /JinMa-demo/src/views/home/components/Block3DBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-show="flag" class="flex flex-col justify-end items-center">
    <span class="flex-1 text-white font-xs flex flex-col justify-end" :id="`block3DBar${index}`" />
    <div 
      ref="percent"
      class="flex-none mx-4"
      :style="{'height': percent}"  
    >
      <div :class="[`bg-${index}-head`]" />
      <div 
        class="w-full h-full" 
        :class="[`bg-${index}`]"
      />
    </div>
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
  export default {
    props: {
      count: {
        type: Number,
        default: 0
      },
      index: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 0
      },
    },
    data () {
      return {
        flag: false
      }
    },
    computed: {
      percent () {
        return ((this.count / this.max) * 132).toFixed(0) + 'px'
      }
    },
    mounted() {
      const countUp = new CountUp(`block3DBar${this.index}`, this.count, {
        duration: 4
      })
      setTimeout(() => {
        countUp.start()
        const keyframes = `
          @keyframes Block3DBarHeight${this.index} {\n
            from {\n
              height: 0;\n
              opacity: 0;\n
            }\n
            to {\n
              height: ${this.percent};\n
              opacity: 1;\n
            }\n
          }\n
        `
        const sheet =  document.styleSheets[0]
        sheet.insertRule(keyframes, 0)
        this.$refs.percent.style.animation = `Block3DBarHeight${this.index} 2s ease-in-out 0s 1 forwards`
        this.flag = true
      }, 2000)
    }
  }
</script>

<style lang="scss" scoped>
.bg-0 {
  width: 20px;
  background: url('@/assets/home/block3DBar/0.png') center bottom no-repeat;
  background-size: 100% 100%;
}
.bg-0-head {
  width: 20px;
  height: 10px;
  background: url('@/assets/home/block3DBar/head0.png') center bottom no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 5px;
}
.bg-1 {
  width: 20px;
  background: url('@/assets/home/block3DBar/1.png') center bottom no-repeat;
  background-size: 100% 100%;
}
.bg-1-head {
  width: 20px;
  height: 10px;
  background: url('@/assets/home/block3DBar/head1.png') center bottom no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 5px;
}
.bg-2 {
  width: 20px;
  background: url('@/assets/home/block3DBar/2.png') center bottom no-repeat;
  background-size: 100% 100%;
}
.bg-2-head {
  width: 20px;
  height: 10px;
  background: url('@/assets/home/block3DBar/head2.png') center bottom no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 5px;
}
.bg-3 {
  width: 20px;
  background: url('@/assets/home/block3DBar/3.png') center bottom no-repeat;
  background-size: 100% 100%;
}
.bg-3-head {
  width: 20px;
  height: 10px;
  background: url('@/assets/home/block3DBar/head3.png') center bottom no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 5px;
}
.bg-4 {
  width: 20px;
  background: url('@/assets/home/block3DBar/4.png') center bottom no-repeat;
  background-size: 100% 100%;
}
.bg-4-head {
  width: 20px;
  height: 10px;
  background: url('@/assets/home/block3DBar/head4.png') center bottom no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 5px;
}
</style>

<style lang="scss">
</style>
