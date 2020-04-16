<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">Contacts</h1>
      <p>Dynamic Component + EventBus + Axios</p>
    </div>
    <component v-bind:is="currentView"></component>
    <contact-list v-bind:contactlist="contactlist"></contact-list>
    <paginate ref="pagebuttons"
              :page-count="totalpage"
              :page-range="7"
              :margin-pages="3"
              :click-handler="pageChanged"
              :prev-text="'previous'"
              :next-text="'next'"
              :container-class="'pagination'"
              :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
  import ContactList from './components/ContactList';
  import ContactForm from './components/ContactForm';
  import UpdatePhoto from './components/UpdatePhoto';

  import Paginate from 'vuejs-paginate'
  import config from './config'
  import constants from './constants';
  import _ from 'lodash';
  import {mapState} from 'vuex';

  export default {
    name: 'App',
    components: {
      ContactList,
      ContactForm,
      UpdatePhoto,
      Paginate,
    },
    computed: _.extend({
        totalpage: function() {
          const totalcount = this.contactlist.totalcount;
          const pagesize = this.contactlist.pagesize;

          return Math.floor((totalcount - 1) / pagesize) + 1;
        }
      }, mapState(['contactlist', 'currentView'])
    ),
    mounted() {
      this.$store.dispatch(constants.FETCH_CONTACTS);
    },
    methods: {
      pageChanged(page) {
        this.$store.dispatch(constants.FETCH_CONTACTS, {pageno: page});
      },
    },
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
</style>
