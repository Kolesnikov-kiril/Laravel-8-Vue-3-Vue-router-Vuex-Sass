import {createStore} from 'vuex'

export default createStore({
    state: {
        count: 0,
    },
    mutations: {
        INCREMENT(state) {
            state.count++
        },
    },
    actions: {},
    modules:{}
});
