import Vue from 'vue'
import TodoList from "./components/TodoList";

new Vue({
  el: '#app',
  render: h => h(TodoList)
})
