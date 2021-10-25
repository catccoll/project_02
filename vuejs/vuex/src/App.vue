<template>
  <div id="app">
    {{ message }}

    {{ $store.state.count }}
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addstudent(112, 'xsg', 23)">增加学生按钮</button>
    <Hello></Hello>
    <h2>App内容，info对象的内容是否是响应式的</h2>
    <button @click="updateInfo">修改信息</button>
    {{ $store.state.info }}
    <h2>响应式原理</h2>
    <button @click="update1info">响应式按钮</button>
    <h2>App内容：modules中的内容</h2>
    <h2>{{$store.state.a.sex}}</h2>
    <button @click="update4">修改性别</button>
    <button @click="update5">修改模块里面的东西</button>
  </div>
</template>

<script>
import {INCREMENT} from './store/mutations-types'
import Hello from "./components/hellow.vue";
export default {
  name: "App",
  data() {
    return {
      message: "你好呀",
    };
  },
  components: {
    Hello,
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // 调用mutations里面的方法，并将count传入到mutations里面用
      // this.$store.commit("incrementCount", count);
      // 特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addstudent(id, name, age) {
      // 发现commit中只有两个参数，当要想传多个参数，就先再外面定义，一般定义成对象的格式，然后统一写到commit中，第二个参数叫做Payload(叫做载荷),且这种提交方式是一种普通的提交方式
      const obj = {
        id,
        name,
        age,
      };
      this.$store.commit("incrementStudent", obj);
    },
    updateInfo() {
      // this.$store.commit({
      //   type: "update",
      //   name,
      //   age,
      // });
     
      this.$store.dispatch('aupdateifo',()=>{
        console.log('里面已经完成了');
      })
    },
    update1info() {
    this.$store.commit("updata2info")
    },
    update4(){//这里不能通过特殊的提交封装，那样传不出去
        this.$store.commit('update3','女'
          
      )
    },
    update5(){
      this.$store.dispatch('aupdatecount')
    }
  },
};
// vue init webpack 文件名字
</script>

<style scoped>
</style>
