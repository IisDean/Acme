import Vue from 'vue';
import $ from 'jquery';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css';
import App from './App.vue';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$ = $;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
