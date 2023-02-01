import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import * as database from '../database/users'

// userList는 훅 안에 쓸 필요가 없다.(해당 위치 배열로 작성하거나 import 시키기)
const userList = database.users

export function useAuth(){
  const loginValue = useContext(AuthContext)

  const isLogin = () => {
    // window.localStorage.getItem('login')
    loginValue.setLogin(true)
    alert('로그인 되었습니다.')
  }

  const isLogout = () => {
    window.localStorage.removeItem('login')
    loginValue.setLogin(false)
    alert('로그아웃 되었습니다.')
  }

  return [userList, loginValue, isLogin, isLogout]
}