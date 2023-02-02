import {useNavigate} from 'react-router'
import {useSelector} from 'react-redux'

const CatList = () => {
  const navigate = useNavigate()
  const catList = useSelector(state => state.cat.cats)

  const handleDetailNavigate = (name) => {
    navigate(`/catDetail/${name}`)
  }
  const handleCreateNavigate = () => {
    navigate('/catCreate')
  }

  return (
    <div>
      <h1>CAT LIST</h1>

      <button onClick={handleCreateNavigate}>고양이 등록하기</button>

      <ul>
        {
          catList.map((cat, index) => (
            <li key={index} >
              <div onClick={() => handleDetailNavigate(cat.name)}>
                <img src={cat.profileImage} width="150" height="150" alt={cat.name}/>
              </div>
              <div>
                <p>이름: {cat.name}</p>
                <p>나이: {cat.age}살</p>
                <p>체중: {cat.weight}</p>
                <p>상태: {cat.status}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CatList
