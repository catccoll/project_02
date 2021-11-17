<template>
  <div>
      <h1>我是profile</h1>
  {{profile.name}}{{this.$route.query}}

  </div>
</template>

<script>
export default {
name:'Profile',
computed:{
    profile(){
        return this.$route.query
    }
},
// created(){
//   document.title='档案'}

}
</script>

<style>

</style>