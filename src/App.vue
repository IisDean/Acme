<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <HomeBg msg="你好！这里是IisDean的个人网站，如有意深入交流，可加wx：IisDean" />
    <router-view/>
  </div>
</template>

<script>
import $ from 'jquery';
import HomeBg from "@/components/HomeBg.vue";
export default {
  data() {
    return {
      
    }
  },
  components: {

		HomeBg,
  },
  created() {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
