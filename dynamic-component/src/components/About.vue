<template>
  <div>
    <h1>About</h1>
    <h3>{{ new Date().toTimeString() }}</h3>
    <h4>조직도</h4>
    <tree v-bind:subs="orgcharts"></tree>
  </div>
</template>

<script>
  import Tree from "./Tree";

  export default {
    name: "about",
    components: {Tree},
    data: function() {
      return {
        orgcharts: [
          {
            name: 'Comi Company', type: 'company',
            subs: [
              { name: '1 Division', type: 'division',
                subs: [
                  { name: '1-1 Team', type: 'team'},
                  { name: '1-2 Team', type: 'team'},
                ]
              },
              { name: '2 Division', type: 'division',
                subs: [
                  { name: '2-1 Team', type: 'team'},
                  { name: '2-2 Team', type: 'team'},
                ]
              },
            ],
          },
        ]
      }
    }
  }
</script>

<style scoped>
  li.company {
    color: blue;
  }
  li.division {
    color: steelblue;
  }
  li.team {
    color: tomato;
  }
</style>
