import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './index.scss'

function CatPage() {
  const catList = useSelector(state => state.cat.catList)

  return (
    <div className="cat-page">
      <h1>고양이 리스트</h1>
      <ul>
        {
          catList.map((list, key) => (
            <li key={`catlist-${key}`}>
              <Link to={`/catDetail/${key}`}>
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
