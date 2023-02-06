import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'
import './index.scss'
import {catStatus} from '../../database/cats'

const CatList = () => {
  const navigate = useNavigate()
  const catList = useSelector(state => state.cat.cats)

  const handleDetailNavigate = (name) => {
    navigate(`/catDetail/${name}`)
  }

  return (
    <div className="cat-list">
      <button className="btn-create" onClick={() => navigate('/catCreate')}>Cat Create</button>

      <ul>
        {
          catList.map((cat, index) => (
            <li key={index}>
              <h3>{cat.name}</h3>

              <img className={cat.status === catStatus.die ? 'disabled' : ''} src={cat.profileImage} alt={cat.name}/>

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
                <p>Gender</p>
                <p>{cat.gender}</p>
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