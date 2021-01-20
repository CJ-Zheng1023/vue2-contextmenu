import Vue from 'vue'
import App from './App.vue'
import Contextmenu from '../src/index'
import '../src/styles/styles.less'
Vue.config.productionTip = false
Vue.use(Contextmenu)
new Vue({
  render: h => h(App)
}).$mount('#app')
