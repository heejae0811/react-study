import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleDeletedCat} from '../../redux/cat'
import {catStatus} from '../../database/cats'
import Header from '../../component/layout/Header'
import Access from '../../component/access'
import './index.scss'

const CatList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginUser = useSelector(state => state.user.loginUser)
  const catList = useSelector(state => state.cat.cats)

  const handleDetailNavigate = (name) => {
    navigate(`/catDetail/${name}`)
  }

  const handelDelete = (index) => {
    const deletedCat = catList.map(cat => cat.name)
    const deletedCatName = deletedCat[index]

    if (window.confirm('삭제하시겠습니까?')) {
      dispatch(handleDeletedCat(deletedCatName))
    } else {
      return false
    }
  }

  // TODO :: 리스트에 순서대로 안들어감
  return (
    <div className="cat-list">
      {
        loginUser !== null ? (
          <>
            <Header/>

            <button className="btn-create" onClick={() => navigate('/catCreate')}>Cat Create</button>

            <ul className="cat-card">
              {
                catList.map((cat, index) => (
                  <li key={index}>
                    <h2>{cat.name}</h2>

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
                      <button onClick={() => handelDelete(index)}>Delete</button>
                    </div>
                  </li>
                ))
              }
            </ul>
          </>
        ) : (
          <Access/>
        )
      }
    </div>
  )
}

export default CatList