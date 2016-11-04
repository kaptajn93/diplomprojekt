import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;

import * as C from '../constants';

//Put exercise resource

//export const PUT_API_EXERCISE_RESOUCE = 'PUT_API_EXERCISE_RESOUCE'
function putApiExerciseResource(resourceId, moduleId, newContent) {
  return {
    type: C.PUT_API_EXERCISE_RESOUCE,
    resourceId,
    moduleId,
    newContent
  }
}

export function putExerciseResourceById(resourceId, moduleId, updatedElements){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(putApiExerciseResource(resourceId))

    return axios.put(apiUrl + '/ExerciseResource/', {
      resourceId: resourceId,
      moduleId: moduleId,
      updatedElements: updatedElements})
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