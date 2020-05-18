import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: "未定义",
    phone: 18390210161
  },
  mutations: {
    changeIslogin(state) {
      state.isLogin = !state.isLogin;
    }
  },
  actions: {},
  modules: {}
});
