<!--
 * @Author: 杜康 banshee1115@163.com
 * @Date: 2023-10-09 10:41:36
 * @LastEditors: 杜康 banshee1115@163.com
 * @LastEditTime: 2023-10-11 10:36:17
 * @FilePath: /JinMa-demo/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// 优设标题黑 youshebiaotihei 备用：斗鱼追光字体 douyuzhuiguang
@font-face {
  font-family: douyu;
  font-style: normal;
  font-weight: 400;
  src: url("@/assets/fonts/youshebiaotihei.ttf");
}

.font-douyu {
  font-family: douyu;
}
</style>
