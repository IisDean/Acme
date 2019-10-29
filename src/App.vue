<template>
  <div id="app">
    <HomeBg msg="你好！这里是IisDean的个人网站，如有意深入交流，可加wx：IisDean" />
    <router-view />
  </div>
</template>

<script>
import $ from "jquery";
import HomeBg from "@/components/HomeBg.vue";
export default {
  data() {
    return {};
  },
  components: {
    HomeBg
  },
  mounted() {
	  this.$router.push({ path: 'blog' })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
