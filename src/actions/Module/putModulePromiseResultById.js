import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//putExerciseVideoResultById

//export const PUT_API_MODULE_PROMISE_RESULT = 'PUT_API_MODULE_PROMISE_RESULT'
function putModulePromiseResult(exerciseId, result) {
  return {
    type: C.PUT_API_MODULE_PROMISE_RESULT,
    exerciseId,
    result
  }
}

export function putModulePromiseResultById(exerciseId, result){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(putModulePromiseResult(exerciseId, result))

    return axios.put(apiUrl + '/user/currentUser/modulePromise/'+ exerciseId + '/result/', result)
      .then(response => response.data)
      .then(json =>

        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receiveApiUpdatedResourceId(exerciseId, json))
      )
      .catch(response => {
        console.log(response);
      });
  }
};