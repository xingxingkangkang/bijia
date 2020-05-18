import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { Icon } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(Icon);
const MenuIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1824613_13g3j2x4n7z9.js"
});

Vue.component("MenuIcon", MenuIcon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
