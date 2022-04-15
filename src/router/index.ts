import { createWebHistory, createRouter } from "vue-router";
import { useUtil } from "../composables/util";
const { setNotFound } = useUtil();
const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/",
    name: "Lobby",
    component: () => import("../views/Lobby.vue"),
  },
  {
    path: "/guest",
    name: "Guest",
    component: () => import("../views/Guest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// todo
const isAuth = false;
const canAccess = async (to) => {
  if (!isAuth && to.name !== 'Guest') {
    return false;
  }

  return true;
}

router.beforeEach(async (to, from) => {
  if (to.name === 'NotFound') {
    setNotFound(true);
    return { name: 'NotFound' }
  }

  setNotFound(false);
  const access = await canAccess(to);
  if (!access) {
    return { name: 'Guest'}
  }
})

export default router;