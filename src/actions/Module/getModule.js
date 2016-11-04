import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//Get module

//export const REQUEST_API_MODULE = 'REQUEST_API_MODULE'
function requestApiModule(moduleId) {
  return {
    type: C.REQUEST_API_MODULE,
    moduleId
  }
}

//export const RECEIVE_API_MODULE = 'RECEIVE_API_MODULE'
export function receiveApiModule(moduleId, json) {
  return {
    type: C.RECEIVE_API_MODULE,
    moduleId,
    module: json,//json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function getModule(moduleId){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestApiModule(moduleId))

    return axios.get(apiUrl + '/module/' + moduleId)
      .then(response => response.data)
      .then(json =>

        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receiveApiModule(moduleId, json))
      )
      .catch(response => {
        console.log(response);
      });
  }
}