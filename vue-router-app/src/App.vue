<template>
  <div id="app">
    <div class="header">
      <h1 class="headerText">vue-router sample</h1>
      <nav>
        <ul>
          <li><router-link v-bind:to="{ name: 'Home' }">Home</router-link></li>
          <li><router-link v-bind:to="{ name: 'About' }">About</router-link></li>
          <li><router-link v-bind:to="{ name: 'Contacts' }">Contacts</router-link></li>
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
    {path: '/home', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/contacts', name: 'Contacts', component: Contacts,
      children: [
        {
          path: ':no', name: 'ContactItem', component: ContactItem,
          beforeEnter: (to, from, next) => {
            console.log('#### beforeEnter ####');
            console.log(`from : ${from.path} ---> to: ${to.path}`);
            // 인증, 권한 처리 지점
            if (from.path.startsWith('/contacts')) {
              next();
            } else {
              next('/home');
            }
          },
        },
      ]
    },
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
