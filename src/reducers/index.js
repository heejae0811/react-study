export const FOOD = 'COUNT/FOOD'

export const increaseFoodCount = foodCount => ({type: FOOD, foodCount})

const initialState = {
  foodCount: 0
}

// action = 객체, payload = 변화하는 값, reducer = 변화시키는 함수?
const counter = (state = initialState, action) => {
  switch (action.type) {
    case FOOD:
      return {
        foodCount: action.foodCount
      }
    default:
      return state
  }
}

export default counter