import * as C from '../actions/constants';


const userReducer = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    newState: Object.assign({}, state)
}, action) => {
    switch (action.type) {

        case C.REQUEST_POST_DIALOG_MESSAGE:
            console.log("UserReducer GOT REQUEST_POST_DIALOG_MESSAGE");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_POST_DIALOG_MESSAGE:
            console.log("UserReducer GOT RECEIVE_GET_CURRENT_USER");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })

        case C.REQUEST_SEND_SMS:
            console.log("UserReducer GOT REQUEST_SEND_SMS");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_SEND_SMS:
            console.log("UserReducer GOT RECEIVE_SEND_SMS");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })

        case C.REQUEST_SHARE_VIDEO:
            console.log("UserReducer GOT REQUEST_GET_USER_RESULT");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_SHARE_VIDEO:
            console.log("UserReducer GOT RECEIVE_GET_USER_RESULT");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        
            //put?? login??

            //LOGIN_REQUEST: 'LOGIN_REQUEST',
            //LOGIN_SUCCESS: 'LOGIN_SUCCESS',
            //LOGIN_FAILURE: 'LOGIN_FAILURE',

            //PUT_API_KP_EXPLORER_RESULT: 'PUT_API_KP_EXPLORER_RESULT',
            //PUT_API_QUESTION_ANSWER_RESULT: 'PUT_API_QUESTION_ANSWER_RESULT',

            //PUT_API_SORT_AND_EVAL_RESULT: 'PUT_API_SORT_AND_EVAL_RESULT',
            //PUT_API_SORT_AND_EVAL_RESULT: 'PUT_API_SORT_AND_EVAL_RESULT',


        default:
            return state
    }
}

export default userReducer
