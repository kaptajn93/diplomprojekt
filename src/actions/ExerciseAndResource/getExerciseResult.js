import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;

import * as C from '../constants';

//Get sort and eval result

//export const REQUEST_EXERCISE_RESULT = 'REQUEST_EXERCISEL_RESULT'
function requestExerciseResult(exerciseId, userId) {
    return {
        type: C.REQUEST_EXERCISE_RESULT,
        exerciseId,
        userId
    }
}

//export const RECEIVE_EXERCISE_RESULT = 'RECEIVE_EXERCISE_RESULT'
export function receiveExerciseResult(exerciseId, json, userId) {
    return {
        type: C.RECEIVE_EXERCISE_RESULT,
        result: json,//json.data.children.map(child => child.data),
        exerciseId,
        userId,
        receivedAt: Date.now()
    }
}

export function getExerciseResult(exerciseId, userId){
    return function (dispatch){
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestExerciseResult(exerciseId, userId))
        var url = apiUrl + '/user/currentUser/exercise/' + exerciseId + '/result/';
        if (userId !== undefined)
            url = apiUrl + '/user/'+ userId +'/exercise/' + exerciseId + '/result/';

        return axios.get(url)
          .then(response => response.data)
          .then(json =>

              // Final dispatch: Here, we update the app state with the results of the API call.
              // NOTE: We can dispatch many times!
              dispatch(receiveExerciseResult(exerciseId, json))
          )
          .catch(response => {
              console.log(response);
          });
    }
}
