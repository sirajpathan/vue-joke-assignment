import { createApp } from 'vue'
import App from './App.vue'


import { createStore } from 'vuex';
import joke from './store/modules/joke.store';
import config from './store/modules/config.store';

// Create a new store instance.
const store = createStore({
    modules: {
        config,
        joke,
        namespaced: true
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app')
