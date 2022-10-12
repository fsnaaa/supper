<template>
  <div id="App">
    <router-view/>
    <my-tab-bar/>
  </div>
</template>

<script>
import MyTabBar from "components/content/mytabbar/MyTabBar.vue"
export default {
  name: 'App',
  components:{
    MyTabBar
  }
}
</script>

<style>
@import url("assets/css/base.css");
</style>
