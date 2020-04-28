import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Tabs: []
  },
  mutations: {
    CREATE_TAB(state, tab) {
      state.Tabs.unshift(tab);
    },
    EDIT_TAB(state, tab, index) {
      state.Tabs[index].name = tab.name;
    },
    DELETE_TAB(state, index) {
      state.Tabs.splice(index, 1);
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
