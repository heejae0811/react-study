import {useUserState} from '../../context/UserContext'
import './index.scss'

function MyPage() {
  const {user, userData} = useUserState()
  const loginUser = userData.filter(list => list.loginId === user.loginId)

  // console.log(user)
  // console.log(userData)
  // console.log(loginUser)

  return (
    <div className="my-page">
      {
        loginUser.map((item, key) => (
          <div key={`loginUser-${key}`}>
            <h2>{item.loginId}님 환영합니다.</h2>
            <p>이름: {item.name}</p>
            <p>전화번호: {item.phoneNumber}</p>
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
