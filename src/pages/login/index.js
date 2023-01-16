import React, {useCallback} from 'react'
import {useAuth} from '../../hooks/useAuth'
import useInput from '../../hooks/useInput'
import './index.scss'

function LoginPage() {
  const [value, userList, isLogin] = useAuth()
  const [id, onChangeId, resetId] = useInput('')
  const [pwd, onChangePwd, resetPwd] = useInput('')

  const onReset = useCallback(() => {
    resetId('')
    resetPwd('')
  }, [resetId, resetPwd])

  const onLogin = () => {
    const user = userList.filter(list => list.loginId === id && list.password === pwd)

    if (!id || !pwd) {
      alert('아이디 또는 비밀번호를 입력해주세요.')
    } else if (user.length === 0) {
      alert('아이디 또는 비밀번호가 틀렸습니다.')
    } else if (user[0].isAdmin === false) {
      alert('로그인 권한이 없습니다.')
    } else {
      isLogin()
      onReset()
      value.setLoginUser(user)
    }
  }

  return (
    <div className="login-page">
      <h4>아이디 = test, 비밀번호 = 123</h4>
      <h4>아이디 = sticker, 비밀번호 = 123123123 (false)</h4>

      <div>
        <label htmlFor="user_id">아이디</label>
        <input type="text" id="user_id" value={id} onChange={onChangeId} placeholder="아이디를 입력해주세요." required/>
      </div>

      <div>
        <label htmlFor="user_pwd">비밀번호</label>
        <input type="text" id="user_pwd" value={pwd} onChange={onChangePwd} placeholder="비밀번호를 입력해주세요." required/>
      </div>

      <button type="submit" value="로그인" onClick={onLogin}>확인</button>
    </div>
  )
}

export default LoginPage