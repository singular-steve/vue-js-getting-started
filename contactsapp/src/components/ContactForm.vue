<template>
  <div class="modal">
    <div class="form" @keyup.esc.stop="cancelEvent">
      <h3 class="heading">:: {{headingText}}</h3>
      <div v-if="mode === 'update'" class="form-group">
        <label>No</label>
        <input type="text" name="no" class="long" disabled="disabled" v-model="contact.no"/>
      </div>
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" class="long" v-model="contact.name" ref="name" placeholder="Input your name"/>
      </div>
      <div class="form-group">
        <label>Tel</label>
        <input type="text" name="tel" class="long" v-model="contact.tel" placeholder="Input your tel.no"/>
      </div>
      <div class="form-group">
        <label>Address</label>
        <input type="text" name="address" class="long" v-model="contact.address" placeholder="Input your address"/>
      </div>
      <div class="form-group">
        <div>&nbsp;</div>
        <input type="button" class="btn btn-primary" v-bind:value="btnText" @click="submitEvent()"/>
        <input type="button" class="btn btn-primary" value="Cancel" @click="cancelEvent()"/>
      </div>
    </div>
  </div>
</template>

<script>
import constants from '../constants';
import {mapState} from 'vuex';
import _ from 'lodash';

export default {
  name: "ContactForm",
  data() {
    return {
      mode: 'add',
    }
  },
  props: [
    'no'
  ],
  computed: _.extend({
    btnText: function() {
      return this.mode !== 'update' ? 'Add' : 'Edit';
    },
    headingText: function() {
      return this.mode !== 'update' ? 'Add a new contact' : 'Edit a contact';
    }
  }, mapState(['contactlist', 'contact'])),
  mounted() {
    this.$refs.name.focus();
    const currentRoute = this.$router.currentRoute;
    if (currentRoute.fullPath.includes('/add')) {
      this.mode = 'add';
      this.$store.dispatch(constants.INITIALIZE_CONTACT_ONE);
    } else {
      this.mode = 'update';
      this.$store.dispatch(constants.FETCH_CONTACT_ONE, { no: this.no });
    }
  },
  methods: {
    submitEvent() {
      if (this.mode === 'update') {
        this.$store.dispatch(constants.UPDATE_CONTACT);
        this.$router.push({ name: 'ContactList', query: { page: this.contactlist.pageno }});
      } else {
        this.$store.dispatch(constants.ADD_CONTACT);
        this.$router.push({ name: 'ContactList', query: { page: 1 }});
      }
    },
    cancelEvent() {
      this.$router.push({ name: 'ContactList', query: { page: this.contactlist.pageno }});
    },
  }
}
</script>

<style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }
  .form {
    background-color: white;
    margin: 100px auto;
    max-width: 400px;
    min-width: 200px;
    font-size: 13px;
    font-family: Verdana sans-serif;
    padding: 10px;
  }
  .form div {
    padding: 0;
    display: block;
    margin: 10px 0 0 0;
  }
  .form label {
    text-align: left;
    margin: 0 0 3px 0;
    padding: 0;
    display: block;
    font-weight: bold;
  }
  .form input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0;
    outline: none;
  }
  .form .long {
    width: 100%;
  }
  .form .button {
    background: #2b798d;
    padding: 8px 15px 8px 15px;
    border: none;
    color: #fff;
  }
  .form .button:hover {
    background: #4691a4;
  }
  .form .heading {
    background: #33a17f;
    color: #fff;
    margin: 5px 0 30px 0;
    padding: 10px;
    min-width: 200px;
    max-width: 400px;
  }
</style>
