<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">Contacts</h1>
      <p>Dynamic Component + EventBus + Axios</p>
      <div class="btn-group">
        <router-link to="/home" class="btn btn-info menu">Home</router-link>
        <router-link to="/about" class="btn btn-info menu">About</router-link>
        <router-link to="/contacts" class="btn btn-info menu">Contacts</router-link>
      </div>
    </div>
    <transition name="flip" mode="out-in">
      <router-view></router-view>
    </transition>
    <loading v-show="isLoading"></loading>
  </div>
</template>

<script>
  import Loading from './components/Loading';
  import { mapState } from 'vuex';
  export default {
    name: 'App',
    components: {Loading},
    computed: mapState(['isLoading']),
  }
</script>

<style>
  @import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');

  #container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .menu {
    width: 100px;
  }

  .flip-enter-active {
    transition: all 0.4s ease-in-out;
  }

  .flip-leave-active {
    transition: all 0.4s ease-in-out;
  }

  .flip-enter, .flip-leave-to {
    transform: scaleY(0) translateZ(0);
    opacity: 0;
  }
</style>
