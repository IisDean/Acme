<template>
    <div class="home">
    	<HomeBg msg="你好！这里是IisDean的个人网站，如有意深入交流，可加wx：IisDean" />
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1"><el-link  to="/" :underline="false"><router-link to="/">Home</router-link></el-link></el-menu-item>
			<el-menu-item index="2"><el-link  to="/about" :underline="false"><router-link to="/about">About</router-link></el-link></el-menu-item>
		</el-menu>
		<div class="line"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import HomeBg from "@/components/HomeBg.vue";

export default {
	name: "home",
	data() {
		return {
        	activeIndex: '1',
		}
	},
  	components: {
    	HomeBg
	},
	methods: {
      handleSelect(key, keyPath) {
      	console.log(key, keyPath);
      }
	}  
};
</script>

<style scope>
	body {
		background-color: #fff;
	}
</style>
