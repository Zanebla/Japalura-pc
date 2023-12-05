<template>
  <div id="app">
    <NavigationMenu />
    <!-- 渲染当前路由对应的组件 -->
    <router-view />
  </div>
</template>

<script>
import NavigationMenu from './views/NavigationMenu.vue'
export default {
  components: {
    NavigationMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; /* 适应导航栏的高度 */
}
</style>