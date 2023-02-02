import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter} from 'react-router-dom'
import Router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'))
const persistor = persistStore(store)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router/>
      </PersistGate>
    </Provider>
  </BrowserRouter>
)