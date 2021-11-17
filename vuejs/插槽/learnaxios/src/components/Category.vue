<template>
  <div class="category">
<h3>{{title}}</h3>
 <slot name="hender">我是一些默认值，当使用者没有使用插槽就显示我</slot>
 <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
name:'Category',
props:{
    title:{
        type:String
    }
}
}
</script>

<style scoped>
.category{
    background: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
}
</style>

