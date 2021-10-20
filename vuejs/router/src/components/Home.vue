<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容, 哈哈哈</p>
    <!-- 所有的组件都继承者vue的原型 -->
    <router-link to="/home/news">新闻</router-link>
      <router-link to="/home/messages">消息</router-link>
    <keep-alive  ><router-view ></router-view></keep-alive>
    <!-- exclude:除填写的，其他的的都保存活跃，使用的是组件名字，且用逗号分割 ，千万不要添加空格，一般使用这个属性-->
    <!-- include：除填写的，其他的都不保存活跃 -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      path:'/home/news'
    }
  },
  created(){
    document.title='首页'
  },
 
  beforeDestroy(){
    console.log(22);
  },
//  beforeRouteleave(to,from,next){
//    this.path=this.$route.path
//    console.log(this.$route.path);
//    next()
//  },
 activated(){//这两个函数只有在使用keep-alive被包裹中才有效，被包裹都不会被频繁的销毁组件
 
   console.log(11);
 },
 deactivated(){
   console.log(33);
 }

};

</script>

<style scoped>
</style>
