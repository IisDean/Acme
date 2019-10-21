<template>
    <div class="home">
		<Head></Head>
		<el-card class="box-card">
			<el-row>
				<el-col :span="12">
					<baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler" :mapStyle="mapStyle">
						
					</baidu-map>
				</el-col>
				<el-col :span="12">
					<el-timeline :reverse="reverse">
						<el-timeline-item
						v-for="(activity, index) in activities"
						:key="index"
						:timestamp="activity.timestamp">
						{{activity.content}}
						</el-timeline-item>
					</el-timeline>
				</el-col>
			</el-row>
		</el-card>
    </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Head from "@/components/Head.vue";
import BaiduMap from 'vue-baidu-map';
import mapStyleJson from '@/json/custom_map_config.json';

Vue.use(BaiduMap, {
	ak: 'http://api.map.baidu.com/api?v=3.0&ak=hMdRs0Qx3kGVl9KqT76y48l0w9H6fy8U'
}); 
export default { 
	name: "home",
	data() {
		return {
			center: {lng: 114.90451, lat: 28.199415},
			zoom: 15,
			mapStyle: {
				styleJson: mapStyleJson
			},
			reverse: true,
			activities: [{
				content: '活动按期开始',
				timestamp: '2018-04-15'
				}, {
				content: '通过审核',
				timestamp: '2018-04-13'
				}, {
				content: '创建成功',
				timestamp: '2018-04-11'
			}]
		}
	},
  	components: {
		Head
	},
	methods: {
		handler ({BMap, map}) {
			this.center.lng = 112.904555
			this.center.lat = 28.199255
			this.zoom = 15
		}
	}  
};
</script>

<style scope>
	body {
		background-color: #fff;
	}
	.text {
		font-size: 14px;
	}

	.item {
		padding: 18px 0;
	}

	.box-card {
		margin: 12px;
	}
	.bm-view {
		height: 500px;
	}
</style>
