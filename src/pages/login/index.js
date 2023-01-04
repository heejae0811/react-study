// Login.jsx
import React, {useCallback, useState} from 'react'
import useAuth from '../../hooks/useAuth'
import {useUserDispatch, useUserState} from '../../context/UserContext'

function LoginPage() {
  const [id, onChangeId, setId] = useAuth('')
  const [pwd, onChangePwd, setPwd] = useAuth('')

  const onReset = useCallback(() => {
    setId('')
    setPwd('')
  }, [setId, setPwd])

  const onLogin = () => {
    if (!id || !pwd) {
      alert('모든 값을 정확하게 입력해주세요')
      return
    }

    alert('로그인')
    onReset()

    dispatch({
      type: 'LOGIN',
      userId: id
    })
  }

  const {userList} = useUserState()
  const dispatch = useUserDispatch()

  return (
    <div className="login-page">
      <label htmlFor="user_id">아이디 : </label>
      <input type="text" id="user_id" value={id} onChange={onChangeId} placeholder="아이디를 입력해주세요." required/>

      <label htmlFor="user_pwd">비밀번호 : </label>
      <input type="text" id="user_pwd" value={pwd} onChange={onChangePwd} placeholder="비밀번호를 입력해주세요." required/>

      <button type="submit" value="로그인" onClick={onLogin}>확인</button>
    </div>
  )
}

export default LoginPage