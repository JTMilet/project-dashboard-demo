<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-10 17:02:22
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 11:48:55
 * @FilePath: /JinMa-demo/src/views/home/components/R/CountPie.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="w-20 h-full animate__animated animate__fadeIn animate__delay-3s">
    <section class="w-full h-20 relative">
      <div class="absolute w-full h-full base rounded-full overflow-hidden bg-gradient-to-r from-blue-200 to-blue-400">
        <div class="absolute top-0 left-9 w-1 h-1 bg-white rounded-full z-20" />
        <div class="absolute top-0.5 left-0 w-20 h-20 light z-10 rounded-full" />
        <div class="absolute top-0 left-9 w-20 h-20 light z-10 " />
      </div>
      <div class="absolute w-16 h-16 rounded-full inner m-2 bg-gradient-to-br from-cyan-400 to-lime-400 z-0 overflow-hidden">
        <div class="float-left w-1/2 h-full overflow-hidden absolute left-0">
          <div ref="countPieL" class="left w-full h-full absolute top-0 left-0 z-10" />
        </div>
        <div class="float-right w-1/2 h-full overflow-hidden absolute right-0">
          <div ref="countPieR" class="right w-full h-full absolute top-0 right-0 z-10" />
        </div>
      </div>
      <div class="absolute w-14 h-14 rounded-full inner-inner m-3 flex justify-center items-center" >
        <span class="text-blue-400 text-xl" :id="`CountPiePercent${percent}`"></span><span class="text-blue-400 text-xs">%</span>
      </div>
    </section>
    <div class="w-full h-8 text-white text-sm flex justify-center items-end">
      {{title}}
    </div>
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
      percent: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        flag: false
      }
    },
    mounted () {
      const countUp = new CountUp(`CountPiePercent${this.percent}`, this.percent, {
        duration: 4,
        decimalPlaces: 0
      })
      setTimeout(() => {
        countUp.start()
      }, 3000)
      const _this = this
        if (this.percent <= 50) {
          const keyframes = `
            @keyframes rotateR${this.index} {\n
              from {\n
                transform: rotate(0deg)\n
              }\n
              to {\n
                transform: rotate(${(this.percent / 50 * 180).toFixed(0)}deg)\n
              }\n
            }\n
          `
          const sheet =  document.styleSheets[0]
          sheet.insertRule(keyframes, 0)
          setTimeout(function () {
            _this.$refs.countPieR.style.animation = `rotateR${_this.index} 4s linear 1 forwards`
          }, 3000)
        } else {
          const sheet =  document.styleSheets[0]
          const perSecond = 4 / this.percent
          const lSeconds = perSecond * (this.percent - 50)
          const rSeconds = perSecond * 50
          const deg = ((this.percent - 50) / 50 * 180).toFixed(0)
          const keyframesR = `
            @keyframes rotateR${this.index} {\n
              from {\n
                transform: rotate(0deg)\n
              }\n
              to {\n
                transform: rotate(180deg)\n
              }\n
            }\n
          `
          const keyframesL = `
            @keyframes rotateL${this.index} {\n
              from {\n
                transform: rotate(0deg)\n
              }\n
              to {\n
                transform: rotate(${deg}deg)\n
              }\n
            }\n
          `
          sheet.insertRule(keyframesR, 0)
          sheet.insertRule(keyframesL, 0)
          setTimeout(function () {
            _this.$refs.countPieR.style.animation = `rotateR${_this.index} ${rSeconds}s linear 1 forwards`
            _this.$refs.countPieL.style.animation = `rotateL${_this.index} ${lSeconds}s linear ${rSeconds}s 1 forwards`
          }, 3000)
        }
    }
  }
</script>

<style lang="scss" scoped>
.base {
  // animation: name duration timing-function delay iteration-count direction fill-mode;
  animation: round 5s linear 0s infinite;
  .light {
    background: rgba(37, 110, 150);
  }
}

// .inner {
//   background: rgba(147, 184, 209, 0.53);
// }

.inner-inner {
  background-color: rgba(6, 29, 52);
}

@keyframes round {
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
}

.left {
  border-radius:  50% 0 0 50%;
  background: rgba(147, 184, 209);
  transform-origin: right center;
  // animation: rotateL 5s linear 5s 1 forwards;
  overflow: hidden;
}

.right {
  border-radius: 0 50% 50% 0;
  background: rgba(147, 184, 209);
  transform-origin: left center;
  // animation: rotateR 5s linear 1 forwards;
  overflow: hidden;
}

// @keyframes rotateR {
//   0% {
//     transform: rotate(0deg)
//   }
//   100% {
//     transform: rotate(180deg)
//   }
// }

// @keyframes rotateL {
//   0% {
//     transform: rotate(0deg)
//   }
//   100% {
//     transform: rotate(180deg)
//   }
// }
</style>

<style lang="scss">
</style>
