import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import App from './App'
import './scss/common.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </AuthProvider>
)