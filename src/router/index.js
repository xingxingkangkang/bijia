import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/bijia",
    name: "Bijia",

    component: () =>
      import(/* webpackChunkName: "bijia" */ "../layouts/BasicLayout.vue"),
    children: [
      {
        path: "/",
        component: { render: h => h("router-view") },
        redirect: "/bijia/search",
        children: [
          {
            path: "/bijia/hot",
            name: "hot",
            component: () =>
              import(/* webpackChunkName: "bijia" */ "../views/Hot")
          },
          {
            path: "/bijia/search",
            name: "search",
            component: () =>
              import(/* webpackChunkName: "bijia" */ "../views/SearchButton")
          },
          {
            path: "/bijia/search/:goods",
            name: "searchone",
            component: () =>
              import(/* webpackChunkName: "bijia" */ "../views/Search")
          },
          {
            path: "/bijia/user",
            name: "user",
            component: () =>
              import(/* webpackChunkName: "bijia" */ "../views/User")
          },
          {
            path: "/bijia/detail/:goodID/:eid",
            name: "detail",
            component: () => import("../views/detail")
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
