import * as C from '../actions/constants';

const userReducer = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    newState: Object.assign({}, state)
}, action) => {
    switch (action.type) {

        case C.REQUEST_API_EXERCISE_RESOUCE_BY_ID:
            console.log("UserReducer GOT REQUEST_API_EXERCISE_RESOUCE_BY_ID");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_API_EXERCISE_RESOUCE_BY_ID:
            console.log("UserReducer GOT RECEIVE_API_EXERCISE_RESOUCE_BY_ID");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })

        case C.REQUEST_EXERCISE_RESULT:
            console.log("UserReducer GOT REQUEST_EXERCISE_RESULT");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_EXERCISE_RESULT:
            console.log("UserReducer GOT RECEIVE_EXERCISE_RESULT");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })

        case C.REQUEST_API_RESOUCE_BY_ID:
            console.log("UserReducer GOT REQUEST_GET_USER_RESULT");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_API_RESOUCE_BY_ID:
            console.log("UserReducer GOT RECEIVE_GET_USER_RESULT");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
            //put??
            
            //PUT_API_EXERCISE_GOAL_RESULT: 'PUT_API_EXERCISE_GOAL_RESULT',
            //PUT_API_EXERCISE_RESOUCE: 'PUT_API_EXERCISE_RESOUCE',
            //PUT_API_EXERCISE_VIDEO_RESULT: 'PUT_API_EXERCISE_VIDEO_RESULT',

            //PUT_API_RESOUCE: 'PUT_API_RESOUCE',
            //RECEIVE_API_UPDATED_RESOUCE_ID: 'RECEIVE_API_UPDATED_RESOUCE_ID',
        default:
            return state
    }
}

export default userReducer
