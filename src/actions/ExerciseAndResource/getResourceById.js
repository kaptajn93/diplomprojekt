import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//getResourceById

//export const REQUEST_API_RESOUCE_BY_ID = 'REQUEST_API_RESOUCE_BY_ID'
function requestApiResource(resourceId) {
  return {
    type: C.REQUEST_API_RESOUCE_BY_ID,
    resourceId
  }
}

//export const RECEIVE_API_RESOUCE_BY_ID = 'RECEIVE_API_RESOUCE_BY_ID'
export function receiveApiResource(resourceId, json) {
  return {
    type: C.RECEIVE_API_RESOUCE_BY_ID,
    resourceId,
    resource: json,//json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function getResourceById(resourceId){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestApiResource(resourceId))

    return axios.get(apiUrl + '/Resource/' + resourceId)
      .then(response => response.data)
      .then(json =>

        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receiveApiResource(resourceId, json))
      )
      .catch(response => {
        console.log(response);
      });
  }
}