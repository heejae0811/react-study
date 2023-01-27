import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {handleCat} from '../../reducers/cat'
import './index.scss'

function CatDetailPage() {
  const params = useParams()
  const paramsId = Number(params.id)

  const dispatch = useDispatch()
  const selectedCat = useSelector(state => state.cat.selectedCat)

  dispatch(handleCat(paramsId))

  // const {foodCount, weightCount, ageCount} = useSelector(state => state.counter)

  // useEffect(() => {
  //   console.log(cat)
  //   dispatch({
  //     type: CAT,
  //     foodCount: cat[0].food,
  //     weightCount: cat[0].weight,
  //     ageCount: cat[0].age
  //
  //   })
  // }, [])
  //
  // const onFood = () => {
  //   dispatch({type: FOOD})
  //
  //   if (foodCount % 2 === 0) {
  //     dispatch({type: WEIGHT})
  //
  //     if (weightCount > 15) {
  //       alert('비만입니다. 밥을 그만주세요.')
  //     }
  //   }
  //
  //   if (foodCount % 3 === 0) {
  //     dispatch({type: AGE})
  //
  //     if (ageCount > 15) {
  //       alert('하늘나라로 떠났습니다.')
  //     }
  //   }
  // }

  return (
    <div className="cat-detail-page">
      <h1>고양이 디테일</h1>
      <ul>
        <li>
          <img src={selectedCat.imgSrc} alt="cat"/>
          <p>이름: {selectedCat.name}</p>
          <p>성별: {selectedCat.gender}</p>
          <p>나이: {selectedCat.age}살</p>
          <p>몸무게: {selectedCat.weight}kg</p>
          <p>상태: {selectedCat.state}</p>
          <p>밥: {selectedCat.foodCount}번</p>
        </li>
        {/*<button onClick={onFood}>밥주기</button>*/}
      </ul>
    </div>
  )
}

export default CatDetailPage
