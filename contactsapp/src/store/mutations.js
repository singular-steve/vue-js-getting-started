import constants from '../constants'

export default {
  [constants.FETCH_CONTACTS]: (state, payload) => {
    state.contactlist = payload.contactlist;
  },
  [constants.FETCH_CONTACT_ONE]: (state, payload) => {
    state.contact = payload.contact;
  },
  [constants.INITIALIZE_CONTACT_ONE]: (state) => {
    state.contact = { no: '', name: '', tel: '', address: '', photo: '' };
  },
  [constants.CHANGE_IS_LOADING]: (state, payload) => {
    state.isLoading = payload.isLoading;
  },
}
