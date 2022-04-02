import { createRouter, createWebHistory } from 'vue-router'
import authMiddleware from './middleware/auth-middleware'

import HomeView from '../views/HomeView.vue'

import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Forgot from '@/views/auth/Forgot.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		// AUTH ROUTES
		{ name: 'login', path: '/login', component: Login, meta: { layout: 'auth' } },
		{
			name: 'register',
			path: '/register',
			component: Register,
			meta: { layout: 'auth' },
		},
		{
			name: 'forgot-password',
			path: '/forgot-password',
			component: Forgot,
			meta: { layout: 'auth' },
		},
	],
})

router.beforeEach(authMiddleware)

export default router
