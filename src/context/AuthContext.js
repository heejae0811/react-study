import {createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [login, setLogin] = useState(false)
  const [loginUser, setLoginUser] = useState([])

  const value = {
    login: login,
    setLogin: setLogin,
    loginUser: loginUser,
    setLoginUser: setLoginUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
