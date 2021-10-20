<template>
  <div>
      <h1>我是profile</h1>
  {{profile.name}}

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