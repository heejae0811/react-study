import * as database from '../database/cats'

// 액션 타입 정의, 액션은 대문자로 작성한다.
export const HANDLECAT = 'HANDLECAT'
export const HANDLEEATTIME = 'HANDLEEATTIME'
export const HANDLEMEATWEIGHT = 'HANDLEMEATWEIGHT'
export const HANDLEFEEDWEIGHT = 'HANDLEFEEDWEIGHT'
export const HANDLEWATERWEIGHT = 'HANDLEWATERWEIGHT'
export const HANDLEWORKOUTTIME = 'HANDLEWORKOUTTIME'
export const HANDLEWORKOUT = 'HANDLEWORKOUT'
export const HANDLEAGE = 'HANDLEAGE'
export const HANDLESTATE = 'HANDLESTATE'

// 액션 생성 함수 정의
export const handleCat = (paramsId) => ({type: HANDLECAT, paramsId})
export const handleEatTime = (eatTime) => ({type: HANDLEEATTIME, eatTime})
export const handleMeatWeight = () => ({type: HANDLEMEATWEIGHT})
export const handleFeedWeight = () => ({type: HANDLEFEEDWEIGHT})
export const handleWaterWeight = () => ({type: HANDLEWATERWEIGHT})
export const handleWorkoutTime = () => ({type: HANDLEWORKOUTTIME})
export const handleWorkout = () => ({type: HANDLEWORKOUT})
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
    case HANDLEEATTIME:
      state.selectedCat.eatTime = [...state.selectedCat.eatTime, action.eatTime]
      return {
        ...state
      }
    case HANDLEMEATWEIGHT:
      state.selectedCat.eatCount = state.selectedCat.eatCount + 1
      state.selectedCat.weight = state.selectedCat.weight + 3
      return {
        ...state
      }
    case HANDLEFEEDWEIGHT:
      state.selectedCat.eatCount = state.selectedCat.eatCount + 1
      state.selectedCat.weight = state.selectedCat.weight + 1
      return {
        ...state
      }
    case HANDLEWATERWEIGHT:
      state.selectedCat.eatCount = state.selectedCat.eatCount + 1
      state.selectedCat.weight = Number((state.selectedCat.weight + 0.1).toFixed(1))
      return {
        ...state
      }
    case HANDLEWORKOUTTIME:
      state.selectedCat.workoutTime = [...state.selectedCat.workoutTime, action.workoutTime]
      return {
        ...state
      }
    case HANDLEWORKOUT:
      state.selectedCat.workoutCount = state.selectedCat.workoutCount + 1
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