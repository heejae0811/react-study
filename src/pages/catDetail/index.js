import {useSelector, useDispatch} from 'react-redux'
import {initialState, increaseFood, increaseAge} from '../../reducers/counter'
import './index.scss'

function CatDetailPage() {
  const dispatch = useDispatch()
  const {foodCount} = useSelector(state => state.counter)

  const onFood = () => {
    dispatch({
        type: 'FOOD'
      }
    )
    console.log(initialState.catList)
    console.log(initialState.cat)
  }

  return (
    <div className="cat-detail-page">
      <h1>고양이</h1>
      <ul>
        {
          initialState.catList.map((list, key) => (
            <li key={`cat-${key}`}>
              {foodCount}
              <img src={list.imgSrc} alt="cat"/>
              <div>
                <p>이름: {list.name}</p>
                <p>성별: {list.gender}</p>
                <br/>
                <p>나이: {list.age}살</p>
                <p>몸무게: {list.weight}kg</p>
                <p>상태: {list.state}</p>
                <p>밥: {list.foodCount}번</p>
              </div>
              <button onClick={onFood}>밥주기</button>
            </li>
          ))
        }
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
