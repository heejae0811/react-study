import {useUserState} from '../../context/UserContext'
import './index.scss'

function MyPage() {
  const {user, userData} = useUserState()
  const loginUser = userData.filter(list => list.loginId === user.loginId)
  const isLogin = (userData[0].isAdmin).toString()

  return (
    <div className="my-page">
      {
        loginUser.map((item, key) => (
          <div key={`loginUser-${key}`}>
            <h2>{item.name}님 환영합니다.</h2>
            <p>아이디: {item.loginId}</p>
            <p>패스워드: {item.password}</p>
            <p>전화번호: {item.phoneNumber}</p>
            <p>권한: {isLogin}</p>
            <p>토큰: {item.accessToken}</p>
            {
              item.abilities.map((item, key) => (
                <div key={`abilities-${key}`}>
                  <p>권한: {item.action} / {item.permission}</p>
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
