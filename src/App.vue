<template>
  <div id="app">
    <!-- 路由显示文位置 -->
    <keep-alive exclude="Detail,Cart">
       <router-view></router-view>
    </keep-alive>
   
  <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>

import MainTabBar from './components/content/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

@import "./assets/css/base.css"
</style>
