<template>
  <div id="app">
    <router-view></router-view>
    <mainTabBar></mainTabBar>
  </div>
</template>
  
<script>
import mainTabBar from './components/mainTabBar.vue'
export default {
  name: "App",
  data() {
    return {};
  },components:{
    mainTabBar
  },
  
  methods: {},
};
</script>
<style scoped>
/* 在style里面引入，要用@import引入，且一般的css基础样式写在这里相对要好一点 */
@import "./assets/css/base.css";
</style>
