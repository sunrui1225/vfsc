import {
    createRouter,
    createWebHashHistory,
} from 'vue-router'
import Layout from "@/layout/Layout.vue";

const routes = [
    {
        path: '/',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/home',
                component: () => import('../views/home/index')
            }
        ]
    },
    {
        path: 'search',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/search',
                component: () => import('../views/search/index')
            }
        ]
    },
    {
        path: 'tools',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/tools',
                component: () => import('../views/tools/index')
            }
        ]
    },





]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
