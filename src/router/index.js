import { createRouter, createWebHistory } from 'vue-router';

import AddRequest from '../views/AddRequest.vue';
import Archiving from '../views/Archiving.vue';
import ContactDetail from '../views/ContactDetail.vue'
import Dashboard from '../views/Dashboard.vue';
import DashboardContact from '../views/DashboardContact.vue';
import Request from '../views/Request.vue';
import NotFound from '../views/NotFound.vue';
import Setting from '../views/Setting.vue';
import Role from '../views/Role.vue';
import User from '../views/User.vue';


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
      name: 'ContactDetail',
      component:ContactDetail
    },
    {
      path: '/dashboard-contact',
      name: 'DashboardContact',
      component:DashboardContact
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: NotFound
    },
    {
      path: '/setting',
      name: 'Setting', 
      component: Setting
    },
    {
      path: '/user',
      name: 'User', 
      component: User
    },
    {
      path: '/role',
      name: 'Role', 
      component: Role
    },
  
    
  ]
})

export default router
