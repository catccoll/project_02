<template>
  <div>
      我是用户界面
      {{userID}}
      <!--动态路由 路径中携带的参数在子组件要想拿到，首先在路由规则中动态绑定一个abc或者叫其他的，然后用$route.params.abc拿到值 ,这种方式获取的参数叫做params的类型-->
      <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
name:'User',
 computed:{
  userID(){
    // 当是写在路由连接后面的参数，用$route.parmas.**
    // 当是以对象传递过来的，用$route.query.***得到信息
    return this.$route.params.id
  }
},
methods:{btnClick(){
  console.log(this.$route);
console.log(this.$router);
},

},
created(){
  document.title='用户'}
}//这样一个一个改很少麻烦，所有可以用全局导航守卫设置
</script>

<style>

</style>