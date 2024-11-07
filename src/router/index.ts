import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomePage.vue")
    },
    {
        path: "/qualify",
        name: "qualify",
        component: () => import("../views/QualifyingVote.vue")
    },
    {
        path: "/group",
        name: "group",
        component: () => import("../views/GroupVote.vue")
    },
    {
        path: "/secret",
        name: "secret",
        component: () => import("../views/SecretPage.vue")
    }
];

export const routerConvert = createRouter({
    history: createWebHashHistory('/pku-gal-selection-frontend'),
    routes,
});