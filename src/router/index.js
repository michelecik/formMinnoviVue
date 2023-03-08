import { createRouter, createWebHistory } from 'vue-router'
import FirstTab from '../views/FirstTab.vue'
import SecondStep from '../views/SecondTab.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'firstTab',
      component: FirstTab
    },
    {
     path: '/step2',
     name: 'secondStep',
     component: SecondStep, 
    }
  ]
})

export default router
