import constants from '../constants'
import contactAPI from '../api/ContactsAPI'
import store from './index';

export default {
  [constants.ADD_CONTACT_FORM]: (store) => {
    store.commit(constants.ADD_CONTACT_FORM);
  },
  [constants.ADD_CONTACT]: (store) => {
    contactAPI.addContact(store.state.contact)
      .then(res => {
        if (res.data.status === 'success') {
          store.dispatch(constants.CANCEL_FORM);
          store.dispatch(constants.FETCH_CONTACTS, {pageno: 1});
        } else {
          console.log('fail to add a contact : ' + res.data);
        }
      })
  },
  [constants.EDIT_CONTACT_FORM]: (store, payload) => {
    contactAPI.fetchContactOne(payload.no)
      .then(res => {
        store.commit(constants.EDIT_CONTACT_FORM, {contact: res.data});
      })
  },
  [constants.UPDATE_CONTACT]: (store) => {
    const currentPageNo = store.state.contactlist.pageno;
    contactAPI.updateContact(store.state.contact)
      .then(res => {
        if (res.data.status === 'success') {
          store.dispatch(constants.CANCEL_FORM);
          store.dispatch(constants.FETCH_CONTACTS, {pageno: currentPageNo});
        } else {
          console.log('fail to update a contact : ' + res.data)
        }
      })
  },
  [constants.EDIT_PHOTO_FORM]: (store, payload) => {
    contactAPI.fetchContactOne(payload.no)
      .then(res => {
        store.commit(constants.EDIT_PHOTO_FORM, {contact: res.data});
      })
  },
  [constants.UPDATE_PHOTO]: (store, payload) => {
    const currentPageNo = store.state.contactlist.pageno;
    contactAPI.updatePhoto(payload.no, payload.file)
      .then(res => {
        store.dispatch(constants.CANCEL_FORM);
        store.dispatch(constants.FETCH_CONTACTS, {pageno: currentPageNo});
      })
  },
  [constants.FETCH_CONTACTS]: (store, payload) => {
    let pageno;
    if (typeof payload === 'undefined' || typeof payload.pageno === 'undefined') {
      pageno = 1;
    } else {
      pageno = payload.pageno;
    }
    const pagesize = store.state.contactlist.pagesize;

    contactAPI.fetchContacts(pageno, pagesize)
      .then(res => {
        store.commit(constants.FETCH_CONTACTS, {contactlist: res.data});
      })
  },
  [constants.CANCEL_FORM]: (store) => {
    store.commit(constants.CANCEL_FORM);
  },
  [constants.DELETE_CONTACT]: (state, payload) => {
    const currentPageNo = store.state.contactlist.pageno;
    contactAPI.deleteContact(payload.no)
      .then(res => {
        store.dispatch(constants.FETCH_CONTACTS, {pageno: currentPageNo});
      })
  },
  [constants.CHANGE_MODE]: (store, payload) => {
    store.commit(constants.CHANGE_MODE, {mode: payload.mode})
  }
}
