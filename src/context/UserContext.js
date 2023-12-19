import React, {createContext, useContext, useReducer} from 'react'

// context API를 사용하면 한 번에 원하는 값을 받아 사용할 수 있다.
// provider를 사용하면 context의 value를 변경할 수 있다.
const initialState = {
  userData: [
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
      name: '리액트',
      loginId: 'react',
      password: '12345',
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

// reducer는 현재 상태와 업데이트를 위해 필요한 정보를 담은 action 값을 전달받아 새로운 상태를 반환하는 함수이다.
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          loginId: action.loginId,
        }
      }
    case 'LOGOUT':
      return {
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