import axios from 'axios'
import Constant from '../constants'

export default {
  searchContact(name) {
    return axios.get(Constant.BASE_URL + name)
  }
}
