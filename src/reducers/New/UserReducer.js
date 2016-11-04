import * as C from '../../actions/constants';


const userReducer = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
   
}, action) => {
    switch (action.type) {

        case C.REQUEST_GET_CURRENT_USER:
            console.log("UserReducer GOT REQUEST_GET_CURRENT_USER");
            return  Object.assign({}, state,{
                isFetching: true,
                didInvalidate: false
    })

        case C.RECEIVE_GET_CURRENT_USER:
            console.log("UserReducer GOT RECEIVE_GET_CURRENT_USER");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })

        case C.REQUEST_USER_DIALOGS:
            console.log("UserReducer GOT REQUEST_USER_DIALOGS");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_USER_DIALOGS:
            console.log("UserReducer GOT RECEIVE_USER_DIALOGS");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })

        case C.REQUEST_GET_USER_RESULT:
            console.log("UserReducer GOT REQUEST_GET_USER_RESULT");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_GET_USER_RESULT:
            console.log("UserReducer GOT RECEIVE_GET_USER_RESULT");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        case C.REQUEST_POSTS:
            console.log("GET-REDUCER GOT REQUEST_POSTS ACTION");

            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case C.RECEIVE_POSTS:
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

export default userReducer
