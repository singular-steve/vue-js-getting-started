<template>
  <div id="app">
    <RegionButton></RegionButton>
    <CountryList></CountryList>
  </div>
</template>

<script>
import RegionButton from "./components/RegionButton";
import CountryList from "./components/CountryList";

export default {
  name: 'app',
  components: {RegionButton, CountryList},
}
</script>

<style>

</style>
