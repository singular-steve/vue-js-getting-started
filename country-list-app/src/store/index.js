import Vue from 'vue'
import Vuex from 'vuex'
import Constant from "../Constant";
import _ from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentRegion: 'all',
    countries: [
      {no: 1, name: 'America', capital: 'Washington', region: 'america'},
      {no: 2, name: 'France', capital: 'Paris', region: 'europe'},
      {no: 3, name: 'England', capital: 'London', region: 'europe'},
      {no: 4, name: 'China', capital: 'Beijing', region: 'asia'},
      {no: 5, name: 'Thailand', capital: 'Bangkok', region: 'asia'},
      {no: 6, name: 'Moroco', capital: '832423', region: 'africa'},
      {no: 7, name: 'Laos', capital: '324435', region: 'africa'},
      {no: 8, name: 'Vietnam', capital: '45454', region: 'africa'},
      {no: 9, name: 'Fiji', capital: '4545', region: 'africa'},
      {no: 10, name: 'Solomon', capital: '9329383', region: 'africa'},
      {no: 11, name: 'Jamaica', capital: '237733', region: 'africa'},
      {no: 12, name: 'hehe', capital: '2826353', region: 'africa'},
      {no: 13, name: 'hoho', capital: '3838383', region: 'africa'},
      {no: 14, name: 'keke', capital: '171511', region: 'africa'},
      {no: 15, name: 'kuku', capital: '2783883', region: 'africa'},
      {no: 16, name: 'yaya', capital: '3838833', region: 'africa'}
    ]
  },
  getters: {
    countriesByRegion(state) {
      if (state.currentRegion === 'all') {
        return state.countries
      } else {
        return state.countries.filter(country => country.region === state.currentRegion)
      }
    },
    regions(state) {
      let temp = state.countries.map(country => country.region)
      temp = _.uniq(temp)
      temp.splice(0, 0, 'all')
      return temp
    },
    currentRegion(state) {
      return state.currentRegion
    }
  },
  mutations: {
    [Constant.CHANGE_REGION] : (state, payload) => {
      state.currentRegion = payload.region
    }
  }
})

export default store
