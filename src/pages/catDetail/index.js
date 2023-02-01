import { useNavigate, useParams } from 'react-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleSelectedCat, addHistory } from '../../redux/cat'

const DetailCat = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const catList = useSelector(state => state.cat.cats)
  const selectedCat = useSelector(state => state.cat.selectedCat)

  const addEatCount = () => {
    dispatch(addHistory({
      type: 'eat',
      timestamp: new Date()
    }))
  }

  // 선택된 고양이를 불러온다
  // 찾아봤는데 없으면 메인화면으로 이동
  useEffect(() => {
    if (params.name && catList.find(cat => cat.name === params.name)) {
      dispatch(handleSelectedCat(params.name))
    } else {
      navigate('/')
    }
  })

  if (!selectedCat) return null

  return (
    <div>
      저는 <b>{selectedCat.name}</b> 입니다. <br/>
      {selectedCat.age} 살이구요 체중은 {selectedCat.weight}kg 입니다. <br/>
      저는 현재 {selectedCat.status} 상태입니다. <br/>
      {selectedCat.history?.[selectedCat.history.length]?.user ? '마지막으로 밥준 사람은 {selectedCat.last} 입니다.' : ''} <br/>
      <div>
        <button onClick={addEatCount}>밥주기</button>
        <button>놀아주기</button>
        <button>묻어주기</button>
      </div>

      <ul>
        {selectedCat?.history?.map((item, index) => {
          return (
            <li key={`${item.name}${index}`}>
              {item.type} {item.timestamp.toString()}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default DetailCat
