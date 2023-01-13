import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

export function AuthProvider({children}) {
  const [user, setUser] = useState()
  const [login, setLogin] = useState(false)

  const value = {
    user: user,
    setUser: setUser,
    login: login,
    setLogin: setLogin
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}