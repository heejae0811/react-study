import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {handleLogin} from '../../redux/user'
import './index.scss'

function Login() {
  const [isId, setId] = useState('')
  const [isPassword, setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const loginUser = useSelector(state => state.user.loginUser)

  console.log(user)

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

  useEffect(() => {
    if (loginUser !== null) {
      navigate('/catList')
    }
  }, [loginUser])

  return (
    <div className="login inner">
      <h1>LOGIN</h1>
      <h4>아이디 = test, 비밀번호 = 123</h4>
      <h4>아이디 = sticker, 비밀번호 = 123 (false)</h4>

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
            <input type="text" value={isPassword} onChange={e => setPassword(e.target.value)}
                   placeholder="비밀번호를 입력해주세요."/>
          </label>
        </div>

        <button onClick={() => onLogin()}>확인</button>
      </form>

      {/*<div>*/}
      {/*  <label htmlFor="userId">아이디</label>*/}
      {/*  <input type="text" id="userId" value={loginId} onChange={onChangeId} placeholder="아이디를 입력해주세요." required/>*/}
      {/*</div>*/}

      {/*<div>*/}
      {/*  <label htmlFor="userPassword">비밀번호</label>*/}
      {/*  <input type="text" id="userPassword" value={loginPassword} onChange={onChangePwd}*/}
      {/*         placeholder="비밀번호를 입력해주세요." required/>*/}
      {/*</div>*/}

      {/*<button type="submit" value="로그인" onClick={onLogin}>확인</button>*/}
    </div>
  )
}

export default Login