import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import './index.scss'

// FIXME :: useNavigate()를 쓰는 이유는?
function CatPage() {
  const catList = useSelector(state => state.cat.catList)

  return (
    <div className="cat-page">
      <h1>고양이 리스트</h1>
      <ul>
        {
          catList.map((cat, key) => (
            <li key={`catlist-${key}`}>
              {
                cat.state === '사망'
                  ? <img className="disabled" src={cat.imgSrc} alt="cat"/>
                  : <Link to={`/catDetail/${cat.id}`}><img src={cat.imgSrc} alt="cat"/></Link>
              }
              <div>
                <p>이름: {cat.name}</p>
                <p>성별: {cat.gender}</p>
                <p>나이: {cat.age}살</p>
                <p>몸무게: {cat.weight}kg</p>
                <p>상태: {cat.state}</p>
                <p>밥: {cat.foodCount}번</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CatPage
