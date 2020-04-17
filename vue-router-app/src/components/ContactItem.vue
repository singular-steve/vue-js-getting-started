<template>
  <div>
    <h1>Contact</h1>
    <div>
      <table class="detail table table-bordered">
        <tbody>
        <tr class="active">
          <td>No</td>
          <td>{{contact.no}}</td>
        </tr>
        <tr class="active">
          <td>Name</td>
          <td>{{contact.name}}</td>
        </tr>
        <tr class="active">
          <td>Tel</td>
          <td>{{contact.tel}}</td>
        </tr>
        <tr class="active">
          <td>Address</td>
          <td>{{contact.address}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import contactList from "../contactList";
  export default {
    name: "ContactItem",
    data() {
      return {
        no: 0,
        contacts: contactList,
      }
    },
    created() {
      this.no = this.$route.params.no;
    },
    computed: {
      contact() {
        const no = this.no;
        const item =  this.contacts.find(it => it.no === Number(no));
        if (item === undefined) return {};
        return item;
      }
    }
  }
</script>

<style scoped>

</style>
