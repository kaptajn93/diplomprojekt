import * as C from '../../actions/constants';


const moduleReducer = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
    newState: Object.assign({}, state)
}, action) => {
    switch (action.type) {

        case C.REQUEST_API_MODULE:
            console.log("ModuleReducer GOT REQUEST_API_MODULE");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_API_MODULE:
            console.log("ModuleReducer GOT RECEIVE_API_MODULE");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })

        case C.REQUEST_ALL_MODULE_EXERCISES:
            console.log("ModuleReducer GOT QUEST_ALL_MODULE_EXERCISES");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case C.RECEIVE_ALL_MODULE_EXERCISES:
            console.log("ModuleReducer GOT RECEIVE_ALL_MODULE_EXERCISES");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })

        case C.REQUEST_GET_MODULE_RESULT:
            console.log("ModuleReducer GOT EST_GET_MODULE_RESULT");
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })

        case C.RECEIVE_GET_MODULE_RESULT:
            console.log("ModuleReducer GOT RRECEIVE_GET_MODULE_RESULT");
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
            //put??

            //PUT_API_MODULE_DESCRIPTION: 'PUT_API_MODULE_DESCRIPTION',
            //PUT_API_MODULE_PROMISE_RESULT: 'PUT_API_MODULE_PROMISE_RESULT',

        default:
            return state
    }
}

export default moduleReducer
