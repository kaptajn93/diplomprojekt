import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';


//export const REQUEST_GET_CURRENT_USER = 'REQUEST_GET_CURRENT_USER'


//User dialogs

//export const REQUEST_USER_DIALOGS = 'REQUEST_USER_DIALOGS'
export function requestUserDialogs() {
  return {
    type: C.REQUEST_USER_DIALOGS
  }
}

//export const RECEIVE_USER_DIALOGS = 'RECEIVE_USER_DIALOGS'
export function receiveUserDialogs(json) {
  return {
    type: C.RECEIVE_USER_DIALOGS,
    dialogs: json,
    receivedAt: Date.now()
  }
}

export function getUserDialogs(){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestUserDialogs())

    return axios.get(apiUrl + '/user/currentUser/dialogs/')
      .then(response => response.data)
      .then(json =>

        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receiveUserDialogs(json))
      )
      .catch(response => {
        console.log(response);
      });
  }
}