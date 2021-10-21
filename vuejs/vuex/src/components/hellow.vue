<template>
  <div>
    <h2>{{$store.state.count}}</h2>
   {{$store.getters.powerCount}}
   {{$store.getters.age}}
   {{$store.getters.more20length}}
  <h2>大于19对的对象有：{{$store.getters.moreage(19)}}</h2>
  {{$store.state.students}}
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