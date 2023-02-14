import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {
  handleSelectedCat,
  addHistory,
  handleStatus,
  handleGainWeight,
  handleLoseWeight,
  handleAge
} from '../../redux/cat'
import {catStatus, catMessages} from '../../database/cats'
import Button from '../../component/Button'
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

  const catList = useSelector(state => state.cat.cats)
  const selectedCat = useSelector(state => state.cat.selectedCat)

  const randomEat = Math.round(Math.random() * 10)
  const randomSeconds = ((Math.random() * (10 - 2)) + 2) * 1000

  // TODO :: 커스텀 훅 사용해서 중복코드 줄이기
  // 고기 먹으면 +3kg
  const eatMeat = () => {
    if (randomEat % 2 === 0) {
      dispatch(addHistory({
        type: 'Meat',
        time: new Date().toLocaleString()
      }))
      dispatch(addHistory({
        type: 'Message',
        message: catMessages[randomEat]
      }))
      dispatch(handleGainWeight(3))

      eatCount()
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
    if (randomEat % 2 === 0) {
      dispatch(addHistory({
        type: 'Feed',
        time: new Date().toLocaleString()
      }))
      dispatch(addHistory({
        type: 'Message',
        message: catMessages[randomEat]
      }))
      dispatch(handleGainWeight(1))

      eatCount()
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
    if (randomEat % 2 === 0) {
      dispatch(addHistory({
        type: 'Water',
        time: new Date().toLocaleString()
      }))
      dispatch(addHistory({
        type: 'Message',
        message: catMessages[randomEat]
      }))
      dispatch(handleGainWeight(0.1))

      eatCount()
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
    setMeatClick(true)
    setFeedClick(true)
    setWaterClick(true)
    setWorkoutClick(true)

    setTimeout(() => {
      setMeatClick(false)
      setFeedClick(false)
      setWaterClick(false)
      setWorkoutClick(false)
    }, 2000)

    dispatch(addHistory({
      type: 'Workout',
      time: new Date().toLocaleString()
    }))
    dispatch(handleLoseWeight(2))

    catListStatus()
  }

  // 밥 먹은 횟수 증가
  const eatCount = () => {
    setEatCount(isEatCount + 1)

    if (selectedCat.history.length === 0) {
      dispatch(addHistory({
        type: 'EatCount',
        eatCount: 1
      }))
    } else {
      let eatCountList = selectedCat.history.filter(history => history.type === 'EatCount')
      let eatCount = eatCountList[eatCountList.length - 1].eatCount

      dispatch(addHistory({
        type: 'EatCount',
        eatCount: eatCount + 1
      }))
    }
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

  // 60초가 지나면 +1살, 100초가 지나면 -1kg
  // useEffect(() => {
  //   if (selectedCat !== null) {
  //     setTimeout(() => {
  //       dispatch(handleAge())
  //     }, 60000)
  //
  //     setTimeout(() => {
  //       dispatch(handleLoseWeight(1))
  //     }, 100000)
  //   }
  // }, [selectedCat])

  if (!selectedCat) return null

  return (
    <div className="cat-detail">
      <h1>{selectedCat.name}</h1>

      <div className="cat-info">
        <div>
          <img className={selectedCat.status === catStatus.die ? 'disabled' : ''} src={selectedCat.profileImage}
               alt={selectedCat.name}/>
        </div>

        <ul className="information">
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

        <ul className="messages">
          {
            selectedCat.history.filter(type => type.type === 'Message').map((message, index) => {
              return (
                <li key={index}>{message.message}</li>
              )
            })
          }
        </ul>
      </div>

      <div className="cat-button">
        <Button onClick={eatMeat} disabled={isMeatClick || selectedCat.status === catStatus.die} maxWidth="135" bgColor="#f65252">고기 먹기</Button>
        <Button onClick={eatFeed} disabled={isFeedClick || selectedCat.status === catStatus.die} maxWidth="135" bgColor="#f68852">사료 먹기</Button>
        <Button onClick={eatWater} disabled={isWaterClick || selectedCat.status === catStatus.die} maxWidth="135" bgColor="#5275f6">물 마시기</Button>
        <Button onClick={workout} disabled={isWorkoutClick || selectedCat.status === catStatus.die} maxWidth="135" bgColor="#ab52f6">운동하기</Button>
      </div>

      <div className="cat-record">
        {/* TODO :: eatCount 쌓이는 것이 아니라 업데이트 */}
        <ul>
          <h3>밥 먹은 횟수</h3>
          {
            selectedCat.history.filter(history => history.type === 'EatCount').map((eatCount, index) => {
              return (
                <li key={index}>{eatCount.eatCount}</li>
              )
            })
          }
        </ul>

        <ul>
          <h3>고기 먹은 시간</h3>
          {
            selectedCat.history.filter(history => history.type === 'Meat').map((meat, index) => {
              return (
                <li key={index}>{meat.time}</li>
              )
            })
          }
        </ul>

        <ul>
          <h3>사료 먹은 시간</h3>
          {
            selectedCat.history.filter(history => history.type === 'Feed').map((feed, index) => {
              return (
                <li key={index}>{feed.time}</li>
              )
            })
          }
        </ul>

        <ul>
          <h3>물 마신 시간</h3>
          {
            selectedCat.history.filter(history => history.type === 'Water').map((water, index) => {
              return (
                <li key={index}>{water.time}</li>
              )
            })
          }
        </ul>

        <ul>
          <h3>운동한 시간</h3>
          {
            selectedCat.history.filter(history => history.type === 'Workout').map((workout, index) => {
              return (
                <li key={index}>{workout.time}</li>
              )
            })
          }
        </ul>
      </div>

      <Button className="btn-list" onClick={() => navigate('/catList')} maxWidth="300" bgColor="#f6b352">Cat List</Button>
    </div>
  )
}

export default CatDetail