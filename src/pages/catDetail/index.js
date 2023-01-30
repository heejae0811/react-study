import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {
  handleCat,
  HANDLEMEAT,
  HANDLEFEED,
  HANDLEWATER,
  HANDLEWORKOUT,
  HANDLEAGE,
  HANDLESTATE
} from '../../reducers/cat'
import {useAuth} from '../../hooks/useAuth'
import './index.scss'

function CatDetailPage() {
  const [userList, loginValue] = useAuth()
  const [isMeatClick, setMeatClick] = useState(false)
  const [isFeedClick, setFeedClick] = useState(false)
  const [isWaterClick, setWaterClick] = useState(false)
  const [isWorkoutClick, setWorkoutClick] = useState(false)

  const date = new Date()
  const time = {
    month: date.getMonth() + 1,
    date: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
  const timeString = `${time.month}/${time.date} ${time.hours}:${time.minutes}:${time.seconds}`

  const random = Math.round(Math.random() * 100)

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
      dispatch({type: HANDLEMEAT, eatTime: timeString})

      if (selectedCat.eatCount % 3 === 0) {
        dispatch({type: HANDLEAGE})
      }

      if (selectedCat.weight >= 15) {
        dispatch({type: HANDLESTATE, state: '비만'})
      }

      if (selectedCat.age >= 10) {
        dispatch({type: HANDLESTATE, state: '사망'})
      }
    } else {
      const meatBtn = document.querySelector('.meatBtn')
      meatBtn.disabled = true
      setMeatClick(true)

      setTimeout(() => {
        meatBtn.disabled = false
        setMeatClick(false)
      }, 2000)
    }
  }

  // 사료 먹으면 +1kg
  const onFoodFeed = () => {
    if (random % 2 === 0) {
      dispatch({type: HANDLEFEED, eatTime: timeString})

      if (selectedCat.eatCount % 3 === 0) {
        dispatch({type: HANDLEAGE})
      }

      if (selectedCat.weight >= 15) {
        dispatch({type: HANDLESTATE, state: '비만'})
      }

      if (selectedCat.age >= 10) {
        dispatch({type: HANDLESTATE, state: '사망'})
      }
    } else {
      const feedBtn = document.querySelector('.feedBtn')
      feedBtn.disabled = true
      setFeedClick(true)

      setTimeout(() => {
        feedBtn.disabled = false
        setFeedClick(false)
      }, 2000)
    }
  }

  // 물 먹으면 +0.1kg
  const onFoodWater = () => {
    if (random % 2 === 0) {
      dispatch({type: HANDLEWATER, eatTime: timeString})

      if (selectedCat.eatCount % 3 === 0) {
        dispatch({type: HANDLEAGE})
      }

      if (selectedCat.weight >= 15) {
        dispatch({type: HANDLESTATE, state: '비만'})
      }

      if (selectedCat.age >= 10) {
        dispatch({type: HANDLESTATE, state: '사망'})
      }
    } else {
      const waterBtn = document.querySelector('.waterBtn')
      waterBtn.disabled = true
      setWaterClick(true)

      setTimeout(() => {
        waterBtn.disabled = false
        setWaterClick(false)
      }, 2000)
    }
  }

  // 운동하면 -2kg
  const onLoseWeight = () => {
    dispatch({type: HANDLEWORKOUT, workoutTime: timeString})

    const loseWeightBtn = document.querySelector('.loseWeightBtn')
    loseWeightBtn.disabled = true
    setWorkoutClick(true)

    setTimeout(() => {
      loseWeightBtn.disabled = false
      setWorkoutClick(false)
    }, 1000)

    if (selectedCat.age * 0.9 >= selectedCat.weight) {
      dispatch({type: HANDLESTATE, state: '사망'})
    }
  }

  return (
    <div className="cat-detail-page">
      <h1>고양이 디테일</h1>

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
            <button className={'meatBtn' + (isMeatClick ? ' disabled' : '')} onClick={() => onFoodMeat()}>고기 먹기</button>
            <button className={'feedBtn' + (isFeedClick ? ' disabled' : '')} onClick={() => onFoodFeed()}>사료 먹기</button>
            <button className={'waterBtn' + (isWaterClick ? ' disabled' : '')} onClick={() => onFoodWater()}>물 먹기
            </button>
            <button className={'loseWeightBtn' + (isWorkoutClick ? ' disabled' : '')}
                    onClick={() => onLoseWeight()}>운동 시키기
            </button>
          </>
      }

      <ul>
        <li>
          {
            selectedCat.state === '사망'
              ? <img className="disabled" src={selectedCat.imgSrc} alt="cat"/>
              : <img src={selectedCat.imgSrc} alt="cat"/>
          }
          <div className="info">
            <div>
              <p>이름: {selectedCat.name}</p>
              <p>성별: {selectedCat.gender}</p>
              <p>나이: {selectedCat.age}살</p>
              <p>몸무게: {selectedCat.weight}kg</p>
              <p>상태: {selectedCat.state}</p>
            </div>
            <div>
              <p>밥: {selectedCat.eatCount}번</p>
              <h3>밥 먹은 시간</h3>
              {
                selectedCat.eatTime.map((time, key) => (
                  <p key={`eatTime-${key}`}>{time}</p>
                ))
              }
            </div>
            <div>
              <p>운동: {selectedCat.workoutCount}번</p>
              <h3>운동한 시간</h3>
              {
                selectedCat.workoutTime.map((time, key) => (
                  <p key={`workoutTime-${key}`}>{time}</p>
                ))
              }
            </div>
            <div>
              {/*<p>집사: {loginValue.loginUser[0].name}</p>*/}
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CatDetailPage
