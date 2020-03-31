<template>
  <div id="app">
    <search placeholder="input search keyword"></search>
    <contact-list></contact-list>
  </div>
</template>

<script>
import Search from "./components/Search";
import ContactList from "./components/ContactList";

export default {
  name: 'app',
  components: {ContactList, Search}
}
</script>

<style>

</style>
