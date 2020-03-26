<template>
  <contact-form mode="update"/>
</template>

<script>
  import ContactForm from "./ContactForm";
  export default {
    name: "UpdateContact",
    components: {ContactForm},
    props: ['contact']
  }
</script>

<style scoped>

</style>
