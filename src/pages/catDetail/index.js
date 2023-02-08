import {useParams, useNavigate} from 'react-router'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
  handleSelectedCat,
  addHistory,
  handleStatus,
  handleGainWeight,
  handleLoseWeight,
  handleAge
} from '../../redux/cat'
import {catStatus} from '../../database/cats'
import Header from '../../component/layout/Header'
import Access from '../../component/access'
import './index.scss'

const CatDetail = () => {
  const [isEatCount, setEatCount] = useState(1)
  const [isMeatClick, setMeatClick] = useState(false)
  const [isFeedClick, setFeedClick] = useState(false)
  const [isWaterClick, setWaterClick] = useState(false)
  const [isWorkoutClick, setWorkoutClick] = useState(false)

  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loginUser = useSelector(state => state.user.loginUser)
  const catList = useSelector(state => state.cat.cats)
  const selectedCat = useSelector(state => state.cat.selectedCat)

  const randomEat = Math.round(Math.random() * 10)
  const randomSeconds = ((Math.random() * (10 - 2)) + 2) * 1000

  // 고기 먹으면 +3kg
  const eatMeat = () => {
    if (randomEat % 2 === 0 || randomEat % 2 !== 0) {
      setEatCount(isEatCount + 1)

      dispatch(addHistory({
        type: 'EatCount',
        eatCount: isEatCount
      }))
      dispatch(addHistory({
        type: 'Meat',
        time: new Date().toLocaleString()
      }))
      dispatch(handleGainWeight(3))

      catListStatus()
    } else {
      alert('안먹어!')

      setMeatClick(true)
      setTimeout(() => {
        setMeatClick(false)
      }, randomSeconds)
    }
  }

  // 사료 먹으면 +1kg
  const eatFeed = () => {
    if (randomEat % 2 === 0 || randomEat % 2 !== 0) {
      setEatCount(isEatCount + 1)

      dispatch(addHistory({
        type: 'EatCount',
        eatCount: isEatCount
      }))
      dispatch(addHistory({
        type: 'Feed',
        time: new Date().toLocaleString()
      }))
      dispatch(handleGainWeight(1))

      catListStatus()
    } else {
      alert('안먹어!')

      setFeedClick(true)
      setTimeout(() => {
        setFeedClick(false)
      }, randomSeconds)
    }
  }

  // 물 먹으면 +0.1kg
  const eatWater = () => {
    if (randomEat % 2 === 0 || randomEat % 2 !== 0) {
      setEatCount(isEatCount + 1)

      dispatch(addHistory({
        type: 'EatCount',
        eatCount: isEatCount
      }))
      dispatch(addHistory({
        type: 'Water',
        time: new Date().toLocaleString()
      }))
      dispatch(handleGainWeight(0.1))

      catListStatus()
    } else {
      alert('안먹어!')

      setWaterClick(true)
      setTimeout(() => {
        setWaterClick(false)
      }, randomSeconds)
    }
  }

  // 운동하면 -2kg
  const workout = () => {
    setWorkoutClick(true)
    setTimeout(() => {
      setWorkoutClick(false)
    }, 100)

    dispatch(addHistory({
      type: 'Workout',
      time: new Date().toLocaleString()
    }))
    dispatch(handleLoseWeight(2))

    catListStatus()
  }

  // 나이, 몸무게에 따른 상태 체크
  const catListStatus = () => {
    if (isEatCount % 3 === 0) {
      dispatch(handleAge())
    }

    if (selectedCat.age > 10 || selectedCat.weight < 1 || (selectedCat.age * 0.1) > selectedCat.weight) {
      dispatch(handleStatus(catStatus.die))
    } else if (selectedCat.weight > 20) {
      dispatch(handleStatus(catStatus.fat))
    } else if (selectedCat.weight > 0) {
      dispatch(handleStatus(catStatus.normal))
    } else {
      dispatch(handleStatus(catStatus.die))
    }
  }

  useEffect(() => {
    if (params.name && catList.find(cat => cat.name === params.name)) {
      dispatch(handleSelectedCat(params.name))
    } else {
      // navigate('/')
    }
  }, [])

  if (!selectedCat) return null

  return (
    <div className="cat-detail">
      {
        loginUser !== null ? (
          <>
            <Header/>

            <h1>{selectedCat.name}</h1>

            <div className="cat-info">
              <img className={selectedCat.status === catStatus.die ? 'disabled' : ''} src={selectedCat.profileImage}
                   alt={selectedCat.name}/>

              <ul className="cat-text">
                <li>
                  <p>Age</p>
                  <p>{selectedCat.age}</p>
                </li>

                <li>
                  <p>Weight</p>
                  <p>{selectedCat.weight}kg</p>
                </li>

                <li>
                  <p>Status</p>
                  <p>{selectedCat.status}</p>
                </li>

                <li>
                  <p>Gender</p>
                  <p>{selectedCat.gender}</p>
                </li>
              </ul>
            </div>

            <div className="cat-btn">
              <button onClick={eatMeat} disabled={isMeatClick || selectedCat.status === catStatus.die}>고기 먹기</button>
              <button onClick={eatFeed} disabled={isFeedClick || selectedCat.status === catStatus.die}>사료 먹기</button>
              <button onClick={eatWater} disabled={isWaterClick || selectedCat.status === catStatus.die}>물 먹기</button>
              <button onClick={workout} disabled={isWorkoutClick || selectedCat.status === catStatus.die}>운동하기</button>
            </div>

            <div className="cat-record">
              <ul>
                <h3>밥 먹은 횟수</h3>
                {
                  selectedCat.history.filter(type => type.type === 'EatCount').map((eatCount, index) => {
                    return (
                      <li key={index}>{eatCount.eatCount}</li>
                    )
                  })
                }
              </ul>

              <ul>
                <h3>고기 먹은 시간</h3>
                {
                  selectedCat.history.filter(type => type.type === 'Meat').map((meat, index) => {
                    return (
                      <li key={index}>{meat.time}</li>
                    )
                  })
                }
              </ul>

              <ul>
                <h3>사료 먹은 시간</h3>
                {
                  selectedCat.history.filter(type => type.type === 'Meat').map((feed, index) => {
                    return (
                      <li key={index}>{feed.time}</li>
                    )
                  })
                }
              </ul>

              <ul>
                <h3>물 마신 시간</h3>
                {
                  selectedCat.history.filter(type => type.type === 'Water').map((water, index) => {
                    return (
                      <li key={index}>{water.time}</li>
                    )
                  })
                }
              </ul>

              <ul>
                <h3>운동한 시간</h3>
                {
                  selectedCat.history.filter(type => type.type === 'Workout').map((workout, index) => {
                    return (
                      <li key={index}>{workout.time}</li>
                    )
                  })
                }
              </ul>
            </div>
          </>
        ) : (
          <Access/>
        )
      }
    </div>
  )
}

export default CatDetail