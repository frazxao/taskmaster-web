import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import TasksView from '../views/TasksView.vue'

const routes = [
  {
    path: '/',
    component: LoginView
  },
  {
    path: '/dashboard',
    component: DashboardView
  },
  {
    path: '/tasks',
    component: TasksView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router