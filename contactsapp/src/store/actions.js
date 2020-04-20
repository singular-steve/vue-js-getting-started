import constants from '../constants'
import contactAPI from '../api/ContactsAPI'
import store from './index';

export default {
  [constants.FETCH_CONTACTS]: (store, payload) => {
    let pageno;
    if (typeof payload === 'undefined' || typeof payload.pageno === 'undefined') {
      pageno = 1;
    } else {
      pageno = payload.pageno;
    }
    const pagesize = store.state.contactlist.pagesize;
    store.dispatch(constants.CHANGE_IS_LOADING, { isLoading: true });
    contactAPI.fetchContacts(pageno, pagesize)
      .then(res => {
        store.dispatch(constants.CHANGE_IS_LOADING, { isLoading: false });
        store.commit(constants.FETCH_CONTACTS, {contactlist: res.data});
      }).catch(() => {
      store.dispatch(constants.CHANGE_IS_LOADING, { isLoading: false });
    })
  },
  [constants.ADD_CONTACT]: (store) => {
    contactAPI.addContact(store.state.contact)
      .then(res => {
        if (res.data.status === 'success') {
          store.dispatch(constants.FETCH_CONTACTS, { pageno: 1} );
        } else {
          console.log('fail to add contact : ' + res.data);
        }
      })
  },
  [constants.UPDATE_CONTACT]: (store) => {
    const currentPageNo = store.state.contactlist.pageno;
    contactAPI.updateContact(store.state.contact)
      .then(res => {
        if (res.data.status === 'success') {
          store.dispatch(constants.FETCH_CONTACTS, {pageno: currentPageNo});
        } else {
          console.log('fail to update a contact : ' + res.data)
        }
      })
  },
  [constants.UPDATE_PHOTO]: (store, payload) => {
    const currentPageNo = store.state.contactlist.pageno;
    contactAPI.updatePhoto(payload.no, payload.file)
      .then(res => {
        store.dispatch(constants.FETCH_CONTACTS, {pageno: currentPageNo});
      })
  },
  [constants.DELETE_CONTACT]: (state, payload) => {
    const currentPageNo = store.state.contactlist.pageno;
    contactAPI.deleteContact(payload.no)
      .then(res => {
        store.dispatch(constants.FETCH_CONTACTS, {pageno: currentPageNo});
      })
  },
  [constants.FETCH_CONTACT_ONE]: (store, payload) => {
    contactAPI.fetchContactOne(payload.no)
      .then(res => {
        store.commit(constants.FETCH_CONTACT_ONE, { contact: res.data })
      })
  },
  [constants.INITIALIZE_CONTACT_ONE]: (store) => {
    store.commit(constants.INITIALIZE_CONTACT_ONE);
  },
  [constants.CHANGE_IS_LOADING]: (store, payload) => {
    store.commit(constants.CHANGE_IS_LOADING, payload);
  },
}
