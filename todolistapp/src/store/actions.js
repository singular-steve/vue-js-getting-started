import Constant from "../constants";

export default {
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
