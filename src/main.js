import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App";
import store from "@/store";
import VueSelect from 'vue-select'

import ImageList from "@/components/ImageList";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTimes, faArrowUp, faArrowDown);

Vue.use(VueRouter);
Vue.component('v-select', VueSelect);
Vue.component('fa', FontAwesomeIcon)

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
