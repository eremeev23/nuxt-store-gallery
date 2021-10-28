import Vuex from 'vuex'
import Vue from 'vue'
import items from './modules/items'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        items
    }
})

export default store