import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import i18n from '../i18n'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  if (navigator.language === 'es') {
    i18n.locale = 'es'
  } else if (navigator.language === 'en') {
    i18n.locale = 'en'
  }

  next()
})

export default router
