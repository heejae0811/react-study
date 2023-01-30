import {useState} from 'react'
import './index.scss'

function MyPage() {
  const [login, setLogin] = useState(
    () => JSON.parse(window.localStorage.getItem('login'))
  )
  const loginAccess = (login[0].isAdmin).toString()

  // map을 사용할 때 줄여서 사용 X (i, key) 라이브러리를 만들 경우 O
  // item, list가 보편적이지만 값이 분명한 경우, 그 값의 이름을 작성하는 것이 좋다.
  return (
    <div className="my-page">
      {
        <div>
          <h2>{login[0].name}님 환영합니다.</h2>
          <p>아이디: {login[0].loginId}</p>
          <p>패스워드: {login[0].password}</p>
          <p>전화번호: {login[0].phoneNumber}</p>
          <p>권한: {loginAccess}</p>
          <p>토큰: {login[0].accessToken}</p>
          {
            login[0].abilities.map((ability, key) => (
              <div key={`abilities-${key}`}>
                <p>권한: {ability.action} / {ability.permission}</p>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default MyPage
