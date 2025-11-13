import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BrandStory from '@/views/BrandStory.vue'
import Products from '@/views/Products.vue'
import Store from '@/views/Store.vue'
import Contacts from '@/views/Contacts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/brand-story',
      name: 'brand-story',
      component: BrandStory
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router