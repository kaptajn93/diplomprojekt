import { combineReducers } from 'redux'

import getAllCourseModules from             './getReducers/getAllCourseModules'
import getAllCourses from                   './getReducers/getAllCourses'
import getCurrentUser from                  './getReducers/getCurrentUser'
import getExerciseResourceById from         './getReducers/getExerciseResourceById'
import getExerciseResult from               './getReducers/getExerciseResult'
import getModule from                       './getReducers/getModule'
import getModuleExcercise from              './getReducers/getModuleExcercise'
import getModuleResults from                './getReducers/getModuleResults'
import getResourceById from                 './getReducers/getResourceById'
import getUserDialogs from                  './getReducers/getUserDialogs'
import getUserResult from                   './getReducers/getUserResult'


const todoApp = combineReducers({
    getAllCourseModules,
    getAllCourses,
    getCurrentUser,
    getExerciseResourceById,
    getExerciseResult,
    getModule,
    getModuleExcercise,
    getModuleResults,
    getResourceById,
    getUserDialogs,
    getUserResult
})

export default todoApp




//getAllCourseModules
//getAllCourses
//getCurrentUser
//getExerciseResourceById
//getExerciseResult
//getModule
//getModuleExcercise
//getModuleResults
//getResourceById
//getUserDialogs
//getUserResult