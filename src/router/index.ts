import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../views/HomePage.vue")
    },
    {
        path: "/qualify",
        component: () => import("../views/QualifyingVote.vue")
    },
    {
        path: "/group",
        component: () => import("../views/GroupVote.vue")
    },
    {
        path: "/secret",
        component: () => import("../views/SecretPage.vue")
    }
];

export const routerConvert = createRouter({
    history: createWebHashHistory('/pku-gal-selection-frontend'),
    routes,
});