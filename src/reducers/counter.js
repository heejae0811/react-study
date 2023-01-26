export const FOOD = 'COUNT/FOOD'
export const WEIGHT = 'COUNT/FOOD'
export const AGE = 'COUNT/FOOD'

export const increaseFood = (foodCount) => ({type: FOOD, foodCount})
export const increaseWeight = (weightCount) => ({type: FOOD, weightCount})
export const increaseAge = (ageCount) => ({type: FOOD, ageCount})

export const initialState = {
  catList: [
    {
      catId: 0,
      imgSrc: '/react-study/images/cat/cat01.jpg',
      name: '가가',
      gender: '여자',
      age: 1,
      weight: 7,
      state: '정상',
      foodCount: 0,
      live: true
    },
    {
      catId: 1,
      imgSrc: '/react-study/images/cat/cat02.jpg',
      name: '나나',
      gender: '여자',
      age: 7,
      weight: 15,
      state: '과체중',
      foodCount: 15,
      live: true
    },
    {
      catId: 2,
      imgSrc: '/react-study/images/cat/cat03.jpg',
      name: '다다',
      gender: '남자',
      age: 12,
      weight: 30,
      state: '비만',
      foodCount: 30,
      live: true
    }
  ],
  cat: null,
  foodCount: 0,
  weightCount: 0,
  ageCount: 0
}

// action = 객체, payload = 변화하는 값, reducer = 변화시키는 함수?
const counter = (state = initialState, action) => {
  switch (action.type) {
    case FOOD:
      return {
        ...state,
        foodCount: state.foodCount + 1,
      }
    case WEIGHT:
      return {
        ...state,
        weightCount: state.weightCount + 1
      }
    case AGE:
      return {
        ...state,
        ageCount: state.ageCount + 1
      }
    default:
      return state
  }
}

export default counter