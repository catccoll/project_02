<template  id="demo">
  <div>
    <h2>{{ message }}</h2>
  </div>
</template>
// 组件的结构

<script>
Vue.config.productionTip = false; //阻止Vue在启动时生成生产提示
//组件的样式
const School = Vue.extend({
  name: "School",
  template: "#demo",
  data() {
    return {
      message: "你好呀",
    };
  },
});
export default School;
</script>

<style >
/* 组件的样式 */
.demo {
  background: #ccc;
}
</style>
