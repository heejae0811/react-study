import {useState, useRef} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import {handleCreatedCat} from '../../redux/cat'
import Button from '../../component/Button'
import './index.scss'

const CatCreate = () => {
  const [isProfile, setProfile] = useState('')
  const [isName, setName] = useState('')
  const [isAge, setAge] = useState('')
  const [isWeight, setWeight] = useState('')
  const [isStatus, setStatus] = useState('')
  const [isGender, setGender] = useState('')

  const fileInputRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const uploadImage = (e) => {
    const fileList = e.target.files

    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0])

      setProfile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5)
      })
    }
  }

  const createCat = () => {
    const createCat = {
      profileImage: isProfile.thumbnail,
      name: isName,
      age: Number(isAge),
      weight: Number(isWeight),
      status: isStatus,
      gender: isGender,
      history: []
    }

    if (isProfile === '') {
      alert('이미지를 등록해주세요.')
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
      <h1>CAT CREATE</h1>

      <form>
        <div>
          <p>Image</p>
          {
            isProfile === '' ? (
              <>
              </>
            ) : (
              <>
                <img src={isProfile.thumbnail} alt=""/>
              </>
            )
          }
          <label>
            <input type="file" name="image" accept="image/jpg, image/jpeg, image/png" ref={fileInputRef}
                   onChange={uploadImage}/>
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
      </form>

      <div>
        <Button onClick={createCat} maxWidth="135" bgColor="#f6b352">Create</Button>
        <Button onClick={() => navigate('/catList')} maxWidth="135" bgColor="#1f2124">Cancel</Button>
      </div>
    </div>
  )
}

export default CatCreate