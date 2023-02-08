import {useState, useEffect} from 'react'
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
  const loginUser = useSelector(state => state.user.loginUser)

  const onLogin = () => {
    if (isId === '') {
      alert('아이디를 입력해주세요.')
    } else if (isPassword === '') {
      alert('비밀번호를 입력해주세요.')
    } else {
      dispatch(handleLogin({
        loginId: isId,
        password: isPassword
      }))
    }
  }

  // TODO :: 아이디, 비밀번호 틀렸을 때 alert
  useEffect(() => {
    if (loginUser !== null) {
      alert('로그인인 되었습니다.')
      navigate('/catList')
    } else {
      // alert('아이디 또는 비밀번호가 틀렸습니다.')
    }
  }, [loginUser])

  return (
    <div className="login inner">
      <h1>LOGIN</h1>
      <h4>아이디 = test, 비밀번호 = 123</h4>
      <h4>아이디 = sticker, 비밀번호 = 123</h4>

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
    </div>
  )
}

export default Login