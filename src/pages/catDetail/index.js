import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {handleCat, handleFood} from '../../reducers/cat'
import './index.scss'

function CatDetailPage() {
  const params = useParams()
  const paramsId = Number(params.id)

  const dispatch = useDispatch()
  const cat = useSelector(state => state.cat)
  const selectedCat = useSelector(state => state.cat.selectedCat)

  useEffect(() => {
    dispatch(handleCat(paramsId))

    console.log(cat)
    console.log(selectedCat)
  })

  const onFood = () => {
    console.log('밥')
  }

  return (
    <div className="cat-detail-page">
      <h1>고양이 디테일</h1>
      <ul>
        <li>
          {/*<img src={selectedCat.imgSrc} alt="cat"/>*/}
          {/*<p>이름: {selectedCat.name}</p>*/}
          {/*<p>성별: {selectedCat.gender}</p>*/}
          {/*<p>나이: {selectedCat.age}살</p>*/}
          {/*<p>몸무게: {selectedCat.weight}kg</p>*/}
          {/*<p>상태: {selectedCat.state}</p>*/}
          {/*<p>밥: {selectedCat.foodCount}번</p>*/}
        </li>
        <button onClick={onFood}>밥주기</button>
      </ul>
    </div>
  )
}

export default CatDetailPage
