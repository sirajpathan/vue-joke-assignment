// import Vue from 'vue';
// import Vuex from 'vuex';
// import joke from './modules/joke.store';
// Vue.use(Vuex)

// export default new Vuex.Store({
//    modules: {
//       joke,
//       namespaced: true,
//    },
   
// });

import { createStore } from 'vuex';
// import joke from './modules/joke.store';

// Create a new store instance.
const store = createStore({
   state: {
      patients: []
    }
})
export default store;