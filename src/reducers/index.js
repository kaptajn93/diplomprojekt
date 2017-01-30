import { combineReducers } from 'redux'
//import todos from './todos'
//import visibilityFilter from './visibilityFilter'
import api from './api'
import userReducer from                     './UserReducer'
import courseReducer from                   './CourseReducer'
import ModuleReducer from                   './moduleReducer'
import otherActionsReducer from             './OtherActionsReducer'
import exerciseAndResourceReducer from      './ExerciseAndResourceReducer'



const todoApp = combineReducers({
    //todos,              //dont know if this is used
    //visibilityFilter,    //dont know if this is used
    api, //authentication
    
    //new
    userReducer, 
    courseReducer,              
    ModuleReducer,             
    otherActionsReducer,      
    exerciseAndResourceReducer
})

export default todoApp
