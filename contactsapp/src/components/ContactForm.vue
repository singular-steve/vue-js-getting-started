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
  import eventBus from "../eventBus";

  export default {
    name: "ContactForm",
    props: {
      mode: {
        type: String,
        default: 'add'
      },
      contact: {
        type: Object,
        default: function() {
          return {
            no: '',
            name: '',
            tel: '',
            address: '',
            photo: ''
          }
        }
      }
    },
    mounted() {
      this.$refs.name.focus()
    },
    computed: {
      btnText() {
        if (this.mode !== 'update') {
          return 'Add'
        } else {
          return 'Edit'
        }
      },
      headingText() {
        if (this.mode !== 'update') {
          return 'Add a new contact'
        } else {
          return 'Edit a contact'
        }
      }
    },
    methods: {
      submitEvent() {
        if (this.mode === 'update') {
          eventBus.$emit('updateSubmit', this.contact)
        } else {
          eventBus.$emit('addSubmit', this.contact)
        }
      },
      cancelEvent() {
        eventBus.$emit('cancel')
      }
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
