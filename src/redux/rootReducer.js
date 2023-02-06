import user from './user'
import cat from './cat'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  user,
  cat
})

export default rootReducer