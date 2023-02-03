import {useState} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleCreatedCat} from '../../redux/cat'

const CatCreate = () => {
  const [isProfile, setProfile] = useState('')
  const [isName, setName] = useState('')
  const [isGender, setGender] = useState('')
  const [isAge, setAge] = useState('')
  const [isWeight, setWeight] = useState('')
  const [isStatus, setStatus] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const createCat = () => {
    const createCat = {
      profileImage: isProfile,
      name: isName,
      gender: isGender,
      age: isAge,
      weight: isWeight,
      status: isStatus
    }

    dispatch(handleCreatedCat(createCat))
    navigate('/')
  }

  return (
    <div>
      <h1>CAT CREATE</h1>

      <form>
        <div>
          <label htmlFor="profileImage">프로필 이미지</label>
          <input type="text" name="profileImage" value={isProfile} onChange={e => setProfile(e.target.value)} placeholder="이미지 경로를 입력해주세요."/>
        </div>
        <div>
          <label htmlFor="name">이름</label>
          <input type="text" name="name" value={isName} onChange={e => setName(e.target.value)} placeholder="이름을 입력해주세요."/>
        </div>
        <div>
          <label htmlFor="gender">성별</label>
          <input type="text" name="gender" value={isGender} onChange={e => setGender(e.target.value)} placeholder="성별을 입력해주세요."/>
        </div>
        <div>
          <label htmlFor="age">나이</label>
          <input type="text" name="age" value={isAge} onChange={e => setAge(e.target.value)} placeholder="나이를 입력해주세요."/>
        </div>
        <div>
          <label htmlFor="weight">체중</label>
          <input type="text" name="weight" value={isWeight} onChange={e => setWeight(e.target.value)} placeholder="체중을 입력해주세요."/>
        </div>
        <div>
          <label htmlFor="normal">보통</label>
          <input type="checkbox" name="status" value="보통" onChange={e => setStatus(e.target.value)}/>
          <label htmlFor="fat">비만</label>
          <input type="checkbox" name="status" value="비만" onChange={e => setStatus(e.target.value)}/>
          <label htmlFor="die">사망</label>
          <input type="checkbox" name="status" value="사망" onChange={e => setStatus(e.target.value)}/>
        </div>
      </form>
      
      <button onClick={createCat}>만들기</button>
      <button onClick={() => navigate('/')}>취소</button>
    </div>
  )
}

export default CatCreate