<template>
  <div class="tabbar-item" @click="itemClick">
     <div v-if='isActived'>  <slot name="item-icon1"></slot></div>
  <div v-else >  <slot name="item-icon"></slot></div>
  
    <div :style="activeStyle"> <slot name="item-text"></slot></div>
    <!-- 一般外面用一个div包裹一下，因为在替换插槽的时候，类名什么其他的会被覆盖掉，不起效果，外面包一个带类的div，这样就起到继承他的类，就起到了效果 -->
  </div>
</template>

<script>
export default {
  name: "TabBatItem",
  data(){
      return{
        
      }
  },
  computed:{//这里是重点
    isActived(){
      // 这里的思想很重要，要动态绑定
      return this.$route.path==this.path
    },
    activeStyle(){
      // 样式过于复杂的话，我们可以用计算属性来书写(这里是重点)
      return this.isActived?{color:this.activeColor}:{}
    }
  },
  props:{
      path:{type:String},
      activeColor:{
        type:String,
        default:'red'
      }
  },
  methods:{
      itemClick(){
         this.$router.push(this.path)//父传子
    
      }
  }
};
</script>

<style scoped>
.tabbar-item img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
}
.tabbar-item {
  flex: 1;
 
  text-align: center;
  /* 一般都是49px，约定成俗 */
  height: 49px;
  
}
.actived{
    color: red;
}
</style>
