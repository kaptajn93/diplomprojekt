import * as C from '../actions/constants';

const userReducer = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    newState: Object.assign({}, state)
}, action) => {
    switch (action.type) {

        case C.REQUEST_API_ALL_COURSE_MODULES:
            console.log("UserReducer GOT REQUEST_API_ALL_COURSE_MODULES");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_API_ALL_COURSE_MODULES:
            console.log("UserReducer GOT RECEIVE_API_ALL_COURSE_MODULES");
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

export default userReducer