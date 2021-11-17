<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容, 呵呵呵</p>
  
  </div>
</template>

<script>
  export default {
    name: "About",
     activated(){//这两个函数只有在使用keep-alive被包裹中才有效，被包裹都不会被频繁的销毁组件
 
  //  console.log(11);
 },
 deactivated(){
  //  console.log(33);
 }

  }
</script>

<style scoped>

</style>
