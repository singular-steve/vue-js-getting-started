<template>
  <p>
    Name: <input type="text" v-model.trim="name" placeholder="Enter keyword!" @keyup.enter="keyupEvent"/>
  </p>
</template>

<script>
  import Constant from '../constants'

  export default {
    name: "Search",
    data: function() {
      return { name: '' }
    },
    methods: {
      keyupEvent: function(e) {
        const val = e.target.value
        if (val.length >= 2) {
          this.$store.dispatch(Constant.SEARCH_CONTACT, {name: val})
        } else {
          this.$store.dispatch(Constant.SEARCH_CONTACT, {name: ''})
        }
      }
    }
  }
</script>

<style scoped>

</style>
