import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../constants'
import SearchAPI from '../api/SearchAPI'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    contacts: []
  },
  mutations: {
    [Constant.SEARCH_CONTACT]: (state, payload) => {
      state.contacts = payload.contacts
    }
  },
  actions: {
    [Constant.SEARCH_CONTACT]: (store, payload) => {
      SearchAPI.searchContact(payload.name)
        .then(res => {
          store.commit(Constant.SEARCH_CONTACT, { contacts: res.data })
        })
    }
  }
})

export default store
