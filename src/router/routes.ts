import Component from 'vue-class-component'
import { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ComponentsArea from '../views/ComponentsArea.vue'

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components',
    name: 'ComponentsArea',
    component: ComponentsArea
  }
]
