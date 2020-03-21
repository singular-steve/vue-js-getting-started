<template>
  <div id="app">
    <named-slot>
      <h1 slot="header">
        헤더 영역
      </h1>
      <div slot="sidebar">
        <ul class="menu">
          <li v-for="sidebar in sidebars">
            <a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
          </li>
        </ul>
      </div>
      <div slot="content">
        <h2>컨텐츠 영역</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <p slot="footer">Footer text</p>
    </named-slot>
  </div>
</template>

<script>
  import NamedSlot from "./components/NamedSlot";
  export default {
    name: "AppNamed",
    components: {NamedSlot},
    data: function() {
      return {
        sidebars: [
          {menu: 'Home', link: '#'},
          {menu: 'About', link: '#'},
          {menu: 'Contacts', link: '#'},
          {menu: 'Vue.js', link: '#'},
        ]
      }
    }
  }
</script>

<style scoped>
  ul.menu {
    position: relative;
    padding: 5px;
    list-style: none;
    font-style: italic;
  }
  ul.menu a {
    text-decoration: none;
  }
</style>
