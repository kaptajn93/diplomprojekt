import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//putQuestionAnswerResultById

//export const PUT_API_QUESTION_ANSWER_RESULT = 'PUT_API_QUESTION_ANSWER_RESULT'
function putQuestionAnswerResult(exerciseId, result) {
    return {
        type: C.PUT_API_EXERCISE_GOAL_RESULT,
        exerciseId,
        result
    }
}

export function putQuestionAnswerResultById(exerciseId, result){
    return function (dispatch){
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(putQuestionAnswerResult(exerciseId, result))

        return axios.put(apiUrl + '/user/currentUser/questionAnswerExercise/'+ exerciseId + '/result/', result)
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