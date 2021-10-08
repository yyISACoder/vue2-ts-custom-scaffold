import Vuex from 'vuex'
import Vue from 'vue'
import example from './example'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example
  }
})

export default store