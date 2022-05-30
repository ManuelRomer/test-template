import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './styles/main.scss'
import i18n from './i18n'
import ToastedPlugin from 'vue-toasted'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

Vue.use(ToastedPlugin, {
  duration: 2 * 1000,
  singleton: true,
  keepOnHover: true,
  position: 'top-center',
  theme: 'bubble'
})

new Vue({
  router,
  store,
  i18n,
  // @ts-ignore
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
