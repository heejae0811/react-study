import React from 'react'
import useAuth from '../../hooks/useAuth'
import {useUserDispatch, useUserState} from '../../context/UserContext'
import './index.scss'

function LoginPage() {
  const {userData, user} = useUserState()
  const dispatch = useUserDispatch()

  const [id, onChangeId, setId] = useAuth('')
  const [pwd, onChangePwd, setPwd] = useAuth('')

  const onLogin = () => {
    const user = userData.filter(list => list.loginId === id && list.password === pwd)

    if (!id || !pwd) {
      alert('아이디 또는 비밀번호를 입력해주세요.')
    } else if (user.length === 0) {
      alert('아이디 또는 비밀번호가 틀렸습니다.')
    } else {
      alert('로그인 되었습니다.')
      dispatch({
        type: 'LOGIN',
        userId: id
      })
    }
  }

  return (
    <div className="login-page">
      {
        user ? (
          <div>sdf</div>

        ) : (
          <>
            <h4>아이디 = test, 비밀번호 = 123</h4>

            <div>
              <label htmlFor="user_id">아이디</label>
              <input type="text" id="user_id" value={id} onChange={onChangeId} placeholder="아이디를 입력해주세요." required/>
            </div>

            <div>
              <label htmlFor="user_pwd">비밀번호</label>
              <input type="text" id="user_pwd" value={pwd} onChange={onChangePwd} placeholder="비밀번호를 입력해주세요." required/>
            </div>

            <button type="submit" value="로그인" onClick={onLogin}>확인</button>
          </>
        )
      }

    </div>
  )
}

export default LoginPage