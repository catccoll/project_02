<template>
<div>
 <TabBar>
      <TabBarItem path="/home" activeColor='green'>
        <img slot="item-icon" src="../assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon1"
          src="../assets/img/tabbar/home_active.svg"
          alt=""
        />

        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor='yellow' >
        <img
          slot="item-icon"
          src="../assets/img/tabbar/category.svg"
          alt=""
        />
        <img
          slot="item-icon1"
          src="../assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/shopCart">
        <img
          slot="item-icon"
          src="../assets/img/tabbar/shopcart.svg"
          alt=""
        />
        <img
          slot="item-icon1"
          src="../assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile">
        <img
          slot="item-icon"
          src="../assets/img/tabbar/profile.svg"
          alt=""
        />
        <img
          slot="item-icon1"
          src="../assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
</div>
 
</template>

<script>
import TabBar from "../components/tabbar/TabBar.vue";
import TabBarItem from "../components/tabbar/TabBarItem.vue";
export default {
 name:'mainTabBar',
 components:{
     TabBar,
     TabBarItem
 }
 
}
</script>

<style>

</style>