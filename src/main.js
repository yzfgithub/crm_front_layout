import Vue from 'vue'
import App from './App.vue'

import router from './route/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import config from './config'



Vue.config.productionTip = false
Vue.use(ElementUI)

axios.defaults.baseURL = config.baseUrl;
var token = null;
if (localStorage.getItem('token') != null) {
    token = localStorage.getItem('token');
}
if (token != null) {
    axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;
}

Vue.prototype.can = function(permission){
    var permissions = localStorage.getItem('permissions') || []
    return permission ? permissions.indexOf(permission) != -1 : true;
}

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
