// 액션 타입 정의, 액션은 대문자로 작성한다.
import {useParams} from 'react-router-dom'

export const FOOD = 'FOOD'
export const WEIGHT = 'WEIGHT'
export const AGE = 'AGE'

// 액션 생성 함수 정의
export const increaseFood = (catId, foodCount) => ({type: FOOD, catId, foodCount})
export const increaseWeight = (weightCount) => ({type: WEIGHT, weightCount})
export const increaseAge = (ageCount) => ({type: AGE, ageCount})

// 리덕스에서 관리할 상태 정의
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
  cat: {}
}

// 리듀서 만들기
// action = 객체, payload = 변화하는 값, reducer = 변화시키는 함수?
const counter = (state = initialState, action) => {
  switch (action.type) {
    case FOOD:
      return {
        ...state,
        cat: {
          catId: action.catId
        }
      }
    // case WEIGHT:
    //   return {
    //     ...state,
    //     weightCount: state.weightCount + 1
    //   }
    // case AGE:
    //   return {
    //     ...state,
    //     ageCount: state.ageCount + 1
    //   }
    default:
      return state
  }
}

export default counter