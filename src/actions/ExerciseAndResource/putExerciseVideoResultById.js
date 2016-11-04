import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//putExerciseVideoResultById

//export const PUT_API_EXERCISE_VIDEO_RESULT = 'PUT_API_EXERCISE_VIDEO_RESULT'
function putExerciseVideoResult(exerciseId, result) {
    return {
        type: C.PUT_API_EXERCISE_VIDEO_RESULT,
        exerciseId,
        result
    }
}

export function putExerciseVideoResultById(exerciseId, result){
    return function (dispatch){
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(putExerciseVideoResult(exerciseId, result))

        return axios.put(apiUrl + '/user/currentUser/videoexercise/'+ exerciseId + '/result/', result)
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