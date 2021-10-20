<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!-- tag属性可以将router-link编译的a标签转化为所设定的标签，比如button标签，a标签，且如果增加属性replace，就网页没有返回或前进，router-link-active，鼠标点击了哪个，哪一个就会添加这个class名，所以当点击他就生成红色字体，只要将这个类名设置属性字体为红色，嫌弃这个名字太长的话，可以修改类名 -->
    <router-link to="/home" tag="button" replace active-class="active"
      >首页</router-link
    >
    <router-link to="/about" tag="button" replace active-class="active"
      >关于</router-link
    >
    <!-- 传参数的事件，to前面都要动态绑定下 这里不要忘记了-->
    <!-- url:协议：//服务器地址 端口/路径？查询 #片段-->
    <!--  -->
    <router-link
      v-bind:to="`/user/${userId}`"
      tag="button"
      replace
      active-class="active"
      >用户</router-link
    >
    <router-link
      v-bind:to="{
        path: '/profile',
        query: { name: 'zs', age: 18, height: 1.88 },
      }"
      >档案</router-link
    >
    <!-- <button @click='user1Click'>新闻</button>
    <button @click='profileClick'>档案</button> -->
    <!--<router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--<router-link to="/about" tag="button" replace>关于</router-link>-->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click='userClick'>用户</button> -->

    <keep-alive> <router-view></router-view> </keep-alive>

    <!-- 组件渲染的位置 -->
  </div>
</template>

<script>
// 懒加载的主要作用就是将路由对应的组件打包成一个个小小的js代码块，只有在这个路由被访问到的时候，才加载对应的组件
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan",
    };
  },
  methods: {
    homeClick() {
      // 通过代码的方式修改路由 vue-router
      // push => pushState
      // this.$router.push('/home')所有的组件都有$router属性
      this.$router.replace("/home");
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace("/about");
    },
    userClick() {
      this.$router.push("/user");
    },

    // user1Click(){
    //   this.$router.push(`/home/news/${this.userId}`)
    // },
    // profileClick(){
    //   this.$router.push({
    //     path:'/profile',
    //     query:{
    //       name:'zs'
    //     }
    //   })
    // }
  },
};
/*
created:当组件被创造出来的时候会处理的函数，
mounted：当组件被挂载到DOM的时候会处理的函数,
updated:当数据，界面刷新的时候处理的函数
 */
</script>

<style>
/* .router-link-active {
    color: #f00;
  } */

.active {
  color: #f00;
}
</style>
