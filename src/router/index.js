import { createWebHistory, createRouter } from "vue-router";
const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Contact = () => import("../views/Contact.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    // checks if the user is on the homepage and if they are, it scrolls to the top of the page
    if (to.path === "/") {
      return
    }
    // checks if the user going to a previously navigated page and if they are, it scrolls to the position they were at
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash }
    }
    // if new page, scroll to top of page
    else {
      return { top: 0 }
    }
  }
});

export default router;