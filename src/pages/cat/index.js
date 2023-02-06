import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'
import './index.scss'

const CatList = () => {
  const navigate = useNavigate()
  const catList = useSelector(state => state.cat.cats)

  const handleDetailNavigate = (name) => {
    navigate(`/catDetail/${name}`)
  }

  return (
    <div className="cat-list">
      {/*<button onClick={() => navigate('/catCreate')}>고양이 등록하기</button>*/}

      <ul>
        {
          catList.map((cat, index) => (
            <li key={index}>
              <h3>{cat.name}</h3>

              <img src={cat.profileImage} alt={cat.name}/>

              <div>
                <p>Age</p>
                <p>{cat.age}</p>
              </div>

              <div>
                <p>Weight</p>
                <p>{cat.weight}kg</p>
              </div>

              <div>
                <p>Status</p>
                <p>{cat.status}</p>
              </div>

              <div>
                <button onClick={() => handleDetailNavigate(cat.name)}>Detail</button>
                <button>Delete</button>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CatList
