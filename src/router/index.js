import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import AddRequest from '../views/AddRequest.vue';
import Archiving from '../views/Archiving.vue';
import Request from '../views/Request.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/add-request',
      name: 'AddRequest',
      component:AddRequest
    },
    {
      path: '/archiving',
      name: 'Archiving',
      component:Archiving
    },
    {
      path: '/request',
      name: 'Request',
      component:Request
    },
  
    
  ]
})

export default router
