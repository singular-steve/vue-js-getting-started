<template>
  <div>
    <hr class="divider"/>
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
    beforeRouteUpdate(to, from, next) {
      console.log('#### beforeRouteUpdate ####');
      this.no = to.params.no;
      next();
    },
    watch: {
      '$route': function(to, from) {
        this.no = to.params.no;
      },
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
  table.detail {
    width: 400px;
  }
  .divider {
    height: 3px;
    margin-left: auto;
    margin-right: auto;
    background-color: #ff0066;
    color: #ff0066;
    border: 0 none;
  }
</style>
