import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;
import * as C from '../constants';

//GEt all course modules

function requestApiAllCourseModules(courseId) {
  return {
    type: C.REQUEST_API_ALL_COURSE_MODULES,
    courseId
  }
}

export function receiveApiAllCourseModules(courseId, json) {
  return {
    type: C.RECEIVE_API_ALL_COURSE_MODULES,
    courseId,
    modules: json,//json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function getAllCourseModules(courseId){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestApiAllCourseModules(courseId))

    return axios.get(apiUrl + '/course/' + courseId + '/modules')
      .then(response => response.data)
      .then(json =>
        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receiveApiAllCourseModules(courseId, json))
      )
      .catch(response => {
        console.log(response);
      });
  }
}