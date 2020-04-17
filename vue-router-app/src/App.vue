<template>
  <div id="app">
    <div class="header">
      <h1 class="headerText">Vue.js</h1>
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import ContactItem from './components/ContactItem';
import VueRouter from 'vue-router';

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/about', component: About},
    {path: '/contacts', component: Contacts},
    {path: '/contacts/:no', component: ContactItem},
  ],
});

export default {
  name: 'app',
  router,
}
</script>

<style>
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css");

  .header {
    background-color: aqua;
    padding: 10px 0 0 0;
  }
  .headerText {
    padding: 0 20px 0 20px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: purple;
  }
  li {
    float: left;
  }
  li a {
    display: block;
    color: yellow;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover {
    background-color: aqua;
    color: black;
  }
</style>
