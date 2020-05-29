import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "../src/assets/font/fontcss/all.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import "../src/assets/global/body.scss";
import "../src/assets/mainpage/logo.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,

  VueAwesomeSwiper,
  render: h => h(App)
}).$mount("#app");
