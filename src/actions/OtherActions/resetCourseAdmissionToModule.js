import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//Update sort and eval exercise p1

//export const PUT_API_SORT_AND_EVAL_RESULT = 'PUT_API_SORT_AND_EVAL_RESULT'
function requestResetCourseAdmission() {
    return {
        type: C.RESET_COURSE_ADMISSION,
    }
}

export function resetCourseAdmissionToModule(moduleIndex){
    return function (dispatch){
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestResetCourseAdmission())

        return axios.put(apiUrl + '/user/currentUser/resetCourseAdmissionToModule/' + moduleIndex)
          .then(response => response.data)
          .then(json =>

              // Final dispatch: Here, we update the app state with the results of the API call.
              // NOTE: We can dispatch many times!
              dispatch(receiveApiUpdatedResourceId())
          )
          .catch(response => {
              console.log(response);
          });
    }
};
