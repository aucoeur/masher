import { combineReducers } from 'redux';
import counterSlice from './counterReducer'

export default combineReducers({
  counter: counterSlice,
})
