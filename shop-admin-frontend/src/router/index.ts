import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/index.vue";
import NotFound from "../views/error/404.vue";
import Login from "../views/auth/loginAndRegister.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;