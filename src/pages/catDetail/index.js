import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {initialState, increaseFood, increaseWeight, increaseAge} from '../../reducers/counter'
import './index.scss'

function CatDetailPage() {
  const {id} = useParams()
  const cat = [initialState.catList[id]]

  const dispatch = useDispatch()
  const {foodCount, weightCount, ageCount} = useSelector(state => state.counter)

  const onFood = () => {
    dispatch(increaseFood(foodCount + 1))

    if ((foodCount % 2) === 0) {
      dispatch(increaseWeight(weightCount + 1))
    }

    if ((foodCount % 3) === 0) {
      dispatch(increaseAge(ageCount + 1))
    }

    console.log(initialState)
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

      고양이 배열로 3마리
      디자인 이쁘게
      이름, 성별, 나이, 몸무게 등 고양이 정보 필요
      <br/>
      밥 2번 +1kg
      밥 3번 +1살
      나이가 15살 되면 사망 ㅜㅜ 비활성화 클릭 안됨 <br/>
      체중이 30kg이 되면 상태가 비만
    </div>
  )
}

export default CatDetailPage
