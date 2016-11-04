import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';


//putKpExplorerResultById

//export const PUT_API_KP_EXPLORER_RESULT = 'PUT_API_KP_EXPLORER_RESULT'
function putKpExplorerResult(exerciseId, result) {
    return {
        type: C.PUT_API_KP_EXPLORER_RESULT,
        exerciseId,
        result
    }
}

export function putKpExplorerResultById(exerciseId, result){
    return function (dispatch){
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(putKpExplorerResult(exerciseId, result))

        return axios.put(apiUrl + '/user/currentUser/kpexplorerexercise/'+ exerciseId + '/result/', result)
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