import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//Post dialog message

//export const REQUEST_POST_DIALOG_MESSAGE = 'REQUEST_POST_DIALOG_MESSAGE'
function requestPostDialogMessage(message, receiverUserId, senderUserId) {
  return {
    type: C.REQUEST_POST_DIALOG_MESSAGE,
    message,
    receiverUserId,
    senderUserId
  }
}

//export const RECEIVE_POST_DIALOG_MESSAGE = 'RECEIVE_POST_DIALOG_MESSAGE'
export function receivePostDialogMessage(json) {
  return {
    type: C.RECEIVE_POST_DIALOG_MESSAGE,
    dialogEntry: json,
    receivedAt: Date.now()
  }
}

export function postDialogMessage(message, receiverUserId, senderUserId){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestPostDialogMessage(message, receiverUserId, senderUserId))

    return axios.post(apiUrl + '/dialog/',
      {message, receiverUserId, senderUserId}
    )
      .then(response => response.data)
      .then(json =>

        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receivePostDialogMessage(json))
      )
      .catch(response => {
        console.log(response);
      });
  }
}
