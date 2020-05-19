import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Layout,
  Menu,
  List,
  Input,
  Icon,
  breadcrumb,
  Descriptions,
  avatar,
  Notification
} from "ant-design-vue";
Vue.config.productionTip = false;

Vue.use(Icon);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(List);
Vue.use(Input);
Vue.use(breadcrumb);
Vue.use(Descriptions);
Vue.use(avatar);
Vue.use(Notification);
const MenuIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1824613_13g3j2x4n7z9.js"
});

Vue.component("MenuIcon", MenuIcon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
