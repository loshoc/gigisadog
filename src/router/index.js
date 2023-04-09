import { createWebHistory, createRouter } from "vue-router";


import home from "../components/home.vue";
import about from "../components/about.vue";
// const home = ()=> import('../components/home.vue')
// const about = ()=> import('../components/about.vue')

const routes = [
    
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  
  export default router;