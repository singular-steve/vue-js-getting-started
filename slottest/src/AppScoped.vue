<template>
  <div class="parent">
    <scoped-slot>
      <template slot="type1" slot-scope="p1">
        <div>{{p1.cx}} + {{p1.cy}} = {{parseInt(p1.cx) + parseInt(p1.cy)}}</div>
      </template>
      <template slot="type2" slot-scope="p2">
        <div>{{p2.cx}} plus {{p2.cy}} equlas {{parseInt(p2.cx) + parseInt(p2.cy)}}</div>
      </template>
    </scoped-slot>
  </div>
</template>

<script>
  import ScopedSlot from "./components/ScopedSlot";
  export default {
    name: "AppScoped",
    components: {ScopedSlot}
  }
</script>

<style scoped>
  .parent {
    border: dashed 2px black;
    padding: 5px;
  }
</style>
