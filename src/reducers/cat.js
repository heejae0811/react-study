import * as database from '../database/cats'

// 액션 타입 정의, 액션은 대문자로 작성한다.
export const HANDLECAT = 'HANDLECAT'

// 액션 생성 함수 정의
export const handleCat = (paramsId) => ({type: HANDLECAT, paramsId})

// 리덕스에서 관리할 상태 정의
export const initialState = {
  catList: database.cats,
  selectedCat: null
}

// 리듀서 만들기
// action = 객체, payload = 변화하는 값, reducer = 변화시키는 함수?
const cat = (state = initialState, action) => {
  switch (action.type) {
    case HANDLECAT:
      state.selectedCat = state.catList[action.paramsId]
      return {
        ...state
      }
    default:
      return state
  }
}

export default cat