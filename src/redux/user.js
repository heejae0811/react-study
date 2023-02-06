import {createSlice} from '@reduxjs/toolkit'
import * as database from '../database/users'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: database.users,
    loginUser: null
  },
  reducers: {
    handleLogin: (state, action) => {
      state.loginUser = state.users.find(user => user.loginId === action.payload.loginId && user.password === action.payload.password)
    }
  }
})

export const {handleLogin} = userSlice.actions
export default userSlice.reducer