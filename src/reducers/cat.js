import * as database from '../database/cats'

// 액션 타입 정의, 액션은 대문자로 작성한다.
export const HANDLECAT = 'HANDLECAT'
export const HANDLEFOODCOUNT = 'HANDLEFOODCOUNT'
export const HANDLEWEIGHT1 = 'HANDLEWEIGHT1'
export const HANDLEWEIGHT2 = 'HANDLEWEIGHT2'
export const HANDLEWEIGHT3 = 'HANDLEWEIGHT3'
export const HANDLELOSEWEIGHT = 'HANDLELOSEWEIGHT'
export const HANDLEAGE = 'HANDLEAGE'
export const HANDLESTATE = 'HANDLESTATE'

// 액션 생성 함수 정의
export const handleCat = (paramsId) => ({type: HANDLECAT, paramsId})
export const handleFoodCount = () => ({type: HANDLEFOODCOUNT})
export const handleWeight1 = () => ({type: HANDLEWEIGHT1})
export const handleWeight2 = () => ({type: HANDLEWEIGHT2})
export const handleWeight3 = () => ({type: HANDLEWEIGHT3})
export const handleLoseWight = () => ({type: HANDLELOSEWEIGHT})
export const handleAge = () => ({type: HANDLEAGE})
export const handleState = (state) => ({type: HANDLESTATE, state})

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
      state.selectedCat = state.catList.find(cat => cat.id === action.paramsId)
      return {
        ...state
      }
    case HANDLEFOODCOUNT:
      state.selectedCat.foodCount = state.selectedCat.foodCount + 1
      return {
        ...state
      }
    case HANDLEWEIGHT1:
      state.selectedCat.weight = state.selectedCat.weight + 3
      return {
        ...state
      }
    case HANDLEWEIGHT2:
      state.selectedCat.weight = state.selectedCat.weight + 1
      return {
        ...state
      }
    case HANDLEWEIGHT3:
      state.selectedCat.weight = state.selectedCat.weight + 0.1
      return {
        ...state
      }
    case HANDLELOSEWEIGHT:
      state.selectedCat.weight = state.selectedCat.weight - 2
      return {
        ...state
      }
    case HANDLEAGE:
      state.selectedCat.age = state.selectedCat.age + 1
      return {
        ...state
      }
    case HANDLESTATE:
      state.selectedCat.state = action.state
      return {
        ...state
      }
    default:
      return state
  }
}

export default cat