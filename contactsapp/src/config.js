const BASE_URL = '/api'

export default {
  PAGE_SIZE: 5,
  FETCH: BASE_URL + '/contacts',
  ADD: BASE_URL + '/contacts',
  UPDATE: BASE_URL + '/contacts/${no}',
  FETCH_ON: BASE_URL + '/contacts/${no}',
  DELETE: BASE_URL + '/contacts/${no}',
  UPDATE_PHOTO: BASE_URL + '/contacts/${no}/photo'
}
