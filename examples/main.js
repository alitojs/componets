import Vue from 'vue'
import App from './App.vue'
import router from './router'
import test from '@alitojs/components'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'; 
Vue.use(test);
Vue.use(Antd);
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
