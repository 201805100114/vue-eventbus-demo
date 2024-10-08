import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// 创建事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app');