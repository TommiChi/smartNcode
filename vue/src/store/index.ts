import Vue from 'vue';
import Vuex from 'vuex';

import gemist from './modules/gemist';

Vue.use(Vuex);

interface VueStoreInterface {
  [propName: string]: any;
}

function applyNamespace(store: VueStoreInterface) {
  return {
    namespaced: true,
    ...store,
  };
}

function setModules(...stores: VueStoreInterface[]) {
  return stores.reduce((modules, store) => {
    const key = Object.keys(store)[0];
    const processedStore = {
      [key]: applyNamespace(store[key]),
    };

    return { ...modules, ...processedStore };
  }, {});
}

export default new Vuex.Store({
  modules: setModules({ gemist }),
});
