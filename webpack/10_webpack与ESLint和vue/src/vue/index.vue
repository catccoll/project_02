<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "sai",
  data() {
    return {
      message: "弄好呀",
    };
  },
};
</script>

<style scoped lang='less'>
div {
  color: red;
}
</style>