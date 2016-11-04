import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//get All module excersies

//export const REQUEST_ALL_MODULE_EXERCISES = 'REQUEST_ALL_MODULE_EXERCISES'
function requestAllModuleExercises(moduleId) {
  return {
    type: C.REQUEST_ALL_MODULE_EXERCISES,
    moduleId
  }
}

//export const RECEIVE_ALL_MODULE_EXERCISES = 'RECEIVE_ALL_MODULE_EXERCISES'
export function receiveAllModuleExercises(moduleId, json) {
  return {
    type: C.RECEIVE_ALL_MODULE_EXERCISES,
    exercises: json,//json.data.children.map(child => child.data),
    moduleId,
    receivedAt: Date.now()
  }
}

export function getModuleExercises(moduleId){
  return function (dispatch){
     //First dispatch: the app state is updated to inform
     //that the API call is starting.
    dispatch(requestAllModuleExercises(moduleId))

    return axios.get(apiUrl + '/module/' + moduleId + '/exercises/')
      .then(response => response.data)
      .then(json =>

         //Final dispatch: Here, we update the app state with the results of the API call.
         //NOTE: We can dispatch many times!
        dispatch(receiveAllModuleExercises(moduleId, json))
      )
      .catch(response => {
        console.log(response);
      });
  }
}