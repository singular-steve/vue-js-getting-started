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
  }
})

export default store
