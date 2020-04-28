import Vue from "vue";
import Vuex from "vuex";
import socket from "../services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Tabs: []
  },
  mutations: {
    SET_TABS(state, tabs) {
      state.Tabs = tabs;
    },
    CREATE_TAB(state, tab) {
      state.Tabs.unshift(tab);
      socket.emit("Tabs", state.Tabs);
      // socket.on("Tab", (data) => {
      //   state.Tabs = data;
      // })
    },
    EDIT_TAB(state, tab, index) {
      state.Tabs[index] = tab;
      socket.emit("Tabs", state.Tabs);
      // socket.on("Tab", (data) => {
      //   state.Tabs = data;
      // })
    },
    DELETE_TAB(state, index) {
      state.Tabs.splice(index, 1);
      socket.emit("Tabs", state.Tabs);
      // socket.on("Tab", (data) => {
      //   state.Tabs = data;
      // })
    }
  },
  actions: {},
  modules: {},
  getters: {
    getAllTabs(state) {
      // console.log(state.Tabs.filter(x => x));
      return state.Tabs.filter(x => x);
    },
    getTabById: state => id => {
      // console.log(state.Tabs.filter(x => x));
      return state.Tabs.filter((x, index) => id === index);
    }
  }
});
