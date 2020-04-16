import conf from '../config'

export default {
  currentView: null,
  mode: 'add',
  contact: {no: 0, name: '', tel: '', address: '', photo: ''},
  contactlist: {
    pageno: 1, pagesize: conf.PAGE_SIZE, totalcount: 0, contacts: []
  }
}
