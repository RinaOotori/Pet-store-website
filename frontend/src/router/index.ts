import {createRouter, createWebHistory} from 'vue-router'
//import middleware
import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('@/components/Pages/Home/Home.vue'),
            children: []
        },
        {
            path: '/neuropsychology',
            name: 'NeuropsychologyPage',
            component: () => import('@/components/Pages/Neuropsychology/Neuropsychology.vue'),
        },
        {
            path: '/creation',
            name: 'CreationPage',
            component: () => import('@/components/Pages/Creation/Creation.vue'),
            children: [
                {
                    path: 'drawing',
                    name: 'DrawingPage',
                    component: () => import('@/components/Pages/Creation/Drawing.vue'),
                },
                {
                    path: 'applique',
                    name: 'AppliquePage',
                    component: () => import('@/components/Pages/Creation/Applique.vue'),
                },
            ],
        },
        {
            path: '/gallery',
            name: 'GalleryPage',
            component: () => import('@/components/Pages/Gallery/GalleryPage.vue'),
        },
        {
            path: '/tutorial',
            name: 'TutorialPage',
            component: () => import('@/components/Pages/Tutorial/Tutorial.vue'),
        },
        {
            path: '/psychology',
            name: 'PsychologyPage',
            component: () => import('@/components/Pages/Psychology/Psychology.vue'),
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/components/Pages/LoginPage.vue'),
            meta: {middleware: guest}
        },
        {
            path: '/registration',
            name: 'Registration',
            component: () => import('@/components/Pages/RegistrationPage.vue'),
            meta: {middleware: guest},
        },
        {
            path: '/authorization',
            name: 'authorization',
            component: () => import('@/components/Pages/Authorization/AuthorizationPage.vue'),
            meta: {middleware: guest},
        },

    ]
})

export default router
