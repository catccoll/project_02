<template>
  <div id="tabbar">
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tabbar {
  display: flex;
  /* justify-content: space-around; */
  background: #eee;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* left和right为0，就相当于width为100% */
  box-shadow: 0 -1px 1px rgb(100, 100, 100, 0.2);
}

</style>