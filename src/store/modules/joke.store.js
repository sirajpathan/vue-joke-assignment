import request from '../../lib/httpRequest';
export default {
    state: {
        jokes: []
    },
    getters: {
        getJokes(stateData) {
            return stateData.jokes;
        }
    },
    actions: {
        getAllJokes({ rootState: { config }, dispatch }) {
            const data = localStorage.getItem('jokes');
            if (data) {
                return dispatch('setJokes', JSON.parse(data));
            }
            return getAllJokes(config, dispatch);
        },
        getJoke({ rootState: { config }, dispatch }) {
            return getJoke(config, dispatch);
        },
        setJokes({commit}, payload) {
            commit("setJokes", payload);
        },
        clearJokes({commit}) {
            commit("removeJokes");
        }
    },
    mutations: {
        setJokes (state, payload) {
            typeof payload === 'string' ? state.jokes.push(payload) : state.jokes = payload;
            window.localStorage.setItem("jokes", JSON.stringify(state.jokes));
        },
        removeJokes (state) {
            state.jokes = [];
            localStorage.clear();
        }
    }
}

function getAllJokes ({API_URL}, dispatch) {
    return request(API_URL + '/search')
    .then(jokesData => {
        dispatch('setJokes', jokesData.split('\n'));
        return;
      });
}

function getJoke ({API_URL}, dispatch) {
    return request(API_URL + '/')
    .then(jokesData => {
        dispatch('setJokes', jokesData.trim());
        return;
      });
}