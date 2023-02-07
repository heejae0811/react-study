import {createSlice} from '@reduxjs/toolkit'
import * as database from '../database/users'

// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: database.users,
    loginUser: null
  },
  reducers: {
    handleLogin: (state, action) => {
      state.loginUser = state.users.find(user => user.loginId === action.payload.loginId && user.password === action.payload.password)

      state.users = [
        ...state.users.filter(user => user.loginId !== state.loginUser.loginId),
        state.loginUser
      ]
    }
  }
})

export const {handleLogin} = userSlice.actions
export default userSlice.reducer