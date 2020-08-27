// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "bootstrap";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";
import VeeValidate from "vee-validate";
import zhTW from "vee-validate/dist/locale/zh_TW";
import VueI18n from "vue-i18n";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
//視差滾動套件
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
//視差滾動套件

//引入icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//引入icon

import currencyFilter from "./filters/currency";
import dateFilter from "./filters/date";
import "./bus";

Vue.use(VueAxios, axios);
Vue.component("Loading", Loading);
Vue.filter("currencyFilter", currencyFilter);
Vue.filter("date", dateFilter);
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
//axios 默認是發送請求的時候不會帶上 cookie 的，需要通過設置 withCredentials: true
//icon
library.add(fas, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
//icon

axios.defaults.withCredentials = true;
//跨域cookies

// 中文化驗證
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "zhTW"
});
Vue.use(VeeValidate, {
  events: "input|blur", //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
});

// 中文化驗證

export const eventBus = new Vue();

Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  i18n
});

//驗證守衛router

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`;
    axios.post(api).then(response => {
      console.log(response.data);
      // 上方因為此段不是在vue實體內所以沒辦法用this.$http呼叫  直接使用axios套件
      if (response.data.success) {
        next();
        //如果登入成功則直接執行next()
      } else {
        alert("請先登入");
        next({
          path: "/"
        });
      }
    });
  } else {
    next();
    //如果跳轉的頁面沒有meta.requiresAuth 直接跳轉
  }
});
