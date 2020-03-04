import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import awsExports from './aws-exports'
import Amplify, * as AmplifyModules from 'aws-amplify'

Vue.config.productionTip = false

Amplify.configure(awsExports)
Vue.use(AmplifyModules)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
