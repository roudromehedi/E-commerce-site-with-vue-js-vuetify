import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CheckoutPage from "../components/checkout-page.vue";
import ProductDetailsPage from "../components/product-details-page.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/checkout",
    name: "CheckoutPage",
    component: CheckoutPage,
  },
  {
    path: "/product-details/:id",
    name: "ProductDetailsPage",
    component: ProductDetailsPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
