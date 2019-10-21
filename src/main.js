import Vue from 'vue';
import $ from 'jquery';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common.css';
import './element-variables.scss';
import App from './App.vue';
import router from './router';

import {
  Row,
  Col,
  Menu,
  MenuItem,
  Card,
  Image,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Footer, 
  Icon,
  Button,
  Tag,
  Pagination,
  Tree,
  Divider
} from 'element-ui';
 
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Card);
Vue.use(Image);
Vue.use(Input);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Pagination);
Vue.use(Tree);
Vue.use(Divider);

Vue.config.productionTip = false
Vue.prototype.$ = $;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
