import * as database from '../database/cats'

// 액션 타입 정의, 액션은 대문자로 작성한다.
export const HANDLECAT = 'HANDLECAT'
export const HANDLEMEAT = 'HANDLEMEAT'
export const HANDLEFEED = 'HANDLEFEED'
export const HANDLEWATER = 'HANDLEWATER'
export const HANDLEWORKOUT = 'HANDLEWORKOUT'
export const HANDLEAGE = 'HANDLEAGE'
export const HANDLESTATE = 'HANDLESTATE'

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
      state.selectedCat = state.catList.find(cat => cat.id === action.paramsId)
      return {
        ...state
      }
    case HANDLEMEAT:
      state.selectedCat.weight = state.selectedCat.weight + 3
      state.selectedCat.eatTime = [...state.selectedCat.eatTime, action.eatTime]
      state.selectedCat.eatCount = state.selectedCat.eatCount + 1
      return {
        ...state
      }
    case HANDLEFEED:
      state.selectedCat.weight = state.selectedCat.weight + 1
      state.selectedCat.eatTime = [...state.selectedCat.eatTime, action.eatTime]
      state.selectedCat.eatCount = state.selectedCat.eatCount + 1
      return {
        ...state
      }
    case HANDLEWATER:
      state.selectedCat.weight = Number((state.selectedCat.weight + 0.1).toFixed(1))
      state.selectedCat.eatTime = [...state.selectedCat.eatTime, action.eatTime]
      state.selectedCat.eatCount = state.selectedCat.eatCount + 1
      return {
        ...state
      }
    case HANDLEWORKOUT:
      state.selectedCat.weight = state.selectedCat.weight - 2
      state.selectedCat.workoutTime = [...state.selectedCat.workoutTime, action.workoutTime]
      state.selectedCat.workoutCount = state.selectedCat.workoutCount + 1
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