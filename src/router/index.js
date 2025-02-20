import { createRouter, createWebHistory } from 'vue-router'
import FlowsPage from '../components/FlowsPage.vue'
import TemplatesPage from '../components/TemplatesPage.vue'
import FlowDetailsPage from '../components/FlowDetailsPage.vue'
import TemplateDetailsPage from '../components/TemplatesDetailsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Flows',
    component: FlowsPage
  },
  // Add more routes here as needed
  {
    path: '/templates',
    name: 'Templates',
    component: TemplatesPage
  },

  {
    path: '/flow/:id',
    component: FlowDetailsPage
  },
  {
    path: '/template/:id',
    component: TemplateDetailsPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router