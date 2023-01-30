import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import App from './App'
import './scss/common.scss'

// createStore는 스토어를 만들어주는 함수이다. 리액트 프로젝트에서는 단 하나의 스토어를 만든다.
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from './reducers/cat'
import {rootReducer} from './redux/index'

const root = ReactDOM.createRoot(document.getElementById('root'))

// 스토어 만들기
const store = createStore(rootReducer)
const persistor = persistStore(store)

root.render(
  <Provider store={store}>
    {/*<PersistGate loading={null} persistor={persistor}>*/}
      <AuthProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AuthProvider>
    {/*</PersistGate>*/}
  </Provider>
)