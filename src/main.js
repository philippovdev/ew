import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import store from "@/store";
import VueSelect from 'vue-select'

import ImageList from "@/components/ImageList";

Vue.use(VueRouter);
Vue.component('v-select', VueSelect);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/", component: ImageList},
  ]
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
