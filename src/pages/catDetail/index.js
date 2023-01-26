import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {initialState, CAT, FOOD, WEIGHT, AGE} from '../../reducers/counter'
import './index.scss'

function CatDetailPage() {
  const {id} = useParams()
  const cat = [initialState.catList[id]]

  const dispatch = useDispatch()
  const {foodCount, weightCount, ageCount} = useSelector(state => state.counter)

  useEffect(() => {
    console.log(cat)
    dispatch({
      type: CAT,
      foodCount: cat[0].food,
      weight: cat[0].weight,
      age: cat[0].age
    })
  }, [])

  const onFood = () => {
    dispatch({type: FOOD})

    if (foodCount % 2 === 0) {
      dispatch({type: WEIGHT})
    }

    if (foodCount % 3 === 0) {
      dispatch({type: AGE})
    }
  }

  return (
    <div className="cat-detail-page">
      <h1>고양이 디테일</h1>
      <ul>
        {
          cat.map((list, key) => (
            <li key={`cat-${key}`}>
              <img src={list.imgSrc} alt="cat"/>
              <p>이름: {list.name}</p>
              <p>성별: {list.gender}</p>
              <p>나이: {ageCount}살</p>
              <p>몸무게: {weightCount}kg</p>
              <p>상태: {list.state}</p>
              <p>밥: {foodCount}번</p>
            </li>
          ))
        }
        <button onClick={onFood}>밥주기</button>
      </ul>
    </div>
  )
}

export default CatDetailPage
