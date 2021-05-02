export default {
    state: {
        loaded: false,
        config: {}
    },
    actions: {
        getEnvConfig ({ commit }) {
            // eslint-disable-next-line
            return fetch(__webpack_public_path__ + "config.json")
                .then((data) => {
                    console.log(data);
                    return Promise.resolve(data.json());
                })
                .then(data => commit("setEnvConfig", data))
                .catch(console.error); // eslint-disable-line no-console
        },
        updateNewConfig ({ commit }, config) {
            return Promise.resolve(commit("updateConfig", config));
        }
    },
    mutations: {
        setEnvConfig (state, config) {
            Object.assign(state, config);
            console.log(state);
        }
    }
}