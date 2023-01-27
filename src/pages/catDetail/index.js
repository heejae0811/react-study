import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {handleCat, handleFoodCount, handleWeight1, handleWeight2, handleWeight3, handleLoseWight, handleAge, HANDLESTATE} from '../../reducers/cat'
import './index.scss'

function CatDetailPage() {
  const params = useParams()
  const paramsId = Number(params.id)

  const dispatch = useDispatch()
  const cat = useSelector(state => state.cat)
  const selectedCat = useSelector(state => state.cat.selectedCat)

  useEffect(() => {
    if (cat.catList.find(cat => cat.id === paramsId)) {
      dispatch(handleCat(paramsId))
    } else {
      alert('잘못된 접근입니다.')
    }
  }, [])

  // 랜더링 순서가 html을 return 한 다음에 useEffect가 실행되는데 처음에 selectedCat이 없기 때문에 에러가 발생하는 것이다.
  // 재랜더링이 되는 단점이 있다.(비효율적)
  if (!selectedCat) return null

  // 고기 먹으면 + 3kg
  const onFoodMeat = () => {
    dispatch(handleFoodCount())
    dispatch(handleWeight1())

    if (selectedCat.foodCount % 3 === 0) {
      dispatch(handleAge())
    }

    if (selectedCat.weight >= 15) {
      dispatch({type: HANDLESTATE, state: '비만'})
    }

    if (selectedCat.age >= 10) {
      dispatch({type: HANDLESTATE, state: '사망'})
    }
  }

  // 사료 먹으면 +1kg
  const onFoodFeed = () => {
    dispatch(handleFoodCount())
    dispatch(handleWeight2())

    if (selectedCat.foodCount % 3 === 0) {
      dispatch(handleAge())
    }

    if (selectedCat.weight >= 15) {
      dispatch({type: HANDLESTATE, state: '비만'})
    }

    if (selectedCat.age >= 10) {
      dispatch({type: HANDLESTATE, state: '사망'})
    }
  }

  // 물 먹으면 +0.1kg
  const onFoodWater = () => {
    dispatch(handleFoodCount())
    dispatch(handleWeight3())

    if (selectedCat.foodCount % 3 === 0) {
      dispatch(handleAge())
    }

    if (selectedCat.weight >= 15) {
      dispatch({type: HANDLESTATE, state: '비만'})
    }

    if (selectedCat.age >= 10) {
      dispatch({type: HANDLESTATE, state: '사망'})
    }

    console.log(typeof selectedCat.weight)
  }

  // 운동하면 -2kg s
  const onLoseWeight = () => {
    dispatch(handleLoseWight())

    if (selectedCat.age * 0.9 >= selectedCat.weight) {
      dispatch({type: HANDLESTATE, state: '사망'})
    }
  }

  return (
    <div className="cat-detail-page">
      <h1>고양이 디테일</h1>

      <ul>
        <li>
          {
            selectedCat.state === '사망'
              ? <img className="disabled" src={selectedCat.imgSrc} alt="cat"/>
              : <img src={selectedCat.imgSrc} alt="cat"/>
          }
          <p>이름: {selectedCat.name}</p>
          <p>성별: {selectedCat.gender}</p>
          <p>나이: {selectedCat.age}살</p>
          <p>몸무게: {selectedCat.weight}kg</p>
          <p>상태: {selectedCat.state}</p>
          <p>밥: {selectedCat.foodCount}번</p>
        </li>
      </ul>

      {
        selectedCat.state === '사망'
          ?
          <>
            <button className="disabled" disabled>고기 먹기</button>
            <button className="disabled" disabled>사료 먹기</button>
            <button className="disabled" disabled>물 먹기</button>
            <button className="disabled" disabled>운동 시키기</button>
          </>
          :
          <>
            <button onClick={() => onFoodMeat()}>고기 먹기</button>
            <button onClick={() => onFoodFeed()}>사료 먹기</button>
            <button onClick={() => onFoodWater()}>물 먹기</button>
            <button onClick={() => onLoseWeight()}>운동 시키기</button>
          </>
      }
    </div>
  )
}

export default CatDetailPage
