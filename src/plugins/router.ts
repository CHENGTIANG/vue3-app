import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeLayout from "../pages/home/HomeLayout.vue";
import HomePage from "../pages/home/HomePage.vue";
import NearbyPage from "../pages/home/NearbyPage.vue";
import FavoritesPage from "../pages/home/FavoritesPage.vue";
import MePage from "../pages/home/MePage.vue";
import SigninPage from "../pages/SigninPage.vue";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomeLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: HomePage,
      },
      {
        path: "/nearby",
        component: NearbyPage,
      },
      {
        path: "/favorites",
        component: FavoritesPage,
      },
      {
        path: "/me",
        component: MePage,
      },
    ],
  },
  {
    path: "/signin",
    component: SigninPage,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
