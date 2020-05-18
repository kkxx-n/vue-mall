<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="tab-img" src="~assets/images/tabbar/home.svg"  alt srcset />
      <img slot="tab-img-active" src="~assets/images/tabbar/home_active.svg" alt srcset />
      <div slot="tab-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="tab-img" src="~assets/images/tabbar/category.svg"  alt srcset />
      <img slot="tab-img-active" src="~assets/images/tabbar/category_active.svg" alt srcset />
      <div slot="tab-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img  slot="tab-img"  src="~assets/images/tabbar/shopcart.svg" alt srcset />
      <img slot="tab-img-active" src="~assets/images/tabbar/shopcart_active.svg" alt srcset />
      <div slot="tab-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/me" activeColor="pink">
      <img slot="tab-img" src="~assets/images/tabbar/profile.svg" alt srcset />
      <img slot="tab-img-active" src="~assets/images/tabbar/profile_active.svg" alt srcset />
      <div slot="tab-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../common/tabbar/TabBar";
import TabBarItem from "../common/tabbar/TabBarItem";

export default {
  name: "MainTapBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>