import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'

// userList는 훅 안에 쓸 필요가 없다.(지금처럼 바깥에 작성하거나 import 시키기)
const userList = [
  {
    name: '이희재',
    loginId: 'test',
    password: '123',
    phoneNumber: '010-0000-0000',
    isAdmin: true,
    accessToken: '18c1asdf9d8e9999edf028182e3',
    abilities: [
      {
        action: 'dashboard',
        permission: 'manage'
      },
      {
        action: 'users',
        permission: 'read'
      }
    ]
  },
  {
    name: '스틱',
    loginId: 'sticker',
    password: '123123',
    phoneNumber: '010-1243-1234',
    isAdmin: false,
    accessToken: '43c1051a9b9d8e7779123328182e4',
    abilities: [
      {
        action: 'dashboard',
        permission: 'read'
      },
      {
        action: 'users',
        permission: 'read'
      }
    ]
  }
]

export function useAuth(){
  const loginValue = useContext(AuthContext)

  const isLogin = () => {
    loginValue.setLogin(true)
    alert('로그인 되었습니다.')
  }

  const isLogout = () => {
    loginValue.setLogin(false)
    alert('로그아웃 되었습니다.')
  }

  return [userList, loginValue, isLogin, isLogout]
}