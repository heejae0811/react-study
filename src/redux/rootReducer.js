import {combineReducers} from 'redux'
import user from './user'
import cat from './cat'

const rootReducer = combineReducers({
  user,
  cat
})

export default rootReducer