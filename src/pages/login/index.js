import React, {useCallback} from 'react'
import {useAuth} from '../../hooks/useAuth'
import useInput from '../../hooks/useInput'
import './index.scss'

function LoginPage() {
  const [userList, loginValue, isLogin] = useAuth()
  // id의 경우 백앤드에서 예약어로 쓸 경우가 많기 때문에 loginId처럼 다른 네이밍으로 한다.
  const [loginId, onChangeId, resetId] = useInput('')
  const [loginPassword, onChangePwd, resetPassword] = useInput('')
  
  // TODO :: reset 안됨
  const onReset = useCallback(() => {
    resetId('')
    resetPassword('')
  }, [resetId, resetPassword])

  const onLogin = () => {
    const loginUser = userList.filter(user => user.loginId === loginId && user.password === loginPassword)

    if (!loginId || !loginPassword) {
      alert('아이디 또는 비밀번호를 입력해주세요.')
    } else if (loginUser.length === 0) {
      alert('아이디 또는 비밀번호가 틀렸습니다.')
    } else if (loginUser[0].isAdmin === false) {
      alert('로그인 권한이 없습니다.')
    } else {
      isLogin()
      onReset()
      loginValue.setLoginUser(loginUser)
    }
  }

  return (
    <div className="login-page">
      {
        loginValue.login ? (
          <>
            <h1>로그인에 성공했습니다! :)</h1>
          </>
        ) : (
          <>
            <h4>아이디 = test, 비밀번호 = 123</h4>
            <h4>아이디 = sticker, 비밀번호 = 123123 (false)</h4>

            <div>
              <label htmlFor="userId">아이디</label>
              <input type="text" id="userId" value={loginId} onChange={onChangeId} placeholder="아이디를 입력해주세요." required/>
            </div>

            <div>
              <label htmlFor="userPassword">비밀번호</label>
              <input type="text" id="userPassword" value={loginPassword} onChange={onChangePwd} placeholder="비밀번호를 입력해주세요." required/>
            </div>

            <button type="submit" value="로그인" onClick={onLogin}>확인</button>
          </>
        )
      }
    </div>
  )
}

export default LoginPage