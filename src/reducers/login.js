import * as database from '../database/users'

// 액션 타입 정의, 액션은 대문자로 작성한다.
export const HANDLECAT = 'HANDLECAT'

// 액션 생성 함수 정의
export const handleCat = (paramsId) => ({type: HANDLECAT, paramsId})

// 리덕스에서 관리할 상태 정의
export const initialState = {
  userList: database.users,
  loginUser: null
}

// 리듀서 만들기
const login = (state = initialState, action) => {
  switch (action.type) {
    case HANDLECAT:
      state.selectedCat = state.userList.find(cat => cat.id === action.paramsId)
      return {
        ...state
      }
    default:
      return state
  }
}

export default login