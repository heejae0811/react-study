import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const ListCat = () => {
  const navigate = useNavigate()

  const catList = useSelector(state => state.cat.cats)

  const handleDetailNavigate = (name) => {
    navigate(`/cat-detail/${name}`)
  }

  return (
    <div>
      <h1>🎆고양이 키우기🎇</h1>
      <ul>
        {catList.map((cat, index) => (
          <li key={index} onClick={() => handleDetailNavigate(cat.name)} style={{cursor: 'pointer'}}>
            <img src={cat.profileImage} width="100" height="100"  alt={cat.name}/>
            {cat.name} {cat.age}세 체중 {cat.weight} 현재상태 : {cat.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListCat
