import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 引入Axios
import axios from 'axios'
// axios.defaults.withCredentials=true; //让ajax携带cookie
Vue.prototype.$http=axios
// axios.defaults.baseURL = 'http://127.0.0.1:8000' //初始化基础地址

// 引入滑动组件
import vueTouch from 'kim-vue-touch'

Vue.use(vueTouch)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
