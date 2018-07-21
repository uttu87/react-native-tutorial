import {combineReducers} from 'redux'

 import {taskReducers} from './taskReducers'

 const allReducers = combineReducers(
     taskReducers,
     // You can add more reducer here
 )

 export default allReducers