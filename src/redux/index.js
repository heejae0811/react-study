// root reducer
import {combineReducers} from 'redux'
import cat from '../reducers/cat'

// 여러 reducer를 사용하는 경우 reducer를 하나로 묶어주는 메소드
// store에 저장되는 리듀서는 오직 1개
// redux는 상태관리를 위한 자바크립트 라이브러리, 너무 많은 곳에서 사용하기 때문에 알아야 한다.
// 리액트용 상태관리를 위해 recoil 라이브러리가 나왔다.
const rootReducer = combineReducers({
  cat
})

export default rootReducer