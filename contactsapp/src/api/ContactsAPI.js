import conf from '../config'
import axios from 'axios'

export default {
  fetchContacts: function(pageno, pagesize) {
    return axios.get(conf.FETCH, {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    })
  },
  fetchContactOne: function(no) {
    return axios.get(conf.FETCH_ONE.replace('${no}', no))
  },
  addContact: function(contact) {
    return axios.post(conf.ADD, contact)
  },
  updateContact: function(contact) {
    return axios.put(conf.UPDATE.replace('${no}', contact.no), contact)
  },
  deleteContact: function(no) {
    return axios.delete(conf.DELETE.replace('${no}', no))
  },
  updatePhoto: function(no, file) {
    let data = new FormData()
    data.append('photo', file)

    return axios.post(conf.UPDATE_PHOTO.replace('${no}', no), data)
  }
}
