// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import VueRouter from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import UpdatePhoto from './components/UpdatePhoto';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    {
      path: '/contacts', name: 'ContactList', component: ContactList, children: [
        { path: 'add', name: 'AddContact', component: ContactForm },
        { path: 'update/:no', name: 'UpdateContact', component: ContactForm, props: true },
        { path: 'photo/:no', name: 'UpdatePhoto', component: UpdatePhoto, props: true },
      ]
    },
  ],
});

new Vue({
  store,
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
});
