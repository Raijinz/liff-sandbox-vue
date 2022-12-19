import { createRouter, createWebHistory } from "vue-router";
import liff from "@line/liff";

const HomeView = () => import("@/views/HomeView.vue");
const AboutView = () => import("@/views/AboutView.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: async () => {
        if (!import.meta.env.PROD) return true;

        try {
          await liff.init({
            liffId: import.meta.env.VITE_LIFF_ID,
            withLoginOnExternalBrowser: true,
          });
          await liff.i18n.setLang("th");
          return true;
        } catch (error) {
          return false;
        }
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
      beforeEnter: async () => {
        if (!import.meta.env.PROD) return true;

        try {
          await liff.init({
            liffId: import.meta.env.VITE_LIFF_ID,
            withLoginOnExternalBrowser: true,
          });
          await liff.i18n.setLang("th");
          return true;
        } catch (error) {
          return false;
        }
      },
    },
  ],
});

export default router;
