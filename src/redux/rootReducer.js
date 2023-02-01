// root reducer
import {combineReducers} from 'redux'
import login from '../reducers/login'
import cat from '../reducers/cat'

// store에 저장되는 리듀서는 오직 1개이기 때문에 combineReducers는 여러 reducer를 사용할 때 reducer를 하나로 묶어주는 메소드이다.
// redux는 상태관리를 위한 자바크립트 라이브러리 (리액트 전용 x) 너무 많은 곳에서 사용하기 때문에 알아야 한다.
// 리액트용 상태관리를 위해 recoil 라이브러리가 나왔다.
export const rootReducer = combineReducers({
  login,
  cat
})

export default rootReducer