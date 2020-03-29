<template>
  <div id="example">
    <table id="list">
      <thead>
        <tr>
          <th>No</th><th>Country</th><th>Capital</th><th>Region</th>
        </tr>
      </thead>
      <tbody id="contacts">
        <tr v-for="country in countries">
          <td>{{country.no}}</td>
          <td>{{country.name}}</td>
          <td>{{country.capital}}</td>
          <td>{{country.region}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "CountryList",
    computed: mapGetters({
      countries: 'countriesByRegion'
    })
  }
</script>

<style scoped>
  #list {
    width: 520px;
    border: 1px solid black;
    border-collapse: collapse;
  }
  #list td, #list th {
    border: 1px solid black;
    text-align: center;
  }
  #list th:nth-child(4n+1), #list td:nth-child(4n+1) { width: 100px; }
  #list th:nth-child(4n+2), #list td:nth-child(4n+2) { width: 150px; }
  #list th:nth-child(4n+3), #list td:nth-child(4n+3) { width: 150px; }
  #list th:nth-child(4n), #list td:nth-child(4n) { width: 120px; }
  #list > thead > tr { color: yellow; background-color: purple }
</style>
