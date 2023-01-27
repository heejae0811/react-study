import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import App from './App'
import './scss/common.scss'

// createStore는 스토어를 만들어주는 함수이다, 리액트 프로젝트에서는 단 하나의 스토어를 만든다.
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/index'

// 스토어 만들기
const store = createStore(rootReducer)

// 스토어 안에 들어있는 상태가 바뀔 때 마다 함수 호출
const listener = () => {
  const state = store.getState()
  // console.log(state)
}
const unsubscribe = store.subscribe(listener)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
)