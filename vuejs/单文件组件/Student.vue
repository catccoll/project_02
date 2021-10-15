<template  id="demo">
  <div>
    <h2>{{ age}}</h2>
  </div>
</template>
// 组件的结构

<script>
//组件的样式
 const Student= Vue.extend({
  name: "Student",
  template:"#demo",
  data() {
    return {
     age: 18
    };
  },
});
export default Student
</script>

<style >
/* 组件的样式 */
.demo {
  background: #ccc;
}
</style>
