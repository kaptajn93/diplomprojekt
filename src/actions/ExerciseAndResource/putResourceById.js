import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//Put resource

//export const PUT_API_RESOUCE = 'PUT_API_RESOUCE'
function putApiResource(resourceId, moduleId, newContent) {
  return {
    type: C.PUT_API_RESOUCE,
    resourceId,
    moduleId,
    newContent
  }
}

//export const RECEIVE_API_UPDATED_RESOUCE_ID = 'RECEIVE_API_UPDATED_RESOUCE_ID'
export function receiveApiUpdatedResourceId(resourceId, json) {
  return {
    type: C.RECEIVE_API_UPDATED_RESOUCE_ID,
    response:json,
    receivedAt: Date.now()
  }
}

export function putResourceById(resourceId, moduleId, newContent){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(putApiResource(resourceId))

    return axios.put(apiUrl + '/Resource/', {
      resourceId: resourceId,
      moduleId: moduleId,
      updatedContent: newContent})
      .then(response => response.data)
      .then(json =>

        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receiveApiUpdatedResourceId(resourceId, json))
      )
      .catch(response => {
        console.log(response);
      });
  }
}