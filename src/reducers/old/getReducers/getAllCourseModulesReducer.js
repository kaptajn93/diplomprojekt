import {TEST_GET, REQUEST_POSTS, RECEIVE_POSTS} from '../actions/get/getAllCourseModules .js'


const getAllCourseModules = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case TEST_GET:
            console.log("GET-REDUCER GOT TEST_GET ACTION");
      
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            console.log("GET-REDUCER GOT REQUEST_POSTS ACTION");

            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            console.log("GET-REDUCER GOT RECEIVE_POSTS ACTION");

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

export default getAllCourseModules
