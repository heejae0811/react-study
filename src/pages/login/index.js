import {useState} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogin} from '../../redux/user'
import Button from '../../component/Button'
import './index.scss'

function Login() {
  const [isId, setId] = useState('')
  const [isPassword, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)
  const loginUser = useSelector(state => state.user.loginUser)

  const onLogin = () => {
    const userId = users.filter(user => user.loginId === isId)
    const userPw = users.filter(user => user.password === isPassword)

    if (isId === '') {
      alert('아이디를 입력해주세요.')
    } else if (isPassword === '') {
      alert('비밀번호를 입력해주세요.')
    } else if (userId.length === 0) {
      alert('아이디가 틀렸습니다.')
    } else if (userPw.length === 0) {
      alert('비밀번호가 틀렸습니다.')
    } else {
      dispatch(handleLogin({
        loginId: isId,
        password: isPassword
      }))
      alert('로그인 되었습니다.')
      navigate('/catList')
    }
  }

  return (
    <div className="login inner">
      {
        loginUser === null ? (
          <>
            <h1>LOGIN</h1>
            <h4>아이디 = test, 비밀번호 = 123</h4>
            <h4>아이디 = sticker, 비밀번호 = 111</h4>

            <form>
              <div>
                <p>ID</p>
                <label>
                  <input type="text" value={isId} onChange={e => setId(e.target.value)} placeholder="아이디를 입력해주세요."/>
                </label>
              </div>

              <div>
                <p>PASSWORD</p>
                <label>
                  <input type="password" value={isPassword} onChange={e => setPassword(e.target.value)}
                         placeholder="비밀번호를 입력해주세요."/>
                </label>
              </div>
            </form>

            <Button maxWidth="300" bgColor="#f6b352" onClick={onLogin}>Login</Button>
          </>
        ) : (
          <>
            <h1>로그인에 성공했습니다.</h1>
            <Button onClick={() => navigate('/catList')} maxWidth="300" bgColor="#f6b352">Go to Cat List</Button>
          </>
        )
      }
    </div>
  )
}

export default Login