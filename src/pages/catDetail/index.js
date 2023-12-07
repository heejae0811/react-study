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

const CatDetail = () => {
    const [isEatCount, setEatCount] = useState(1)
    const [isSnackClick, setSnackClick] = useState(false)
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
    // 간식 먹으면 +3kg
    const eatSnack = () => {
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
            setSnackClick(true)
            setTimeout(() => {
                setSnackClick(false)
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

    // 운동하면 -2kg (밥 먹을 수 없음)
    const workout = () => {
        setSnackClick(true)
        setFeedClick(true)
        setWaterClick(true)
        setWorkoutClick(true)

        setTimeout(() => {
            setSnackClick(false)
            setFeedClick(false)
            setWaterClick(false)
            setWorkoutClick(false)
        }, randomSeconds)

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

        if (selectedCat.age > 20 || selectedCat.weight <= 0) {
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
        <>
            <h1 className="mb-12 text-3xl font-bold text-center">{selectedCat.name}</h1>

            <div className="flex justify-items-center items-center gap-6 mb-6">
                <div className="w-1/2">
                    <img
                        className={selectedCat.status === catStatus.die ? 'border rounded brightness-50' : 'border rounded'}
                        src={selectedCat.profileImage}
                        alt={selectedCat.name}/>

                    <ul className="mt-3 font-semibold">
                        {
                            selectedCat.history.filter(type => type.type === 'Message').map((message, index) => {
                                return (
                                    <li key={index}>{message.message}</li>
                                )
                            })
                        }
                    </ul>
                </div>

                <ul className="w-1/2">
                    <li className="flex justify-items-start items-center gap-3 mb-3">
                        <p className="text-lg">나이</p>
                        <p className="text-lg">{selectedCat.age}</p>
                    </li>

                    <li className="flex justify-items-start items-center gap-3 mb-3">
                        <p className="text-lg">몸무게</p>
                        <p className="text-lg">{selectedCat.weight}kg</p>
                    </li>

                    <li className="flex justify-items-start items-center gap-3 mb-3">
                        <p className="text-lg">상태</p>
                        <p className="text-lg">{selectedCat.status}</p>
                    </li>

                    <li className="flex justify-items-start items-center gap-3 mb-3">
                        <p className="text-lg">성별</p>
                        <p className="text-lg">{selectedCat.gender}</p>
                    </li>

                    {/* TODO :: eatCount 쌓이는 것이 아니라 업데이트 */}
                    <ul className="flex justify-items-start items-center gap-3 mb-3">
                        <p className="text-lg">밥 먹은 횟수</p>
                        {
                            selectedCat.history.filter(history => history.type === 'EatCount').map((eatCount, index) => {
                                return (
                                    <li
                                        className="text-lg"
                                        key={index}>
                                        {eatCount.eatCount}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </ul>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                <button
                    className={isSnackClick || selectedCat.status === catStatus.die ? 'p-3 bg-red-400 rounded brightness-50' : 'p-3 bg-red-400 hover:bg-red-500 transition rounded'}
                    disabled={isSnackClick || selectedCat.status === catStatus.die}
                    onClick={eatSnack}>
                    간식 먹기
                </button>
                <button
                    className={isFeedClick || selectedCat.status === catStatus.die ? 'p-3 bg-amber-400 rounded brightness-50' : 'p-3 bg-amber-400 hover:bg-amber-500 transition rounded'}
                    disabled={isFeedClick || selectedCat.status === catStatus.die}
                    onClick={eatFeed}>
                    사료 먹기
                </button>
                <button
                    className={isWaterClick || selectedCat.status === catStatus.die ? 'p-3 bg-blue-400 rounded brightness-50' : 'p-3 bg-blue-400 hover:bg-blue-500 transition rounded'}
                    disabled={isWaterClick || selectedCat.status === catStatus.die}
                    onClick={eatWater}>
                    물 마시기
                </button>
                <button
                    className={isWorkoutClick || selectedCat.status === catStatus.die ? 'p-3 bg-violet-400 rounded brightness-50' : 'p-3 bg-violet-400 hover:bg-violet-500 transition rounded'}
                    disabled={isWorkoutClick || selectedCat.status === catStatus.die}
                    onClick={workout}>
                    운동하기
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <ul>
                    <h3 className="mb-3 text-lg font-semibold">간식 먹은 시간</h3>
                    {
                        selectedCat.history.filter(history => history.type === 'Meat').map((meat, index) => {
                            return (
                                <li
                                    className="mb-3"
                                    key={index}>
                                    {meat.time}
                                </li>
                            )
                        })
                    }
                </ul>

                <ul>
                    <h3 className="mb-3 text-lg font-semibold">사료 먹은 시간</h3>
                    {
                        selectedCat.history.filter(history => history.type === 'Feed').map((feed, index) => {
                            return (
                                <li
                                    className="mb-3"
                                    key={index}>
                                    {feed.time}
                                </li>
                            )
                        })
                    }
                </ul>

                <ul>
                    <h3 className="mb-3 text-lg font-semibold">물 마신 시간</h3>
                    {
                        selectedCat.history.filter(history => history.type === 'Water').map((water, index) => {
                            return (
                                <li
                                    className="mb-3"
                                    key={index}>
                                    {water.time}
                                </li>
                            )
                        })
                    }
                </ul>

                <ul>
                    <h3 className="mb-3 text-lg font-semibold">운동한 시간</h3>
                    {
                        selectedCat.history.filter(history => history.type === 'Workout').map((workout, index) => {
                            return (
                                <li
                                    className="mb-3"
                                    key={index}>
                                    {workout.time}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <button
                className="block w-full max-w-xs m-auto p-3 bg-indigo-400 hover:bg-indigo-500 transition rounded text-lg font-bold"
                onClick={() => navigate('/catList')}>
                다른 고양이 키우러 가기
            </button>
        </>
    )
}

export default CatDetail