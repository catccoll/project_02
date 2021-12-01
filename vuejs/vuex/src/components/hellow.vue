<template>
  <div>
    <h2>{{$store.state.count}}</h2>
   组件 {{$store.getters.powerCount}}
   {{$store.getters.age}}
   {{$store.getters.more20length}}
   <!-- getters -->
  <h2>大于19对的对象有：{{$store.getters.moreage(19)}}</h2>
  {{$store.state.students}}
  <h2>这是组件的内容</h2>
  <h1>{{$store.getters.fullsex}}</h1>
  <h1>{{$store.getters.fullsexlength}}</h1>
  <h1>{{$store.getters.fullsex2}}</h1>
  <h1>{{$store.state.a.sum}}</h1>
  
  </div>
</template>

<script>
export default {
  name: "Hello",
//   props: {
//     count: {
//       type: Number,
//     },
//   },
};
</script>

<style>
</style>