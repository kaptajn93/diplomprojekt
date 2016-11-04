import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import api from './api'
import userReducer from                     './New/UserReducer'
import courseReducer from                   './New/CourseReducer'
import ModuleReducer from                   './New/moduleReducer'
import otherActionsReducer from             './New/OtherActionsReducer'
import exerciseAndResourceReducer from      './New/ExerciseAndResourceReducer'



const todoApp = combineReducers({
    todos,              //dont know if this is used
    visibilityFilter,    //dont know if this is used
    api, //authentication
    
    //new
    userReducer, 
    courseReducer,              
    ModuleReducer,             
    otherActionsReducer,      
    exerciseAndResourceReducer
})

export default todoApp
