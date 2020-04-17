<template>
  <div>
    <h1>Contacts</h1>
    <div class="wrapper">
      <div class="box" v-for="contact in contacts" :key="contact.no">
        <router-link v-bind:to="`/contacts/${contact.no}`">{{contact.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import contactList from "../contactList";
export default {
  name: "Contacts",
  data() {
    return {
      contacts: contactList,
    }
  }
}
</script>

<style scoped>
  .wrapper {
    background-color: #fff;
    clear: both;
    display: table;
  }
  .box {
    float: left;
    background-color: aqua;
    border-radius: 5px;
    padding: 10px;
    margin: 3px;
    text-align: center;
    font-size: 120%;
    width: 100px;
    font-weight: bold;
  }
  a:link, a:visited {
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
</style>
