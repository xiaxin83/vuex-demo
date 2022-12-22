import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import user from "./modules/user";
import app from "./modules/app";
import settings from "./modules/settings";
import permission from "./modules/permission";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    app,
    permission,
    settings,
  },
  getters,
});

export default store;
