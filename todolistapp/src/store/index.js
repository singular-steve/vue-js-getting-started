import Vue from 'vue'
import Vuex from 'vuex'
import Constant from '../constants'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todolist: [
      {todo: 'Watching Movie', done: false},
      {todo: 'Walking', done: true},
      {todo: 'Studying', done: false},
      {todo: 'Baseball', done: false},
    ]
  },
  mutations: {
    [Constant.ADD_TODO]: (state, payload) => {
      if (payload.todo !== '') {
        state.todolist.push({todo: payload.todo, done: false})
      }
    },
    [Constant.DONE_TOGGLE]: (state, payload) => {
      if (payload.todo !== '') {
        state.todolist[payload.index].done = !state.todolist[payload.index].done
      }
    },
    [Constant.DELETE_TODO]: (state, payload) => {
      if (payload.todo !== '') {
        state.todolist.splice(payload.index, 1)
      }
    }
  },
  actions: {
    [Constant.ADD_TODO] : (store, payload) => {
      console.log('#### ADD_TODO Action')
      store.commit(Constant.ADD_TODO, payload)
    },
    [Constant.DELETE_TODO] : (store, payload) => {
      console.log('#### DELETE_TODO Action')
      store.commit(Constant.DELETE_TODO, payload)
    },
    [Constant.DONE_TOGGLE] : (store, payload) => {
      console.log('#### DONE_TOGGLE Action')
      store.commit(Constant.DONE_TOGGLE, payload)
    }
  }
})

export default store
