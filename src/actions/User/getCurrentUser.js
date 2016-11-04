import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//Current user

//export const REQUEST_GET_CURRENT_USER = 'REQUEST_GET_CURRENT_USER'
function requestCurrentUser() {
  return {
    type: C.REQUEST_GET_CURRENT_USER
  }
}
//export const RECEIVE_GET_CURRENT_USER = 'RECEIVE_GET_CURRENT_USER'
export function receiveCurrentUser(json) {
  return {
    type: C.RECEIVE_GET_CURRENT_USER,
    user: json,//json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
export function getCurrentUser() {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestCurrentUser())
    // Secondly invoke the remote API and return a promise
    return axios.get(apiUrl + '/user/currentUser')
      .then(response => response.data)
      .then(json =>
        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receiveCurrentUser(json))
      )
      .catch(response => {
        console.log(response);
        throw response;
      });

  }
}