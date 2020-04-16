import constants from '../constants'

export default {
  [constants.ADD_CONTACT_FORM]: (state) => {
    state.contact = {no: '', name: '', tel: '', address: '', photo: ''}
    state.mode = 'add'
    state.currentView = 'contactForm'
  },
  [constants.CANCEL_FORM]: (state) => {
    state.currentView = null
  },
  [constants.EDIT_CONTACT_FORM]: (state, payload) => {
    state.contact = payload.contact;
    state.mode = 'update';
    state.currentView = 'contactForm';
  },
  [constants.EDIT_PHOTO_FORM]: (state, payload) => {
    state.contact = payload.contact
    state.mode = 'updatePhoto'
  },
  [constants.FETCH_CONTACTS]: (state, payload) => {
    state.contactlist = payload.contactlist
  }
}
