import {useState} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleCreatedCat} from '../../redux/cat'
import './index.scss'
import Access from '../access'

const CatCreate = () => {
  const [isProfile, setProfile] = useState('')
  const [isName, setName] = useState('')
  const [isAge, setAge] = useState('')
  const [isWeight, setWeight] = useState('')
  const [isStatus, setStatus] = useState('')
  const [isGender, setGender] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginUser = useSelector(state => state.user.loginUser)

  const createCat = () => {
    const createCat = {
      profileImage: isProfile,
      name: isName,
      age: isAge,
      weight: isWeight,
      status: isStatus,
      gender: isGender,
      history: []
    }

    if (isProfile === '') {
      alert('이미지 경로를 입력해주세요.')
    } else if (isName === '') {
      alert('이름을 입력해주세요.')
    } else if (isAge === '') {
      alert('나이를 입력해주세요.')
    } else if (isWeight === '') {
      alert('체중을 입력해주세요.')
    } else if (isStatus === '') {
      alert('상태를 선택해주세요.')
    } else if (isGender === '') {
      alert('성별을 선택해주세요.')
    } else {
      dispatch(handleCreatedCat(createCat))
      navigate('/catList')
    }
  }

  return (
    <div className="cat-create">
      {
        loginUser !== null ? (
          <>
            <h1>CAT CREATE</h1>

            <form>
              <div>
                <p>Image</p>
                <label>
                  <input type="text" name="image" value={isProfile} onChange={e => setProfile(e.target.value)}
                         placeholder="이미지 경로를 입력해주세요."/>
                </label>
              </div>

              <div>
                <p>Name</p>
                <label>
                  <input type="text" name="name" value={isName} onChange={e => setName(e.target.value)}
                         placeholder="이름을 입력해주세요."/>
                </label>
              </div>

              <div>
                <p>Age</p>
                <label>
                  <input type="number" name="age" value={isAge} onChange={e => setAge(e.target.value)}
                         placeholder="나이를 입력해주세요."/>
                </label>
              </div>

              <div>
                <p>Weight</p>
                <label>
                  <input type="number" name="weight" value={isWeight} onChange={e => setWeight(e.target.value)}
                         placeholder="체중을 입력해주세요."/>
                </label>
              </div>

              <div>
                <p>Status</p>
                <label>
                  <input type="radio" name="status" value="Normal" onChange={e => setStatus(e.target.value)}/>
                  Normal
                </label>
                <label>
                  <input type="radio" name="status" value="Fat" onChange={e => setStatus(e.target.value)}/>
                  Fat
                </label>
                <label>
                  <input type="radio" name="status" value="Die" onChange={e => setStatus(e.target.value)}/>
                  Die
                </label>
              </div>

              <div>
                <p>Gender</p>
                <label>
                  <input type="radio" name="gender" value="Male" onChange={e => setGender(e.target.value)}/>
                  Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" onChange={e => setGender(e.target.value)}/>
                  Female
                </label>
              </div>

              <div>
                <button onClick={createCat}>Create</button>
                <button onClick={() => navigate('/catList')}>Cancel</button>
              </div>
            </form>
          </>
        ) : (
          <Access/>
        )
      }
    </div>
  )
}

export default CatCreate