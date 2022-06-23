import { createRouter, createWebHistory } from 'vue-router';

import AddRequest from '../views/AddRequest.vue';
import Archiving from '../views/Archiving.vue';
import Contact from '../views/Contact.vue'
import Dashboard from '../views/Dashboard.vue';
import DashboardContact from '../views/DashboardContact.vue'
import Request from '../views/Request.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component:Dashboard
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
    {
      path: '/contact',
      name: 'Contact',
      component:Contact
    },
    {
      path: '/dashboard-contact',
      name: 'DashboardContact',
      component:DashboardContact
    },
  
    
  ]
})

export default router
