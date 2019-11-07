import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from "../components/Home.vue"; 

const routes = [
    {path: '/Home', component: Home },
    {path: "*", redirect: '/Home'}
];

const router = new VueRouter({
    mode: 'history',   /*hash模式改为history*/
    routes
});

export default router;