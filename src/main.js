import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.css';
import '@/element-variables.scss';
import App from '@/App.vue';
import router from '@/router';
import GL_component from '@/globalCommponents';

Vue.use(GL_component);

import ElementUI from 'element-ui';
 
Vue.use(ElementUI);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
