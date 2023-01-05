import React, {createContext, useContext, useReducer} from 'react'

// context API를 사용하면 단 한 번에 원하는 값을 받아와 사용할 수 있다.
// procider를 사용하면 context의 value를 변경할 수 있다.
const initialState = {
  userData: [
    {
      userId: '정주호',
      // userId: 'meju7015',
      password: '123123123',
      phoneNumber: '010-2396-2036',
      isAdmin: true,
      accessToken: '18c1021a9b9d8e9999edf028182e3',
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
      userId: '스틱',
      // userId: 'sticker',
      password: '123123123',
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
  ],
  user: null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          userId: action.userId
        }
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

const UserStateContext = createContext(null)
const UserDispatchContext = createContext(null)

export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  )
}

export const useUserState = () => {
  const state = useContext(UserStateContext)
  if (!state) throw new Error('Cannot find UserProvider')
  return state
}

export const useUserDispatch = () => {
  const dispatch = useContext(UserDispatchContext)
  if (!dispatch) throw new Error('Cannot find UserProvider')
  return dispatch
}