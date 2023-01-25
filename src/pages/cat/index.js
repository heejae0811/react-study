import {Link} from 'react-router-dom'
import {initialState} from '../../reducers/counter'
import './index.scss'

function CatPage() {
  return (
    <div className="cat-page">
      <h1>고양이 리스트</h1>
      <ul>
        {
          initialState.catList.map((list, key) => (
            <li key={`cat-${key}`}>
              <Link to={`/catDetail/${list.id}`}>
                <img src={list.imgSrc} alt="cat"/>
              </Link>
              <div>
                <p>이름: {list.name}</p>
                <p>성별: {list.gender}</p>
                <p>나이: {list.age}살</p>
                <p>몸무게: {list.weight}kg</p>
                <p>상태: {list.state}</p>
                <p>밥: {list.foodCount}번</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CatPage
