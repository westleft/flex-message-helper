import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{ path: '/', name: 'Home', component: () => import("@/views/Home.vue") },
	{ path: '/introduce', name: 'Introduce', component: () => import("@/views/Introduce.vue") }	,
	{ path: '/steps', name: 'Steps', component: () => import("@/views/steps/index.vue") }	
];
const router = createRouter({
	history: createWebHistory(),
	routes
});
export default router;