import axios from 'axios'
import api from '../../apiUrlHelper'
var apiUrl = api.url;

import * as C from '../constants';

// ---get all courses

//export const REQUEST_API_ALL_COURSES = 'REQUEST_API_ALL_COURSES'
function requestApiAllCourses() {
  return {
    type: C.REQUEST_API_ALL_COURSES
  }
}

//export const RECEIVE_API_ALL_COURSES = 'RECEIVE_API_ALL_COURSES'

export function receiveApiAllCourses(json) {
  return {
    type: C.RECEIVE_API_ALL_COURSES,
    courses: json,//json.data.children.map(child => child.data),
    receivedAt: Date.now()
  } 
}

export function getAllCourses(){
  return function (dispatch){
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestApiAllCourses())

    return axios.get(apiUrl + '/course')
      .then(response => response.data)
      .then(json =>

        // Final dispatch: Here, we update the app state with the results of the API call.
        // NOTE: We can dispatch many times!
        dispatch(receiveApiAllCourses(json))
      )
      .catch(response => {
        console.log(response);
      });
  }
}