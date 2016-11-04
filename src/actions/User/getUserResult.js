import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//Current user result

//export const REQUEST_GET_USER_RESULT = 'REQUEST_GET_USER_RESULT'
export function requestUserResult(userId) {
    return {
        type: C.REQUEST_GET_USER_RESULT
    }
}

//export const RECEIVE_GET_USER_RESULT = 'RECEIVE_GET_USER_RESULT'

export function receiveUserResult(userId, json) {
    return {
        type: C.RECEIVE_GET_USER_RESULT,
        results: json,
        userId,
        receivedAt: Date.now()
    }
}
export function getUserResult(userId) {
    return function (dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestUserResult());
        var url = apiUrl + '/user/currentUser/results';
        if (userId !== undefined)
            url = apiUrl + '/user/' + userId + '/results';

        // Secondly invoke the remote API and return a promise
        return axios.get(url)
          .then(response => response.data)
          .then(json =>
              // Final dispatch: Here, we update the app state with the results of the API call.
              // NOTE: We can dispatch many times!
              dispatch(receiveUserResult(userId, json))
          )
          .catch(response => {
              console.log(response);
          });
    }
}
