import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import App from './App'
import './scss/common.scss'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(rootReducer)

root.render(
  <Provider store={store}>
    <AuthProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthProvider>
  </Provider>
)