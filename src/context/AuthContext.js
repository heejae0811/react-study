import {createContext, useState} from 'react'

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
  const [login, setLogin] = useState(false)

  const value = {
    login: login,
    setLogin: setLogin
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
