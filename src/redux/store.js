import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import rootReducer from './rootReducer'
import {configureStore} from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  storage
}

const reducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export {store}