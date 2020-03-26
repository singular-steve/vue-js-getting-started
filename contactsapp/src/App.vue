<template>
  <div id="container">
    <div class="page-header">
      <h1 class="text-center">Contacts</h1>
      <p>Dynamic Component + EventBus + Axios</p>
    </div>
    <component v-bind:is="currentView" v-bind:contact="contact"></component>
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
  import ContactList from "./components/ContactList";
  import AddContact from "./components/AddContact";
  import UpdateContact from "./components/UpdateContact";
  import UpdatePhoto from "./components/UpdatePhoto";

  import Paginate from 'vuejs-paginate'
  import config from './config'
  import eventBus from "./eventBus";

  export default {
    name: 'App',
    components: {
      ContactList,
      AddContact,
      UpdateContact,
      UpdatePhoto,
      Paginate
    },
    data: function() {
      return {
        currentView: null,
        contact: {
          no: 0,
          name: '',
          tel: '',
          address: '',
          photo: ''
        },
        contactlist: {
          pageno: 1,
          pagesize: config.PAGE_SIZE,
          totalcount: 0,
          contacts: []
        }
      }
    },
    mounted() {
      this.fetchContacts()
      eventBus.$on('cancel', () => {
        this.currentView = null
      })
      eventBus.$on('addSubmit', (contact) => {
        this.currentView = null
        this.addContact(contact)
      })
      eventBus.$on('updateSubmit', (contact) => {
        this.currentView = null
        this.updateContact(contact)
      })
      eventBus.$on('addContactForm', () => {
        this.currentView = 'addContact'
      })
      eventBus.$on('editContactForm', (no) => {
        this.fetchContactOne(no)
        this.currentView = 'updateContact'
      })
      eventBus.$on('deleteContact', (no) => {
        this.deleteContactOne(no)
      })
      eventBus.$on('editPhoto', (no) => {
        this.fetchContactOne(no)
        this.currentView = 'updatePhoto'
      })
      eventBus.$on('updatePhoto', (no, file) => {
        if (typeof file !== 'undefined') {
          this.updatePhoto(no, file)
        }
        this.currentView = null
      })
    },
    computed: {
      totalpage: function() {
        return Math.floor((this.contactlist.totalcount - 1) / this.contactlist.pagesize) + 1
      }
    },
    methods: {
      pageChanged: function(page) {
        this.contactlist.pageno = page
        this.fetchContacts();
      },
      fetchContacts: function() {
        this.$axios.get(config.FETCH, {
          params: {pageno: 1, pagesize: 5}
        })
          .then(response => {
            console.log(response)
            this.contactlist = response.data
          })
          .catch(err => {
            console.log('ERROR!!! :', err)
            this.contactlist = []
          })
      },
      addContact: function(contact) {
        this.$axios.post(config.ADD, contact)
          .then(response => {
            console.log(response)
            this.contactlist.pageno = 1
            this.fetchContacts()
          })
          .catch(err => {
            console.log('ERROR!!! :', err)
          })
      },
      updateContact: function(contact) {
        this.$axios.put(config.UPDATE.replace('${no}', contact.no), contact)
          .then(response => {
            console.log(response)
            this.fetchContacts()
          })
          .catch(err => {
            console.log('ERROE!!! :', err)
          })
      },
      fetchContactOne: function(no) {
        this.$axios.get(config.FETCH.replace('${no}', no))
          .then(response => {
            console.log(response)
            this.contact = response.data
          })
      },
      deleteContactOne: function(no) {
        this.$axios.delete(config.DELETE.replace('${no}', no))
          .then(response => {
            console.log(response)
            this.fetchContacts()
          })
          .catch(err => {
            console.log('ERROE!!! :', err)
          })
      },
      updatePhoto: function(no, file) {
        let data = new FormData()
        data.append('photo', file)

        this.$axios.post(config.UPDATE_PHOTO.replace('${no}', no), data)
          .then(response => {
            this.fetchContacts()
          })
          .catch(err => {
            console.log('updataPhoto failed : ', err)
          })
      }
    },
    watch: {
      ['contactlist.pageno'] : function() {
        this.$refs.pagebuttons.selected = this.contactlist.pageno - 1
      }
    }
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
