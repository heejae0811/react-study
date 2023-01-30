import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {
  handleCat,
  handleFoodCount,
  handleWeight1,
  handleWeight2,
  handleWeight3,
  handleLoseWight,
  handleAge,
  HANDLESTATE
} from '../../reducers/cat'
import './index.scss'

function CatDetailPage() {
  const [isMeatClick, setMeatClick] = useState(false)
  const [isFeedClick, setFeedClick] = useState(false)
  const [isWaterClick, setWaterClick] = useState(false)
  const [isWorkoutClick, setWorkoutClick] = useState(false)

  const random = Math.round(Math.random() * 1000)

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
    if (random % 2 === 0) {
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
    } else {
      const eatBtn = document.querySelector('.eatBtn')
      eatBtn.disabled = true
      setMeatClick(true)

      setTimeout(() => {
        eatBtn.disabled = false
        setMeatClick(false)
      }, 2000)
    }
  }

  // 사료 먹으면 +1kg
  const onFoodFeed = () => {
    if (random % 2 === 0) {
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
    } else {
      const eatBtn = document.querySelector('.eatBtn')
      eatBtn.disabled = true
      setFeedClick(true)

      setTimeout(() => {
        eatBtn.disabled = false
        setFeedClick(false)
      }, 2000)
    }
  }

  // 물 먹으면 +0.1kg
  const onFoodWater = () => {
    if (random % 2 === 0) {
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
    } else {
      const eatBtn = document.querySelector('.eatBtn')
      eatBtn.disabled = true
      setWaterClick(true)

      setTimeout(() => {
        eatBtn.disabled = false
        setWaterClick(false)
      }, 2000)
    }
  }

  // 운동하면 -2kg
  const onLoseWeight = () => {
    const loseWeightBtn = document.querySelector('.loseWeightBtn')
    loseWeightBtn.disabled = true
    setWorkoutClick(true)

    setTimeout(() => {
      loseWeightBtn.disabled = false
      setWorkoutClick(false)
    }, 10000)

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
            <button className={(isMeatClick ? 'eatBtn disabled' : 'eatBtn')} onClick={() => onFoodMeat()}>고기 먹기</button>
            <button className={(isFeedClick ? 'eatBtn disabled' : 'eatBtn')} onClick={() => onFoodFeed()}>사료 먹기</button>
            <button className={(isWaterClick ? 'eatBtn disabled' : 'eatBtn')} onClick={() => onFoodWater()}>물 먹기
            </button>
            <button className={(isWorkoutClick ? 'loseWeightBtn disabled' : 'loseWeightBtn')}
                    onClick={() => onLoseWeight()}>운동 시키기
            </button>
          </>
      }
    </div>
  )
}

export default CatDetailPage
