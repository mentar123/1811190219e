import Vue from 'vue'
import App from './App.vue'
const moment = require('moment')
require('moment/locale/ru')

Vue.config.productionTip = false
Vue.use(require('vue-moment'),{moment});

new Vue({
  render: h => h(App),
}).$mount('#app')
