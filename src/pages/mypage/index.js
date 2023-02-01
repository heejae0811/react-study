import {useAuth} from '../../hooks/useAuth'
import './index.scss'

function MyPage() {
  const [userList, loginValue] = useAuth()
  const loginAccess = (loginValue.loginUser[0].isAdmin).toString()

  // map을 사용할 때 줄여서 사용 X (i, key) 라이브러리를 만들 경우 O
  // item, list가 보편적이지만 값이 분명한 경우, 그 값의 이름을 작성하는 것이 좋다.
  return (
    <div className="my-page">
      {
        loginValue.loginUser.map((loginUser, key) => (
          <div key={`loginUser-${key}`}>
            <h2>{loginUser.name}님 환영합니다.</h2>
            <p>아이디: {loginUser.loginId}</p>
            <p>패스워드: {loginUser.password}</p>
            <p>전화번호: {loginUser.phoneNumber}</p>
            <p>권한: {loginAccess}</p>
            <p>토큰: {loginUser.accessToken}</p>
            {
              loginUser.abilities.map((ability, key) => (
                <div key={`abilities-${key}`}>
                  <p>권한: {ability.action} / {ability.permission}</p>
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default MyPage
