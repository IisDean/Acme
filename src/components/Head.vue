<template>
    <div class="heads">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">
				<router-link to="/">Home</router-link>
			</el-menu-item>
			<el-menu-item index="2">
				<router-link to="/about">轨迹</router-link>
			</el-menu-item>
			<el-menu-item index="3">
				<router-link to="/photo">旅行</router-link>
			</el-menu-item>
			<el-menu-item index="4">
				<router-link to="/about">日迹</router-link>
			</el-menu-item>
		</el-menu>
		<div class="line"></div>
    </div>
</template>

<script>
export default {
    name: "heads",
    data() {
        return {
        	activeIndex: '1',
        }
    },
    methods: {
      	handleSelect(key, keyPath) {
      		console.log(key, keyPath);
      	}
    },
    mounted() {

    }
}
</script>

<style scope>
	.heads ul {
		background-color: transparent;
	}
</style>