<template>
  <div>
    <p class="addnew">
      <router-link class="btn btn-primary" v-bind:to="{ name: 'AddContact' }">새로운 연락처 추가</router-link>
    </p>
    <div id="example">
      <table id="list" class="table table-striped table-bordered table-hover">
        <thead>
        <tr>
          <th>Name</th>
          <th>Tel</th>
          <th>Address</th>
          <th>Photo</th>
          <th>Edit / Delete</th>
        </tr>
        </thead>
        <tbody id="contacts">
        <tr v-for="contact in contactlist.contacts">
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
          <td><img class="thumbnail" :src="contact.photo" @click="editPhoto(contact.no)"></td>
          <td>
            <button class="btn btn-primary" @click="editContact(contact.no)">Edit</button>
            <button class="btn btn-primary" @click="deleteContact(contact.no)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
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
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import constants from '../constants';
  import Paginate from 'vuejs-paginate';
  import _ from 'lodash';

  export default {
    name: "ContactList",
    components: {Paginate},
    computed: _.extend(
      {
        totalpage() {
          const totalcount = this.contactlist.totalcount;
          const pagesize = this.contactlist.pagesize;
          return Math.floor((totalcount - 1) / pagesize) + 1;
        }
      }, mapState(['contactlist'])
    ),
    mounted() {
      let page = 1;
      if (this.$route.query && this.$route.query.page) {
        page = parseInt(this.$route.query.page);
      }
      this.$store.dispatch(constants.FETCH_CONTACTS, {pageno: page});
      this.$refs.pagebuttons.selected = page - 1;
    },
    watch: {
      '$route': function (to, from) {
        if (to.query.page && to.query.page !== this.contactlist.pageno) {
          const page = to.query.page;
          this.$store.dispatch(constants.FETCH_CONTACTS, {pageno: page});
          this.$refs.pagebuttons.selected = page - 1;
        }
      }
    },
    methods: {
      pageChanged(page) {
        this.$router.push({name: 'ContactList', query: {page: page}});
      },
      editContact(no) {
        this.$router.push({name: 'UpdateContact', params: {no: no}});
      },
      deleteContact(no) {
        if (confirm('Want to delete?')) {
          this.$store.dispatch(constants.DELETE_CONTACT, {no: no});
          this.$router.push({name: 'ContactList'});
        }
      },
      editPhoto(no) {
        this.$router.push({name: 'UpdatePhoto', params: {no: no}});
      }
    },
  }
</script>

<style scoped>
  .addnew {
    margin: 10px auto;
    max-width: 820px;
    min-width: 820px;
    padding: 40px 0 0 0;
    text-align: left;
  }

  #example {
    margin: 10px auto;
    max-width: 820px;
    min-width: 820px;
    padding: 0;
    position: relative;
    font-size: 13px;
    font-family: Verdana sans-serif;
  }

  #example .long {
    width: 100%;
  }

  #example .short {
    width: 50%;
  }

  #example input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0;
    outline: none;
  }

  #list {
    width: 800px;
    font-size: 13px;
    font-family: Verdana sans-serif;
  }

  #list thead tr {
    color: yellow;
    background-color: purple;
  }

  #list th:nth-child(5n+1), #list td:nth-child(5n+1) {
    width: 200px;
  }

  #list th:nth-child(5n+2), #list td:nth-child(5n+2) {
    width: 150px;
  }

  #list th:nth-child(5n+3), #list td:nth-child(5n+3) {
    width: 250px;
  }

  #list th:nth-child(5n+4), #list td:nth-child(5n+4) {
    width: 60px;
  }

  #list th:nth-child(5n), #list td:nth-child(5n) {
    width: 150px;
  }

  #list th {
    padding: 10px 5px 10px 5px;
  }

  #list tr {
    border-bottom: solid 1px black;
  }

  #list td, #list th {
    text-align: center;
    vertical-align: middle;
  }

  img.thumbnail {
    width: 48px;
    height: 48px;
    margin-top: auto;
    margin-bottom: auto;
    display: block;
    cursor: pointer;
  }
</style>
