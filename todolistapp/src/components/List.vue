<template>
  <transition-group name="list" tag="ul">
    <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)" v-on:click="doneToggle({index: index})" :key="index">
      <span>{{a.todo}}</span>
      <span v-if="a.done">Done</span>
      <span class="close" v-on:click.stop="deleteTodo({index: index})">&#x00D7;</span>
    </li>
  </transition-group>
</template>

<script>
  import Constant from '../constants'
  import {mapState} from 'vuex'

  export default {
    name: "List",
    computed: mapState(['todolist']),
    methods: {
      checked(done) {
        if (done) return {checked: true}
        else return {checked: false}
      },
      deleteTodo(payload) {
        this.$store.dispatch(Constant.DELETE_TODO, payload)
      },
      doneToggle(payload) {
        this.$store.dispatch(Constant.DONE_TOGGLE, payload)
      }
    }
  }
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    cursor: pointer;
    position: relative;
    padding: 8px 8px 8px 40px;
    background: #eee;
    font-size: 14px;
    transition: 0.2s;
    user-select: none;
  }

  ul li:hover {
    background: #ddd;
  }

  ul li.checked {
    background: #bbb;
    color: #fff;
    text-decoration: line-through;
  }

  ul li.checked::before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 1px 1px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 8px;
    width: 8px;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px 12px 8px 12px;
  }

  .close:hover {
    background-color: #f44336;
    color: white;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(50px);
  }
</style>
