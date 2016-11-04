import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//getModuleResults

//export const REQUEST_GET_MODULE_RESULT = 'REQUEST_GET_MODULE_RESULT'
function requestModuleResult(moduleId) {
    return {
        type: C.REQUEST_GET_MODULE_RESULT
    }
}

//export const RECEIVE_GET_MODULE_RESULT = 'RECEIVE_GET_MODULE_RESULT'

export function receiveModuleResult(moduleId, json) {
    return {
        type: C.RECEIVE_GET_MODULE_RESULT,
        results: json,
        moduleId,
        receivedAt: Date.now()
    }
}
export function getModuleResults(moduleId) {

    return function (dispatch) {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestModuleResult());

        var url = apiUrl + '/user/currentUser/module/' + moduleId + '/results';
        // Secondly invoke the remote API and return a promise
        return axios.get(url)
          .then(response => response.data)
          .then(json =>
              // Final dispatch: Here, we update the app state with the results of the API call.
              // NOTE: We can dispatch many times!
              dispatch(receiveModuleResult(moduleId, json))
          )
          .catch(response => {
              console.log(response);
          });
    }
}