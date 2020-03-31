import Constant from "../constants";

export default {
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
