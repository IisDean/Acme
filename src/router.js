import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: Home
	}, {
		path: '/blog',
		name: 'blog',
		component: () => import( /* webpackChunkName: "blog" */ './views/Blog/Blog.vue')
	}, {
		path: '/blogDetail',
		name: 'blogDetail',
		component: () => import( /* webpackChunkName: "blogDetail" */ './views/Blog/Detail.vue')
	}, {
		path: '/about',
		name: 'about',
		component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
	}, {
		path: '/photo',
		name: 'photo',
		component: () => import( /* webpackChunkName: "photo" */ './views/Photo.vue')
	}, {
		path: '/login',
		name: 'login',
		component: () => import( /* webpackChunkName: "login" */ './views/Admin/Login.vue')
	}, {
		path: '/admin',
		name: 'admin',
		component: () => import( /* webpackChunkName: "admin" */ './views/Admin/Admin.vue'),
		children: [{
			path: '/blogListPanel',
			name: 'blogListPanel',
			component: () => import( /* webpackChunkName: "blogListPanel" */ './views/Admin/BlogListPanel.vue')
		}]
	}]
})