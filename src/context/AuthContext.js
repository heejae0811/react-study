import {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [login, setLogin] = useState(false)
  const [loginUser, setLoginUser] = useState([])

  // key, value가 같으면 하나로 써도 된다.(login: login X)
  const value = {
    login,
    setLogin,
    loginUser,
    setLoginUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
